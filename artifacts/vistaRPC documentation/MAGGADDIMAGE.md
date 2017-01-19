---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGADDIMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGADDIMAGE{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [MAGGTIA](http://code.osehra.org/dox/Routine_MAGGTIA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC Call to add new entry to Image File using UPDATE^DIE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGGZ{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGGZ is an array of fields and their entries.   i.e. MAGGZ(1)=\.5^38\   field .5   data is 38 If Long Description is included in fields, we create a new array to holdthe text, and pass that to UPDATE^DIE. If this entry is an object group then MAGGZ(n)=\2005.04^344\(The field 2005.04 is the OBJECT GROUP MULTIPLE.) Special processing is done to 'coded' entries.i.e. MAGGZ(n)=\ABS^STUFFONLY\  The \ABS\ code tells routine to take extraaction depending on piece 2, \STUFFONLY\, which says to NOT schedule theabstract to be created by the background processor.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}