const List = ({names, title, desc, HandleDelete}) => {
    
    return ( 
        <div className="List">
            <h2>{title}</h2>
            <p style={
                {
                    marginLeft: "120px"
                    
                }
                
            }>{desc}</p>
            {names.map((names)=>(
               <div className="name_preview" key={names.id}>
                   <h2>{names.name}</h2>
                   <p>is {names.Age} Years OLD</p>
                   <button onClick={() => HandleDelete(names.id)}>DELETE</button>
               </div>
           ))}
        </div>
     );
}
 
export default List;