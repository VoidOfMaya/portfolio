import style from './about.module.css'


const About = ({})=>{
    return(
        <main className={style.main}>
            <div className={style.photo}>
                <img src='src/assets/images.jpg' alt='My photo'
                    height='200px'
                    width='200px'
                    style={{borderRadius: '50%'}}
                />
            </div>
            <div className={style.about}>
                <div className={style.name}>@M Mazarib</div>
                <p style={{marginLeft: "10px"}}>
                    i am a fullstack software developer building fullstack applications
                    from  the drawing board to deployment
                </p>
                
                </div>
        </main>
    )
}
export{
    About
}