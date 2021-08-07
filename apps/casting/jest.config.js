module.exports = {
  name: 'casting',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/casting',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
