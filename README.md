Crop Statistics App

This project analyzes crop production data and provides statistics on crop production and cultivation patterns over the years. The app provides insights such as the crop with the maximum and minimum production for each year, as well as the average yield and area under cultivation for each crop.

Features:

- Max/Min Crop Production per Year: Displays the crop with the maximum and minimum production for each year.
- Average Yield and Cultivation Area: Displays the average yield and cultivation area for each crop across the years.
- Data Visualization: Visualizes crop data in tables for easy interpretation.

Tech Stack:

- Frontend: React, Mantine (for UI components), 
- Data: Crop statistics dataset (CSV/JSON format)
- Backend (if applicable): None (Currently no backend, data is fetched from local JSON)
- Version Control: Git, GitHub

Setup:

Prerequisites:
Make sure you have the following installed on your machine:

- Node.js (LTS version recommended)
- Git

Installation:

1. Clone the repository to your local machine:

   git clone https://github.com/Anujkumarsagar/crop-statistics.git

2. Navigate into the project directory:

   cd crop-statistics

3. Install dependencies:

   npm install

   Or if you’re using Yarn:

   yarn install

Running the App:

To start the development server and run the app locally:

npm start

Or if you're using Yarn:

yarn start

This will run the app on http://localhost:3000.

Running Tests (if applicable):

If you have any tests in place (using tools like Jest), you can run them with:

npm test

Or if using Yarn:

yarn test

File Structure:

The project is structured as follows:

crop-statistics/
│
├── public/
│   └── dataset/
│       └── Manufac_India_Agro_Dataset.json  # Your data file
│
├── src/
│   ├── components/
│   │   ├── Table  # Custom table components for displaying data
│   │   └── ...
│   ├── styles/
│   │   └── index.css  # CSS customizations
│   ├── App.jsx  # Main component where data is processed and displayed
│   └── index.js  # Entry point for the app
│
├── package.json  # Project dependencies and configuration
├── README.md  # Project documentation
└── ...

Contributing:

Feel free to fork this repository and create pull requests for improvements or bug fixes. If you find any issues, feel free to open an issue.

Steps for Contributing:

1. Fork this repository.
2. Clone your fork to your local machine.
3. Create a new branch (git checkout -b feature-name).
4. Make your changes and commit them (git commit -m "Add feature").
5. Push your changes (git push origin feature-name).
6. Create a pull request on GitHub.

License:

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments:

- Mantine: UI framework used for building the tables and styling the components.
- Tailwind CSS: Utility-first CSS framework used for custom styling.
- The dataset: The crop production dataset used in this app.
