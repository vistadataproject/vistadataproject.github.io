---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV TRAVERSE IMAGE FILE<br/>
# MAGV TRAVERSE IMAGE FILE

This RPC allows the user to traverse the entries on the IMAGE INSTANCE FILE File (#2005.65) that are indexed under an entry on the IMAGE SOP INSTANCE File (#2005.64).

## Properties

Property | Value
--- | ---
Label | TRAVIMG
Routine | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE SOP INSTANCE File (#2005.64) whose child entries on the IMAGE INSTANCE FILE File (#2005.65) are to be traversed.
DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.
CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the instance on the IMAGE INSTANCEFILE File (#2005.65) from which to proceed.  It should be specified onlyfor the NEXT and PREV traversal commands.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}