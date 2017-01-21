---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL UPDATE 

 property | value 
--- | --- 
 name | ORQQPL UPDATE
 domain | Problem
 description | {::nomarkdown}Updates problem record{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQPL UPDATE)
 MUMPS implementation | [UPDATE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | ARRAY
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| UPDARRAY | LIST ([UPDARRAY](#for-id-updarray)) | true | {::nomarkdown}UPDATE ARRAY{:/} |  | 

#### UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
| DIAGNOSIS | REFERENCE |  | {::nomarkdown}Diagnosis{:/} | diagnosis | ORARRAY(\DIAGNOSIS\)=\521774\ | 
| STATUS | ENUMERATION | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | {::nomarkdown}Problem Status{:/} | problemStatus | ORARRAY(\STATUS\)=\I\ | 
| ONSET | DATE |  | {::nomarkdown}Date Of Onset{:/} | onsetDate | ORARRAY(\ONSET\)=\3160303.\ | 
| LEXICON | REFERENCE |  | {::nomarkdown}Problem{:/} | problem | ORARRAY(\LEXICON\)=\7647488\ | 
| PROVIDER | REFERENCE |  | {::nomarkdown}Recording Provider{:/} | enteredBy | ORARRAY(\PROVIDER\)=\57\ | 
| RESOLVED | DATE |  | {::nomarkdown}Date Resolved{:/} | resolvedDate | ORARRAY(\RESOLVED\)=\3160812\ | 
| LOCATION | REFERENCE |  | {::nomarkdown}Clinic{:/} | clinic | ORARRAY(\LOCATION\)=\10\ | 
| SC | BOOLEAN |  | {::nomarkdown}Service Connected{:/} | isServiceConnected | ORARRAY(\SC\)=\\ | 
| AO | BOOLEAN |  | {::nomarkdown}Agent Orange Exposure{:/} | isAgentOrangeExposure | ORARRAY(\AO\)=\0\ | 
| IR | BOOLEAN |  | {::nomarkdown}Ionizing Radiation Exposure{:/} | isIonizingRadiationExposure | ORARRAY(\IR\)=\0\ | 
| EC | BOOLEAN |  | {::nomarkdown}Persian Gulf Exposure{:/} | isPersianGulfExposure | ORARRAY(\EC\)=\0\ | 
| HNC | BOOLEAN |  | {::nomarkdown}Head And/Or Neck Cancer{:/} | isHeadAndOrNeckCancer | ORARRAY(\HNC\)=\0\ | 
| MST | BOOLEAN |  | {::nomarkdown}Military Sexual Trauma{:/} | isMilitarySexualTrauma | ORARRAY(\MST\)=\0\ | 
| CV | BOOLEAN |  | {::nomarkdown}Combat Veteran{:/} | isCombatVeteran | ORARRAY(\CV\)=\0\ | 
| SHD | BOOLEAN |  | {::nomarkdown}Shipboard Hazard & Defense{:/} | isShipboardHazardDefense | ORARRAY(\SHD\)=\0\ | 
| SCTC | LITERAL |  | {::nomarkdown}Snomed Ct Concept Code{:/} | snomedCTConceptCode | ORARRAY(\SCTC\)=\38341003\ | 
| SCTD | LITERAL |  | {::nomarkdown}Snomed Ct Designation Code{:/} | snomedCTDesignationCode | ORARRAY(\SCTD\)=\64176011\ | 
| CODEDT | DATE |  | {::nomarkdown}Date Of Interest{:/} | interestDate | ORARRAY(\CODEDT\)=\3160725.\ | 
| CODESYS | LITERAL |  | {::nomarkdown}Coding System{:/} | codingSystem | ORARRAY(\CODESYS\)=\10D\ | 
| PROBLEM | REFERENCE |  | {::nomarkdown}Pointer to Problem #9000011{:/} |  | ORARRAY(\PROBLEM\)=\1\ | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on January 21st 2017, 4:22:40 am</p>{:/}