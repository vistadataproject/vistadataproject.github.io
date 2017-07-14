---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC VALIDATOR<br/>
# SC VALIDATOR

This function allows the application to validate user input toa field before filing data. The call uses the database server VAL^DIEcall.

## Properties

Property | Value
--- | ---
Label | VALC
Routine | [SCUTBK](http://code.osehra.org/dox/Routine_SCUTBK_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call VAL^DIE:    - &quot;FILE&quot;  - file number    - &quot;IENS&quot;  - internal entry numbers    - &quot;IENS&quot;  - internal entry numbers    - &quot;VALUE&quot; - user input value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}