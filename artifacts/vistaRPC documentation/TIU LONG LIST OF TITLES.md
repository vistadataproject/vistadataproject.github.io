---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LONG LIST OF TITLES 

 property | value 
--- | --- 
 label | TIU LONG LIST OF TITLES
 tag | LONGLIST
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | ARRAY
 description | This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLASS | LITERAL |  | true | This is a pointer to the CLASS in the Document Definition File (#8925.1)from which the application intends to allow selection of TITLES. | 
| FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling. | 
| DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title. | 