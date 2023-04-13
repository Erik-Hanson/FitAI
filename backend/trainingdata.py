TRAINING_DATA = [
    (
        "I ate a banana, 2 grapes, and 3 strawberries.",
        {
            "entities": [
                (8, 14, "FOOD_NAME"),
                [18, 24, "FOOD_NAME"],
                [32, 44, "FOOD_NAME"],
            ]
        },
    ),
    (
        "1 sandwich, 4 cookies, and a cup of tea.",
        {
            "entities": [
                (2, 10, "FOOD_NAME"),
                [14, 21, "FOOD_NAME"],
                [36, 39, "FOOD_NAME"],
            ]
        },
    ),
    (
        "2 slices of pizza and 3 tacos.",
        {"entities": [(12, 17, "FOOD_NAME"), [24, 29, "FOOD_NAME"]]},
    ),
    (
        "Ate 1 burger, 5 fries, and 1 soda.",
        {
            "entities": [
                (6, 12, "FOOD_NAME"),
                [16, 21, "FOOD_NAME"],
                [29, 33, "FOOD_NAME"],
            ]
        },
    ),
    (
        "4 sushi rolls, 2 bowls of miso soup.",
        {"entities": [(2, 13, "FOOD_NAME"), [26, 35, "FOOD_NAME"]]},
    ),
    (
        "1 apple, 2 oranges, and 3 pears.",
        {
            "entities": [
                (2, 7, "FOOD_NAME"),
                [11, 18, "FOOD_NAME"],
                [26, 31, "FOOD_NAME"],
            ]
        },
    ),
    (
        "2 cups of coffee, 1 croissant, and a yogurt.",
        {
            "entities": [
                (10, 16, "FOOD_NAME"),
                [20, 29, "FOOD_NAME"],
                [37, 43, "FOOD_NAME"],
            ]
        },
    ),
    (
        "3 pancakes, 1 sausage, and 2 eggs.",
        {
            "entities": [
                (2, 10, "FOOD_NAME"),
                [14, 21, "FOOD_NAME"],
                [29, 33, "FOOD_NAME"],
            ]
        },
    ),
    (
        "Ate a salad, 1 slice of cake, and 2 scoops of ice cream.",
        {
            "entities": [
                (6, 11, "FOOD_NAME"),
                [24, 28, "FOOD_NAME"],
                [46, 55, "FOOD_NAME"],
            ]
        },
    ),
    (
        "2 hotdogs, 3 chicken wings, and a bag of chips.",
        {
            "entities": [
                (2, 9, "FOOD_NAME"),
                [13, 26, "FOOD_NAME"],
                [41, 46, "FOOD_NAME"],
            ]
        },
    ),
    (
        "1 bowl of cereal, 2 toasts, and a glass of orange juice.",
        {
            "entities": [
                (10, 16, "FOOD_NAME"),
                [20, 26, "FOOD_NAME"],
                [43, 55, "FOOD_NAME"],
            ]
        },
    ),
    (
        "3 carrots, 1 bell pepper, and 2 tomatoes.",
        {
            "entities": [
                (2, 9, "FOOD_NAME"),
                [13, 24, "FOOD_NAME"],
                [32, 40, "FOOD_NAME"],
            ]
        },
    ),
    (
        "Ate 2 cheeseburgers and 3 servings of fries.",
        {"entities": [(6, 19, "FOOD_NAME"), [38, 43, "FOOD_NAME"]]},
    ),
    (
        "4 cups of tea, 1 muffin, and 3 cookies.",
        {
            "entities": [
                (10, 13, "FOOD_NAME"),
                [17, 23, "FOOD_NAME"],
                [31, 38, "FOOD_NAME"],
            ]
        },
    ),
    (
        "I ate 2 apples, a banana, and 5 strawberries.",
        {
            "entities": [
                (8, 14, "FOOD_NAME"),
                [18, 24, "FOOD_NAME"],
                [32, 44, "FOOD_NAME"],
            ]
        },
    ),
    (
        "3 fish sticks, 1 bowl of soup, and 2 slices of bread.",
        {
            "entities": [
                (2, 13, "FOOD_NAME"),
                [25, 29, "FOOD_NAME"],
                [47, 52, "FOOD_NAME"],
            ]
        },
    ),
    (
        "1 chocolate bar, 2 almonds, and 4 cashews.",
        {
            "entities": [
                (2, 15, "FOOD_NAME"),
                [19, 26, "FOOD_NAME"],
                [34, 41, "FOOD_NAME"],
            ]
        },
    ),
    (
        "Ate a bagel, 1 cup of coffee, and 2 donuts.",
        {
            "entities": [
                (6, 11, "FOOD_NAME"),
                [22, 28, "FOOD_NAME"],
                [36, 42, "FOOD_NAME"],
            ]
        },
    ),
    (
        "2 plates of pasta and 3 slices of garlic bread.",
        {"entities": [(12, 17, "FOOD_NAME"), [34, 46, "FOOD_NAME"]]},
    ),
    (
        "1 cup of milk, 3 waffles, and 4 sausages.",
        {
            "entities": [
                (9, 13, "FOOD_NAME"),
                [17, 24, "FOOD_NAME"],
                [32, 40, "FOOD_NAME"],
            ]
        },
    ),
    (
        "I had 1 serving of pizza for dinner.",
        {"entities": [(19, 24, "FOOD_NAME"), [29, 35, "MEAL"]]},
    ),
    (
        "2 servings of pasta for lunch today.",
        {"entities": [(14, 19, "FOOD_NAME"), [24, 29, "MEAL"]]},
    ),
    (
        "I had 2 slices of pizza for dinner.",
        {"entities": [(18, 23, "FOOD_NAME"), [28, 34, "MEAL"]]},
    ),
    ("3 tacos for lunch", {"entities": [(2, 7, "FOOD_NAME"), [12, 17, "MEAL"]]}),
    (
        "I had 2 slices of pizza for dinner.",
        {"entities": [(18, 23, "FOOD_NAME"), [28, 34, "MEAL"]]},
    ),
    ("3 tacos for lunch", {"entities": [(2, 7, "FOOD_NAME"), [12, 17, "MEAL"]]}),
    (
        "1 bowl of cereal for breakfast",
        {"entities": [(10, 16, "FOOD_NAME"), [21, 30, "MEAL"]]},
    ),
    (
        "I ate 5 cookies for a snack.",
        {"entities": [(8, 15, "FOOD_NAME"), [22, 27, "MEAL"]]},
    ),
    (
        "4 pieces of sushi for dinner",
        {"entities": [(12, 17, "FOOD_NAME"), [22, 28, "MEAL"]]},
    ),
    (
        "2 cups of coffee for breakfast",
        {"entities": [(10, 16, "FOOD_NAME"), [21, 30, "MEAL"]]},
    ),
    (
        "Enjoyed 3 pancakes for lunch",
        {"entities": [(10, 18, "FOOD_NAME"), [23, 28, "MEAL"]]},
    ),
    ("1 sandwich for dinner", {"entities": [(2, 10, "FOOD_NAME"), [15, 21, "MEAL"]]}),
    (
        "4 pieces of fried chicken for dinner",
        {"entities": [(12, 25, "FOOD_NAME"), [30, 36, "MEAL"]]},
    ),
    (
        "Had 6 almonds as a snack",
        {"entities": [(6, 13, "FOOD_NAME"), [19, 24, "MEAL"]]},
    ),
    (
        "2 cups of tea for breakfast",
        {"entities": [(10, 13, "FOOD_NAME"), [18, 27, "MEAL"]]},
    ),
    (
        "I ate 1 burger for lunch",
        {"entities": [(8, 14, "FOOD_NAME"), [19, 24, "MEAL"]]},
    ),
    (
        "3 bowls of salad for dinner",
        {"entities": [(11, 16, "FOOD_NAME"), [21, 27, "MEAL"]]},
    ),
    ("Ate 4 hotdogs for lunch", {"entities": [(6, 13, "FOOD_NAME"), [18, 23, "MEAL"]]}),
    (
        "1 slice of cake for dessert",
        {"entities": [(11, 15, "FOOD_NAME"), [20, 27, "MEAL"]]},
    ),
    (
        "2 scoops of ice cream for a snack",
        {"entities": [(12, 21, "FOOD_NAME"), [28, 33, "MEAL"]]},
    ),
    (
        "I had 5 chicken wings for dinner",
        {"entities": [(8, 21, "FOOD_NAME"), [26, 32, "MEAL"]]},
    ),
    (
        "3 bowls of pasta for lunch",
        {"entities": [(11, 16, "FOOD_NAME"), [21, 26, "MEAL"]]},
    ),
    (
        "Ate 1 donut for breakfast",
        {"entities": [(6, 11, "FOOD_NAME"), [16, 25, "MEAL"]]},
    ),
    (
        "Had 2 chocolate bars as a snack",
        {"entities": [(6, 20, "FOOD_NAME"), [26, 31, "MEAL"]]},
    ),
    (
        "I ate 3 eggs for breakfast",
        {"entities": [(8, 12, "FOOD_NAME"), [17, 26, "MEAL"]]},
    ),
    (
        "4 cups of orange juice for lunch",
        {"entities": [(10, 22, "FOOD_NAME"), [27, 32, "MEAL"]]},
    ),
    (
        "2 servings of lasagna for dinner",
        {"entities": [(14, 21, "FOOD_NAME"), [26, 32, "MEAL"]]},
    ),
    (
        "Enjoyed 1 muffin for a snack",
        {"entities": [(10, 16, "FOOD_NAME"), [23, 28, "MEAL"]]},
    ),
    (
        "I had 5 shrimp for lunch",
        {"entities": [(8, 14, "FOOD_NAME"), [19, 24, "MEAL"]]},
    ),
    (
        "1 piece of steak for dinner",
        {"entities": [(11, 16, "FOOD_NAME"), [21, 27, "MEAL"]]},
    ),
    ("4 fish sticks for lunch", {"entities": [(2, 13, "FOOD_NAME"), [18, 23, "MEAL"]]}),
    (
        "Ate 2 bananas for breakfast",
        {"entities": [(6, 13, "FOOD_NAME"), [18, 27, "MEAL"]]},
    ),
    (
        "3 scoops of yogurt for a snack",
        {"entities": [(12, 18, "FOOD_NAME"), [25, 30, "MEAL"]]},
    ),
    (
        "1 plate of nachos for dinner",
        {"entities": [(11, 17, "FOOD_NAME"), [22, 28, "MEAL"]]},
    ),
    (
        "2 glasses of milk for breakfast",
        {"entities": [(2, 12, "FOOD_NAME"), [22, 31, "MEAL"]]},
    ),
    (
        "4 chicken nuggets for lunch",
        {"entities": [(2, 17, "FOOD_NAME"), [22, 27, "MEAL"]]},
    ),
]
