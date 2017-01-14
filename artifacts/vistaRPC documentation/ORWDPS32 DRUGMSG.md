---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 DRUGMSG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DRUGMSG{:/}
 tag | {::nomarkdown}DRUGMSG{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return message text that is associated with a dispense drug.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DRUGMSG^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return any message associated with a dispense drug
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  N X S X=$$ENDCM^PSJORUTL(IEN)
 S VAL=$P(X,U,2)_U_$P(X,U,4)```




 Generated on January 14th 2017, 7:26:35 am