import './App.css'

function Category ({catagares,setCatName}){
    
    let cat=catagares.map((v,i)=>{
        return(
            <li onClick={()=>setCatName(v.name)} key={i} className='li'>{v.name}</li>
        )
    })

    return(
        <>
            <h1 className='Category-heading'>Products Category</h1>

            <div className="category-name">
                <ul>
                   {cat} 
                </ul>
            </div>
        </>
    )
}
export default Category