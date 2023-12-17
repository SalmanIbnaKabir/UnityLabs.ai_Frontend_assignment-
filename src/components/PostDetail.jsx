import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import "./PostDetail.css";
import hackerNewsApi from "../services/hackerNewsApi";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await hackerNewsApi.getItem(id);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>Points: {post.points}</p>
      <p>
        <a href={post?.url} target="_blank" rel="noreferrer">
          Read More...
        </a>
      </p>
      <small>Created At: {formatDate(post.created_at)}</small>
      <h2>Comments:</h2>
      <ul className="comments">
        {post.children.map((comment) => (
          <li key={comment.id} className="comment">
            {comment?.author && (
              <p>
                <b>Author:</b> {comment.author}
              </p>
            )}
            <p className="comment-text">
              {" "}
              <b>Message:</b> {comment.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
