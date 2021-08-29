import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import blog from '../blog.png';

class Home extends Component {
	render() {
		console.log(this.props)
		const { posts } = this.props;
		let listPosts = posts.length ? posts.map(post => {
			return (
				<div key={post.id}>
					<div className="col s12 m7">
						<div className="card horizontal">
							<div className="card-image">
								<img src={blog} alt="Blog Post" />
							</div>
							<div className="card-stacked">
								<div className="card-title" >
									<Link to={'/' + post.id}>
										<span className="card-title red-text">{post.title}</span>
									</Link>
								</div>
								<div className="card-content">
									<p>{post.body}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
		: (
      		<div className="center">No posts to show</div>
    	);
		return (
			<div>
				<div className="container home">
					<h4 className="center">Home</h4>
					{listPosts}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Home);