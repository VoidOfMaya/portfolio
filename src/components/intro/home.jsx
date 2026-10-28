import { Pointer } from '../helpers/cliArrow'
import { Icon } from '../helpers/icons'
import style from './home.module.css'


const Intro = ({})=>{
    return(
        <main className={style.main}>
            <h1>
                <Pointer content='~>' size='32' />{"Full stack developer"}
                
            </h1>
            <div className={style.content}>
                <p>a self taught developer building full stack web applications</p>
                <p>from the drawing board throught to deployment </p>
                <p>with a focus on:</p>
                <ul style={{listStyleType: 'none'}}>
                    <li>
                        <Pointer />
                        clean and solid code
                    </li>
                    <li>
                        <Pointer />
                        responsive design
                    </li>
                </ul>  
            </div>
        </main>
    )
}
export{
    Intro
}