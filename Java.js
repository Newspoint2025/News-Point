function darklight(){
    var element = document.body;
    element.classList.toggle("dark_mode")

    var element = document.getElementsByClassName("Sub_Title_main")
    element.classList.toggle("dark_mode")
    }



function dark_light(){
    var button = document.getElementById("dark_light")

    if (button.innerHTML === "Dark Mode") {
        button.innerHTML = "Light Mode";
        darklight()

    } else{
        button.innerHTML = "Dark Mode"
        darklight()
    }
}