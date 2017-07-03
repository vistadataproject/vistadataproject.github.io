---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV FEE BASIS ADD
# DENTV FEE BASIS ADD

This RPC adds, or edits a record in the Dental Fee Basis file (#228.5).

Property | Value
--- | ---
Label | ADD
Routine | [DENTVFB](http://code.osehra.org/dox/Routine_DENTVFB_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 30 | true | This is the input array for adding/updating a new record to the Dental FeeBasis file (#228.5).  The following input format is required:   DATA(&quot;DFN&quot;)&#x3D;DFN (pointer to file 2)   DATA(&quot;DIVISION&quot;)&#x3D;dental division name (.01 field) from file 225   DATA(&quot;CATEGORY&quot;)&#x3D;dental category (pointer to file 220.2)   DATA(&quot;DATE&quot;)&#x3D;date authorized for payment, external MM/DD/YYYY   DATA(&quot;COST&quot;)&#x3D;amount authorized for payment, dollar format   DATA(&quot;IEN&quot;)&#x3D;pointer to 228.5 for Updating records



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}