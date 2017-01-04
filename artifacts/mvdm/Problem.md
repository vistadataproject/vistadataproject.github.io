---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) --> Problem 

 property | value 
--- | --- 
 id | Problem
 label | Patient Problems
 description | Contains patient problem information.
 fmIdForId | 9000011
 baseVDMClass | [Problem-9000011](../VDM/Problem-9000011.md)
 fromVDMQueries | [{vdmId:Problem-9000011,query:DESCRIBE $ID},{vdmId:Problem_List_Audit-125_8,query:DESCRIBE 125_8 FILTER(.01=$ID)}]
 fromVDMList | SELECT 9000011 FILTER(1.02='P')
 fromVDMListPerPatient | SELECT 9000011 FILTER(.02=$PID&&1.02='P')

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| name | name | STRING | Mapper |  |  | CREATE, UPDATE | 
| uniqueId | Unique Identifier | NUMERIC | nmbr |  |  |  | 
| diagnosis | Diagnosis | POINTER | diagnosis |  |  | REQUIRED, INDEXED, CREATE, UPDATE | 
| icdd | icdd | STRING | Mapper |  |  | CREATE, UPDATE | 
| patient | Patient | POINTER | Mapper | $PATIENTID |  | INDEXED | 
| lastModifiedDate | Date Last Modified | DATE-TIME | date_last_modified | $NOW |  | CREATE, UPDATE | 
| providerNarrative | Provider Narrative | POINTER | provider_narrative |  |  | REQUIRED, CREATE, UPDATE | 
| facility | Facility | POINTER | Mapper | $FACILITYID |  |  | 
| enteredDate | Date Entered | DATE | date_entered | $NOW |  |  | 
| problemStatus | Problem Status | ENUMERATION | status |  | <dl><dt>ACTIVE</dt><dd>0</dd><dt>INACTIVE</dt><dd>1</dd></dl> | REQUIRED, CREATE, UPDATE | 
| onsetDate | Date Of Onset | DATE | date_of_onset |  |  | CREATE, UPDATE | 
| problem | Problem | POINTER | problem |  |  | INDEXED, CREATE, UPDATE | 
| condition | Condition | ENUMERATION | condition |  | <dl><dt>TRANSCRIBED</dt><dd>0</dd><dt>PERMANENT</dt><dd>1</dd><dt>HIDDEN</dt><dd>2</dd></dl> | CREATE, UPDATE | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  | UPDATE | 
| responsibleProvider | Responsible Provider | POINTER | responsible_provider | $USERID |  | CREATE, UPDATE | 
| resolvedDate | Date Resolved | DATE | date_resolved |  |  | UPDATE | 
| clinic | Clinic | POINTER | clinic |  |  | CREATE, UPDATE | 
| isServiceConnected | Service Connected | BOOLEAN | service_connected |  |  | CREATE, UPDATE | 
| isAgentOrangeExposure | Agent Orange Exposure | BOOLEAN | agent_orange_exposure |  |  | CREATE, UPDATE | 
| isIonizingRadiationExposure | Ionizing Radiation Exposure | BOOLEAN | ionizing_radiation_exposure |  |  | CREATE, UPDATE | 
| isPersianGulfExposure | Persian Gulf Exposure | BOOLEAN | persian_gulf_exposure |  |  | CREATE, UPDATE | 
| priority | Priority | ENUMERATION | priority |  | <dl><dt>ACUTE</dt><dd>0</dd><dt>CHRONIC</dt><dd>1</dd></dl> | CREATE, UPDATE | 
| isHeadAndOrNeckCancer | Head And/Or Neck Cancer | BOOLEAN | head_and_or_neck_cancer |  |  | CREATE, UPDATE | 
| isMilitarySexualTrauma | Military Sexual Trauma | BOOLEAN | military_sexual_trauma |  |  | CREATE, UPDATE | 
| isCombatVeteran | Combat Veteran | BOOLEAN | combat_veteran |  |  | CREATE, UPDATE | 
| isShipboardHazardDefense | Shipboard Hazard & Defense | BOOLEAN | shipboard_hazard__defense |  |  | CREATE, UPDATE | 
| comments | Comments | [OBJECT] | Mapper |  | [Comments](#comments)  | CREATE, UPDATE | 
| snomedCTConceptValue | SNOMED CT Concept Value |  | Mapper |  |  |  | 
| snomedCTConceptCode | SNOMED CT Concept Code | STRING | snomed_ct_concept_code |  |  | INDEXED, CREATE, UPDATE | 
| snomedCTDesignationCode | SNOMED CT Designation Code | STRING | snomed_ct_designation_code |  |  | CREATE, UPDATE | 
| uniqueNewTermRequested | Unique New Term Requested | ENUMERATION | Mapper |  | <dl><dt>false</dt><dd>0</dd><dt>true</dt><dd>1</dd></dl> | CREATE, UPDATE | 
| uniqueTermRequestComment | Unique Term Request Comment | STRING | unique_term_request_comment |  |  | CREATE, UPDATE | 
| interestDate | Date Of Interest | DATE | date_of_interest | $NOW |  | CREATE, UPDATE | 
| codingSystem | Coding System | STRING | coding_system |  |  | CREATE, UPDATE | 
| isRemoved | Removed | BOOLEAN | Mapper |  |  |  | 
| audits | audits | [OBJECT] | Mapper |  | [Audits](#audits)  |  | 

## Comments 

 property | value 
--- | --- 
 id | Comments
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| commentId | Comment identifier | NUMERIC |  |  |  | REQUIRED, UPDATE | 
| commentText | Comment Text | STRING |  |  |  | UPDATE | 
| enteredDate | Date Commented Entered | DATE |  | $NOW |  |  | 
| enteredBy | Entered By | STRING |  | $USERID |  |  | 
| facility | Facility | POINTER |  | $FACILITYID | {id:Location-9999999_06} |  | 

## Audits 

 property | value 
--- | --- 
 id | Audits
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| id | ID | NUMERIC |  |  |  |  | 
| problem | Problem | POINTER |  |  |  |  | 
| fieldNumber | Field number | NUMERIC |  |  |  |  | 
| modifiedDate | Modified Date | DATE-TIME |  |  |  |  | 
| whoModified | Who modified | POINTER |  |  |  |  | 
| oldValue | Old Value | STRING |  |  |  |  | 
| newValue | New Value | STRING |  |  |  |  | 
| reason | Reason for change | STRING |  |  |  |  | 
| requestingProvider | Requesting provider | POINTER |  |  |  |  | 
| oldProblemEntry | Old Problem Entry | STRING |  |  |  |  | 