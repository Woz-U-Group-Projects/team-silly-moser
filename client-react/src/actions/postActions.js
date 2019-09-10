import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};


export function updateBlogPost(id, data) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
      method: 'PUT',
      mode: 'CORS',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res => {
      return res;
  }).catch(err => err);
}

export function fetchBlogPost(id) {
  return fetch('http://api.symfony-3.dev/app_dev.php/posts/' + id, {
      method: 'GET',
      mode: 'CORS'
  }).then(res => res.json())
  .catch(err => err);
}