var parsedJSON = require('./vdm.json');
var literalCount = [];
if (parsedJSON.classes) {
    var classLength = parsedJSON.classes.length;
    for (var i = 0; i < classLength; i++) {
        var cls = parsedJSON.classes[i];
        if (cls.properties) {
            var propertyLength = cls.properties.length;
            for (var j = 0; j < propertyLength; j++) {
                var property = cls.properties[j];
                if (property.datatype) {
                    if (property.datatype != 'POINTER') {
                        //count embedded_class
                        if (property.datatype === '[object]') {
                            if (property['range']) {
                                property['range'].properties.forEach(function(subProp) {
                                    if (subProp.datatype != 'POINTER') {
                                        if (!literalCount[subProp.datatype]) {
                                            literalCount[subProp.datatype] = 0;
                                        }
                                        literalCount[subProp.datatype]++;
                                    }
                                });
                            }
                        } else {

                            if (!literalCount[property.datatype]) {
                                literalCount[property.datatype] = 0;
                            }
                            literalCount[property.datatype]++;
                        }
                    }
                }
            }
        }
    }
}
var result = [];
for (var k in literalCount) {
    result.push({
        "DATATYPE": k,
        "COUNT": literalCount[k]
    })

}

//console.log(linkCount + '(link) > literal:' + literalCount);
console.log(JSON.stringify(result));