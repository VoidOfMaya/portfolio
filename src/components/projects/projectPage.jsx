import style from './page.module.css';
import { ProjectCard } from './projectCard';
const ProjectPage = () =>{
return(
    <main>
        <h2>My Projects</h2>
        <ProjectCard  
            photoUrl={'../../assets/twotalkPhoto.png'}
            name={'twoTalk'}
            content={'twotalk is a social media app built with the pern stack'}
        />
        <ProjectCard  
            photoUrl={'../../assets/chatterPhoto.png'}
            name={'Chatter'}
            content={'Chatter is a alive messaging app built with the pern stack'}
        />
    </main>
)
}
export{
    ProjectPage
}