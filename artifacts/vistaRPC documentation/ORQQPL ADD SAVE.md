---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 label | ORQQPL ADD SAVE
 tag | ADDSAVE
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | SINGLE VALUE
 description | Add new problem record

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMPDFN | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | GMPROV |  |  |  |  | 
| vs:Input_Parameter-8994_02 | GMPVAMC | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | ADDARRAY | LIST |  |  | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET | 