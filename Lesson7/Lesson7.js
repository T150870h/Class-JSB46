// DOM (Document Object Model) Là một mô hình sử dụng để đại diện và 
// tương tác với tài liệu HTML 

// Truy cập các phần tử 
var title = document.getElementById('title');
var changeTextButton = document.getElementById("ChangeTextButton");
var changrColourButton = document.getElementById("ChangeColorButton");
var addElementButton = document.getElementById("addElementButton");
var removeElementButton = document.getElementById("removeElementButton");
var AddNumber = document.getElementById("AddNumber");
var toggleButton = document.getElementById("toggleButton");
var hiddenElement = document.getElementById("hiddenElement");

// Thay đổi nội dung của phần tử 
changeTextButton.addEventListener('click', function () {
    title.textContent = "Text Changed"
})

// Thay đổi màu background
changrColourButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

// Thêm phần tử mới
addElementButton.addEventListener("click", function () {
    var newElement = document.createElement("p");
    newElement.textContent = "New Text";
    document.body.appendChild(newElement);
});

// Xoá phần tử
removeElementButton.addEventListener("click", function () {
    var elements = document.querySelectorAll("p");
    if (elements.length > 0) {
        var lastElement = elements[elements.length - 1];
        lastElement.parentNode.removeChild(lastElement)
    }
});

var num = 0; 
AddNumber.addEventListener("click", function () {
    title.textContent = num;
    num ++;
    if (num == 10) { 
        title.textContent = "Rùa"
    } else if (num == 20) {
         title.textContent = "Thỏ"
    }
})

// Toggle ẩn/ hiện 
toggleButton.addEventListener("click", function () {
    if (hiddenElement.style.display === "none") { 
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
});