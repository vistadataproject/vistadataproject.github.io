---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQAL DETAIL<br/>
# ORQQAL DETAIL

This function returns a string of information for a specific allergy/ adverse reaction.  Returned data is delimited by "^" and includes: allergen/reactant, originator, originator title, verified/not verified,  observed/historical,,type, observation date, severity, drug class,  symptoms/reactions (mulitple symptoms possible - delimited by ";"),  comments.

**Native RPC Documentation:** [ORQQAL DETAIL](../VISTARPC/ORQQAL_DETAIL)

**MUMPS Implementation:** [DETAIL^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Allergies
Class | READ
Complexity | MEDIUM
Uses | 
Return Type | SINGLE VALUE
Return Description | String of information for a specific allergy/adverse reaction.  Returned<br/>data is delimited by "^" and includes: allergen/reactant, originator, <br/>originator title, verified/not verified, observed/historical, , <br/>type, observation date, severity, drug class, symptoms/reactions (mulitple<br/>symptoms are possible - delimited by ";"), comments.
File Types Used | [120.8](../VDM/Patient_Allergies-120_8)
Parameters Used | DFN, ALLERGY_ID, ALLERGY_ID


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
ALLERGY_ID | REFERENCE | true | The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8). | 4
ALLERGY_ID | REFERENCE | false | The record number of the allergy/adverse reaction from the Patient<br/>Allergies file (#120.8). | 4

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}