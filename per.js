function fcheck(){
    var a=document.getElementById("fname").value;
    var b=0;
    b=(/\d/.test(a))
    if(b==0){
        document.getElementById("a").innerHTML="";
    }
    else{
        document.getElementById("a").innerHTML="Name do not contain number";
    }
    }

    function fblurcheck(){
        var a=document.getElementById("fname").value;
        if(a==""){
            document.getElementById("a").innerHTML="Name cannot be empty";
        }
        else{
            if(/^[a-zA-Z]/.test(a) || a.indexOf('')>=0){
                document.getElementById("a")="";
            }
        }
        
    }

    function ablurcheck(){
        var a=document.getElementById("address").value;

if(a==""){
    document.getElementById("c").innerHTML="Adrress cannot be empty";
}
else{
    document.getElementById("c").innerHTML="";
}

    }

    function echeck()
{
    var a=document.getElementById("em").value;
    var b=0;
 b= (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a))
 if(b==0) {
    document.getElementById("b")="Enter valid email"
  }
  else{
    document.getElementById("b")=""
  
    
  }
}

function pcheck(){
    var a=document.getElementById("phone").value;
  var b=0;
  b=/\d/.test(a);
  if(b==0){
    document.getElementById("e").innerHTML="Please enter number only";
  }
  else{
    document.getElementById("e").innerHTML="";
  }





}
function pblurcheck(){
    var a=document.getElementById("phone").value;
    var b=a.length;
    if(b==0){
        document.getElementById("e").innerHTML="Phone number cannot be empty";
    }
    else if(b>10){
        document.getElementById("e").innerHTML="Phone number cannot be greater than 10 digit";
    }
    else if(b<10){
        document.getElementById("e").innerHTML="Phone number cannot be less than 10 digit";
    }
    else{
        if(/^[0-9]+$/.test(a)){
            document.getElementById("e").innerHTML="";
        }
        else{
            document.getElementById("e").innerHTML="Please enter number only";
        }
    }
}
function sub(){
    if{
     alert("fsaff");}
}