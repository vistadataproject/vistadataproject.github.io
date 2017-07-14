---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ACKQAUD1<br/>
# ACKQAUD1

This RPC gets the audiogram data for the selected entryin the Audiometric Exam Data file 509850.9 and returnsit to the calling program in the array ACKQARR()This is for the Audiometric Display only.

## Properties

Property | Value
--- | ---
Label | START
Routine | [ACKQAG01](http://code.osehra.org/dox/Routine_ACKQAG01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | The internal number in the PATIENT file (#2).
IEN | LITERAL |  | true | Internal number in the AUDIOMETRIC EXAM DATA file (#509850.9).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}