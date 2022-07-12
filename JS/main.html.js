function loaditems() {
    return fetch('/data/data.json'/*'http://10.156.147.161:8080/todolist/create'*/)
        .then(response => response.json())
        .then(json => json.items);
}
function displayitems() {
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createHTMLString(item).join(""))
}
function createHTMLString(item) {
    return `
    <li class="item">
        <span class="item-id">${item.id}</span>    
        <span class="item-contents">${item.year}, ${item.month}, ${item.day}, ${item.content}</span>
    </li>`;
}

loaditems().then((items) => {
    console.log(items);
    displayitems(items);
})

/*
"title": 1바이트 이상 20바이트 이하 제목
"content": 1바이트 이상 100바이트 이하 내용
*/