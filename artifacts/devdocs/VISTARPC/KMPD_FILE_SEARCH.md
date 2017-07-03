---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD FILE SEARCH
# KMPD FILE SEARCH

Search for entries in file.

Property | Value
--- | ---
Label | FILESRC
Routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | File Number.
PARAM2 | LITERAL | 245 | true | Fields to return.  This will be comma delimited. Example:  &quot;.01,.04,1,12&quot;  - would return fields .01, .01, 1 and 12
PARAM3 | LITERAL | 245 | true | Text to search for. Example:  &quot;DG&quot; - would retrieve all entries beginning with DG.                - if text equals &quot;*&quot; or &quot;&quot; (null) then all entries will be                  retrieved
PARAM4 | LITERAL | 245 | true | Name of array for temporary storage.  This should be a global array, andmust be either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}