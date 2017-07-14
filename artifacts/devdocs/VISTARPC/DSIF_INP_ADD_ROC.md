---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP ADD ROC<br/>
# DSIF INP ADD ROC

This RPC duplicates the logic of the FBCH ADD ROC input template for file 161.5.

## Properties

Property | Value
--- | ---
Label | ADD
Routine | [DSIFROC](http://code.osehra.org/dox/Routine_DSIFROC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5)
DTOCT | LITERAL | 12 | true | Date &amp; Time of Contact (Required - FileMan Date/Time)
NARR | LIST | 999 | true | Narrative (Optional - Word Processing Array)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}