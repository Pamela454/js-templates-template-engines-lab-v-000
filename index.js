
function createPost() {
	let page = getElementById("page-template").innerHTML
    let post = getElementById("post-form").value


    let pageTemplate = '<div id="page-template"><%= page %><span class="page"></span><%= page %></div>';

    let postTemplate = '<div id="post-template"><%= post %><article><header></header><footer></footer></article><span class="post"></span><%= post %></div>';

    let templateFn = _.template(postTemplate);

    let postDiv = document.getElementById('post-template');

    let templateHTML = templateFn({ post: post });

    postDiv.innerHTML += templateHTML;
}

function postComment() {
	let comment = getElementById("comment-form").value

	let commentTemplate = '<div id="comment-template"><p><%= comment %><span class="comment"><%= comment %></span></p></div>';

}