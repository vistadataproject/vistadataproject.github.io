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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFSVC | LITERAL |  | true | This is the IEN for the Consult Service. | 
| vs:Input_Parameter-8994_02 | DSIFDFN | LITERAL |  |  | This is the Patient DFN. | 
| vs:Input_Parameter-8994_02 | DSIFRES | LITERAL |  |  | This is the RESOLVE variable, which indicates boilerplates should be used. | 