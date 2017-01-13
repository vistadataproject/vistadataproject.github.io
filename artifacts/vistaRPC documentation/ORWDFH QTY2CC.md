---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH QTY2CC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH QTY2CC{:/}
 tag | {::nomarkdown}QTY2CC{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns cc's given a product, strength, and quantity.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return cc's given a product, strength, & quantity
 Input Parameters | {::nomarkdown}PRD<br/>STR<br/>QTY{:/}
 Lines | ```
 N X,VQTY,DUR
 S VQTY=$$VALIDQTY^ORCDFHTF(QTY) I '$L(VQTY)!('PRD)!('STR) S VAL="" Q
 S PRD=+$P($G(^ORD(101.43,PRD,0)),U,2)
 S DUR=$P(VQTY," X ",2) I $L(DUR) S DUR=$S(DUR["H":"H",1:"X")_+DUR
 S X=+VQTY_"&"_$E($P(VQTY," ",2))_U_$P($P(VQTY,"/",2)," ")_U_DUR
 S VAL=$$QUAN^FHWOR5R(PRD_"-"_STR,X)_U_VQTY```




 Generated on January 13th 2017, 6:55:29 am