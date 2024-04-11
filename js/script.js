// MILESTONE 1
const team = [
  //Array 'team' con oggetti all'interno
  {
    //Oggetto 1
    name: "Wayne Barnett",
    profession: "Founder & CEO",
    imgPath: "wayne-barnett-founder-ceo.jpg"
  },
  {
    //Oggetto 2
    name: "Angela Caroll",
    profession: "Chief Editor",
    imgPath: "angela-caroll-chief-editor.jpg"
  },
  {
    //Oggetto 3
    name: "Walter Gordon",
    profession: "Office Manager",
    imgPath: "walter-gordon-office-manager.jpg"
  },
  {
    //Oggetto 4
    name: "Angela Lopez",
    profession: "Social Media Manager",
    imgPath: "angela-lopez-social-media-manager.jpg"
  },
  {
    //Oggetto 5
    name: "Scott Estrada",
    profession: "Developer",
    imgPath: "scott-estrada-developer.jpg"
  },
  {
    //Oggetto 6
    name: "Barbara Ramos",
    profession: "Graphic Designer",
    imgPath: "barbara-ramos-graphic-designer.jpg"
  }
];

// MILESTONE 2
// for (let i = 0; i < team.length; i++) { //Ciclo for per scorrere tutti gli oggetti contenuti in 'team'
//     let currentObject = team[i]; //CurrentObject per mettere l'attuale oggetto all'interno
//     console.log(currentObject); //stampa dell'oggetto corrente per il numero di iterazione
    
// }

// MILESTONE 3
const containerElem = document.getElementById("container"); 
console.log(containerElem);
const newDivContainer = document.createElement("div");

// for (let i = 0; i < team.length; i++) {
//     let currentObject = team[i];  //elemento con oggetto corrente
//     let listNodeObject = document.createElement("ul"); //creazione lista vuota

//     newDivContainer.appendChild(listNodeObject); //append 'ul' dentro 'div'
  
//     let counter = 0; //variabile per switchare chiave nel ciclo for-in

//     for (const key in currentObject) { //ciclo N iterazioni per numero di chiavi che ha un oggetto
//       if (counter < 3) {
//         let objectItems = document.createElement("li"); //creazione li
//         listNodeObject.appendChild(objectItems); //append per inserire 'li' dentro 'ul'

//         objectItems.textContent = key + ": " + currentObject[key]; //inserimento dei dati quale chiave + formattazione + contenuto all'interno della chiave corrente
//         counter++; //incrementatore per passare alla chiave successiva
//       } else {
//         break; // Interrompe il ciclo dopo aver inserito 3 key
//       }
//     } 
// }

for (let i = 0; i < team.length; i++) {
  let currentObject = team[i]; //elemento con oggetto corrente

  const card = document.createElement("div"); //creazione card con bootstrap e inserisco sotto il codice di base con le variabili necessarie
  card.innerHTML = ` 
      <div class="card">
    <img src="./img/${currentObject.imgPath}" class="card-img-top" alt="">
    <div class="card-body">
      <h2 class="card-text">${currentObject.name}</h2>
      <p class="card-text">${currentObject.profession}</p>
    </div>
  </div>
  `;
  newDivContainer.appendChild(card); //append per ogni card nel div container
  card.classList.add("w-25"); //applicazione stile per le card
  card.classList.add("m-5"); //applicazione stile per le card
}

containerElem.innerHTML = newDivContainer.innerHTML; // inserisco il codice html nel DOM