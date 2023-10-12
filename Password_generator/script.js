class Password{
    constructor(){
        this.password="";
        this.special="!@#$%&*()";
        this.lower="abcdefghijklmnoprstuvwyz";
        this.upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    generate(){
        let i=0;
        while(i<9){
            this.password+=this.special[Math.floor(Math.random()*this.special.length)];
            this.password+=this.lower[Math.floor(Math.random()*this.lower.length)];
            this.password+=this.upper[Math.floor(Math.random()*this.upper.length)];
            i+=3;
        }
        return this.password;
    }
}
let btn=document.getElementById('btn-generate-pwd');
let passwordElement=document.getElementById('password_generated');
btn.addEventListener('click',()=>{
    let passwordGenerator=new Password();
    let password=passwordGenerator.generate();
    passwordElement.innerHTML=`Your Password is <span style="font-weight:700;color:black">${password}</span>   &ensp;  <img id="copy-svg" class="copy-svg" src="copy.png" alt="a svg image" width="20px" height="20px">`;
    let copy=document.getElementById('copy-svg');
    copy.addEventListener('click',()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied!");
    })
    
})