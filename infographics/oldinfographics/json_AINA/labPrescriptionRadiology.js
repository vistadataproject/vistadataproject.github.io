var parsedJSON = require('./vdm.json');
var size, color, subSize, label;
var pattern = /^fmdd:[567]/; //5 = prescription; 6 = lab result; 7 = radiology
var labPattern = /^fmdd:6/; 
var radioPattern = /^fmdd:7/;
var prescriptions = [], labs = [], radiology = [];
var result;

if (parsedJSON.classes) {
    var classLength = parsedJSON.classes.length;
    for (var i = 0; i < classLength; i++) {
        var cls = parsedJSON.classes[i];
        if (cls.fmDD.match(pattern)) { //only interested in the 5, 6, 7 groups
            label = cls.label + ' (' + cls.fmDD.replace('fmdd:', '') + ')'; //get the class name
            //label = cls.id 
            size = cls.properties.length;
            for (var j = 0; j < size; j++) {
                var prop = cls.properties[j];
                if (prop && prop.datatype === '[OBJECT]' && prop.range) { //look for subclass count only down to 1 level
                    subSize = prop.range.properties.length;
                    size += subSize -1; //add one more label -the object itself
                }
            }
            if (cls.fmDD.match(labPattern))  // if lab 
                labs.push({"name": label,  "count": size});
            else if (cls.fmDD.match(radioPattern)) //if radiology
                radiology.push({"name": label,  "count": size});
            else 
                prescriptions.push({"name": label,  "count": size});
               
        }
    }
    result = {
        name: 'prescriptions, lab results, and radiology',
        children: [
            {
                name: 'prescriptions',
                children: prescriptions
            }, 
            {
                name: 'lab result',
                children: labs
            },
            {
                name: 'radiology',
                children: radiology
            }
        ]

    }
}


console.log(JSON.stringify(result));