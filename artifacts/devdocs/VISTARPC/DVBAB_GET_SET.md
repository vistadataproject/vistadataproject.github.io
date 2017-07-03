---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB GET SET
# DVBAB GET SET

This remote procedure retrieves the SET OF CODES for a given file and field for use in populating controls.

Property | Value
--- | ---
Label | GETSET
Routine | [DVBABDDU](http://code.osehra.org/dox/Routine_DVBABDDU_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBFIL | LITERAL |  | true | This paramater contains a valid file number.
DVBFLD | LITERAL |  | true | This parameter contains a field in the file passed as DVBFIL.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}