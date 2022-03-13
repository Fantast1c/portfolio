import style from "./Project.module.css"
import styleButton from "./../../common/styles/Button.module.css"

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
<button className={styleButton.button}>view</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;
