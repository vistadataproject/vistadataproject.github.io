---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 name | ORQQPL ADD SAVE
 domain | Problem
 description | {::nomarkdown}Add new problem record{:/}
 VA RPC Documentation | [see 8994 and method descriptions](../vistaRPC documentation/ORQQPL ADD SAVE)
 MUMPS implementation | [ADDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| GMPDFN | LITERAL | true |  | 25^CARTER,DAVID^0113^ | 
| GMPROV | REFERENCE | true |  | 57 | 
| GMPVAMC | REFERENCE | true |  | 2957 | 
| ADDARRAY | LIST ([UPDARRAY](#for-id-addarray)) | true | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} |  | 
| GMPSRCH | LITERAL |  |  | hypertension | 

#### UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
|  | REFERENCE |  | {::nomarkdown}Diagnosis{:/} | diagnosis | GMPFLD(.01)=\521774^R69.\ | 
|  | DATE |  | {::nomarkdown}Date Last Modified{:/} | lastModifiedDate | GMPFLD(.03)=\0^\ | 
|  | REFERENCE |  | {::nomarkdown}Provider Narrative{:/} | providerNarrative | GMPFLD(.05)=\^Hypertension\ | 
|  | DATE |  | {::nomarkdown}Date Entered{:/} | enteredDate | GMPFLD(.08)=\3160801^Aug 01 2016\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl>{:/} | {::nomarkdown}Problem Status{:/} | problemStatus | GMPFLD(.12)=\A^ACTIVE\ | 
|  | DATE |  | {::nomarkdown}Date Of Onset{:/} | onsetDate | GMPFLD(.13)=\3120313^Mar 13 2012\ | 
|  | REFERENCE |  | {::nomarkdown}Problem{:/} | problem | GMPFLD(1.01)=\7647488^Hypertension\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>P</dt><dd>PERMANENT</dd><dt>H</dt><dd>HIDDEN</dd><dt>T</dt><dd>TRANSCRIBED</dd></dl>{:/} | {::nomarkdown}Condition{:/} | condition | GMPFLD(1.02)=\P\ | 
|  | REFERENCE |  | {::nomarkdown}Entered By{:/} | enteredBy | GMPFLD(1.03)=\57^ALEXANDER,ROBERT\ | 
|  | REFERENCE |  | {::nomarkdown}Recording Provider{:/} |  | GMPFLD(1.04)=\57^ALEXANDER,ROBERT\ | 
|  | REFERENCE |  | {::nomarkdown}Responsible Provider{:/} | responsibleProvider | GMPFLD(1.05)=\57^Alexander,Robert\ | 
|  | REFERENCE |  | {::nomarkdown}Service{:/} |  | GMPFLD(1.06)=\^\ | 
|  | DATE |  | {::nomarkdown}Date Resolved{:/} | resolvedDate | GMPFLD(1.07)=\3160801^Aug 01 2016\ | 
|  | REFERENCE |  | {::nomarkdown}Clinic{:/} | clinic | GMPFLD(1.08)=\10^Clinicd\ | 
|  | DATE |  | {::nomarkdown}Date Recorded{:/} |  | GMPFLD(1.09)=\3160801^Aug 01 2016\ | 
|  | BOOLEAN |  | {::nomarkdown}Service Connected{:/} | isServiceConnected | GMPFLD(1.1)=\^Unknown\ | 
|  | BOOLEAN |  | {::nomarkdown}Agent Orange Exposure{:/} | isAgentOrangeExposure | GMPFLD(1.11)=\0^NO\ | 
|  | BOOLEAN |  | {::nomarkdown}Ionizing Radiation Exposure{:/} | isIonizingRadiationExposure | GMPFLD(1.12)=\0^NO\ | 
|  | BOOLEAN |  | {::nomarkdown}Persian Gulf Exposure{:/} | isPersianGulfExposure | GMPFLD(1.13)=\0^NO\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>A</dt><dd>ACUTE</dd><dt>C</dt><dd>CHRONIC</dd></dl>{:/} | {::nomarkdown}Priority{:/} | priority | GMPFLD(1.14)=\A^ACUTE\ | 
|  | BOOLEAN |  | {::nomarkdown}Head And/Or Neck Cancer{:/} | isHeadAndOrNeckCancer | GMPFLD(1.15)=\0^NO\ | 
|  | BOOLEAN |  | {::nomarkdown}Military Sexual Trauma{:/} | isMilitarySexualTrauma | GMPFLD(1.16)=\0^NO\ | 
|  | BOOLEAN |  | {::nomarkdown}Combat Veteran{:/} | isCombatVeteran | GMPFLD(1.17)=\0^NO\ | 
|  | BOOLEAN |  | {::nomarkdown}Shipboard Hazard & Defense{:/} | isShipboardHazardDefense | GMPFLD(1.18)=\0^NO\ | 
|  | LITERAL |  | {::nomarkdown}Snomed Ct Concept Code{:/} | snomedCTConceptCode | GMPFLD(80001)=\38341003^38341003\ | 
|  | LITERAL |  | {::nomarkdown}Snomed Ct Designation Code{:/} | snomedCTDesignationCode | GMPFLD(80002)=\64176011^64176011\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>False</dt><dd>false</dd><dt>True</dt><dd>true</dd></dl>{:/} | {::nomarkdown}Unique New Term Requested{:/} | uniqueNewTermRequested | GMPFLD(80101)=\^\ | 
|  | LITERAL |  | {::nomarkdown}Unique Term Request Comment{:/} | uniqueTermRequestComment | GMPFLD(80102)=\^\ | 
|  | DATE |  | {::nomarkdown}Date Of Interest{:/} | interestDate | GMPFLD(80201)=\3160801^Aug 01 2016\ | 
|  | LITERAL |  | {::nomarkdown}Coding System{:/} | codingSystem | GMPFLD(80202)=\10D^ICD-10-CM\ | 
|  | WORD PROCESSING |  | {::nomarkdown}New Problem Comment{:/} | comments | GMPFLD(10,\NEW\,1)=\hypertension comment 1\ | 
|  | LITERAL |  | {::nomarkdown}Number of Problem Comments{:/} |  | GMPFLD(10,0)=\1\ | 

{::nomarkdown} <br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:12 pm</p>{:/}