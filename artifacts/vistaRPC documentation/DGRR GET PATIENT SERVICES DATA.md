---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR GET PATIENT SERVICES DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}DGRR GET PATIENT SERVICES DATA{:/}
 tag | {::nomarkdown}PATIENT{:/}
 routine | [DGRRPSGT](http://code.osehra.org/dox/Routine_DGRRPSGT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return an XML via VistaLink containing Patient ServiceDemographic information for any given Patient ICN{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input Parameters:   (Rq) Required parameter  (Op) Optional parameter      (Rq) PARAMS(\PatientId_Type\) = the three letters \DFN\ or \ICN\     (Rq) PARAMS(\PatientId\) = the actual value of the patient DFN or ICN     (Op) PARAMS(REQUESTED_DATE) = Date to be used for ADT Movement                                   List - defaults to DT      (Op) PARAMS(\PrimaryDemo\) = 0 or 1 to request Primary Demographic                                  Info      (Op) PARAMS(\SecondaryDemo\) = 0 or 1 to request Secondary                                    Demographic Info      (Op) PARAMS(\TertiaryDemo\) = 0 or 1 to request Tertiary Demographic                                   Info      (Op) PARAMS(\MainAddress\) = 0 or 1 to request Main Address Info      (Op) PARAMS(\TemporaryAddress\) = 0 or 1 to request Temporary                                       Address Info      (Op) PARAMS(\ConfidentialAddress\) = 0 or 1 to request                                          Confidential Address Info      (Op) PARAMS(\ContactInfo\) = 0 or 1 to request Contact Information     (Op) PARAMS(\ADTInfo\) = 0 or 1 to request ADT Information      (Op) PARAMS(\EnrollEligibility\) = 0 or 1 to request Enrollment/                                        Eligibility Information{:/} | 




 Generated on January 13th 2017, 6:15:57 am