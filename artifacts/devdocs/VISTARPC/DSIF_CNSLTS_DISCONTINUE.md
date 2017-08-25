---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS DISCONTINUE<br/>
# DSIF CNSLTS DISCONTINUE

This RPC allows for the discontinuing of a selected Consult. Cloned from ORQQCN DISCONTINUE

## Properties

Property | Value
--- | ---
Label | DISCON
MUMPS Implementation | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be discontinued.
DSIFPROV | LITERAL |  | true | Provider who Discontinued or Denied consult.
DSIFDT | LITERAL |  | true | This is the date the consult was discontinued or denied.
DSIFACTM | LITERAL | 2 | true | Flag used to determine if Consult was DISCONTINUED or DENIED. &#x27;DC&#x27; - Discontinued&#x27;DY&#x27; - Denied
DSIFCOM | LIST | 80 |  | The array of comments associated with the discontinue/deny for the consult.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}