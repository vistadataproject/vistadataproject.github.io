---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP GET DEFAULT PRINTER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP GET DEFAULT PRINTER{:/}
 tag | {::nomarkdown}GETDFPRT{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default printer.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDFPRT^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | Returns default printer for user
 Input parameters | {::nomarkdown}ORUSER<br>ORLOC{:/}
 Code | {::nomarkdown}  N IEN,X0,ENT<br> S ENT="ALL"<br> I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC<br> I +$$GET^XPAR(ENT,"ORWDP WINPRINT DEFAULT") S Y="WIN;Windows Printer" Q<br> S IEN=$$GET^XPAR(ENT,"ORWDP DEFAULT PRINTER",1) Q:+IEN=0<br> Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0)<br> S Y=IEN_";"_$P(X0,U){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}