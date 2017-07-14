---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MD TMDLEX<br/>
# MD TMDLEX

This RPC will return a list of CPT or ICD for a search typed in.

## Properties

Property | Value
--- | ---
Label | LEX
Routine | [MDRPCW1](http://code.osehra.org/dox/Routine_MDRPCW1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MDSRCH | REFERENCE |  | true | This is the text typed in for the look-up.
MDAPP | REFERENCE |  | true | This is the application indicator.  It is either &quot;CPT&quot; or &quot;ICD&quot;.
STUDY | LITERAL |  | true | This is a required field to obtain the Patient Study # which will be used to check the PCE visit date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}