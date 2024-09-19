# LegalMind

**LegalMind** is an AI-powered legal assistant that leverages the **Gemini Model by Google** to provide comprehensive legal support based on the **Indian Penal Code (IPC)**. This tool is designed to help users by summarizing case documents, answering queries, and offering situation-based legal assistance. LegalMind also provides relevant case suggestions from previous case data.

## Features

- **Case Summarization:** Upload your case documents and receive a concise summary based on the Indian Penal Code.
- **Legal Queries:** Ask specific questions related to your uploaded documents or general legal inquiries.
- **Situation-Based Legal Assistance:** Describe a legal situation, and LegalMind will provide you with tailored legal guidance and suggestions.
- **Case Suggestions:** Get recommendations on relevant past cases related to your query or document.

## Tech Stack

- **Language Model:** Gemini Model by Google
- **Backend:** Python, Flask
- **Frontend:** React.js
- **Database:** MongoDB for storing case data and user documents
- **Deployment:** Render (Flask API), Netlify (Frontend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshP2109/LegalMind.git
   cd legalmind
   ```

2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

<!-- 3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Run the Flask API:
   ```bash
   flask run
   ```

5. Run the frontend:
   ```bash
   cd frontend
   npm start
   ``` -->
3. Run the frontend:
   ```bash
   streamlit run steam.py
   ```

## How to Use

1. Upload your legal documents through the interface.
2. Query the documents for summaries or legal clarifications.
3. Use the situation-based assistance feature to receive context-aware legal advice.
4. Explore relevant past cases suggested by the AI model.

## Limitations

- Focuses primarily on the Indian legal system, specifically the Indian Penal Code (IPC).
- Designed for Indian law, and may not be directly applicable to other legal systems without significant modifications.

## Future Enhancements

- Expand support to other legal domains and international legal systems.
- Add multi-language support for document queries and summaries.
- Implement large-scale testing in real legal scenarios.

## Contributing

Feel free to submit pull requests or issues if you find bugs or want to contribute to improving LegalMind.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with detailed explanations of the changes.

