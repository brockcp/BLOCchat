(function() { //room factory
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms"); //calls firebase database
    var rooms = $firebaseArray(ref);  //ensures data returned as array
    return {
      all: rooms,
      create: function(newRoom){
        rooms.$add(newRoom);
      }
    };
  }
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
