---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS MULTIPLE DATA<br/>
# OOPS MULTIPLE DATA

This broker call will be used to both get and set data stored in a sub-recordor multiple.  When saving (setting) data, the entire subrecord is deleted thenre-filed.

## Properties

Property | Value
--- | ---
Label | MULTIPLE
Routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 50 | true | This parameter contains three pieces of data, the top level file number to befiled into, the field number, and the IEN in the format:  FILE^FIELD^IEN.
DATA | LIST | 250 | true | This parameter is an array that contains the data to be filed into the multiple.  If this parameter is null, then a GET will be preformed rather than a set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}