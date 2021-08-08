export function getDeviceDimention() {
  let width = 0;
  let height = 0;

  if (typeof window !== 'undefined') {
    // it's safe to use window now
<<<<<<< HEAD
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    height = window.innerHeight > 0 ? window.innerHeight : screen.height;
=======
    width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    height = window.innerHeight > 0 ? window.innerHeight : window.screen.height;
>>>>>>> bb8fd011057f72249670797248c785119ac1ec43
  }

  return {width: width, height: height};
}
