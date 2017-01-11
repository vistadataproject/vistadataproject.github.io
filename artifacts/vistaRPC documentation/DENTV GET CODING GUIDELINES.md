---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CODING GUIDELINES 

 property | value 
--- | --- 
 label | DENTV GET CODING GUIDELINES
 tag | GUIDE
 routine | [DENTVRP2](http://code.osehra.org/dox/Routine_DENTVRP2_source.html)
 return value type | ARRAY
 description | Gets the admin and coding guidelines for an ADA/CPT code.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ADA | LITERAL | 10 | true | The external ADA or CPT code.ADA or CPT code | 
| ADMG | LITERAL | 1 | true | Set to 1 to include Admin guidelines with the Coding Guidelines.  Set to 0 to send only Coding Guidelines. | 




 ###### Generated on January 11th 2017, 6:39:43 am