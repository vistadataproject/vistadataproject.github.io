---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS DEFAULT REASON 

 property | value 
--- | --- 
 label | DSIF CNSLTS DEFAULT REASON
 tag | DEFREA
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns the specified Consult Service default reason for request. Cloned from ORQQCN DEFAULT REQUEST REASON RPC.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFSVC | LITERAL |  | true | This is the IEN for the Consult Service. | 
| DSIFDFN | LITERAL |  |  | This is the Patient DFN. | 
| DSIFRES | LITERAL |  |  | This is the RESOLVE variable, which indicates boilerplates should be used. | 




Generated on January 11th 2017, 6:34:23 am