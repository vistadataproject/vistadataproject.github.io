---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 DRUGMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DRUGMSG{:/}
 tag | {::nomarkdown}DRUGMSG{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return message text that is associated with a dispense drug.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return any message associated with a dispense drug
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | {::nomarkdown} N X S X=$$ENDCM^PSJORUTL(IEN)<br/> S VAL=$P(X,U,2)_U_$P(X,U,4){:/}




 Generated on January 13th 2017, 7:15:27 am