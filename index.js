
function createPost() {
	//let page = document.getElementById("page-template").value 
    let postTitle = document.getElementById("postTitle").value
    let postBody = document.getElementById("postBody").value
    let postAuthor = document.getElementById("postAuthor").value 

    let pageTemplate = 

    let postTemplate = 

    let templateFn = _.template(postTemplate);

    let postDiv = document.getElementById('post-template');

    let templateHTML = templateFn({ postTitle: postTitle, postBody: postBody, postAuthor: postAuthor });

    postDiv.innerHTML += templateHTML;
}

function postComment() {
	let commentName = document.getElementById("commentName").value
	let commentText = document.getElementById("commentText").value

	let commentsTemplate = 

	let templateFn = _.template(commentsTemplate);

	let commentsDiv = document.getElementById('comment');

	let templateHTML = templateFn({ commentName: commentName, commentText: commentText });

	commentsDiv.innerHTML += templateHTML;

}