
function makeRequest() {
    let xhr = new XMLHttpRequest();
    let textField = document.querySelector(".inputNumber");
    xhr.open('GET', `/getData?number=${textField.value}`)
    xhr.send(null);
    xhr.onload = function() {
        if (xhr.status === 200) {
            let sumResult = xhr.responseText;
            let resultDiv = document.querySelector(".content .result")
            if (parseInt(sumResult)) {
                resultDiv.innerHTML = `<p>總合結果是${xhr.responseText}</p>`
            } else {
                resultDiv.innerHTML = `<p>${xhr.responseText} 請確認有輸入值或輸入的是整數</p>`
            }
        }
    }
}

let confirmButton = document.getElementById("confirm");

confirmButton.addEventListener("click", makeRequest)




