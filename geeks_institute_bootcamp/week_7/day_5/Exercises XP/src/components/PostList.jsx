import posts from "../data/posts.json";

const PostList = () => {
  return (
    <div>
        <h2>This is a title</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};


export default PostList;