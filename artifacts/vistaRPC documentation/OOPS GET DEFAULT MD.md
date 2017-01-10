---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET DEFAULT MD 

 property | value 
--- | --- 
 label | OOPS GET DEFAULT MD
 tag | DEFMD
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This call will return the Default Medical Doctor information based on an IENin the ASISTS 2260 file being passed in. The information returned is from thefile 2262.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | This input value must be a valid IEN from the ASISTS 2260 file. | 