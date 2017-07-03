---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPD PUTOCM
# ORWTPD PUTOCM



Property | Value
--- | ---
Label | PUTOCM
Routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [PUTOCM^ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
Method Comment | Set value of &quot;ORCH CONTEXT MEDS&quot;
Input Parameters | ORVAL
Code | {::nomarkdown}<pre><code> I '$L(ORVAL) D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS",1) Q<br/> N ORERR S ORERR=""<br/> D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT MEDS",1,ORVAL,.ORERR)<br/> S ORY=ORERR<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}