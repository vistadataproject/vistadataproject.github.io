---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV LAB 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV LAB{:/}
 tag | {::nomarkdown}LAB{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of labs to display on the CPRS GUI cover sheet for apatient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return labs for patient
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | {::nomarkdown} D:$L($T(STRT2^AWCMCPR1)) STRT2^AWCMCPR1<br/> D LIST^ORQOR1(.LST,DFN,"LAB",4,"T-"_$$RNGLAB(DFN),"T","AW",1)<br/> D:$L($T(END^AWCMCPR1)) END^AWCMCPR1{:/}




 Generated on January 13th 2017, 7:15:27 am