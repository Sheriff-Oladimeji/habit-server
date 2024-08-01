import Post from "../model/Post.model.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      authorId: req.user._id,
    });
    res.status(200).json({
      status: "success",
      posts,
    });
  } catch (err) {
    throw err;
  }
};
const userController =  {getAllPosts}
export  default userController