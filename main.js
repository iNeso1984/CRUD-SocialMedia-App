//CRUD

let form = document.getElementById("form");
console.log(form);
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked");
    formValidation();
});

//if input is blank, show failure-->
let formValidation = ()=>{
    if(input.value === ""){
        message.innerHTML = "Post cannot be blank";
        console.log("failure");
    }
    else{
        console.log("success");
        acceptData();

    }
}

//accept and store data-->Whatever is written in 
//textbox is stored and pushed inside data function.
let data={}
let acceptData = () =>{
    data["text"]= input.value;//should be invoked in state of success. 
    console.log(data);
    createPost();
}


//upload data to post Note: += helps to add the text. using tempate literal

let createPost = ()=>{
    posts.innerHTML +=
    `  <div id="post">
    <div>Post 
    <p>${data.text}</p>
    <span class="options">
       <i class="fas fa-edit" aria-hidden="true"></i>
       <i onClick="deletePost(this)" class="fas fa-trash-alt" aria-hidden="true"></i>
    </span>
 </div>`;
   input.value="";//reset form
}
//when you click on trash icon it will delete
let deletePost =(e)=>{
 e.parentElement.parentElement.remove()
}




