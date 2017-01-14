---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 VALIDSIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 VALIDSIG{:/}
 tag | {::nomarkdown}VALIDSIG{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | VALIDSIG^[ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  S X=$$DECRYP^XUSRB1(X),ESOK=0<br> D HASH^XUSHSHP<br> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}