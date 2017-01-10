---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA RUN OBJECT (>1 LINE) 

 property | value 
--- | --- 
 label | NUPA RUN OBJECT (>1 LINE)
 tag | RUNMANY
 routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
 return value type | GLOBAL ARRAY
 description | Gathers data from a program that is similar to a TIU object.  This RPC calls an M program that places more than one node data into ^TMP($J).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | The patient's DFN. | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL |  | true | The code to xecute to obtain the data, such as S X=$$OBJECT^ROUTINE(). | 