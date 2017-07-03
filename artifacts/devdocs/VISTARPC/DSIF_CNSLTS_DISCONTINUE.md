---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS DISCONTINUE
# DSIF CNSLTS DISCONTINUE

This RPC allows for the discontinuing of a selected Consult. Cloned from ORQQCN DISCONTINUE

Property | Value
--- | ---
Label | DISCON
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCIEN | LITERAL |  | true | This is the Consult IEN that needs to be discontinued.
DSIFPROV | LITERAL |  | true | Provider who Discontinued or Denied consult.
DSIFDT | LITERAL |  | true | This is the date the consult was discontinued or denied.
DSIFACTM | LITERAL | 2 | true | Flag used to determine if Consult was DISCONTINUED or DENIED. &#x27;DC&#x27; - Discontinued&#x27;DY&#x27; - Denied
DSIFCOM | LIST | 80 |  | The array of comments associated with the discontinue/deny for the consult.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}