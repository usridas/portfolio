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