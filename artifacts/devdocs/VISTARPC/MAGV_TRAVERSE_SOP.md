---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV TRAVERSE SOP<br/>
# MAGV TRAVERSE SOP

This RPC allows the user to traverse the entries on the IMAGE SOP INSTANCEFile (#2005.64) that are indexed under an entry on the IMAGE SERIES File(#2005.63).

## Properties

Property | Value
--- | ---
Label | TRAVSOP
MUMPS Implementation | [MAGVRS09](http://code.osehra.org/dox/Routine_MAGVRS09_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the internal entry number of the entry on the IMAGE SERIES File (#2005.63) whose child entries on the IMAGE SOP INSTANCE File (#2005.64) are to be traversed.
DIR | LITERAL | 10 | true | This is the direction of traversal:  FIRST, NEXT, PREV, or LAST.
CHILDIEN | LITERAL | 10 |  | This is the internal entry number of the entry on the IMAGE SOP INSTANCE File (#2005.64) from which to proceed.  It should be specified only forthe NEXT and PREV traversal commands.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}