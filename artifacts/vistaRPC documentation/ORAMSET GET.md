---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAMSET GET 

 property | value 
--- | --- 
 label | ORAMSET GET
 tag | GET
 routine | [ORAMSET](http://code.osehra.org/dox/Routine_ORAMSET_source.html)
 return value type | ARRAY
 description | Returns the Anticoagulation Manager parameters for the division which theuser is logged into.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLINICLOC | LITERAL |  | true | This is the entry of the clinic in the HOSPITAL LOCATION FILE (#44), expressed in variable pointer format (e.g., \32;SC(\). | 
| VISITDT | LITERAL |  | true | This is the date/time of the visit in Intenal VA FileMan format (e.g., 3140929.1400). | 




 ###### Generated on January 11th 2017, 6:39:43 am