---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS REPLACE MULTIPLE<br/>
# OOPS REPLACE MULTIPLE

This procedure is for updating entries in a multiple, in 2 stages.Stage 1 deletes all current entries, step 2 creates new entries using data passed back from the GUI form.

## Properties

Property | Value
--- | ---
Label | REPLMULT
Routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SINGLE | LITERAL | 256 | true | This parameter contains the file, field, and IEN of the data to be filed in the format FILE^FIELD^IEN.
DATA | LIST |  | true | This parameter contains the data to be filed in the multiple.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}