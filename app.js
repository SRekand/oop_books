const book = new Book('Tõde ja Õigus', 'Tammsaare', '123456')
console.log(book)

for (let key in book) {
    console.log(key + " " + book[key])
}

const form = document.querySelector('form')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const isbnInput = document.querySelector('#isbn')

form.addEventListener('submit', addBook)

function addBook(e){
    let title = titleInput.value
    let author = authorInput.value
    let mudel = isbnInput.value

// Title

    const td = document.createElement('td')
    td.className = 'table-div'
    const text = document.createTextNode(title)
    td.appendChild(text)

    const link = document.createElement('td')
    link.className = 'secondary-content'
    link.setAttribute('href', '#')
    link.appendChild(document.createTextNode('X'))

// Table and table row

    const tr = document.createElement('tr')
    tr.className = 'table-row'
    tr.appendChild(td)

    const tbl = document.querySelector('.newtable')
    tbl.appendChild(tr)

// Author

    const td2 = document.createElement('td')
    td2.className = 'table-div'
    const text2 = document.createTextNode(author)
    td2.appendChild(text2)
    tr.appendChild(td2)

// ISBN

    const isbn = document.createElement('td')
    isbn.className = 'isbn'
    const text3 = document.createTextNode(mudel)
    isbn.appendChild(text3)
    tr.appendChild(isbn)

    tr.appendChild(link)

    e.preventDefault()

}