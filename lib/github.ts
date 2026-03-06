export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
};

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/NadeekaSA/repos?per_page=100&sort=updated"
  );

  if (!res.ok) throw new Error("Failed to fetch repos");

  const data = await res.json();

  return data.filter((repo: any) => !repo.fork);
}