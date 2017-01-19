---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC DELORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DELORD{:/}
 tag | {::nomarkdown}DELORD{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DELORD^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Delete order
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N STS,DIK,DA<br> S STS=$P(^OR(100,+ORIFN,8,1,0),U,15),OK=0<br> I (STS=10)!(STS=11) D  Q  ; makes sure it's an unreleased order<br> . ;*400 - Delete unused replacement order<br> . N OLDIFN,DA,DIE,DR S OLDIFN=$P(^OR(100,+ORIFN,3),U,5) I $G(OLDIFN) D<br> . . S DA=+OLDIFN,DIE="^OR(100,",DR="9.1///@"<br> . . D ^DIE K DA,DIE,DR<br> . S DA=+ORIFN,DIK="^OR(100," Q:'DA<br> . D ^DIK<br> . S OK=1<br> . D DELETE^OROCAPI1(+ORIFN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}