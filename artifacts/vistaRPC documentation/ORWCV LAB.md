---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV LAB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV LAB{:/}
 tag | {::nomarkdown}LAB{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of labs to display on the CPRS GUI cover sheet for apatient.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LAB^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Method comment | return labs for patient
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  D:$L($T(STRT2^AWCMCPR1)) STRT2^AWCMCPR1<br> D LIST^ORQOR1(.LST,DFN,"LAB",4,"T-"_$$RNGLAB(DFN),"T","AW",1)<br> D:$L($T(END^AWCMCPR1)) END^AWCMCPR1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}