"use strict"

// Creates string of each obj, with html tags
// function renderCoffee(coffee) {
//     let html = '<div class="coffee">';
//
//     html += '<div class="h2 cName">' + coffee.name + '</div>';
//     html += '<div class="text-muted">' + coffee.roast + '</div>';
//     html += '</div>';
//
//     return html;
// }
function renderCoffee(coffee) {
    let html = ''
    html += '             <div class="card text-center w-25 m-4">' +
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
    {id: 1, name: 'Light City', roast: 'light', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Hazelnut', flavor2: 'Mocha', flavor3: 'Strawberry'},
    {id: 2, name: 'Half City', roast: 'light', price: '6.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'chocolate', flavor2: 'blueberry', flavor3: 'mocha'},
    {id: 3, name: 'Cinnamon', roast: 'light', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'Cinnamon', flavor2: 'vanilla', flavor3: 'mocha'},
    {id: 4, name: 'City', roast: 'medium', price: '7.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'vanilla', flavor2: 'blueberry', flavor3: 'strawberry'},
    {id: 5, name: 'American', roast: 'medium', price: '2.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'chocolate', flavor2: 'apple', flavor3: 'banana'},
    {id: 6, name: 'Breakfast', roast: 'medium', price: '3.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'bacon', flavor2: 'maple', flavor3: 'strawberry'},
    {id: 7, name: 'High', roast: 'dark', price: '4.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'pumpkin', flavor2: 'banana', flavor3: 'strawberry'},
    {id: 8, name: 'Continental', roast: 'dark', price: '5.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'mocha', flavor2: 'peppermint', flavor3: 'caramel'},
    {id: 9, name: 'New Orleans', roast: 'dark', price: '3.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'hazelnut', flavor2: 'peppermint', flavor3: 'mocha'},
    {id: 10, name: 'European', roast: 'dark', price: '1.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'vanilla', flavor2: 'raspberry', flavor3: 'hazelnut'},
    {id: 11, name: 'Espresso', roast: 'dark', price: '9.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'smoke', flavor2: 'bitter', flavor3: 'wood'},
    {id: 12, name: 'Viennese', roast: 'dark', price: '7.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'sweet', flavor2: 'caramel', flavor3: 'hazelnut'},
    {id: 13, name: 'Italian', roast: 'dark', price: '13.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'strawberry', flavor2: 'banana', flavor3: 'strawberry'},
    {id: 14, name: 'French', roast: 'dark', price: '8.99', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur dignissimos dolor.', flavor1: 'chocolate', flavor2: 'banana', flavor3: 'caramel'},
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

roastSelection.addEventListener('change', updateCoffees)


coffeeName.addEventListener('keyup', filterByName);                //   Updates when typing into the select name

                                                                        //   BONUS
addSubmit.addEventListener('click', addCoffeeToArray);             //   Implementing the function to add a new


