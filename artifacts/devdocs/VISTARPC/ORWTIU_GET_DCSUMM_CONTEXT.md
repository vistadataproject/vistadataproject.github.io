---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTIU GET DCSUMM CONTEXT
# ORWTIU GET DCSUMM CONTEXT



Property | Value
--- | ---
Label | GTDCCTX
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GTDCCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Returns current DC Summary view context for user
Input Parameters | ORUSER
Code | {::nomarkdown}<pre><code> N OCCLIM,SHOWSUB<br/> S Y=$$GET^XPAR("ALL","ORCH CONTEXT SUMMRIES",1)<br/> I +$P(Y,";",5)=0 D<br/> . S OCCLIM=$P($$PERSPRF^TIULE(DUZ),U,10)<br/> . S:+OCCLIM>0 $P(Y,";",5)=OCCLIM<br/> S SHOWSUB=$P(Y,";",6)<br/> S $P(Y,";",6)=$S(SHOWSUB'="":SHOWSUB,1:0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}