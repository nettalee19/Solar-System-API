const stars = 'https://api.le-systeme-solaire.net/rest/bodies/'

let allStars = []



const getStars = async() => {
    let starsData = await fetch(stars);
    let jsonData = await starsData.json()

   
    for(let i=0; i < jsonData.bodies.length ; i++){
        allStars.push(jsonData.bodies[i].name)
    }

    console.log(allStars)
    console.log(allStars[0])


    // const nameStar = document.createElement('h3')
    // const nameS = document.createTextNode(allStars)
    // nameStar.appendChild(nameS)
    // document.body.appendChild(nameStar)

    // const star = allStars.map(star =>{
    //     return star
    // })

    allStars.forEach(star =>{
        const nameStar = document.createElement('p') 
        const nameS = document.createTextNode(star)
        nameStar.appendChild(nameS)
        document.body.appendChild(nameStar)
    })
}
getStars()

// const createDiv = async () =>{
//     let nameStar = document.createElement('div')
//     nameStar.id = 'stars-names'
//     document.appendChild(nameStar)

//     let inner = doxument.createElement('div')
//     inner.className = 'names2'

//     nameStar.appendChild(inner)

//     allStars.map(body =>{
//         body.createElement('div')
//     })
// }
// createDiv()

const elem = document.createElement('div')
const elemText = document.createTextNode('hi2 netta')
elem.appendChild(elemText)
document.body.appendChild(elem)

elem.classList.add('heading')
elem.id = "newDiv"







//const nameStar = document.createElement('p')
allStars.forEach(star =>{
    const nameStar = document.createElement('p') 
    const nameS = document.createTextNode(star)
    nameStar.appendChild(nameS)
    document.body.appendChild(nameStar)
})
//const nameS = document.createTextNode(allStars[0])
//nameStar.appendChild(nameS)
//document.body.appendChild(nameStar)

// const star = allStars.map(star =>{
//     return star
// })




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