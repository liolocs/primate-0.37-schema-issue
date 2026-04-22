import p from "pema"
import key from "primate/orm/key"

const UserSchema = {
  id: key.primary(p.uuid),
  email: p.string,
  name: p.string,
}

export default UserSchema