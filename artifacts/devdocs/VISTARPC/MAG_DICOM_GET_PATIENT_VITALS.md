---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET PATIENT VITALS<br/>
# MAG DICOM GET PATIENT VITALS

This Remote Procedure returns some information about a patient.At this time, the values returned are   VIP-code   Height   WeightThis list may be extended in the future.

## Properties

Property | Value
--- | ---
Label | GETPAT
Routine | [MAGDHWR](http://code.osehra.org/dox/Routine_MAGDHWR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | The value of this parameter is the VA-defined DFN patient identifier.This is the internal entry number for the patient at the local hospital.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}