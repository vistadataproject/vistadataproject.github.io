---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQAL DETAIL
# ORQQAL DETAIL

This function returns a string of information for a specific allergy/ adverse reaction.  Returned data is delimited by "^" and includes: allergen/reactant, originator, originator title, verified/not verified,  observed/historical,,type, observation date, severity, drug class,  symptoms/reactions (mulitple symptoms possible - delimited by ";"),  comments.

Property | Value
--- | ---
Domain | Allergies
VISTA RPC Documentation | [ORQQAL DETAIL](../VISTARPC/ORQQAL_DETAIL)
MUMPS Implementation | [DETAIL^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
Type | READ_UNSTRUCTURED
Complexity | MEDIUM
Uses | N/A
Return Type | SINGLE VALUE
Return Description | String of information for a specific allergy/adverse reaction.  Returned<br/>data is delimited by "^" and includes: allergen/reactant, originator, <br/>originator title, verified/not verified, observed/historical, , <br/>type, observation date, severity, drug class, symptoms/reactions (mulitple<br/>symptoms are possible - delimited by ";"), comments.
File Types Used | [120.8](../VDM/Patient_Allergies-120_8)
Parameters Used | DFN, ALLERGY_ID, ALLERGY_ID


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
ALLERGY_ID | REFERENCE | true | The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8). | 4
ALLERGY_ID | REFERENCE | false | The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8). | 4

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}