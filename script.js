const p = document.getElementById('p')
const btn = document.getElementById('btn')
const img_box = document.getElementById('img_box')

const Noun = ['Sam', 'Frodo', 'Merry', 'Pipin', 'Legolas', 'Aragon', 'Gimli', 'Gandalf', 'Borimir']
const Verb = ['running from', 'running towards', 'hiding from', 'looking for', 'walking from', 'walking towards', 'dancing near', 'is singing to']
const Target = ['his blade', 'the ring', 'him', 'her', 'it', 'the prancing pony', 'the woods', 'Saron', 'Hobbiton', 'Tom bombadil']

const randomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)]

const handleClick = () => {
    const character = randomIndex(Noun)
    const doing = randomIndex(Verb)
    const to = randomIndex(Target)
    p.innerText = `${character} is ${doing} ${to}`

    const img = document.createElement('img')
    img.id = 'img'
    img.src = `./img/${character}.png`
    img.alt = `${character} icon`
    img_box.innerHTML = ''
    img_box.appendChild(img)
}

btn.addEventListener('click', ()=>handleClick())