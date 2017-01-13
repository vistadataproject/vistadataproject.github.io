---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Visit 

 property | value 
--- | --- 
 id | Visit
 label | 
 description | 
 fmIdForId | 9000010
 baseVDMClass | [Visit-9000010](../vdm/Visit-9000010)
 fromVDMQueries | 
 fromVDMList | 
 fromVDMListPerPatient | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | patient_name |  | Patient_Ihs-9000001 | REQUIRED | 
| dateTimeEvent |  | DATE-TIME | visit_admit_datetime | $NOW |  |  | 
| dateTimeEntered |  | DATE-TIME | date_visit_created | $NOW |  |  | 
| dateTimeLastModified |  | DATE-TIME | date_last_modified | $NOW |  |  | 
| dateTimeCheckedOut |  | DATE-TIME | check_out_datetime |  |  |  | 
| enteredBy |  | POINTER | created_by_user | $USERID | New_Person-200 |  | 
| parentVisit |  | POINTER | parent_visit_link |  | [Visit](Visit.md) |  | 
| visitType |  | ENUMERATION | encounter_type |  | {::nomarkdown}<dl><dt>P</dt><dd>PRIMARY</dd><dt>O</dt><dd>OCCASION OF SERVICE</dd><dt>S</dt><dd>STOP CODE</dd><dt>A</dt><dd>ANCILLARY</dd><dt>C</dt><dd>CREDIT STOP</dd></dl>{:/} |  | 
| facility |  | POINTER | loc_of_encounter |  | Location-9999999_06 |  | 
| hospitalLocation |  | POINTER | hospital_location |  | Hospital_Location-44 |  | 
| outsideLocation |  | STRING | outside_location |  |  |  | 
| dependentEntryCount |  | NUMERIC | dependent_entry_count |  |  |  | 
| isRemoved |  | ENUMERATION | delete_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>DELETED</dd></dl>{:/} |  | 
| clinicStop |  | POINTER | dss_id |  | Clinic_Stop-40_7 |  | 
| patientEligibility |  | POINTER | eligibility |  | Eligibility_Code-8 |  | 
| pfssAccount |  | POINTER | pfss_account_reference |  | Pfss_Account-375 |  | 
| visitId |  | STRING | visit_id |  |  |  | 
| patientInOrOut |  | ENUMERATION | patient_status_in_out |  | {::nomarkdown}<dl><dt>1</dt><dd>IN</dd><dt>0</dt><dd>OUT</dd></dl>{:/} |  | 
| isServiceConnected |  | BOOLEAN | service_connected |  | {::nomarkdown}<dl></dl>{:/} |  | 
| agentOrangeExposure |  | BOOLEAN | agent_orange_exposure |  | {::nomarkdown}<dl></dl>{:/} |  | 
| ionizingRadiationExposure |  | BOOLEAN | ionizing_radiation_exposure |  | {::nomarkdown}<dl></dl>{:/} |  | 
| swAsiaConditions |  | BOOLEAN | sw_asia_conditions |  | {::nomarkdown}<dl></dl>{:/} |  | 
| militarySexualTrauma |  | BOOLEAN | military_sexual_trauma |  | {::nomarkdown}<dl></dl>{:/} |  | 
| headAndOrNeckCancer |  | BOOLEAN | head_and_or_neck_cancer |  | {::nomarkdown}<dl></dl>{:/} |  | 
| combatVeteran |  | BOOLEAN | combat_veteran |  | {::nomarkdown}<dl></dl>{:/} |  | 
| proj112Shad |  | BOOLEAN | proj_112_shad |  | {::nomarkdown}<dl></dl>{:/} |  | 
| serviceConnectionEditFlag |  | ENUMERATION | service_connection_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| agentOrangeEditFlag |  | ENUMERATION | agent_orange_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| ionizingRadiationEditFlag |  | ENUMERATION | ionizing_radiation_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| swAsiaConditionsEditFlag |  | ENUMERATION | sw_asia_conditions_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| mstEditFlag |  | ENUMERATION | mst_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| headAndNeckCancerEditFlag |  | ENUMERATION | head_and_neck_cancer_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| combatVeteranEditFlag |  | ENUMERATION | combat_veteran_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| proj112ShadEditFlag |  | ENUMERATION | proj_112_shad_edit_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl>{:/} |  | 
| comments |  | STRING | comments |  |  |  | 
| optionUsedToEnter |  | POINTER | option_used_to_create |  | Option-19 |  | 
| protocolUsedToEnter |  | POINTER | protocol |  | Protocol-101 |  | 
| enteredWithPackage |  | POINTER | package |  | Package-9_4 |  | 
| enteredWithPCEDataSource |  | POINTER | data_source |  | Pce_Data_Source-839_7 |  | 




 Generated on January 13th 2017, 6:16:06 am