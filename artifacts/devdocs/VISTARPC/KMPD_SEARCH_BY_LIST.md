---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD SEARCH BY LIST<br/>
# KMPD SEARCH BY LIST

Search By list.

## Properties

Property | Value
--- | ---
Label | SBLIST
MUMPS Implementation | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LISTTYPE | LITERAL | 5 | true | 2 - client name3 - ip address
SUBSCRIPT | LITERAL | 30 | true | Subscript (free text)Ex: &quot;ORWCV&quot;
DATAGLOBAL | LITERAL | 30 | true | Global containing data.Ex: ^TMP($J)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}