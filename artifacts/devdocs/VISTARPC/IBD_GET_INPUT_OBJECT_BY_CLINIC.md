---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; IBD GET INPUT OBJECT BY CLINIC
# IBD GET INPUT OBJECT BY CLINIC

Returns a list of input objects on all encounter forms defined for aclinic in the clinic setup.  There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.

Property | Value
--- | ---
Label | CLNLSTI
Routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINIC | LITERAL | 30 | true | This is the pointer to file 44 or a unique clinic name.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}