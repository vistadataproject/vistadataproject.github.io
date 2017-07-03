---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD SEARCH BY LIST
# KMPD SEARCH BY LIST

Search By list.

Property | Value
--- | ---
Label | SBLIST
Routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LISTTYPE | LITERAL | 5 | true | 2 - client name3 - ip address
SUBSCRIPT | LITERAL | 30 | true | Subscript (free text)Ex: &quot;ORWCV&quot;
DATAGLOBAL | LITERAL | 30 | true | Global containing data.Ex: ^TMP($J)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}