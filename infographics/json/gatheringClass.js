var parsedJSON = require('./vdm.json');
var linkCount, literalCount, objCount, className;
var jsonOutput = [];
if (parsedJSON.classes) {
    var classLength = parsedJSON.classes.length;
    for (var i = 0; i < classLength; i++) {
        var cls = parsedJSON.classes[i];
        linkCount = 0, literalCount = 0, objCount=0;
        if (cls.properties) {
            className = cls.label;
            for (var j = 0; j < cls.properties.length; j++) {
                var property = cls.properties[j];
                if (property.datatype) {
                    if (property.datatype === 'POINTER')
                        linkCount++;
                    else if (property.datatype === '[OBJECT]') {
                        if (property['range']) {
                            property['range'].properties.forEach(function(subProp){
                                if(subProp.datatype === 'POINTER') linkCount++;
                                else if (subProp.datatype === '[OBJECT]')objCount++;
                                else literalCount++
                            });
                        }
                    }
                    else
                        literalCount++;
                }
            }
        }
        jsonOutput.push({"name" : className, "link" : linkCount, "literal" : literalCount, "object" : objCount});
    }
}

console.log(JSON.stringify(jsonOutput));


