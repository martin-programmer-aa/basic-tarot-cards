# Basic Tarot Cards

## Project Description

Basic Tarot Cards is a full-stack web application that allows users to interact with a virtual tarot card experience. Users can log in, draw tarot cards, and view card meanings through a connected frontend and backend system.

This project demonstrates frontend development, backend integration, and persistent data storage while providing an interactive user experience.

---

# Problem Being Solved

Many tarot card applications are overly complex or lack interactive functionality. This project provides a lightweight and user-friendly tarot card system that allows users to easily explore tarot cards and readings through a clean web interface.

The project also demonstrates how frontend systems communicate with backend services and data storage.

---

# Features

- User login system
- Interactive tarot card drawing
- Randomized card selection
- Card descriptions and meanings
- Frontend and backend integration
- Persistent data storage
- Responsive user interface
- Dynamic content updates

---

# Tech Stack

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Python
- Flask

## Data Storage
- Browser Local Storage
- JSON/Data File Storage

---

# Language & Framework Justification

JavaScript was selected for frontend functionality because it allows dynamic and interactive user experiences directly in the browser.

Python and Flask were chosen for the backend because they provide a lightweight and simple framework for routing, server management, and backend logic.

Local storage and file-based storage were used to provide persistent data handling while keeping the application simple and efficient.

---

# Installation Instructions

## Required Software

Before running the project, make sure the following software is installed:

- Visual Studio Code
- Python 3.x
- Git

---

# Required VS Code Extensions

Install the following Visual Studio Code extensions:

- Python Extension (Microsoft)
- Pylance
- Live Server (optional)

These extensions help with:
- Python support
- Library management
- Debugging
- Running the application correctly

---

# Clone the Repository

```bash
git clone https://github.com/martin-programmer-aa/basic-tarot-cards.git
```

---

# Open the Project

1. Open Visual Studio Code
2. Select **File → Open Folder**
3. Open the `basic-tarot-cards` project folder

---

# Select the Correct Python Interpreter

1. In Visual Studio Code, press:

```plaintext
Ctrl + Shift + P
```

2. Search for:

```plaintext
Python: Select Interpreter
```

3. Select the correct installed Python version

This step is required to ensure all Python libraries and dependencies work properly.

---

# Install Required Libraries

Open the terminal inside Visual Studio Code and install the required libraries:

```bash
pip install flask
```

(Install any additional libraries if needed)

---

# Running the Application

Open the Visual Studio Code terminal and run:

```bash
python .\app.py
```

Once the server starts successfully, open your browser and navigate to:

```plaintext
http://127.0.0.1:5000/login
```

OR

```plaintext
http://localhost:5000/login
```

---

# Usage Instructions

1. Start the backend server using the terminal
2. Open the localhost login page in your browser
3. Log into the application
4. Interact with the tarot card system
5. Draw cards and view card meanings
6. Data will be stored using the application's storage system

---

# Screenshots / Demo

## Login Page
(Add screenshot here)

## Tarot Card Draw
(Add screenshot here)

## Card Meaning Display
(Add screenshot here)

## Backend/Data Storage Example
(Add screenshot here)

---

# Project Structure

```plaintext
basic-tarot-cards/
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   ├── login.html
│   ├── home.html
│   └── tarot.html
│
├── data/
│   └── tarot-data.json
│
├── app.py
├── README.md
└── requirements.txt
```

---

# Challenges & Solutions

## Challenge 1: Connecting Frontend and Backend

One challenge was ensuring that the frontend properly communicated with the backend server. This was solved by implementing Flask routes and testing requests carefully.

## Challenge 2: Persistent Data Storage

Another challenge involved storing tarot card data persistently. This was solved using local storage and structured data files.

## Challenge 3: Dynamic User Interaction

Creating a responsive and interactive user experience required careful JavaScript event handling and frontend updates.

---

# User Testing

User testing was conducted with 3 or more users.

## Feedback Received

- Improve button responsiveness
- Add clearer instructions
- Improve mobile responsiveness
- Make card meanings easier to read

## Improvements Implemented

- Updated button styling and responsiveness
- Added clearer navigation instructions
- Improved layout spacing for mobile devices
- Enhanced readability of tarot card descriptions

---

# Future Improvements

- Add multiple tarot spreads
- Add user accounts and saved readings
- Add animations and sound effects
- Store reading history in a database
- Improve accessibility features
- Deploy the application publicly online

---

# GitHub Repository

Repository Link:

https://github.com/martin-programmer-aa/basic-tarot-cards

---

# GitHub Commit Examples

Examples of meaningful commits used during development:

- Added Flask backend routes
- Connected frontend to backend
- Implemented tarot card logic
- Added local storage support
- Fixed login routing issue
- Updated README documentation
- Improved responsive design

---

# Requirements Checklist

- Fully functional frontend
- Fully functional backend
- Frontend and backend connected
- Persistent data storage implemented
- User testing completed with 3+ users
- Feedback documented
- Improvements implemented
- Professional README included
- Organized GitHub repository
- Meaningful GitHub commits
- Fully functional application

---

# Author

Created by Martin

---

# License

This project is for educational purposes only.
