---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC VITALS BY ID
# ORRC VITALS BY ID

This call returns the details of the measurement sets requested in thelist of ID's passed in.

Property | Value
--- | ---
Label | DETAIL
Routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VITALS | LIST |  | true | This is the list of measurement set identifiers, as VIT:ID where ID isPatient#_&quot;;&quot;_Date.Time as returned by the patient list RPCs.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}