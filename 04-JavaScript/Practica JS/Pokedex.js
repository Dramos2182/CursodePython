const fetchPokemon= () =>{

    const pokeName= document.getElementById("pokeName");
    const nombrepokemon= document.getElementById("titulo");
    const ability1= document.getElementById('habilidad1');
    const ability2= document.getElementById('habilidad2');
    const weight= document.getElementById("peso");
    const Altura= document.getElementById("altura");
    const Tipo= document.getElementById("tipo");

    let pokeInput= pokeName.value;
        const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)

        console.log(data.name);
        nombrepokemon.innerHTML= `Nombre: ${data.name}`;

        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg)

        console.log(data.height);
        Altura.innerHTML=`Altura: ${data.height}`;

        console.log(data.types[0].type.name);
        Tipo.innerHTML=`Tipo: ${data.types[0].type.name}`;

        console.log(data.weight);
        weight.innerHTML=`Peso: ${data.weight}`;

        console.log(data.abilities[0].ability.name);
        ability1.innerHTML= `Habilidad 1: ${data.abilities[0].ability.name}`;

        console.log(data.abilities[1].ability.name);
        ability2.innerHTML= `Habilidad 2: ${data.abilities[1].ability.name}`;
    })
}

const pokeImage=(url)=>{
    const pokeImg= document.getElementById("pokeImg")
    pokeImg.src = url;
}
