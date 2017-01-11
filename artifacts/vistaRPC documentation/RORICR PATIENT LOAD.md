---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR PATIENT LOAD 

 property | value 
--- | --- 
 label | RORICR PATIENT LOAD
 tag | LOAD
 routine | [RORRP033](http://code.osehra.org/dox/Routine_RORRP033_source.html)
 return value type | GLOBAL ARRAY
 description | The RORICR PATIENT LOAD remote procedure loads the patient's data from theICR registry and prepares the record for editing.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| LOCK | LITERAL |  |  | If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked. | 




 ###### Generated on January 11th 2017, 6:39:43 am