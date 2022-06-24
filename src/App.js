import { func } from "prop-types";
import { useEffect, useState } from "react";

const tipos = {

  bulbasaur:"bulbasaur",
ivysaur:"ivysaur",
venusaur:"venusaur",
charmander:"charmander",
charmeleon:"charmeleon",
charizard:"charizard",
squirtle:"squirtle",
wartortle:"wartortle",
blastoise:"blastoise",
caterpie:"caterpie",
metapod:"metapod",
butterfree:"butterfree",
weedle:"weedle",
kakuna:"kakuna",
beedrill:"beedrill",
pidgey:"pidgey",
pidgeot:"pidgeot",
rattata:"rattata",
raticate:"raticate",
spearow:"spearow",
fearow:"fearow",
ekans:"ekans",
arbok:"arbok",
pikachu:"pikachu",
raichu:"raichu",
sandshrew:"sandshrew",
sandslash:"sandslash",
"nidoran-f":"nidoran-f",
nidorina:"nidorina",
nidoqueen:"nidoqueen",
"nidoran-m":"nidoran-m",
nidorino:"nidorino",
nidoking:"nidoking",
clefairy:"clefairy",
clefable:"clefable",
vulpix:"vulpix",
ninetales:"ninetales",
jigglypuff:"jigglypuff",
wigglytuff:"wigglytuff",
zubat:"zubat",
golbat:"golbat",
oddish:"oddish",
gloom:"gloom",
vileplume:"vileplume",
paras:"paras",
parasect:"parasect",
venonat:"venonat",
venomoth:"venomoth",
diglett:"diglett",
dugtrio:"dugtrio",
meowth:"meowth",
persian:"persian",
psyduck:"psyduck",
golduck:"golduck",
mankey:"mankey",

};

function App (){

  //almacenar el contenido en un use state
  const [genshinState, setGenshinState] = useState({
    results: [],
  });
  
  //solicitud de la api paea guardar en una variable "fetch"
  //funcion asincrona
  const fetchPokeapi = async (item, url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=55") => {
    
    const respuesta = await fetch(url);
    const respJson = await respuesta.json();
    if (item === "results") {
    setGenshinState({
      ...genshinState,
      results: respJson.results,
      
    });
    
  } else{
    setGenshinState({
      ...genshinState,
      [item]: respJson,
     });
    }
    console.log(respJson);
    
    
  };
  
    
  useEffect(() => {

    fetchPokeapi("results");
    
  }, []);
  
  

  const handleChangeType = ({target}) => {
    const  url=  `https://pokeapi.co/api/v2/pokemon/${target.value}`;
    
    fetchPokeapi(target.value, url);
  console.log(genshinState);










  



  };

  return (
    
  <div className="App">
    <h1> Pokeapi </h1>
    <hr />
    <select name="results" onChange={handleChangeType}>
      <option value="">Seleccione un elemeto</option> 
      {genshinState.results.map((type)=> (
        <option 
          key={type.name} 
          value={type.name}>
          {tipos[type.name]}
          
          </option> 
       
       
      
             
      ))}
       
    </select >

  </div>
  
 

  
  
  ); 
  
}


export default App;
