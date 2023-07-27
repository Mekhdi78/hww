let img = document.querySelector('img')
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let color3 = document.querySelector('.color3')
let color4 = document.querySelector('.color4')
let p = document.querySelector('p')

let pictures = {
    color1: "./img/blue.jpeg",
    color2: './img/black.jpg',
    color3: './img/red.jpg',
    color4: './img/gold.webp'
}
color1.onclick = () => {
    img.setAttribute('src', pictures.color1)
}
color2.onclick = () => {
    img.setAttribute('src', pictures.color2)
}
color3.onclick = () => {
    img.setAttribute('src', pictures.color3)
}
color4.onclick = () => {
    img.setAttribute('src', pictures.color4)
}

let currentColor = ''

let changeColor = (newColor) => {
    p.textContent = p.textContent.replace(currentColor, '') // удаление предыдущего цвета
    currentColor = newColor
    p.textContent += currentColor
}

color1.addEventListener('mouseenter', () => {
    changeColor('blue')
})

color1.addEventListener('mouseleave', () => {
    changeColor('')
})

color2.addEventListener('mouseenter', () => {
    changeColor('red')
})

color2.addEventListener('mouseleave', () => {
    changeColor('')
})


color3.addEventListener('mouseenter', () => {
    changeColor('blue')
})

color3.addEventListener('mouseleave', () => {
    changeColor('')
})

color4.addEventListener('mouseenter', () => {
    changeColor('red')
})

color4.addEventListener('mouseleave', () => {
    changeColor('')
})
