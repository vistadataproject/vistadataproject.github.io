---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Patient 

<dl>
<dt>id</dt><dd>Patient</dd>
<dt>fmIdForId</dt><dd>2</dd>
<dt>baseVDMClass</dt><dd>[Patient-2](../vdm/Patient-2)</dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Patient-2,query:DESCRIBE $ID}]</dd>
<dt>fromVDMList</dt><dd>SELECT 2</dd>
</dl>
Total # of Subobjects: 27
Total # of Properties: 193
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 25
DATE | 2
DATE-TIME | 27
ENUMERATION | 27
NUMERIC | 15
OBJECT | 10
POINTER | 45
STRING | 24
[OBJECT] | 17
undefined | 1



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| name |  | STRING | name |  |  |  | 
| sex |  | ENUMERATION | sex |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} |  | 
| selfIdentifiedGender |  | ENUMERATION | self_identified_gender |  | {::nomarkdown}<dl><dt>TM</dt><dd>Transmale/Transman/Female-to-Male</dd><dt>TF</dt><dd>Transfemale/Transwoman/Male-to-Female</dd><dt>N</dt><dd>individual chooses not to answer</dd><dt>O</dt><dd>Other</dd><dt>F</dt><dd>Female</dd><dt>M</dt><dd>Male</dd></dl>{:/} |  | 
| dateOfBirth |  | DATE | date_of_birth |  |  |  | 
| maritalStatus |  | POINTER | marital_status |  | Marital_Status-11 |  | 
| race |  | POINTER | race |  | Race-10 |  | 
| occupation |  | STRING | occupation |  |  |  | 
| religiousPreference |  | POINTER | religious_preference |  | Religion-13 |  | 
| duplicateStatus |  | ENUMERATION | duplicate_status |  | {::nomarkdown}<dl><dt>1</dt><dd>CHECK DUPLICATE RECORDS FILE</dd><dt>0</dt><dd>NO UNRESOLVED DUPLICATES</dd></dl>{:/} |  | 
| patientMergedTo |  | POINTER | patient_merged_to |  | Patient-2 |  | 
| isCheckForDuplicate |  | BOOLEAN | check_for_duplicate |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| socialSecurityNumber |  | STRING | social_security_number |  |  |  | 
| pseudoSsnReason |  | ENUMERATION | pseudo_ssn_reason |  | {::nomarkdown}<dl><dt>N</dt><dd>NO SSN ASSIGNED</dd><dt>S</dt><dd>SSN UNKNOWN/FOLLOW-UP REQUIRED</dd><dt>R</dt><dd>REFUSED TO PROVIDE</dd></dl>{:/} |  | 
| ssnVerificationStatus |  | ENUMERATION | ssn_verification_status |  | {::nomarkdown}<dl><dt>4</dt><dd>VERIFIED</dd><dt>2</dt><dd>INVALID</dd></dl>{:/} |  | 
| remarks |  | STRING | remarks |  |  |  | 
| placeOfBirthCity |  | STRING | place_of_birth_city |  |  |  | 
| placeOfBirthState |  | POINTER | place_of_birth_state |  | State-5 |  | 
| enteredBy |  | POINTER | who_entered_patient |  | New_Person-200 |  | 
| enteredDate |  | DATE | date_entered_into_file |  |  |  | 
| enteredPatientMethod |  | ENUMERATION | how_was_patient_entered |  | {::nomarkdown}<dl><dt>1</dt><dd>10-10T REGISTRATION</dd></dl>{:/} |  | 
| wardLocation |  | STRING | ward_location |  |  |  | 
| roombed |  | STRING | roombed |  |  |  | 
| currentMovement |  | POINTER | current_movement |  | Patient_Movement-405 |  | 
| treatingSpecialty |  | POINTER | treating_specialty |  | Facility_Treating_Specialty-45_7 |  | 
| provider |  | POINTER | provider |  | New_Person-200 |  | 
| attendingPhysician |  | POINTER | attending_physician |  | New_Person-200 |  | 
| currentAdmission |  | POINTER | current_admission |  | Patient_Movement-405 |  | 
| lastDmmsEpisodeNumber |  | NUMERIC | last_dmms_episode_number |  |  |  | 
| lodgerWardLocation |  | STRING | lodger_ward_location |  |  |  | 
| currentRoom |  | POINTER | current_room |  | RoomBed-405_4 |  | 
| excludeFromFacilityDir |  | BOOLEAN | exclude_from_facility_dir |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| permanentAddress |  | OBJECT |  |  | [permanentAddress](#permanentaddress)  |  | 
| temporaryAddress |  | OBJECT |  |  | [temporaryAddress](#temporaryaddress)  |  | 
| patientContact |  | OBJECT |  |  | [patientContact](#patientcontact)  |  | 
| currentMeansTestStatus |  | POINTER | current_means_test_status |  | Means_Test_Status-408_32 |  | 
| confidentialAddress |  | OBJECT |  |  | [confidentialAddress](#confidentialaddress)  |  | 
| ineligibility |  | OBJECT |  |  | [ineligibility](#ineligibility)  |  | 
| feeHospitalId |  | ENUMERATION | fee_hospital_id |  | {::nomarkdown}<dl><dt>C</dt><dd>CANCELLED</dd><dt>I</dt><dd>ISSUED</dd></dl>{:/} |  | 
| emergencyResponseIndicator |  | ENUMERATION | emergency_response_indicator |  | {::nomarkdown}<dl><dt>K</dt><dd>HURRICANE KATRINA</dd></dl>{:/} |  | 
| fathersName |  | STRING | fathers_name |  |  |  | 
| mothersName |  | STRING | mothers_name |  |  |  | 
| mothersMaidenName |  | STRING | mothers_maiden_name |  |  |  | 
| ratedIncompetent |  | BOOLEAN | rated_incompetent |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| dateRuledIncompetentByVA |  | DATE-TIME | date_ruled_incompetent_va |  |  |  | 
| dateRuledIncompetentByCivil |  | DATE-TIME | date_ruled_incompetent_civil |  |  |  | 
| contacts |  | OBJECT |  |  | [contacts](#contacts)  |  | 
| serviceConnected |  | OBJECT |  |  | [serviceConnected](#serviceconnected)  |  | 
| claim |  | OBJECT |  |  | [claim](#claim)  |  | 
| insuranceType |  | [OBJECT] | insurance_type |  | [insuranceType](#insurancetype)  |  | 
| treatmentFactors |  | OBJECT |  |  | [treatmentFactors](#treatmentfactors)  |  | 
| militaryService |  | OBJECT |  |  | [militaryService](#militaryservice)  |  | 
| proj112Shad |  | BOOLEAN | proj_112_shad |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| dateOfDeath |  | DATE-TIME | date_of_death |  |  |  | 
| deathEnteredBy |  | POINTER | death_entered_by |  | New_Person-200 |  | 
| sourceOfNotification |  | ENUMERATION | source_of_notification |  | {::nomarkdown}<dl><dt>4</dt><dd>VBA</dd><dt>1</dt><dd>INPATIENT AT VAMC</dd><dt>2</dt><dd>NON-VA MEDICAL FACILITY</dd><dt>9</dt><dd>OTHER</dd><dt>8</dt><dd>NEXT OF KIN/FAMILY/FRIEND</dd><dt>5</dt><dd>VA INSURANCE</dd><dt>7</dt><dd>NCA</dd><dt>6</dt><dd>SSA</dd><dt>3</dt><dd>DEATH CERTIFICATE ON FILE</dd></dl>{:/} |  | 
| dateOfDeathLastUpdated |  | DATE-TIME | date_of_death_last_updated |  |  |  | 
| lastEditedBy |  | POINTER | last_edited_by |  | New_Person-200 |  | 
| collateralSponsorsName |  | POINTER | collateral_sponsors_name |  | Patient-2 |  | 
| militaryDisabilityRetirement |  | BOOLEAN | military_disability_retirement |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| dischargeDueToDisability |  | BOOLEAN | discharge_due_to_disability |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| primaryEligibilityCode |  | POINTER | primary_eligibility_code |  | Eligibility_Code-8 |  | 
| eligibilityStatus |  | ENUMERATION | eligibility_status |  | {::nomarkdown}<dl><dt>P</dt><dd>PENDING VERIFICATION</dd><dt>R</dt><dd>PENDING RE-VERIFICATION</dd><dt>V</dt><dd>VERIFIED</dd></dl>{:/} |  | 
| eligibilityStatusDate |  | DATE-TIME | eligibility_status_date |  |  |  | 
| eligibilityVerifSource |  | ENUMERATION | eligibility_verif_source |  | {::nomarkdown}<dl><dt>V</dt><dd>VISTA</dd><dt>H</dt><dd>HEC</dd></dl>{:/} |  | 
| eligibilityInterimResponse |  | DATE-TIME | eligibility_interim_response |  |  |  | 
| eligibilityVerifMethod |  | STRING | eligibility_verif_method |  |  |  | 
| eligibilityStatusEnteredBy |  | POINTER | eligibility_status_entered_by |  | New_Person-200 |  | 
| userEnrolleeValidThrough |  | DATE-TIME | user_enrollee_valid_through |  |  |  | 
| userEnrolleeSite |  | POINTER | user_enrollee_site |  | Institution-4 |  | 
| disabilityRetFromMilitary |  | ENUMERATION | disability_ret_from_military |  | {::nomarkdown}<dl><dt>2</dt><dd>YES, RECEIVING MILITARY RETIREMENT IN LIEU OF VA COMPENSATION</dd><dt>1</dt><dd>YES, RECEIVING MILITARY RETIREMENT</dd><dt>3</dt><dd>UNKNOWN</dd><dt>0</dt><dd>NO</dd></dl>{:/} |  | 
| receivingAaBenefits |  | ENUMERATION | receiving_aa_benefits |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfAidAttendance |  | NUMERIC | amount_of_aid__attendance |  |  |  | 
| receivingHouseboundBenefits |  | ENUMERATION | receiving_housebound_benefits |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfHousebound |  | NUMERIC | amount_of_housebound |  |  |  | 
| receivingSocialSecurity |  | ENUMERATION | receiving_social_security |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfSocialSecurity |  | NUMERIC | amount_of_social_security |  |  |  | 
| receivingAVaPension |  | ENUMERATION | receiving_a_va_pension |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfVaPension |  | NUMERIC | amount_of_va_pension |  |  |  | 
| amountOfMilitaryRetirement |  | NUMERIC | amount_of_military_retirement |  |  |  | 
| receivingMilitaryRetirement |  | ENUMERATION | receiving_military_retirement |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfGiInsurance |  | NUMERIC | amount_of_gi_insurance |  |  |  | 
| giInsurancePolicy |  | ENUMERATION | gi_insurance_policy |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfSsi |  | NUMERIC | amount_of_ssi |  |  |  | 
| receivingSupSecuritySsi |  | ENUMERATION | receiving_sup_security_ssi |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfOtherRetirement |  | NUMERIC | amount_of_other_retirement |  |  |  | 
| typeOfOtherRetirement |  | ENUMERATION | type_of_other_retirement |  | {::nomarkdown}<dl><dt>C</dt><dd>CIVIL</dd><dt>X</dt><dd>COMBINATIONS OF TYPES</dd><dt>O</dt><dd>OTHER</dd><dt>M</dt><dd>MILITARY</dd><dt>R</dt><dd>RAILROAD</dd><dt>B</dt><dd>BLACK LUNG</dd></dl>{:/} |  | 
| amountOfOtherIncome |  | NUMERIC | amount_of_other_income |  |  |  | 
| totalAnnualVaCheckAmount |  | NUMERIC | total_annual_va_check_amount |  |  |  | 
| primaryLongId |  | STRING | primary_long_id |  |  |  | 
| primaryShortId |  | STRING | primary_short_id |  |  |  | 
| serviceDentalInjury |  | BOOLEAN | service_dental_injury |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| serviceTeethExtracted |  | BOOLEAN | service_teeth_extracted |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| dateOfDentalTreatment |  | [OBJECT] | date_of_dental_treatment |  | [dateOfDentalTreatment](#dateofdentaltreatment)  |  | 
| ratedDisabilitiesVa |  | [OBJECT] | rated_disabilities_va |  | [ratedDisabilities](#rateddisabilities)  |  | 
| serviceConnectedConditions |  | [OBJECT] | service_connected_conditions |  | [serviceConnectedConditions](#serviceconnectedconditions)  |  | 
| eligibleForMedicaid |  | BOOLEAN | eligible_for_medicaid |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| dateMedicaidLastAsked |  | DATE-TIME | date_medicaid_last_asked |  |  |  | 
| medicaidNumber |  | STRING | medicaid_number |  |  |  | 
| pensionAwardEffectiveDate |  | DATE-TIME | pension_award_effective_date |  |  |  | 
| pensionAwardReason |  | POINTER | pension_award_reason |  | Pension_Award_Reasons-27_18 |  | 
| pensionTerminatedDate |  | DATE-TIME | pension_terminated_date |  |  |  | 
| pensionTerminatedReason1 |  | POINTER | pension_terminated_reason_1 |  | Pension_Award_Reasons-27_18 |  | 
| pensionTerminatedReason2 |  | POINTER | pension_terminated_reason_2 |  | Pension_Award_Reasons-27_18 |  | 
| pensionTerminatedReason3 |  | POINTER | pension_terminated_reason_3 |  | Pension_Award_Reasons-27_18 |  | 
| pensionTerminatedReason4 |  | POINTER | pension_terminated_reason_4 |  | Pension_Award_Reasons-27_18 |  | 
| classIiDentalIndicator |  | BOOLEAN | class_ii_dental_indicator |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| dentalApplDueBeforeDate |  | DATE-TIME | dental_appl_due_before_date |  |  |  | 
| pensionIndicatorLock |  | BOOLEAN | pension_indicator_lock |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| pensionAwardLock |  | BOOLEAN | pension_award_lock |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| veteranCatastrophicallyDisabled |  | BOOLEAN | veteran_catastrophically_disabled |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| decidedBy |  | STRING | decided_by |  |  |  | 
| dateOfDecision |  | DATE-TIME | date_of_decision |  |  |  | 
| facilityMakingDetermination |  | POINTER | facility_making_determination |  | Institution-4 |  | 
| reviewDate |  | DATE-TIME | review_date |  |  |  | 
| methodOfDetermination |  | ENUMERATION | method_of_determination |  | {::nomarkdown}<dl><dt>3</dt><dd>PHYSICAL EXAMINATION</dd><dt>2</dt><dd>MEDICAL RECORD REVIEW</dd></dl>{:/} |  | 
| dateVeteranRequestedCdEval |  | DATE-TIME | date_veteran_requested_cd_eval |  |  |  | 
| dateFacilityInitiatedReview |  | DATE-TIME | date_facility_initiated_review |  |  |  | 
| dateVeteranWasNotified |  | DATE-TIME | date_veteran_was_notified |  |  |  | 
| cdStatusDiagnoses |  | [POINTER] | cd_status_diagnoses |  | Catastrophic_Disability_Reasons-27_17 |  | 
| cdStatusProcedures |  | [OBJECT] | cd_status_procedures |  | [cdStatusProcedures](#cdstatusprocedures)  |  | 
| cdStatusConditions |  | [OBJECT] | cd_status_conditions |  | [cdStatusConditions](#cdstatusconditions)  |  | 
| cdHistoryDate |  | [OBJECT] | cd_history_date |  | [cdHistoryDate](#cdhistorydate)  |  | 
| cdDescriptors |  | [POINTER] | cd_descriptors |  | Catastrophic_Disability_Reasons-27_17 |  | 
| currentMohIndicator |  | BOOLEAN | current_moh_indicator |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| isTestPatient |  | BOOLEAN | test_patient_indicator |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| alias |  | [OBJECT] | alias |  | [alias](#alias)  |  | 
| fathersNameComponents |  | POINTER | fathers_name_components |  | Name_Components-20 |  | 
| mothersNameComponents |  | POINTER | mothers_name_components |  | Name_Components-20 |  | 
| mothersMaidenNameComponents |  | POINTER | mothers_maiden_name_components |  | Name_Components-20 |  | 
| raceInformation |  | [OBJECT] | race_information |  | [raceInformation](#raceinformation)  |  | 
| enrollmentClinic |  | [OBJECT] | enrollment_clinic |  | [enrollmentClinic](#enrollmentclinic)  |  | 
| ethnicityInformation |  | [OBJECT] | ethnicity_information |  | [ethnicityInformation](#ethnicityinformation)  |  | 
| currentEnrollment |  | POINTER | current_enrollment |  | Patient_Enrollment-27_11 |  | 
| preferredFacility |  | POINTER | preferred_facility |  | Institution-4 |  | 
| sourceDesignation |  | ENUMERATION | source_designation |  | {::nomarkdown}<dl><dt>PI</dt><dd>PCP INACTIVE</dd><dt>V</dt><dd>VISTA</dd><dt>PA</dt><dd>PCP ACTIVE</dd><dt>E</dt><dd>ESR</dd></dl>{:/} |  | 
| reactions |  | BOOLEAN | reactions |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| heightcm |  | NUMERIC | heightcm |  |  |  | 
| weightkg |  | NUMERIC | weightkg |  |  |  | 
| spinalCordInjury |  | ENUMERATION | spinal_cord_injury |  | {::nomarkdown}<dl><dt>4</dt><dd>QUADRIPLEGIA-NONTRAUMATIC</dd><dt>2</dt><dd>QUADRIPLEGIA-TRAUMATIC</dd><dt>X</dt><dd>NOT APPLICABLE</dd><dt>1</dt><dd>PARAPLEGIA-TRAUMATIC</dd><dt>3</dt><dd>PARAPLEGIA-NONTRAUMATIC</dd></dl>{:/} |  | 
| laboratoryReference |  | POINTER | laboratory_reference |  | Lab_Data-63 |  | 
| labReferralRef |  | POINTER | lab_referral_ref |  | Referral_Patient-67 |  | 
| cnhCurrent |  | BOOLEAN | cnh_current |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| dentalClassification |  | POINTER | dental_classification |  | Dental_Classification-220_2 |  | 
| dentalEligibilityExpiration |  | DATE-TIME | dental_eligibility_expiration |  |  |  | 
| patientEligibilities |  | [OBJECT] | patient_eligibilities |  | [patientEligibilities](#patienteligibilities)  |  | 
| patientType |  | POINTER | type-391 |  | Type_Of_Patient-391 |  | 
| condition |  | ENUMERATION | condition |  | {::nomarkdown}<dl><dt>S</dt><dd>SERIOUSLY ILL</dd></dl>{:/} |  | 
| dateEnteredOnSiList |  | DATE-TIME | date_entered_on_si_list |  |  |  | 
| currentPcPractitioner |  | POINTER | current_pc_practitioner |  | New_Person-200 |  | 
| currentPcTeam |  | POINTER | current_pc_team |  | Team-404_51 |  | 
| integrationControlNumber |  | NUMERIC | integration_control_number |  |  |  | 
| icnChecksum |  | STRING | icn_checksum |  |  |  | 
| coordinatingMasterOfRecord |  | POINTER | coordinating_master_of_record |  | Institution-4 |  | 
| locallyAssignedIcn |  | BOOLEAN | locally_assigned_icn |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| subscriptionControlNumber |  | POINTER | subscription_control_number |  | Subscription_Control-774 |  | 
| cmorActivityScore |  | NUMERIC | cmor_activity_score |  |  |  | 
| scoreCalculationDate |  | DATE-TIME | score_calculation_date |  |  |  | 
| temporaryIdNumber |  | STRING | temporary_id_number |  |  |  | 
| foreignIdNumber |  | STRING | foreign_id_number |  |  |  | 
| fullIcn |  | STRING | full_icn |  |  |  | 
| fullIcnHistory |  | [STRING] | full_icn_history |  |  |  | 
| icnHistory |  | [OBJECT] | icn_history |  | [icnHistory](#icnhistory)  |  | 
| cmorHistory |  | [OBJECT] | cmor_history |  | [cmorHistory](#cmorhistory)  |  | 
| multipleBirthIndicator |  | ENUMERATION | multiple_birth_indicator |  | {::nomarkdown}<dl><dt>Y</dt><dd>*MULTIPLE BIRTH*</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| dispositionLoginDateTime |  | [OBJECT] | disposition_login_date_time |  | [dispositionLoginDateTime](#dispositionlogindatetime)  |  | 
| receivedVaCarePreviously |  | BOOLEAN | received_va_care_previously |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| mostRecentDateOfCare |  | DATE-TIME | most_recent_date_of_care |  |  |  | 
| appointmentRequestDate |  | DATE-TIME | appointment_request_date |  |  |  | 
| mostRecentLocationOfCare |  | POINTER | most_recent_location_of_care |  | Institution-4 |  | 
| 2ndMostRecentDateOfCare |  | DATE-TIME | _2nd_most_recent_date_of_care |  |  |  | 
| 2ndMostRecentLocation |  | POINTER | _2nd_most_recent_location |  | Institution-4 |  | 
| mostRecent1010ez |  | POINTER | most_recent_1010ez |  | _1010Ez_Holding-712 |  | 
| combatIndicatedOn1010ez |  | BOOLEAN | combat_indicated_on_1010ez |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| disabilityDischargeOn1010ez |  | BOOLEAN | disability_discharge_on_1010ez |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| appointmentRequestOn1010ez |  | BOOLEAN | appointment_request_on_1010ez |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| appointmentRequestStatus |  | ENUMERATION | appointment_request_status |  | {::nomarkdown}<dl><dt>C</dt><dd>CANCELLED</dd><dt>I</dt><dd>IN PROCESS/VETERAN CONTACTED</dd><dt>F</dt><dd>FILLED</dd><dt>E</dt><dd>EWL</dd></dl>{:/} |  | 
| dateStatusLastEdited |  | DATE-TIME | date_status_last_edited |  |  |  | 
| appointmentRequestComment |  | STRING | appointment_request_comment |  |  |  | 
| dateCommentLastEdited |  | DATE-TIME | date_comment_last_edited |  |  |  | 
| fugitiveFelonFlag |  | BOOLEAN | fugitive_felon_flag |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| fffEnteredBy |  | POINTER | fff_entered_by |  | New_Person-200 |  | 
| fffDateEntered |  | DATE-TIME | fff_date_entered |  |  |  | 
| fffRemovedBy |  | POINTER | fff_removed_by |  | New_Person-200 |  | 
| fffDateRemoved |  | DATE-TIME | fff_date_removed |  |  |  | 
| fffRemovalRemarks |  | STRING | fff_removal_remarks |  |  |  | 
| appointment |  | [OBJECT] | appointment |  | [appointment](#appointment)  |  | 
| isVeteran |  | BOOLEAN | veteran_y_n |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| archivedData |  | [OBJECT] | archived_data |  | [archivedData](#archiveddata)  |  | 
| vtsPatientFlag |  | BOOLEAN | vts_patient_flag |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| initialOdsTreatmentReceived |  | DATE-TIME | initial_ods_treatment_received |  |  |  | 
| recalledToActiveDuty |  | ENUMERATION | recalled_to_active_duty |  | {::nomarkdown}<dl><dt>1</dt><dd>NATIONAL GUARD</dd><dt>2</dt><dd>RESERVES</dd><dt>0</dt><dd>NO</dd></dl>{:/} |  | 
| patientRank |  |  | rank-2 |  |  |  | 
| networkIdentifier |  | STRING | network_identifier |  |  |  | 

## permanentAddress 

<dl>
<dt>id</dt><dd>permanentAddress</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| street1 |  | STRING |  |  |  |  | 
| street2 |  | STRING |  |  |  |  | 
| street3 |  | STRING |  |  |  |  | 
| city |  | STRING |  |  |  |  | 
| state |  | POINTER |  |  | State-5 |  | 
| zipCode |  | STRING |  |  |  |  | 
| county |  | NUMERIC |  |  |  |  | 
| province |  | STRING |  |  |  |  | 
| postalCode |  | STRING |  |  |  |  | 
| country |  | POINTER |  |  | Country_Code-779_004 |  | 
| changeDateTime |  | DATE-TIME |  |  |  |  | 
| changeSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>USPS</dt><dd>USPS</dd><dt>VOA</dt><dd>VOA</dd><dt>VAMC</dt><dd>VAMC</dd><dt>HBSC</dt><dd>HBSC</dd><dt>BVA</dt><dd>BVA</dd><dt>LACS</dt><dd>LACS</dd><dt>HEC</dt><dd>HEC</dd><dt>NCOA</dt><dd>NCOA</dd><dt>VAINS</dt><dd>VAINS</dd></dl>{:/} |  | 
| changeSite |  | POINTER |  |  | Institution-4 |  | 
| badAddressIndicator |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>4</dt><dd>ADDRESS NOT FOUND</dd><dt>3</dt><dd>OTHER</dd><dt>1</dt><dd>UNDELIVERABLE</dd><dt>2</dt><dd>HOMELESS</dd></dl>{:/} |  | 
| changeUser |  | POINTER |  |  | New_Person-200 |  | 

## temporaryAddress 

<dl>
<dt>id</dt><dd>temporaryAddress</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| active |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| street1 |  | STRING |  |  |  |  | 
| street2 |  | STRING |  |  |  |  | 
| street3 |  | STRING |  |  |  |  | 
| county |  | NUMERIC |  |  |  |  | 
| city |  | STRING |  |  |  |  | 
| state |  | POINTER |  |  | State-5 |  | 
| zipCode |  | STRING |  |  |  |  | 
| startDate |  | DATE-TIME |  |  |  |  | 
| endDate |  | DATE-TIME |  |  |  |  | 
| phoneNumber |  | STRING |  |  |  |  | 
| province |  | STRING |  |  |  |  | 
| postalCode |  | STRING |  |  |  |  | 
| country |  | POINTER |  |  | Country_Code-779_004 |  | 
| changeDateTime |  | DATE-TIME |  |  |  |  | 
| changeSite |  | POINTER |  |  | Institution-4 |  | 

## patientContact 

<dl>
<dt>id</dt><dd>patientContact</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| phoneNumberResidence |  | STRING |  |  |  |  | 
| cellularNumberChangeSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl>{:/} |  | 
| cellularNumberChangeSite |  | POINTER |  |  | Institution-4 |  | 
| pagerNumberChangeDateTime |  | DATE-TIME |  |  |  |  | 
| pagerNumberChangeSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl>{:/} |  | 
| pagerNumberChangeSite |  | POINTER |  |  | Institution-4 |  | 
| confidentialPhoneNumber |  | STRING |  |  |  |  | 
| phoneNumberWork |  | STRING |  |  |  |  | 
| residenceNumberChangeDateTime |  | DATE-TIME |  |  |  |  | 
| residenceNumberChangeSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl>{:/} |  | 
| residenceNumberChangeSite |  | POINTER |  |  | Institution-4 |  | 
| emailAddress |  | STRING |  |  |  |  | 
| emailAddressIndicator |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| emailAddressIndicatorDateTime |  | DATE-TIME |  |  |  |  | 
| phoneNumberCellular |  | STRING |  |  |  |  | 
| pagerNumber |  | STRING |  |  |  |  | 
| emailAddressChangeDateTime |  | DATE-TIME |  |  |  |  | 
| emailAddressChangeSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl>{:/} |  | 
| emailAddressChangeSite |  | POINTER |  |  | Institution-4 |  | 
| cellularNumberChangeDateTime |  | DATE-TIME |  |  |  |  | 

## confidentialAddress 

<dl>
<dt>id</dt><dd>confidentialAddress</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| addressCategory |  | [OBJECT] |  |  | {properties:[{description:If the 'Confidential Address Active' prompt is answered YES, \rselect the confidential address category for this applicant's\rconfidential communications.,datatype:ENUMERATION,required:true,label:Confidential Address Category,range:{ELIGIBILITY/ENROLLMENT:1,MEDICAL RECORDS:4,APPOINTMENT/SCHEDULING:2,COPAYMENTS/VETERAN BILLING:3,ALL OTHERS:5},indexed:true,fmId:.01,id:addressCategory},{description:If the applicant's confidential communications for this category should\rbe sent to the confidential address, Confidential Category Active field\rshould be set to yes.  If not, select N or No.,datatype:BOOLEAN,label:Confidential Category Active,range:{false:N,true:Y},fmId:1,id:categoryActive}],fmId:2.141,id:categories,label:Confidential Address Category} |  | 
| active |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| street1 |  | STRING |  |  |  |  | 
| county |  | NUMERIC |  |  |  |  | 
| changeDateTime |  | DATE-TIME |  |  |  |  | 
| changeSite |  | POINTER |  |  | Institution-4 |  | 
| province |  | STRING |  |  |  |  | 
| postalCode |  | STRING |  |  |  |  | 
| country |  | POINTER |  |  | Country_Code-779_004 |  | 
| street2 |  | STRING | confidential_street_line_2 |  |  |  | 
| street3 |  | STRING | confidential_street_line_3 |  |  |  | 
| ccity |  | STRING | confidential_address_city |  |  |  | 
| state |  | POINTER | confidential_address_state |  | State-5 |  | 
| zipCode |  | STRING |  |  |  |  | 
| startDate |  | DATE-TIME | confidential_start_date |  |  |  | 
| endDate |  | DATE-TIME | confidential_end_date |  |  |  | 

## ineligibility 

<dl>
<dt>id</dt><dd>ineligibility</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| ineligibleDate |  | DATE-TIME |  |  |  |  | 
| missingPersonDate |  | DATE-TIME |  |  |  |  | 
| missingOrIneligible |  | STRING |  |  |  |  | 
| ineligibleTwxSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>REGIONAL OFFICE</dd><dt>1</dt><dd>VAMC</dd><dt>3</dt><dd>RPC</dd></dl>{:/} |  | 
| ineligibleTwxCity |  | STRING |  |  |  |  | 
| ineligibleTwxState |  | POINTER |  |  | State-5 |  | 
| ineligibleVaroDecision |  | STRING |  |  |  |  | 
| missingPersonTwxSource |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>REGIONAL OFFICE</dd><dt>1</dt><dd>VAMC</dd><dt>3</dt><dd>RPC</dd></dl>{:/} |  | 
| missingPersonTwxCity |  | STRING |  |  |  |  | 
| missingPersonTwxState |  | POINTER |  |  | State-5 |  | 

## contacts 

<dl>
<dt>id</dt><dd>contacts</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| primaryNextOfKin |  | OBJECT |  |  | {id:primaryNextOfKin,properties:[{id:workPhoneNumber,description:If the person designated as next of kin for this patient is employed,\renter the phone number at which the NOK can be reached while at work.,datatype:STRING},{id:primaryNokChangeDateTime,description:This field will hold the date and time of the last Primary Next of Kin\rUpdate.,datatype:DATE-TIME},{id:name,description:Enter the primary next of kin's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only uppercase\ralpha characters, spaces, apostrophes, hyphens and one comma.  All other\rcharacters and parenthetical text will be removed.,datatype:STRING},{id:relationshipToPatient,description:If a primary next-of-kin is specified enter the relationship of\rthat person to the applicant [1-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a\r'next of kin' name is on file.,datatype:STRING},{id:isAddressSameAsPatients,description:Enter 'Y' if the next-of-kin should be contacted at the same address\rand phone number as the applicant, otherwise enter 'N'.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:street1,description:If a primary next-of-kin is specified enter the first line of\rthat person's street address [3-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a\r'next of kin' name is on file.,datatype:STRING},{id:street2,description:If a primary next-of-kin is specified enter the second line of\rthat person's street address [3-30 characters], if necessary,\rotherwise nothing may be entered.  This field cannot be deleted\ras long as a 'next of kin' name is on file.,datatype:STRING},{id:street3,description:If a primary next-of-kin is specified enter the third line of\rthat person's street address [3-30 characters], if necessary,\rotherwise nothing may be entered.  This field cannot be deleted\ras long as a 'next of kin' name is on file.,datatype:STRING},{id:city,description:If a primary next-of-kin is specified enter the city in which\rthat person resides [3-30 characters], otherwise nothing may\rbe entered.  This field cannot be deleted as long as a 'next\rof kin' name is on file.,datatype:STRING},{id:state,description:If a primary next-of-kin is specified select from the available\rlisting the state in which that person resides, otherwise\rnothing may be entered.  This field cannot be deleted as long\ras a 'next of kin' name is on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If a primary next-of-kin is specified enter the zip code\r[5 numerics] in which his/her city lies, otherwise nothing\rmay be entered.  This field cannot be deleted as long as a\r'next of kin' name is on file.,datatype:STRING},{id:phoneNumber,description:If a primary next-of-kin is specified enter that person's\rtelephone number [4-20 characters], otherwise nothing may\rbe entered.  This field cannot be deleted as long as a\r'next of kin' name is on file.,datatype:STRING},{id:nameComponents,datatype:POINTER,range:{id:Name_Components-20}}]} |  | 
| secondaryNextOfKin |  | OBJECT |  |  | {id:secondaryNextOfKin,properties:[{id:workPhoneNumber,description:If the person designated as secondary next of kin for this patient is\remployed, enter the phone number that individual can be reached at while\rat work.,datatype:STRING},{id:secondaryNokChangeDateTime,description:This field will hold the date and time of the last Secondary Next of Kin\rUpdate.\r \rAny change to the following Secondary Next of Kin fields will trigger an\rupdate: K2-Name Of Secondary NOK, K2-Relationship To Patient, K2-Street\rAddress [Line 1], K2-Street Address [Line 2], K2-Street Address [Line 3],\rK2-City, K2-State, K2-Zip Code, K2-Phone Number, K2-Address Same As\rPatient's? and K2-Work Phone Number,datatype:DATE-TIME},{id:name,description:Enter the secondary next of kin's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only uppercase\ralpha characters, spaces, apostrophes, hyphens and one comma.  All other\rcharacters and parenthetical text will be removed.,datatype:STRING},{id:relationshipToPatient,description:If a secondary next-of-kin is specified enter the relationship of that\rperson to the applicant [1-30 characters].  This field cannot be\rdeleted as long as a secondary NOK is on file.,datatype:STRING},{id:addressSameAsPatients,description:Enter 'Y' if the secondary NOK should be contacted at the same\raddress and phone number as the applicant, otherwise enter 'N'.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:street1,description:If a secondary NOK is specified enter the first line of that person's\rstreet address [3-30 characters], otherwise nothing may be entered.\rThis field cannot be deleted as long as a secondary NOK is on file.,datatype:STRING},{id:street2,description:If a secondary NOK is specified enter the second line of that person's\rstreet address [3-30 characters], if necessary, otherwise nothing may\rbe entered.  This field cannot be deleted as long as a secondary NOK\ris on file.,datatype:STRING},{id:street3,description:If a secondary NOK is specified enter the third line of that person's\rstreet address [3-30 characters], if necessary, otherwise nothing may\rbe entered.  This field cannot be deleted as long as a secondary NOK\ris on file.,datatype:STRING},{id:city,description:If a secondary NOK is specified enter the city in which that person\rresides [3-30 characters], otherwise nothing may be entered.  This\rfield cannot be deleted as long as a secondary NOK is on file.,datatype:STRING},{id:state,description:If a secondary NOK is specified select from the available listing\rthe state in which that person resides, otherwise nothing may be\rentered.  This field cannot be deleted as long as a secondary NOK\ris on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If a secondary NOK is specified enter the zip code for the city\rin which that person resides [5 numerics], otherwise nothing may\rbe entered.  This field cannot be deleted as long as a secondary\rNOK is on file.,datatype:STRING},{id:phoneNumber,description:If a secondary NOK is specified enter the telephone number at which\rthat person may be reached [3-20 characters], otherwise nothing may\rbe entered.  This field cannot be deleted as long as a secondary\rNOK is on file.,datatype:STRING},{id:nameComponents,datatype:POINTER,range:{id:Name_Components-20}}]} |  | 
| vaGuardian |  | OBJECT |  |  | {id:vaGuardian,properties:[{id:name,description:Enter the name of the VA representative responsible for this patient's\rfunds.,datatype:STRING},{id:relationship,description:Enter the relationship to the patient of the VA representative responsible\rfor handling this patient's funds.,datatype:STRING},{id:street1,description:Enter the first line of the street address of the VA representative\rresponsible for handling this patient's funds.,datatype:STRING},{id:street2,description:Enter the second line of the street address of the VA representative\rresponsible for handling this patient's funds.,datatype:STRING},{id:city,description:Enter the city in which the person reponsible for handling this patient's\rfunds resides.,datatype:STRING},{id:state,description:Enter the state in which the person responsible for handling this patient's\rfunds resides.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If this patient has a VA guardian responsible for handling the patient's\rfunds, enter the guardian's zip code here.,datatype:STRING},{id:phoneNumber,description:If this patient has a VA guardian responsible for handling the patient's\rfunds, enter the guardian's phone number here.,datatype:STRING},{id:institution,description:Enter the VA facility or institution responsible for this patient's VA\rfunds.,datatype:POINTER,range:{id:Institution-4}}]} |  | 
| civilGuardian |  | OBJECT |  |  | {id:civilGuardian,properties:[{id:name,description:If this patient has been ruled incompetant to handle his financial matters,\renter the name of the individual responsible for handling the funds on the\rpatient's behalf.,datatype:STRING},{id:relationship,description:If this patient has been ruled incompetant to handle his financial funds,\rand someone else is responsible for handling the funds, enter the\rrelationship of that person to the patient.,datatype:STRING},{id:street1,description:Enter the first line of the street address of the person responsible for\rhandling this patient's funds.,datatype:STRING},{id:street2,description:Enter the second line of the street address of the person responsible for\rhandling this patient's funds.,datatype:STRING},{id:city,description:Enter the city in which the person responsible for this patient's funds\rresides.,datatype:STRING},{id:state,description:Enter the state in which the person responsible for handling this patient's\rfunds resides.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:Enter the zip code of the address where the person responsible for\rhandling this patient's funds resides.,datatype:STRING},{id:phoneNumber,description:If this patient has been ruled incompetant to handle his money and another\rperson has been assigned to handle the patient's financial matters, enter\rthat person's phone number here.,datatype:STRING},{id:institution,description:If this patient has been ruled incompetant to handle his financial matters,\renter the instituition reponsible for handling the funds on the patient's\rbehalf.,datatype:STRING}]} |  | 
| employer |  | OBJECT |  |  | {id:employer,properties:[{id:name,description:If employment status is indicated and is not unemployed enter the\remployer name [1-30 characters], otherwise nothing may be entered.,datatype:STRING},{id:status,description:Enter the patient's current employment status.  Choose from the available\rchoices.,datatype:ENUMERATION,range:{EMPLOYED PART TIME:2,SELF EMPLOYED:4,RETIRED:5,UNKNOWN:9,NOT EMPLOYED:3,EMPLOYED FULL TIME:1,ACTIVE MILITARY DUTY:6}},{id:dateOfRetirement,description:For this veteran applicant, enter the date s/he retired from\rher/his place of employment.,datatype:DATE-TIME},{id:isGovernmentAgency,description:If this patient is currently employed by a government agency, respond yes\rto this question.  If the patient is employed by the private sector or\rcurrently is unemployed, respond no.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:street1,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the first line of the employer\rstreet address [1-30 characters], otherwise nothing may be entered.\rThis field cannot be deleted as long as an employer name is on file.,datatype:STRING},{id:street2,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the second line of the employer\rstreet address [1-30 characters], if necessary, otherwise nothing\rmay be entered.  This field cannot be deleted as long as an employer\rname is on file.,datatype:STRING},{id:street3,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the third line of the employer\rstreet address [1-30 characters], if necessary, otherwise nothing\rmay be entered.  This field cannot be deleted as long as an employer\rname is on file.,datatype:STRING},{id:city,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the employer city [1-30 characters],\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as an employer name is on file.,datatype:STRING},{id:state,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered select from the available listing the\remployer state, otherwise nothing may be entered.  This field\rcannot be deleted as long as an employer name is on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the employer zip code [5 numerics],\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as an employer name is on file.,datatype:STRING},{id:phoneNumber,description:If employment status is indicated, applicant is not unemployed and\ran employer name is entered enter the employer telephone number\r[3-20 characters], otherwise nothing may be entered.  This field\rcannot be deleted as long as an employer name is on file.,datatype:STRING}]} |  | 
| spousesEmployer |  | OBJECT |  |  | {id:spouse,properties:[{id:name,description:For this married applicant (marital status must be married) enter\rthe name of his/her spouse's employer [3-20 characters].,datatype:STRING},{id:occupation,description:If this patient's spouse is currently employed, enter the spouse's\roccupation here.  Otherwise, leave this field blank.,datatype:STRING},{id:status,description:Choose from the available list the choice that most correctly indicates\rthe current employment status for this patient's spouse.,datatype:ENUMERATION,range:{EMPLOYED PART TIME:2,SELF EMPLYED:4,RETIRED:5,UNKNOWN:9,NOT EMPLOYED:3,EMPLOYED FULL TIME:1,ACTIVE MILITARY DUTY:6}},{id:retirementDate,description:For this veteran applicant's spouse, enter the date s/he retired from\rher/his place of employment. ,datatype:DATE-TIME},{id:street1,description:If applicant is married and a spouse's employer name has been entered\renter the first line of the spouse's employer's street address [3-35\rcharacters, otherwise nothing may be entered.  This field may not be\rdeleted as long as a spouse's employer's name is on file.,datatype:STRING},{id:street2,description:If applicant is married and a spouse's employer name has been entered\renter the second line of the spouse's employer's street address [3-35\rcharacters, if necessary, otherwise nothing may be entered.  This\rfield may not be deleted as long as a spouse's employer's name is on\rfile.,datatype:STRING},{id:street3,description:If applicant is married and a spouse's employer name has been entered\renter the third line of the spouse's employer's street address [3-35\rcharacters, if necessary, otherwise nothing may be entered.  This\rfield may not be deleted as long as a spouse's employer's name is on\rfile.,datatype:STRING},{id:city,description:If applicant is married and a spouse's employer name has been entered\renter the spouse's employer city [2-20 characters], otherwise nothing\rmay be entered.  This field may not be deleted as long as a spouse's\remployer's name is on file.,datatype:STRING},{id:state,description:If applicant is married and a spouse's employer name has been entered\rselect from the available listing the spouse's employer's state.  This\rfield may not be deleted as long as a spouse's employer's name is on\rfile.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If applicant is married and spouse's employer name has been entered\renter the spouse's employer zip code [5 numerics], otherwise nothing\rmay be entered.  This field may not be deleted as long as a spouse's\remployer's name is on file.,datatype:STRING},{id:phoneNumber,description:If applicant is married and spouse's employer name has been entered\renter the spouse's employer telephone number [4-20 characters],\rotherwise nothing may be entered.  This field may not be deleted as\rlong as a spouse's employer's name is on file.,datatype:STRING}]} |  | 
| primaryEmergencyContact |  | OBJECT |  |  | {id:primaryEmergencyContact,properties:[{id:phoneNumber,description:If the emergency contact for this patient is employed, enter the phone\rnumber at which this individual may be reached while at work.,datatype:STRING},{id:changeDateTime,description:This field will hold the date and time of the last Emergency Contact\rUpdate.\r \rAny change to the following Emergency Contact fields will trigger an\rupdate: E-Name, E-Relationship To Patient, E-Street Address [Line 1],\rE-Street Address [Line 2], E-Street Address [Line 3], E-City, E-State,\rE-Zip Code, E-Phone Number, E-Emer. Contact Same As NOK? and E-Work Phone\rNumber,datatype:DATE-TIME},{id:isSameAsNextOfKin,description:If a primary NOK is defined enter 'Y' if that person is also the primary\remergency contact, otherwise enter 'N' for no.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:name,description:Enter the primary emergency contact's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only uppercase\ralpha characters, spaces, apostrophes, hyphens and one comma.  All other\rcharacters and parenthetical text will be removed.,datatype:STRING},{id:relationshipToPatient,description:If a primary emergency contact is specified enter the relationship\rof that person to the applicant [3-35 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a primary\remergency contact is on file.,datatype:STRING},{id:street1,description:If a primary emergency contact is specified enter the first line\rof that person's street address [3-30 characters], otherwise\rnothing may be entered.  This field cannot be deleted as long as\ra primary emergency contact is on file.,datatype:STRING},{id:street2,description:If a primary emergency contact is specified enter the second line\rof that person's street address [3-30 characters], if necessary,\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as a primary emergency contact is on file.,datatype:STRING},{id:street3,description:If a primary emergency contact is specified enter the third line\rof that person's street address [3-30 characters], if necessary,\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as a primary emergency contact is on file.,datatype:STRING},{id:city,description:If a primary emergency contact is specified enter the city in\rwhich that person resides [3-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a\rprimary emergency contact is on file.,datatype:STRING},{id:state,description:If a primary emergency contact is specified select from the\ravailable listing the state in which that person resides,\rotherwise nothing may be entered.  This field cannot be deleted\ras long as a primary emergency contact is on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If a primary emergency contact is specified enter the zip code\rfor the city in which s/he resides [5 numerics], otherwise\rnothing may be entered.  This field cannot be deleted as long as\ra primary emergency contact is on file.,datatype:STRING},{id:phoneNumber,description:If a primary emergency contact is specified enter the telephone\rnumber [3-20 characters] at which that person may be reached,\rotherwise nothing may be entered.  This field cannot be deleted\ras long as a primary emergency contact is on file.,datatype:STRING},{id:nameComponents,datatype:POINTER,range:{id:Name_Components-20}}]} |  | 
| secondaryEmergencyContact |  | OBJECT |  |  | {id:secondaryEmergencyContact,properties:[{id:workPhoneNumber,description:If the person designated as the secondary emergency contact is employed,\renter the person's work phone number.,datatype:STRING},{id:name,description:Enter the secondary emergency contact's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only uppercase\ralpha characters, spaces, apostrophes, hyphens and one comma.  All other\rcharacters and parenthetical text will be removed.,datatype:STRING},{id:changeDateTime,description:This field will hold the date and time of the last Secondary Emergency\rContact Update.\r \rAny change to the following Secondary Emergency Contact fields will\rtrigger an update: E2-Name Of Secondary Contact, E2-Relationship To\rPatient, E2-Street Address [Line 1], E2-Street Address [Line 2], E2-Street\rAddress [Line 3], E2-City, E2-State, E2-Zip Code, E2-Phone Number and\rE2-Work Phone Number,datatype:DATE-TIME},{id:relationshipToPatient,description:If a secondary emergency contact is specified enter the relationship\rof that person to the applicant [2-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a secondary\remergency contact is on file.,datatype:STRING},{id:street1,description:If a secondary emergency contact is specified enter the first line\rof that person's street address [3-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a secondary\remergency contact is on file.,datatype:STRING},{id:street2,description:If a secondary emergency contact is specified enter the second line\rof that person's street address [3-30 characters], if necessary, otherwise\rnothing may be entered.  This field cannot be deleted as long as a\rsecondary emergency contact is on file.,datatype:STRING},{id:street3,description:If a secondary emergency contact is specified enter the third line\rof that person's street address [3-30 characters], if necessary,\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as a secondary emergency contact is on file.,datatype:STRING},{id:city,description:If a secondary emergency contact is specified enter the city in\rwhich that person resides [3-30 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a secondary\remergency contact is on file.,datatype:STRING},{id:state,description:If a secondary emergency contact is specified select from the\ravailable listing the state in which that person resides,\rotherwise nothing may be entered.  This field cannot be deleted\ras long as a secondary emergency contact is on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If a secondary emergency contact is specified enter the zip\rcode for the city in which s/he resides [5 numerics], otherwise\rnothing may be entered.  This field cannot be deleted as long\ras a secondary emergency contact is on file.,datatype:STRING},{id:phoneNumber,description:If a secondary emergency contact is specified enter the telephone\rnumber at which that person may be reached [3-20 characters],\rotherwise nothing may be entered.  This field cannot be deleted as\rlong as a secondary emergency contact is on file.,datatype:STRING},{id:nameComponents,datatype:POINTER,range:{id:Name_Components-20}}]} |  | 
| designee |  | OBJECT |  |  | {id:designee,properties:[{id:workPhoneNumber,description:If the person designated to receive the patient's personal effects is\remployed, enter the phone number at which that person may be reached\rwhile at work.,datatype:STRING},{id:isSameAsNextOfKin,description:If a primary NOK is defined enter 'Y' if that person is also the\rdesignee appointed by the applicant, otherwise enter 'N' for no.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:name,description:Enter the designee's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only uppercase\ralpha characters, spaces, apostrophes, hyphens and one comma.  All other\rcharacters and parenthetical text will be removed.,datatype:STRING},{id:changeDateTime,fromVDM:designee_change_date_time,description:This field will hold the date and time of the last Designee Update.\r \rAny change to the following Designee fields will trigger an update:\rD-Name Of Designee, D-Relationship To Patient, D-Street Address [Line 1],\rD-Street Address [Line 2], D-Street Address [Line 3], D-City, D-State,\rD-Zip Code, D-Phone Number, D-Designee Same As Nok?, D-Work Phone Number,datatype:DATE-TIME},{id:relationshipToPatient,description:If a designee is specified enter the relationship of that person to\rthe applicant [3-30 characters], otherwise nothing may be entered.\rThis field cannot be deleted as long as a designee is on file.,datatype:STRING},{id:street1,description:If a designee is specified enter the first line of that person's street\raddress [3-30 characters], otherwise nothing may be entered.  This\rfield cannot be deleted as long as a designee is on file.,datatype:STRING},{id:street2,description:If a designee is specified enter the second line of that person's\rstreet address [3-30 characters], if necessary, otherwise nothing\rmay be entered.  This field cannot be deleted as long as a designee\ris on file.,datatype:STRING},{id:street3,description:If a designee is specified enter the third line of that person's\rstreet address [3-30 characters], if necessary, otherwise nothing\rmay be entered.  This field cannot be deleted as long as a designee\ris on file.,datatype:STRING},{id:city,description:If a designee is specified enter the city in which that person\rresides [1-30 characters], otherwise nothing may be entered.\rThis field cannot be deleted as long as a designee is on file.,datatype:STRING},{id:state,description:If a designee is specified select from the available listing\rthe state in which that person resides.  This field cannot\rbe deleted as long as a designee is on file.,datatype:POINTER,range:{id:State-5}},{id:zipCode,description:If a designee is specified enter the zip code for the city in\rwhich s/he resides [5 numerics], otherwise nothing may be\rentered.  This field cannot be deleted as long as a designee\ris on file.,datatype:STRING},{id:phoneNumber,description:If a designee is specified enter the telephone number at which\rthat person may be reached [3-20 characters], otherwise nothing\rmay be entered.  This field cannot be deleted as long as a\rdesignee is on file.,datatype:STRING},{id:nameComponents,datatype:POINTER,range:{id:Name_Components-20}}]} |  | 

## serviceConnected 

<dl>
<dt>id</dt><dd>serviceConnected</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| isServiceConnected |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| awardDate |  | DATE-TIME |  |  |  |  | 
| ptEffectiveDate |  | DATE-TIME |  |  |  |  | 
| effDateCombinedScEval |  | DATE-TIME |  |  |  |  | 
| serviceConnectedPercentage |  | NUMERIC |  |  |  |  | 
| receivingVaDisability |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| amountOfVaDisability |  | NUMERIC |  |  |  |  | 
| pt |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| unemployable |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| monetaryBenVerifyDate |  | DATE-TIME |  |  |  |  | 
| ineligibleReason |  | STRING |  |  |  |  | 
| agencyAlliedCountry |  | POINTER |  |  | Other_Federal_Agency-35 |  | 
| categoryOfBeneficiary |  | POINTER |  |  | Category_Of_Beneficiary-45_82 |  | 

## claim 

<dl>
<dt>id</dt><dd>claim</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| claimNumber |  | STRING |  |  |  |  | 
| claimFolderLocation |  | POINTER |  |  | Institution-4 |  | 
| coveredByHealthInsurance |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 

## insuranceType 

<dl>
<dt>id</dt><dd>insuranceType</dd>
<dt>label</dt><dd>Insurance Type</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| insuranceType | Insurance Type | POINTER | insurance_type |  | Insurance_Company-36 | REQUIRED, INDEXED | 
| groupPlan | Group Plan | POINTER | group_plan |  | Group_Insurance_Plan-355_3 |  | 
| coordinationOfBenefits | Coordination Of Benefits | ENUMERATION | coordination_of_benefits |  | {::nomarkdown}<dl><dt>1</dt><dd>PRIMARY</dd><dt>3</dt><dd>TERTIARY</dd><dt>2</dt><dd>SECONDARY</dd></dl>{:/} |  | 
| subscriberId | *Subscriber Id | STRING | subscriber_id |  |  |  | 
| dateEntered | Date Entered | DATE-TIME | date_entered |  |  |  | 
| enteredBy | Entered By | POINTER | entered_by |  | New_Person-200 |  | 
| dateLastVerified | Date Last Verified | DATE-TIME | date_last_verified |  |  |  | 
| verifiedBy | Verified By | POINTER | verified_by |  | New_Person-200 |  | 
| dateLastEdited | Date Last Edited | DATE-TIME | date_last_edited |  |  |  | 
| lastEditedBy | Last Edited By | POINTER | last_edited_by |  | New_Person-200 |  | 
| commentPatientPolicy | Comment - Patient Policy | STRING | comment__patient_policy |  |  |  | 
| sourceOfInformation | Source Of Information | POINTER | source_of_information |  | Source_Of_Information-355_12 |  | 
| dateOfSourceOfInformation | Date Of Source Of Information | DATE-TIME | date_of_source_of_information |  |  |  | 
| groupNumber | *Group Number | STRING | group_number |  |  |  | 
| sendBillToEmployer | Send Bill To Employer | BOOLEAN | send_bill_to_employer |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| subscribersEmployerName | Subscriber'S Employer Name | STRING | subscribers_employer_name |  |  |  | 
| employerClaimStreetAddress | Employer Claims Street Address | STRING | employer_claims_street_address |  |  |  | 
| employClaimStAddressLine2 | Employ Claim St Address Line 2 | STRING | employ_claim_st_address_line_2 |  |  |  | 
| employClaimStAddressLine3 | Employ Claim St Address Line 3 | STRING | employ_claim_st_address_line_3 |  |  |  | 
| employerClaimsCity | Employer Claims City | STRING | employer_claims_city |  |  |  | 
| employerClaimsState | Employer Claims State | POINTER | employer_claims_state |  | State-5 |  | 
| employerClaimsZipCode | Employer Claims Zip Code | STRING | employer_claims_zip_code |  |  |  | 
| employerClaimsPhone | Employer Claims Phone | STRING | employer_claims_phone |  |  |  | 
| esghp | Esghp | BOOLEAN | esghp |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| employmentStatus | Employment Status | ENUMERATION | employment_status |  | {::nomarkdown}<dl><dt>4</dt><dd>SELF EMPLOYED</dd><dt>2</dt><dd>PART TIME</dd><dt>5</dt><dd>RETIRED</dd><dt>9</dt><dd>UNKNOWN</dd><dt>3</dt><dd>NOT EMPLOYED</dd><dt>1</dt><dd>FULL TIME</dd><dt>6</dt><dd>ACTIVE MILITARY</dd></dl>{:/} |  | 
| retirementDate | Retirement Date | DATE-TIME | retirement_date |  |  |  | 
| insuranceExpirationDate | Insurance Expiration Date | DATE-TIME | insurance_expiration_date |  |  |  | 
| insuredsDob | Insured'S Dob | DATE-TIME | insureds_dob |  |  |  | 
| insuredsBranch | Insured'S Branch | POINTER | insureds_branch |  | Branch_Of_Service-23 |  | 
| insuredsRank | Insured'S Rank | STRING | insureds_rank |  |  |  | 
| policyNotBillable | Policy Not Billable | BOOLEAN | policy_not_billable |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| insuredsSsn | Insured'S Ssn | STRING | insureds_ssn |  |  |  | 
| insuredsStreet1 | Insured'S Street 1 | STRING | insureds_street_1 |  |  |  | 
| insuredsStreet2 | Insured'S Street 2 | STRING | insureds_street_2 |  |  |  | 
| insuredsCity | Insured'S City | STRING | insureds_city |  |  |  | 
| insuredsState | Insured'S State | POINTER | insureds_state |  | State-5 |  | 
| insuredsZip | Insured'S Zip | STRING | insureds_zip |  |  |  | 
| insuredsPhone | Insured'S Phone | STRING | insureds_phone |  |  |  | 
| insuredsSex | Insured'S Sex | ENUMERATION | insureds_sex |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} |  | 
| insuredsCountry | Insured'S Country | STRING | insureds_country |  |  |  | 
| insuredsCountrySubdivision | Insured'S Country Subdivision | STRING | insureds_country_subdivision |  |  |  | 
| primaryCareProvider | Primary Care Provider | STRING | primary_care_provider |  |  |  | 
| primaryProviderPhone | Primary Provider Phone | STRING | primary_provider_phone |  |  |  | 
| ptRelationshipHipaa | Pt. Relationship - Hipaa | ENUMERATION | pt_relationship__hipaa |  | {::nomarkdown}<dl><dt>41</dt><dd>INJURED PLAINTIFF</dd><dt>39</dt><dd>ORGAN DONOR</dd><dt>18</dt><dd>SELF</dd><dt>19</dt><dd>CHILD</dd><dt>33</dt><dd>FATHER</dd><dt>29</dt><dd>SIGNIFICANT OTHER</dd><dt>32</dt><dd>MOTHER</dd><dt>20</dt><dd>EMPLOYEE</dd><dt>01</dt><dd>SPOUSE</dd><dt>53</dt><dd>LIFE PARTNER</dd><dt>G8</dt><dd>OTHER RELATIONSHIP</dd></dl>{:/} |  | 
| eivAutoupdate | Eiv Auto-Update | BOOLEAN | eiv_autoupdate |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| pharmacyRelationshipCode | Pharmacy Relationship Code | POINTER | pharmacy_relationship_code |  | Bps_Ncpdp_Patient_Relationship_Code-9002313_19 |  | 
| pharmacyPersonCode | Pharmacy Person Code | STRING | pharmacy_person_code |  |  |  | 
| patientId | Patient Id | STRING | patient_id |  |  |  | 
| subscribersSecQualifier1 | Subscriber'S Sec Qualifier(1) | ENUMERATION | subscribers_sec_qualifier1 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| subscribersSecId1 | Subscriber'S Sec Id(1) | STRING | subscribers_sec_id1 |  |  |  | 
| subscribersSecQualifer2 | Subscriber'S Sec Qualifier(2) | ENUMERATION | subscribers_sec_qualifier2 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| subscribersSecId2 | Subscriber'S Sec Id(2) | STRING | subscribers_sec_id2 |  |  |  | 
| subscribersSecQualifer3 | Subscriber'S Sec Qualifier(3) | ENUMERATION | subscribers_sec_qualifier3 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| subscribersSecId3 | Subscriber'S Sec Id(3) | STRING | subscribers_sec_id3 |  |  |  | 
| patientsSecQualifer1 | Patient'S Sec Qualifier(1) | ENUMERATION | patients_sec_qualifier1 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| patientsSecondaryId1 | Patient'S Secondary Id(1) | STRING | patients_secondary_id1 |  |  |  | 
| patientsSecQualifier2 | Patient'S Sec Qualifier(2) | ENUMERATION | patients_sec_qualifier2 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| patientsSecondaryId2 | Patient'S Secondary Id(2) | STRING | patients_secondary_id2 |  |  |  | 
| patientsSecQualifier3 | Patient'S Sec Qualifier(3) | ENUMERATION | patients_sec_qualifier3 |  | {::nomarkdown}<dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl>{:/} |  | 
| patientsSecondaryId3 | Patient'S Secondary Id(3) | STRING | patients_secondary_id3 |  |  |  | 
| whoseInsurance | Whose Insurance | ENUMERATION | whose_insurance |  | {::nomarkdown}<dl><dt>v</dt><dd>VETERAN</dd><dt>s</dt><dd>SPOUSE</dd><dt>o</dt><dd>OTHER</dd></dl>{:/} |  | 
| nameOfInsured | Name Of Insured | STRING | name_of_insured |  |  |  | 
| subscriberId | Subscriber Id | STRING | subscriber_id-2_312-7_02 |  |  |  | 
| effectiveDateOfPolicy | Effective Date Of Policy | DATE-TIME | effective_date_of_policy |  |  |  | 
| requestedServiceDate | Requested Service Date | DATE-TIME | requested_service_date |  |  |  | 
| requestedServiceType | Requested Service Type | POINTER | requested_service_type |  | X12_271_Service_Type-365_013 |  | 
| groupReferenceInformation | Group Reference Information | [OBJECT] | group_reference_information |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Subscriber Supplemental Identifier.,datatype:STRING,label:Reference Id (Group),fmId:.02,id:referenceIdGroup,fromVDM:reference_id_group},{description: Describes the type of reference ID at the REFERENCE ID (GROUP) (#.02)\rfield. ,datatype:POINTER,label:Ref Id Qualifier (Group),range:{id:X12_271_Reference_Identification-365_028},fmId:.03,id:refIdQualifierGroup,fromVDM:ref_id_qualifier_group},{description:A free-form description to clarify the Reference ID in the REFERENCE ID\r(GROUP) (#.02) field.  It will be populated with the Plan, Group or Plan\rNetwork Name.,datatype:STRING,label:Description,fmId:.04,id:description,fromVDM:description}],fmId:2.3129,id:Group_Reference_Information-2_3129,label:Group Reference Information} |  | 
| groupProviderInfo | Group Provider Info | [OBJECT] | group_provider_info |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Code that identifies the type of provider (e.g., \AD\ for Admitting).,datatype:POINTER,label:Provider Code,range:{id:X12_271_Provider_Code-365_024},fmId:.02,id:providerCode,fromVDM:provider_code},{description:Provider specialty type identifier.,datatype:STRING,label:Prov Reference Id,fmId:.03,id:provReferenceId,fromVDM:prov_reference_id}],fmId:2.332,id:Group_Provider_Info-2_332,label:Group Provider Info} |  | 
| healthCareCodeInformation | Health Care Code Information | [OBJECT] | health_care_code_information |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Diagnosis Code sent by the payer in response to the insurance eligibility\rinquiry.,datatype:POINTER,label:Diagnosis Code,range:{id:Icd_Diagnosis-80},fmId:.02,id:diagnosisCode,fromVDM:diagnosis_code},{description:Diagnosis Type Code identifying a specific industry code list ICD-9 or\rICD-10.,datatype:STRING,label:Diagnosis Code Qualifier,fmId:.03,id:diagnosisCodeQualifier,fromVDM:diagnosis_code_qualifier},{description:This field indicates whether the code in the DIAGNOSIS CODE (#.02) field\ris a primary or secondary diagnosis.,datatype:ENUMERATION,label:Primary Or Secondary?,range:{PRIMARY:P,SECONDARY:S},fmId:.04,id:primaryOrSecondary,fromVDM:primary_or_secondary}],fmId:2.31211,id:Health_Care_Code_Information-2_31211,label:Health Care Code Information} |  | 
| militaryInfoStatusCode | Military Info Status Code | POINTER | military_info_status_code |  | X12_271_Military_Personnel_Info_Status_Code-365_039 |  | 
| militaryEmploymentStatus | Military Employment Status | POINTER | military_employment_status |  | X12_271_Military_Employment_Status_Code-365_046 |  | 
| militaryGovtAffiliationCode | Military Govt Affiliation Code | POINTER | military_govt_affiliation_code |  | X12_271_Military_Govt_Service_Affiliation-365_041 |  | 
| militaryPersonnelDescription | Military Personnel Description | STRING | military_personnel_description |  |  |  | 
| militaryServieRankCode | Military Service Rank Code | POINTER | military_service_rank_code |  | X12_271_Military_Service_Rank-365_042 |  | 
| dateTimePeriodFormatQual | Date Time Period Format Qual | POINTER | date_time_period_format_qual |  | X12_271_Date_Format_Qualifier-365_032 |  | 
| dateTimePeriod | Date Time Period | STRING | date_time_period |  |  |  | 
| groupName | *Group Name | STRING | group_name |  |  |  | 
| ptRelationshipToInsured | Pt. Relationship To Insured | ENUMERATION | pt_relationship_to_insured |  | {::nomarkdown}<dl><dt>01</dt><dd>PATIENT</dd><dt>11</dt><dd>ORGAN DONOR</dd><dt>03</dt><dd>NATURAL CHILD</dd><dt>18</dt><dd>DO NOT USE</dd><dt>33</dt><dd>FATHER</dd><dt>15</dt><dd>INJURED PLANTIFF</dd><dt>34</dt><dd>SIGNIFICANT OTHER</dd><dt>32</dt><dd>MOTHER</dd><dt>08</dt><dd>EMPLOYEE</dd><dt>02</dt><dd>SPOUSE</dd><dt>35</dt><dd>LIFE PARTNER</dd><dt>36</dt><dd>OTHER RELATIONSHIP</dd></dl>{:/} |  | 
| nameOfInsured | *Name Of Insured | STRING | name_of_insured-2_312-17 |  |  |  | 
| eligibilityBenefit | Eligibility/Benefit | [OBJECT] | eligibility_benefit |  | {properties:[{description:This is a sequential number corresponding to the Set-ID for all\rof the eligibility/benefit (X.12 EB segments) segments coming\rinto VISTA.,datatype:NUMERIC,required:true,label:Eb Number,indexed:true,fmId:.01,id:ebNumber,fromVDM:eb_number},{description:This field contains a code identifying the eligibility status\rof the individual or the benefit returned by the Payer.,datatype:POINTER,label:Eligibility/Benefit Info,range:{id:X12_271_Eligibility_Benefit-365_011},fmId:.02,id:eligibilityBenefitInfo,fromVDM:eligibility_benefit_info},{description:This field identifies the level of coverage of benefits.,datatype:POINTER,label:Coverage Level,range:{id:X12_271_Coverage_Level-365_012},fmId:.03,id:coverageLevel,fromVDM:coverage_level},{description:This field is a code identifying the classification of service.,datatype:POINTER,label:*Service Type,range:{id:X12_271_Service_Type-365_013},fmId:.04,id:serviceType,fromVDM:service_type},{description:This is a code identifying the type of insurance policy within\ra specific insurance program.,datatype:POINTER,label:Insurance Type,range:{id:X12_271_Insurance_Type-365_014},fmId:.05,id:insuranceType,fromVDM:insurance_type},{description:This code is a description or number that identifies the plan\ror coverage.,datatype:STRING,label:Plan Coverage Description,fmId:.06,id:planCoverageDescription,fromVDM:plan_coverage_description},{description:This is a code for the time period category that determines\rfor how long the benefits are available.,datatype:POINTER,label:Time Period Qualifier,range:{id:X12_271_Time_Period_Qualifier-365_015},fmId:.07,id:timePeriodQualifier,fromVDM:time_period_qualifier},{description:This field is populated if eligibility or benefit must be\rqualified by a monetary amount.,datatype:STRING,label:Monetary Amount,fmId:.08,id:monetaryAmount,fromVDM:monetary_amount},{description:This field is used if eligibility or benefit must be qualified\rby a percentage.,datatype:NUMERIC,label:Percent,fmId:.09,id:percent,fromVDM:percent},{description:This field is used to identify the type of units that are being\rconveyed in the QUANTITY field (#.11).,datatype:POINTER,label:Quantity Qualifier,range:{id:X12_271_Quantity_Qualifier-365_016},fmId:.1,id:quantityQualifier,fromVDM:quantity_qualifier},{description:This field number is used for the quantity value as qualified by\rthe QUANTITY QUALIFIER field.,datatype:STRING,label:Quantity,fmId:.11,id:quantity,fromVDM:quantity},{description:This field indicates that an authorization or certification\ris required per plan provisions.,datatype:POINTER,label:Authorization/Certification,range:{id:X12_271_Yes_No_Response_Code_-365_033},fmId:.12,id:authorizationCertification,fromVDM:authorization_certification},{description:This field indicates the plan network indicator.  A YES value indicates\rthe benefits identified are considered In-Plan-Network.  A NO value\rindicates that the benefits identified are considered \rOut-Of-Plan-Network.  A \U\ value indicates it is unknown whether the\rbenefits identified are part of the Plan Network.,datatype:POINTER,label:In Plan,range:{id:X12_271_Yes_No_Response_Code_-365_033},fmId:.13,id:inPlan,fromVDM:in_plan},{description:Two character code describing procedure coding method.,datatype:POINTER,label:Procedure Coding Method,range:{id:X12_271_Procedure_Coding_Method-365_035},fmId:1.01,id:procedureCodingMethod,fromVDM:procedure_coding_method},{description:Identification code for the procedure.,datatype:STRING,label:Procedure Code,fmId:1.02,id:procedureCode,fromVDM:procedure_code},{description:Identifies special circumstances related to the procedure; first modifier.,datatype:STRING,label:Procedure Modifier 1,fmId:1.03,id:procedureModifier1,fromVDM:procedure_modifier_1},{description:Identifies special circumstances related to the procedure; second\rmodifier.,datatype:STRING,label:Procedure Modifier 2,fmId:1.04,id:procedureModifier2,fromVDM:procedure_modifier_2},{description:Identifies special circumstances related to the procedure; third modifier.,datatype:STRING,label:Procedure Modifier 3,fmId:1.05,id:procedureModifier3,fromVDM:procedure_modifier_3},{description:Identifies special circumstances related to the procedure; fourth\rmodifier.,datatype:STRING,label:Procedure Modifier 4,fmId:1.06,id:procedureModifier4,fromVDM:procedure_modifier_4},{description:This field contains any additional text about the eligibility\rbenefit information.  It is transcribed from X.12 271 MSG segments.,datatype:STRING,label:Notes,isWP:true,fmId:2,id:notes,fromVDM:notes},{description:X12 Entity Identifier Code.,datatype:POINTER,label:Entity Id Code,range:{id:X12_271_Entity_Identifier_Code-365_022},fmId:3.01,id:entityIdCode,fromVDM:entity_id_code},{description:Entity Type Qualifier.,datatype:POINTER,label:Entity Type,range:{id:X12_271_Entity_Type_Qualifier-365_043},fmId:3.02,id:entityType,fromVDM:entity_type},{description:Name of person or organization.,datatype:STRING,label:Name,fmId:3.03,id:name,fromVDM:name},{description:Entity identifier.,datatype:STRING,label:Entity Id,fmId:3.04,id:entityId,fromVDM:entity_id},{description:Code designating the system/method used for Identification.,datatype:POINTER,label:Entity Id Qualifier,range:{id:X12_271_Identification_Qualifier-365_023},fmId:3.05,id:entityIdQualifier,fromVDM:entity_id_qualifier},{description:Benefit Related Entity's relationship to the patient.,datatype:POINTER,label:Entity Relationship Code,range:{id:X12_271_Entity_Relationship_Code-365_031},fmId:3.06,id:entityRelationshipCode,fromVDM:entity_relationship_code},{description:Entity address, line 1.,datatype:STRING,label:Address Line 1,fmId:4.01,id:addressLine1,fromVDM:address_line_1},{description:Entity address, line 2.,datatype:STRING,label:Address Line 2,fmId:4.02,id:addressLine2,fromVDM:address_line_2},{description:Entity address, city.,datatype:STRING,label:City,fmId:4.03,id:city,fromVDM:city},{description:Entity address, state or province code.,datatype:POINTER,label:State,range:{id:State-5},fmId:4.04,id:state,fromVDM:state},{description:Entity address, zip or postal code.,datatype:STRING,label:Zip,fmId:4.05,id:zip,fromVDM:zip},{description:Entity address, country code.,datatype:STRING,label:Country Code,fmId:4.06,id:countryCode,fromVDM:country_code},{description:Entity address, location identifier.,datatype:STRING,label:Location,fmId:4.07,id:location,fromVDM:location},{description:Entity address, location qualifier.,datatype:POINTER,label:Location Qualifier,range:{id:X12_271_Location_Qualifer-365_034},fmId:4.08,id:locationQualifier,fromVDM:location_qualifier},{description:Entity address, country subdivision code.,datatype:STRING,label:Subdivision Code,fmId:4.09,id:subdivisionCode,fromVDM:subdivision_code},{description:Code identifying the type of provider.,datatype:POINTER,label:Provider Code,range:{id:X12_271_Provider_Code-365_024},fmId:5.01,id:providerCode,fromVDM:provider_code},{description:Reference identifier.,datatype:STRING,label:Reference Id,fmId:5.02,id:referenceId,fromVDM:reference_id},{description:Reference identifier type.,datatype:POINTER,label:Reference Id Qualifier,range:{id:X12_271_Reference_Identification-365_028},fmId:5.03,id:referenceIdQualifier,fromVDM:reference_id_qualifier},{description:This multiple contains contact information for an eligibility/benefit\rentity.,datatype:[OBJECT],label:Contact Information,range:{properties:[{description:Sequential entry number.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Name of the contact.,datatype:STRING,label:Name,fmId:.02,id:name,fromVDM:name},{description:Phone, fax, email, etc.\r \rThis field is scheduled for deletion in May 2015.,datatype:STRING,label:*Communication Number,fmId:.03,id:communcationNumber,fromVDM:communication_number},{description:Code describing type of communication number.,datatype:POINTER,label:Communication Qualifier,range:{id:X12_271_Contact_Qualifier-365_021},fmId:.04,id:communicationQualifier,fromVDM:communication_qualifier},{description:Phone, fax, email, URL,datatype:STRING,label:Communication Number,fmId:1,id:communicationNumber,fromVDM:communication_number-2_3226-1}],fmId:2.3226,id:Contact_Information-2_3226,label:Contact Information},fmId:6,id:contactInformation,fromVDM:contact_information},{description:Healthcare services delivery multiple.,datatype:[OBJECT],label:Healthcare Services Delivery,range:{properties:[{description:Sequential entry number.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Numeric value of benefit quantity as qualified by QUANTITY QUALIFIER\rfield.,datatype:NUMERIC,label:Benefit Quantity,fmId:.02,id:benefitQuantity,fromVDM:benefit_quantity},{description:Benefit quantity qualifier.,datatype:POINTER,label:Quantity Qualifier,range:{id:X12_271_Quantity_Qualifier-365_016},fmId:.03,id:quantityQualifier,fromVDM:quantity_qualifier},{description:Sampling frequency in terms of a modulus of the Unit of Measure. Qualified\rby UNITS OF MEASUREMENT field.,datatype:STRING,label:Sample Selection Modulus,fmId:.04,id:sampleSelectionModulus,fromVDM:sample_selection_modulus},{description:Units of measurement for frequency of the benefits.,datatype:POINTER,label:Units Of Measurement,range:{id:X12_271_Units_Of_Measurement-365_029},fmId:.05,id:unitsOfMeasurement,fromVDM:units_of_measurement},{description:Number of time periods as qualified by TIME PERIOD QUALIFIER field.,datatype:NUMERIC,label:Time Periods,fmId:.06,id:timePeriods,fromVDM:time_periods},{description:Code that defines a time period.,datatype:POINTER,label:Time Period Qualifier,range:{id:X12_271_Time_Period_Qualifier-365_015},fmId:.07,id:timePeriodQualifier,fromVDM:time_period_qualifier},{description:Code that defines frequency of deliveries.,datatype:POINTER,label:Delivery Frequency,range:{id:X12_271_Delivery_Frequency_Code-365_025},fmId:.08,id:deliveryFrequency,fromVDM:delivery_frequency},{description:Code that defines pattern of deliveries.,datatype:POINTER,label:Delivery Pattern,range:{id:X12_271_Delivery_Pattern-365_036},fmId:.09,id:deliveryPattern,fromVDM:delivery_pattern}],fmId:2.3227,id:Healthcare_Services_Delivery-2_3227,label:Healthcare Services Delivery},fmId:7,id:healthcareServicesDelivery,fromVDM:healthcare_services_delivery},{description:Subscriber dates multiple.,datatype:[OBJECT],label:Subscriber Dates,range:{properties:[{description:Sequential number of ZSD segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Date or range of dates.,datatype:STRING,label:Date,fmId:.02,id:date,fromVDM:date},{description:Code describing the type of date.,datatype:POINTER,label:Date Qualifier,range:{id:X12_271_Date_Qualifier-365_026},fmId:.03,id:dateQualifier,fromVDM:date_qualifier},{description:Format of the date representation.,datatype:POINTER,label:Date Format,range:{id:X12_271_Date_Format_Qualifier-365_032},fmId:.04,id:dateFormat,fromVDM:date_format}],fmId:2.3228,id:Subscriber_Dates-2_3228,label:Subscriber Dates},fmId:8,id:subscriberDates,fromVDM:subscriber_dates},{description:Additional subscriber information multiple.,datatype:[OBJECT],label:Subscriber Additional Info,range:{properties:[{description:Sequential number of ZII segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Place of service code.,datatype:POINTER,label:Place Of Service,range:{id:Place_Of_Service-353_1},fmId:.02,id:placeOfService,fromVDM:place_of_service},{description:Diagnosis code.,datatype:POINTER,label:Diagnosis,range:{id:Icd_Diagnosis-80},fmId:.03,id:diagnosis,fromVDM:diagnosis},{description:Additional information qualifier.,datatype:POINTER,label:Qualifier,range:{id:X12_271_Code_List_Qualifier-365_044},fmId:.04,id:qualifier,fromVDM:qualifier},{description:Code that represents the nature of the patient injury.,datatype:POINTER,label:Nature Of Injury Code,range:{id:X12_271_Nature_Of_Injury_Codes-365_045},fmId:.05,id:natureOfInjuryCode,fromVDM:nature_of_injury_code},{description:Specifies the situation or category to which the code applies.,datatype:STRING,label:Nature Of Injury Category,fmId:.06,id:natureOfInjuryCategory,fromVDM:nature_of_injury_category},{description:Describes the injured body part or parts.,datatype:STRING,label:Nature Of Injury Text,fmId:.07,id:natureOfInjuryText,fromVDM:nature_of_injury_text}],fmId:2.3229,id:Subscriber_Additional_Info-2_3229,label:Subscriber Additional Info},fmId:9,id:subscriberAdditionalInfo,fromVDM:subscriber_additional_info},{description:Subscriber reference id multiple.,datatype:[OBJECT],label:Subscriber Reference Id,range:{properties:[{description:Sequential number of ZRF segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence,fromVDM:sequence},{description:Reference id value.,datatype:STRING,label:Reference Id,fmId:.02,id:referenceId,fromVDM:reference_id},{description:Code describing the type of reference id.,datatype:POINTER,label:Reference Id Qualifier,range:{id:X12_271_Reference_Identification-365_028},fmId:.03,id:referenceIdQualifier,fromVDM:reference_id_qualifier},{description:Short description of reference id.,datatype:STRING,label:Description,fmId:.04,id:description,fromVDM:description}],fmId:2.32291,id:Subscriber_Reference_Id-2_32291,label:Subscriber Reference Id},fmId:10,id:subscriberReferenceId,fromVDM:subscriber_reference_id},{datatype:[POINTER],label:Service Types,range:{id:X12_271_Service_Type-365_013},fmId:11,id:serviceTypes,fromVDM:service_types}],fmId:2.322,id:Eligibility_Benefit-2_322,label:Eligibility/Benefit} |  | 

## treatmentFactors 

<dl>
<dt>id</dt><dd>treatmentFactors</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| radiationExposure |  | OBJECT |  |  | {id:radiationExposure,properties:[{id:exposureIndicated,description:Enter 'Y' if the veteran was exposed to ionizing radiation 1) at a\rnuclear device testing site (e.g. the Pacific Islands, NM or NV) or\r2) as a POW or while serving in Hiroshima and/or Nagasaki, Japan\rfrom August 6, 1945 through July 1, 1946, or 3) served at\rDepartment of Energy plants at Paducah, KY, Portsmouth, OH or\rthe K25 area at Oak Ridge, TN for at least 250 days before\rFebruary 1, 1992 or 4) served at Longshot, Milrow, or\rCannikin underground nuclear tests at Amchitka Island, AK\rprior to January 1, 1974.  \r \rVeterans exposed by method #3 or #4 are not eligible for \rcopay exemption or enrollment in priority 6 based on their IR exposure.\r \rEnter 'N' if not exposed or 'U' if unknown.\r \rOnce the record has been verified only HEC users \rmay enter/edit this field.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:registrationDate,description:For this veteran applicant who was exposed to ionizing radiation\r(WERE YOU EXPOSED TO RADIATION prompt must be answered YES) enter the\rdate registered.  Once the service record is verified only users who\rhold the designated security key may enter/edit this field.  This field\rcannot be deleted as long as ionizing radiation exposure is\rindicated.,datatype:DATE-TIME},{id:exposureMethod,description:This field represents the method by which the\rexposure to ionizing radiation occurred.,datatype:ENUMERATION,range:{H/N AND ATMOSPHERIC TESTING:4,OTHER:7,HIROSHIMA/NAGASAKI:2,EXPOSURE AT NUCLEAR FACILITY:6,UNDERGROUND NUCLEAR TESTING:5,ATMOSPHERIC NUCLEAR TESTING:3}}]} |  | 
| agentOrangeExposure |  | OBJECT |  |  | {id:agentOrangeExposure,properties:[{id:exposureIndicated,description:For this veteran applicant enter 'Y' if s/he was exposed to the chemical\ragent orange, 'N' if not, or 'U' if unknown.  Exposure cannot be claimed\runless the Period of Service (field .323) is answered VIETNAM ERA, which\rentails those serving in the Korean DMZ between January 1, 1968 and\rDecember 31, 1969 or Vietnam.\r \rOnce the service record has been verified only users who hold the\rdesignated security key may enter/edit this field.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:registrationDate,description:For this veteran applicant who was exposed to agent orange (EXPOSED TO\rAGENT ORANGE prompt must be answered YES) enter the date registered.\rOnce the service record is verified only users who hold the designated\rsecurity key may enter/edit this field.  As long as agent orange\rexposure is indicated this field may not be deleted.,datatype:DATE-TIME},{id:reportedToCo,description:Enter the date on which this patient's claim of exposure to Agent Orange was\rinitially reported to VA Central Office.,datatype:DATE-TIME},{id:examDate,description:For this veteran applicant who was exposed to agent orange (EXPOSED TO\rAGENT ORANGE prompt must be answered YES) enter the date s/he was examined\rfor this exposure, if any.  Once the service record is verified only\rusers who hold the designated security key may enter/edit this\rfield.  As long as agent orange exposure is indicated this field\rmay not be deleted.,datatype:DATE-TIME},{id:registrationNumber,description:For this veteran applicant who was exposed to agent orange (EXPOSED TO\rAGENT ORANGE prompt must be answered YES) enter the registration number\rassigned [a number between 1-999999].  Once the service record has been\rverified only users who hold the designated security key may\renter/edit this field.  This field cannot be deleted as long as\ragent orange exposure is indicated.,datatype:NUMERIC},{id:exposureLocation,description:For this veteran applicant who was exposed to agent orange (EXPOSED TO\rAGENT ORANGE prompt must be answered YES) enter the location where the\rexposure occurred.  Once the service record has been verified only users\rwho hold the designated security key may enter/edit this field.  This\rfield cannot be deleted as long as agent orange exposure is indicated.,datatype:ENUMERATION,range:{VIETNAM:V,OTHER:O,KOREAN DMZ:K}}]} |  | 
| southwestAsianConditions |  | OBJECT |  |  | {id:southwestAsianConditions,properties:[{description:Enter \Y\ if veteran claims need for care of conditions related to\rservice in SW Asia. Enter \N\ if veteran did not serve in SW Asia or\rdoes not claim need for care of conditions related to service in SW\rAsia. Enter \U\ when veteran served in SW Asia, but is unsure of\rwhether conditions may be related to that service. SW Asia Theater\rof operations is defined as: Iraq, Kuwait, Saudi Arabia, the neutral\rzone between Iraq and Saudi Arabia, Bahrain, Qatar, the United Arab\rEmirates, Oman, the Gulf of Aden, the Gulf of Oman, the Persian Gulf,\rthe Arabian Sea, the Red Sea, and the airspace above these locations.,datatype:ENUMERATION,label:Southwest Asia Conditions?,range:{UNKNOWN:U,YES:Y,NO:N},fmId:.322013,id:exposureIndicated},{description:This is the date on which the patient registered for being exposed to\rConditions related to service in SW Asia. This date must be after\r8/1/1990.,datatype:DATE-TIME,label:Sw Asia Cond Registration Date,fmId:.322014,id:registrationDate},{description:This is the date on which an examination for exposure to Conditions \rrelated to service in SW Asia was performed on the patient.,datatype:DATE-TIME,label:Sw Asia Cond Exam Date,fmId:.322015,id:examDate}]} |  | 

## militaryService 

<dl>
<dt>id</dt><dd>militaryService</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| periodOfService |  | POINTER |  |  | Period_Of_Service-21 |  | 
| dischargeTypeLast |  | POINTER |  |  | Type_Of_Discharge-25 |  | 
| branchLast |  | POINTER |  |  | Branch_Of_Service-23 |  | 
| entryDateLast |  | DATE-TIME |  |  |  |  | 
| separationDateLast |  | DATE-TIME |  |  |  |  | 
| serviceNumberLast |  | STRING |  |  |  |  | 
| secondEpisode |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| dischargeTypeNtl |  | POINTER |  |  | Type_Of_Discharge-25 |  | 
| branchNtl |  | POINTER |  |  | Branch_Of_Service-23 |  | 
| componentLast |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl>{:/} |  | 
| componentNtl |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl>{:/} |  | 
| componentNntl |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl>{:/} |  | 
| entryDateNtl |  | DATE-TIME |  |  |  |  | 
| separationDateNtl |  | DATE-TIME |  |  |  |  | 
| serviceNumberNtl |  | STRING |  |  |  |  | 
| thirdEpisode |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| dischargeTypeNntl |  | POINTER |  |  | Type_Of_Discharge-25 |  | 
| branchNntl |  | POINTER |  |  | Branch_Of_Service-23 |  | 
| entryDateNntl |  | DATE-TIME |  |  |  |  | 
| separationDateNntl |  | DATE-TIME |  |  |  |  | 
| serviceNumberNntl |  | STRING |  |  |  |  | 
| verificationDate |  | DATE-TIME |  |  |  |  | 
| filipinoVeteranProof |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>NO</dt><dd>NO PROOF</dd><dt>BA</dt><dd>REPORT OF BIRTH ABROAD OF US CITIZEN</dd><dt>BC</dt><dd>US BIRTH CERTIFICATE</dd><dt>PR</dt><dd>VERIFICATION OF PERMANENT RESIDENCY</dd><dt>VA</dt><dd>VA COMPENSATION AT FULL DOLLAR RATE</dd><dt>PP</dt><dd>US PASSPORT</dd><dt>NA</dt><dd>VERIFICATION OF NATURALIZATION</dd></dl>{:/} |  | 
| serviceOefOrOif |  | [OBJECT] |  |  | {properties:[{description:This is the operation in which the patient was in combat during the\rspecified time period.,datatype:ENUMERATION,required:true,label:Location Of Service,range:{UNKNOWN OEF/OIF:3,OIF:1,OEF:2},indexed:true,fmId:.01,id:locationOfService},{description:If the service indicated is OEF or UNKNOWN OEF/OIF, this date must be on\ror after 9/01/2001 and the end date must be after 9/11/2001.  If the\rservice indicated is OIF, this date must be on or after 3/01/2003 and\rthe end date must be after 3/19/2003.\r \rThe meaning of this date depends on where the information was obtained\rfrom.  If the data came from the VIS, Environmental Medicine or FHIE\rsystems, this is the start date of military pay for the assignment to\rthe OEF/OIF operation.  If it came from any other source, it is the date\rthe patient was actually deployed to the OEF/OIF area.,datatype:DATE-TIME,label:Oef/Oif From Date,fmId:.02,id:oefOifFromDate},{description:If the service indicated is OEF or UNKNOWN OEF/OIF, this date must be on\ror after 9/11/2001. If the service indicated is OIF, this date must be on\ror after 3/19/2003.\r \rThe meaning of this date depends on where the information was obtained\rfrom.  If the data came from the VIS, Environmental Medicine or FHIE\rsystems, this is the military pay end date for the assignment to\rthe OEF/OIF operation.  If it came from any other source, it is the date\rthe patient actually left the OEF/OIF area.,datatype:DATE-TIME,label:Oef/Oif To Date,fmId:.03,id:oefOifToDate},{description:This is a flag that indicates the data is 'locked' at the site and can't\rbe changed or deleted.  This flag is set to 1 if the source of the data\ris the HEC system.,datatype:BOOLEAN,label:Data Locked,range:{false:0,true:1},fmId:.04,id:dataLocked},{description:This is a time stamp for when the data was last added/updated.,datatype:DATE-TIME,label:Recorded Date/Time,fmId:.05,id:recordedDateTime},{description:This is the facility where the data was originally entered.  If the\rdata's source was not from a facility, it will be assumed to be generated\rfrom HEC (CEV) and this field will be blank.,datatype:POINTER,label:Entered By Site,range:{id:Institution-4},fmId:.06,id:enteredBySite}],fmId:2.3215,id:serviceOefOrOifs,label:Service [Oef Or Oif]} |  | 
| militaryServiceEpisode |  | [OBJECT] | military_service_episode |  | {properties:[{description:For this veteran applicant, enter the date s/he commenced this episode of\rmilitary service.  If the military service component is ACTIVATED NATIONAL\rGUARD or ACTIVATED RESERVE, the period entered should be the period of\ractivation, so this date is their first day of active duty for the\repisode. \r                                 \rIf the military service episode has been sent from the Health Eligibility\rCenter (HEC), the data will be locked and cannot be edited or deleted.,datatype:DATE-TIME,required:true,label:Service Entry Date,indexed:true,fmId:.01,id:entryDate},{description:For this veteran applicant, enter the date s/he ended this episode of\rmilitary service. If the military service component is ACTIVATED NATIONAL\rGUARD or ACTIVATED RESERVE, the period entered should be the period of\ractivation, so this date is their last day of active duty for this\repisode.  \r                                 \rIf the military service episode has been sent from the Health Eligibility\rCenter (HEC), the data will be locked and cannot be edited or deleted.,datatype:DATE-TIME,label:Service Separation Date,fmId:.02,id:separationDate},{description:Enter the service branch for this episode of military service.\r                                 \rIf the military service episode has been sent from the Health Eligibility\rCenter (HEC), the data will be locked and cannot be edited or deleted.,datatype:POINTER,label:Service Branch,range:{id:Branch_Of_Service-23},fmId:.03,id:branch},{description:For this veteran applicant, enter the military service component for this\repisode of military service.\r                                                                 \rIf the military service episode has been sent from the Health Eligibility\rCenter (HEC), the data will be locked and cannot be edited or deleted.\r                                 \rNATIONAL GUARD IS ONLY VALID FOR BRANCH OF SERVICE ARMY AND AIR FORCE.,datatype:ENUMERATION,label:Service Component,range:{ACTIVATED RESERVE:V,ACTIVATED NG:G,REGULAR:R},fmId:.04,id:component},{description:Enter the service number for this episode of military service.,datatype:STRING,label:Service Number,fmId:.05,id:number},{description:For this veteran applicant, select from the available list the discharge\rtype which s/he received for this episode of military service.\r                                 \rIf the military service episode has been sent from the Health Eligibility\rCenter (HEC), the data will be locked and cannot be edited or deleted.,datatype:POINTER,label:Service Discharge Type,range:{id:Type_Of_Discharge-25},fmId:.06,id:dischargeType},{description:When a military service episode is sent from HEC, the Data Locked field\rwill be set to '1' (YES).  The data in the military service episode can no\rlonger be changed or deleted.,datatype:BOOLEAN,label:Data Locked,range:{false:0,true:1},fmId:.07,id:dataLocked}],fmId:2.3216,id:militaryServiceEpisodes,label:Military Service Episode} |  | 
| vietnamService |  | OBJECT |  |  | {id:vietnamService,properties:[{id:serviceIndicated,description:For this veteran applicant enter 'Y' if s/he actually served in the\rRepublic of Vietnam, 'N' if not, or 'U' if unknown.  Once the service\rrecord has been verified only users who hold the designated security\rkey may enter/edit this field.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:For this veteran applicant who served in the Republic of Vietnam (DID\rYOU SERVE IN VIETNAM prompt must be answered YES) enter the date on which\rservice in vietnam commenced [between February 28, 1961 and May 7, 1975].\rOnce the service record is verified only users who hold the designated\rsecurity key may enter/edit this field.  As long as Vietnam service is\rindicated this date may not be deleted.                                ,datatype:DATE-TIME},{id:toDate,description:For this veteran applicant who served in the Republic of Vietnam (DID\rYOU SERVE IN VIETNAM prompt must be answered YES) enter the date on which\rservice in Vietnam ended [between February 28, 1961 and May 7, 1975]. Once\rthe service record is verified only user who hold the designated security\rkey may enter/edit this field.  As long as Vietnam service is indicated\rthis date may not be deleted.,datatype:DATE-TIME}]} |  | 
| persianGulfService |  | OBJECT |  |  | {id:persianGulfService,properties:[{id:serviceIndicated,description:If this patient served in the Persian Gulf during the war (anytime after\rAugust 2, 1990), enter yes here.  If the patient did not serve in the\rPersian Gulf during this timeframe, enter no.  Enter unknown if this\rinformation could not be obtained from the patient.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:If this patient served in the Persian Gulf during the war (PERSIAN\rGULF SERVICE? is answered YES), respond with the date the patient\rbegan serving there.  The date must be on or after August 2, 1990.,datatype:DATE-TIME},{id:toDate,description:If this patient served in the Persian Gulf during the war, enter the date\rthe patient's service in that region ended.  The date must be after the\rdate selected as PERSIAN GULF FROM DATE which must be on or after August\r2, 1990.,datatype:DATE-TIME}]} |  | 
| somaliaService |  | OBJECT |  |  | {id:somaliaService,properties:[{id:serviceIndicated,description:If this patient served in the Somalia, enter yes here.  If the patient \rdid not serve in Somalia, enter no. Enter unknown if this information \rcould not be obtained from the patient.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:If this patient served in Somalia (SOMALIA SERVICE INDICATED? is \ranswered YES), enter the date this patient's service in Somalia\rbegan.  This date must be on or after September 28, 1992.,datatype:DATE-TIME},{id:toDate,description:This is the last date of service in Somalia.  This date must be on or \rafter September 28, 1992.,datatype:DATE-TIME}]} |  | 
| yugoslaviaService |  | OBJECT |  |  | {id:yugoslaviaService,properties:[{id:serviceIndicated,description:Field stores code indicating if patient served in the Yugolslavia Conflict.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:Enter the date that service in the Yugoslavia Conflict began for this\rpatient.  Earliest possible date is 6/22/1992.,datatype:DATE-TIME},{id:toDate,description:The date service in the Yugoslavia Conflict ended for this patient.,datatype:DATE-TIME}]} |  | 
| lebanonService |  | OBJECT |  |  | {id:lebanonService,properties:[{id:serviceIndicated,description:Did this patient serve in Lebanon between the dates of August 23, 1982\rand February 26, 1984?,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:For this veteran applicant who served in Lebanon, enter the date which\rthe applicant's service in Lebanon began.  The date must be on or after\rOctober 1, 1983.\r.,datatype:DATE-TIME},{id:toDate,description:For this patient, enter the date the patient's service in Lebanon ended.\rThe 'LEBANON SERVICE INDICATED?' field must be answered yes and the date\rin this field must be after October 1, 1983.,datatype:DATE-TIME}]} |  | 
| grenadaService |  | OBJECT |  |  | {id:grenadaService,properties:[{id:serviceIndicated,description:Enter yes if this patient served in Grenada between the dates of October\r23, 1983 and November 21, 1983.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:Enter the date which this patient began service in Grenada.  The\r'GRENADA SERVICE INDICATED?' field must be answered YES and the date\rentered here must be between October 23, 1983 and November 21, 1983.,datatype:DATE-TIME},{id:toDate,description:Enter the date which this patient's service in Grenada ended.  The\r'GRENADA SERVICE INDICATED?' field must be yes and this date must be\rbetween October 23, 1983 and November 21, 1983.,datatype:DATE-TIME}]} |  | 
| panamaService |  | OBJECT |  |  | {id:panamaService,properties:[{id:serviceIndicated,description:Respond yes if this patient served in Panama between the dates of\rDecember 20, 1989 and January 31, 1990.  Enter no if the patient did not\rserve in Panama during this timeframe.  Otherwise, enter unknown if this\rinformation could not be obtained from the patient.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:fromDate,description:If this patient served in Panama (PANAMA SERVICE INDICATED? is answered\rYES), enter the date this patient's service in Panama began.  The date\rmust be between December 20, 1989 and January 31, 1990.,datatype:DATE-TIME},{id:toDate,description:If this patient served during the conflict in Panama (PANAMA SERVICE\rINDICATED? is YES), enter the date the patient's service there ended.\rThe date must be between December 20, 1989 and January 31, 1990.,datatype:DATE-TIME}]} |  | 
| powStatus |  | OBJECT |  |  | {id:powStatus,properties:[{id:statusIndicated,description:For this veteran applicant enter 'Y' if s/he was confined as a prisoner\rof war, 'N' if not, or 'U' if unknown.  Once the POW Status is verified \rby the HEC, it is no longer editable.,datatype:ENUMERATION,range:{UNKNOWN:U,YES:Y,NO:N}},{id:confinementLocation,description:For this veteran applicant who was confined as a prisoner of war\r(WERE YOU A PRISONER OF WAR prompt must be answered YES) enter the\rwar during which confined.  Once the service record is verified only\rthose users who hold the designated security key may enter/edit this\rfield.  This field cannot be deleted as long as applicant is\ridentified as a former POW.,datatype:POINTER,range:{id:Pow_Period-22}},{id:fromDate,description:For this veteran applicant who was confined as a prisoner of war\r(WERE YOU A PRISONER OF WAR prompt must be answered YES) enter the\rdate on which confinement commenced.  Once\rthe service record is verified only those users who hold the designated\rsecurity key may enter/edit this field.  This field cannot be\rdeleted as long as applicant is identified as a former POW.,datatype:DATE-TIME},{id:toDate,description:For this veteran applicant who was confined as a prisoner of war\r(WERE YOU A PRISONER OF WAR prompt must be answered YES) enter the\rdate on which confinement ended.  Once the\rservice record is verified only those users who hold the designated\rsecurity key may enter/edit this field.  This field cannot be\rdeleted as long as applicant is identified as a former POW.,datatype:DATE-TIME},{id:statusVerified,description:This field contains the date/time that the POW status was received\rfrom HEC.  Once the POW status has been received from HEC, it can\rno longer be edited by the site.,datatype:DATE-TIME}]} |  | 
| combatService |  | OBJECT |  |  | {id:combatService,properties:[{id:serviceIndicated,description:For this veteran applicant enter 'Y' if s/he served in a combat\rzone, or 'N' if not.  Once the service record is verified only\rusers who hold the designated security key may enter/edit this\rfield.,datatype:BOOLEAN,range:{false:N,true:Y}},{id:serviceLocation,description:For this veteran applicant who served in a combat zone (IN COMBAT\rprompt must be answered YES) enter the zone in which s/he\rserved.  Once the service record is verified only those users\rwho hold the designated security key may enter/edit this field.\rThis field cannot be deleted as long as combat service is\rindicated.,datatype:POINTER,range:{id:Pow_Period-22}},{id:fromDate,description:For this veteran who served in a combat zone (IN COMBAT prompt\rmust be answered YES) enter the date on which combat service\rcommenced.  Once the service record is\rverified only those users who hold the designated security key\rmay enter/edit this field.  This field cannot be deleted as long\ras combat service is indicated.,datatype:DATE-TIME},{id:toDate,description:For this veteran who served in a combat zone (IN COMBAT prompt must\rbe answered YES) enter the date on which combat service ended.\rOnce the service record is verified\ronly those users who hold the designated security key may\renter/edit this field.  This field cannot be deleted as long as\rcombat service is indicated.,datatype:DATE-TIME},{id:combatVeteranEndDate,description:This field represents the last day for combat vet eligibility. This field \rwill only be populated by cross-reference when the veteran's combat vet \religibility has been determined. This value will remain after the combat \rvet eligibility period has expired.,datatype:DATE-TIME},{id:cvDateEdited,description:The CV DATE EDITED field will be stuffed with the current date \rwhenever the COMBAT VET END DATE field (.5295) is changed.,datatype:DATE-TIME}]} |  | 
| purpleHeartStatus |  | OBJECT |  |  | {id:combatService,properties:[{id:statusIndicated,description:This field can be entered by the local site if currently null.  Subsequent\rediting can be done only by the HEC.  A response of 'Yes' can be entered \ronly if the patient is a veteran,,datatype:BOOLEAN,range:{false:N,true:Y}},{id:currentStatus,description:This field cannot be edited locally.  If Current Purple Heart Indicator is\rset to 'Yes' by the local site, a Current Purple Heart Status of 'Pending'\rwill be stuffed into the field.  Other editing or updating is done by the\rHEC.,datatype:ENUMERATION,range:{CONFIRMED:3,IN PROCESS:2,PENDING:1}},{id:currentRemarks,description:This field cannot be edited locally.  If Current Purple Heart Indicator\risset to 'No' by the local site, a Current Purple Heart Remarks of 'VAMC'\rwill be stuffed into the field.  Other editing or updating is done by the\rHEC.,datatype:ENUMERATION,range:{UNDELIVERABLE MAIL:6,VAMC:5,ENTERED IN ERROR:3,UNACCEPTABLE DOCUMENTATION:1,NO DOCUMENTATION REC'D:2,UNSUPPORTED PURPLE HEART:4}},{id:division,description:When site enters a value for CURRENT PH Indicator, a prompt\rfor PH Division will appear.  This field will point to the\rINSTITUTION file (#4), and will hold the division where the\rPH request was initiated.,datatype:POINTER,range:{id:Institution-4}}]} |  | 
| purpleHeartDateTimeUpdated |  | [OBJECT] |  |  | {properties:[{description:This field is automatically stuffed with the current date and time\rwhenever the Purple Heart data is updated.  This may be done initially by\rthe local site, then subsequently by HEC.,datatype:DATE-TIME,required:true,label:Ph Date/Time Updated,indexed:true,fmId:.01,id:phDateTimeUpdated},{description:Field will be stuffed with the CURRENT PURPLE HEART INDICATOR at the\rdate/time of the update.,datatype:BOOLEAN,label:Ph?,range:{false:N,true:Y},fmId:1,id:ph},{description:Field will be stuffed with CURRENT PURPLE HEART STATUS (if any) at\rdate/time of the update.,datatype:ENUMERATION,label:Ph Status,range:{CONFIRMED:3,IN PROCESS:2,PENDING:1},fmId:2,id:phStatus},{description:Field will be stuffed with CURRENT PURPLE HEART REMARKS field, if any, at\rtime of update.,datatype:ENUMERATION,label:Ph Remarks,range:{UNDELIVERABLE MAIL:6,VAMC:5,ENTERED IN ERROR:3,UNACCEPTABLE DOCUMENTATION:1,NO DOCUMENTATION REC'D:2,UNSUPPORTED PURPLE HEART:4},fmId:3,id:phRemarks},{description:Field will be stuffed with the user who updated PH information.  If\rlocal user, then the value will be the free text user name from the\rNEW PERSON file.  If updated by the HEC, then the value will be \r\HEC User\.,datatype:STRING,label:Ph User,fmId:4,id:phUser}],fmId:2.0534,id:phDateTimeUpdated,label:Ph Date/Time Updated} |  | 

## dateOfDentalTreatment 

<dl>
<dt>id</dt><dd>dateOfDentalTreatment</dd>
<dt>label</dt><dd>Date Of Dental Treatment</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateOfDentalTreatment | Date Of Dental Treatment | DATE-TIME | date_of_dental_treatment |  |  | REQUIRED | 
| condition | Condition | STRING | condition |  |  |  | 
| dateConditionFirstNoticed | Date Condition First Noticed | DATE-TIME | date_condition_first_noticed |  |  |  | 

## ratedDisabilities 

<dl>
<dt>id</dt><dd>ratedDisabilities</dd>
<dt>label</dt><dd>Rated Disabilities (Va)</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| ratedDisabilitiesVa | Rated Disabilities (Va) | POINTER | rated_disabilities_va |  | Disability_Condition-31 | REQUIRED | 
| disability | Disability % | NUMERIC | disability_ |  |  |  | 
| serviceConncted | Service Connected | BOOLEAN | service_connected |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| extremityEffected | Extremity Affected | ENUMERATION | extremity_affected |  | {::nomarkdown}<dl><dt>RU</dt><dd>RIGHT UPPER</dd><dt>LL</dt><dd>LEFT LOWER</dd><dt>BL</dt><dd>BOTH LOWER</dd><dt>LU</dt><dd>LEFT UPPER</dd><dt>RL</dt><dd>RIGHT LOWER</dd><dt>BU</dt><dd>BOTH UPPER</dd></dl>{:/} |  | 
| originalEffectiveDate | Original Effective Date | DATE-TIME | original_effective_date |  |  |  | 
| currentEffectiveDate | Current Effective Date | DATE-TIME | current_effective_date |  |  |  | 

## serviceConnectedConditions 

<dl>
<dt>id</dt><dd>serviceConnectedConditions</dd>
<dt>label</dt><dd>Service Connected Conditions</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| serviceConnectedConditions | Service Connected Conditions | STRING | service_connected_conditions |  |  | REQUIRED | 
| percentage | Percentage | NUMERIC | percentage |  |  |  | 

## cdStatusProcedures 

<dl>
<dt>id</dt><dd>cdStatusProcedures</dd>
<dt>label</dt><dd>Cd Status Procedures</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cdStatusProcedures | Cd Status Procedures | POINTER | cd_status_procedures |  | Catastrophic_Disability_Reasons-27_17 | REQUIRED, INDEXED | 
| affectedExtremity | Affected Extremity | ENUMERATION | affected_extremity |  | {::nomarkdown}<dl><dt>RLE</dt><dd>Right Lower Extremity</dd><dt>BLE</dt><dd>Bilateral Lower Extremity</dd><dt>LLE</dt><dd>Left Lower Extremity</dd><dt>LUE</dt><dd>Left Upper Extremity</dd><dt>BUE</dt><dd>Bilateral Upper Extremity</dd><dt>RUE</dt><dd>Right Upper Extremity</dd></dl>{:/} |  | 

## cdStatusConditions 

<dl>
<dt>id</dt><dd>cdStatusConditions</dd>
<dt>label</dt><dd>Cd Status Conditions</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cdStatusConditions | Cd Status Conditions | POINTER | cd_status_conditions |  | Catastrophic_Disability_Reasons-27_17 | REQUIRED, INDEXED | 
| score | Score | NUMERIC | score |  |  |  | 
| permanentIndicator | Permanent Indicator | ENUMERATION | permanent_indicator |  | {::nomarkdown}<dl><dt>3</dt><dd>UNKNOWN</dd><dt>1</dt><dd>PERMANENT</dd><dt>2</dt><dd>NOT PERMANENT</dd></dl>{:/} |  | 

## cdHistoryDate 

<dl>
<dt>id</dt><dd>cdHistoryDate</dd>
<dt>label</dt><dd>Cd History Date</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cdHistoryDate | Cd History Date | DATE-TIME | cd_history_date |  |  | REQUIRED, INDEXED | 
| veteranCatastrophicallyDisabled | Veteran Catastrophically Disabled? | BOOLEAN | veteran_catastrophically_disabled |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| decidedBy | Decided By | STRING | decided_by |  |  |  | 
| dateOfDecision | Date Of Decision | DATE-TIME | date_of_decision |  |  |  | 
| facilityMakingDetermination | Facility Making Determination | POINTER | facility_making_determination |  | Institution-4 |  | 
| reviewDate | Review Date | DATE-TIME | review_date |  |  |  | 
| methodOfDetermination | Method Of Determination | ENUMERATION | method_of_determination |  | {::nomarkdown}<dl><dt>1</dt><dd>AUTOMATED RECORD REVIEW</dd><dt>3</dt><dd>PHYSICAL EXAMINATION</dd><dt>2</dt><dd>MEDICAL RECORD REVIEW</dd></dl>{:/} |  | 
| dateVeteranRequestedCdEval | Date Veteran Requested Cd Eval | DATE-TIME | date_veteran_requested_cd_eval |  |  |  | 
| dateFacilityInitiatedReview | Date Facility Initiated Review | DATE-TIME | date_facility_initiated_review |  |  |  | 
| dateVeteranWasNotified | Date Veteran Was Notified | DATE-TIME | date_veteran_was_notified |  |  |  | 
| cdReason | Cd Reason | [OBJECT] | cd_reason |  | {properties:[{description:This sub-field will contain pointers to the CD REASONS file (#27.17),\ras well as the supporting data stored in the CD STATUS DIAGNOSES (#.396),\rPROCEDURES (#.397) and CONDITIONS (#.398) fields.,datatype:POINTER,required:true,label:Cd Reason,range:{id:Catastrophic_Disability_Reasons-27_17},indexed:true,fmId:.01,id:cdReason,fromVDM:cd_reason},{description:This is the extremity affected by the CD.,datatype:ENUMERATION,label:Affected Extremity,range:{RIGHT LOWER EXTREMITY:RLE,Bilateral Lower Extremity:BLE,LEFT LOWER EXTREMITY:LLE,LEFT UPPER EXTREMITY:LUE,Bilateral Upper Extremity:BLU,RIGHT UPPER EXTREMITY:RUE},fmId:1,id:affectedExtremity,fromVDM:affected_extremity},{description:This field stores a historical value for the SCORE subfield (#1) of the\rCD STATUS CONDITIONS field (#.398) of the PATIENT file (#2).,datatype:NUMERIC,label:Score,fmId:2,id:score,fromVDM:score},{description:This subfield stores a historical value of the PERMANENT INDICATOR subfield\r(#2) of the CD STATUS CONDITIONS field (#.398) of the PATIENT file (#2).,datatype:ENUMERATION,label:Permanent Indicator,range:{UNKNOWN:3,PERMANENT:1,NOT PERMANENT:2},fmId:3,id:permanentIndicator,fromVDM:permanent_indicator}],fmId:2.409,id:cdReason,fromVDM:Cd_Reason-2_409,label:Cd Reason} |  | 

## alias 

<dl>
<dt>id</dt><dd>alias</dd>
<dt>label</dt><dd>Alias</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| alias | Alias | STRING | alias |  |  | REQUIRED | 
| aliasSsn | Alias Ssn | STRING | alias_ssn |  |  |  | 
| aliasComponents | Alias Components | POINTER | alias_components |  | Name_Components-20 |  | 

## raceInformation 

<dl>
<dt>id</dt><dd>raceInformation</dd>
<dt>label</dt><dd>Race Information</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| raceInformation | Race Information | POINTER | race_information |  | Race-10 | REQUIRED, INDEXED | 
| methodOfCollection | Method Of Collection | POINTER | method_of_collection |  | Race_And_Ethnicity_Collection_Method-10_3 |  | 

## enrollmentClinic 

<dl>
<dt>id</dt><dd>enrollmentClinic</dd>
<dt>label</dt><dd>Enrollment Clinic</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| enrollmentClinic | Enrollment Clinic | POINTER | enrollment_clinic |  | Hospital_Location-44 | REQUIRED, INDEXED | 
| enrollmentData | Enrollment Data | [OBJECT] | enrollment_data |  | {properties:[{description:Enter the date this patient was initially enrolled in this clinic.,datatype:DATE-TIME,required:true,label:Date Of Enrollment,fmId:.01,id:dateOfEnrollment,fromVDM:date_of_enrollment},{description:Enter O if the patient is being seen by this clinic on an outpatient\rbasis.  Enter A if the patient is being seen for ambulatory care.,datatype:ENUMERATION,label:Opt Or Ac,range:{OPT:O,AC:A},fmId:1,id:optOrAc,fromVDM:opt_or_ac},{description:This field contains the date this patient was discharged from this clinic.,datatype:DATE-TIME,label:Date Of Discharge,fmId:3,id:dateOfDischarge,fromVDM:date_of_discharge},{description:If the patient has been discharged from this clinic, this field contains the\rreason the patient was discharged.  This is a free text field which\rallows up to 80 characters to be entered.,datatype:STRING,label:Reason For Discharge,fmId:4,id:reasonForDischarge,fromVDM:reason_for_discharge},{description:Enter the date on which this patients enrollment in this particular\rclinic was last reviewed.,datatype:DATE-TIME,label:Review Date,fmId:5,id:reviewDate,fromVDM:review_date}],fmId:2.011,id:enrollmentData,fromVDM:Enrollment_Data-2_011,label:Enrollment Data} |  | 
| currentStatus | Current Status | ENUMERATION | current_status |  | {::nomarkdown}<dl><dt>I</dt><dd>INACTIVE</dd></dl>{:/} |  | 

## ethnicityInformation 

<dl>
<dt>id</dt><dd>ethnicityInformation</dd>
<dt>label</dt><dd>Ethnicity Information</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| ethnicityInformation | Ethnicity Information | POINTER | ethnicity_information |  | Ethnicity-10_2 | REQUIRED, INDEXED | 
| methodOfCollection | Method Of Collection | POINTER | method_of_collection |  | Race_And_Ethnicity_Collection_Method-10_3 |  | 

## patientEligibilities 

<dl>
<dt>id</dt><dd>patientEligibilities</dd>
<dt>label</dt><dd>Patient Eligibilities</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| eligibility | Eligibility | POINTER | eligibility |  | Eligibility_Code-8 | REQUIRED, INDEXED | 
| longId | Long Id | STRING | long_id |  |  |  | 
| shortId | Short Id | STRING | short_id |  |  |  | 

## icnHistory 

<dl>
<dt>id</dt><dd>icnHistory</dd>
<dt>label</dt><dd>Icn History</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| icnHistory | Icn History | NUMERIC | icn_history |  |  | REQUIRED | 
| icnChecksum | Icn Checksum | NUMERIC | icn_checksum |  |  |  | 
| cmor | Cmor | POINTER | cmor |  | Institution-4 |  | 
| dateTimeOfChange | Date/Time Of Change | DATE-TIME | date_time_of_change |  |  |  | 

## cmorHistory 

<dl>
<dt>id</dt><dd>cmorHistory</dd>
<dt>label</dt><dd>Cmor History</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cmorHistory | Cmor History | NUMERIC | cmor_history |  |  | REQUIRED | 
| cmorActivityScore | Cmor Activity Score | NUMERIC | cmor_activity_score |  |  |  | 
| cmorScoreCalculationDate | Cmor Score Calculation Date | DATE-TIME | cmor_score_calculation_date |  |  |  | 
| cmorChangeDate | Cmor Change Date | DATE-TIME | cmor_change_date |  |  |  | 

## dispositionLoginDateTime 

<dl>
<dt>id</dt><dd>dispositionLoginDateTime</dd>
<dt>label</dt><dd>Disposition Log-In Date/Time</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| logInDateTime | Log In Date/Time | DATE-TIME | log_in_date_time |  |  | REQUIRED, INDEXED | 
| 1010tRegistration | 10-10T Registration | BOOLEAN | _1010t_registration |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| status | Status | ENUMERATION | status |  | {::nomarkdown}<dl><dt>2</dt><dd>APPLICATION WITHOUT EXAM</dd><dt>0</dt><dd>10/10 VISIT</dd><dt>1</dt><dd>UNSCHEDULED</dd></dl>{:/} |  | 
| type_of_benefit_applied_for | Type Of Benefit Applied For | ENUMERATION |  |  | {::nomarkdown}<dl><dt>3</dt><dd>OUTPATIENT MEDICAL</dd><dt>2</dt><dd>DOMICILIARY</dd><dt>1</dt><dd>HOSPITAL</dd><dt>4</dt><dd>OUTPATIENT DENTAL</dd><dt>5</dt><dd>NURSING HOME CARE</dd></dl>{:/} |  | 
| typeOfCareAppliedFor | Type Of Care Applied For | ENUMERATION | type_of_care_applied_for |  | {::nomarkdown}<dl><dt>3</dt><dd>STERILIZATION</dd><dt>4</dt><dd>PREGNANCY</dd><dt>1</dt><dd>DENTAL</dd><dt>2</dt><dd>PLASTIC SURGERY</dd><dt>5</dt><dd>ALL OTHER</dd></dl>{:/} |  | 
| facilityApplyingTo | Facility Applying To | POINTER | facility_applying_to |  | Medical_Center_Division-40_8 |  | 
| who_entered_10_10 | Who Entered 10/10 | POINTER |  |  | New_Person-200 |  | 
| logOutDateTime | Log Out Date Time | DATE-TIME | log_out_date_time |  |  |  | 
| disposition | Disposition | POINTER | disposition |  | Disposition-37 |  | 
| reasonForLateDisposition | Reason For Late Disposition | POINTER | reason_for_late_disposition |  | Disposition_Late_Reason-30 |  | 
| whoDispositioned | Who Dispositioned | POINTER | who_dispositioned |  | New_Person-200 |  | 
| descriptionOfIncident | Description Of Incident | STRING | description_of_incident |  |  |  | 
| eligibleForMedicaid | *Eligible For Medicaid | BOOLEAN | eligible_for_medicaid |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| registrationEligibilityCode | Registration Eligibility Code | POINTER | registration_eligibility_code |  | Eligibility_Code-8 |  | 
| eligVerifiedAtRegistration | Elig Verified At Registration | BOOLEAN | elig_verified_at_registration |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| scAtRegistration | Sc At Registration | BOOLEAN | sc_at_registration |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| scAtRegistration2_101-16 | Sc% At Registration | NUMERIC | sc_at_registration-2_101-16 |  |  |  | 
| amis420Segment | Amis 420 Segment | POINTER | amis_420_segment |  | Amis_Segment-391_1 |  | 
| outpatientEncounter | Outpatient Encounter | POINTER | outpatient_encounter |  | Outpatient_Encounter-409_68 |  | 
| encounterConversionStatus | Encounter Conversion Status | ENUMERATION | encounter_conversion_status |  | {::nomarkdown}<dl><dt>0</dt><dd>NOT CONVERTED</dd><dt>1</dt><dd>CONVERTED</dd></dl>{:/} |  | 
| needRelatedToOccupation | Need Related To Occupation | ENUMERATION | need_related_to_occupation |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| workmensCompClaimFiled | Workmen'S Comp Claim Filed | BOOLEAN | workmens_comp_claim_filed |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| workmensCompClaimNumber | Workmen'S Comp Claim Number | STRING | workmens_comp_claim_number |  |  |  | 
| needRelatedToAnAccident | Need Related To An Accident | ENUMERATION | need_related_to_an_accident |  | {::nomarkdown}<dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} |  | 
| injuryCausedBy | Injury Caused By | STRING | injury_caused_by |  |  |  | 
| injuringPartiesInsurance | Injuring Parties Insurance | POINTER | injuring_parties_insurance |  | Insurance_Company-36 |  | 
| filedAgainstInjuringParty | Filed Against Injuring Party | BOOLEAN | filed_against_injuring_party |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| attorneysName | Attorney'S Name | STRING | attorneys_name |  |  |  | 
| aaddress1 | A-Address 1 | STRING | aaddress_1 |  |  |  | 
| aaddress2 | A-Address 2 | STRING | aaddress_2 |  |  |  | 
| aaddress3 | A-Address 3 | STRING | aaddress_3 |  |  |  | 
| acity | A-City | STRING | acity |  |  |  | 
| astate | A-State | POINTER | astate |  | State-5 |  | 
| azipCode | A-Zip Code | STRING | azip_code |  |  |  | 
| aphone | A-Phone | STRING | aphone |  |  |  | 
| azip4 | A-Zip+4 | STRING | azip4 |  |  |  | 
| active | Active | ENUMERATION | active |  | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd></dl>{:/} | INDEXED | 
| attorneysNameComponents | Attorney'S Name Components | POINTER | attorneys_name_components |  | Name_Components-20 |  | 
| odsAtRegistration | Ods At Registration? | BOOLEAN | ods_at_registration |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| odsRegistrationEntry | Ods Registration Entry |  | ods_registration_entry-2_101 |  |  |  | 

## appointment 

<dl>
<dt>id</dt><dd>appointment</dd>
<dt>label</dt><dd>Appointment</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| appointmentDateTime | Appointment Date/Time | IEN |  |  |  |  | 
| clinic | Clinic | POINTER | clinic |  | Hospital_Location-44 | REQUIRED | 
| status | Status | ENUMERATION | status |  | {::nomarkdown}<dl><dt>I</dt><dd>INPATIENT APPOINTMENT</dd><dt>NT</dt><dd>NO ACTION TAKEN</dd><dt>N</dt><dd>NO-SHOW</dd><dt>PCA</dt><dd>CANCELLED BY PATIENT & AUTO-REBOOK</dd><dt>NA</dt><dd>NO-SHOW & AUTO RE-BOOK</dd><dt>C</dt><dd>CANCELLED BY CLINIC</dd><dt>CA</dt><dd>CANCELLED BY CLINIC & AUTO RE-BOOK</dd><dt>PC</dt><dd>CANCELLED BY PATIENT</dd></dl>{:/} |  | 
| labDateTime | Lab Date/Time | DATE-TIME | lab_date_time |  |  |  | 
| xrayDateTime | X-Ray Date/Time | DATE-TIME | xray_date_time |  |  |  | 
| ekgDateTime | Ekg Date/Time | DATE-TIME | ekg_date_time |  |  |  | 
| routingSlipPrinted | Routing Slip Printed | BOOLEAN | routing_slip_printed |  | {::nomarkdown}<dl><dt>Y</dt><dd>true</dd></dl>{:/} |  | 
| routingSlipPrintDate | Routing Slip Print Date | DATE-TIME | routing_slip_print_date |  |  |  | 
| purposeOfVisit | Purpose Of Visit | ENUMERATION | purpose_of_visit |  | {::nomarkdown}<dl><dt>2</dt><dd>10-10</dd><dt>4</dt><dd>UNSCHED. VISIT</dd><dt>1</dt><dd>C&P</dd><dt>3</dt><dd>SCHEDULED VISIT</dd></dl>{:/} |  | 
| appointmentType | Appointment Type | POINTER | appointment_type |  | Appointment_Type-409_1 |  | 
| specialSurveyDisposition | Special Survey Disposition | NUMERIC | special_survey_disposition |  |  |  | 
| numberOfCollateralSeen | Number Of Collateral Seen | NUMERIC | number_of_collateral_seen |  |  |  | 
| autorebookedApptDateTime | Auto-Rebooked Appt. Date/Time | DATE-TIME | autorebooked_appt_date_time |  |  |  | 
| collateralVisit | Collateral Visit | BOOLEAN | collateral_visit |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| noshowCancelledBy | No-Show/Cancelled By | POINTER | noshow_cancelled_by |  | New_Person-200 |  | 
| noshowCancelDateTime | No-Show/Cancel Date/Time | DATE-TIME | noshow_cancel_date_time |  |  |  | 
| cancellationReason | Cancellation Reason | POINTER | cancellation_reason |  | Cancellation_Reasons-409_2 |  | 
| cancellationRemarks | Cancellation Remarks | STRING | cancellation_remarks |  |  |  | 
| apptCancelled | Appt. Cancelled | POINTER | appt_cancelled |  | Hospital_Location-44 |  | 
| dataEntryClerk | Data Entry Clerk | POINTER | data_entry_clerk |  | New_Person-200 |  | 
| dateApptMade | Date Appt. Made | DATE-TIME | date_appt_made |  |  |  | 
| outpatientEncounter | Outpatient Encounter | POINTER | outpatient_encounter |  | Outpatient_Encounter-409_68 |  | 
| encounterFormsPrinted | Encounter Forms Printed | BOOLEAN | encounter_forms_printed |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| encounterFormsAsAddons | Encounter Forms As Add-Ons | BOOLEAN | encounter_forms_as_addons |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 
| encounterConversionStatus | Encounter Conversion Status | ENUMERATION | encounter_conversion_status |  | {::nomarkdown}<dl><dt>0</dt><dd>NOT CONVERTED</dd><dt>1</dt><dd>CONVERTED</dd></dl>{:/} |  | 
| appointmentTypeSubcategory | Appointment Type Sub-Category | POINTER | appointment_type_subcategory |  | Sharing_Agreement_SubCategory-35_2 |  | 
| schedulingRequestType | Scheduling Request Type | ENUMERATION | scheduling_request_type |  | {::nomarkdown}<dl><dt>A</dt><dd>AUTO REBOOK</dd><dt>M</dt><dd>MULTIPLE APPT. BOOKING</dd><dt>C</dt><dd>OTHER THAN 'NEXT AVA.' (CLINICIAN REQ.)</dd><dt>N</dt><dd>'NEXT AVAILABLE' APPT.</dd><dt>P</dt><dd>OTHER THAN 'NEXT AVA.' (PATIENT REQ.)</dd><dt>W</dt><dd>WALKIN APPT.</dd><dt>O</dt><dd>OTHER THAN 'NEXT AVA.' APPT.</dd></dl>{:/} |  | 
| nextAvaApptIndicator | Next Ava. Appt. Indicator | ENUMERATION | next_ava_appt_indicator |  | {::nomarkdown}<dl><dt>1</dt><dd>'NEXT AVA.' APPT. INDICATED BY USER</dd><dt>2</dt><dd>'NEXT AVA.' APPT. INDICATED BY CALCULATION</dd><dt>0</dt><dd>NOT INDICATED TO BE A 'NEXT AVA.' APPT.</dd><dt>3</dt><dd>'NEXT AVA.' APPT. INDICATED BY USER & CALCULATION</dd></dl>{:/} |  | 
| desiredDateOfAppointment | Desired Date Of Appointment | DATE-TIME | desired_date_of_appointment |  |  |  | 
| followupVisit | Follow-Up Visit | BOOLEAN | followup_visit |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} |  | 

## archivedData 

<dl>
<dt>id</dt><dd>archivedData</dd>
<dt>label</dt><dd>Archived Data</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dataType | Data Type | ENUMERATION | data_type |  | {::nomarkdown}<dl><dt>SSD</dt><dd>SPECIAL SURVEY DISP</dd><dt>S</dt><dd>APPOINTMENT</dd><dt>DE</dt><dd>CLINIC ENROLLMENT</dd></dl>{:/} | REQUIRED, INDEXED | 
| date_of_archive | Date Of Archive | [OBJECT] |  |  | {properties:[{description:Enter the date/time the archiving utility was run.\r \rThis field is not currently used.  The archiving software was not\rdistributed.,datatype:DATE-TIME,required:true,label:Date Of Archive,fmId:.01,id:dateOfArchive,fromVDM:date_of_archive},{description:Enter the sequential number of the tape on which this archiving data\rwas put.,datatype:STRING,label:Tape #,fmId:1,id:tapeNumber,fromVDM:tape_number},{description:Enter the date the user chose to begin the scheduling archive.,datatype:DATE-TIME,label:Begin Archive Date,fmId:2,id:beginArchiveDate,fromVDM:begin_archive_date},{description:Enter the ending date the user chose for the scheduling archive.,datatype:DATE-TIME,label:End Archive Date,fmId:3,id:endArchiveDate,fromVDM:end_archive_date},{description:The number of records archived.  This is created automatically by the\rsoftware.\r \rThis software has not been released and this field is not presently\rused in DHCP.,datatype:NUMERIC,label:Number Of Records Archived,fmId:4,id:numberOfRecordsArchived,fromVDM:number_of_records_archived}],fmId:2.13,id:dateOfArchive,fromVDM:Date_Of_Archive-2_13,label:Date Of Archive} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on March 7th 2017, 7:35:58 am</p>{:/}