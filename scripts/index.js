// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

const API = "https://masai-mock-api.herokuapp.com/news?q={query}";
import { navbar } from "../components/navbar";
import { sidebar } from "../components/sidebar"

let n = document.getElementById("navbar");
n.innerHTML = navbar ();

let s = document.getElementById("sidebar");
n.innerHTML = sidebar ();

import {searchImages, append} from "./fetch"; 


let search = (e) => {
    if (e.key === "Enter") {
        let value =  document.getElementById("query").value;
        searchImages(API, value).then((data) =>{
            console.log(data);

            let results = document.getElementById("results");
            results.innerHTML=null;
            append(data.result, results);
        });
}
};

document.getElementById("qurey").addEventListener("keydown", search)

let categerys = document.getElementById("categerys").children

function cSearch() {
    console.log(this.id);
    searchImages(API, this.id).then((data) =>{
        console.log(data);

        let results = document.getElementById("results");
        results.innerHTML=null;
        append(data.result, results);
    });
    
}

for (let el of categerys){
    el.addEventListener("click", cSearch);
}
