---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 POST PROCESS ACTIONS 

 property | value 
--- | --- 
 label | MAG4 POST PROCESS ACTIONS
 tag | POSTACT
 routine | [MAGGSPP](http://code.osehra.org/dox/Routine_MAGGSPP_source.html)
 return value type | ARRAY
 description |  This is call to perform any post processing action required on  a newly saved image of this type.  post processing (for now) is  determined by the IMAGE INDEX FOR TYPES file.  If this image  points to an entry in that file that has Action turned ON, then  the TAG^ROUTINE will be called with the Image IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | Internal entry number in the Image File (^MAG(2005)) | 




Generated on January 11th 2017, 6:34:23 am