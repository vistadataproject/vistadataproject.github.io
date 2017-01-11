---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR PATIENT DELETE 

 property | value 
--- | --- 
 label | ROR PATIENT DELETE
 tag | DELETE
 routine | [RORRP030](http://code.osehra.org/dox/Routine_RORRP030_source.html)
 return value type | ARRAY
 description | The ROR PATIENT DELETE remote procedure marks the patient's record as deleted from the registry.not deleted and an error code is returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| RORDFN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the RORDFN parameter. | 
| FORCE | LITERAL |  |  | Deprecatedrecord will be deleted from the registry even if some data has been sent to the AAC already. BE VERY CAREFUL WITH THIS! | 




Generated on January 11th 2017, 6:34:23 am