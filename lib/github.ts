import { siteConfig } from "./site";

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage?: string | null;
  topics?: string[];
  stargazers_count?: number;
  fork?: boolean;
  videoUrl?: string;
  technologies?: string[];
};

// Live URLs for specific repositories
const liveUrls: Record<string, string> = {
  "SmartStockManager": "https://smart-stock-manager-suiw.vercel.app",
};

// Video URLs for specific repositories
const videoUrls: Record<string, string> = {
  // Updated to compressed filename placed in /public
  "SmartStockManager": "/Smart Stock Managercompressed.mp4",
};

// Custom descriptions for specific repositories
const customDescriptions: Record<string, string> = {
  "SmartStockManager": "Visualize your inventory, predict restocks, and monitor earnings – all in one place. Built with modern web technologies for efficient business management.",
  "RoboServe": "A Flutter-based delivery and order management app integrated with a Bluetooth-enabled robot for automated service and restaurant operations.",
  "RoboServe-Backend": "Node.js server backend for the RoboServe mobile app, handling order management, robot communication, and business logic.",
  "Schema-Matching": "A lightweight demo for schema matching and schema patching across structured datasets, built with Python for data integration workflows.",
  "Ignition_zone": "Vehicle Catalog Website - A full-stack web application built with HTML, CSS, JavaScript, and PHP that allows clients to browse a catalog of vehicles, including cars and motorcycles.",
};

// Technologies used in specific repositories
const projectTechnologies: Record<string, string[]> = {
  "SmartStockManager": [ "Next.js 15", "Tailwind CSS", "TypeScript", "Prisma", "MySQL", "Vercel","CI/CD pipeline","Playwright"],
  "RoboServe": ["Flutter", "Dart", "Bluetooth", "Mobile App", "IoT"],
  "RoboServe-Backend": ["Node.js", "Express.js", "REST API", "MySQL", "Bluetooth"],
  "Schema-Matching": ["Python", "Data Processing", "Schema Integration"],
  "Ignition_zone": ["HTML", "CSS", "JavaScript", "PHP", "Full-stack", "Vehicle Catalog"],
  "Task-Management-System-": ["Spring Boot", "Postman", "Java", "Backend"],
};

export async function fetchGithubRepos(): Promise<Repo[]> {
  const username = siteConfig.githubUsername;
  if (!username) return [];

  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    // Revalidate server-side every 12 hours
    next: { revalidate: 43200 },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];

  // Filter out forks and archived repos; sort by stargazers desc
  const filtered = data.filter((r) => !r.fork);
  
  // Add live URLs, video URLs, custom descriptions, and technologies for known repos
  filtered.forEach((repo) => {
    if (liveUrls[repo.name]) {
      repo.homepage = liveUrls[repo.name];
    }
    if (videoUrls[repo.name]) {
      repo.videoUrl = videoUrls[repo.name];
    }
    if (customDescriptions[repo.name]) {
      repo.description = customDescriptions[repo.name];
    }
    if (projectTechnologies[repo.name]) {
      repo.technologies = projectTechnologies[repo.name];
    }
  });
  
  filtered.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
  return filtered;
}


