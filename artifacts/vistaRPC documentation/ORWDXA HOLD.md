---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA HOLD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA HOLD{:/}
 tag | {::nomarkdown}HOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to place an existing order on hold.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HOLD^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Place order on hold
 Input parameters | {::nomarkdown}ORID<br/>ORNP{:/}
 Code | ```  N ACTDA
 S ACTDA=$$ACTION^ORCSAVE("HD",+ORID,ORNP)
 D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)```




 Generated on January 14th 2017, 7:26:35 am