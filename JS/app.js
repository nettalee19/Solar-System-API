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

    allStars.forEach(star =>{
        const nameStar = document.createElement('p') 
        const nameS = document.createTextNode(star)
        nameStar.appendChild(nameS)
        document.body.appendChild(nameStar)
    })
}
getStars()



const elem = document.createElement('div')
const elemText = document.createTextNode('hi2 netta')
elem.appendChild(elemText)
document.body.appendChild(elem)

elem.classList.add('heading')
elem.id = "newDiv"


