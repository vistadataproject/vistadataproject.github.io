---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR CDC LOAD 

 property | value 
--- | --- 
 label | RORICR CDC LOAD
 tag | LOADCDC
 routine | [RORRP025](http://code.osehra.org/dox/Routine_RORRP025_source.html)
 return value type | ARRAY
 description | The RORICR CDC LOAD remote procedure loads the data for the CDC form that is edited/printed by the ICR registry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| LOCK | LITERAL |  |  | If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked. | 




 ###### Generated on January 11th 2017, 6:39:43 am