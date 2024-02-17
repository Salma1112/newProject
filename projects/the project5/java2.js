var favoriteList = [];


function addItem() {
     var newWord = document.getElementById("itemInput").value;

     if (newWord == "") {
        alert("please enter valid data");
     } else {
        favoriteList.push(newWord);
        document.getElementById("itemInput").value = "";
        updateItemCount();
     }
     
}

function listItem() {

    clearList();

    if (favoriteList.length == 0) {
        alert("No data found");
        clearList();
    } else {
        for (let index = 0; index < favoriteList.length; index++) {
            var parent = document.getElementById("itemList");
            var child = document.createElement("li");
            child.innerText = favoriteList[index];
            parent.appendChild(child);
        }

    }
 
}

function clearList() {
    var parent = document.getElementById("itemList");
    parent.innerHTML = "";
}

function deleteList () {
    clearList();
    favoriteList = [];
    updateItemCount();
}

function updateItemCount() {
    const mySpan = document.getElementById("itemCount");
    mySpan.innerText = favoriteList.length;
} 