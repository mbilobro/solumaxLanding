var fetchedPost;

fetch('http://localhost:3005/posts', {method: 'get'})
    .then(response => response.json())
    .then(result => {fetchedPost = result[result.length-1], renderPost(fetchedPost)})
    

    