import { Pointer } from '../helpers/cliArrow';
import { Icon } from '../helpers/icons';
import style from './page.module.css';
const ProjectCard =({name ,photoUrl ,content, github, livePreview, size = 400})=>{
    return(
        <main className={style.card}>
            <div className={style.photoContainer}>
                <img src={photoUrl} alt='Project photo' 
                    height={size} 
                    width={size} 
                    loading='lazy'
                    style={{
                        objectFit:'cover',
                        borderRadius: ' 15px 0px 0px 15px',
                        cursor: 'pointer',
                    }}
                />
            </div>
            <div className={style.contentContainer}>
                <h3 style={{flex: '1'}}>{name}</h3> 
                <p style={{flex: '18'}}> {content}</p>
                <div className={style.linksContainer}>
                    <Icon.GitRepo  size={35} title='view Github repository'/>
                </div>
            </div>
        </main>
    )
}
export{
    ProjectCard
}