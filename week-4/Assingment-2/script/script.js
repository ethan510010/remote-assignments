function ajax(src, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', src);
    xhr.send(null);
}

function render(data) {
    let contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        // 生成外圍的div
        let cellPhoneDiv = document.createElement("div");
        cellPhoneDiv.classList.add("cell-phone-detail");
        cellPhoneDiv.classList.add(`cellPhone${i}`);
        // 生成每部手機的資訊
        let cellPhoneNameTitle = document.createElement("p")
        cellPhoneNameTitle.textContent = `手機名稱: ${data[i].name}`

        let cellPhonePrice = document.createElement("p")
        cellPhonePrice.textContent = `手機價格: ${data[i].price}`
        
        let cellPhoneDesc = document.createElement("p")
        cellPhoneDesc.textContent = `手機介紹: ${data[i].description}`

        cellPhoneDiv.appendChild(cellPhoneNameTitle)
        cellPhoneDiv.appendChild(cellPhonePrice)
        cellPhoneDiv.appendChild(cellPhoneDesc)

        contentDiv.appendChild(cellPhoneDiv);
    }
    
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {
    const responseJSON = JSON.parse(response)
    render(responseJSON)
})