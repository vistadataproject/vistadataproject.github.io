---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPD SUDF
# ORWTPD SUDF

Set user level default time/occ limits for all reports

Property | Value
--- | ---
Label | SUDF
Routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SUDF^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Set user default for all CPRS reports
Input Parameters | VALUE
Code | {::nomarkdown}<pre><code> N ORERR S ORERR=""<br/> I VALUE=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I") D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR) K ORERR Q<br/> E  D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,VALUE,.ORERR)<br/> S Y=1<br/> K ORERR,VALUES1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}