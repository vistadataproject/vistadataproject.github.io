---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR RPT EXPEDITED PROCESSING
# DSIR RPT EXPEDITED PROCESSING

THIS CALL PROVIDES DATA FOR THE EXPEDITED PROCESSING REPORT IN ROI

Property | Value
--- | ---
Label | EXPRPT
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | FRDT - From Date - FileMan Format - No time
TODT | LITERAL | 7 | true | TODT To Date - FileMan Format - No time
DIV | LITERAL | 15 | true | DIV - Division number/Location number - defaults to DUZ(2)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}