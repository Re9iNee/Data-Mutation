import postgres from "postgres";

const sql = postgres(
  "postgresql://my_user:my_password@localhost:5432/my_database"
);

export default sql;
