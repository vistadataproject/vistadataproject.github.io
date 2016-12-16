
##Model Allergy 

 property | value 
--- | --- 
 id | Allergy
 label | Patient Allergies
 description | Contains patient allergy/adverse reaction information.
 fmIdForId | 120.8
 baseVDMClass | Patient_Allergies-120_8
 fromVDMQueries | [{vdmId:Patient_Allergy-120_8,query:DESCRIBE $ID},{vdmId:Adverse_Reaction_Reporting-120_85,query:DESCRIBE 120_85 FILTER(.03=$ID)}]
 fromVDMList | SELECT 120_8 FILTER(!bound(22))
 fromVDMListPerPatient | SELECT 120_8 FILTER(.01=$PID&&!bound(22))

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient | $PATIENTID |  |  |  |  | 
| reactant | Reactant | POINTER | Mapper |  | true |  |  |  | 
| reactantDetails |  | OBJECT | Mapper |  |  | [link](#model-reactantdetails)  |  |  | 
| allergyType | Allergy Type | ENUMERATION | Mapper |  | true | [DRUG,DRUG, FOOD,FOOD,OTHER] |  |  | 
| mechanism | Mechanism | ENUMERATION | mechanism |  | true | [ALLERGY,PHARMACOLOGIC,UNKNOWN] |  |  | 
| dateTimeEntered | Origination Date/Time | DATE-TIME | origination_date_time | $NOW |  |  |  |  | 
| enteredBy | Originator | POINTER | originator | $USERID |  |  |  |  | 
| enteredAtFacility | Facility where entered | POINTER | Mapper |  |  |  |  |  | 
| observedOrHistorical | Observed/Historical | ENUMERATION | observed_historical |  | true | [OBSERVED,HISTORICAL] |  |  | 
| reactions | Reactions | [OBJECT] | reactions |  |  | [link](#model-reaction)  |  |  | 
| allergySeverity |  | ENUMERATION | Adverse_Reaction_Reporting-120_85:severity |  |  | [MILD,MODERATE,SEVERE] |  |  | 
| dateOccurred |  | DATE | Adverse_Reaction_Reporting-120_85:date_time_of_event |  |  |  |  |  | 
| idBandMarked | Id Band Marked | [OBJECT] | id_band_marked |  |  | [link](#model-idbandmarked)  | true | true | 
| isRemoved | Removed | BOOLEAN | entered_in_error |  |  |  |  |  | 
| removalDetails |  | OBJECT | Mapper |  |  | [link](#model-removaldetails)  |  |  | 
| comments | Comments | [OBJECT] | Mapper |  |  | [link](#model-comment)  | true | true | 

##Model AllergyAssessment 

 property | value 
--- | --- 
 id | AllergyAssessment
 label | Allergy Assessment
 description | 
 fmIdForId | 120.86
 baseVDMClass | Adverse_Reaction_Assessment-120_86
 fromVDMQueries | [{vdmId:Adverse_Reaction_Assessment-120_86,query:DESCRIBE $ID}]
 fromVDMList | SELECT 120_86
 fromVDMListPerPatient | SELECT 120_86 FILTER(.01=$PID)

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | name |  | true | [link](#model-patient)  |  |  | 
| hasReactions |  | BOOLEAN | reaction_assessment | false |  |  |  | true | 
| enteredBy |  | POINTER | assessing_user | $USERID |  | [link](#model-person)  |  |  | 
| dateTimeEntered |  | DATE-TIME | assessment_date_time | $NOW |  |  |  |  | 

##Model Document 

 property | value 
--- | --- 
 id | Document
 label | 
 description | 
 fmIdForId | 8925
 baseVDMClass | Tiu_Document-8925
 fromVDMQueries | [{vdmId:Tiu_Document-8925,query:DESCRIBE $ID}]
 fromVDMList | SELECT 8925 FILTER(!bound(1611))
 fromVDMListPerPatient | SELECT 8925 FILTER(.02=$PID&&!bound(1611))

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient |  | true | [link](#model-patient_ihs-9000001)  |  |  | 
| documentType | Document Type | POINTER | document_type |  | true | [link](#model-tiu_document_definition-8925_1)  |  |  | 
| parentDocumentType | Parent Document Type | POINTER | parent_document_type |  |  | [link](#model-tiu_document_definition-8925_1)  | false | false | 
| visit | Visit | POINTER | visit |  | true | [link](#model-visit-9000010)  |  |  | 
| visitType | Visit Type | STRING | visit_type |  |  |  | true |  | 
| status | Status | POINTER | status | {id:8925_6-5,label:UNSIGNED} |  | [link](#model-tiu_status-8925_6)  |  |  | 
| text | Report Text | STRING | report_text |  | true |  |  |  | 
| dateTimeEntered | Entry Date/Time | DATE-TIME | entry_date_time | $NOW |  |  |  |  | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  |  |  |  | 
| authorDictator | Author/Dictator | POINTER | author_dictator | $USERID |  | [link](#model-new_person-200)  |  |  | 
| facility | Division | POINTER | division | $FACILITYID |  | [link](#model-institution-4)  |  |  | 
| hospitalLocation |  | POINTER | hospital_location |  |  | [link](#model-hospital_location-44)  |  |  | 
| service | Service | POINTER | service |  |  | [link](#model-service_section-49)  | false | false | 
| referenceDate | Reference Date | DATE-TIME | reference_date | $NOW |  |  |  |  | 
| releaseDateTime | Release Date/Time | DATE-TIME | release_date_time | $NOW |  |  |  |  | 
| expectedSigner | Expected Signer | POINTER | expected_signer | $USERID |  | [link](#model-new_person-200)  |  |  | 
| isSigned |  | BOOLEAN | Mapper |  |  |  | false | false | 
| signingDetails |  | OBJECT | Mapper |  |  | [link](#model-signingdetails)  | false | false | 
| isRemoved |  | BOOLEAN | Mapper |  |  |  | false | false | 
| removalDetails |  | OBJECT | Mapper |  |  | [link](#model-removaldetails)  | false | false | 

##Model Visit 

 property | value 
--- | --- 
 id | Visit
 label | 
 description | 
 fmIdForId | 9000010
 baseVDMClass | Visit-9000010
 fromVDMQueries | 
 fromVDMList | 
 fromVDMListPerPatient | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | patient_name |  | true | [link](#model-patient_ihs-9000001)  |  | false | 
| dateTimeEvent |  | DATE-TIME | visit_admit_datetime | $NOW |  |  |  |  | 
| dateTimeEntered |  | DATE-TIME | date_visit_created | $NOW |  |  |  | false | 
| dateTimeLastModified |  | DATE-TIME | date_last_modified | $NOW |  |  |  |  | 
| dateTimeCheckedOut |  | DATE-TIME | check_out_datetime |  |  |  |  |  | 
| enteredBy |  | POINTER | created_by_user | $USERID |  | [link](#model-new_person-200)  |  |  | 
| parentVisit |  | POINTER | parent_visit_link |  |  | [link](#model-visit)  |  |  | 
| visitType |  | ENUMERATION | encounter_type |  |  | {PRIMARY:P,OCCASION OF SERVICE:O,STOP CODE:S,ANCILLARY:A,CREDIT STOP:C} |  |  | 
| facility |  | POINTER | loc_of_encounter |  |  | [link](#model-location-9999999_06)  |  |  | 
| hospitalLocation |  | POINTER | hospital_location |  |  | [link](#model-hospital_location-44)  |  |  | 
| outsideLocation |  | STRING | outside_location |  |  |  |  |  | 
| dependentEntryCount |  | NUMERIC | dependent_entry_count |  |  |  | false | false | 
| isRemoved |  | ENUMERATION | delete_flag |  |  | {ACTIVE:0,DELETED:1} |  |  | 
| clinicStop |  | POINTER | dss_id |  |  | [link](#model-clinic_stop-40_7)  |  |  | 
| patientEligibility |  | POINTER | eligibility |  |  | [link](#model-eligibility_code-8)  |  |  | 
| pfssAccount |  | POINTER | pfss_account_reference |  |  | [link](#model-pfss_account-375)  |  |  | 
| visitId |  | STRING | visit_id |  |  |  |  |  | 
| patientInOrOut |  | ENUMERATION | patient_status_in_out |  |  | {IN:1,OUT:0} |  |  | 
| isServiceConnected |  | BOOLEAN | service_connected |  |  |  |  |  | 
| agentOrangeExposure |  | BOOLEAN | agent_orange_exposure |  |  |  |  |  | 
| ionizingRadiationExposure |  | BOOLEAN | ionizing_radiation_exposure |  |  |  |  |  | 
| swAsiaConditions |  | BOOLEAN | sw_asia_conditions |  |  |  |  |  | 
| militarySexualTrauma |  | BOOLEAN | military_sexual_trauma |  |  |  |  |  | 
| headAndOrNeckCancer |  | BOOLEAN | head_and_or_neck_cancer |  |  |  |  |  | 
| combatVeteran |  | BOOLEAN | combat_veteran |  |  |  |  |  | 
| proj112Shad |  | BOOLEAN | proj_112_shad |  |  |  |  |  | 
| serviceConnectionEditFlag |  | ENUMERATION | service_connection_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| agentOrangeEditFlag |  | ENUMERATION | agent_orange_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| ionizingRadiationEditFlag |  | ENUMERATION | ionizing_radiation_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| swAsiaConditionsEditFlag |  | ENUMERATION | sw_asia_conditions_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| mstEditFlag |  | ENUMERATION | mst_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| headAndNeckCancerEditFlag |  | ENUMERATION | head_and_neck_cancer_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| combatVeteranEditFlag |  | ENUMERATION | combat_veteran_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| proj112ShadEditFlag |  | ENUMERATION | proj_112_shad_edit_flag |  |  | {EDITABLE:0,NOT EDITABLE:1} | false | false | 
| comments |  | STRING | comments |  |  |  |  |  | 
| optionUsedToEnter |  | POINTER | option_used_to_create |  |  | [link](#model-option-19)  |  |  | 
| protocolUsedToEnter |  | POINTER | protocol |  |  | [link](#model-protocol-101)  |  |  | 
| enteredWithPackage |  | POINTER | package |  |  | [link](#model-package-9_4)  |  |  | 
| enteredWithPCEDataSource |  | POINTER | data_source |  |  | [link](#model-pce_data_source-839_7)  |  |  | 

##Model ReactantDetails
 property | value 
--- | --- 
id | ReactantDetails
label | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| drugIngredients | Drug Ingredients | [POINTER] |  |  |  |  |  |  | 
| drugClasses | Drug Classes | [POINTER] |  |  |  |  |  |  | 

##Model Reaction
 property | value 
--- | --- 
id | Reaction
label | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| reaction | Reaction | [POINTER] | reaction |  |  |  |  |  | 
| dateTimeOccurred | Date/Time of Reaction | DATE-TIME | date_entered |  |  |  |  |  | 

##Model IdBandMarked
 property | value 
--- | --- 
id | IdBandMarked
label | Id Band Marked

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time | DATE-TIME | date_time | $NOW |  |  |  |  | 
| enteredBy | User Entering | POINTER | user_entering | $USERID |  |  |  |  | 

##Model RemovalDetails
 property | value 
--- | --- 
id | RemovalDetails
label | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME |  | $NOW |  |  |  |  | 
| enteredBy | Entered By | POINTER |  | $USERID |  |  |  |  | 
| comment | Comment | STRING |  |  |  |  |  |  | 

##Model Comment
 property | value 
--- | --- 
id | Comment
label | Comment

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Comment Entered | DATE-TIME |  | $NOW |  |  |  |  | 
| enteredBy | User Entering | POINTER |  | $USERID |  |  |  |  | 
| comment | Comment | STRING |  |  | true |  |  | true | 

##Model Patient
 property | value 
--- | --- 
id | Patient
label | 

##Model Person
 property | value 
--- | --- 
id | Person
label | 

##Model Patient_IHS-9000001
 property | value 
--- | --- 
id | Patient_IHS-9000001
label | 

##Model Tiu_Document_Definition-8925_1
 property | value 
--- | --- 
id | Tiu_Document_Definition-8925_1
label | 

##Model Tiu_Document_Definition-8925_1
 property | value 
--- | --- 
id | Tiu_Document_Definition-8925_1
label | 

##Model Visit-9000010
 property | value 
--- | --- 
id | Visit-9000010
label | 

##Model Tiu_Status-8925_6
 property | value 
--- | --- 
id | Tiu_Status-8925_6
label | 

##Model New_Person-200
 property | value 
--- | --- 
id | New_Person-200
label | 

##Model Institution-4
 property | value 
--- | --- 
id | Institution-4
label | 

##Model Hospital_Location-44
 property | value 
--- | --- 
id | Hospital_Location-44
label | 

##Model Service_Section-49
 property | value 
--- | --- 
id | Service_Section-49
label | 

##Model New_Person-200
 property | value 
--- | --- 
id | New_Person-200
label | 

##Model SigningDetails
 property | value 
--- | --- 
id | SigningDetails
label | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Signature Date/Time | DATE-TIME | signature_date_time |  |  |  |  |  | 
| enteredBy | Signed By | POINTER | signed_by |  |  | {id:New_Person-200} |  |  | 
| signatureBlockName | Signature Block Name | STRING | signature_block_name |  |  |  |  |  | 
| signatureBlockTitle | Signature Block Title | STRING | signature_block_title |  |  |  |  |  | 
| signatureMode | Signature Mode | ENUMERATION | signature_mode |  |  | [electronic,chart] |  |  | 

##Model RemovalDetails
 property | value 
--- | --- 
id | RemovalDetails
label | 

###Properties

| id | label | datatype | fromVDM | default | required | range | create | update | 
| --- | --- | --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME | deletion_date |  |  |  |  |  | 
| enteredBy | Entered By | POINTER | deleted_by |  |  |  |  |  | 
| reasonForDocumentDeletion |  | ENUMERATION | reason_for_deletion |  |  | [privacy act,administrative] |  |  | 

##Model Patient_Ihs-9000001
 property | value 
--- | --- 
id | Patient_Ihs-9000001
label | 

##Model New_Person-200
 property | value 
--- | --- 
id | New_Person-200
label | 

##Model Visit
 property | value 
--- | --- 
id | Visit
label | 

##Model Location-9999999_06
 property | value 
--- | --- 
id | Location-9999999_06
label | 

##Model Hospital_Location-44
 property | value 
--- | --- 
id | Hospital_Location-44
label | 

##Model Clinic_Stop-40_7
 property | value 
--- | --- 
id | Clinic_Stop-40_7
label | 

##Model Eligibility_Code-8
 property | value 
--- | --- 
id | Eligibility_Code-8
label | 

##Model Pfss_Account-375
 property | value 
--- | --- 
id | Pfss_Account-375
label | 

##Model Option-19
 property | value 
--- | --- 
id | Option-19
label | 

##Model Protocol-101
 property | value 
--- | --- 
id | Protocol-101
label | 

##Model Package-9_4
 property | value 
--- | --- 
id | Package-9_4
label | 

##Model Pce_Data_Source-839_7
 property | value 
--- | --- 
id | Pce_Data_Source-839_7
label | 