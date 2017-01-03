---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) --> Visit 

 property | value 
--- | --- 
 id | Visit
 label | 
 description | 
 fmIdForId | 9000010
 baseVDMClass | [Visit-9000010](../VDM/Visit-9000010.md)
 fromVDMQueries | 
 fromVDMList | 
 fromVDMListPerPatient | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | patient_name |  | {id:Patient_Ihs-9000001} | REQUIRED | 
| dateTimeEvent |  | DATE-TIME | visit_admit_datetime | $NOW |  |  | 
| dateTimeEntered |  | DATE-TIME | date_visit_created | $NOW |  |  | 
| dateTimeLastModified |  | DATE-TIME | date_last_modified | $NOW |  |  | 
| dateTimeCheckedOut |  | DATE-TIME | check_out_datetime |  |  |  | 
| enteredBy |  | POINTER | created_by_user | $USERID | {id:New_Person-200} |  | 
| parentVisit |  | POINTER | parent_visit_link |  | [Visit](Visit.md) |  | 
| visitType |  | ENUMERATION | encounter_type |  | <dl><dt>P</dt><dd>PRIMARY</dd><dt>O</dt><dd>OCCASION OF SERVICE</dd><dt>S</dt><dd>STOP CODE</dd><dt>A</dt><dd>ANCILLARY</dd><dt>C</dt><dd>CREDIT STOP</dd></dl> |  | 
| facility |  | POINTER | loc_of_encounter |  | {id:Location-9999999_06} |  | 
| hospitalLocation |  | POINTER | hospital_location |  | {id:Hospital_Location-44} |  | 
| outsideLocation |  | STRING | outside_location |  |  |  | 
| dependentEntryCount |  | NUMERIC | dependent_entry_count |  |  |  | 
| isRemoved |  | ENUMERATION | delete_flag |  | <dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>DELETED</dd></dl> |  | 
| clinicStop |  | POINTER | dss_id |  | {id:Clinic_Stop-40_7} |  | 
| patientEligibility |  | POINTER | eligibility |  | {id:Eligibility_Code-8} |  | 
| pfssAccount |  | POINTER | pfss_account_reference |  | {id:Pfss_Account-375} |  | 
| visitId |  | STRING | visit_id |  |  |  | 
| patientInOrOut |  | ENUMERATION | patient_status_in_out |  | <dl><dt>1</dt><dd>IN</dd><dt>0</dt><dd>OUT</dd></dl> |  | 
| isServiceConnected |  | BOOLEAN | service_connected |  |  |  | 
| agentOrangeExposure |  | BOOLEAN | agent_orange_exposure |  |  |  | 
| ionizingRadiationExposure |  | BOOLEAN | ionizing_radiation_exposure |  |  |  | 
| swAsiaConditions |  | BOOLEAN | sw_asia_conditions |  |  |  | 
| militarySexualTrauma |  | BOOLEAN | military_sexual_trauma |  |  |  | 
| headAndOrNeckCancer |  | BOOLEAN | head_and_or_neck_cancer |  |  |  | 
| combatVeteran |  | BOOLEAN | combat_veteran |  |  |  | 
| proj112Shad |  | BOOLEAN | proj_112_shad |  |  |  | 
| serviceConnectionEditFlag |  | ENUMERATION | service_connection_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| agentOrangeEditFlag |  | ENUMERATION | agent_orange_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| ionizingRadiationEditFlag |  | ENUMERATION | ionizing_radiation_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| swAsiaConditionsEditFlag |  | ENUMERATION | sw_asia_conditions_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| mstEditFlag |  | ENUMERATION | mst_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| headAndNeckCancerEditFlag |  | ENUMERATION | head_and_neck_cancer_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| combatVeteranEditFlag |  | ENUMERATION | combat_veteran_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| proj112ShadEditFlag |  | ENUMERATION | proj_112_shad_edit_flag |  | <dl><dt>0</dt><dd>EDITABLE</dd><dt>1</dt><dd>NOT EDITABLE</dd></dl> |  | 
| comments |  | STRING | comments |  |  |  | 
| optionUsedToEnter |  | POINTER | option_used_to_create |  | {id:Option-19} |  | 
| protocolUsedToEnter |  | POINTER | protocol |  | {id:Protocol-101} |  | 
| enteredWithPackage |  | POINTER | package |  | {id:Package-9_4} |  | 
| enteredWithPCEDataSource |  | POINTER | data_source |  | {id:Pce_Data_Source-839_7} |  | 