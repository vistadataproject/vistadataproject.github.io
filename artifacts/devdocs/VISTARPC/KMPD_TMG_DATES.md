---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD TMG DATES
# KMPD TMG DATES

Return Timing dates in format:         array(0)=FMStartDate^ExtStartDate^FMEndDate^ExtEndDate        array(1)=FMDate^ExtDate        array(2)=FMDate^ExtDate        array(...)=...

Property | Value
--- | ---
Label | TMGDATES
Routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SUBSCRIPT | LITERAL | 60 | true | Timing subscript - free text         example: &quot;ORWCV&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}