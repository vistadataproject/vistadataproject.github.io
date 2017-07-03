---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET MRAR PDO
# VPS GET MRAR PDO

Software that supports this procedure will build a global array with each subscript in the array assigned a line of text representing clinical data (allergy and medications) associated with the results of a Medication Review Allergy Review with the veteran.  This is referred to as PDO outputand will be presented as a note on the STAFF-FACING interface on Vetlink.

Property | Value
--- | ---
Label | GET
Routine | [VPSPDO1](http://code.osehra.org/dox/Routine_VPSPDO1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 30 | true | Patient ID. This parameter value could be SSN, DFN, ICN, or VIC/CAC based on Patient ID Type.
VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Value is SSN, DFN, ICN, or VIC/CAC



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}