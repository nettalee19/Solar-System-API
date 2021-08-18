const stars = 'https://api.le-systeme-solaire.net/rest/bodies/'
const container = document.querySelector('#container');

let allStars = []
let commonName = []


const getStars = async() => {
    let starsData = await fetch(stars);
    let jsonData = await starsData.json()

   
    for(let i=0; i < jsonData.bodies.length ; i++){
        allStars.push(jsonData.bodies[i].name)
    }

    for(let i=0; i < jsonData.bodies.length ; i++){
        if (!jsonData.bodies[i].englishName == ' '){
            commonName.push(jsonData.bodies[i].englishName)
        }
    }

    //console.log(commonName)
    console.log(allStars[0])

    // allStars.forEach(star =>{
    //     const nameStar = document.createElement('p') 
    //     const nameS = document.createTextNode(star)
    //     nameStar.appendChild(nameS)
    //     document.body.appendChild(nameStar)
    // })

    commonName.forEach(star =>{
        const nameStar = document.createElement('p') 
        const nameS = document.createTextNode(star)
        nameStar.appendChild(nameS)
        document.body.appendChild(nameStar)
    })

   




    let cols = ['name', "age"]

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    table.appendChild(thead)
    table.querySelector('thead').appendChild(document.createElement('tr'))

    for(let i = 0; i < cols.length; i++){
        let heading = document.createElement('td')
        heading.textContent = cols[i]
        table.querySelector('thead tr').appendChild(heading)
    }

    document.getElementById('wrapper').appendChild(table);

    for (let i = 0; i < commonName.length; i++) {
        let s = commonName[i];
        let r = document.createElement('tr');

        // r.dataset.personId = s.id;
        r.id = s.name.toLowerCase() + "-row";

        let nameCell = document.createElement('td');
        nameCell.textContent = s;
        nameCell.classList.add('name');
        //nameCell.dataset.personId = s.id;

        r.appendChild(nameCell);

        table.appendChild(r);
    }
}
getStars()

// const elem = document.createElement('div')
// const elemText = document.createTextNode('hiiiii netta')
// elem.appendChild(elemText)
// document.body.appendChild(elem)

// elem.classList.add('heading')
// elem.id = "newTable"




















// async function createTable (){
//     stars = await getStars()
//     let tableS = document.createElement('table');
//     tbl_string = `<thead>  
  
//         <th>Name</th>
        
        
//     </thead>`

//     stars.forEach(star =>{
//         tbl_string += `<tr>
//         <td>${star}</td>
//         </tr>`
//     })
//     tbl_string += `</tbody>`;

//     table.innerHTML += `<tbody>`;
    
//     table.innerHTML = tbl_string; 
//     container.appendChild(tableS)
// }
// createTable ()

// const elem = document.createElement('div')
// const elemText = document.createTextNode('hi2 netta')
// elem.appendChild(elemText)
// document.body.appendChild(elem)

// elem.classList.add('heading')
// elem.id = "newDiv"


