if (navigator.serviceWorker) {

  navigator.serviceWorker.register('./service-worker.js').then(function() {
    console.log('Registration worked!');
  }).catch(function(error) {
    console.log('Registration failed with error ' + error);
  });
}