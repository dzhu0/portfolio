# Server Files README

Welcome to the server files of the Portfolio Website. This directory contains essential files and information for the backend and database configuration.

## Table of Contents

- [Database Setup](#database-setup)
- [Server Configuration](#server-configuration)
- [Tools](#tools)
- [Deployment](#deployment)

## Database Setup

The `portfolio.sql` file in this directory contains the SQL script to set up the database for the Portfolio Website. Follow the steps below to configure the database:

1. **Import Database Structure:**
   - Execute the SQL script in your preferred database management tool (e.g., MySQL) to create the necessary tables and structure.

2. **Database Connection:**
   - Duplicate the template file `dbinfo.php.template` located in the `tools` directory to a file called `dbinfo.php` and update the database connection details. Modify the `DB_DSN`, `DB_USER`, and `DB_PASS` constants to match your database configuration.

## Server Configuration

The backend server is set up using PHP. Ensure that your server environment supports PHP. The `composer.json` file specifies the dependency on PHPMailer.

1. **Composer Installation:**
   - Run the following command to install dependencies using Composer.

```bash
$ composer install
```

2. **SMTP Configuration:**
   - Duplicate the template file `mailinfo.php.template` located in the `tools` directory to a file called `mailinfo.php` and update the SMTP configuration. Modify the `SMTP_HOST`, `SMTP_USERNAME`, `SMTP_PASSWORD`, and `MY_EMAIL` constants to the appropriate values.

## Tools

This directory contains essential tools for the backend functionality.

- **connect.php:** Handles the database connection.
- **dbinfo.php:** Contains database connection constants.
- **mailinfo.php:** Holds SMTP and email information for PHPMailer.
- **portfolio.sql:** SQL script for creating the database structure.

## Deployment

Ensure that the server environment meets the requirements, including PHP and a configured database. Deploy the server files on your chosen hosting environment.

---

Feel free to reach out if you have any questions or encounter issues during the setup process.

Happy coding!
