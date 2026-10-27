import { Icon } from '../helpers/icons'
import style from './about.module.css'


const Intro = ({})=>{
    return(
        <main className={style.main}>
            <div className={style.photo}>
                <img src='photo.jpg' alt='My photo'/>
            </div>
            <div className={style.name}>@Maya Mazarib</div>
            <div className={style.about}>
                i am a fullstack software developer</div>
            <div className={style.stack}>
                <Icon.Postgres  size={80}/>
                <Icon.Express size={80}/>
                <Icon.React size={80}/>
                <Icon.Node size={80}/>
            </div>
        </main>
    )
}
export{
    Intro
}