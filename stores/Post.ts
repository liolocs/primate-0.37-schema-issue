import store from "primate/orm/store"
import PostSchema from "#schema/PostSchema"
import UserSchema from "#schema/UserSchema"
import database from "#config/database"
import relation from "primate/orm/relation"

export default store({
  schema: PostSchema,
  name: "Post",
  db: database,
  relations: {
    author: relation.one(UserSchema, "author_id", {reverse: true})
  }
})