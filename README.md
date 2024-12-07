# Coding Challenges Platform

## Project Description
The **Coding Challenges Platform** is a personal project designed to provide an interactive platform for solving and evaluating coding challenges. It allows users to:
- Attempt a variety of coding challenges.
- Write and test code using a built-in code editor.
- Receive real-time feedback on submissions.
- Track their progress and achievements.

The platform also integrates with AI to dynamically generate new coding challenges, ensuring a fresh and engaging experience for users.

---

## Features
- **Dynamic Coding Challenges**: AI-powered challenge generation using OpenAI's GPT API.
- **Code Editor**: Built-in code editor using Monaco Editor.
- **Code Execution**: Evaluate user submissions with secure sandboxing.
- **Authentication**: Firebase Authentication for secure login and signup.
- **Progress Tracking**: User dashboard with completed challenges and achievements.
- **Real-Time Feedback**: Instant feedback on code submissions via WebSockets.

---

## Tech Stack

| **Category**          | **Technology/Tool**                                                                                 | **Purpose**                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Frontend**           | Angular (latest version)                                                                           | Build the user interface for the platform.                                                   |
|                        | PrimeNG                                                                                           | UI components for forms, tables, and other elements.                                         |
|                        | Monaco Editor                                                                                      | Embedded code editor for users to write and test code.                                        |
|                        | RxJS BehaviorSubject                                                                               | State management for Angular application.                                                    |
|                        | SCSS                                                                                               | Styling the user interface.                                                                  |
|                        | Angular Router                                                                                     | Routing and navigation between pages.                                                        |
| **Backend**            | Python                                                                                             | Backend programming language.                                                                |
|                        | FastAPI                                                                                            | Framework for creating RESTful APIs.                                                         |
|                        | Docker                                                                                             | Secure code execution in isolated containers.                                                |
|                        | Judge0 or Piston API                                                                               | Open-source APIs for executing user code in multiple languages.                              |
|                        | OpenAI API                                                                                         | Generate dynamic coding challenges and test cases.                                           |
| **Authentication**     | Firebase Authentication                                                                            | Secure user login and session management.                                                    |
| **Database**           | PostgreSQL (self-hosted or free-tier hosting)                                                      | Store challenges, submissions, and user data.                                                |
|                        | Redis (self-hosted or free-tier hosting)                                                           | Caching frequently accessed challenges and results.                                          |
| **DevOps & Deployment**| Firebase Hosting                                                                                   | Host the Angular frontend for free.                                                          |
|                        | Render (free tier)                                                                                 | Host the FastAPI backend services.                                                           |
|                        | Docker                                                                                             | Containerize backend services and code execution environments.                               |
| **Testing**            | Jasmine & Karma                                                                                    | Unit and integration testing for Angular frontend.                                           |
|                        | Pytest                                                                                            | Unit and integration testing for Python backend.                                             |
| **Real-Time Updates**  | Socket.IO                                                                                          | Enable real-time updates for code execution results.                                         |
| **Monitoring**         | Prometheus & Loki                                                                                  | Monitor backend performance and logs.                                                        |
|                        | Firebase Analytics                                                                                 | Track user interactions on the frontend.                                                     |

---


