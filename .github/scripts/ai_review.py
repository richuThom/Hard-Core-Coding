import os
import openai
import subprocess

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_diff():
    result = subprocess.run(
        ["git", "diff", "origin/main", "--"],
        stdout=subprocess.PIPE,
        text=True
    )
    return result.stdout

def review_code(diff):
    prompt = f"You're a senior software engineer. Review this code diff and suggest improvements:\n\n{diff}"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response['choices'][0]['message']['content']

if __name__ == "__main__":
    diff = get_diff()
    if diff.strip():
        feedback = review_code(diff)
        print("🔍 AI Code Review:\n", feedback)
    else:
        print("✅ No code changes to review.")
