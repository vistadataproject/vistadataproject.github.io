---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG PAT BS5 CHECK 

 property | value 
--- | --- 
 label | MAGG PAT BS5 CHECK
 tag | BS5CHK
 routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
 return value type | ARRAY
 description | This RPC calls the GUIBS5A^DPTLK6 API.  To return a list of Patients ifany match the Last Name and Last 4 SSN of the input DFN.It is the Similiar Patient Check.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDFN | LITERAL | 30 | true | DFN of Patient to check. | 




 ###### Generated on January 11th 2017, 6:39:42 am