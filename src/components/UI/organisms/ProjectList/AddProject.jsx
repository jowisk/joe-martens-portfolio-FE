import { React, useState, useEffect, useContext } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { v4 } from 'uuid'
import { db, storage } from '../../../../API/firebase'
import Project from '../../molecules/ProjectList/Project'
import cross from '../../../assets/images/x-icon.svg'
import { AuthContext } from '../../../../context/AuthContext'

const AddProject = ({ editHandler, setProjects, projects }) => {

    

    const [uniqueId, setUniqueId] = useState('')
    const [name, setName] = useState('')
    const [technologies, setTechnologies] = useState([])
    const [deploy, setDeploy] = useState('')
    const [git, setGit] = useState('')

    const [err, setErr] = useState(false)
    
    const [isValidUniqueId, setIsValidUniqueId] = useState(false)
    const [isValidName, setIsValidName] = useState(false)
    const [areValidTechnologies, setAreValidTechnologies] = useState(false)
    const [isValidImg, setIsValidImg] = useState(false)
    const [isValidDeploy, setIsValidDeploy] = useState(false)
    const [isValidGit, setIsValidGit] = useState(false)

    const [preview, setPreview] = useState('')
    const [src, setSrc] = useState('')

    const onChangeNameHandler = (e) => {
        setName(e.target.value)
        setIsValidName(e.target.value != null && e.target.value.length != 0)
    }

    const onChangeTechnologiesHandler = (e) => {
        setTechnologies(e.target.value.split(","))
        setAreValidTechnologies(e.target.value != null && e.target.value.length != 0)
    }

    const onChangeSrcHandler = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setSrc(e.target.files[0])
    }

    const onChangeDeployHandler = (e) => {
        setDeploy(e.target.value)
        setIsValidDeploy(e.target.value != null && e.target.value.length != 0)
    }

    const onChangeGitHandler = (e) => {
        setGit(e.target.value)
        setIsValidGit(e.target.value != null && e.target.value.length != 0)
    }

    const uploadImage = async () => {
        const srcRef = ref(storage, `images/${uniqueId}`)
        const snapshot = await uploadBytes(srcRef, src)
        const url = await getDownloadURL(snapshot.ref)
        return url
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try{
            const newProj = {
                uid: uniqueId,
                projectName: name,
                technologies: technologies,
                img: await uploadImage(),
                deploy: deploy,
                git: git,
            }
            await setDoc(doc(db, 'projects', name), newProj)
        }catch(e){
            setErr(true)
        }
    }    

    useEffect(() => {
        setUniqueId(v4())
        setIsValidUniqueId(uniqueId != null && uniqueId.length != 0)
    }, [])

    return (
        <div className="pb-[140px] hidden lg:flex flex-col justify-center">

            <form onSubmit={submitHandler} className="flex flex-col">
                <div className="flex flex-wrap justify-between">
                    <input onChange={onChangeNameHandler} className="outline-0 w-[47%] pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="PROJECT NAME" /> 
                    <input onChange={onChangeTechnologiesHandler} className="outline-0 w-[47%] pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="TECHNOLOGIES USED (USE COMMA TO SEPARATE)" />
                    <input onChange={onChangeDeployHandler} className="outline-0 w-[47%] pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="DEPLOY SITE" />
                    <input onChange={onChangeGitHandler} className="outline-0 w-[47%] pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424]" type="text" placeholder="GITHUB REPOSITORY" />
                    <div className="outline-0 w-[47%] pl-[24px] py-[16px] mt-[16px] border-b-[1px] border-white bg-[#242424] flex items-center justify-between">
                        <input onChange={onChangeSrcHandler} className="outline-0 border-white bg-[#242424]" type="file" placeholder="IMG SRC" />
                        {preview != null ? <img src={cross} className="h-[30px]" onClick={() => {setPreview('')} }/> : null}
                    </div>
                
                </div>

                <div className="flex flex-col items-center w-full">
                    <p className="text-center hidden lg:flex h-[2rem] uppercase text-[25px] leading-[26px] font-[700] tracking-[2.29px] hover:text-[#4EE1A0] transition duration-300 hover:ease-in my-[50px]">↓ project preview ↓</p>
                    {err && <div>something went wrong</div>}
                    {<Project
                        name={name}
                        technologies={technologies}
                        src={src}
                        deploy={deploy}
                        git={git}
                        preview={preview}
                    />}
                </div>

                <button className="leading-[26px] tracking-[2.29px] font-[700] text-[40px] mt-[32px] hover:text-red-500 transition duration-300 hover:ease-in shake" type="submit">UPLOAD</button>

            </form>
        </div>
    )
}

export default AddProject