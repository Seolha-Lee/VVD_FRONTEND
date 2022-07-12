loginfetch = () => {
    fetch('http://10.156.147.161:8080/todolist/login', {
        method: 'POST',
        body: JSON.stringify({
            uid: this.state.account_id,
            pwd: this.state.password,
        }),
    })
    .then(response => response.json())
    .then(response => {
        if (response.message === 'INVALID_USER') {
            alert('아이디 또는 비밀번호가 맞지 않습니다.');
        } else if (response.message === 'SUCCESS') {
            this.props.history.push('/HTML/');
        }
    });
};

$.ajax({
    url:"/HTML/main.html",
    type:'POST',
    dataType:'json',
    data:JSON.stringify(sendObject),
    contentType: 'text/html;charset=UTF-8',
    mimeType: 'application/json',
    success:function(data) {
        if(data.MESSAGE) {
            alert("로그인성공");
            window.location.href = "main.html";
        } else {
            alert("로그인실패");
        }
    },
    error:function(data,status,er) {
        alert("error: "+data+" status: "+status+" er:"+er);
    }
});