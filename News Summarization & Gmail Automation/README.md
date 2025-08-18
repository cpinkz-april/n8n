# 📰 News Summarization & Gmail Automation
## 📌 Project Overview
The workflow pulls the latest news articles from TechCrunch AI Feed, generates summaries, then delivers them to my <b>Gmail inbox</b>.
## ⚙️ Workflow Steps
### 1. Trigger Node
Start the workflow every midnight at 12 AM
### 2. HTTP Request Node
- Connect to an RSS Feed
- Retrieve the latest headlines in JSON format
### 3. AI Summarization Node
- Extract the title, and content
- Generate a summary
### 4. Gmail Node
- Send the news to my Gmail account
- Subject: “Daily News Digest”
