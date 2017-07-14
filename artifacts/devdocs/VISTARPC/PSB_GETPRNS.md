---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB GETPRNS<br/>
# PSB GETPRNS

Returns all administrations of a PRN order that have NOT had the PRNEffectiveness documented in the current admission or within the hours defined in PRN documentation site parameter whichever is greater of the two.  When the PRN medication is administered a flag is set based on the given PRN Reason.  This flag will dictate whether BCMA will mandate aPAIN SCORE measurement with PRN documentation.

## Properties

Property | Value
--- | ---
Label | GETPRNS
Routine | [PSBPRN](http://code.osehra.org/dox/Routine_PSBPRN_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient IEN number.
PSBORD | LITERAL |  | true | Order number from Inpatient Medications. If order number is passed then returns all PRN effectiveness not documented for that order. If order number is NOT passed, then returns all PRN effectiveness not documented for that patient.
PSBSIOPI | LITERAL | 1 | true | This parameter is a true/false flag (1/0).  If true use the new SI/OP Wpfields and return data in the Results array to the GUI Client. The field is not required, so a null will convert into a 0, for false,making this backwards compatible.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}