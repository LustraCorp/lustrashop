import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

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

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})

export default config;
