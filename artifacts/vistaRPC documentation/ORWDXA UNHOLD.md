---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA UNHOLD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA UNHOLD{:/}
 tag | {::nomarkdown}UNHOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to remove a particular order from hold status.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Release order from hold
 Input Parameters | {::nomarkdown}ORID<br/>ORNP{:/}
 Lines | ```
 N ACTDA
 S ACTDA=$$ACTION^ORCSAVE("RL",+ORID,ORNP)
 D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)```




 Generated on January 13th 2017, 6:55:29 am