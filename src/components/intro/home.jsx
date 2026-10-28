import { Pointer } from '../helpers/cliArrow'
import { Icon } from '../helpers/icons'
import style from './home.module.css'


const Intro = ({})=>{
    return(
        <main className={style.main}>
            <div>
                <h1 >@ Maya Mazarib</h1> 
                <h2>
                    <Pointer content='~>' size='32' />{"Full stack developer"}
                    
                </h2>               
            </div>

            <div className={style.content}>
                <p>A self taught developer building full stack web applications</p>
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
                <div>My stack</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Icon.Postgres size={50} />
                    <Icon.Express size={90}/>
                    <Icon.React size={50}/>
                    <Icon.Node size={80}/>
                </div>
            </div>
            <div className={style.scrollIndicator}>
                <Icon.ScrollDown  size={52}/>
            </div>
        </main>
    )
}
export{
    Intro
}