import { useState } from "react";
import { Link } from "react-router-dom";
import projectsList from "../../data/projects.js"

const Works = () => {

      const [projects, setProjects] = useState(projectsList)

    return (
        <>
        <div className="containerWork">
            <h1 className="title">Au fil des années, nous avons pu accompagner les meilleurs.</h1>
            <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
            <div className="containerProject">
            {projects.map(project => (
               <div className="card">
               <div className="card-body">
                 <h5 className="card-title"> <p key={project.id}>{project.name} </p></h5>
                 <Link className="underline" to={`/works/${project.name.replace(/ /g, "-")}-study-case`}>Clique ici pour en voir plus !</Link>
               </div>
             </div>
    
          ))}
          </div>
        </div>
        </>
    );
};

export default Works;