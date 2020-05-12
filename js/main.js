
var check = 0;

passViewBtn.onclick = function () {
    if(check == 0){
        pass.setAttribute("type" , "text");
        passEye.classList.remove("fa-eye");
        passEye.classList.add("fa-eye-slash");
        check = 1
    }else{
        pass.setAttribute("type" , "password");
        passEye.classList.remove("fa-eye-slash");
        passEye.classList.add("fa-eye");
        check = 0
    }
}