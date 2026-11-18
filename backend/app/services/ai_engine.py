import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def debug_code(code, error):
    try:
        prompt = f"""
You are an expert programmer.

Code:
{code}

Error:
{error}

Provide:
1. Explanation
2. Fixed Code
3. Why fix works
"""

        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"❌ AI Error: {str(e)}"