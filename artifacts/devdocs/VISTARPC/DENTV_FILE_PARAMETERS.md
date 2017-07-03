---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV FILE PARAMETERS
# DENTV FILE PARAMETERS

This RPC allows the Dental software to file word processing type parameters.

Property | Value
--- | ---
Label | PAR
Routine | [DENTVTP0](http://code.osehra.org/dox/Routine_DENTVTP0_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LITERAL | 80 | true | Entity is the level where the parameter is stored (USR, PKG, SYS), etc.
PAR | LITERAL | 80 | true | Parameter is the name of the parameter that values are stored under.
INST | LITERAL | 80 | true | Instance is defaulted to 1 if not defined, otherwise it represents the next level where parameters are stored within the entity/parameter combination.
DATA | LIST | 250 | true | DATA is the value of the parameter, passed as a list to allow setting of word processing parameter data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}