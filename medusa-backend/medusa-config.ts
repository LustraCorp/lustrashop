type ProjectConfig = {
  database_url: string;
  database_type: string;
  // ...other configuration options...
};

type Config = {
  projectConfig: ProjectConfig;
  plugins: any[];
};

const config: Config = {
  projectConfig: {
    database_url: process.env.DATABASE_URL as string,
    database_type: "postgres",
    // ...other configuration options...
  },
  plugins: [
    // ...plugins...
  ],
};

export default config;
