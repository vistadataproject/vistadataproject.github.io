---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA HOLD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA HOLD{:/}
 tag | {::nomarkdown}HOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to place an existing order on hold.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Place order on hold
 Input Parameters | {::nomarkdown}ORID<br/>ORNP{:/}
 Lines | ```{::nomarkdown} N ACTDA<br/> S ACTDA=$$ACTION^ORCSAVE("HD",+ORID,ORNP)<br/> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)```{:/}




 Generated on January 13th 2017, 7:11:26 am