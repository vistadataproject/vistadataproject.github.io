---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA UNHOLD 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA UNHOLD{:/}
 tag | {::nomarkdown}UNHOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to remove a particular order from hold status.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | UNHOLD^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Release order from hold
 Input parameters | {::nomarkdown}ORID<br/>ORNP{:/}
 Code | ```  N ACTDA<br/> S ACTDA=$$ACTION^ORCSAVE("RL",+ORID,ORNP)<br/> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}