from fastapi import APIRouter
from models.schema import DebugRequest
from services.ai_engine import debug_code

router = APIRouter(prefix="/debug", tags=["Debug"])

@router.post("/")
def debug(request: DebugRequest):
    result = debug_code(request.code, request.error)
    return {"result": result}