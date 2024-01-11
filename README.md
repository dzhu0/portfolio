# Portfolio Website

The portfolio website is designed to provide an introduction to the developer, display their projects, and allow visitors to get in touch. It includes sections such as Home, About Me, Experience, Portfolio, and Contact.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Back-End Information](#back-end-information)
- [License](#license)

## Features

- Responsive design for various screen sizes.
- Dynamic rendering of portfolio projects.
- Contact form with server-side handling of submissions.
- Error and success modals for form submission feedback.
- Navigation between different sections using React Router.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dzhu0/portfolio.git
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

Visit the given link in your web browser to view the portfolio website.

## Folder Structure

The project folder structure is organized as follows:

- **public:** Static assets and HTML template.
- **src:**
  - **components:** Reusable React components.
  - **pages:** Different pages of the website.
  - **skills.js:** File containing skills data.
  - **PortfolioContext.js:** React context provider for portfolio data.
  - **App.js:** Main component composing the website structure.
  - **index.js:** Entry point for the React application.

## Dependencies

- React
- React Router
- React Bootstrap
- Font Awesome Icons

## Back-End Information

For more information about the back-end - see the [server-files/README.md](server-files/README.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
