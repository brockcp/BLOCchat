(function() {
    function HomeCtrl(Room, Message, $scope) {
        rooms = Room.all;
        rooms.$loaded().then(function(rooms) {
      var key1 = '-KoxKBMVAzDQqNxbm-rv';
      room = rooms.$getRecord(key1);
      $scope.currentRoom = room;
      $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
  });
  this.rooms = rooms;
  this.changeRoom = function(room) {
      $scope.currentRoom = room;
      $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
  };
}
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
