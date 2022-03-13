import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Project from "./project/Project";



const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"TodoList"} description={"lias architecto beatas possimus provident quas repellat rt,!"}/>
                    <Project title={"Social Network"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing el "}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
