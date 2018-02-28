function ChangeName()
{
    var newName=document.getElementById("nameToChange").value;
    if(newName!="")
    document.getElementById("newName").innerHTML=newName;
}
function SendMail()
{
    
    var fname=document.getElementById("fname").value,phone= document.getElementById("phone").value,mail=document.getElementById("email").value,content=document.getElementById("content").value;
 if(fname.length>0 && phone.length>0 && mail.length>0 && content.length>0)
 {
     var reply=confirm("Are you sure?");
     if(reply==true)
         alert ("Mail has been sent");
      else
      {
     var mail=prompt("Please fill another mail");
        if (mail!= null)
        {
            document.getElementById ("email").value=mail;
            alert ("Mail has been sent");
        }
      } 
       
 }
    else alert("fill all fields");

 }
 function Edit(x)
 {
     if(x.value=="edit")
     {
         x.value="text";
         document.getElementById("myname").style.visibility="visible";
         document.getElementById("myage").style.visibility="visible";
         document.getElementById("myphone").style.visibility="visible";
         document.getElementById("myemail").style.visibility="visible";
         document.getElementById("age").style.visibility="hidden";
         document.getElementById("phone").style.visibility="hidden";
         document.getElementById("name").style.visibility="hidden";
         document.getElementById("mail").style.visibility="hidden";
     }
     else
     {
         if(x.value=="save" && document.getElementById("edit").value=="text")
saveData();
        x.value="edit";
        document.getElementById("myname").style.visibility="hidden";
        document.getElementById("myage").style.visibility="hidden";
        document.getElementById("myphone").style.visibility="hidden";
        document.getElementById("myemail").style.visibility="hidden";
        document.getElementById("age").style.visibility="visible";
        document.getElementById("phone").style.visibility="visible";
        document.getElementById("name").style.visibility="visible";
        document.getElementById("mail").style.visibility="visible";
     }
 }
 function saveData()
 {
     if(document.getElementById("myname").value!="")
     document.getElementById("name").innerText=document.getElementById("myname").value;
     

     if(document.getElementById("myage").value!="")
     document.getElementById("age").innerText=document.getElementById("myage").value;
     
     
     if(document.getElementById("myphone").value!="")
     document.getElementById("phone").innerText=document.getElementById("mypgine").value;
     




 }
