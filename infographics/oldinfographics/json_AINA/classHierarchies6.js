var parsedJSON = require('./vdm.json');
var subClass = [], result;
if (parsedJSON.classes) {
    var classLength = parsedJSON.classes.length;
    for (var i = 0; i < classLength; i++) {
        var cls = parsedJSON.classes[i];
        if (cls.fmDD === 'fmdd:6') {
            for (var j = 0; j < cls.properties.length; j++) {
                var prop = cls.properties[j];
                if (prop.datatype === '[OBJECT]' && prop.range) {
                    subClass.push({
                        "name": prop.range.label + ' (' + prop.fmDD.replace('fmdd:', '') + ')'
                    });
                }
            }
            subClass.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
            result = {
                name: "porivder (6)",
                children: subClass
            };

        }
    }
}

console.log(JSON.stringify(result));