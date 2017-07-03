---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETBATPROCS
# EC GETBATPROCS

Returns an array with entries from EVENT CAPTURE PATIENT FILE #721 for patients for a specific procedure.

Property | Value
--- | ---
Label | PROCBAT
Routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows:-  1. ECLOC - Location ien  2. ECUNT - DSS unit ien  3. ECC   - Category ien  4. ECP   - Procedure ien  5. ECSD  - Start Date  6. ECED  - End Date



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}