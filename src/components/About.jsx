import React from 'react'
import { Link } from "react-router-dom";

const About = () => {

    const [team, setTeam] = React.useState([])


    React.useEffect(() => {
        console.log('useEffect')
        getAPI()
    }, [])

    const getAPI = async () => {    
        const Data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const Data_json = await Data.json()
        setTeam(Data_json.civilizations)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    team.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.army_type}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default About
