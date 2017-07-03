---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN2 SAVE CONTEXT
# ORQQCN2 SAVE CONTEXT



Property | Value
--- | ---
Label | SAVECTXT
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVECTXT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Save new view preferences for user
Input Parameters | ORCTXT
Code | {::nomarkdown}<pre><code> N TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT)<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT CONSULTS",1,ORCTXT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}