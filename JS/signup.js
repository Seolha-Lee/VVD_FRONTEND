var uname =  document.getElementById('uname');
    var age =    document.getElementById('age');
    var uid =    document.getElementById('uid');
    var pwd =    document.getElementById('pwd');
    var pwdChk = document.getElementById('pwdChk');

if(!uname){
    alert('이름을 입력해주세요.')
    doc.getElementById('uname').focus;
    return;
}
if(!age){
    alert('나이를 입력해주세요.')
    doc.getElementById('age').focus;
    return;
}
if(!uid){
    alert('아이디를 입력해주세요.')
    doc.getElementById('uid').focus;
    return;
}
fetch('13.209.233.117/users/signup')
    .then((res) => res.json(res.body));

if (json.account_id == uid){
    alert('이미 존재하는 아이디입니다.')
    doc.getElementById('uid').value='';
    doc.getElementById('uid').focus;
    return;
}
if(!pwd){
    alert('비밀번호를 입력해주세요.')
    doc.getElementById('pwd').focus;
    return;
}
if(!pwdChk){
    alert('비밀번호를 다시 입력해주세요.')
    doc.getElementById('pwdChk').focus;
    return;
}
if(pwd!=pwdChk){
    alert('비밀번호가 서로 다릅니다. 다시 입력해주세요.');
    doc.getElementById('pwdChk').value='';
    doc.getElementById('pwdChk').focus;
    return;
}/*유효성 검사 종료*/

document.getElementById('signup_button').onclick = function() {/*유효성 검사 시작*/
    fetch("13.209.233.117"), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "account_id" : uid,
            "password" : pwd,
            "name" : uname,
            "age" : age 
        })
    }
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}