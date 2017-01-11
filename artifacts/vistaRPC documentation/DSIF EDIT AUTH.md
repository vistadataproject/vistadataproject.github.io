---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF EDIT AUTH 

 property | value 
--- | --- 
 label | DSIF EDIT AUTH
 tag | EDIT
 routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
 return value type | SINGLE VALUE
 description | Used to edit an existing authorization in Fee Basis.Returns 1^edit successfulor-1^error message (Invalid patient, invalid authorization, etc)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ARRAY | LIST | 500 | true | Pass in an array structred as follows for an authorization:  ; DATA INPUT = ARRAY  (need fee program added)(1)=Patient^DFN(2)=AuthIEN^IEN of Authorization [supplied for an Edit, null if we*re adding a new authorization](3)=FromDate^[Supplied in FM Date format](4)=ToDate^[Supplied in FM Date format](5)=Location^IEN [of file #4 (Primary Service area)] (6)=PurposeofVisit^IEN [of file #161.82](7)=CostRecovery^(1 or 0)(8)=Accident Related^(1 or 0)(9)=Clerk^IEN [of file 200](10)=TreatmentType^IEN (set of codes)(11)=TypeofCare^IEN (set of codes)(12)=DX^1^[value](13)=DX^2^[value](14)=DX^3^[value](15)=PatientType^IEN (set of codes, always 10 so far)(16)=Vendor^IEN (of file #161.2)(17)=Contract^IEN (of file #161.43)             ;dsif*3.2*2 dlf(18)=Consult #^IEN(19)=RefProv^IEN (referring provider, file 200)(20)=ICDDiag^[value] (Required if ICD-10)(50)=Remarks^1^first 80 chars of text(51...999999)=Remarks^n^next 80 chars of text(51...n)=Remarks^n^next 80 chars (ad nauseam) of text    | 
| DSIF AUTHLIST |  |  |  |  | 




 ###### Generated on January 11th 2017, 6:39:43 am