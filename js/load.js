$(function() {
  const loader = $('.loader-bg');
  const container = $('.load_container');
  const SPLASH_STORAGE_KEY = 'splash_screen_time';
  const ONE_HOUR = 60 * 60 * 1000; // 1 hour in milliseconds

  const showSplash = () => {
    loader.show();
    container.show();
    setTimeout(() => {
      container.delay(1000).fadeOut(1000);
      loader.delay(800).fadeOut(800);
    }, 2000);
  }

  const hideSplash = () => {
    container.hide();
    loader.hide();
  }

  const shouldShowSplash = () => {
    const lastTime = window.localStorage.getItem(SPLASH_STORAGE_KEY);
    if (!lastTime) {
      window.localStorage.setItem(SPLASH_STORAGE_KEY, Date.now());
      return true;
    }
    const timeDiff = Date.now() - lastTime;
    if (timeDiff >= ONE_HOUR) {
      window.localStorage.setItem(SPLASH_STORAGE_KEY, Date.now());
      return true;
    }
    return false;
  }

  if (shouldShowSplash()) {
    showSplash();
  } else {
    hideSplash();
  }
});
