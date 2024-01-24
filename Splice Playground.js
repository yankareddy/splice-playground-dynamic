let arr = [1, 7, 3, 1, 0, 20, 77];

let strngifiedArray = JSON.stringify(arr);

const startIndexInput = document.getElementById("startIndexInput");


const deleteIndexInput = document.getElementById("deleteCountInput");



const itemToAddInput = document.getElementById("itemToAddInput");


const spliceBtn = document.getElementById("spliceBtn");
const updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = strngifiedArray;

function updatedArrayValue() {
    let startIndexInputValue = parseInt(startIndexInput.value);
    let deleteIndexInputValue = parseInt(deleteIndexInput.value);
    let itemToAddInputValue = itemToAddInput.value;
    arr.splice(startIndexInputValue, deleteIndexInputValue, itemToAddInputValue);
    let strngifiedArray = JSON.stringify(arr);
    updatedArray.textContent = strngifiedArray;
}


function arraySplice() {
    let startIndexInputValue = parseInt(startIndexInput.value);
    let deleteIndexInputValue = parseInt(deleteIndexInput.value);
    let itemToAddInputValue = itemToAddInput.value;

    if (startIndexInputValue === '') {
        alert("enter the start index");
    } else {
        updatedArrayValue();
    }
    if (deleteIndexInputValue === '') {
        deleteIndexInputValue = 0;
    }
    if (itemToAddInputValue === '') {
        itemToAddInputValue = " ";
    }

}

spliceBtn.onclick = function() {
    arraySplice();
}