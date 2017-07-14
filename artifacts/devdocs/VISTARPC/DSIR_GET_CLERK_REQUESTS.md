---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET CLERK REQUESTS<br/>
# DSIR GET CLERK REQUESTS

This RPC returns all open/pending requests for a given clerk.  This is used to populate the today screen.

## Properties

Property | Value
--- | ---
Label | GETTODAY
Routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLERK | LITERAL | 30 | true | The IEN for file 2 which points at the desired ROI clerk.
BILLING | LITERAL | 1 | true | BILLING - The billing system is on (1) or off(0)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}