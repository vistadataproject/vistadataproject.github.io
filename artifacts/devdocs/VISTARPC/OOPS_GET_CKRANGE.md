---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET CKRANGE<br/>
# OOPS GET CKRANGE

This broker call is used to return an array which holds the integer values stored in the field included in the input parameter. Currently in ASISTS, the fields that are evaluated/returned via this broker are:140 Regular Work Schedule for CA1244 Regular Work Schedule for CA2

## Properties

Property | Value
--- | ---
Label | GETSCHED
MUMPS Implementation | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | The input parameter must contain the file, field and IEN to retrieve therequested informationd. The format of the input parmameter must be FILE^FIELD^IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}