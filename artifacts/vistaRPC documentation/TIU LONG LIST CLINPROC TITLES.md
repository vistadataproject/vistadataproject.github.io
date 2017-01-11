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


### Method description

 property | value 
--- | --- 
 Method comment | RPC that serves data to a longlist of selectable Titles
 Leading comment lines | Input  -- FROM     Reference Title from which the longlist is,scrolling,DIR      Direction from which the longlist is scrolling,from the reference Title  (Optional- default 1),Output -- Y        An array of the 44 nearest Titles to that indicated,by the user in the direction passed by the longlist,component

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FROM | LITERAL |  | true | This is the reference Title from which the longlist is scrolling. | 
| DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference Title. | 




 Generated on January 11th 2017, 7:15:04 am