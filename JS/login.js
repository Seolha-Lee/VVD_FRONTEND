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
            window.location.href = "/HTML/main.html";
        }
    });
};