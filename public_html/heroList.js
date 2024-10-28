import { getSuperheroes } from "./api.js"

console.log("Hello, project 2!")

async function generateHeroList() {
    const listElement = document.getElementById('heroList')
    listElement.replaceChildren('Loading...')

    const superheroes = await getSuperheroes()

    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.append(tbody)
    tbody.insertAdjacentHTML("beforeend", 
        '<tr><th>Name</th><th>Powers</th></tr>'
    )
    superheroes.forEach((hero) => {
        const row = document.createElement('tr')
        row.insertAdjacentHTML("beforeend", 
            `<td>${ hero.name }</td><td>${ hero.powers.join(', ') }</td>`
        )    
        row.onclick = () => setSelectedHero(hero.id)
        tbody.append(row)
    })
    
    const refreshButton = document.createElement('button')
    refreshButton.append('Refresh')
    refreshButton.onclick = generateHeroList

    listElement.replaceChildren(table, refreshButton)
}

function setSelectedHero(id) {
    console.log('Selecting hero: ' + id)
}

generateHeroList()
