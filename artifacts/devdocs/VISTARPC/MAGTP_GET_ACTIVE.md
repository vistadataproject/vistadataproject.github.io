---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGTP GET ACTIVE<br/>
# MAGTP GET ACTIVE

Get list of all unreleased (FLAG=0) or released (FLAG=1) reports,filter by back days for unreleased reports.Filter by Station Number if consultations are present for a case.

## Properties

Property | Value
--- | ---
Label | GETAC
Routine | [MAGTP004](http://code.osehra.org/dox/Routine_MAGTP004_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAG | LITERAL | 1 | true | FLAG &#x3D; 0: Unreleased / 1: Released
DAYS | LITERAL | 7 | true | Show verified reports up to DAYS (# of days) ago
STAT | LITERAL | 5 | true | If non null, display the case if it has aconsultation for an interpreting station equal to the input.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}