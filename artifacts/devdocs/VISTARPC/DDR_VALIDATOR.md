---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR VALIDATOR
# DDR VALIDATOR

This function allows the application to validate user input toa field before filing data. The call uses the database server VAL^DIEcall.

Property | Value
--- | ---
Label | VALC
Routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call VAL^DIE:    - &quot;FILE&quot;  - file number    - &quot;IENS&quot;  - internal entry numbers    - &quot;VALUE&quot; - user input value    - &quot;VALUE&quot; - user input value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}