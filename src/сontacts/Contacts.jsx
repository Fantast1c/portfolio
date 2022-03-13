import style from "./Contacts.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import styleButton from "./../common/styles/Button.module.css"

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <h2 className={style.title}>Contacts</h2>
                    <div className={style.forms}>
                        <input type="name" id="name" name="name" placeholder="Name"/>
                        <input type="email" id="email" name="email" placeholder="E-mail"/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
                    </div>
                <button className={styleButton.button}>SEND MESSAGE</button>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Contacts;
