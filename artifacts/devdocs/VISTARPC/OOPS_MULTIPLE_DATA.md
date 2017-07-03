---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS MULTIPLE DATA
# OOPS MULTIPLE DATA

This broker call will be used to both get and set data stored in a sub-recordor multiple.  When saving (setting) data, the entire subrecord is deleted thenre-filed.

Property | Value
--- | ---
Label | MULTIPLE
Routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 50 | true | This parameter contains three pieces of data, the top level file number to befiled into, the field number, and the IEN in the format:  FILE^FIELD^IEN.
DATA | LIST | 250 | true | This parameter is an array that contains the data to be filed into the multiple.  If this parameter is null, then a GET will be preformed rather than a set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}