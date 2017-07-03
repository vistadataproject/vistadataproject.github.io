---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH RANGE OF STATUS
# DSIF BATCH RANGE OF STATUS

Used to display a list of batches based on a batch IEN. on error returns -1^error message

Property | Value
--- | ---
Label | RANGEBAT
Routine | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RANGE | LITERAL | 99 | true | Input range of batch numbers in the format of n-nnn (or a single batch) 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}