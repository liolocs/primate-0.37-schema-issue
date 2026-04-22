import postgresql from "@primate/postgresql";
import env from "@rcompat/env";

export default postgresql({
  database: env.try("DATABASE_NAME") ?? "test-app",
  host: env.try("DATABASE_HOST") ?? "localhost",
  port: Number(env.try("DATABASE_PORT") ?? "5433"),
  username: env.try("DATABASE_USER") ?? "primate",
  password: env.try("DATABASE_PASSWORD") ?? "secret",
});
