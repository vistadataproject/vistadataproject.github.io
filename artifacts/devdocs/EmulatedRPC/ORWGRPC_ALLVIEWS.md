---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWGRPC ALLVIEWS<br/>
# ORWGRPC ALLVIEWS

Returns a list of graph views for the specified entity, based on parameter values.

**Native RPC Documentation:** [ORWGRPC ALLVIEWS](../VISTARPC/ORWGRPC_ALLVIEWS)

**MUMPS Implementation:** [ALLVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Parameters
Class | READ
Complexity | MODERATE
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [68](../VDM/Accession-68), [69.2](../VDM/Lab_Section_Print-69_2), [60](../VDM/Laboratory_Test-60)
Parameters Used | [ORWG GRAPH VIEW](../Parameters/ORWG_GRAPH_VIEW)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
VTYPE | STRING | true | ENTITY TYPE: -1 = USER, -2 = SYSTEM, -3 LAB GROUPS | -1
USER | STRING | false | User IEN, used if VTYPE is -1 or -3. If unspecified, the current user (DUZ) is used. Ignored otherwise | 62

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}