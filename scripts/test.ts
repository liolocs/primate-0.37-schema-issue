import User from "#store/User"
import Post from "#store/Post"

// await User.insert({email: "test@test.com", name: "Test"})

// const user = await User.find({where: {email: "test@test.com"}})

// await Post.insert({title: "Test", content: "Test", author_id: user[0].id})

const post = await Post.find({with: {author: true}})

console.log("Post found:", post)
process.exit(0)