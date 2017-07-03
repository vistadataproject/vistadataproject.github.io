---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP EDIT AUTH
# DSIF INP EDIT AUTH

Used to edit an existing Inpatient authorization in Fee Basis.Returns 1^edit successfulor-1^error message (Invalid patient, invalid authorization, etc)

Property | Value
--- | ---
Label | EDIT
Routine | [DSIFINP2](http://code.osehra.org/dox/Routine_DSIFINP2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST | 350 | true |  (1)&#x3D;Patient^DFN (2)&#x3D;AuthIEN^IEN of Authorization supplied for Edit authorization (3)&#x3D;FromDate^[Supplied in FM Date format] (4)&#x3D;ToDate^[Supplied in FM Date format] (5)&#x3D;Location^IEN [of file #4 (Primary Service area)]  (6)&#x3D;PurposeofVisit^POV IEN [file #161.82] (7)&#x3D;CostRecovery^(1 or 0) (8)&#x3D;Accident Related^(1 or 0) (9)&#x3D;Clerk^IEN [of file 200] (10)&#x3D;TreatmentType^IEN (set of codes) (11)&#x3D;TypeofCare^IEN (set of codes) (12)&#x3D;DX^1^[value or @] (13)&#x3D;DX^2^[value or @] (14)&#x3D;DX^3^[value or @] (15)&#x3D;PatientType^IEN (set of codes)  (16)&#x3D;Vendor^IEN (of file #161.2) (17)&#x3D;*DELETED - NOT USED (18)&#x3D;Consult #^IEN (19)&#x3D;Fee^(Fee program IEN file #161.8) (20)&#x3D;7078^Associated 7078 IEN (21)&#x3D;Discharge type^type (Optional) but if entered it MUST be 1-4 only (50)&#x3D;Remarks^1^first 80 chars of text (51-59)&#x3D;Remarks^2^next 80 chars of text (etc)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}