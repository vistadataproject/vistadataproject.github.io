---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; IBD GET INPUT OBJECT BY FORM
# IBD GET INPUT OBJECT BY FORM

Returns a list of input objects on one encounter forms .There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.  

Property | Value
--- | ---
Label | FRMLSTI
Routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRM | LITERAL | 40 | true | Input the pointer to the encounter form file or the unique name of theencounter form



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}