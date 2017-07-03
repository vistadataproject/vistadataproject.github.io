---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR FIND1
# DDR FIND1

This function returns the internal entry number of a record using$$FIND1^DIC.

Property | Value
--- | ---
Label | FIND1C
Routine | [DDR2](http://code.osehra.org/dox/Routine_DDR2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call$$FIND1^DIC.    &quot;FILE&quot; the file or subfile number to search   &quot;IENS&quot; the IENS that identifies the subfile if FILE is a subfile number   &quot;FLAGS&quot; possible values include:        A  allow pure numeric input to always be tried as an IEN        M  multiple index allowed        O  only find an exact match if possible        Q  quick lookup        X  exact match only        R  record the ien in ^DISV via RECALL^DILFD   &quot;VALUE&quot; the lookup value   &quot;XREF&quot; the indexes that would be searched for a match   &quot;SCREEN&quot; screen to apply to the record found



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}