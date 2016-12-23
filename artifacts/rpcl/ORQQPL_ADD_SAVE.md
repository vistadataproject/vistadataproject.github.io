


##ORQQPL ADD SAVE 

 property | value 
--- | --- 
 id | ORQQPL_ADD_SAVE
 name | ORQQPL ADD SAVE
 function | ADDSAVE^ORQQPL1
 rpcType | CHANGE
 complexity | HIGH
 uses | 
 description | Add new problem record
 returnType | SINGLE VALUE
 returnDescription | 

###Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| GMPDFN | LITERAL | true |  | 25^CARTER,DAVID^0113^ |  | 
| GMPROV | REFERENCE | true |  | 57 |  | 
| GMPVAMC | REFERENCE | true |  | 2957 |  | 
| ADDARRAY | LIST | true | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET |  | [List Member](#for-id-addarray) | 
| GMPSRCH | LITERAL |  |  | hypertension |  | 

###List Member Parameters


####For ID ADDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
| 1 | REFERENCE |  | Diagnosis | diagnosis | GMPFLD(.01)=\521774^R69.\ | 
| 2 | DATE |  | Date Last Modified | lastModifiedDate | GMPFLD(.03)=\0^\ | 
| 3 | REFERENCE |  | Provider Narrative | providerNarrative | GMPFLD(.05)=\^Hypertension\ | 
| 4 | DATE |  | Date Entered | enteredDate | GMPFLD(.08)=\3160801^Aug 01 2016\ | 
| 5 | ENUMERATION | <dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl> | Problem Status | problemStatus | GMPFLD(.12)=\A^ACTIVE\ | 
| 6 | DATE |  | Date Of Onset | onsetDate | GMPFLD(.13)=\3120313^Mar 13 2012\ | 
| 7 | REFERENCE |  | Problem | problem | GMPFLD(1.01)=\7647488^Hypertension\ | 
| 8 | ENUMERATION | <dl><dt>P</dt><dd>PERMANENT</dd><dt>H</dt><dd>HIDDEN</dd><dt>T</dt><dd>TRANSCRIBED</dd></dl> | Condition | condition | GMPFLD(1.02)=\P\ | 
| 9 | REFERENCE |  | Entered By | enteredBy | GMPFLD(1.03)=\57^ALEXANDER,ROBERT\ | 
| 10 | REFERENCE |  | Recording Provider |  | GMPFLD(1.04)=\57^ALEXANDER,ROBERT\ | 
| 11 | REFERENCE |  | Responsible Provider | responsibleProvider | GMPFLD(1.05)=\57^Alexander,Robert\ | 
| 12 | REFERENCE |  | Service |  | GMPFLD(1.06)=\^\ | 
| 13 | DATE |  | Date Resolved | resolvedDate | GMPFLD(1.07)=\3160801^Aug 01 2016\ | 
| 14 | REFERENCE |  | Clinic | clinic | GMPFLD(1.08)=\10^Clinicd\ | 
| 15 | DATE |  | Date Recorded |  | GMPFLD(1.09)=\3160801^Aug 01 2016\ | 
| 16 | BOOLEAN |  | Service Connected | isServiceConnected | GMPFLD(1.1)=\^Unknown\ | 
| 17 | BOOLEAN |  | Agent Orange Exposure | isAgentOrangeExposure | GMPFLD(1.11)=\0^NO\ | 
| 18 | BOOLEAN |  | Ionizing Radiation Exposure | isIonizingRadiationExposure | GMPFLD(1.12)=\0^NO\ | 
| 19 | BOOLEAN |  | Persian Gulf Exposure | isPersianGulfExposure | GMPFLD(1.13)=\0^NO\ | 
| 20 | ENUMERATION | <dl><dt>A</dt><dd>ACUTE</dd><dt>C</dt><dd>CHRONIC</dd></dl> | Priority | priority | GMPFLD(1.14)=\A^ACUTE\ | 
| 21 | BOOLEAN |  | Head And/Or Neck Cancer | isHeadAndOrNeckCancer | GMPFLD(1.15)=\0^NO\ | 
| 22 | BOOLEAN |  | Military Sexual Trauma | isMilitarySexualTrauma | GMPFLD(1.16)=\0^NO\ | 
| 23 | BOOLEAN |  | Combat Veteran | isCombatVeteran | GMPFLD(1.17)=\0^NO\ | 
| 24 | BOOLEAN |  | Shipboard Hazard & Defense | isShipboardHazardDefense | GMPFLD(1.18)=\0^NO\ | 
| 25 | LITERAL |  | Snomed Ct Concept Code | snomedCTConceptCode | GMPFLD(80001)=\38341003^38341003\ | 
| 26 | LITERAL |  | Snomed Ct Designation Code | snomedCTDesignationCode | GMPFLD(80002)=\64176011^64176011\ | 
| 27 | ENUMERATION | <dl><dt>False</dt><dd>false</dd><dt>True</dt><dd>true</dd></dl> | Unique New Term Requested | uniqueNewTermRequested | GMPFLD(80101)=\^\ | 
| 28 | LITERAL |  | Unique Term Request Comment | uniqueTermRequestComment | GMPFLD(80102)=\^\ | 
| 29 | DATE |  | Date Of Interest | interestDate | GMPFLD(80201)=\3160801^Aug 01 2016\ | 
| 30 | LITERAL |  | Coding System | codingSystem | GMPFLD(80202)=\10D^ICD-10-CM\ | 
| 31 | WORD PROCESSING |  | New Problem Comment | comments | GMPFLD(10,\NEW\,1)=\hypertension comment 1\ | 
| $lastIndex | LITERAL |  | Number of Problem Comments |  | GMPFLD(10,0)=\1\ | 