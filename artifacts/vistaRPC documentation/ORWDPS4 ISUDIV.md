---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS4 ISUDIV 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 ISUDIV{:/}
 tag | {::nomarkdown}ISUDIV{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISUDIV^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | True: OI of the order is for both UD and IV
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  N OI
 S (OI,ORY)=0
 S OI=+$O(^OR(100,+$G(ORIFN),.1,"B",0)) Q:OI<1
 I $O(^ORD(101.43,OI,9,"B","IVM RX",0)) S ORY=1
```




 Generated on January 14th 2017, 7:26:36 am