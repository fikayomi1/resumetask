let lists = document.getElementById("alists");
let ham = document.getElementById("hamb");
let nav = document.getElementById("navv");

function HamFunction()
 {
    if (lists.style.display === "none")
    {
        lists.style.display = "block";
        nav.style.backgroundColor = "#1d252e";
        nav.style.color = "white";
        ham.style.backgroundColor ="white";

    }
    else
    {
        lists.style.display = "none";
        nav.style.backgroundColor = "white";
        nav.style.color = "#1d252e"
        ham.style.backgroundColor ="white";
    }

    
};

ham.addEventListener("click", HamFunction);

