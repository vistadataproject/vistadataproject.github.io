---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET ALLERGIES<br/>
# VPS GET ALLERGIES

Called by the Vetlink Kiosk system.   VPS GET ALLEGIES retrieves patient allergy data stored in an entry or entries in the PATIENT ALLERGIES file (120.8).  The retrieved data is made available to the Vetlink system. 

## Properties

Property | Value
--- | ---
Label | GET
MUMPS Implementation | [VPSALL01](http://code.osehra.org/dox/Routine_VPSALL01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | The patient DFN is used to collect the various allergy related fields stored in the Adverse Reaction Tracking package.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}