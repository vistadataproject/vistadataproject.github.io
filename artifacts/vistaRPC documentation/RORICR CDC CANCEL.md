---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR CDC CANCEL 

 property | value 
--- | --- 
 label | RORICR CDC CANCEL
 tag | CANCEL
 routine | [RORRP027](http://code.osehra.org/dox/Routine_RORRP027_source.html)
 return value type | ARRAY
 description | The RORICR CDC CANCEL remote procedure cancels the editing process initiated by the RORICR CDC LOAD remote procedure (see the LOCK parameter)and unlocks the registry records.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 




 ###### Generated on January 11th 2017, 6:39:43 am