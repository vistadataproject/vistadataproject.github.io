---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET WITNESSES 

 property | value 
--- | --- 
 label | OOPS GET WITNESSES
 tag | WITR
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call with take and IEN as input and retrieve witness informationand associated comments from the ASISTS 2260 file. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | The only input is the IEN of the ASISTS case number you wish to retrieve Witness information from.  | 