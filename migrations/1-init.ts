export default async db => {
  await db.schema.create("Post", { name: "id", generate: true }, {
    id: "uuid",
    title: "string",
    content: "string",
    author_id: "uuid"
  });
  await db.schema.create("User", { name: "id", generate: true }, {
    id: "uuid",
    email: "string",
    name: "string"
  });
};
