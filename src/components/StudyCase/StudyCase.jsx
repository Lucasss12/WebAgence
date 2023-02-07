import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsList from "../../data/projects";

const StudyCase = () => {
    const { projectname } = useParams();
    const [showProject, setShowProject] = useState(undefined);
   
    useEffect(() => {
        const foundProject = projectsList.find((project) => project.name === projectname);
        setShowProject(foundProject); 
    }, [projectname]);

    return(
    <div>
        {showProject && (
            <>
                <p>{showProject.name}</p>
                <p>{showProject.title}</p>
                <p>{showProject.body}</p>
            </>
        )}
    </div>
    );
};

export default StudyCase;