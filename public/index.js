// Your code here
// function catstagram() {
window.addEventListener("DOMContentLoaded", event => {

    const h1 = document.createElement('h1')
    document.body.appendChild(h1);
    h1.textContent = "CATSTAGRAM"
    h1.setAttribute("class", "title")

    const catImg = fetch (('https://api.thecatapi.com/v1/images/search'))
    .then((res) => res.json())
    .then((data) => {
        const image = document.createElement('img')
        image.src = data[0].url
        document.body.appendChild(image)
        image.setAttribute("class", "cat_image")
        document.body.style.backgroundImage = `url(${image.src})`
    })


    const newCat = document.createElement('button');
    newCat.textContent = "new Cat"
    document.body.appendChild(newCat);
    newCat.addEventListener('click', () => window.location.reload())
    newCat.setAttribute("class", "new_cat_button")

    const likeContainer = document.createElement('div')
    document.body.appendChild(likeContainer)
    likeContainer.setAttribute("class", "like_container")

    const likeTitle = document.createElement('h3');
    likeContainer.appendChild(likeTitle);
    likeTitle.innerText = "popularity"
    likeTitle.setAttribute("class", "like_title")

    const likeNum = document.createElement('h4');
    likeContainer.appendChild(likeNum);
    likeNum.setAttribute("id", "like_num")
    let likeCount = 0;
    likeNum.innerText = likeCount;
    

    const buttons = document.createElement('span')
    likeContainer.appendChild(buttons);
    buttons.setAttribute("class", "buttons_panel")

    const upVote = document.createElement('button')
    buttons.appendChild(upVote)
    upVote.innerText = "Upvote";


    const downVote = document.createElement('button')
    buttons.appendChild(downVote)
    downVote.innerText = "Downvote";

    upVote.addEventListener("click", () => {
        likeCount += 1;
        likeNum.innerText = likeCount;
    })

    downVote.addEventListener("click", () => {
        likeCount -= 1;
        likeNum.innerText = likeCount;
    })

    const commentContainer = document.createElement('div')
    document.body.appendChild(commentContainer);
    commentContainer.setAttribute("class", "comment_container");

    const commentPanel = document.createElement('span');
    commentContainer.appendChild(commentPanel);
    commentPanel.setAttribute("class", "comment_panel")

    const commentTitle = document.createElement('p');
    commentPanel.appendChild(commentTitle)
    commentTitle.innerText = "comment:";

    const commentInput = document.createElement('input');
    commentPanel.appendChild(commentInput);
    commentInput.setAttribute("placeholder", "Add a comment...")

    const submitComment = document.createElement('button');
    commentPanel.appendChild(submitComment);
    submitComment.innerText = "Submit";

    const commentList = document.createElement('ul');
    commentContainer.appendChild(commentList);
    commentList.setAttribute("id", "comment-list")
    
    
    submitComment.addEventListener("click", () =>{
        const listItem = document.createElement('li');
        const comment = commentInput.value
        commentList.appendChild(listItem)
        listItem.innerText = comment;
        commentInput.value = ""
        listItem.setAttribute("id", "comment")
        
        const deleteComment = document.createElement('button');
        deleteComment.innerText = "delete";
        listItem.appendChild(deleteComment)
        deleteComment.setAttribute("class", "delete_comment")

        deleteComment.addEventListener("click", () => {
            listItem.remove()
        })
    })
    
})
