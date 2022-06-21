var fs        = require('fs')
  , path      = require('path')
  , XmlStream = require('xml-stream')
  ;

// Create a file stream and pass it to XmlStream
var stream = fs.createReadStream(path.join(__dirname, 'demo.xml'));
var xml = new XmlStream(stream);

xml.preserve('item', true);
xml.collect('subitem');
xml.on('endElement: item', function(item) {
  console.log(item);
});