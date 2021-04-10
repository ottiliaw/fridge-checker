import React, {useState} from 'react';
import { Text, TextInput, Button, ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements'
import findByIngredients from './api'

// test data
const resultData = [
    {
        "id": 218738,
        "title": "Gnocchi with courgette, mascarpone & spring onions",
        "image": "https://spoonacular.com/recipeImages/218738-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 5,
        "missedIngredients": [
            {
                "id": 11819,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "red chilli",
                "original": "1 red chilli, sliced, deseeded if you like",
                "originalString": "1 red chilli, sliced, deseeded if you like",
                "originalName": "red chilli, sliced, deseeded if you like",
                "metaInformation": [
                    "red",
                    "deseeded",
                    "sliced"
                ],
                "meta": [
                    "red",
                    "deseeded",
                    "sliced"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-chili.jpg"
            },
            {
                "id": 9156,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "lemon zest",
                "original": "zest 1 lemon",
                "originalString": "zest 1 lemon",
                "originalName": "zest lemon",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg"
            },
            {
                "id": 93820,
                "amount": 2,
                "unit": "tbsp",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp",
                "aisle": "Cheese",
                "name": "mascarpone",
                "original": "2 tbsp mascarpone",
                "originalString": "2 tbsp mascarpone",
                "originalName": "mascarpone",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-cream-fluffy.jpg"
            },
            {
                "id": 1033,
                "amount": 50,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Cheese",
                "name": "parmesan",
                "original": "50g parmesan (or vegetarian alternative), grated",
                "originalString": "50g parmesan (or vegetarian alternative), grated",
                "originalName": "parmesan (or vegetarian alternative), grated",
                "metaInformation": [
                    "grated",
                    "(or vegetarian alternative)"
                ],
                "meta": [
                    "grated",
                    "(or vegetarian alternative)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
            },
            {
                "id": 2004,
                "amount": 1,
                "unit": "leaves",
                "unitLong": "leave",
                "unitShort": "leaf",
                "aisle": "Produce;Spices and Seasonings",
                "name": "bay leaves",
                "original": "dressed mixed leaves, to serve",
                "originalString": "dressed mixed leaves, to serve",
                "originalName": "dressed mixed to serve",
                "metaInformation": [
                    "mixed"
                ],
                "meta": [
                    "mixed"
                ],
                "extendedName": "mixed bay leaves",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/bay-leaves.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 98853,
                "amount": 300,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "gnocchi",
                "original": "300g fresh gnocchi",
                "originalString": "300g fresh gnocchi",
                "originalName": "fresh gnocchi",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh gnocchi",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            },
            {
                "id": 11477,
                "amount": 1,
                "unit": "medium",
                "unitLong": "medium",
                "unitShort": "medium",
                "aisle": "Produce",
                "name": "courgette",
                "original": "1 medium courgette, cut into thin ribbons with a peeler",
                "originalString": "1 medium courgette, cut into thin ribbons with a peeler",
                "originalName": "courgette, cut into thin ribbons with a peeler",
                "metaInformation": [
                    "with a peeler",
                    "cut into thin ribbons "
                ],
                "meta": [
                    "with a peeler",
                    "cut into thin ribbons "
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
            },
            {
                "id": 11291,
                "amount": 4,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "spring onions",
                "original": "4 spring onions, chopped",
                "originalString": "4 spring onions, chopped",
                "originalName": "spring onions, chopped",
                "metaInformation": [
                    "chopped"
                ],
                "meta": [
                    "chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spring-onions.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11282,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "onion",
                "original": "onion",
                "originalString": "onion",
                "originalName": "onion",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            }
        ],
        "likes": 154
    },
    {
        "id": 627931,
        "title": "Gnocchi with Zucchini Ribbons & Parsley Brown Butter",
        "image": "https://spoonacular.com/recipeImages/627931-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 6,
        "missedIngredients": [
            {
                "id": 1001,
                "amount": 2,
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "butter",
                "original": "2 tablespoons butter",
                "originalString": "2 tablespoons butter",
                "originalName": "butter",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"
            },
            {
                "id": 10311529,
                "amount": 1,
                "unit": "pint",
                "unitLong": "pint",
                "unitShort": "pts",
                "aisle": "Produce",
                "name": "cherry tomatoes",
                "original": "1 pint cherry tomatoes, halved",
                "originalString": "1 pint cherry tomatoes, halved",
                "originalName": "cherry tomatoes, halved",
                "metaInformation": [
                    "halved"
                ],
                "meta": [
                    "halved"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.png"
            },
            {
                "id": 11297,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce;Spices and Seasonings",
                "name": "fresh parsley",
                "original": "1/2 cup chopped fresh parsley",
                "originalString": "1/2 cup chopped fresh parsley",
                "originalName": "chopped fresh parsley",
                "metaInformation": [
                    "fresh",
                    "chopped"
                ],
                "meta": [
                    "fresh",
                    "chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parsley.jpg"
            },
            {
                "id": 2025,
                "amount": 0.25,
                "unit": "teaspoon",
                "unitLong": "teaspoons",
                "unitShort": "tsp",
                "aisle": "Spices and Seasonings",
                "name": "nutmeg",
                "original": "1/4 teaspoon grated nutmeg",
                "originalString": "1/4 teaspoon grated nutmeg",
                "originalName": "grated nutmeg",
                "metaInformation": [
                    "grated"
                ],
                "meta": [
                    "grated"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg"
            },
            {
                "id": 1033,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Cheese",
                "name": "parmesan cheese",
                "original": "1/2 cup grated Parmesan cheese",
                "originalString": "1/2 cup grated Parmesan cheese",
                "originalName": "grated Parmesan cheese",
                "metaInformation": [
                    "grated"
                ],
                "meta": [
                    "grated"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
            },
            {
                "id": 10211821,
                "amount": 4,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Produce",
                "name": "bell pepper",
                "original": "Freshly ground pepper, to taste",
                "originalString": "Freshly ground pepper, to taste",
                "originalName": "Freshly ground pepper, to taste",
                "metaInformation": [
                    "freshly ground",
                    "to taste"
                ],
                "meta": [
                    "freshly ground",
                    "to taste"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 98853,
                "amount": 1,
                "unit": "pound",
                "unitLong": "pound",
                "unitShort": "lb",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "gnocchi",
                "original": "1 pound fresh or frozen gnocchi",
                "originalString": "1 pound fresh or frozen gnocchi",
                "originalName": "fresh or frozen gnocchi",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh gnocchi",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            },
            {
                "id": 11677,
                "amount": 2,
                "unit": "medium",
                "unitLong": "mediums",
                "unitShort": "medium",
                "aisle": "Produce",
                "name": "shallots",
                "original": "2 medium shallots, chopped",
                "originalString": "2 medium shallots, chopped",
                "originalName": "shallots, chopped",
                "metaInformation": [
                    "chopped"
                ],
                "meta": [
                    "chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg"
            },
            {
                "id": 11477,
                "amount": 1,
                "unit": "pound",
                "unitLong": "pound",
                "unitShort": "lb",
                "aisle": "Produce",
                "name": "zucchini",
                "original": "1 pound zucchini, (about 3 small), very thinly sliced lengthwise (see Tip)",
                "originalString": "1 pound zucchini, (about 3 small), very thinly sliced lengthwise (see Tip)",
                "originalName": "zucchini, (about 3 small), very thinly sliced lengthwise (see Tip)",
                "metaInformation": [
                    "very thinly sliced lengthwise",
                    "( 3 small)",
                    "(see Tip)"
                ],
                "meta": [
                    "very thinly sliced lengthwise",
                    "( 3 small)",
                    "(see Tip)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11282,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "onion",
                "original": "onion",
                "originalString": "onion",
                "originalName": "onion",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            }
        ],
        "likes": 3407
    },
    {
        "id": 700798,
        "title": "Sausage, tomato and eggplant gnocchi",
        "image": "https://spoonacular.com/recipeImages/700798-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 6,
        "missedIngredients": [
            {
                "id": 23572,
                "amount": 500,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Frozen;Meat",
                "name": "beef",
                "original": "500g pkt Coles Finest Angus beef, garlic and parsley sausages, casings removed, coarsely chopped",
                "originalString": "500g pkt Coles Finest Angus beef, garlic and parsley sausages, casings removed, coarsely chopped",
                "originalName": "pkt Coles Finest Angus beef, garlic and parsley sausages, casings removed, coarsely chopped",
                "metaInformation": [
                    "coarsely chopped"
                ],
                "meta": [
                    "coarsely chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/beef-cubes-raw.png"
            },
            {
                "id": 11209,
                "amount": 1,
                "unit": "medium",
                "unitLong": "medium",
                "unitShort": "medium",
                "aisle": "Produce",
                "name": "eggplant",
                "original": "1 medium eggplant, cut into 2cm pieces",
                "originalString": "1 medium eggplant, cut into 2cm pieces",
                "originalName": "eggplant, cut into 2cm pieces",
                "metaInformation": [
                    "cut into 2cm pieces"
                ],
                "meta": [
                    "cut into 2cm pieces"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/eggplant.png"
            },
            {
                "id": 2044,
                "amount": 0.5,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce;Spices and Seasonings",
                "name": "fresh basil leaves",
                "original": "1/2 cup fresh basil leaves",
                "originalString": "1/2 cup fresh basil leaves",
                "originalName": "fresh basil leaves",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg"
            },
            {
                "id": 10111529,
                "amount": 200,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Produce",
                "name": "grape tomatoes",
                "original": "200g punnet Perino grape tomatoes",
                "originalString": "200g punnet Perino grape tomatoes",
                "originalName": "punnet Perino grape tomatoes",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cherry-tomatoes.png"
            },
            {
                "id": 1033,
                "amount": 25,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Cheese",
                "name": "parmesan",
                "original": "1/3 cup (25g) finely grated parmesan",
                "originalString": "1/3 cup (25g) finely grated parmesan",
                "originalName": "1/3 cup finely grated parmesan",
                "metaInformation": [
                    "finely grated"
                ],
                "meta": [
                    "finely grated"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
            },
            {
                "id": 10011549,
                "amount": 250,
                "unit": "ml",
                "unitLong": "milliliters",
                "unitShort": "ml",
                "aisle": "Pasta and Rice",
                "name": "pasta sauce",
                "original": "1 cup (250ml) tomato pasta sauce (such as passata)",
                "originalString": "1 cup (250ml) tomato pasta sauce (such as passata)",
                "originalName": "cup tomato pasta sauce (such as passata)",
                "metaInformation": [
                    "(such as passata)"
                ],
                "meta": [
                    "(such as passata)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 10511282,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "brown onion",
                "original": "1 brown onion, finely chopped",
                "originalString": "1 brown onion, finely chopped",
                "originalName": "brown onion, finely chopped",
                "metaInformation": [
                    "finely chopped"
                ],
                "meta": [
                    "finely chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            },
            {
                "id": 98853,
                "amount": 500,
                "unit": "g",
                "unitLong": "grams",
                "unitShort": "g",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "potato gnocchi",
                "original": "500g pkt potato gnocchi",
                "originalString": "500g pkt potato gnocchi",
                "originalName": "pkt potato gnocchi",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            },
            {
                "id": 11477,
                "amount": 1,
                "unit": "medium",
                "unitLong": "medium",
                "unitShort": "medium",
                "aisle": "Produce",
                "name": "zucchini",
                "original": "1 medium zucchini, cut into 2cm pieces",
                "originalString": "1 medium zucchini, cut into 2cm pieces",
                "originalName": "zucchini, cut into 2cm pieces",
                "metaInformation": [
                    "cut into 2cm pieces"
                ],
                "meta": [
                    "cut into 2cm pieces"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11282,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "onion",
                "original": "onion",
                "originalString": "onion",
                "originalName": "onion",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            }
        ],
        "likes": 835
    },
    {
        "id": 950355,
        "title": "One Pan Roasted Gnocchi and Vegetables",
        "image": "https://spoonacular.com/recipeImages/950355-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 6,
        "missedIngredients": [
            {
                "id": 11457,
                "amount": 2,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "baby spinach",
                "original": "2 cups Fresh Baby Spinach",
                "originalString": "2 cups Fresh Baby Spinach",
                "originalName": "Fresh Baby Spinach",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "extendedName": "fresh baby spinach",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            },
            {
                "id": 2044,
                "amount": 2,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Produce;Spices and Seasonings",
                "name": "fresh basil",
                "original": "Fresh Basil",
                "originalString": "Fresh Basil",
                "originalName": "Fresh Basil",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/basil.jpg"
            },
            {
                "id": 10111549,
                "amount": 0.25,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Pasta and Rice",
                "name": "marinara sauce",
                "original": "1/4 cup Marinara Sauce",
                "originalString": "1/4 cup Marinara Sauce",
                "originalName": "Marinara Sauce",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato-sauce-or-pasta-sauce.jpg"
            },
            {
                "id": 10011821,
                "amount": 1,
                "unit": "medium",
                "unitLong": "medium",
                "unitShort": "medium",
                "aisle": "Produce",
                "name": "orange bell pepper",
                "original": "1 medium Orange Bell Pepper, chopped into 1-inch pieces",
                "originalString": "1 medium Orange Bell Pepper, chopped into 1-inch pieces",
                "originalName": "Orange Bell Pepper, chopped into 1-inch pieces",
                "metaInformation": [
                    "chopped"
                ],
                "meta": [
                    "chopped"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/bell-pepper-orange.png"
            },
            {
                "id": 2027,
                "amount": 0.5,
                "unit": "teaspoon",
                "unitLong": "teaspoons",
                "unitShort": "tsp",
                "aisle": "Produce;Spices and Seasonings",
                "name": "oregano",
                "original": "1/2 teaspoon Dried Oregano",
                "originalString": "1/2 teaspoon Dried Oregano",
                "originalName": "Dried Oregano",
                "metaInformation": [
                    "dried"
                ],
                "meta": [
                    "dried"
                ],
                "extendedName": "dried oregano",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/oregano.jpg"
            },
            {
                "id": 1033,
                "amount": 2,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Cheese",
                "name": "parmesan cheese",
                "original": "Grated Parmesan Cheese",
                "originalString": "Grated Parmesan Cheese",
                "originalName": "Grated Parmesan Cheese",
                "metaInformation": [
                    "grated"
                ],
                "meta": [
                    "grated"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 98853,
                "amount": 8,
                "unit": "ounce",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "potato gnocchi",
                "original": "1/2 16 ounce package Potato Gnocchi, shelf stable, not frozen",
                "originalString": "1/2 16 ounce package Potato Gnocchi, shelf stable, not frozen",
                "originalName": "package Potato Gnocchi, shelf stable, not frozen",
                "metaInformation": [
                    "frozen"
                ],
                "meta": [
                    "frozen"
                ],
                "extendedName": "frozen potato gnocchi",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            },
            {
                "id": 11677,
                "amount": 2,
                "unit": "small",
                "unitLong": "smalls",
                "unitShort": "small",
                "aisle": "Produce",
                "name": "shallots",
                "original": "2 small Shallots, quartered",
                "originalString": "2 small Shallots, quartered",
                "originalName": "Shallots, quartered",
                "metaInformation": [
                    "quartered"
                ],
                "meta": [
                    "quartered"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg"
            },
            {
                "id": 11477,
                "amount": 1,
                "unit": "small",
                "unitLong": "small",
                "unitShort": "small",
                "aisle": "Produce",
                "name": "zucchini squash",
                "original": "1 small Zucchini Squash, sliced in half lengthwise and chopped into 1-inch pieces",
                "originalString": "1 small Zucchini Squash, sliced in half lengthwise and chopped into 1-inch pieces",
                "originalName": "Zucchini Squash, sliced in half lengthwise and chopped into 1-inch pieces",
                "metaInformation": [
                    "sliced in half lengthwise and chopped into 1-inch pieces"
                ],
                "meta": [
                    "sliced in half lengthwise and chopped into 1-inch pieces"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11282,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "onion",
                "original": "onion",
                "originalString": "onion",
                "originalName": "onion",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            }
        ],
        "likes": 2
    },
    {
        "id": 492059,
        "title": "Skillet Summer Veggies with Gnocchi",
        "image": "https://spoonacular.com/recipeImages/492059-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 3,
        "missedIngredientCount": 7,
        "missedIngredients": [
            {
                "id": 10011167,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "fresh corn kernels",
                "original": "1 cup fresh corn kernels",
                "originalString": "1 cup fresh corn kernels",
                "originalName": "fresh corn kernels",
                "metaInformation": [
                    "fresh"
                ],
                "meta": [
                    "fresh"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/corn.png"
            },
            {
                "id": 11052,
                "amount": 2,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "fresh string beans",
                "original": "2 cups fresh string beans, ends trimmed, cut in half",
                "originalString": "2 cups fresh string beans, ends trimmed, cut in half",
                "originalName": "fresh string beans, ends trimmed, cut in half",
                "metaInformation": [
                    "fresh",
                    "ends trimmed",
                    "cut in half"
                ],
                "meta": [
                    "fresh",
                    "ends trimmed",
                    "cut in half"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/green-beans-or-string-beans.jpg"
            },
            {
                "id": 11215,
                "amount": 4,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "garlic cloves",
                "original": "4 fat cloves garlic, minced",
                "originalString": "4 fat cloves garlic, minced",
                "originalName": "fat cloves garlic, minced",
                "metaInformation": [
                    "minced"
                ],
                "meta": [
                    "minced"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
            },
            {
                "id": 1022027,
                "amount": 1,
                "unit": "teaspoon",
                "unitLong": "teaspoon",
                "unitShort": "tsp",
                "aisle": "Spices and Seasonings",
                "name": "italian seasoning",
                "original": "1 teaspoon dried Italian seasoning",
                "originalString": "1 teaspoon dried Italian seasoning",
                "originalName": "dried Italian seasoning",
                "metaInformation": [
                    "dried",
                    "italian"
                ],
                "meta": [
                    "dried",
                    "italian"
                ],
                "extendedName": "dried italian seasoning",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/dried-herbs.png"
            },
            {
                "id": 1033,
                "amount": 3,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Cheese",
                "name": "parmesan cheese",
                "original": "parmesan cheese, grated, for serving",
                "originalString": "parmesan cheese, grated, for serving",
                "originalName": "parmesan cheese, grated, for serving",
                "metaInformation": [
                    "grated",
                    "for serving"
                ],
                "meta": [
                    "grated",
                    "for serving"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/parmesan.jpg"
            },
            {
                "id": 1032009,
                "amount": 1,
                "unit": "pinch",
                "unitLong": "pinch",
                "unitShort": "pinch",
                "aisle": "Spices and Seasonings",
                "name": "red pepper flakes",
                "original": "a pinch or more of red pepper flakes, optional",
                "originalString": "a pinch or more of red pepper flakes, optional",
                "originalName": "a or more of red pepper flakes, optional",
                "metaInformation": [
                    "red"
                ],
                "meta": [
                    "red"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-pepper-flakes.jpg"
            },
            {
                "id": 11916,
                "amount": 0.5,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Canned and Jarred",
                "name": "roasted red pepper",
                "original": "1/2 roasted red pepper, thinly sliced",
                "originalString": "1/2 roasted red pepper, thinly sliced",
                "originalName": "roasted red pepper, thinly sliced",
                "metaInformation": [
                    "red",
                    "thinly sliced"
                ],
                "meta": [
                    "red",
                    "thinly sliced"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-pepper.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 98853,
                "amount": 12,
                "unit": "ounces",
                "unitLong": "ounces",
                "unitShort": "oz",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "gnocchi",
                "original": "12 ounces gnocchi",
                "originalString": "12 ounces gnocchi",
                "originalName": "gnocchi",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            },
            {
                "id": 10511282,
                "amount": 1,
                "unit": "large",
                "unitLong": "large",
                "unitShort": "large",
                "aisle": "Produce",
                "name": "yellow onion",
                "original": "1 large yellow or red onion, diced",
                "originalString": "1 large yellow or red onion, diced",
                "originalName": "yellow or red onion, diced",
                "metaInformation": [
                    "diced",
                    "red",
                    "yellow"
                ],
                "meta": [
                    "diced",
                    "red",
                    "yellow"
                ],
                "extendedName": "red diced yellow onion",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            },
            {
                "id": 11477,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "zucchini",
                "original": "1 zucchini, thinly sliced into coins",
                "originalString": "1 zucchini, thinly sliced into coins",
                "originalName": "zucchini, thinly sliced into coins",
                "metaInformation": [
                    "thinly sliced into coins"
                ],
                "meta": [
                    "thinly sliced into coins"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11282,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "onion",
                "original": "onion",
                "originalString": "onion",
                "originalName": "onion",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
            }
        ],
        "likes": 365
    }
]

const styles = StyleSheet.create({
    foodImage: {
      width: 300,
      height: 100,
    },
    recipeTitle: {
        padding: '5px'
    },
    missedIngredient: {
        paddingTop: '5px'
    }
  });

  
export default function Search() {
    const [text, setText] = useState('');
    const [results, setResult] = useState([]);
    const [submit, setSubmit] = useState(false);

    const checkTextLength = () => {
        if (text.length < 2) {
            return 'Please enter an item or more to cook with.'
        } else {
            return `Ohh - ${text}, nice.`
        }
    }

    const submitSearch = async () => {
        setSubmit(true);
        const data = await findByIngredients(text, 5);

        setResult(data);
    }

    const DisplayResults = () => (
          results.map(recipe => (
            <Card  style={styles.card}>
                <Image
                    style={styles.foodImage}
                    source={{
                        uri: recipe.image
                    }}
                />
                <Card.Title style={styles.recipeTitle}>{recipe.title}</Card.Title>
                <Text>{recipe.missedIngredients.length > 0 ? `You need ${recipe.missedIngredientCount} extra ingredients: ` : 'No extra ingredients needed.'}</Text>
                {
                    (recipe.missedIngredients).map((ingredient, i) => {
                    return (
                        <View key={i}>       
                        <Text style={styles.missedIngredient}>{ingredient.name}</Text>
                        </View>
                    );
                    })
                }
                <hr/>
            </Card>
          ))
      ); 

    return (
        <>
        <TextInput
            style={{height: 40, width: 270, margin: 20}}
            placeholder=' What ingredients do you have at home?'
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
        <Button
                onPress={() => submitSearch()}
                title="GO!"
                color="#841584"
        />
        {submit ? <Text style={{margin: 20}}> {checkTextLength()} </Text> : null} 
        {(results.length > 0) ? <DisplayResults /> : null } 
        </>
    );

}

