var osehraJSON = require('./json/vdm.json');
var ainaJSON = require('./json_AINA/vdm.json');

var jsonOutput = [];
var classDict = {};

function loopVistaClasses(vdmJson, system) {
    if (vdmJson.classes) {
        var classLength = vdmJson.classes.length;
        for (var i = 0; i < classLength; i++) {
            var cls = vdmJson.classes[i];
            if(!classDict[cls.id]) {
                classDict[cls.id] = [system];
            } else {
                classDict[cls.id].push(system);
            }
        }
    }
}

loopVistaClasses(osehraJSON, 'OSEHRA');
loopVistaClasses(ainaJSON, 'AINA');

console.log(classDict);
var osehraOnly = 0, ainaOnly = 0, bothSystem = 0;
for (var id in classDict) {
    if (classDict[id].length == 2) {
        bothSystem++;
    } else if (classDict[id][0] == 'AINA') {
        ainaOnly++;
    } else {
        osehraOnly++;
    } 
}

console.log ({
    AINA_only: ainaOnly,
    OSEHRA_only: osehraOnly,
    both: bothSystem
});

