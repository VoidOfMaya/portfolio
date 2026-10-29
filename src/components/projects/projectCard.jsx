import { Icon } from '../helpers/icons';
import style from './page.module.css';
const ProjectCard =({name ,photoUrl ,content, github, livePreview})=>{
    return(
        <main className={style.card}>
            <div className={style.photoContainer}>
                <img src={photoUrl} alt='Project photo'  />
            </div>
            <div className={style.contentContainer}>
                <h4>{name}</h4>
                <p> {content}</p>
                <div className={style.linksContainer}>
                    links
                    <Icon.Github />
                    <div>Live preview</div>
                </div>
            </div>
        </main>
    )
}
export{
    ProjectCard
}