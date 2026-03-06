"use client";

import { useEffect, useState } from "react";
import { Repo } from "@/lib/github";
import RepoCard from "./RepoCard";

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/NadeekaSA/repos?per_page=100&sort=updated")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repos");
        return res.json();
      })
      .then((data) => {
        setRepos(data.filter((repo: any) => !repo.fork));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      {loading && (
        <p className="text-gray-400 text-sm">Loading projects...</p>
      )}
      {error && (
        <p className="text-red-400 text-sm">
          Failed to load projects. Please try again later.
        </p>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
}
