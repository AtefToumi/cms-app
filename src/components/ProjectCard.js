import Image from "next/image";

export default function ProjectCard({ title, description, image, date }) {
  return (
    <div className="project-card">
      <Image src={image} width={500} height={300} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
}
