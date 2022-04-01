const template = function(id, title, body){
    let el = document.createElement("template")
    el.innerHTML = `
    <tr>
      <th scope="row">${id}</th>
      <td>${title}</td>
      <td>${body}</td>
      <td><button class="buttonName" value="${id}">Редактировать</button></td>
    </tr>`.trim()

    return el.content.firstChild;
}
// function createChangeForm(title, body){
//     let el = document.createElement("ChangeForm")
//     document.body.appendChild(el)
//     el = `
//     <form class="ChangeForm">
//         <input type="text" name="title" value="${title}"></input>
//         <input type="text" name="body" value="${body}"></input>
//         <input type="submit" value="Отправить"></input>
//     </form>`.trim()
//     return el;
// }

function changeData(id) {
        let formChange = document.getElementsByClassName("ChangeForm");
        for (form of formChange) {
            form.addEventListener('submit', function(e){
                        console.log("shit");
                    // e.preventDefault();
                    // // let data = {
                    // //     title: form.title.value,
                    // //     body: form.body.value
                    // // }
                    // request("PUT", `https://jsonplaceholder.typicode.com/posts/${id}`, (response)=>{
                    //     if (response.target.readyState === XMLHttpRequest.DONE) {
                    //     // Data changing
                    //     console.log("shit3");
                    //     JSON.parse(response.target.response).forEach(post => {
                    //         console.log(post);
                    //     })
                    //     }
                    // })
        })
    }
}

window.onload = function(){
    let form = document.getElementById("PostForm");
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let data = {
            title: form.title.value,
            body: form.body.value
        }
        request("POST", 'https://jsonplaceholder.typicode.com/posts', (response)=>{
            if (response.target.readyState === XMLHttpRequest.DONE && response.target.status === 201) {
                // Request finished. Do processing here.
                console.log(response.target.response)
            }
        })

    })
    request('GET', 'https://jsonplaceholder.typicode.com/posts/', function(response) { // Call a function when the state changes.
        if (response.target.readyState === XMLHttpRequest.DONE && response.target.status === 200) {
            // Request finished. Do processing here.
            JSON.parse(response.target.response).slice(0,5).forEach(post => {
                let temp_post = template(post.id, post.title, post.body)
                let table = document.getElementById("TableContent");
                table.append(temp_post)
            });
        }
    })
    const buttons = document.getElementsByClassName("buttonName");
    for (const button of buttons){
        button.addEventListener('click', function(){
            console.log(0)
            // JSON.parse(response.target.response).slice(0,5).forEach(post => {
            //     console.log(1)
            //     if (post.id == button.value){
            //         let title_change = post.title;
            //         let body_change = post.body;
            //         let formChange = document.getElementById("ChangeForm");
            //         // console.log(formChange, title_change, body_change, post.id)
            //         // button.innerHTML = createChangeForm(title_change, body_change);
            //         // changeData(post.id);
            //     }
            // });
        });
    }
}


const request = function(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = callback

    xhr.send(`&post=21`);
}