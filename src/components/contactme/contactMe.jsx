import style from './page.module.css';

const ContactPage = () =>{
    return(
        <section className={style.contact}>
            <h3>Contact me</h3>
            <form>
                <label>Email</label>
                <input></input>
                <label>Message</label>
                <input></input>
            </form>
        </section>
    )
}
export{
    ContactPage
}