'use strict';

let form = document.getElementById( 'form' );
let all =[];
let flowerItems = ['Flower','Name', 'Season'];
let flowersImg = ['alstroemerias.jpeg', 'gardenias.jpeg', 'orchids.jpeg', 'peonies.jpeg', 'roses.jpeg', 'sunflowers.jpeg', 'tulips.jpeg'];

function Flowers ( flower, name, season ){
  this.name = [];
  this.flower = [];
  this.season = season;
  all.push( this );

}

Flowers.prototype.newFlower = function (){
  for ( let i = 0; i < all.length; i++ ){
    this.name.push( this.newFlower );
  }
};

for ( let i =0; i < flowersImg.length ; i++ ){
  new Flowers ( flowersImg[i] );
}



function tableHeader (){
  const parentElement = document.getElementById ( 'table' );
  const tableHeader = document.createElement ( 'tr' );
  parentElement.appendChild ( tableHeader );

  for ( let i=0; i <flowerItems; i++ ){
    const tdHeader = document.createElement ( 'th' );
    tableHeader.appendChild( tdHeader );
    tdHeader.textContent = flowerItems[i];
  }


}

console.log ( tableHeader );

Flowers.prototype.render = function (){
  const parentElement = document.getElementById ( 'table' );

  const trElement = document.createElement ( 'tr' );
  parentElement.appendChild ( 'trElement' );

  const tdImage= document.createElement( 'td' );
  trElement.appendChild ( 'tdImage' );
  tdImage.textContent=this.flower;

  const tdName = document.createElement ( 'td' );
  trElement.appendChild ( 'tdName' );
  tdName.textContent=this.name;

  const tdSeason = document.createElement ( 'td' );
  trElement.appendChild ( 'tdSeason' );
  tdSeason.textContent = this.season;


};

function localStorageRender (){
  const parentElement = document.getElementById ( 'table' );

  for ( let i=0; i < all; i++ ){

    const trElement = document.createElement ( 'tr' );
    parentElement.appendChild ( 'trElement' );

    const tdImage= document.createElement( 'td' );
    trElement.appendChild ( 'tdImage' );
    tdImage.textContent=all[i];

    const tdName = document.createElement ( 'td' );
    trElement.appendChild ( 'tdName' );
    tdName.textContent=all[i];

    const tdSeason = document.createElement ( 'td' );
    trElement.appendChild ( 'tdSeason' );
    tdSeason.textContent = all[i];

  }


}


function handleSubmit ( event ) {
  document.location.reload();
  event.preventDefault();
  let flowerImage = event.target.flower.value;
  let flowerName = event.target.name.value;
  let flowerSeason = event.target.season.value;

  let newFlowerItem = new Flowers ( flowerImage, flowerName, flowerSeason );


  newFlowerItem.newFlower();
  newFlowerItem.render();
  localStorage.setItem ( 'Flowers', JSON.stringify( all ) );

}



form.addEventListener ( 'submit', handleSubmit );

localStorageRender();
tableHeader();

console.log ( all );
























