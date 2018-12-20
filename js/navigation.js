let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)

let page = params.get('page')
let lang = params.get("lang")

if(lang == "fr") {
    if(page == "index" || page == "entreprises" || page == "partenaires") {
        if(window.innerWidth < 1040) {
            console.log("Menu français pour mobile (index)")
        } else {
        }   console.log("Menu français pour desktop (index)")
    } else {
        if(window.innerWidth < 1040) {
            console.log("Menu français pour mobile (reste)")
        } else {
            console.log("Menu français pour desktop (reste)")
        }
    }
} else {
    if(page == "index" || page == "entreprises" || page == "partenaires") {
        if(window.innerWidth < 1040) {
            console.log("Menu anglais pour mobile (index)")
        } else {
        }   console.log("Menu anglais pour desktop (index)")
    } else {
        if(window.innerWidth < 1040) {
            console.log("Menu anglais pour mobile (reste)")
        } else {
            console.log("Menu anglais pour desktop (reste)")
        }
    }
}