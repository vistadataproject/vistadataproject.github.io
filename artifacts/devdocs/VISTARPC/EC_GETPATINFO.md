---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETPATINFO<br/>
# EC GETPATINFO

This is a general purpose call that provides segments of the patient data from the Event Capture Patient File #721.

## Properties

Property | Value
--- | ---
Label | PATINF
Routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The input variable ECARY contains the following values:-    ECIEN - Event Capture Patient ien (#2)    ECTYP - Data type to return            Types are:-            DXS - primary and secondary diagnosis codes            MOD - modifiers            CLASS - classification data            OTH - other type data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}