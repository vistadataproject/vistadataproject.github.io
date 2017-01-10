---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LONG LIST CONSULT TITLES 

 property | value 
--- | --- 
 label | TIU LONG LIST CONSULT TITLES
 tag | LNGCNSLT
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | ARRAY
 description | This RPC serves data to a longlist of selectable TITLES for CONSULTS.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling. | 
| vs:Input_Parameter-8994_02 | DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title. | 