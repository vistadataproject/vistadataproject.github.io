---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV FILE PARAMETERS<br/>
# DENTV FILE PARAMETERS

This RPC allows the Dental software to file word processing type parameters.

## Properties

Property | Value
--- | ---
Label | PAR
MUMPS Implementation | [DENTVTP0](http://code.osehra.org/dox/Routine_DENTVTP0_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LITERAL | 80 | true | Entity is the level where the parameter is stored (USR, PKG, SYS), etc.
PAR | LITERAL | 80 | true | Parameter is the name of the parameter that values are stored under.
INST | LITERAL | 80 | true | Instance is defaulted to 1 if not defined, otherwise it represents the next level where parameters are stored within the entity/parameter combination.
DATA | LIST | 250 | true | DATA is the value of the parameter, passed as a list to allow setting of word processing parameter data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}