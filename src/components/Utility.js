/* eslint-disable no-useless-escape */
export function getDeviceDimention() {
  let width = 0;
  let height = 0;

  if (typeof window !== 'undefined') {
    // it's safe to use window now
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    height = window.innerHeight > 0 ? window.innerHeight : screen.height;
  }

  return {width: width, height: height};
}

// Function to check if string contains special characters or not
export function checkForSpecialChars(string) {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (format.test(string)) {
    return true;
  } else {
    return false;
  }
}
