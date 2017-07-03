---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP GET DEFAULT PRINTER
# ORWRP GET DEFAULT PRINTER

Returns default printer.

Property | Value
--- | ---
Label | GETDFPRT
Routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDFPRT^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | Returns default printer for user
Input Parameters | ORUSER, ORLOC
Code | {::nomarkdown}<pre><code> N IEN,X0,ENT<br/> S ENT="ALL"<br/> I $G(ORLOC) S ORLOC=+ORLOC_";SC(",ENT=ENT_"^"_ORLOC<br/> I +$$GET^XPAR(ENT,"ORWDP WINPRINT DEFAULT") S Y="WIN;Windows Printer" Q<br/> S IEN=$$GET^XPAR(ENT,"ORWDP DEFAULT PRINTER",1) Q:+IEN=0<br/> Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0)<br/> S Y=IEN_";"_$P(X0,U)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}