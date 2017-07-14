---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC PRTP<br/>
# SC PRTP

Returns the currently active staff member for a position.  Send inPosition Ien and date range, returns name and ien from New Personfile.  SC("IEN")=ien  SC("BEGIN")=begining date for check  SC("END")=ending date for check

## Properties

Property | Value
--- | ---
Label | PRTP
Routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT ARRAY | LIST | 512 | true | See RPC Description for values



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}