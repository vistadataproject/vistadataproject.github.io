---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR KEY VALIDATOR 

 property | value 
--- | --- 
 label | DDR KEY VALIDATOR
 tag | KEYVAL
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | ARRAY
 description | Validates that values passed in do not violate key integrity.  UnderlyingDBS call is KEYVAL^DIE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VALUES TO VALIDATE | LIST | 512 | true | Array of data used to create FDA for KEYVAL^DIE call.  Alternating linescontain file#^IENS^field# and value associated with preceding file, record,and field. | 




 ###### Generated on January 11th 2017, 6:39:42 am