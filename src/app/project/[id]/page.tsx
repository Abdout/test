'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
}

interface Params {
  id: string;
}

const ProjectDetails = ({ params }: { params: Params }) => {
  const { id } = params;
  console.log('ID:', id); // Debugging statement

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/project/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Data:', data); // Debugging statement
          if (data) {
            setProject(data.project);
          } else {
            console.error('Empty response from server');
          }
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link href={`/project/${id}/itp`}>ITP</Link>
        </li>
        <li>
          <Link href={`/project/${id}/MOS`}>MOS</Link>
        </li>
        <li>
          <Link href={`/project/${id}/Plan`}>Plan</Link>
        </li>
        <li>
          <Link href={`/project/${id}/Report`}>Report</Link>
        </li>
      </ul>
    </nav>
    <h1 className='bg-black'>Project Details</h1>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
  </div>
  );
};

export default ProjectDetails;