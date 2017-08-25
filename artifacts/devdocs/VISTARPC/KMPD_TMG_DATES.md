---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD TMG DATES<br/>
# KMPD TMG DATES

Return Timing dates in format:         array(0)=FMStartDate^ExtStartDate^FMEndDate^ExtEndDate        array(1)=FMDate^ExtDate        array(2)=FMDate^ExtDate        array(...)=...

## Properties

Property | Value
--- | ---
Label | TMGDATES
MUMPS Implementation | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SUBSCRIPT | LITERAL | 60 | true | Timing subscript - free text         example: &quot;ORWCV&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}