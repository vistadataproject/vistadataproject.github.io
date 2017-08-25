---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RG PRIMARY VIEW REJECT<br/>
# RG PRIMARY VIEW REJECT

This remote procedure call will return the Primary View Reject report for a particular station, ICN, and date range.  The date range will be from the date of the exception to the current date.

## Properties

Property | Value
--- | ---
Label | PVREJ
MUMPS Implementation | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SITE | LITERAL | 10 | true | This is the requesting site&#x27;s station number.
ICN | LITERAL | 16 | true | This is the Integration Control Number of the patient for whom data is requested.
EXCEPTION DATE | LITERAL | 25 | true | The date/time of the exception will be used as the begin date for the report data extraction.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}