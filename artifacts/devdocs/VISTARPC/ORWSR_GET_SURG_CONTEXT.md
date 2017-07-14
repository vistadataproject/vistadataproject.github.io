---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR GET SURG CONTEXT<br/>
# ORWSR GET SURG CONTEXT



## Properties

Property | Value
--- | ---
Label | GTSURCTX
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GTSURCTX^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Returns current Notes view context for user
Input Parameters | ORUSER
Code | {::nomarkdown}<pre><code> N OCCLIM,SHOWSUB<br/> S Y=$$GET^XPAR("ALL","ORCH CONTEXT SURGERY",1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}