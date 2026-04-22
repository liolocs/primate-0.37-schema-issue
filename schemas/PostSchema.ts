import p from "pema"
import key from "primate/orm/key"

const PostSchema = {
  id: key.primary(p.uuid),
  title: p.string,
  content: p.string,
  author_id: key.foreign(p.uuid),
}

export default PostSchema