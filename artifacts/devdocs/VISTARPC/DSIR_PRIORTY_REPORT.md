---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR PRIORTY REPORT<br/>
# DSIR PRIORTY REPORT

This RPC returns the data for the High Priority Request Report.

## Properties

Property | Value
--- | ---
Label | PRIRTY
MUMPS Implementation | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | FileMan date to start report.
END DATE | LITERAL | 7 | true | FileMan date to report through, defaults to current day.
DIVISION(S) | LITERAL | 999 | true | &#x27;^&#x27; delimited string of internal division numbers to use for multi-divisional reporting. If string is null only the division of the user or all if user holds the DSIR MDIV key.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}