import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"lias architecto beatas possimus provident quas repellat rt,!"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing el "}/>
                    <Skill title={"JS"} description={"e dolore dolorem et eum harum, impedit inventore ipsam optiondi"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
