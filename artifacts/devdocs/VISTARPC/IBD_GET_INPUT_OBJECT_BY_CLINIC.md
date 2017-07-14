---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBD GET INPUT OBJECT BY CLINIC<br/>
# IBD GET INPUT OBJECT BY CLINIC

Returns a list of input objects on all encounter forms defined for aclinic in the clinic setup.  There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.

## Properties

Property | Value
--- | ---
Label | CLNLSTI
Routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINIC | LITERAL | 30 | true | This is the pointer to file 44 or a unique clinic name.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}