---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CURSPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CURSPE{:/}
 tag | {::nomarkdown}CURSPE{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CURSPE^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return current treating specialty
 Input parameters | {::nomarkdown}PTIFN{:/}
 Code | {::nomarkdown}  Q:'PTIFN<br> N SPEC S SPEC=$$PT^DGPMOBS(PTIFN),ORY=""<br> I SPEC'<0 S ORY=$P(SPEC,U,3)_U_$P(SPEC,U,2)_U_$P(SPEC,U) ;name^ien^obs flag{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}