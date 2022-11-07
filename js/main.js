/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */
const container= document.querySelector(".my_container")
const team=[
    //person 1
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "propic": "wayne-barnett-founder-ceo.jpg"
    },
     //person 2
     {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "propic": "angela-caroll-chief-editor.jpg"
    },
     //person 3
     {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "propic": "walter-gordon-office-manager.jpg"
    },
     //person 4
     {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "propic": "angela-lopez-social-media-manager.jpg"
    },
     //person 5
     {
        "name": "Scott Estrada",
        "role": "Developer",
        "propic": "scott-estrada-developer.jpg"
    },
     //person 6
     {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "propic": "barbara-ramos-graphic-designer.jpg"
    }
]

for (let key in team) {
    const person=team[key]
    const personList=`<div class="div_img"><img src="img/${person.propic}"><div>
                     <b>${person.name}</b><br> <small>${person.role}</small>`
    const card= document.createElement("div")
    card.innerHTML=personList
    card.classList.add("card_style", "fs-2")
    console.log(card.innerHTML)
    container.append(card)
}
