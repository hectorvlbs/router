import React from 'react'

const About = () => {

    const [team, setTeam] = React.useState([])


    React.useEffect(() => {
        console.log('useEffect')
        getAPI()
    }, [])

    const getAPI = async () => {    
        const Data = await fetch('https://jsonplaceholder.typicode.com/users')
        const Users = await Data.json()
        setTeam(Users)
    }

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    team.map(item => (
                        <li key={item.id}>{item.name} - {item.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default About
