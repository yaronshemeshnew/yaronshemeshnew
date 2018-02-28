function myButton_onclick(){
    if(myButton.value == "input"){
    myButton.value = "text";
    document.getElementById("displayText").style.visibility = "hidden";
    document.getElementById("inputText").style.visibility = "visible";
    }
    else{
    myButton.value = "input";
    document.getElementById("displayText").style.visibility = "visible";
    document.getElementById("inputText").style.visibility = "hidden";
    }
    }
    
    <script type="text/javascript">

    function changeTitle() {

        document.title = 'New Title';

        }