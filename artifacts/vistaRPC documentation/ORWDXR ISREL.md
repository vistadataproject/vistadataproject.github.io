---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISREL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISREL{:/}
 tag | {::nomarkdown}ISREL{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if an order has been released, otherwise return 0.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISREL^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Return true if an order has been released
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N STS S STS=$P(^OR(100,+ORIFN,3),U,3)<br> S VAL=$S(STS=10:0,STS=11:0,1:1)  ; false if delayed or unreleased order{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}