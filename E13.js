window.addEventListener('DOMContentLoaded', function(){
/*const person = {
    name: 'yahaira',
    job: 'mecatronico',
    city: 'Cárdenas',
    bio: 'yahaira is a really cool girl that loves the dogs!',

};
const markup = `
        <div class="person">
           <h2>
               ${person.name}
               <span class="job">${person.job}</span>
           </h2>
           <p class="location">${person.city}</p>
           <p class="bio">${person.bio}</p>
        </div>
        `;
        
        document.body.innerHTML = markup;
});*/

///////////////////////////////////////si salio ///////////////////////////////////////////
/*
const dogs = [
    {name: 'snickers', age: 2},
    {name: 'hugo', age: 8},
    {name: 'sunny', age: 1}
];
const markup = `
<ul class="dogs">
	${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`)}
</ul>
`;

document.body.innerHTML = markup;
});  */

const beer = {
    name: 'Belgian Wit',
    brewery: `Steam Whistle Brewery`,
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
    return `
    <ul>
    	${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
    `;
}

const markup = `
<div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
</div>
`;

document.body.innerHTML = markup;
});


//// feliz por que salio :) ///////////
