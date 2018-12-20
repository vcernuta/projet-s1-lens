let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)

let page = params.get('page')
let lang = params.get("lang")

if(lang == "fr") {
    if(page == "index" || page == "entreprises" || page == "partenaires") {
        if(window.innerWidth < 1040) {

        } else {

        }
    } else {

    }
} else {
    if(page == "index" || page == "entreprises" || page == "partenaires") {
        if(window.innerWidth < 1040) {

        } else {
            
        }
    } else {

    }
}