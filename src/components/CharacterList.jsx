import { useState, useEffect } from "react";
import {Character} from './Character.jsx'


const NavPage = ({pages, setPages})=>{

    return(

	<header className="d-flex justify-content-between aling-items-center ">

	    <p> Page: {pages} </p>
	    <button className="btn btn-primary btn-sm " 
	    onClick={()=>setPages(pages + 1)}
	    >
		Next
	    </button>

	    <button className="btn btn-primary btn-sm"
	    onClick={()=>setPages(pages-1)}
	    >
		Previous
	    </button>


	</header>
    
    )


}



export const CharacterList = () =>{
 
    const [ characters, setCharacters  ] = useState([]);
    const [pages, setPages] = useState(1)

     useEffect(()=>{
	async function getData(){
	const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pages}`);

	const data = await response.json();
	setCharacters(data.results);

	    	
	}
	getData();

    },[pages])



    return(

	<div className="container " >
	    <NavPage pages={pages} setPages={setPages}/>
	    <div className="row" >


		
		{
		    characters.map((character) =>{

			return(
		    
			    <div className="col-md-4" key={character.id} >
			
				<Character character={character} />
			    </div>
			)

		    })

		

		}

	    </div>



	</div>

    )
    





}


export default CharacterList




