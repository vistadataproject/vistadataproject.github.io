---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS LIST CAS 

 property | value 
--- | --- 
 label | OOPS LIST CAS
 tag | LISTCA
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call returns a listing of all the valid CA's (either 1 or 2) thatcan be selected by this user to create a new Request for Compensation (CA-7)claim.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 60 | true | This parameter passes in 3 pieces of information:  the name or SSN to be usedin building the selection list, the file number to be used for looking up, andthe calling menu. | 




 ###### Generated on January 11th 2017, 6:39:43 am