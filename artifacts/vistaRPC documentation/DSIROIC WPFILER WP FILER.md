---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROIC WPFILER WP FILER 

 property | value 
--- | --- 
 label | DSIROIC WPFILER WP FILER
 tag | WPFILER
 routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to update comments is several places withing the Release of Information Record Manager (ROI/DSIR)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | The IEN (Internal Entry Number) is the location within the file where the data is to be filed. | 
| TYPE | LITERAL | 1 | true |  TYPE    - Must be \C\, \I\, \A\, OR \R\ as follows:           Regular comments (19620,.31)(C)           Internal Comments (19620,.32)(I)            Annotations (19620.98,100)(A)           Released Document Comment (19620.1,1)(R) | 
| STRLIST | LIST | 9999 | true | STRLIST - List (ARRAY) of lines to be filed | 




 ###### Generated on January 11th 2017, 6:39:43 am