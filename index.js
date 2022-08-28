const gethero = document.getElementById('gethero');
const baseurl = 'https://superheroapi.com/api.php/3340019849648039';
const hero = document.getElementById(`hero`);
const publisher = document.getElementById(`publisher`);
const power = document.getElementById(`power`);
const gender = document.getElementById(`gender`);
const combat = document.getElementById(`combat`);
const speed = document.getElementById(`speed`);
const strenght = document.getElementById(`strenght`);
const intel = document.getElementById(`intel`);
const race = document.getElementById(`race`);
const search = document.getElementById(`search`);
const searchHero = document.getElementById(`searchHero`);
const Name = document.getElementById(`name`);
const superhero=(id)=>
{
    hero.style.visibility='visible';
    fetch(`${baseurl}/${id}`)
    .then(response=>response.json())
    .then(json => {
        console.log(json);
        hero.src=`${json.image.url}`;
        Name.innerText=`Name: ${json.name}`
        publisher.innerText=`Publisher: ${json.biography.publisher}`
        combat.innerText=`Combat: ${json.powerstats.combat}`
        strenght.innerText=`Strenght: ${json.powerstats.strenght}`
        speed.innerText=`Speed: ${json.powerstats.speed}`
        race.innerText=`Race: ${json.appearance.race}`
        gender.innerText=`Gender: ${json.appearance.gender}`
        power.innerText=`Power: ${json.powerstats.power}`
        intel.innerText=`Intelligence: ${json.powerstats.intelligence}`
    })
}   
const superheroName=(name)=>
{
    hero.style.visibility='visible';
    fetch(`${baseurl}/search/${name}`)
    .then(response=>response.json())
    .then(json => {
        console.log(json)
        hero.src=`${json.results[0].image.url}`;
        Name.innerText=`Name: ${json.results[0].name}`
        publisher.innerText=`Publisher: ${json.results[0].biography.publisher}`
        combat.innerText=`Combat: ${json.results[0].powerstats.combat}`
        strenght.innerText=`Strenght: ${json.results[0].powerstats.strenght}`
        speed.innerText=`Speed: ${json.results[0].powerstats.speed}`
        race.innerText=`Race: ${json.results[0].appearance.race}`
        gender.innerText=`Gender: ${json.results[0].appearance.gender}`
        power.innerText=`Power: ${json.results[0].powerstats.power}`
        intel.innerText=`Intelligence: ${json.results[0].powerstats.intelligence}`
    })
}   
function randnum() {
    let a=Math.floor((Math.random() * 731) + 1);
    return a;

}
gethero.onclick=()=> superhero(randnum());
searchHero.onclick=()=> superheroName(search.value);



