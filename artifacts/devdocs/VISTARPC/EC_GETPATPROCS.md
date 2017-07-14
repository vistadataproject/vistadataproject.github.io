---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETPATPROCS<br/>
# EC GETPATPROCS

Returns an array of patient entries from EVENT CAPTURE PATIENT FILE #721 that matches a location, DSS unit, patient DFN, start date and end date.

## Properties

Property | Value
--- | ---
Label | PATPROC
Routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows:-  1.  ECLOC  - Location ien  2.  ECPAT  - Patient DFN ien  3.  ECUNT  - DSS unit ien  4.  ECSD   - Start Date  5.  ECED   - End Date



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}