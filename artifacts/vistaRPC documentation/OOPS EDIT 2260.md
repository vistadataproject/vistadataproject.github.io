---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS EDIT 2260 

 property | value 
--- | --- 
 label | OOPS EDIT 2260
 tag | EDIT
 routine | [OOPSGUI5](http://code.osehra.org/dox/Routine_OOPSGUI5_source.html)
 return value type | ARRAY
 description | This broker call passes in ASISTS data and files it in the ASISTS AccidentReporting File (#2260).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | ARR | LITERAL |  | true | This is an array of the sendparms created in Delphi to fill in the 2260. | 