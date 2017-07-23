(function() {  //defines all room related api queries
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms'); //firebase db reference
    var rooms = $firebaseArray(ref); //data returns as array

    return {
      all: rooms,
      add: function(newRoom) {
        rooms.$add(newRoom);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
