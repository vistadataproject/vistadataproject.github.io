---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGPROCIMAGE 

 property | value 
--- | --- 
 label | MAGGPROCIMAGE
 tag | FILE
 routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
 return value type | SINGLE VALUE
 description | Files image pointer in procedure file and procedure pointers in image file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | DATA = DATETIME^PSIEN^DFN^MCIEN A string of 4 pieces   DATETIME:  PROCEDURE DATE/TIME  REQPSIEN  : PROCEDURE INTERNAL NUMBER  ^MCAR(MCFILE,XDFN  :  PATIENT DFNMCIEN :  PROCEDURE FILE, INTERNAL NUMBER  ^MCAR(697.2,X | 
| MAGARR | LIST |  | true | An array of images that are to be associated with the procedure. | 




 Generated on January 11th 2017, 7:15:04 am