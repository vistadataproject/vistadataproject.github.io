---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDPS1 DOWSCH 

 property | value 
--- | --- 
 label | ORWDPS1 DOWSCH
 tag | DOWSCH
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | ARRAY
 description | This RPC returns a list of schedule that have a frequency defined and the frequency is less then or equal to 1440 minutes

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | LOCIEN | LITERAL |  | true | This is the Location IEN from file 44 | 