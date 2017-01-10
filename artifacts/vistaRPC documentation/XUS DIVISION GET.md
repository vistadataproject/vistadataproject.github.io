---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS DIVISION GET 

 property | value 
--- | --- 
 label | XUS DIVISION GET
 tag | DIVGET
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | ARRAY
 description | This RPC will return a list of divisions of a user.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 30 | true | If passed this will be the user to get the division info on. | 