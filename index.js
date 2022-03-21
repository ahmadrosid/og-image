let documents = [
    {
        "title":"Working with inverted index for full text search"
    },
    {
        "title":"How to use inverted index for simple website"
    },
    {
        "title":"How like How"
    },
    {
        "title":"Let's use inverted index for simple How die"
    }
];

let index = {}

function add(str, id) {
    if (!index[str]) {
        index[str] = [id]
    } else {
        index[str].push(id)
    }
}

documents.forEach((item, index) => {
    item.title.split(" ").forEach(word => {
        add(word, index + 1)
    })
})

function search(query) {
    let result = []
    query.split(" ").forEach(word => {
        let res = index[word]
        if (res) {
            res.forEach(id => {
                let doc = documents[id-1]
                if (doc) {
                    result.push(doc)
                }
            })
        }
    })
    return result
}

// console.log(JSON.stringify(index))
// console.log(JSON.stringify(search("How")))
function traditional_search(query) {
    let result = []
    documents.forEach(item => {
        if (item.title.includes(query)) {
            result.push(item)
        }
    })
    return result
}
console.log(JSON.stringify(traditional_search("How")))