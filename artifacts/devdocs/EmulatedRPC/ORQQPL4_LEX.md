---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL4 LEX<br/>
# ORQQPL4 LEX

This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.

**Native RPC Documentation:** [ORQQPL4 LEX](../VISTARPC/ORQQPL4_LEX)

**MUMPS Implementation:** [LEX^ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | GLOBAL ARRAY
Return Description | 
File Types Used | None
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
X | LITERAL | true | The search text entered by the user | HYPERTENSION
VIEW | LITERAL | false | The Lexicon VIEW parameter | PLS
ORDATE | LITERAL | false | the date of interest in FM format (defaults to TODAY) | 3161011.152823
ORINCSYN | LITERAL | false | Boolean flag specifying whether or not to include synonyms for SNOMED CT Concepts(defaults to 0 (false)) | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}