---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS SET FIELD 

 property | value 
--- | --- 
 label | OOPS SET FIELD
 tag | SETFIELD
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call will set a single field in file 2260. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL |  | true | Contains the IEN of the record and the field number to be modified in file 2260.The format for the IEN and field number is IEN^FIELDNUM. | 
| VALUE | LITERAL |  | true | The VALUE parm should be the external value that you want to set for the fieldspecified in the INPUT parm. | 




Generated on January 11th 2017, 6:34:23 am