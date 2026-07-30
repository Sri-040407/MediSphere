import os
from openai import OpenAI(
client = OpenAI(api_key=os.environ["GROQ_API_KEY"],base_url="https://api.groq.com/openaiv1")
)
response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {"role": "user", "content": "Say hello,world!"},
    ]
)
print(response.choices[0].message.content)
