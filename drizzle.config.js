/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/Schema.jsx",
    driver: 'pg',
    dbCredentials: {
      connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
    }
  };