const Pointer = ({color= "rgb(22, 240, 10)", content = '>', size = 25})=>{
    return(      
        <div style={{
                display: 'inline', 
                color:color,
                fontSize: `${size}px`,
            }}>
            {content}
        </div>
    )
}
export{
    Pointer
}