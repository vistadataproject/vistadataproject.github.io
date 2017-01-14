---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXC DELORD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DELORD{:/}
 tag | {::nomarkdown}DELORD{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELORD^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Delete order
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  N STS,DIK,DA
 S STS=$P(^OR(100,+ORIFN,8,1,0),U,15),OK=0
 I (STS=10)!(STS=11) D  Q  ; makes sure it's an unreleased order
 . ;*400 - Delete unused replacement order
 . N OLDIFN,DA,DIE,DR S OLDIFN=$P(^OR(100,+ORIFN,3),U,5) I $G(OLDIFN) D
 . . S DA=+OLDIFN,DIE="^OR(100,",DR="9.1///@"
 . . D ^DIE K DA,DIE,DR
 . S DA=+ORIFN,DIK="^OR(100," Q:'DA
 . D ^DIK
 . S OK=1
 . D DELETE^OROCAPI1(+ORIFN)```




 Generated on January 14th 2017, 7:26:35 am