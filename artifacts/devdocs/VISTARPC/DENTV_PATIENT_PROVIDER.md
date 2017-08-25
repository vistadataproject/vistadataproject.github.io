---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV PATIENT PROVIDER<br/>
# DENTV PATIENT PROVIDER

Sets and kills the ^XTMP("DENTVPT",DFN,DUZ) global to keep track ofwhich provider(s) are accessing which patients.  Users are warnedif another provider is accessing the same patient.

## Properties

Property | Value
--- | ---
Label | PP
MUMPS Implementation | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | Contains the patient DFN
FLAG | LITERAL | 1 | true | 1&#x3D;SET (set the index) 2&#x3D;KILL (kill off current pt/prov index)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}