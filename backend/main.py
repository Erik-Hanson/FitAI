import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import spacy

load_dotenv("../.env")

app = FastAPI()
nlp = spacy.load("./food_ner_model")

origins = [
    "http://localhost",
    "http://localhost:8000",
    "exp://",
    "*",
    os.environ["EXPO_URL"],
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Data(BaseModel):
    user: str


class FoodEntryData(BaseModel):
    """
    Represents a food entry submitted by a user.

    Fields:
    - text: str - the text of the food entry
    """

    text: str


# i have two labels: meal and food_name
# i want to extract the meal and food_name from the text
# and then return the meal and food_name as a dictionary
def parse_food_entry(text):
    doc = nlp(text)

    food_name = None
    meal = None
    print(f"food from user input :{text}")
    for ent in doc.ents:
        if ent.label_ == "FOOD_NAME":
            food_name = ent.text
        elif ent.label_ == "MEAL":
            meal = ent.text
    print(f"food_name: {food_name}")
    print(f"meal: {meal}")

    return {"food_name": food_name, "meal": meal}


@app.post("/create_food_entry")
def create_food_entry(food_entry_data: FoodEntryData):
    # print(f"got {food_entry_data.text}")
    text = parse_food_entry(food_entry_data.text)
    return {"text": text}


@app.get("/test_connection")
async def test_connection():
    return {"message": "connection successful"}
