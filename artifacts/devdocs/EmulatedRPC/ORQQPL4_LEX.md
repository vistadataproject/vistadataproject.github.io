---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQPL4 LEX
# ORQQPL4 LEX

This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [ORQQPL4 LEX](../VISTARPC/ORQQPL4_LEX)
MUMPS Implementation | [LEX^ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)
Type | READ
Complexity | DIFFICULT
Uses | N/A
Return Type | GLOBAL ARRAY
Return Description | N/A
File Types Used | None
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
X | LITERAL | true | The search text entered by the user | HYPERTENSION
VIEW | LITERAL | false | The Lexicon VIEW parameter | PLS
ORDATE | LITERAL | false | the date of interest in FM format (defaults to TODAY) | 3161011.152823
ORINCSYN | LITERAL | false | Boolean flag specifying whether or not to include synonyms for SNOMED CT Concepts(defaults to 0 (false)) | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}