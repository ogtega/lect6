window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('seachButton').addEventListener('click', () => {
        const keyword = document.getElementById('searchBox').value
        
        document.getElementById("items").innerHTML = ""
        
        window.fetch(`/search/${keyword}`)
            .then(res => res.json())
            .then(data => data.headlines.map((headline, indx) => `\
            <div class='item'>\
                <p><b>${headline}</b></p>\
                <p>${data.snippets[indx]}</p>\
            </div>`).join(''))
            .then(html => {
                console.log(html)
                document.getElementById("items").innerHTML = html
            })
    })
}