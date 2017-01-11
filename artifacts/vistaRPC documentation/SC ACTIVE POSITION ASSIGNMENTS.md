---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC ACTIVE POSITION ASSIGNMENTS 

 property | value 
--- | --- 
 label | SC ACTIVE POSITION ASSIGNMENTS
 tag | ACTPOS
 routine | [SCUTBK4](http://code.osehra.org/dox/Routine_SCUTBK4_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC is used to obtain the active positions associated with a patientteam assignment.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPU | LIST | 512 | true | The parameters are DFN, Beginning date range, Ending date range, and Team | 