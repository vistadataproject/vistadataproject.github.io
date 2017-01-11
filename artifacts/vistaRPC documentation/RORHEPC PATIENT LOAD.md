---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORHEPC PATIENT LOAD 

 property | value 
--- | --- 
 label | RORHEPC PATIENT LOAD
 tag | LOAD
 routine | [RORRP036](http://code.osehra.org/dox/Routine_RORRP036_source.html)
 return value type | GLOBAL ARRAY
 description | The RORHEPC PATIENT LOAD remote procedure loads the patient's data fromthe Hepatitis C registry and prepares the record for editing.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| LOCK | LITERAL |  |  | If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked. | 