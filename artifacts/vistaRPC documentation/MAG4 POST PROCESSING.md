---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 POST PROCESSING 

 property | value 
--- | --- 
 label | MAG4 POST PROCESSING
 tag | ACTION
 routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
 return value type | ARRAY
 description | This is call to perform any post processing action required on a newly saved image of this type.  post processing (for now) isdetermined by the MAG DESCRIPTIVE CAGETORIES file.  If this imagepoints to an entry in that file that has Action turned ON, thenthe TAG^ROUTINE will be called with the Image IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | Internal entry number in the Image File (^MAG(2005)) | 




 ###### Generated on January 11th 2017, 6:39:43 am