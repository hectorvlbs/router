import React from 'react'
import { useParams } from 'react-router'

const User = () => {

    const {id} = useParams()
    console.log(id)
    const [town, setTown] = React.useState([])

    React.useEffect(() => {
        getAPI()
    }, [])

    const getAPI = async () => {    
        const Data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const Data_json = await Data.json()
        setTown(Data_json)
    }

    return (
        <div>
            <h3>{town.name}</h3>
            <p>{town.team_bonus}</p>
        </div>
    )
}

export default User
