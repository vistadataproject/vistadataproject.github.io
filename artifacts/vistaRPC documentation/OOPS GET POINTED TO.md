---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET POINTED TO 

 property | value 
--- | --- 
 label | OOPS GET POINTED TO
 tag | GETLIST
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | ARRAY
 description | The broker call passes the file and field number back to the variable FLD onthe M side.  The M code will return the code (pointer) and the description forset of codes or table files to be used in lookups.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| single | LITERAL | 256 |  | This must contain the File and Field number separated by the caret character. | 




 ###### Generated on January 11th 2017, 6:39:43 am