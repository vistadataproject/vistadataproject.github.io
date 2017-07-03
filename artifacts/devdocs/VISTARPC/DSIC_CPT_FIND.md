---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC CPT FIND
# DSIC CPT FIND

For a lookup value, this will return a list of CPT codes matching that lookup value.

Property | Value
--- | ---
Label | FIND
Routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL | LITERAL | 50 | true | This is the lookup value for getting a list of CPT codes
DATE | LITERAL | 14 | true | This date is optional.  Default to TODAY.  Only CPT codes that were active as of this date will be included in the return list.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}