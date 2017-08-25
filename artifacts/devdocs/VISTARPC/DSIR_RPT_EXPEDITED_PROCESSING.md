---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR RPT EXPEDITED PROCESSING<br/>
# DSIR RPT EXPEDITED PROCESSING

THIS CALL PROVIDES DATA FOR THE EXPEDITED PROCESSING REPORT IN ROI

## Properties

Property | Value
--- | ---
Label | EXPRPT
MUMPS Implementation | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | FRDT - From Date - FileMan Format - No time
TODT | LITERAL | 7 | true | TODT To Date - FileMan Format - No time
DIV | LITERAL | 15 | true | DIV - Division number/Location number - defaults to DUZ(2)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}