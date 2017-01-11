---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC CPT GET CODE 

 property | value 
--- | --- 
 label | DSIC CPT GET CODE
 tag | CPT
 routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
 return value type | SINGLE VALUE
 description | This returns various information about a specific CPT code.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format. | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. | 
| SRC | LITERAL | 1 | true | This Boolean flag (1 or 0) is optional.  Default value is 0.  I SRC=1 then all level III codes to be returned. | 
| DFN | LITERAL | 14 | true | This is a pointer to the PATIENT file.  It is not used at this time. | 




 ###### Generated on January 11th 2017, 6:39:43 am