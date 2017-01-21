---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGPROCIMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGPROCIMAGE{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Files image pointer in procedure file and procedure pointers in image file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = DATETIME^PSIEN^DFN^MCIEN A string of 4 pieces   DATETIME:  PROCEDURE DATE/TIME  REQPSIEN  : PROCEDURE INTERNAL NUMBER  ^MCAR(MCFILE,XDFN  :  PATIENT DFNMCIEN :  PROCEDURE FILE, INTERNAL NUMBER  ^MCAR(697.2,X{:/} | 
| {::nomarkdown}MAGARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}An array of images that are to be associated with the procedure.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}