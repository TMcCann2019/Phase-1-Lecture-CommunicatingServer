fetch("http://localhost:3000/characters")
    .then ((resp) => resp.json())
    .then ((data) => renderCharacters(data))

function renderCharacters(characterArray){
    //console.log(characterArray)
    const ul = document.querySelector('ul')

    characterArray.forEach ((characterObject) => {
        //console.log(characterObject)

        const li = document.createElement('li')
        //console.log(li)
        const p = document.createElement('p')
        //console.log(p)
        let name = characterObject.name
        //console.log(name)
        p.textContent = name
        //p.innerText = name
        //console.log(p)
        const img = document.createElement('img')
        let imgURL = characterObject.image
        //console.log(imgURL)
        img.src = imgURL

        li.appendChild(p)
        li.appendChild(img)
        //li.append(p, img)
        ul.append(li)
    })
}