---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGADDIMAGE 

 property | value 
--- | --- 
 label | MAGGADDIMAGE
 tag | ADD
 routine | [MAGGTIA](http://code.osehra.org/dox/Routine_MAGGTIA_source.html)
 return value type | SINGLE VALUE
 description | RPC Call to add new entry to Image File using UPDATE^DIE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGGZ | LIST |  | true | MAGGZ is an array of fields and their entries.   i.e. MAGGZ(1)=\.5^38\   field .5   data is 38 If Long Description is included in fields, we create a new array to holdthe text, and pass that to UPDATE^DIE. If this entry is an object group then MAGGZ(n)=\2005.04^344\(The field 2005.04 is the OBJECT GROUP MULTIPLE.) Special processing is done to 'coded' entries.i.e. MAGGZ(n)=\ABS^STUFFONLY\  The \ABS\ code tells routine to take extraaction depending on piece 2, \STUFFONLY\, which says to NOT schedule theabstract to be created by the background processor. | 




 Generated on January 11th 2017, 7:15:04 am