---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETDATE<br/>
# EC GETDATE

Broker call returns the client date as a Fileman internal and external date format.

## Properties

Property | Value
--- | ---
Label | ECDATE
MUMPS Implementation | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Client entered date and date flag passed in variable ECARY:-        DTSTR  - Date String, eg N, T@800, 4/15@1205        FLG    - Date Flag, eg R means time is required



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}