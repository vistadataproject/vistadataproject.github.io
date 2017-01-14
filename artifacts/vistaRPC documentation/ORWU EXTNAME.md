---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU EXTNAME 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU EXTNAME{:/}
 tag | {::nomarkdown}EXTNAME{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the external form of a pointer value given the IEN and filenumber.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EXTNAME^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | return external form of pointer
 First comment | {::nomarkdown}IEN=internal number, FN=file number{:/}
 Input parameters | {::nomarkdown}IEN<br/>FN{:/}
 Code | ```  N REF S REF=$G(^DIC(FN,0,"GL")),VAL=""<br/> I $L(REF),+IEN S VAL=$P($G(@(REF_IEN_",0)")),U)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}