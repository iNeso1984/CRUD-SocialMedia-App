//CRUD

let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");
let posted = document.getElementById("posted");
let likes = document.getElementById("likes");
let totalLikes = document.getElementById("totalLikes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  formValidation();
});

//if input is blank, show failure-->
let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    acceptData();
  }
};

//accept and store data-->Whatever is written in
//textbox is stored and pushed inside data function.
let data = {};
let acceptData = () => {
  data["text"] = input.value; //should be invoked in state of success.
  console.log(data);
  createPost();
};

//upload data to post/ Note: += helps to add the text.
// Using tempate literal

let createPost = () => {
  posts.innerHTML += `  <div id="post">
    <div> 
    <p>${data.text}</p>
    <span class="options">
       <i onClick="editPost(this)"class="fas fa-edit" aria-hidden="true"></i>
       <i onClick="deletePost(this)" class="fas fa-trash-alt" aria-hidden="true"></i>
    </span>
 </div>`;
  input.value = ""; //reset form
};

// trash button
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

//edit button
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

//like button
let likeCount = 0;
let like = (e) => {
  likeCount++;
  totalLikes.innerHTML = "&#9829;" + " " + likeCount;
};

//addName

let addName = (e) => {
  document.getElementById("fullName").innerHTML = e;
};

//input name
let nameInfo = () => {
  let firstName = "Jane";
  let lastName = "Doe";
  let full = `${firstName}  ${lastName}`;
  addName(full);
};
nameInfo();
