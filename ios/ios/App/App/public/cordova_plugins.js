
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-file-opener2.FileOpener2",
          "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
          "pluginId": "cordova-plugin-file-opener2",
        "clobbers": [
          "cordova.plugins.fileOpener2"
        ]
        },
      {
          "id": "cordova-plugin-iroot.IRoot",
          "file": "plugins/cordova-plugin-iroot/www/iroot.js",
          "pluginId": "cordova-plugin-iroot",
        "clobbers": [
          "IRoot"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-file-opener2": "3.0.5",
      "cordova-plugin-iroot": "3.1.0"
    };
    // BOTTOM OF METADATA
    });
    