---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTAPI SAVE TEST COMMENT
# YTAPI SAVE TEST COMMENT

This API is used to add comments to completed tests and interviews.

Property | Value
--- | ---
Label | ADDCOMM
Routine | [YTRPEXT](http://code.osehra.org/dox/Routine_YTRPEXT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
YSDATA | LITERAL | 200 | true | The YSDATA catains the following information:  YSDATA&#x3D;DFN^DUZ^DATE/TIME TEST ENTERED^NAME OF TEST^AUTHOR^TOTAL LINES OFCOMMENT DFN: Pointer to the Patient fileDATE/TIME TEST ENTERED: FileMan date/time formatNAME OF TEST : Test name in the MH Intrument file #601DUZ and AUTHOR: Pointer to the New Person file #200
YSCOMMT | LIST | 200 | true | YSCOMMT array contains comment lines to be filed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}