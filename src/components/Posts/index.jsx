import { Component } from "react";
import PostCard from "../PostCard";
import PropTypes from "prop-types";
import "./style.css";

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
