---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS RESUBMIT<br/>
# DSIF CNSLTS RESUBMIT

This RPC allows for a consult to be resubmitted. Cloned from ORQQCN RESUBMIT

## Properties

Property | Value
--- | ---
Label | RESUB
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN to which needs to be resubmitted.
DSIFEDIT | LIST |  | true | This is the array of comments associated with the resubmit request.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}