import spacy

custom_nlp = spacy.load("./food_ner_model")
text = "I had 3 servings of salad for lunch."
doc = custom_nlp(text)
print("Entities in '%s'" % text)

for ent in doc.ents:
    print(ent.label_, ent.text)

food_name = None
meal = None

for ent in doc.ents:
    if ent.label_ == "FOOD_NAME":
        food_name = ent.text
    elif ent.label_ == "MEAL":
        meal = ent.text

print("Food name:", food_name)
print("Meal:", meal)
