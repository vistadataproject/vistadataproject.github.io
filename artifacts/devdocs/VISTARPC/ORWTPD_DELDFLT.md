---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPD DELDFLT<br/>
# ORWTPD DELDFLT

Delete user level's specific health summary component setting( date range and max occurences)

## Properties

Property | Value
--- | ---
Label | DELDFLT
Routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DELDFLT^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Delete user&#x27;s default setting 
Code | {::nomarkdown}<pre><code> N ORERR S ORERR=""<br/> D NDEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",.ORERR)<br/> D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR)<br/> K ORERR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}