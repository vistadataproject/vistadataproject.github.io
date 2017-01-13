---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU16 VALIDSIG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU16 VALIDSIG{:/}
 tag | {::nomarkdown}VALIDSIG{:/}
 routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```{::nomarkdown} S X=$$DECRYP^XUSRB1(X),ESOK=0<br/> D HASH^XUSHSHP<br/> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1```{:/}




 Generated on January 13th 2017, 7:11:26 am