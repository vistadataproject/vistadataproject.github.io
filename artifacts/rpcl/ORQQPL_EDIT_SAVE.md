---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) --> ORQQPL EDIT SAVE 

 property | value 
--- | --- 
 name | ORQQPL EDIT SAVE
 description | Saves edited problem record
 MUMPS implementation | EDSAVE^ORQQPL1
 type | CHANGE
 complexity | HIGH
 uses | 
 return type | SINGLE VALUE
 return description | 

### Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| GMPIFN | REFERENCE | true | record ifn | 1 |  | 
| GMPROV | REFERENCE | true | provider | 57 |  | 
| GMPVAMC | REFERENCE | true | facility id | 2957 |  | 
| UT | LITERAL | true | GMPLUSER? | 1 |  | 
| EDARRAY | LIST | true | array used for indirect sets of GMPORIG() and GMPFLDS() |  | [List Member](#for-id-edarray) | 
| GMPSRCH | LITERAL |  |  |  |  | 

### List Member Parameters


#### For ID EDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
|  | REFERENCE |  | Diagnosis | diagnosis | GMPFLD(.01)=\521774^R69.\ | 
|  | DATE |  | Date Last Modified | lastModifiedDate | GMPFLD(.03)=\0^\ | 
|  | REFERENCE |  | Provider Narrative | providerNarrative | GMPFLD(.05)=\^Hypertension\ | 
|  | DATE |  | Date Entered | enteredDate | GMPFLD(.08)=\3160801^Aug 01 2016\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>ACTIVE</dt><dd>A</dd><dt>INACTIVE</dt><dd>I</dd></dl>{:/} | Problem Status | problemStatus | GMPFLD(.12)=\A^ACTIVE\ | 
|  | DATE |  | Date Of Onset | onsetDate | GMPFLD(.13)=\3120313^Mar 13 2012\ | 
|  | REFERENCE |  | Problem | problem | GMPFLD(1.01)=\7647488^Hypertension\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>PERMANENT</dt><dd>P</dd><dt>HIDDEN</dt><dd>H</dd><dt>TRANSCRIBED</dt><dd>T</dd></dl>{:/} | Condition | condition | GMPFLD(1.02)=\P\ | 
|  | REFERENCE |  | Entered By | enteredBy | GMPFLD(1.03)=\57^ALEXANDER,ROBERT\ | 
|  | REFERENCE |  | Recording Provider |  | GMPFLD(1.04)=\57^ALEXANDER,ROBERT\ | 
|  | REFERENCE |  | Responsible Provider | responsibleProvider | GMPFLD(1.05)=\57^Alexander,Robert\ | 
|  | REFERENCE |  | Service |  | GMPFLD(1.06)=\^\ | 
|  | DATE |  | Date Resolved | resolvedDate | GMPFLD(1.07)=\3160801^Aug 01 2016\ | 
|  | REFERENCE |  | Clinic | clinic | GMPFLD(1.08)=\10^Clinicd\ | 
|  | DATE |  | Date Recorded |  | GMPFLD(1.09)=\3160801^Aug 01 2016\ | 
|  | BOOLEAN |  | Service Connected | isServiceConnected | GMPFLD(1.1)=\^Unknown\ | 
|  | BOOLEAN |  | Agent Orange Exposure | isAgentOrangeExposure | GMPFLD(1.11)=\0^NO\ | 
|  | BOOLEAN |  | Ionizing Radiation Exposure | isIonizingRadiationExposure | GMPFLD(1.12)=\0^NO\ | 
|  | BOOLEAN |  | Persian Gulf Exposure | isPersianGulfExposure | GMPFLD(1.13)=\0^NO\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>ACUTE</dt><dd>A</dd><dt>CHRONIC</dt><dd>C</dd></dl>{:/} | Priority | priority | GMPFLD(1.14)=\A^ACUTE\ | 
|  | BOOLEAN |  | Head And/Or Neck Cancer | isHeadAndOrNeckCancer | GMPFLD(1.15)=\0^NO\ | 
|  | BOOLEAN |  | Military Sexual Trauma | isMilitarySexualTrauma | GMPFLD(1.16)=\0^NO\ | 
|  | BOOLEAN |  | Combat Veteran | isCombatVeteran | GMPFLD(1.17)=\0^NO\ | 
|  | BOOLEAN |  | Shipboard Hazard & Defense | isShipboardHazardDefense | GMPFLD(1.18)=\0^NO\ | 
|  | LITERAL |  | Snomed Ct Concept Code | snomedCTConceptCode | GMPFLD(80001)=\38341003^38341003\ | 
|  | LITERAL |  | Snomed Ct Designation Code | snomedCTDesignationCode | GMPFLD(80002)=\64176011^64176011\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>false</dt><dd>False</dd><dt>true</dt><dd>True</dd></dl>{:/} | Unique New Term Requested | uniqueNewTermRequested | GMPFLD(80101)=\^\ | 
|  | LITERAL |  | Unique Term Request Comment | uniqueTermRequestComment | GMPFLD(80102)=\^\ | 
|  | DATE |  | Date Of Interest | interestDate | GMPFLD(80201)=\3160801^Aug 01 2016\ | 
|  | LITERAL |  | Coding System | codingSystem | GMPFLD(80202)=\10D^ICD-10-CM\ | 
|  | WORD PROCESSING |  | Previous Problem Comment | comments | GMPFLD(10,1)=\1^1^hypertension comment^A^Aug 10 2016^57\ | 
|  | WORD PROCESSING |  | New Problem Comment | comments | GMPFLD(10,\NEW\,1)=\1^1^hypertension comment^A^Aug 10 2016^57\ | 
|  | LITERAL |  | Number of Problem Comments |  | GMPFLD(10,0)=\1\ | 
|  | REFERENCE |  | Diagnosis | diagnosis | GMPORIG(.01)=\521774^R69.\ | 
|  | DATE |  | Date Last Modified | lastModifiedDate | GMPORIG(.03)=\0^\ | 
|  | REFERENCE |  | Provider Narrative | providerNarrative | GMPORIG(.05)=\^Hypertension\ | 
|  | DATE |  | Date Entered | enteredDate | GMPORIG(.08)=\3160801^Aug 01 2016\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>ACTIVE</dt><dd>A</dd><dt>INACTIVE</dt><dd>I</dd></dl>{:/} | Problem Status | problemStatus | GMPORIG(.12)=\A^ACTIVE\ | 
|  | DATE |  | Date Of Onset | onsetDate | GMPORIG(.13)=\3120313^Mar 13 2012\ | 
|  | REFERENCE |  | Problem | problem | GMPORIG(1.01)=\7647488^Hypertension\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>PERMANENT</dt><dd>P</dd><dt>HIDDEN</dt><dd>H</dd><dt>TRANSCRIBED</dt><dd>T</dd></dl>{:/} | Condition | condition | GMPORIG(1.02)=\P\ | 
|  | REFERENCE |  | Responsible Provider | responsibleProvider | GMPORIG(1.05)=\57^Alexander,Robert\ | 
|  | REFERENCE |  | Service |  | GMPORIG(1.06)=\^\ | 
|  | DATE |  | Date Resolved | resolvedDate | GMPORIG(1.07)=\3160801^Aug 01 2016\ | 
|  | REFERENCE |  | Clinic | clinic | GMPORIG(1.08)=\10^Clinicd\ | 
|  | DATE |  | Date Recorded |  | GMPORIG(1.09)=\3160801^Aug 01 2016\ | 
|  | BOOLEAN |  | Service Connected | isServiceConnected | GMPORIG(1.1)=\^Unknown\ | 
|  | BOOLEAN |  | Agent Orange Exposure | isAgentOrangeExposure | GMPORIG(1.11)=\0^NO\ | 
|  | BOOLEAN |  | Ionizing Radiation Exposure | isIonizingRadiationExposure | GMPORIG(1.12)=\0^NO\ | 
|  | BOOLEAN |  | Persian Gulf Exposure | isPersianGulfExposure | GMPORIG(1.13)=\0^NO\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>ACUTE</dt><dd>A</dd><dt>CHRONIC</dt><dd>C</dd></dl>{:/} | Priority | priority | GMPORIG(1.14)=\A^ACUTE\ | 
|  | BOOLEAN |  | Head And/Or Neck Cancer | isHeadAndOrNeckCancer | GMPORIG(1.15)=\0^NO\ | 
|  | BOOLEAN |  | Military Sexual Trauma | isMilitarySexualTrauma | GMPORIG(1.16)=\0^NO\ | 
|  | BOOLEAN |  | Combat Veteran | isCombatVeteran | GMPORIG(1.17)=\0^NO\ | 
|  | BOOLEAN |  | Shipboard Hazard & Defense | isShipboardHazardDefense | GMPORIG(1.18)=\0^NO\ | 
|  | LITERAL |  | Number of Original Problem Comments |  | GMPORIG(10,0)=\1^\ | 
|  | WORD PROCESSING |  | Original Problem Comment | comments | GMPORIG(10,1)=\1^1^hypertension comment^A^3160810^57^ALEXANDER,ROBERT\ | 
|  | LITERAL |  | Snomed Ct Concept Code | snomedCTConceptCode | GMPORIG(80001)=\38341003^38341003\ | 
|  | LITERAL |  | Snomed Ct Designation Code | snomedCTDesignationCode | GMPORIG(80002)=\64176011^64176011\ | 
|  | ENUMERATION | {::nomarkdown}<dl><dt>false</dt><dd>False</dd><dt>true</dt><dd>True</dd></dl>{:/} | Unique New Term Requested | uniqueNewTermRequested | GMPORIG(80101)=\^\ | 
|  | LITERAL |  | Unique Term Request Comment | uniqueTermRequestComment | GMPORIG(80102)=\^\ | 
|  | DATE |  | Date Of Interest | interestDate | GMPORIG(80201)=\3160801^Aug 01 2016\ | 
|  | LITERAL |  | Coding System | codingSystem | GMPORIG(80202)=\10D^ICD-10-CM\ | 