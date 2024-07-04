# User Management Application

## Overview

This is a simple user management application built with React and Redux. The application allows users to add and display user information. It uses `antd` for UI components and `react-redux` for state management.

## DEMO of Project
 -> ##Table
![image](https://github.com/ankur766/frontend_task/assets/106395652/7da0767a-b97d-41d0-a3d3-15fbc203dba3)
## Add USER
![image](https://github.com/ankur766/frontend_task/assets/106395652/5c3bfc1d-81e9-4f66-959e-13d4a00a8252)

## Update User
![image](https://github.com/ankur766/frontend_task/assets/106395652/5d19473c-c31e-4413-b7fb-495fe54229bd)
## Delete User
![image](https://github.com/ankur766/frontend_task/assets/106395652/3b105a32-0d4c-43e0-976b-59f8f49bfe04)





## Features

- Add new users with name and email.
- Display a list of users.
- Redux for state management.
- Ant Design for styling and UI components.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Ant Design (antd)**: For UI components.
- **JavaScript (ES6)**: The programming language used.
- **HTML/CSS**: For structuring and styling the web page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankur766/frontend_task.git
   cd frontend_task
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
user-management-app/
├── public/
├── src/
│   ├── actions/
│   │   └── userActions.js
│   ├── components/
│   │   ├── mainComponent.js
│   │   └── simpleTable.js
│   ├── reducers/
│   │   └── userReducer.js
│   ├── assets/
│   │   └── css/
│   │       └── style.css
│   ├── App.js
│   ├── commonInput.js
│   └── index.js
├── package.json
└── README.md
```

## Components

### App Component

- Connects to the Redux store.
- Renders the `MainComponent`.

### InputHandler Component

- Handles input for adding or editing user information.
- Calls `onSubmit` with the name and email when the form is submitted.

### MainComponent

- Fetches users when the component mounts.
- Renders the `InputHandler` and `SimpleTable` components.
- Handles adding new users.

### SimpleTable Component

- Displays a list of users.
- Shows a message if there are no users.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

