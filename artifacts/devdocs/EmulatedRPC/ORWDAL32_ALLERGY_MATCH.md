---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDAL32 ALLERGY MATCH<br/>
# ORWDAL32 ALLERGY MATCH

Given a text string, return a list of possible allergy matches from several different sources

**Native RPC Documentation:** [ORWDAL32 ALLERGY MATCH](../VISTARPC/ORWDAL32_ALLERGY_MATCH)

**MUMPS Implementation:** [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [120.83](../VDM/Sign_symptoms-120_83), [50.6](../VDM/VA_Generic-50_6), [50.67](../VDM/Ndc_upn-50_67), [50.416](../VDM/Drug_Ingredients-50_416), [50.605](../VDM/VA_Drug_Class-50_605), [50.67](../VDM/Ndc_upn-50_67), [50.68](../VDM/VA_Product-50_68)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
searchText | LITERAL | true | The text string to search for | CHOC

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}