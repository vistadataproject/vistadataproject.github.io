---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR TURNAROUND TIME REPORT<br/>
# DSIR TURNAROUND TIME REPORT

This RPC will return a list of ROI Instance file IEN's and the Processing time to either complete or to the end of the selected date range.

## Properties

Property | Value
--- | ---
Label | TURN
Routine | [DSIROIR1](http://code.osehra.org/dox/Routine_DSIROIR1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLERK | LITERAL | 99 | true | This is the DUZ of the selected clerk.
START DATE | LITERAL | 7 | true | This is the FileMan date to start the report.  If null the process will start at the earilest date on file.
END DATE | LITERAL | 7 | true | This is the FileMan date the report runs through.  If null the current day is used as the end date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}