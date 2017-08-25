---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU GET TIU CONTEXT<br/>
# ORWTIU GET TIU CONTEXT



## Properties

Property | Value
--- | ---
Label | GTTIUCTX
MUMPS Implementation | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GTTIUCTX^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Returns current Notes view context for user
Input Parameters | ORUSER
Code | {::nomarkdown}<pre><code> N OCCLIM,SHOWSUB<br/> S Y=$$GET^XPAR("ALL","ORCH CONTEXT NOTES",1)<br/> I +$P(Y,";",5)=0 D<br/> . S OCCLIM=$P($$PERSPRF^TIULE(DUZ),U,10)<br/> . S:+OCCLIM>0 $P(Y,";",5)=OCCLIM<br/> S SHOWSUB=$P(Y,";",6)<br/> S $P(Y,";",6)=$S(SHOWSUB'="":SHOWSUB,1:0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}