---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV REJECT BUFFER ENTRY
# DSIV REJECT BUFFER ENTRY

Processes INSURANCE BUFFER file entry to STATUS=REJECT.

Property | Value
--- | ---
Label | REJECT
Routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBBUFDA | LITERAL | 16 | true | INSURANCE BUFFER file (#355.33) internal entry number to beprocessed (required).
IVMREPTR | LITERAL | 4 | true | Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}