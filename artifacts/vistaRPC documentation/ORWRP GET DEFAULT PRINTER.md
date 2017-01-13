---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP GET DEFAULT PRINTER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP GET DEFAULT PRINTER{:/}
 tag | {::nomarkdown}GETDFPRT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default printer.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns default printer for user
 Input Parameters | {::nomarkdown}ORUSER<br/>ORLOC{:/}
 Lines | ```
 N IEN,X0,ENT
 S ENT="ALL"
 I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC
 I +$$GET^XPAR(ENT,"ORWDP WINPRINT DEFAULT") S Y="WIN;Windows Printer" Q
 S IEN=$$GET^XPAR(ENT,"ORWDP DEFAULT PRINTER",1) Q:+IEN=0
 Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0)
 S Y=IEN_";"_$P(X0,U)```




 Generated on January 13th 2017, 6:55:29 am