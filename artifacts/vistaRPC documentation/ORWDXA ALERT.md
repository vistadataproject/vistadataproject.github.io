---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA ALERT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA ALERT{:/}
 tag | {::nomarkdown}ALERT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set order to send an alert when the order is resulted.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ALERT^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | alert user (ORDUZ) when order (ORID) resulted
 First comment | {::nomarkdown}if no user passed, use ordering provider:{:/}
 Input parameters | {::nomarkdown}ORID<br/>ORDUZ{:/}
 Code | ```  I $G(ORDUZ)<1 S ORDUZ=+$$ORDERER^ORQOR2(+ORID)
 I $L($G(ORDUZ))<1 S ORDUZ=DUZ
 S DUMMY=1,$P(^OR(100,+ORID,3),U,10)=ORDUZ```




 Generated on January 14th 2017, 7:26:35 am