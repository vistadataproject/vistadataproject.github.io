---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR PATIENT SELECTION RULES
# ROR PATIENT SELECTION RULES

The ROR PATIENT SELECTION RULES remote procedure returns a list of selection rules that have caused addition of the patient to the registry.

Property | Value
--- | ---
Label | PTRULES
Routine | [RORRP022](http://code.osehra.org/dox/Routine_RORRP022_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
PATIEN | LITERAL |  | true | Valid IEN of a registry patient should be assigned to the PATIENparameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}