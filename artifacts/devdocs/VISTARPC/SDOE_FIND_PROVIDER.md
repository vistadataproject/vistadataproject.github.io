---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE FIND PROVIDER<br/>
# SDOE FIND PROVIDER

This Remote Procedure Call (RPC) returns a boolean indicatoron whether a specific provider is associated with an encounter.

## Properties

Property | Value
--- | ---
Label | FINDPRV
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.
PRACTITIONER ID | LITERAL |  | true | This is the internal entry number of an entry in the NEW PERSON[#200 - ^VA(200)] file for a practitioner.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}