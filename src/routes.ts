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



//// ** ROUTES *** ////


routes.get('/', (req,res) => {
    res.render('homepage', {
        pepperoniPizza: pepperoniPizza,
        fruityMeatsPizza: fruityMeatsPizza,
        vegatzzaPizza: vegatzzaPizza
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

export default routes;