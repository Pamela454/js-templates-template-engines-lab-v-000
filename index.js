
function createPost() {

    let postTitle = document.getElementById("postTitle").value
    let postBody = document.getElementById("postBody").value
    let postAuthor = document.getElementById("postAuthor").value 

    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);

    let postTemplate = _.template(document.getElementById("post-template").innerHTML);


    let postDiv = document.getElementById('post-template');

    let templateHTML = postTemplate({ postTitle: postTitle, postBody: postBody, postAuthor: postAuthor });

    postDiv.innerHTML += templateHTML;
}

function postComment() {
	let commentName = document.getElementById("commentName").value
	let commentText = document.getElementById("commentText").value

	let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

	let commentsDiv = document.getElementById("comments");

	let templateHTML = commentsTemplate({ commentName: commentName, commentText: commentText });

	commentsDiv.innerHTML += templateHTML;

}