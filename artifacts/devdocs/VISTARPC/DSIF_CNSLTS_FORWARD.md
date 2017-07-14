---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS FORWARD<br/>
# DSIF CNSLTS FORWARD

This RPC allows for a Consult to be forwarded to a different Service. Cloned from ORQQCN FORWARD

## Properties

Property | Value
--- | ---
Label | FWRD
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be forwarded.
DSIFSVC | LITERAL |  | true | This is the Service to which the consult is being forwarded.
DSIFPROV | LITERAL |  | true | This is the provider responsible for forwarding the consult.
DSIFATTN | LITERAL |  |  | This is the provider whose attention the consult is sent to. Not required.
DSIFURG | LITERAL |  | true | This is the urgency of the request.
DSIFDT | LITERAL |  | true | This is the actual date and time of activity.
DSIFCOM | LIST |  | true | This is the comments associated with the forward consult request.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}