---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV PATIENT PROVIDER
# DENTV PATIENT PROVIDER

Sets and kills the ^XTMP("DENTVPT",DFN,DUZ) global to keep track ofwhich provider(s) are accessing which patients.  Users are warnedif another provider is accessing the same patient.

Property | Value
--- | ---
Label | PP
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Contains the patient DFN
FLAG | LITERAL | 1 | true | 1&#x3D;SET (set the index) 2&#x3D;KILL (kill off current pt/prov index)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}