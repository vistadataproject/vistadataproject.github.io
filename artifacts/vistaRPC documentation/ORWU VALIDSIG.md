---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU VALIDSIG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU VALIDSIG{:/}
 tag | {::nomarkdown}VALIDSIG{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates a broker encrypted electronic signature.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns TRUE if valid electronic signature
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```
 S X=$$DECRYP^XUSRB1(X),ESOK=0                   ; network encrypted
 D HASH^XUSHSHP
 I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1```




 Generated on January 13th 2017, 6:55:28 am