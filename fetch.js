var postApi=
'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)
.then(function(response) {
return response.json();
})
.then(function(post) {
 var htmls= post.map(function(post) {
     return `<li>
     <h2> ${post.title}</h2>
     <p> ${post.body}</p>
     </li>
     `
 });
 var html=htmls.join('');
 document.getElementById('post').innerHTML=html;
})
.catch(function(err) {
    alert('error');
});