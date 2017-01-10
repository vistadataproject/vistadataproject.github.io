---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LONG LIST CLINPROC TITLES 

 property | value 
--- | --- 
 label | TIU LONG LIST CLINPROC TITLES
 tag | LNGCP
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | ARRAY
 description | This RPC serves data to a longlist of selectable Titles for CLINICALPROCEDURES.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  | true | This is the reference Title from which the longlist is scrolling. | 
| vs:Input_Parameter-8994_02 | DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference Title. | 