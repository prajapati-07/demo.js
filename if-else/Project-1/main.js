const select=document.querySelector("select");
const para=document.querySelector("p");
select.addEventListener("change",setWeather);
function setWeather(){
    const choice=select.value;

    if(choice==="Sunny"){
        para.textContent="It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }

    // if (choice === "sunny") {
    //     if (temperature < 86) {
    //       para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
    //     }

    else if(choice==="Rainy"){
        para.textContent="Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    }

    else if(choice==="Snowing"){
        para.textContent="The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    }

    else if(choice==="Overcast"){
        para.textContent="It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }

    else{
        para.textContent=" ";
    }
}