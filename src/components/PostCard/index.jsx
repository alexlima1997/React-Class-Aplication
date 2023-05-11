import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class PostCard extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <img src={post.cover} alt={post.title} />
        <div className="postContent">
          <h2>{post.title} - {post.id}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
