---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU NOTES 16 BIT<br/>
# TIU NOTES 16 BIT

This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.

## Properties

Property | Value
--- | ---
Label | NOTES
Routine | [TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is the pointer to the patient file.



## MUMPS Method Description

Property | Value
--- | ---
Method | [NOTES^TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html)
Method Comment | Gets list of Notes
Input Parameters | DFN, EARLY, LATE, ROOTFLAG
Code | {::nomarkdown}<pre><code> I $S(+$G(DFN)'>0:1,'$D(^DPT(+$G(DFN),0)):1,1:0) Q<br/> D LIST(.TIUY,3,DFN,$G(EARLY),$G(LATE),$G(ROOTFLAG))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}