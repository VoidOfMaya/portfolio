import style from './tools.module.css';
import { Icon } from '../helpers/icons';
import { ToolCard } from './toolCard';

const Tools = ({})=>{
 return(
    <main>
        <div> my toolkit</div>
        <div className={style.content}>
            <ToolCard name={"JavaScript"} Component={Icon.JavaScript} size={50}/>
            <ToolCard name={"Html"} Component={Icon.Html} size={50}/>
            <ToolCard name={"Css"} Component={Icon.Css} size={50}/>
            <ToolCard name={"Vite"} Component={Icon.Vite} size={50}/>
            <ToolCard name={"Prisma ORM"} Component={Icon.PrismaORM} size={50}/>
            <ToolCard name={"Jest"} Component={Icon.Jest} size={50}/>
            <ToolCard name={"Git"} Component={Icon.Git} size={50}/>
            <ToolCard name={"Npm"} Component={Icon.Npm} size={50}/>
            <div>
                Rest API
            </div>
            <div>
                Supertest
            </div>
        </div>
    </main>
 )
}
export{
    Tools
}