"use strict"

// Creates string of each obj, with html tags
function renderCoffee(coffee) {
    let html = ''
    html += '             <div class="card text-center col-11 col-md-3 p-0 m-4">' +
        '                    <div class="card-header main-bg-color text-white">' +
        '                        <h3>' + coffee.name + '</h3>' +
        '                    </div>' +
        '                    <div class="card-body">' +
        '                        <h4 class="card-title">$' + coffee.price + '</h4>' +
        '                        <p class="card-text">' + coffee.description + '</p>' +
        '                        <ul class="list-group">' +
        '                            <li class="list-group-item border-0 text-left">' +
        '                               <i class="fa-brands fa-gratipay"></i> ' + coffee.flavor1 +
        '                            </li>' +
        '                            <li class="list-group-item border-0 text-left">' +
        '                               <i class="fa-brands fa-gratipay"></i> ' + coffee.flavor2 +
        '                            </li>' +
        '                            <li class="list-group-item border-0 text-left">' +
        '                               <i class="fa-brands fa-gratipay"></i> ' + coffee.flavor3 +
        '                            </li>' +
        '                        </ul>' +
        '                    </div>' +
        '                    <div class="card-footer text-muted">' +
                                coffee.roast +
        '                    </div>' +
        '                </div>' +
        '            </div>'

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

// Filter Roast Function
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

// Filter Flavor Function
function filterByFlavor(e) {
    e.preventDefault();

    let selectedFlavor = roastFlavor01.value;
    let filteredCoffees = [];

    if(selectedFlavor === ''){
        coffeeContainer.innerHTML = renderCoffees(coffees);
    } else {
        coffees.forEach(function (coffee){
            if (coffee.flavor1 === selectedFlavor) {
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
        price: "Awaiting Review",
        description: addCoffeeDescription.value,
        flavor1: addCoffeeFlavor1.value,
        flavor2: addCoffeeFlavor2.value,
        flavor3: addCoffeeFlavor2.value,
        roast: addCoffeeRoast.value
    }
    coffees.push(newCoffee)

    coffeeContainer.innerHTML = renderCoffees(coffees);
}





// ARRAY OF OBJ
let coffees = [                                         // From http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    {id: 1, name: 'Light City', roast: 'light', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Hazelnut', flavor2: 'Mocha', flavor3: 'Strawberry'},
    {id: 2, name: 'Half City', roast: 'light', price: '6.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Chocolate', flavor2: 'Blueberry', flavor3: 'Mocha'},
    {id: 3, name: 'Cinnamon', roast: 'light', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Cinnamon', flavor2: 'Vanilla', flavor3: 'Mocha'},
    {id: 4, name: 'City', roast: 'medium', price: '7.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Vanilla', flavor2: 'Blueberry', flavor3: 'Strawberry'},
    {id: 5, name: 'American', roast: 'medium', price: '2.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Chocolate', flavor2: 'Apple', flavor3: 'Banana'},
    {id: 6, name: 'Breakfast', roast: 'medium', price: '3.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Bacon', flavor2: 'Maple', flavor3: 'Strawberry'},
    {id: 7, name: 'High', roast: 'dark', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Pumpkin Spice', flavor2: 'Banana', flavor3: 'Strawberry'},
    {id: 8, name: 'Continental', roast: 'dark', price: '5.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Mocha', flavor2: 'Peppermint', flavor3: 'Caramel'},
    {id: 9, name: 'New Orleans', roast: 'dark', price: '3.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Hazelnut', flavor2: 'Peppermint', flavor3: 'Mocha'},
    {id: 10, name: 'European', roast: 'dark', price: '1.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Vanilla', flavor2: 'Raspberry', flavor3: 'Hazelnut'},
    {id: 11, name: 'Espresso', roast: 'dark', price: '9.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Smoke', flavor2: 'Bitter', flavor3: 'Wood'},
    {id: 12, name: 'Viennese', roast: 'dark', price: '7.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Sweet', flavor2: 'Caramel', flavor3: 'Hazelnut'},
    {id: 13, name: 'Italian', roast: 'dark', price: '13.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Strawberry', flavor2: 'Banana', flavor3: 'Strawberry'},
    {id: 14, name: 'French', roast: 'dark', price: '8.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Chocolate', flavor2: 'Banana', flavor3: 'Caramel'},
];

// VARS
let coffeeContainer = document.querySelector(                           //   Where we update the coffee data in HTML
    '#coffees-container');

let submitButton = document.querySelector(                              //   Submit: activate the functions with user
    '#submit');                                                // info

let roastSelection = document.querySelector(                            //   Getting user roast input
    '#roast-selection');

let roastFlavor01 = document.querySelector('#roast-flavor1');

let coffeeName = document.getElementById('coffee-name');

                                                                        //   BONUS
let addCoffeeRoast = document.querySelector(                            //   Get user input for new roast
    '#add-roast-selection');
let addCoffeeDescription = document.querySelector(
    '#add-coffee-description');
let addCoffeeName = document.querySelector(                             //   Get user input for new name, description
    '#add-coffee-name');                                       // and flavors
let addCoffeeFlavor1 = document.querySelector(
    '#add-roast-flavor1');
let addCoffeeFlavor2 = document.querySelector(
    '#add-roast-flavor2');
let addCoffeeFlavor3 = document.querySelector(
    '#add-roast-flavor3');
let addSubmit = document.querySelector('#add-submit')          //   Submit Btn for new coffee obj


// ACTIONS
coffeeContainer.innerHTML = renderCoffees(coffees);                     //   THE Start in showing Output

roastSelection.addEventListener('change', updateCoffees)

roastFlavor01.addEventListener('change', filterByFlavor)

coffeeName.addEventListener('keyup', filterByName);                //   Updates when typing into the select name

                                                                        //   BONUS
addSubmit.addEventListener('click', addCoffeeToArray);             //   Implementing the function to add a new


