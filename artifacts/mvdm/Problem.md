---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Problem 

<dl>
<dt>id</dt><dd>Problem</dd>
<dt>label</dt><dd>Patient Problems</dd>
<dt>description</dt><dd>Contains patient problem information.</dd>
<dt>fmIdForId</dt><dd>9000011</dd>
<dt>baseVDMClass</dt><dd>[Problem-9000011](../vdm/Problem-9000011)</dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Problem-9000011,query:DESCRIBE $ID},{vdmId:Problem_List_Audit-125_8,query:DESCRIBE 125_8 FILTER(.01=$ID)}]</dd>
<dt>fromVDMList</dt><dd>SELECT 9000011 FILTER(1.02='P')</dd>
<dt>fromVDMListPerPatient</dt><dd>SELECT 9000011 FILTER(.02=$PID&&1.02='P')</dd>
</dl>
Total # of Subobjects: 2

Total # of Properties: 36
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 9
DATE | 4
DATE-TIME | 1
ENUMERATION | 4
NUMERIC | 1
POINTER | 8
STRING | 6
[OBJECT] | 2
undefined | 1



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| name | name | STRING |  |  |  | CREATE, UPDATE | 
| uniqueId | Unique Identifier | NUMERIC | nmbr |  |  |  | 
| diagnosis | Diagnosis | POINTER | diagnosis |  |  | REQUIRED, INDEXED, CREATE, UPDATE | 
| icdd | icdd | STRING |  |  |  | CREATE, UPDATE | 
| patient | Patient | POINTER |  | $PATIENTID |  | INDEXED | 
| lastModifiedDate | Date Last Modified | DATE-TIME | date_last_modified | $NOW |  | CREATE, UPDATE | 
| providerNarrative | Provider Narrative | POINTER | provider_narrative |  |  | REQUIRED, CREATE, UPDATE | 
| facility | Facility | POINTER |  | $FACILITYID |  |  | 
| enteredDate | Date Entered | DATE | date_entered | $NOW |  |  | 
| problemStatus | Problem Status | ENUMERATION | status |  | {::nomarkdown}<dl><dt>ACTIVE</dt><dd>0</dd><dt>INACTIVE</dt><dd>1</dd></dl>{:/} | REQUIRED, CREATE, UPDATE | 
| onsetDate | Date Of Onset | DATE | date_of_onset |  |  | CREATE, UPDATE | 
| problem | Problem | POINTER | problem |  |  | INDEXED, CREATE, UPDATE | 
| condition | Condition | ENUMERATION | condition |  | {::nomarkdown}<dl><dt>TRANSCRIBED</dt><dd>0</dd><dt>PERMANENT</dt><dd>1</dd><dt>HIDDEN</dt><dd>2</dd></dl>{:/} | CREATE, UPDATE | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  | UPDATE | 
| responsibleProvider | Responsible Provider | POINTER | responsible_provider | $USERID |  | CREATE, UPDATE | 
| resolvedDate | Date Resolved | DATE | date_resolved |  |  | UPDATE | 
| clinic | Clinic | POINTER | clinic |  |  | CREATE, UPDATE | 
| isServiceConnected | Service Connected | BOOLEAN | service_connected |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isAgentOrangeExposure | Agent Orange Exposure | BOOLEAN | agent_orange_exposure |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isIonizingRadiationExposure | Ionizing Radiation Exposure | BOOLEAN | ionizing_radiation_exposure |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isPersianGulfExposure | Persian Gulf Exposure | BOOLEAN | persian_gulf_exposure |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| priority | Priority | ENUMERATION | priority |  | {::nomarkdown}<dl><dt>ACUTE</dt><dd>0</dd><dt>CHRONIC</dt><dd>1</dd></dl>{:/} | CREATE, UPDATE | 
| isHeadAndOrNeckCancer | Head And/Or Neck Cancer | BOOLEAN | head_and_or_neck_cancer |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isMilitarySexualTrauma | Military Sexual Trauma | BOOLEAN | military_sexual_trauma |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isCombatVeteran | Combat Veteran | BOOLEAN | combat_veteran |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| isShipboardHazardDefense | Shipboard Hazard & Defense | BOOLEAN | shipboard_hazard__defense |  | {::nomarkdown}<dl></dl>{:/} | CREATE, UPDATE | 
| comments | Comments | [OBJECT] |  |  | [Comments](#comments)  | CREATE, UPDATE | 
| snomedCTConceptValue | SNOMED CT Concept Value |  |  |  |  |  | 
| snomedCTConceptCode | SNOMED CT Concept Code | STRING | snomed_ct_concept_code |  |  | INDEXED, CREATE, UPDATE | 
| snomedCTDesignationCode | SNOMED CT Designation Code | STRING | snomed_ct_designation_code |  |  | CREATE, UPDATE | 
| uniqueNewTermRequested | Unique New Term Requested | ENUMERATION |  |  | {::nomarkdown}<dl><dt>false</dt><dd>0</dd><dt>true</dt><dd>1</dd></dl>{:/} | CREATE, UPDATE | 
| uniqueTermRequestComment | Unique Term Request Comment | STRING | unique_term_request_comment |  |  | CREATE, UPDATE | 
| interestDate | Date Of Interest | DATE | date_of_interest | $NOW |  | CREATE, UPDATE | 
| codingSystem | Coding System | STRING | coding_system |  |  | CREATE, UPDATE | 
| isRemoved | Removed | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} |  | 
| audits | audits | [OBJECT] |  |  | [Audits](#audits)  |  | 

## Comments 

<dl>
<dt>id</dt><dd>Comments</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| commentId | Comment identifier | NUMERIC |  |  |  | REQUIRED, UPDATE | 
| commentText | Comment Text | STRING |  |  |  | UPDATE | 
| enteredDate | Date Commented Entered | DATE |  | $NOW |  |  | 
| enteredBy | Entered By | STRING |  | $USERID |  |  | 
| facility | Facility | POINTER |  | $FACILITYID | Location-9999999_06 |  | 

## Audits 

<dl>
<dt>id</dt><dd>Audits</dd>
</dl>

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

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on March 7th 2017, 7:56:16 am</p>{:/}