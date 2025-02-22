import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectCard from "../components/ProjectCard";

export default function Home({ projects }) {
  return (
    <div>
      <h1>Student Organization Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      date: data.date ? new Date(data.date).toISOString() : null, // Convert date to string
    };
  });

  return { props: { projects } };
}
