---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV TRAVERSE PROC REF
# MAGV TRAVERSE PROC REF

This RPC allows the user to traverse the entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) that are indexed under an entry on the IMAGING PATIENT REFERENCE File (#2005.6).

Property | Value
--- | ---
Label | TRAVPROC
Routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) whose child entries on the IMAGING PROCEDURE REFERENCE File (#2005.61) are to be traversed.
DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.
CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) from which to proceed.  It should be specifiedonly for the NEXT and PREV traversal commands.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}