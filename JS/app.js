const stars = 'https://api.le-systeme-solaire.net/rest/bodies/'

let allStars = []



const getStars = async() => {
    let starsData = await fetch(stars);
    let jsonData = await starsData.json()

    //console.log(jsonData)
    //console.log(jsonData.bodies.length)
    // jsonData.bodies.map(body =>{
    //     console.log(body.name)
    //     return body.name
    // })

    for(let i=0; i < jsonData.bodies.length ; i++){
        allStars.push(jsonData.bodies[i].name)
        //console.log(jsonData.bodies[i].name)
        //console.log(allStars[i])
    }

    console.log(allStars)
}
getStars()

const createTable = async (arr) =>{
    table.innerHTML = `<tr>
    <th>Star Name</th>
    </tr>`

    for(let i = 0; i < arr.length; i++){
        let newRow = document.createElement('tr')
        
        let name = document.createElement('td')
        name.textContent = arr[i]
    }
}