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
## 🚀 Features
✅ Automated News Summarization<br>
✅ Daily Email Delivery
## 🖼️ Workflow Screenshot
<img width="1653" height="624" alt="Screenshot 2025-08-17 224150" src="https://github.com/user-attachments/assets/f574071f-29b3-49a6-b4a7-fd7a45050859" />
## 📝 Output<br>
<b>Subject:</b> Daily News Digest – August 18, 2025<br>
<b>Body</b>:<br>
- <i>Summary:</i> #1; Duolingo CEO Luis von Ahn clarified that his recent statement about the company becoming an “AI-first company” was misunderstood due to a lack of context. He addressed the backlash by explaining that the messaging around the AI-focused direction needed better explanation.<br>
- <i>Summary:</i> #2; AI-powered stuffed animals are being developed as interactive companions for children, embedding chatbot technology inside plush toys. While they aim to provide an engaging alternative to traditional screen time, concerns remain about their effectiveness and potential drawbacks. These AI plushies offer novelty and interaction but may not fully replace the benefits of other forms of play or social engagement for kids.<br>
- <i>Summary:</i> #3; Anthropic has introduced new features in its latest Claude AI models that enable them to recognize and end harmful or abusive conversations. These enhancements allow the AI to protect itself by proactively stopping interactions that involve abuse or harmful content.
