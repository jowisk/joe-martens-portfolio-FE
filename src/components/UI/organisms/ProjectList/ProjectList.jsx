import { React, useEffect, useState, useContext } from 'react'
import Project from '../../molecules/ProjectList/Project'
import AddProject from './AddProject'
import { AuthContext } from '../../../../context/AuthContext'
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../API/firebase'

const ProjectList = ({ isEditing, setIsEditing }) => {

    const {isAuthenticated} = useContext(AuthContext)

    const [updateEffect, setUpdateEffect] = useState(true)

    const [projects, setProjects] = useState()
    const [loading, setLoading] = useState()

    const editHandler = () => {
        setIsEditing(!isEditing)
    }

    
    useEffect(() => { 
        onSnapshot(collection(db, "projects"), (querySnapshot) => {
            const responseArr = [];
            querySnapshot.forEach((doc) => {
                responseArr.push(doc.data());
            }); setProjects(responseArr);
        });
    }, []);
    



    return (
        <>
            <article className="px-[16px] md:px-[165px] min-[500px]:pb-[200px] pb-[140px] flex flex-col justify-center">
                
                {isAuthenticated && <a className="hidden lg:flex w-[275px] h-[2rem] uppercase leading-[26px] font-[700] tracking-[2.29px] hover:text-[#4EE1A0] transition duration-300 hover:ease-in" onClick={editHandler}>add or remove projects...</a>}
                {
                    isEditing && 
                        <AddProject 
                            editHandler={editHandler} 
                            setIsEditing={setIsEditing}
                            setProjects={setProjects}
                            projects={projects}
                        />
                }
                
                <div className="flex flex-row justify-between">
                    <p className="text-[40px] leading-[40px] tracking-[-1.14px] lg:tracking-[-2.5px] lg:text-[88px] font-[700] lg:leading-[88px]">Projects</p>
                    {/* Desktop */}
                    <a className="hidden lg:block h-[2rem] uppercase leading-[26px] font-[700] tracking-[2.29px] hover-underline-animation hover:text-[#4EE1A0] transition duration-300 hover:ease-in" href="#contact">contact me</a>
                    {/* Mobile */}
                    <a className="flex items-center lg:hidden uppercase leading-[26px] font-[700] tracking-[2.29px] !decoration-[#4EE1A0] underline-offset-[0.5rem] underline " href="#contact">contact me</a>
                </div>

                
                {projects?.length != 0  ? <div className="mt-[40px] lg:mt-[80px] max-[325px]:max-w-[270px]  lg:justify-between justify-center flex flex-row flex-wrap">
                    {projects?.map((project, index) => (
                        <Project
                            isEditing={isEditing}
                            key={index}
                            uuid={project.uid}
                            name={project.projectName}
                            technologies={project.technologies}
                            src={project.src}
                            deploy={project.deploy}
                            git={project.git}
                            img={project.img}
                            projects={projects}
                            setProjects={setProjects}
                        />
                    ))}
                </div> : <p className="w-full text-center text-[50px] mt-[40px]">Nothing to see here... yet</p>}
            </article>
        </>
    )
}

export default ProjectList