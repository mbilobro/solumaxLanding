function renderPost (post) {
    const img = document.createElement('img')
    img.classList.add('blog-img-card')
    img.src = post.header_image
    img.alt = post.image_alt

    const title = document.createElement('h5')
    title.classList.add('blog-title-card')
    title.textContent = post.title

    const date = document.createElement('small')
    date.textContent = post.created_at
    
    const description = document.createElement('p')
    description.classList.add('blog-text-card')
    description.textContent = post.description

    const button = document.createElement('a')
    button.classList.add('buttom-see-more')
    button.classList.add('text-center')
    button.textContent = 'VER MAIS'
    button.href = '#'

    const imgContainer = document.getElementById('blog-img-card-container') 
    imgContainer.appendChild(img)
    const container = document.getElementById('card-body')
    container.appendChild(title)
    container.appendChild(date)
    container.appendChild(description)
    container.appendChild(button)
}