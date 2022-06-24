import React from 'react'

const App = () =>{

    const [equipo, setEquipo] = React.useState(null)
  
    React.useEffect(() => {
      console.log('useEffect')
      obtenerDatos()
    }, [])
  
    const obtenerDatos = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      const users = await data.json()
      console.log(users)
      setEquipo(users)
    }

    return(
        <div>
            <h1>:c</h1>
            <ul>
                {
                    

                }
            </ul>
        </div>
    )

    }

    export default App