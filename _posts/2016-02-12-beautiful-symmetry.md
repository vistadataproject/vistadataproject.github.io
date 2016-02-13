---
layout: post
title: Beautiful Symmetry
author: conor
tags:
- Technical
---

Beauty is symmetry ...

> universally, the beautiful thing is essentially symmetrical, patterned. -- Plotinus

Now imagine an interface where data is read in one form but written in a completely different form. Let's go further, let's say data is written not in one but in many, many different forms, most of which look more like machine code than anything else. That's what it takes to read and write data to VISTA today.

Patient data is read with the Virtual Patient Record (VPR) service which presents straightforward _JSON_. Here's a Vital Measurement ...

<!--more-->

```text
      {
        "uid": "urn:va:vital:9E7A:1:2495", <--------- unique identifier
        "kind": "Vital Sign", <-------- type
        "pid": "9E7A;1",
        "lastUpdateTime": "20160212233257", <------------ date
        "enteredByName": "LABTECH,TWENTYFOUR",
        "enteredByUid": "urn:va:user:9E7A:20391",
        "facilityCode": "500",
        "facilityName": "CAMP MASTER",
        "locationName": "20 MINUTE",
        "locationUid": "urn:va:location:9E7A:240",
        "typeCode": "urn:va:vuid:4500634",
        "typeName": "BLOOD PRESSURE", <--------- what's been measured?
        "result": "136/82", <--------- the measurement
        "resulted": "20160212233257",
        "units": "mm[Hg]"
      }
```

But to write a Vital Measurement into VISTA? Oh the tangled web ...

First you must dig out just the right Remote Procedure Call (RPC) from [a library of 3,302](https://github.com/vistadataproject/VDM/blob/master/definitions/nodeVISTA/8994.jsonld). Vital Measurements are written with [GMV ADD VM](https://github.com/vistadataproject/VDM/blob/master/prototypes/vitals/rpcWriteVitals.js) which doesn't taken any sort of JSON. With no formal definition of the data it takes, you must fall back on the RPC's human readable description which says ...

```text
... has the following data: piece1^piece2^piece3^piece4^piece5 where: 

  * piece1 = date/time in FileMan internal format  
  * piece2 = patient number from FILE 2 (i.e., DFN)  
  * piece3 = vital type, a semi-colon, the reading, a semi-colon, and oxygen flow rate and percentage   
    values [optional] (e.g., 21;99;1 l/min 90%)  
  * piece4 = hospital location (FILE 44) pointer value  
  * piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the qualifier (File 120.52) internal 
    entry numbers separated by colons (e.g., 547*50:65)
```

For the JSON above, the RPC wants this cryptic string ...

```text
3160212.233257^1^1;136/82^240^20391
```

<p data-pullquote="And these RPCs are far from robust"></p>

So you read with well defined JSON but to write, you must pick from a list of 3,302 calls, read about a cryptic, bespoke format and then come up with a way to form data appropriately. And these RPCs are far from robust, a weakness I'll discuss in a future post. May I say ugly?

Providing _symmetric read-write data access for VISTA_ is a key part of the _VISTA Data Project_. With the _MVDM Module_, a client will be able to read and write Vitals, Problems, Orders, Medications ... in one consistent, formally-defined JSON-LD format. Will it be beautiful? Well, we'll leave that to the beholders.

 

