import React from 'react'
import Project from '../../molecules/ProjectList/Project'
const ProjectList = ({ projects }) => {
    return (
        <div className="lg:px-0 mt-[80px] lg:mt-[140px] pb-[140px] flex flex-col justify-center ">
            <div className="flex flex-row justify-between">
                <p className="text-[40px] leading-[40px] tracking-[-1.14px] lg:tracking-[-2.5px] lg:text-[88px] font-[700] lg:leading-[88px]">Projects</p>
                {/* Desktop */}
                <a className="hidden lg:block h-[2rem] uppercase leading-[26px] font-[700] tracking-[2.29px] hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in" href="">contact me</a>
                {/* Mobile */}
                <a className="flex items-center lg:hidden uppercase leading-[26px] font-[700] tracking-[2.29px] !decoration-[#4EE1A0] underline-offset-[0.5rem] underline " href="">contact me</a>
            </div>

            <div className="mt-[40px] lg:mt-[80px] flex flex-row flex-wrap justify-between">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        technologies={project.technologies}
                        src={project.src}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList