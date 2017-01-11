---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DELETE UNFILED DATA 

 property | value 
--- | --- 
 label | DENTV DELETE UNFILED DATA
 tag | DELU
 routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
 return value type | ARRAY
 description | Input takes in an array of IENS for deletion. Upon completion, the RPC will return an array of IENS with a message. 0^File record deleted if successful, or -1^Error deleting record if unsuccessful.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST |  | true | This is an array of IEN records to be deleted from file 228.7 | 




 ###### Generated on January 11th 2017, 6:39:43 am