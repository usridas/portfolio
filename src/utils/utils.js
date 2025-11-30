export function debounce(func, waitTime) {
        console.log("Debouncing");
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func();
            }, waitTime);
        };
    };

export function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}