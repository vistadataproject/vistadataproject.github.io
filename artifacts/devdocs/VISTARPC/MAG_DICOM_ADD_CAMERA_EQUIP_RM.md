---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM ADD CAMERA EQUIP RM
# MAG DICOM ADD CAMERA EQUIP RM

Check the OUTSIDE STUDY Camera Equipment Room for the IMAGING LOCATION.If it is not present, add it.

Property | Value
--- | ---
Label | ADDROOM
Routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RAEXAM | LITERAL |  | true | String of exam/case identifiers separated by &#x27;^&#x27;:  ^01: IEN of the patient in the RAD/NUC MED PATIENT file (#70)  ^02: IEN in the REGISTERED EXAMS multiple (sub-file #70.02)  ^03: IEN in the EXAMINATIONS multiple (sub-file #70.03)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}