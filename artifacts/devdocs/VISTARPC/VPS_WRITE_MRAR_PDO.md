---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS WRITE MRAR PDO<br/>
# VPS WRITE MRAR PDO

Called by the Vetlink Kiosk system.  The RPC will accept 4 input parameters; and will return output when processing completes or ends with an exception.  Vetlink Kiosk has the Medication Review Allergy Review modules where a  veteran can review and make changes to his medicationsand any allergies.  The MRAR can also be facilitated by a provider.  Thelocal arrays identify the field to be updated along with the respectivedata changes and serves to the RPC.

## Properties

Property | Value
--- | ---
Label | WRITE
MUMPS Implementation | [VPSMRAR1](http://code.osehra.org/dox/Routine_VPSMRAR1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSPID | LITERAL | 30 | true | The patient identifier value corresponding to the provided identifiertype, VPSTYP.
VPSMRAR | LIST |  | true | Local array representing the kiosk Medication and Allergy Review passed in by reference.   VPSMRAR represents allergy relatedfields, medication related fields, and statistical information about theMRAR session. Each subscript in the array is assigned a composite, delimited string.  localArray(n) &#x3D; FIELD NAME^ARRAY IENS^DATA  where       n is an incremental number      FIELD NAME represents the name of the field in 853.5 file       ARRAY IENS represent entry and sub-entry ctrs (e.g., if patient has 3     allergies then a given value would be &quot;1,2&quot; where &quot;1&quot; represents top     level entry and &quot;2&quot; represents the sub-entry or the 2nd allergy     record.)      DATA is the actual data that is populated at an entry in 853.5 Note:  Each element in VPSMRAR will accept values in the above format. However, elements of some multiple fields use the third index as the value and will ignore provided input values.  
VPSINTFC | LITERAL | 1 | true | Interface Module.&#x27;S&#x27; represents Staff-facing Interface Module&#x27;P&#x27; represents Patient-facing Interface Module
VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Values for this parameter are SSN, DFN, ICN, orVIC/CAC.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}