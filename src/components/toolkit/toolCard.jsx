import style from './tools.module.css';
const ToolCard = ({name, Component, size = 25}) =>{
    return(
        <div className={style.toolCard}
            style={{
                maxWidth: `${size + 10}`
            }}
        >
            <Component size={size}/>
            {name}
        </div>
    )
}
export{
    ToolCard
}