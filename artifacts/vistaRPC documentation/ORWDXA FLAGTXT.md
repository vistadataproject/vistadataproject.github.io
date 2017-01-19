---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA FLAGTXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA FLAGTXT{:/}
 tag | {::nomarkdown}FLAGTXT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return text associated with a particular flagged order (reason for flag).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FLAGTXT^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | flag reason
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  N FLAG<br> S FLAG=$G(^OR(100,+ORID,8,$P(ORID,";",2),3))<br> S LST(1)="FLAGGED: "_$$FMTE^XLFDT($P(FLAG,U,3))_" by "_$P($G(^VA(200,+$P(FLAG,U,4),0)),U)<br> S LST(2)=$P(FLAG,U,5) ; reason{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}