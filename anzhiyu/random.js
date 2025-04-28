var posts=["posts/16107.html","posts/60710.html","posts/25587.html","posts/30877.html","posts/57716.html","posts/1331.html","posts/20486.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };