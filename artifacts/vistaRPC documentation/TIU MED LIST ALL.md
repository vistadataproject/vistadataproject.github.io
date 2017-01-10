---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU MED LIST ALL 

 property | value 
--- | --- 
 label | TIU MED LIST ALL
 tag | LISTALL
 routine | [TIUMED1](http://code.osehra.org/dox/Routine_TIUMED1_source.html)
 return value type | ARRAY
 description | Returns a list of patients for selection.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUFROM | LITERAL |  | true | Value to begin patient list. | 
| vs:Input_Parameter-8994_02 | TIUDIR | LITERAL |  | true | Boolean value for list direction. | 