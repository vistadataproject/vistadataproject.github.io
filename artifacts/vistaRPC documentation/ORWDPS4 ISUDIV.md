---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 ISUDIV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 ISUDIV{:/}
 tag | {::nomarkdown}ISUDIV{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | True: OI of the order is for both UD and IV
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | {::nomarkdown} N OI<br/> S (OI,ORY)=0<br/> S OI=+$O(^OR(100,+$G(ORIFN),.1,"B",0)) Q:OI<1<br/> I $O(^ORD(101.43,OI,9,"B","IVM RX",0)) S ORY=1<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am