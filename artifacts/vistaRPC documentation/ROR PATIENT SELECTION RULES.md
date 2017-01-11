---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR PATIENT SELECTION RULES 

 property | value 
--- | --- 
 label | ROR PATIENT SELECTION RULES
 tag | PTRULES
 routine | [RORRP022](http://code.osehra.org/dox/Routine_RORRP022_source.html)
 return value type | ARRAY
 description | The ROR PATIENT SELECTION RULES remote procedure returns a list of selection rules that have caused addition of the patient to the registry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | Valid IEN of a registry patient should be assigned to the PATIENparameter. | 




 Generated on January 11th 2017, 7:15:04 am