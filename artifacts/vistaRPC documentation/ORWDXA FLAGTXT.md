---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA FLAGTXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA FLAGTXT{:/}
 tag | {::nomarkdown}FLAGTXT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return text associated with a particular flagged order (reason for flag).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | flag reason
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```{::nomarkdown} N FLAG<br/> S FLAG=$G(^OR(100,+ORID,8,$P(ORID,";",2),3))<br/> S LST(1)="FLAGGED: "_$$FMTE^XLFDT($P(FLAG,U,3))_" by "_$P($G(^VA(200,+$P(FLAG,U,4),0)),U)<br/> S LST(2)=$P(FLAG,U,5) ; reason```{:/}




 Generated on January 13th 2017, 7:11:26 am