import style from "./Main.module.css"
import styleContainer from "./../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi there</span>
                <h1>I am Nikolay Lim</h1>
                <p1>Frontend Developer.</p1>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
