import React, { useEffect, useState } from 'react';

const CommentSection = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/recipes/${recipeId}/comments`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [recipeId]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="comment-section">
      <h2 className="text-xl font-semibold">Comments</h2>
      {comments.length === 0 ? (
        <div>No comments yet.</div>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              <p className="font-semibold">{comment.author}</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentSection;
