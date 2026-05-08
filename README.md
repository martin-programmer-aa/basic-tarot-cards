# Basic Tarot Cards

# Project Description

Basic Tarot Cards is a full-stack web application that allows users to interact with a virtual tarot card experience. Users can log in, draw tarot cards, and view card meanings through a connected frontend and backend system.

This project demonstrates frontend development, backend integration, and persistent data storage while providing an interactive user experience.



# Problem Being Solved

Many tarot card applications are overly complex or lack interactive functionality. This project provides a lightweight and user-friendly tarot card system that allows users to easily explore tarot cards and readings through a clean web interface.

The project also demonstrates how frontend systems communicate with backend services and data storage.



# Features

- User login system
- Interactive tarot card drawing
- Randomized card selection
- Card descriptions and meanings
- Frontend and backend integration
- Persistent data storage
- Responsive user interface
- Dynamic content updates
- Flask backend routing
- Localhost server hosting



# Frontend Technologies Used

- HTML
- CSS
- JavaScript

The frontend is responsible for:
- User interface design
- Displaying tarot cards
- User interaction
- Dynamic page updates
- Navigation between pages



# Backend Technologies Used

- Python
- Flask

The backend is responsible for:
- Application routing
- Server-side processing
- Handling requests and responses
- Managing application logic
- Connecting frontend functionality



# Data Storage Explanation

The application uses local/browser storage and structured data files to maintain persistent application data.

The storage system is used for:
- Saving tarot card information
- Maintaining user interaction data
- Persisting application functionality
- Supporting backend operations


# Tech Stack Overview

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

## Development Tools
- Visual Studio Code
- GitHub
- Git



# Language & Framework Justification

JavaScript was selected for frontend functionality because it allows dynamic and interactive user experiences directly in the browser.

Python and Flask were selected for the backend because they provide a lightweight and efficient framework for server management, routing, and backend logic.

Local storage and data files were selected because they provide persistent storage while remaining lightweight and easy to manage for this application.



# Installation Instructions

## Required Software

Before running the project, make sure the following software is installed:

- Visual Studio Code
- Python 3.x
- Git



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



# Clone the Repository

```bash
git clone https://github.com/martin-programmer-aa/basic-tarot-cards.git
```


# Open the Project

1. Open Visual Studio Code
2. Select **File → Open Folder**
3. Open the `basic-tarot-cards` project folder



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


# Install Required Libraries

Open the terminal inside Visual Studio Code and install the required libraries:

```bash
pip install flask
```

Install any additional libraries if required by the project.



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



# Usage Instructions

1. Start the backend server using the terminal
2. Open the localhost login page in your browser
3. Log into the application
4. Interact with the tarot card system
5. Draw tarot cards
6. View card meanings and information
7. Continue interacting with the application features
8. Data will persist using the application's storage system


# Project Structure

```plaintext
basic-tarot-cards/
│
├── instance/ ----> this was created automatically after creating the database in the app.py file (should be commented out)
│   ├── database.db
│
├── static/
│   ├── script.js
│   ├── style.css
│
├── templates/
│   ├── dashboard.html
│   ├── login.html
│   └── register.html
│
├── app.py
├── README.md
```

---

# Challenges & Solutions

## Challenge 1: Connecting Frontend and Backend

One challenge was ensuring that the frontend properly communicated with the backend server. This was solved by implementing Flask routes and carefully testing frontend-to-backend communication.

## Challenge 2: Persistent Data Storage

Another challenge involved creating persistent data storage functionality. This was solved by implementing browser local storage and structured data files.

## Challenge 3: Dynamic User Interaction

Creating a responsive and interactive user experience required JavaScript event handling and frontend updates. This was solved by improving event listeners and UI responsiveness.

## Challenge 4: Application Routing

Managing multiple pages and login navigation required backend routing through Flask. This was solved by creating organized application routes and template handling.


# User Testing Feedback Document

## User Tester #1

### Name
John

### Date Tested
5-5-2026

### Tasks Completed
- Logged into the application
- Drew multiple tarot cards
- Navigated between pages
- Tested responsiveness
- Tested card interactions

### Feedback Provided
- Login process worked correctly
- Buttons needed slightly better spacing
- Card meanings were informative
- Application was easy to navigate

### Improvements Implemented
- Improved button spacing
- Adjusted page layout consistency
- Improved readability of text sections


## User Tester #2

### Name
Zach

### Date Tested
5-5-2026

### Tasks Completed
- Logged into the application
- Drew tarot cards
- Tested browser responsiveness
- Navigated through application features

### Feedback Provided
- Requested clearer instructions on the homepage
- Suggested improving mobile responsiveness
- Application loaded successfully

### Improvements Implemented
- Added clearer navigation instructions
- Improved responsive spacing for smaller screens
- Updated layout alignment



## User Tester #3

### Name
Kevin

### Date Tested
5-5-2026

### Tasks Completed
- Tested backend functionality
- Drew tarot cards repeatedly
- Tested page loading
- Tested application interactions

### Feedback Provided
- Backend functionality worked correctly
- Suggested improving card display formatting
- Requested better visual spacing

### Improvements Implemented
- Improved tarot card formatting
- Updated spacing and alignment
- Improved visual consistency across pages



# Final Improvements Implemented

Based on user testing feedback, the following improvements were made:

- Improved button spacing
- Improved mobile responsiveness
- Added clearer instructions
- Enhanced tarot card formatting
- Improved text readability
- Improved layout consistency
- Updated page alignment
- Enhanced frontend responsiveness



# Future Improvements

- Add multiple tarot spreads
- Add user accounts and saved readings
- Add animations and sound effects
- Store reading history in a database
- Improve accessibility features
- Deploy the application publicly online
- Add additional tarot card decks
- Improve visual effects and transitions



# GitHub Repository

Repository Link:

https://github.com/martin-programmer-aa/basic-tarot-cards



# Author

Created by Ms. Martin
