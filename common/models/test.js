module.exports = function(Test) {
  Test.favourite = function(favourite, favourite2, cb) {
    console.log(favourite);
    console.log(favourite2);
    cb(null, {favourite: favourite, favourite2: favourite2});
  };

  Test.remoteMethod('favourite', {
    accepts: [
      {arg: 'favourite', type: 'boolean'},
      {arg: 'favourite2', type: 'Boolean'}
    ],
    returns: [
      {arg: 'favourite', type: 'boolean'},
      {arg: 'favourite2', type: 'Boolean'}
    ]
  });
};
