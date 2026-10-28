import { Icon } from '../helpers/icons'
import style from './home.module.css'


const Intro = ({})=>{
    return(
        <main className={style.main}>
            <h1>
                <div style={{display: 'inline', color:"rgb(22, 240, 10)"}}>{"~>"}</div>{"Full stack developer"}
            </h1>
        </main>
    )
}
export{
    Intro
}