---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR UPDATE FEE WAIVER
# DSIR UPDATE FEE WAIVER



Property | Value
--- | ---
Label | UPDATEFW
Routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | IEN FROM 19620 (ROI INSTANCE FILE)
FWCLERK | LITERAL |  | true | ID FROM FILE 200 (NEW PERSON FILE)
FWRQST | LITERAL |  | true | FEE WAIVER REQUESTED 0&#x3D;TRUE, 1&#x3D;FALSE
FWRQSTDT | LITERAL |  | true | FEE WAIVER REQUESTED DATE
FWADJ | LITERAL |  | true | FEE WAIVER ADJUDICATED 0&#x3D;TRUE, 1&#x3D;FALSE
FWGRANT | LITERAL |  | true | FEE WAIVER GRANTED 0&#x3D;TRUE, 1&#x3D;FALSE
FWADJDT | LITERAL |  | true | FEE WAIVER ADJUDICATED DATE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}