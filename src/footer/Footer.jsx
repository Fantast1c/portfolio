import style from "./Footer.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import Web from "./web/Web";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Lim Nikolay</h2>
                <div className={style.webs}>
<Web />
                </div>
                <span>©2021 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
