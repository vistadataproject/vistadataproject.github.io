---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPATPROCS
# EC GETPATPROCS

Returns an array of patient entries from EVENT CAPTURE PATIENT FILE #721 that matches a location, DSS unit, patient DFN, start date and end date.

Property | Value
--- | ---
Label | PATPROC
Routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows:-  1.  ECLOC  - Location ien  2.  ECPAT  - Patient DFN ien  3.  ECUNT  - DSS unit ien  4.  ECSD   - Start Date  5.  ECED   - End Date



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}