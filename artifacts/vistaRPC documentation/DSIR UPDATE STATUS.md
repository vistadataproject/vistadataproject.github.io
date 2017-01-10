---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR UPDATE STATUS 

 property | value 
--- | --- 
 label | DSIR UPDATE STATUS
 tag | STATRPC
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | SINGLE VALUE
 description | VEJD ROI UPDATE STATUS        Input parameter:1.      Request Internal Number2.      Status Internal Code Return Value:1.      -1 ^ Error Message2.      Internal Number to Status History table

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ROI INSTANCE NUMBER | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | STATUS CODE | LITERAL | 1 | true |  | 