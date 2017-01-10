---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP EDIT AUTH 

 property | value 
--- | --- 
 label | DSIF INP EDIT AUTH
 tag | EDIT
 routine | [DSIFINP2](http://code.osehra.org/dox/Routine_DSIFINP2_source.html)
 return value type | SINGLE VALUE
 description | Used to edit an existing Inpatient authorization in Fee Basis.Returns 1^edit successfulor-1^error message (Invalid patient, invalid authorization, etc)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST | 350 | true |  (1)=Patient^DFN (2)=AuthIEN^IEN of Authorization supplied for Edit authorization (3)=FromDate^[Supplied in FM Date format] (4)=ToDate^[Supplied in FM Date format] (5)=Location^IEN [of file #4 (Primary Service area)]  (6)=PurposeofVisit^POV IEN [file #161.82] (7)=CostRecovery^(1 or 0) (8)=Accident Related^(1 or 0) (9)=Clerk^IEN [of file 200] (10)=TreatmentType^IEN (set of codes) (11)=TypeofCare^IEN (set of codes) (12)=DX^1^[value or @] (13)=DX^2^[value or @] (14)=DX^3^[value or @] (15)=PatientType^IEN (set of codes)  (16)=Vendor^IEN (of file #161.2) (17)=*DELETED - NOT USED (18)=Consult #^IEN (19)=Fee^(Fee program IEN file #161.8) (20)=7078^Associated 7078 IEN (21)=Discharge type^type (Optional) but if entered it MUST be 1-4 only (50)=Remarks^1^first 80 chars of text (51-59)=Remarks^2^next 80 chars of text (etc) | 