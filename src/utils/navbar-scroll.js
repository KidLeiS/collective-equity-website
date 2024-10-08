// keep track of previous scroll position
let prevScrollPos = window.scrollY;

const throttle = (fn, delay) => { 
  // Capture the current time 
  let time = Date.now(); 
 
  // Here's our logic 
  return () => { 
    if((time + delay - Date.now()) <= 0) { 
      // Run the function we've passed to our throttler, 
      // and reset the `time` variable (so we can check again). 
      fn(); 
      time = Date.now(); 
    } 
  } 
} 

function scrollListener() {
  // current scroll position



  setTimeout(function() {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos && currentScrollPos > 150) {
      // user has scrolled up
      document.querySelector('.navbar').classList.add('-active');
    } else {
      // user has scrolled down
      document.querySelector('.navbar').classList.remove('-active');
    }
  
      // update previous scroll position
      prevScrollPos = currentScrollPos
    }, 200);
  
};


window.addEventListener('scroll', throttle(scrollListener, 200));
