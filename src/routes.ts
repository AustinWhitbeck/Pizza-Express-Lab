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

export default routes;