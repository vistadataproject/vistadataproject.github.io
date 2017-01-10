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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| vs:Input_Parameter-8994_02 | PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| vs:Input_Parameter-8994_02 | LOCK | LITERAL |  |  | If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked. | 