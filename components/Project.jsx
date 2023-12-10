import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Taskaru",
        description: "This is a project.",
        image: "/project/Taskaru.png",
        gitUrl: "https://apubcc-taskaru.vercel.app/"

    },
    {
        id: 2,
        title: "Coming Soon",
        description: "Stay Tuned.",
        image: "/project/comingsoon.png",
        gitUrl: ""
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "Stay Tuned.",
        image: "/project/comingsoon.png",
        gitUrl: ""
    },
    {
        id: 4,
        title: "Coming Soon",
        description: "Stay Tuned.",
        image: "/project/comingsoon.png",
        gitUrl: ""
    }, 
    {
        id: 5,
        title: "Coming Soon",
        description: "Stay Tuned.",
        image: "/project/comingsoon.png",
        gitUrl: ""
    }, 
    {
        id: 6,
        title: "Coming Soon",
        description: "Stay Tuned.",
        image: "/project/comingsoon.png",
        gitUrl: ""
    }, 

];

const Project = () => {
    return (
        <div id="project">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Project;