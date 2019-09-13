// // /src/containers/blogPosts/update.js

// import React from 'react';
// import Form from '../Form/Form';
// import { fetchBlogPost, updateBlogPost } from '../../actions/postActions';

// const Update = React.createClass ({

//     getInitialState() {
//         return {
//             blogPost: {}
//         };
//     },

//     componentDidMount() {
//         fetchBlogPost(this.props.params.postId)
//             .then((data) => {
//                 this.setState(state => {
//                     state.blogPost = data;
//                     return state;
//                 });
//             })
//             .catch((err) => {
//                 console.error('err', err);
//             });
//     },

//     handleSubmit(data) {
//         updateBlogPost(this.state.blogPost.id, data);
//     },

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.handleSubmit}
//                       title={this.state.blogPost.title}
//                       body={this.state.blogPost.body}></Form>
//             </div>
//         );
//     }
// });

// export default Update;