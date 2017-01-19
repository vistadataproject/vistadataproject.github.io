---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF ADD AUTH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF ADD AUTH{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to pass in an array of values to add a new Authorization.  It does verification for required data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown} ; DATA INPUT = ARRAY  (need fee program added) ;    (1)=Patient^DFN ;    (2)=AuthIEN^IEN of Authorization [null for add authorization] ;    (3)=FromDate^[Supplied in FM Date format] ;    (4)=ToDate^[ditto] ;    (5)=Location^IEN of file #4 (Primary Service area)  ;    (6)=PurposeofVisit^IEN of file #161.82 ;    (7)=CostRecovery^(1 or 0) ;    (8)=Accident Related^(1 or 0) ;    (9)=Clerk^IEN of file 200 ;    (10)=TreatmentType^IEN (set of codes) ;    (11)=TypeofCare^IEN (set of codes) ;    (12)=DX^1^[value] ;    (13)=DX^2^[value] ;    (14)=DX^3^[value] ;    (15)=PatientType^IEN (set of codes, always 10 so far) ;    (16)=Vendor^IEN (of file #161.2) ;    (17)=Contract^IEN (of file #161.43)             ;dsif*3.2*2 dlf ;    (18)=Consult #^IEN ;    (19)=RefProv^IEN (referring provider, file 200) ;    (20)=ICDDiag^[value] (Internal; Required if ICD-10) ;    (50)=Remarks^1^first 80 chars of text ;    (51...999999)=Remarks^n^next 80 chars of text{:/} | 
| {::nomarkdown}DSIF ADD AUTH{:/} |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}