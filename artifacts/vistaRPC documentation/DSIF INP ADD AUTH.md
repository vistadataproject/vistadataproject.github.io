---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP ADD AUTH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP ADD AUTH{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [DSIFINP2](http://code.osehra.org/dox/Routine_DSIFINP2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to pass in an array of values to add a new Inpatient Authorization.  It does verification for required data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}350{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Input array values (add/edit RPC's) ; Input array values (add/edit RPC's)  (1)=Patient^DFN - REQ  (2)=AuthIEN^IEN of Authorization [supplied for an Edit, null to add newauthorization] - REQ  (3)=FromDate^[Supplied in FM Date format] - REQ  (4)=ToDate^[Supplied in FM Date format]  (5)=Location^IEN [of file #4 (Primary Service area)]   (6)=PurposeofVisit^POV IEN [file #161.82] - REQ  (7)=CostRecovery^(1 or 0)  (8)=Accident Related^(1 or 0)  (9)=Clerk^IEN [of file 200] - REQ  (10)=TreatmentType^IEN (set of codes)  (11)=TypeofCare^IEN (set of codes)  (12)=DX^1^[value]  (13)=DX^2^[value]  (14)=DX^3^[value]  (15)=PatientType^IEN (set of codes)   (16)=Vendor^IEN (of file #161.2)  (17)=*DELETED - NOT USED  (18)=Consult #^IEN  (19)=Fee^(Fee program IEN file #161.8) - REQ  (20)=7078^Associated 7078 IEN - REQ  (21)=Discharge type^type (Optional, but if entered it MUST be 1-4 only)  (50)=Remarks^1^first 80 chars of text  (51...999999)=Remarks^n^next 80 chars of text Required fields are so noted{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}