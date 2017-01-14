---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPO CSLABD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPO CSLABD{:/}
 tag | {::nomarkdown}CSLABD{:/}
 routine | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CSLABD^[ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}get lab defaults{:/}
 Code | ```  N RNG
 S INFO=""
 F RNG="INPT","OUTPT" D
 .S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQLR DATE RANGE "_RNG,1,"I")_U```




 Generated on January 14th 2017, 7:26:35 am