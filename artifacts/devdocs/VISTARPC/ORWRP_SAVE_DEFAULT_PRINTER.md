---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP SAVE DEFAULT PRINTER
# ORWRP SAVE DEFAULT PRINTER

Saves printer as user's default printer.

Property | Value
--- | ---
Label | SAVDFPRT
Routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVDFPRT^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | Save new default printer for user
Input Parameters | ORDEV
Code | {::nomarkdown}<pre><code> N ORPAR,ORERR,ORWINDEF<br/> Q:$L(ORDEV)=0<br/> S ORPAR="ORWDP WINPRINT DEFAULT"<br/> I ORDEV="WIN" S ORWINDEF="Y"<br/> E  S ORWINDEF="N"<br/> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br/> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORWINDEF,.ORERR)<br/> Q:ORDEV="WIN"<br/> S ORPAR="ORWDP DEFAULT PRINTER",ORDEV="`"_ORDEV<br/> I $$GET^XPAR(DUZ_";VA(200,",ORPAR,1)'="" D CHG^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br/> E  D ADD^XPAR(DUZ_";VA(200,",ORPAR,1,ORDEV,.ORERR)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}