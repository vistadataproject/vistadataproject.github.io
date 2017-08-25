---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQCN SVC W/SYNONYMS<br/>
# ORQQCN SVC W/SYNONYMS

This is a modified version of ORQQCN GET SERVICE TREE that also includessynonyms for the services returned. It also allows passing of an optionalConsult IEN, for screening allowable services to forward the consult to,especially in the case of interfacility consults.

**Native RPC Documentation:** ORQQCN SVC W/SYNONYMS

**MUMPS Implementation:** [SVCSYN^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | @@@@
Uses | 
Return Type | GLOBAL ARRAY
Return Description | 
File Types Used | [123.5](../VDM/Request_Services-123_5), [101.43](../VDM/Orderable_Items-101_43)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORSTRT | NUMERIC | false | IEN of the request service of interest | 
ORWHY | NUMERIC | false | 0: Display<br/>1: Forwarding or Ordering | 
ORSYN | NUMERIC | false | 0: Do not return synonyms<br/>1: Return synonyms | 
ORIEN | NUMERIC | false | Consult IEN | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}