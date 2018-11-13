const btn = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.getElementById('ul');
const delBtn = document.getElementById('delBtn');
const reset = document.getElementById('reset');

// add btn
btn.addEventListener("click", function () {
    if (input.value > "") {
        let li = document.createElement('li');
        li.setAttribute("id", "myLi")
        let myText = document.createTextNode(input.value);
        li.appendChild(myText);
        ul.appendChild(li);
        // delete btn
        let liBtn = document.createElement('Button');
        liBtn.setAttribute("id", "myDel")
        liBtn.innerHTML = "delete";
        li.appendChild(liBtn);
        // change button
        let changeBtn = document.createElement('Button');
        let changeInput = document.createElement('input')
        changeInput.setAttribute("id", "changeInput");
        changeBtn.innerHTML = "Change"
        changeBtn.setAttribute("id", "changeBtn");
        li.appendChild(changeBtn);
        li.appendChild(changeInput);
        // change action
        changeBtn.addEventListener("click", function() {
            if (changeInput.value === "") {} else
            li.innerHTML = changeInput.value;
        })
        // delete action 
        liBtn.addEventListener("click", function () {
            li.innerHTML = input.value;
        })
        input.value = "";

        reset.addEventListener("click", function(){
            for(i=0; 0< 1;i++) {
            ul.removeChild(ul.childNodes[i])
            }
        })



    }  
})






