---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD ERROR LOG DATA
# KMPD ERROR LOG DATA

Get data from file #3.075 (ERROR LOG).

Property | Value
--- | ---
Label | ERRDATA
Routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | Ien in format &quot;MultipleIen,Ien&quot; for file #3.075 (ERROR LOG).
PARAM2 | LITERAL | 60 | true | Temporary global storage.  This must be either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}