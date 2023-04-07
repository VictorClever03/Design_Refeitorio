

// code to change theme in layout
function SetTheme(theme) {
  var root = document.querySelector(":root");
  var gcs = getComputedStyle(root);
  let dark = document.querySelector('.dark')
  let light = document.querySelector('.light')
  if (theme == "light") {
    localStorage.setItem("PanelTheme", theme);
    light.style.display='none'
    dark.style.display='flex'

    if (localStorage.getItem("PanelTheme") == "light") {
      root.style.setProperty("--primary-color", "#FFFFFF");
      root.style.setProperty("--text", "#364A63");
      root.style.setProperty("--hover", "#ecedf1");
    }
  }
  if (theme == "dark") {
    localStorage.setItem("PanelTheme", theme);
    dark.style.display='none'
    light.style.display='flex'
    if (localStorage.getItem("PanelTheme") == "dark") {
      root.style.setProperty("--primary-color", "#1c1d2b");
      root.style.setProperty("--text", "#dce0ea");
      root.style.setProperty("--hover", "#181926");
    }
  }
}

// let preloader = select("#preloader");
// if (preloader) {
//   window.addEventListener("load", () => {
//     preloader.remove();
//   });
// }