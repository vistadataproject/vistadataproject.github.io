---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV TRAVERSE SERIES
# MAGV TRAVERSE SERIES

This RPC allows the user to traverse the entries on the IMAGE SERIES File(#2005.63) that are indexed under an entry on the IMAGE STUDY File(#2005.62).

Property | Value
--- | ---
Label | TRAVSERS
Routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE STUDY File (#2005.62) whose child entries on the IMAGE SERIES File (#2005.63) are to be traversed.IEN
DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.
CHILDIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGE SERIES File (#2005.63) from which to proceed.  It should be specified only for theNEXT or PREV traversal commands.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}