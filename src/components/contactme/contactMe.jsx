import style from './page.module.css';

const ContactPage = () =>{
    return(
        <section className={style.contact}>
            <h3>Contact me</h3>
            <form>
                <label htmlFor='Email'>Email</label>
                <input name='Email' 
                       id='Email' 
                       type='email' 
                       required 
                       placeholder='example@example.com'>
                </input>
                <label htmlFor='Message'>Message</label>
                <textarea type='text' 
                          name='Message' 
                          id='Message'
                          required 
                          placeholder='lets connect, create, innovate!'>
                </textarea>
            </form>
        </section>
    )
}
export{
    ContactPage
}