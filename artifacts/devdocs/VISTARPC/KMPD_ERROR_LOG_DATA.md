---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD ERROR LOG DATA<br/>
# KMPD ERROR LOG DATA

Get data from file #3.075 (ERROR LOG).

## Properties

Property | Value
--- | ---
Label | ERRDATA
Routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | Ien in format &quot;MultipleIen,Ien&quot; for file #3.075 (ERROR LOG).
PARAM2 | LITERAL | 60 | true | Temporary global storage.  This must be either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}