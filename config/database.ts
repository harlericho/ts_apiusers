import { createPool } from "mysql2/promise";
export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ts_api_users",
    connectionLimit: 10,
  });
  return connection;
}
