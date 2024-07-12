import { projects } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="border-b-2 py-8">
      <h1 className="text-4xl capitalize font-bold text-txtPrimary">
        Projects
      </h1>
      {/* Project */}
      <div className="max-w-7xl mx-auto">
        {projects.map((project, _) => (
          <div key={project.name}>
            <h1 className="text-txtPrimary font-bold text-xl text-center">
              {project.name}
            </h1>
            <div className="flex my-6">
              <div className="shadow-lg border rounded-md relative overflow-hidden hover:opacity-80 transition-all ease-in-out duration-300">
                <Link href={project.gitLink} target="_blank">
                  <Image
                    src={project.img}
                    alt="my-project"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center animate-pulse mx-8">
                  <span className="w-4 h-4 rounded-l-full bg-sky-500 block"></span>
                  <span className="w-10 h-1 bg-sky-500 block"></span>
                  <span className="w-4 h-4 rounded-r-full bg-sky-500 block"></span>
                </div>
                <div className="h-[300px] w-[600px] shadow-lg border rounded-md relative overflow-hidden p-4 leading-8 text-txtPrimary">
                  <p className="truncate text-[16px]">
                    <strong>Technologies: </strong>{' '}
                    <span className="font-medium">{project.technology}</span>
                  </p>
                  <p className="truncate text-[16px]">
                    <strong>Role: </strong>{' '}
                    <span className="font-medium">{project.role}</span>
                  </p>
                  <div className="truncate text-[16px]">
                    <strong>Description: </strong>
                    <ul className="px-6 leading-8 mt-2">
                      {project.description.map((item, idx) => (
                        <li key={item} className="truncate">
                          ✅ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="truncate text-[16px]">
                    <strong>Link github: </strong>{' '}
                    <Link href={project.gitLink} target="_blank">
                      <span className="font-semibold text-sky-500 hover:opacity-90">
                        Click here
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
