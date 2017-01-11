---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR PATIENT REGISTRY LABS 

 property | value 
--- | --- 
 label | ROR PATIENT REGISTRY LABS
 tag | LOADPRL
 routine | [RORRP041](http://code.osehra.org/dox/Routine_RORRP041_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure returns the results of registry-specific lab tests for the patient and group statistics for these results.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PTIEN parameter. | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 




Generated on January 11th 2017, 6:34:23 am