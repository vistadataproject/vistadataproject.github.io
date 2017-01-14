---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXC SAVECHK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SAVECHK{:/}
 tag | {::nomarkdown}SAVECHK{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save order checks for session.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVECHK^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Save order checks for session
 Input parameters | {::nomarkdown}ORVP<br/>RSN<br/>LST{:/}
 Code | ```  N ORCHECK,ORIFN S OK=1
 D LST2CHK
 I $L(RSN)>0 S ORCHECK("OK")=RSN
 S ORIFN=0 F  S ORIFN=$O(ORCHECK(ORIFN)) Q:'ORIFN  D OC^ORCSAVE2```




 Generated on January 14th 2017, 7:26:35 am