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
 Lines | ```{::nomarkdown} N IEN,X0,ENT<br/> S ENT="ALL"<br/> I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC<br/> I +$$GET^XPAR(ENT,"ORWDP WINPRINT DEFAULT") S Y="WIN;Windows Printer" Q<br/> S IEN=$$GET^XPAR(ENT,"ORWDP DEFAULT PRINTER",1) Q:+IEN=0<br/> Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0)<br/> S Y=IEN_";"_$P(X0,U)```{:/}




 Generated on January 13th 2017, 7:11:27 am