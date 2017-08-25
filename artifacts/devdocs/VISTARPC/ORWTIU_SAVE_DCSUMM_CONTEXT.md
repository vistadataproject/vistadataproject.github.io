---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU SAVE DCSUMM CONTEXT<br/>
# ORWTIU SAVE DCSUMM CONTEXT



## Properties

Property | Value
--- | ---
Label | SVDCCTX
MUMPS Implementation | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SVDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Save new DC Summary view preferences for user
Input Parameters | ORCTXT
Code | {::nomarkdown}<pre><code> N TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1,ORCTXT)<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SUMMRIES",1,ORCTXT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}