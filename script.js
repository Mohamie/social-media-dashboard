document.addEventListener("DOMContentLoaded", function(){
    const themeSwitch = document.querySelector("input[type='checkbox']");
    const storedTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", storedTheme);

    if(storedTheme === "light") themeSwitch.checked = true;

    themeSwitch.addEventListener("change", function(event){
        if(event.target.checked){
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light")
        }else{
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark")
        }
    })
});