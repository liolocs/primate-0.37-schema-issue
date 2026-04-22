import store from "primate/orm/store"
import UserSchema from "#schema/UserSchema"
import PostSchema from "#schema/PostSchema"
import database from "#config/database"
import relation from "primate/orm/relation";

export default store({
  schema: UserSchema,
  name: "User",
  db: database,
  relations: {
    posts: relation.many(PostSchema, "author_id")
  }
})