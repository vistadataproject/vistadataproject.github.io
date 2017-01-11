---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD FILE INQUIRY 

 property | value 
--- | --- 
 label | KMPD FILE INQUIRY
 tag | FILEINQ
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | GLOBAL ARRAY
 description | Return all data in file for specific entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM1 | LITERAL | 60 | true | File number. | 
| PARAM2 | LITERAL | 60 | true | IEN for file in PARAM1. | 
| PARAM3 | LITERAL | 245 | true | Array for temporary data storage.  This should be a global array, and mustbe either ^TMP or ^UTILITY. | 




 ###### Generated on January 11th 2017, 6:39:43 am