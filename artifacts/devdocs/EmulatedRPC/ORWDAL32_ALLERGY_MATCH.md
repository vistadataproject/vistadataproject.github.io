---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWDAL32 ALLERGY MATCH
# ORWDAL32 ALLERGY MATCH

Given a text string, return a list of possible allergy matches from several different sources

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWDAL32 ALLERGY MATCH](../VISTARPC/ORWDAL32_ALLERGY_MATCH)
MUMPS Implementation | [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Type | READ
Complexity | DIFFICULT
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [120.83](../VDM/Sign_symptoms-120_83), [50.6](../VDM/VA_Generic-50_6), [50.67](../VDM/Ndc_upn-50_67), [50.416](../VDM/Drug_Ingredients-50_416), [50.605](../VDM/VA_Drug_Class-50_605), [50.67](../VDM/Ndc_upn-50_67), [50.68](../VDM/VA_Product-50_68)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
searchText | LITERAL | true | The text string to search for | CHOC

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}