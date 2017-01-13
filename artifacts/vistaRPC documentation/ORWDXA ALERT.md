---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA ALERT{:/}
 tag | {::nomarkdown}ALERT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set order to send an alert when the order is resulted.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | alert user (ORDUZ) when order (ORID) resulted
 Input Parameters | {::nomarkdown}ORID<br/>ORDUZ{:/}
 Lines | ```
 I $G(ORDUZ)<1 S ORDUZ=+$$ORDERER^ORQOR2(+ORID)
 I $L($G(ORDUZ))<1 S ORDUZ=DUZ
 S DUMMY=1,$P(^OR(100,+ORID,3),U,10)=ORDUZ```
 Leading comment lines | {::nomarkdown}if no user passed, use ordering provider:{:/}




 Generated on January 13th 2017, 6:55:29 am