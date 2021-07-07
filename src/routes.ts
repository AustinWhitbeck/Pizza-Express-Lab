// import express
import express from 'express';

// oour routes instance of the Express Router Class
const routes = express.Router();

// Data

interface Pizza  {
    name: string;
    price: number;
    toppings: string[];

}

// const allPizza {}


const pepperoniPizza: Pizza = {
    name: 'Pepperoni',
    price: 15,
    toppings: ['Pepperoni', 'Cheese'],
}

const fruityMeatsPizza: Pizza = {
    name: 'FruityMeats',
    price: 15,
    toppings: ['Pineapple', 'Ham', 'Bacon']
}

const vegatzzaPizza: Pizza = {
    name: `Vega't'zaa`,
    price: 15,
    toppings: ['Peppers', 'Broccoli', 'Bok Choy']
}

const allToppings: string[] = ['Banana Peppers', 'Black Olives','Goat Cheese', 'Ham', 'Onions', 'Pepperoni', 'Pineapple' ];
const allPizza = [pepperoniPizza, fruityMeatsPizza, vegatzzaPizza];



//// ** ROUTES *** ////


routes.get('/', (req,res) => {
    res.render('homepage', {
        pizza: allPizza,
        // vegatzzaPizza: vegatzzaPizza,
        // pepperoniPizza: pepperoniPizza,
        // fruityMeatsPizza: fruityMeatsPizza
    });
})

routes.get('/reviews', (req, res) => {
    res.render('reviews');
})

routes.get('/buildYourPizza', (req,res) => {
    res.render('buildYourPizza', {
        allToppings: allToppings
    });
})

routes.get('/specialityPizzas', (req, res) => {
    let chosenPizza = allPizza.find((pizza) => {
        return pizza.name === String(req.query.name);
    })
    res.render('specialityPizzas', {
        pizza: chosenPizza
    });
})

routes.post('/reviewConfirmation', (req, res) => {
    const comment = req.body.yourComment;
    const reviewScore = req.body.ratingScale;


    const reviewInfo = {
        comment: comment,
        score: reviewScore

    }
    res.render('reviewConfirmation', {
        reviewInfo: reviewInfo,
    });
})

routes.post('/yourCustomPizza', (req, res) => {
    const size = req.body.pizzaSize;
    const toppings = req.body.toppingsNumber;
    const glutenFree = req.body.glutenFree;
    const specialInstructions = req.body.specialInstructions;


    let glutenChoice = {
        choice: '',
        price: 0
    }
    
    if (glutenFree) {
        glutenChoice = {
            choice: 'Yes',
            price: 2
        }
    } else {
        glutenChoice = {
            choice: 'No',
            price: 0
        }
    }

    let price = 0;

    // if the value of the pizzaSize radio is small, medium or large, then add the following together
    // create a value for the price of the object and use the variable for the rq.body as the variable to multiply off of.
    if (size === 'Small') {
        let toppingsPrice = toppings * .5;
        price = 7 + toppingsPrice + glutenChoice.price;
    } else if(size === 'Medium') {
        let toppingsPrice = toppings * 1;
        price = 10 + toppingsPrice + glutenChoice.price;
    } else {
        let toppingsPrice = toppings * 1.25;
        price = 12 + toppingsPrice + glutenChoice.price;
    }

    const customPizza = {
        size: size,
        toppings: toppings,
        gluten: glutenChoice,
        special: specialInstructions,
        price: price
    }

    res.render('yourCustomPizza', {
        customPizza: customPizza,
    })
    
  
})

export default routes;