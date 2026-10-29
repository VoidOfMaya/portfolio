import style from './page.module.css';
import { ProjectCard } from './projectCard';
import { Pointer } from '../helpers/cliArrow';
import twoTalkPhoto from '../../assets/twotalkPhoto.png';
import chatterPhoto from '../../assets/chatterPhoto.png';
const ProjectPage = () =>{
return(
    <main>
        <h2><Pointer content='~>'/> My Projects</h2>
        <h5 style={{display: 'inline'}} >
            <Pointer color='red'/>
            <Pointer color='red'/>
            click any photo to visit live website
        </h5>
        <ProjectCard  
            photoUrl={twoTalkPhoto}
            name={'twoTalk'}
            content={'twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack twotalk is a social media app built with the pern stack'}
        />
        <ProjectCard  
            photoUrl={chatterPhoto}
            name={'Chatter'}
            content={'Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack Chatter is a alive messaging app built with the pern stack '}
        />
        <ProjectCard  
            photoUrl={chatterPhoto}
            name={'BattleShip'}
            content={'the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css the iconic battleship game built with vanilla js/html/css'}
        />
    </main>
)
}
export{
    ProjectPage
}