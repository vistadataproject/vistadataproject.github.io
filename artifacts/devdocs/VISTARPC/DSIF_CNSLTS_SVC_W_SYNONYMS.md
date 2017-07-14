---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS SVC W SYNONYMS<br/>
# DSIF CNSLTS SVC W SYNONYMS

This RPC returns a list of Services with synonyms. Cloned from ORQQCN SVC W/SYNONYMS.

## Properties

Property | Value
--- | ---
Label | SVCSYN
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFROOT |  |  |  | 
DSIFSTRT | LITERAL |  | true | This is the Service IEN you wish to start building the return list from.
DSIFWHY | LITERAL |  |  | This is whether you want to return the list for display only, or for use in ordering or forwarding a request.
DSIFSYN | LITERAL | 1 |  | This is a boolean inputon whether you want the return to include synonyms: 1 &#x3D; Yes, 0 No.
DSIFOIEN | LITERAL |  |  | This is the Consult IEN, and is optional.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}