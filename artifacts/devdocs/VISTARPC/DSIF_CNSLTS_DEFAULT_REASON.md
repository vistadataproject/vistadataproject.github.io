---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS DEFAULT REASON
# DSIF CNSLTS DEFAULT REASON

This RPC returns the specified Consult Service default reason for request. Cloned from ORQQCN DEFAULT REQUEST REASON RPC.

Property | Value
--- | ---
Label | DEFREA
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFSVC | LITERAL |  | true | This is the IEN for the Consult Service.
DSIFDFN | LITERAL |  |  | This is the Patient DFN.
DSIFRES | LITERAL |  |  | This is the RESOLVE variable, which indicates boilerplates should be used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}