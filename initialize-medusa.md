# Initialize a Medusa Project

Follow these steps to create a new Medusa project:

1. **Install Node.js and PostgreSQL**: Ensure you have Node.js and PostgreSQL installed on your machine. You can download Node.js from [nodejs.org](https://nodejs.org/) and PostgreSQL from [postgresql.org](https://www.postgresql.org/).

2. **Create a new Medusa project**:
   - Open your terminal.
   - Navigate to the directory where you want to create your project.
   - Run the following command to create a new Medusa project:
     ```bash
     npx create-medusa-app@latest lustrashop-medusa
     ```
   - Replace `my-medusa-app` with your desired project name.

3. **Navigate to the project directory**:
   ```bash
   cd lustrashop-medusa
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the root of your project directory.
   - Add the necessary environment variables, such as database connection details. Here is an example:
     ```env
     DATABASE_URL=postgres://user:password@localhost:5432/mydb
     ```

5. **Install dependencies**:
   ```bash
   npm install
   ```

6. **Run database migrations**:
   ```bash
   medusa migrations run
   ```

7. **Start the Medusa server**:
   ```bash
   npm run start
   ```
   This will start the Medusa server.
