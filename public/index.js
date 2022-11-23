// Your code here

function catstagram() {
    const h1 = document.createElement('h1')
    document.body.appendChild(h1);
    h1.textContent = "Kitten pic"

    const catImg = fetch (('https://api.thecatapi.com/v1/images/search'))
    .then((res) => res.json())
    .then((data) => {
        const image = document.createElement('img')
        image.src = data[0].url
        document.body.appendChild(image)
        image.setAttribute("class", "cat_image")
    })


    const newCat = document.createElement('button');
    newCat.textContent = "new Cat"
    document.body.appendChild(newCat);
    newCat.addEventListener('click', () => window.location.reload())
    newCat.setAttribute("class", "new_cat_button")
}

window.onload = catstagram;
