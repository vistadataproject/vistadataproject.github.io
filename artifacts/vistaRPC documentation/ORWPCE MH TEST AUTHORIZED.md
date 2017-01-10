---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE MH TEST AUTHORIZED 

 property | value 
--- | --- 
 label | ORWPCE MH TEST AUTHORIZED
 tag | MHATHRZD
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | SINGLE VALUE
 description | Indicates if a given mental health test can be given by the given user.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TEST | LITERAL |  |  | MENTAL HEALTH TEST NAME | 
| vs:Input_Parameter-8994_02 | USER | LITERAL |  |  | The user giving the test. | 