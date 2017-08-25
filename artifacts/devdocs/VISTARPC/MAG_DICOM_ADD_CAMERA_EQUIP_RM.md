---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ADD CAMERA EQUIP RM<br/>
# MAG DICOM ADD CAMERA EQUIP RM

Check the OUTSIDE STUDY Camera Equipment Room for the IMAGING LOCATION.If it is not present, add it.

## Properties

Property | Value
--- | ---
Label | ADDROOM
MUMPS Implementation | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RAEXAM | LITERAL |  | true | String of exam/case identifiers separated by &#x27;^&#x27;:  ^01: IEN of the patient in the RAD/NUC MED PATIENT file (#70)  ^02: IEN in the REGISTERED EXAMS multiple (sub-file #70.02)  ^03: IEN in the EXAMINATIONS multiple (sub-file #70.03)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}