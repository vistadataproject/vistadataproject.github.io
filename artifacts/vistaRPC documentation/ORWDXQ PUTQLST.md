---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ PUTQLST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ PUTQLST{:/}
 tag | {::nomarkdown}PUTQLST{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save quick order list.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save quick list
 Input Parameters | {::nomarkdown}DG<br/>QLST{:/}
 Lines | ```{::nomarkdown} N PNM<br/> S PNM="ORWDQ USR"_DUZ_" "_$P(^ORD(100.98,DG,0),U,3)<br/> D QVSAVE^ORWUL(.VAL,PNM,.QLST)<br/> D EN^XPAR(DUZ_";VA(200,","ORWDQ QUICK VIEW","`"_DG,PNM)```{:/}




 Generated on January 13th 2017, 7:11:26 am