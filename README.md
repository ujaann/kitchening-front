# Kitchening Frontend

This is the frontend for the Kitchening web application, a platform for sharing and discovering recipes. The frontend is built using React and communicates with a backend API to manage recipes, user authentication, and other functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Routes](#routes)
- [Context](#context)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kitchening-front.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kitchening-front
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Features

- User authentication (login, register, logout)
- Create, view, and search recipes
- Like and favorite recipes
- View community and personal favorite recipes
- Responsive design

## Components

- **Card**: Displays individual recipe information.
- **Hero**: Displays a featured recipe with an image and description.
- **Navbar**: Navigation bar with links to different sections of the application.
- **CommentSection**: Displays comments for a recipe.

## Routes

- `/`: Home page displaying featured recipes and categories.
- `/login`: Login page for user authentication.
- `/register`: Registration page for new users.
- `/allRecipe/:cuisine`: Displays recipes filtered by cuisine.
- `/allRecipe/`: Displays all recipes.
- `/recipe/:recipeId`: Displays a single recipe with details.
- `/favourites`: Displays user's favorite recipes.
- `/create-recipe`: Page for creating a new recipe.

## Context

- **AuthContext**: Manages user authentication state and provides login and logout functions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.