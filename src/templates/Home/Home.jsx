import { Component } from "react";

import "./Home.css";

import loadPosts from "../../utils/loadPosts";
import Posts from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 6,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPage, allPosts, posts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };

  loadLessPosts = () => {
    const { posts, postPerPage } = this.state;
    const minPage = posts.length - postPerPage;
    const newMinPost = posts.slice(0, minPage);
    this.setState({ posts: newMinPost, page: minPage - 6 });
  };

  handleChange = (e) => {
    const { searchValue } = this.state;
    const { value } = e.target;
    this.setState({ searchValue: value });
    console.log(searchValue);
  };

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    const minPost = posts.length < 7;
    const filteredPosts = searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search value: {searchValue}</h1>}
          <TextInput
            searchValue={this.state.searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && (
          <p>Não existem posts buscados nesse valor.</p>
        )}

        {!this.state.searchValue && (
          <>
            <Button
              text="Load More Posts"
              modifyPosts={this.loadMorePosts}
              disabled={noMorePosts}
            />
            <Button
              text="Load Less Posts"
              modifyPosts={this.loadLessPosts}
              disabled={minPost}
            />
          </>
        )}
      </section>
    );
  }
}

export default Home;
