import style from './tools.module.css';
import { Icon } from '../helpers/icons';
import { ToolCard } from './toolCard';
import { Partical } from '../particals/staticAnchor';


const Tools = ({})=>{
 return(
    <main>
        <div> my toolkit</div>
        <div className={style.content}>
            <ToolCard name={"JavaScript"} Component={Icon.JavaScript} size={50}/>
            <ToolCard name={"HTML"} Component={Icon.Html} size={50}/>
            <ToolCard name={"CSS"} Component={Icon.Css} size={50}/>
            <ToolCard name={"Vite"} Component={Icon.Vite} size={50}/>
            <ToolCard name={"Prisma ORM"} Component={Icon.PrismaORM} size={50}/>
            <ToolCard name={"Jest"} Component={Icon.Jest} size={50}/>
            <ToolCard name={"Git"} Component={Icon.Git} size={50}/>
            <ToolCard name={"Npm"} Component={Icon.Npm} size={50}/>
            <ToolCard name={"Rest API"} Component={Icon.RestApi} size={50} />
        </div>
        <Partical.Static particalColor={'red'} linkColor={'green'}/> 
    </main>
 )
}
export{
    Tools
}