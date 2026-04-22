import config from "primate/config";
import svelte from "@primate/svelte";
import database from "./database";

export default config({
  db: {
    migrations: {
      table: "migration",
      db: database,
    }
  },
  modules: [
    svelte()
  ],
});
