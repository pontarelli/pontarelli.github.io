(() => {
  // ns-hugo:C:\Users\SALVAT~1\AppData\Local\Temp\hugo_cache\modules\filecache\modules\pkg\mod\github.com\wowchemy\wowchemy-hugo-modules\wowchemy@v0.0.0-20201211023654-f6090cd7e55d\assets\js\wowchemy-theming.js
  function getThemeMode() {
    return parseInt(localStorage.getItem("wcTheme") || 2);
  }
  function canChangeTheme() {
    return Boolean(window.wc.darkLightEnabled);
  }
  function initThemeVariation() {
    if (!canChangeTheme()) {
      return;
    }
    let currentThemeMode = getThemeMode();
    let isDarkTheme;
    switch (currentThemeMode) {
      case 0:
        isDarkTheme = false;
        break;
      case 1:
        isDarkTheme = true;
        break;
      default:
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          isDarkTheme = true;
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
          isDarkTheme = false;
        } else {
          isDarkTheme = window.wc.isSiteThemeDark;
        }
        break;
    }
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  // ns-params:@params
  var wcDarkLightEnabled = false;
  var wcIsSiteThemeDark = false;

  // js/wowchemy-init.js
  window.wc = {
    darkLightEnabled: wcDarkLightEnabled,
    isSiteThemeDark: wcIsSiteThemeDark
  };
  initThemeVariation();
})();
