
var root = document.querySelector(":root");
var gcs = getComputedStyle(root);
const body = document.querySelector("body");
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')
// code to change theme in layout

function SetTheme(theme) {
  if (theme == "dark") {
    useColorModeDark(theme);
  }
  if (theme == "light") {
    useColorModeLight(theme);
  }
}
function useColorModeLight(theme) {
  localStorage.setItem("PanelTheme", theme);
  light.style.display = "none";
  dark.style.display = "flex";

  if (localStorage.getItem("PanelTheme") == "light") {
    body.classList.remove("dark");
    body.classList.add("light");

    root.style.setProperty("--primary-color", "#FFFFFF");
    root.style.setProperty("--text", "#364A63");
    root.style.setProperty("--hover", "#ecedf1");
  }
}

function useColorModeDark(theme) {
  localStorage.setItem("PanelTheme", theme);
  dark.style.display = "none";
  light.style.display = "flex";
  if (localStorage.getItem("PanelTheme") == "dark") {
    body.classList.remove("light");
    body.classList.add("dark");

    root.style.setProperty("--primary-color", "#1c1d2b");
    root.style.setProperty("--text", "#dce0ea");
    root.style.setProperty("--hover", "#181926");
  }
}
function setDefault() {
  const theme = localStorage.getItem("PanelTheme");

  if (theme == "light") {
    useColorModeLight(theme);
  }
  if (theme == "dark") {
    useColorModeDark(theme);
  }
}


setDefault();

// function SetTheme(theme) {
 
//   if (theme == "light") {
//     localStorage.setItem("PanelTheme", theme);
//     light.style.display='none'
//     dark.style.display='flex'

//     if (localStorage.getItem("PanelTheme") == "light") {
//       root.style.setProperty("--primary-color", "#FFFFFF");
//       root.style.setProperty("--text", "#364A63");
//       root.style.setProperty("--hover", "#ecedf1");
//     }
//   }
//   if (theme == "dark") {
//     localStorage.setItem("PanelTheme", theme);
//     dark.style.display='none'
//     light.style.display='flex'
//     if (localStorage.getItem("PanelTheme") == "dark") {
//       root.style.setProperty("--primary-color", "#1c1d2b");
//       root.style.setProperty("--text", "#dce0ea");
//       root.style.setProperty("--hover", "#181926");
//     }
//   }
// }