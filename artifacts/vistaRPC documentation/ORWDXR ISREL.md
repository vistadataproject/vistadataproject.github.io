---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISREL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISREL{:/}
 tag | {::nomarkdown}ISREL{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if an order has been released, otherwise return 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return true if an order has been released
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | {::nomarkdown} N STS S STS=$P(^OR(100,+ORIFN,3),U,3)<br/> S VAL=$S(STS=10:0,STS=11:0,1:1)  ; false if delayed or unreleased order{:/}




 Generated on January 13th 2017, 7:15:27 am