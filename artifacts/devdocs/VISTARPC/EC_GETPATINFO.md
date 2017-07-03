---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPATINFO
# EC GETPATINFO

This is a general purpose call that provides segments of the patient data from the Event Capture Patient File #721.

Property | Value
--- | ---
Label | PATINF
Routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The input variable ECARY contains the following values:-    ECIEN - Event Capture Patient ien (#2)    ECTYP - Data type to return            Types are:-            DXS - primary and secondary diagnosis codes            MOD - modifiers            CLASS - classification data            OTH - other type data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}