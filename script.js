function myFunc(){
    let buttons = document.getElementsByName("rb");
    let conteiner_li = document.getElementsByClassName("li1");
    for (var i = 0; i < 3; i++){
        if (buttons[i].checked){
            conteiner_li[i].style.border = "1px solid #0B7572";
        }
        else {
            conteiner_li[i].style.border = "1px solid transparent";
        }
    }
}