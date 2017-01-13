---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU EXTNAME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU EXTNAME{:/}
 tag | {::nomarkdown}EXTNAME{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the external form of a pointer value given the IEN and filenumber.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return external form of pointer
 Input Parameters | {::nomarkdown}IEN<br/>FN{:/}
 Lines | ```{::nomarkdown} N REF S REF=$G(^DIC(FN,0,"GL")),VAL=""<br/> I $L(REF),+IEN S VAL=$P($G(@(REF_IEN_",0)")),U)```{:/}
 Leading comment lines | {::nomarkdown}IEN=internal number, FN=file number{:/}




 Generated on January 13th 2017, 7:11:26 am