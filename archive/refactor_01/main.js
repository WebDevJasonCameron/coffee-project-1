"use strict"

// Creates string of each obj, with html tags
function renderCoffee(coffee) {
    let html = '<div class="coffee">';

    html += '<div class="h2 cName">' + coffee.name + '</div>';
    html += '<div class="text-muted">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

// Runs through the array and calls the renderCoffee function per obj
function renderCoffees(coffees) {
    let html = '';
    for (let i = 0; i < coffees.length; i++) {                          //   <-Fixed according to request

        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Roast Filter Function
function updateCoffees(e) {
    e.preventDefault();

    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];

    if(selectedRoast === 'all'){
        coffeeContainer.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee){
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee)
            }
            coffeeContainer.innerHTML = renderCoffees(filteredCoffees);
        });
    }
}

// Name Search Filter Function
function filterByName(){

    let selectedName = coffeeName.value.toLowerCase();
    let filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(selectedName) === true) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeContainer.innerHTML = renderCoffees(filteredCoffees);

}


// Add a Coffee to array
function addCoffeeToArray (e) {
    e.preventDefault();

    let newCoffee = {
        id: coffees.length + 1,
        name: addCoffeeName.value,
        roast: addCoffeeRoast.value
    }
    coffees.push(newCoffee)

    coffeeContainer.innerHTML = renderCoffees(coffees);
}





// ARRAY OF OBJ
let coffees = [                                         // From http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// VARS
let coffeeContainer = document.querySelector(                           //   Where we update the coffee data in HTML
    '#coffees-container');

let submitButton = document.querySelector(                              //   Submit: activate the functions with user
    '#submit');                                                // info

let roastSelection = document.querySelector(                            //   Getting user roast input
    '#roast-selection');

let coffeeName = document.getElementById('coffee-name');

                                                                        //   BONUS
let addCoffeeRoast = document.querySelector(                            //   Get user input for new roast
    '#add-roast-selection')
let addCoffeeName = document.querySelector('#add-coffee-name') //   Get user input for new name
let addSubmit = document.querySelector('#add-submit')          //   Submit Btn for new coffee obj


// ACTIONS
coffeeContainer.innerHTML = renderCoffees(coffees);                     //   THE Start in showing Output

submitButton.addEventListener('click', updateCoffees);

coffeeName.addEventListener('keyup', filterByName);                //   Updates when typing into the select name

                                                                        //   BONUS
addSubmit.addEventListener('click', addCoffeeToArray);             //   Implementing the function to add a new



