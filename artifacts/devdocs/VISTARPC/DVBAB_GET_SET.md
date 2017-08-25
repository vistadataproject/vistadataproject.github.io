---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB GET SET<br/>
# DVBAB GET SET

This remote procedure retrieves the SET OF CODES for a given file and field for use in populating controls.

## Properties

Property | Value
--- | ---
Label | GETSET
MUMPS Implementation | [DVBABDDU](http://code.osehra.org/dox/Routine_DVBABDDU_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBFIL | LITERAL |  | true | This paramater contains a valid file number.
DVBFLD | LITERAL |  | true | This parameter contains a field in the file passed as DVBFIL.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}