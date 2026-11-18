from fastapi import FastAPI
from routes.debug import router as debug_router
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.include_router(debug_router)

@app.get("/")
def home():
    return {"message": "DebugMind AI is running 🚀"}