---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LONG LIST SURGERY TITLES 

 property | value 
--- | --- 
 label | TIU LONG LIST SURGERY TITLES
 tag | LNGSURG
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | ARRAY
 description | This RPC serves data to a longlist of selectable TITLES for the classnamed in the CLNAME parameter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling. | 
| vs:Input_Parameter-8994_02 | DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title. | 
| vs:Input_Parameter-8994_02 | CLNAME | LITERAL |  | true | This is the name of the class for which titles are being presented.Allowable values are: \SURGICAL REPORTS\\PROCEDURE REPORTS (NON-O.R.)\ | 