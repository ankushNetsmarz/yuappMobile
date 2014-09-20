function checkConnection() {
   var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN] = 'Unknown connection';

  states[Connection.WIFI] = 'WiFi connection';

  states[Connection.NONE] = 'No network connection';


 if (states[networkState] == 'No network connection') {
  window.plugins.toast.show('No network connection!', 'long', 'center', function (a) { }, function (b) { });
   return false;
  }
return true;
  hideLoader();
}