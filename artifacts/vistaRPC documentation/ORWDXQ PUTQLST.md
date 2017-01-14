---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ PUTQLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ PUTQLST{:/}
 tag | {::nomarkdown}PUTQLST{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save quick order list.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PUTQLST^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Save quick list
 Input parameters | {::nomarkdown}DG<br>QLST{:/}
 Code | {::nomarkdown}  N PNM<br> S PNM="ORWDQ USR"_DUZ_" "_$P(^ORD(100.98,DG,0),U,3)<br> D QVSAVE^ORWUL(.VAL,PNM,.QLST)<br> D EN^XPAR(DUZ_";VA(200,","ORWDQ QUICK VIEW","`"_DG,PNM){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}