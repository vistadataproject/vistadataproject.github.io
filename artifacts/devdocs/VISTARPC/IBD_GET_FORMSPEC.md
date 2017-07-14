---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBD GET FORMSPEC<br/>
# IBD GET FORMSPEC

This call will return the Form Specification file (as an array) that isused by the scanning software to recognize a form.  Lines longer than255 characters are truncated on the server and flagged with "~~~"indicating the need to concatenate on the client.

## Properties

Property | Value
--- | ---
Label | GETFS
Routine | [IBDFBK1](http://code.osehra.org/dox/Routine_IBDFBK1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FORMTYPE | LITERAL | 20 | true | Input the form type number from the top of the form, (the left mostnumber)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}