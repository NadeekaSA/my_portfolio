import { Repo } from "@/lib/github";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className="border border-gray-800 rounded-xl p-4 sm:p-5 hover:border-blue-500 transition"
    >
      <h3 className="font-semibold text-base sm:text-lg mb-2">{repo.name}</h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-3">
        {repo.description || "No description provided"}
      </p>
      <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500 gap-1 sm:gap-0">
        <span>{repo.language}</span>
        <span>⭐ {repo.stargazers_count}</span>
      </div>
    </a>
  );
}