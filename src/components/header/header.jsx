import { Icon } from '../helpers/icons'
import style from './header.module.css'


const Header = ({})=>{
    return(
        <main className={style.main}>
            <div className={style.projects}></div>
            <div className={style.prof}>

            </div>
            <div className={style.contact}>
                <div style={{transform: 'rotate(90deg)', height: '70px', alignContent: 'center'}}>
                    contact:
                </div> 
                <div style={{transform: 'rotate(90deg)'}}>
                    <Icon.Linkedin />
                </div>   
                <div>
                    <Icon.Github />
                </div>   
                <div>
                    <Icon.Gmail />
                </div>          
            </div>

        </main>
    )
}
export{
    Header
}