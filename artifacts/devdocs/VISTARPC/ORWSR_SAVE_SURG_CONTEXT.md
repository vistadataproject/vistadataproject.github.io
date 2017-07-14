---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR SAVE SURG CONTEXT<br/>
# ORWSR SAVE SURG CONTEXT



## Properties

Property | Value
--- | ---
Label | SVSURCTX
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SVSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Save new Notes view preferences for user
Input Parameters | ORCTXT
Code | {::nomarkdown}<pre><code> N TMP<br/> S TMP=$$GET^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1)<br/> I TMP'="" D  Q<br/> . D CHG^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)<br/> D ADD^XPAR(DUZ_";VA(200,","ORCH CONTEXT SURGERY",1,ORCTXT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}