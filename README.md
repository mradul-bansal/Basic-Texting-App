# Chat Application

This is a simple chat application that allows users to view, create, edit, and delete chat messages. The application includes a stylish interface for both the main chat page and the edit message page.

## Features

- View all chat messages
- Create new chat messages
- Edit existing chat messages
- Delete chat messages
- Responsive design for mobile devices

## Technologies Used

- HTML
- CSS
- JavaScript (with EJS templates)
- Node.js (Express)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/chat-application.git
    ```

2. Navigate to the project directory:

    ```sh
    cd chat-application
    ```

3. Install the necessary packages:

    ```sh
    npm install
    ```

4. Start the server:

    ```sh
    npm start
    ```

5. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

## File Structure
```
chat-application/
├── public/
│ ├── style.css
│ ├── edit-style.css
├── views/
│ ├── index.ejs
│ ├── edit.ejs
├── routes/
│ ├── index.js
├── app.js
├── package.json
├── README.md
```

## CSS Styles

### style.css

Styles for the main chat page, including:

- Layout and styling for chat messages
- Styling for buttons
- Responsive design adjustments

### edit-style.css

Styles for the edit message page, including:

- Layout and styling for the edit form
- Styling for the edit button
- Responsive design adjustments

## Usage

- **View Chats**: On the main page, view all chat messages.
- **Create New Chat**: Click the "New Chat" button and submit a new message.
- **Edit Chat**: Click the "Edit" button on a chat message, modify the message, and submit.
- **Delete Chat**: Click the "Delete" button on a chat message to remove it.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
