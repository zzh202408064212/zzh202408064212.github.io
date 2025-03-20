var posts=["posts/16107.html","posts/60710.html","posts/25587.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };