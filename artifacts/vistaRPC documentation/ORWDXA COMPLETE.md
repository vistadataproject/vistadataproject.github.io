---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA COMPLETE{:/}
 tag | {::nomarkdown}COMPLETE{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Complete an order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | COMPLETE^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Complete order (generic)
 First comment | {::nomarkdown}N X S X=+$E($$NOW^XLFDT,1,12)<br/>D DATES^ORCSAVE2(+ORID,,X)<br/>D STATUS^ORCSAVE2(+ORID,2)<br/> validate ESCode{:/}
 Input parameters | {::nomarkdown}ORID<br>ESCODE{:/}
 Code | {::nomarkdown}  D COMP^ORCSAVE2(ORID)<br> D COMP^ORMBLDOR(ORID)<br> D GETBYIFN^ORWORR(.REC,ORID){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}