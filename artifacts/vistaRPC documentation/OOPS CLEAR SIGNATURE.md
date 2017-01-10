---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS CLEAR SIGNATURE 

 property | value 
--- | --- 
 label | OOPS CLEAR SIGNATURE
 tag | CSIGN
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | SINGLE VALUE
 description | This broker call clears the signature from the ASISTS case for Form and discipline (calling menu).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 20 | true |  | 
| vs:Input_Parameter-8994_02 | FORM | LITERAL | 10 | true |  | 
| vs:Input_Parameter-8994_02 | CALL | LITERAL | 5 | true |  | 