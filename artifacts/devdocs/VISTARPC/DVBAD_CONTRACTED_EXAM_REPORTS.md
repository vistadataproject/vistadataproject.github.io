---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAD CONTRACTED EXAM REPORTS<br/>
# DVBAD CONTRACTED EXAM REPORTS

Allows demTRAN (GUI) to execute the Detailed, Summary and Timeliness contracted exam reports.

## Properties

Property | Value
--- | ---
Label | CERPTS
MUMPS Implementation | [DVBACER1](http://code.osehra.org/dox/Routine_DVBACER1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBARTYP | LITERAL | 1 | true | The type of contracted exam report to execute: D: Detailed, S: Summary, or T: Timeliness.
DVBAFLTRS | LIST |  | true | Optional parameter that allows filtering the contracted exam results. The filters include DATE, a date range, CONTRACTOR, IEN of specific contractor, PENDING, referred exams only and SORT for grouping results by contractor or request date/time (Used for Detailed Reports Only).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}