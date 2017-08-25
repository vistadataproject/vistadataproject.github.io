---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV REJECT BUFFER ENTRY<br/>
# DSIV REJECT BUFFER ENTRY

Processes INSURANCE BUFFER file entry to STATUS=REJECT.

## Properties

Property | Value
--- | ---
Label | REJECT
MUMPS Implementation | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBBUFDA | LITERAL | 16 | true | INSURANCE BUFFER file (#355.33) internal entry number to beprocessed (required).
IVMREPTR | LITERAL | 4 | true | Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}