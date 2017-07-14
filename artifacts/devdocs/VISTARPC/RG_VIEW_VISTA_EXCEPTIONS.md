---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RG VIEW VISTA EXCEPTIONS<br/>
# RG VIEW VISTA EXCEPTIONS

This RPC will allow the MPI IMDQ staff to view VistA exceptions for a given patient logged during a specific date range.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [RGRPC](http://code.osehra.org/dox/Routine_RGRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 10 | true | Integration Control Number for patient exceptions are being requested for.  If ICN is not passed, then SSN or DFN must be.
SSN | LITERAL | 9 | true | Social Security Number for patient exceptions are being requested for.  If SSN is not passed, then ICN or DFN must be.
DFN | LITERAL | 32000 | true | Internal Entry Number for patient, in the PATIENT (#2) file, exceptionsare being requested for  If DFN is not passed, then ICN or SSN must be.
BRANGE | LITERAL | 7 | true | Beginning Date Range for exceptions to be in.
ERANGE | LITERAL | 7 | true | Ending Date Range for Exceptions to have been logged in.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}