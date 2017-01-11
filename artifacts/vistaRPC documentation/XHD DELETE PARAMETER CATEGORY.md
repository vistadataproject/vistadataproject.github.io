---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XHD DELETE PARAMETER CATEGORY 

 property | value 
--- | --- 
 label | XHD DELETE PARAMETER CATEGORY
 tag | DELETE
 routine | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
 return value type | SINGLE VALUE
 description | This call deletes parameter categories from the M backing store. If the second parameter, DELKIDS is passed as \1\ (boolean true by M programming convention), all descendents of the category in question will also be deleted.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PCAT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category to be deleted. | 
| DELKIDS | LITERAL |  | true | This boolean flag indicates whether to delete all descendents of the parameter category in question. | 




 ###### Generated on January 11th 2017, 6:39:43 am