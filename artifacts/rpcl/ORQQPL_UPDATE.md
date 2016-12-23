


##[RPCL](TableOfContent.md) --> ORQQPL UPDATE 

 property | value 
--- | --- 
 id | ORQQPL_UPDATE
 name | ORQQPL UPDATE
 function | UPDATE^ORQQPL1
 rpcType | CHANGE
 complexity | HIGH
 uses | 
 description | Updates problem record
 returnType | ARRAY
 returnDescription | 

###Input Parameters

| id | parameterType | required | description | example | listMemberParameters | 
| --- | --- | --- | --- | --- | --- | 
| UPDARRAY | LIST | true | UPDATE ARRAY |  | [List Member](#for-id-updarray) | 

###List Member Parameters


####For ID UPDARRAY

| key | parameterType | range | description | mvdmProperty | example | 
| --- | --- | --- | --- | --- | --- | 
| DIAGNOSIS | REFERENCE |  | Diagnosis | diagnosis | ORARRAY(\DIAGNOSIS\)=\521774\ | 
| STATUS | ENUMERATION | <dl><dt>A</dt><dd>ACTIVE</dd><dt>I</dt><dd>INACTIVE</dd></dl> | Problem Status | problemStatus | ORARRAY(\STATUS\)=\I\ | 
| ONSET | DATE |  | Date Of Onset | onsetDate | ORARRAY(\ONSET\)=\3160303.\ | 
| LEXICON | REFERENCE |  | Problem | problem | ORARRAY(\LEXICON\)=\7647488\ | 
| PROVIDER | REFERENCE |  | Recording Provider | enteredBy | ORARRAY(\PROVIDER\)=\57\ | 
| RESOLVED | DATE |  | Date Resolved | resolvedDate | ORARRAY(\RESOLVED\)=\3160812\ | 
| LOCATION | REFERENCE |  | Clinic | clinic | ORARRAY(\LOCATION\)=\10\ | 
| SC | BOOLEAN |  | Service Connected | isServiceConnected | ORARRAY(\SC\)=\\ | 
| AO | BOOLEAN |  | Agent Orange Exposure | isAgentOrangeExposure | ORARRAY(\AO\)=\0\ | 
| IR | BOOLEAN |  | Ionizing Radiation Exposure | isIonizingRadiationExposure | ORARRAY(\IR\)=\0\ | 
| EC | BOOLEAN |  | Persian Gulf Exposure | isPersianGulfExposure | ORARRAY(\EC\)=\0\ | 
| HNC | BOOLEAN |  | Head And/Or Neck Cancer | isHeadAndOrNeckCancer | ORARRAY(\HNC\)=\0\ | 
| MST | BOOLEAN |  | Military Sexual Trauma | isMilitarySexualTrauma | ORARRAY(\MST\)=\0\ | 
| CV | BOOLEAN |  | Combat Veteran | isCombatVeteran | ORARRAY(\CV\)=\0\ | 
| SHD | BOOLEAN |  | Shipboard Hazard & Defense | isShipboardHazardDefense | ORARRAY(\SHD\)=\0\ | 
| SCTC | LITERAL |  | Snomed Ct Concept Code | snomedCTConceptCode | ORARRAY(\SCTC\)=\38341003\ | 
| SCTD | LITERAL |  | Snomed Ct Designation Code | snomedCTDesignationCode | ORARRAY(\SCTD\)=\64176011\ | 
| CODEDT | DATE |  | Date Of Interest | interestDate | ORARRAY(\CODEDT\)=\3160725.\ | 
| CODESYS | LITERAL |  | Coding System | codingSystem | ORARRAY(\CODESYS\)=\10D\ | 
| PROBLEM | REFERENCE |  | Pointer to Problem #9000011 |  | ORARRAY(\PROBLEM\)=\1\ | 