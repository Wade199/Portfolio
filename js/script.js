let joueur = document.getElementsByClassName("joueur")
let choixjoueur = joueur[0].children

console.log(joueur)


for (let index = 0; index < choixjoueur.length; index++) {
   choixjoueur[index].addEventListener("mouseover",saisiejoueur,false)
    
}

function saisiejoueur(){
   this.classList.add("choixjoueur")
}
 