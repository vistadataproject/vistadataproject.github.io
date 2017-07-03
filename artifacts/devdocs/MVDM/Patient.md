---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; Patient
# Patient
No Description

<dl>
<dt>File Type</dt><dd>2</dd>
<dt>Base VDM Class</dt><dd>Patient-2</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Patient-2: <pre><code>DESCRIBE $ID</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 2</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code></code></pre></dd>
</dl>


### Property Summary

Property Count: **190**

Sub-Object Count: **65**

Type | Count
--- | ---
STRING | 24
ENUMERATION | 27
DATE | 2
POINTER | 42
BOOLEAN | 25
NUMERIC | 15
OBJECT | 27
DATE-TIME | 27
UNKNOWN | 1

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | name |  |  | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | ENUMERATION | sex |  |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Self Identified Gender**{::nomarkdown}<pre><code>  selfIdentifiedGender</code></pre>{:/} | ENUMERATION | self_identified_gender |  |  | {::nomarkdown}Transmale/Transman/Female-to-Male: <em><strong>TM</strong></em><br/>Transfemale/Transwoman/Male-to-Female: <em><strong>TF</strong></em><br/>individual chooses not to answer: <em><strong>N</strong></em><br/>Other: <em><strong>O</strong></em><br/>Female: <em><strong>F</strong></em><br/>Male: <em><strong>M</strong></em>{:/}
**Date Of Birth**{::nomarkdown}<pre><code>  dateOfBirth</code></pre>{:/} | DATE | date_of_birth |  |  | 
**Marital Status**{::nomarkdown}<pre><code>  maritalStatus</code></pre>{:/} | POINTER | marital_status |  |  | Marital_Status-11
**Race**{::nomarkdown}<pre><code>  race</code></pre>{:/} | POINTER | race |  |  | Race-10
**Occupation**{::nomarkdown}<pre><code>  occupation</code></pre>{:/} | STRING | occupation |  |  | 
**Religious Preference**{::nomarkdown}<pre><code>  religiousPreference</code></pre>{:/} | POINTER | religious_preference |  |  | Religion-13
**Duplicate Status**{::nomarkdown}<pre><code>  duplicateStatus</code></pre>{:/} | ENUMERATION | duplicate_status |  |  | {::nomarkdown}CHECK DUPLICATE RECORDS FILE: <em><strong>1</strong></em><br/>NO UNRESOLVED DUPLICATES: <em><strong>0</strong></em>{:/}
**Patient Merged To**{::nomarkdown}<pre><code>  patientMergedTo</code></pre>{:/} | POINTER | patient_merged_to |  |  | [Patient-2](../VDM/Patient-2)
**Is Check For Duplicate**{::nomarkdown}<pre><code>  isCheckForDuplicate</code></pre>{:/} | BOOLEAN | check_for_duplicate |  |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Social Security Number**{::nomarkdown}<pre><code>  socialSecurityNumber</code></pre>{:/} | STRING | social_security_number |  |  | 
**Pseudo Ssn Reason**{::nomarkdown}<pre><code>  pseudoSsnReason</code></pre>{:/} | ENUMERATION | pseudo_ssn_reason |  |  | {::nomarkdown}NO SSN ASSIGNED: <em><strong>N</strong></em><br/>SSN UNKNOWN/FOLLOW-UP REQUIRED: <em><strong>S</strong></em><br/>REFUSED TO PROVIDE: <em><strong>R</strong></em>{:/}
**Ssn Verification Status**{::nomarkdown}<pre><code>  ssnVerificationStatus</code></pre>{:/} | ENUMERATION | ssn_verification_status |  |  | {::nomarkdown}VERIFIED: <em><strong>4</strong></em><br/>INVALID: <em><strong>2</strong></em>{:/}
**Remarks**{::nomarkdown}<pre><code>  remarks</code></pre>{:/} | STRING | remarks |  |  | 
**Place Of Birth City**{::nomarkdown}<pre><code>  placeOfBirthCity</code></pre>{:/} | STRING | place_of_birth_city |  |  | 
**Place Of Birth State**{::nomarkdown}<pre><code>  placeOfBirthState</code></pre>{:/} | POINTER | place_of_birth_state |  |  | State-5
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | who_entered_patient |  |  | [New_Person-200](../VDM/New_Person-200)
**Entered Date**{::nomarkdown}<pre><code>  enteredDate</code></pre>{:/} | DATE | date_entered_into_file |  |  | 
**Entered Patient Method**{::nomarkdown}<pre><code>  enteredPatientMethod</code></pre>{:/} | ENUMERATION | how_was_patient_entered |  |  | {::nomarkdown}10-10T REGISTRATION: <em><strong>1</strong></em>{:/}
**Ward Location**{::nomarkdown}<pre><code>  wardLocation</code></pre>{:/} | STRING | ward_location |  |  | 
**Roombed**{::nomarkdown}<pre><code>  roombed</code></pre>{:/} | STRING | roombed |  |  | 
**Current Movement**{::nomarkdown}<pre><code>  currentMovement</code></pre>{:/} | POINTER | current_movement |  |  | [Patient_Movement-405](../VDM/Patient_Movement-405)
**Treating Specialty**{::nomarkdown}<pre><code>  treatingSpecialty</code></pre>{:/} | POINTER | treating_specialty |  |  | [Facility_Treating_Specialty-45_7](../VDM/Facility_Treating_Specialty-45_7)
**Provider**{::nomarkdown}<pre><code>  provider</code></pre>{:/} | POINTER | provider |  |  | [New_Person-200](../VDM/New_Person-200)
**Attending Physician**{::nomarkdown}<pre><code>  attendingPhysician</code></pre>{:/} | POINTER | attending_physician |  |  | [New_Person-200](../VDM/New_Person-200)
**Current Admission**{::nomarkdown}<pre><code>  currentAdmission</code></pre>{:/} | POINTER | current_admission |  |  | [Patient_Movement-405](../VDM/Patient_Movement-405)
**Last Dmms Episode Number**{::nomarkdown}<pre><code>  lastDmmsEpisodeNumber</code></pre>{:/} | NUMERIC | last_dmms_episode_number |  |  | 
**Lodger Ward Location**{::nomarkdown}<pre><code>  lodgerWardLocation</code></pre>{:/} | STRING | lodger_ward_location |  |  | 
**Current Room**{::nomarkdown}<pre><code>  currentRoom</code></pre>{:/} | POINTER | current_room |  |  | RoomBed-405_4
**Exclude From Facility Dir**{::nomarkdown}<pre><code>  excludeFromFacilityDir</code></pre>{:/} | BOOLEAN | exclude_from_facility_dir |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Permanent Address**{::nomarkdown}<pre><code>  permanentAddress</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [permanentAddress](#permanentAddress)
**Temporary Address**{::nomarkdown}<pre><code>  temporaryAddress</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [temporaryAddress](#temporaryAddress)
**Patient Contact**{::nomarkdown}<pre><code>  patientContact</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [patientContact](#patientContact)
**Current Means Test Status**{::nomarkdown}<pre><code>  currentMeansTestStatus</code></pre>{:/} | POINTER | current_means_test_status |  |  | Means_Test_Status-408_32
**Confidential Address**{::nomarkdown}<pre><code>  confidentialAddress</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [confidentialAddress](#confidentialAddress)
**Ineligibility**{::nomarkdown}<pre><code>  ineligibility</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [ineligibility](#ineligibility)
**Fee Hospital Id**{::nomarkdown}<pre><code>  feeHospitalId</code></pre>{:/} | ENUMERATION | fee_hospital_id |  |  | {::nomarkdown}CANCELLED: <em><strong>C</strong></em><br/>ISSUED: <em><strong>I</strong></em>{:/}
**Emergency Response Indicator**{::nomarkdown}<pre><code>  emergencyResponseIndicator</code></pre>{:/} | ENUMERATION | emergency_response_indicator |  |  | {::nomarkdown}HURRICANE KATRINA: <em><strong>K</strong></em>{:/}
**Fathers Name**{::nomarkdown}<pre><code>  fathersName</code></pre>{:/} | STRING | fathers_name |  |  | 
**Mothers Name**{::nomarkdown}<pre><code>  mothersName</code></pre>{:/} | STRING | mothers_name |  |  | 
**Mothers Maiden Name**{::nomarkdown}<pre><code>  mothersMaidenName</code></pre>{:/} | STRING | mothers_maiden_name |  |  | 
**Rated Incompetent**{::nomarkdown}<pre><code>  ratedIncompetent</code></pre>{:/} | BOOLEAN | rated_incompetent |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Date Ruled Incompetent By VA**{::nomarkdown}<pre><code>  dateRuledIncompetentByVA</code></pre>{:/} | DATE-TIME | date_ruled_incompetent_va |  |  | 
**Date Ruled Incompetent By Civil**{::nomarkdown}<pre><code>  dateRuledIncompetentByCivil</code></pre>{:/} | DATE-TIME | date_ruled_incompetent_civil |  |  | 
**Contacts**{::nomarkdown}<pre><code>  contacts</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [contacts](#contacts)
**Service Connected**{::nomarkdown}<pre><code>  serviceConnected</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [serviceConnected](#serviceConnected)
**Claim**{::nomarkdown}<pre><code>  claim</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [claim](#claim)
**Insurance Type**{::nomarkdown}<pre><code>  insuranceType</code></pre>{:/} | OBJECT | insurance_type |  |  | [insuranceType](#insuranceType)
**Treatment Factors**{::nomarkdown}<pre><code>  treatmentFactors</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [treatmentFactors](#treatmentFactors)
**Military Service**{::nomarkdown}<pre><code>  militaryService</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [militaryService](#militaryService)
**Proj 112 Shad**{::nomarkdown}<pre><code>  proj112Shad</code></pre>{:/} | BOOLEAN | proj_112_shad |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Date Of Death**{::nomarkdown}<pre><code>  dateOfDeath</code></pre>{:/} | DATE-TIME | date_of_death |  |  | 
**Death Entered By**{::nomarkdown}<pre><code>  deathEnteredBy</code></pre>{:/} | POINTER | death_entered_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Source Of Notification**{::nomarkdown}<pre><code>  sourceOfNotification</code></pre>{:/} | ENUMERATION | source_of_notification |  |  | {::nomarkdown}VBA: <em><strong>4</strong></em><br/>INPATIENT AT VAMC: <em><strong>1</strong></em><br/>NON-VA MEDICAL FACILITY: <em><strong>2</strong></em><br/>OTHER: <em><strong>9</strong></em><br/>NEXT OF KIN/FAMILY/FRIEND: <em><strong>8</strong></em><br/>VA INSURANCE: <em><strong>5</strong></em><br/>NCA: <em><strong>7</strong></em><br/>SSA: <em><strong>6</strong></em><br/>DEATH CERTIFICATE ON FILE: <em><strong>3</strong></em>{:/}
**Date Of Death Last Updated**{::nomarkdown}<pre><code>  dateOfDeathLastUpdated</code></pre>{:/} | DATE-TIME | date_of_death_last_updated |  |  | 
**Last Edited By**{::nomarkdown}<pre><code>  lastEditedBy</code></pre>{:/} | POINTER | last_edited_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Collateral Sponsors Name**{::nomarkdown}<pre><code>  collateralSponsorsName</code></pre>{:/} | POINTER | collateral_sponsors_name |  |  | [Patient-2](../VDM/Patient-2)
**Military Disability Retirement**{::nomarkdown}<pre><code>  militaryDisabilityRetirement</code></pre>{:/} | BOOLEAN | military_disability_retirement |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Discharge Due To Disability**{::nomarkdown}<pre><code>  dischargeDueToDisability</code></pre>{:/} | BOOLEAN | discharge_due_to_disability |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Primary Eligibility Code**{::nomarkdown}<pre><code>  primaryEligibilityCode</code></pre>{:/} | POINTER | primary_eligibility_code |  |  | [Eligibility_Code-8](../VDM/Eligibility_Code-8)
**Eligibility Status**{::nomarkdown}<pre><code>  eligibilityStatus</code></pre>{:/} | ENUMERATION | eligibility_status |  |  | {::nomarkdown}PENDING VERIFICATION: <em><strong>P</strong></em><br/>PENDING RE-VERIFICATION: <em><strong>R</strong></em><br/>VERIFIED: <em><strong>V</strong></em>{:/}
**Eligibility Status Date**{::nomarkdown}<pre><code>  eligibilityStatusDate</code></pre>{:/} | DATE-TIME | eligibility_status_date |  |  | 
**Eligibility Verif Source**{::nomarkdown}<pre><code>  eligibilityVerifSource</code></pre>{:/} | ENUMERATION | eligibility_verif_source |  |  | {::nomarkdown}VISTA: <em><strong>V</strong></em><br/>HEC: <em><strong>H</strong></em>{:/}
**Eligibility Interim Response**{::nomarkdown}<pre><code>  eligibilityInterimResponse</code></pre>{:/} | DATE-TIME | eligibility_interim_response |  |  | 
**Eligibility Verif Method**{::nomarkdown}<pre><code>  eligibilityVerifMethod</code></pre>{:/} | STRING | eligibility_verif_method |  |  | 
**Eligibility Status Entered By**{::nomarkdown}<pre><code>  eligibilityStatusEnteredBy</code></pre>{:/} | POINTER | eligibility_status_entered_by |  |  | [New_Person-200](../VDM/New_Person-200)
**User Enrollee Valid Through**{::nomarkdown}<pre><code>  userEnrolleeValidThrough</code></pre>{:/} | DATE-TIME | user_enrollee_valid_through |  |  | 
**User Enrollee Site**{::nomarkdown}<pre><code>  userEnrolleeSite</code></pre>{:/} | POINTER | user_enrollee_site |  |  | [Institution-4](../VDM/Institution-4)
**Disability Ret From Military**{::nomarkdown}<pre><code>  disabilityRetFromMilitary</code></pre>{:/} | ENUMERATION | disability_ret_from_military |  |  | {::nomarkdown}YES, RECEIVING MILITARY RETIREMENT IN LIEU OF VA COMPENSATION: <em><strong>2</strong></em><br/>YES, RECEIVING MILITARY RETIREMENT: <em><strong>1</strong></em><br/>UNKNOWN: <em><strong>3</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Receiving Aa Benefits**{::nomarkdown}<pre><code>  receivingAaBenefits</code></pre>{:/} | ENUMERATION | receiving_aa_benefits |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Aid Attendance**{::nomarkdown}<pre><code>  amountOfAidAttendance</code></pre>{:/} | NUMERIC | amount_of_aid__attendance |  |  | 
**Receiving Housebound Benefits**{::nomarkdown}<pre><code>  receivingHouseboundBenefits</code></pre>{:/} | ENUMERATION | receiving_housebound_benefits |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Housebound**{::nomarkdown}<pre><code>  amountOfHousebound</code></pre>{:/} | NUMERIC | amount_of_housebound |  |  | 
**Receiving Social Security**{::nomarkdown}<pre><code>  receivingSocialSecurity</code></pre>{:/} | ENUMERATION | receiving_social_security |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Social Security**{::nomarkdown}<pre><code>  amountOfSocialSecurity</code></pre>{:/} | NUMERIC | amount_of_social_security |  |  | 
**Receiving A Va Pension**{::nomarkdown}<pre><code>  receivingAVaPension</code></pre>{:/} | ENUMERATION | receiving_a_va_pension |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Va Pension**{::nomarkdown}<pre><code>  amountOfVaPension</code></pre>{:/} | NUMERIC | amount_of_va_pension |  |  | 
**Amount Of Military Retirement**{::nomarkdown}<pre><code>  amountOfMilitaryRetirement</code></pre>{:/} | NUMERIC | amount_of_military_retirement |  |  | 
**Receiving Military Retirement**{::nomarkdown}<pre><code>  receivingMilitaryRetirement</code></pre>{:/} | ENUMERATION | receiving_military_retirement |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Gi Insurance**{::nomarkdown}<pre><code>  amountOfGiInsurance</code></pre>{:/} | NUMERIC | amount_of_gi_insurance |  |  | 
**Gi Insurance Policy**{::nomarkdown}<pre><code>  giInsurancePolicy</code></pre>{:/} | ENUMERATION | gi_insurance_policy |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Ssi**{::nomarkdown}<pre><code>  amountOfSsi</code></pre>{:/} | NUMERIC | amount_of_ssi |  |  | 
**Receiving Sup Security Ssi**{::nomarkdown}<pre><code>  receivingSupSecuritySsi</code></pre>{:/} | ENUMERATION | receiving_sup_security_ssi |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Other Retirement**{::nomarkdown}<pre><code>  amountOfOtherRetirement</code></pre>{:/} | NUMERIC | amount_of_other_retirement |  |  | 
**Type Of Other Retirement**{::nomarkdown}<pre><code>  typeOfOtherRetirement</code></pre>{:/} | ENUMERATION | type_of_other_retirement |  |  | {::nomarkdown}CIVIL: <em><strong>C</strong></em><br/>COMBINATIONS OF TYPES: <em><strong>X</strong></em><br/>OTHER: <em><strong>O</strong></em><br/>MILITARY: <em><strong>M</strong></em><br/>RAILROAD: <em><strong>R</strong></em><br/>BLACK LUNG: <em><strong>B</strong></em>{:/}
**Amount Of Other Income**{::nomarkdown}<pre><code>  amountOfOtherIncome</code></pre>{:/} | NUMERIC | amount_of_other_income |  |  | 
**Total Annual Va Check Amount**{::nomarkdown}<pre><code>  totalAnnualVaCheckAmount</code></pre>{:/} | NUMERIC | total_annual_va_check_amount |  |  | 
**Primary Long Id**{::nomarkdown}<pre><code>  primaryLongId</code></pre>{:/} | STRING | primary_long_id |  |  | 
**Primary Short Id**{::nomarkdown}<pre><code>  primaryShortId</code></pre>{:/} | STRING | primary_short_id |  |  | 
**Service Dental Injury**{::nomarkdown}<pre><code>  serviceDentalInjury</code></pre>{:/} | BOOLEAN | service_dental_injury |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Service Teeth Extracted**{::nomarkdown}<pre><code>  serviceTeethExtracted</code></pre>{:/} | BOOLEAN | service_teeth_extracted |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Date Of Dental Treatment**{::nomarkdown}<pre><code>  dateOfDentalTreatment</code></pre>{:/} | OBJECT | date_of_dental_treatment |  |  | [dateOfDentalTreatment](#dateOfDentalTreatment)
**Rated Disabilities Va**{::nomarkdown}<pre><code>  ratedDisabilitiesVa</code></pre>{:/} | OBJECT | rated_disabilities_va |  |  | [ratedDisabilities](#ratedDisabilities)
**Service Connected Conditions**{::nomarkdown}<pre><code>  serviceConnectedConditions</code></pre>{:/} | OBJECT | service_connected_conditions |  |  | [serviceConnectedConditions](#serviceConnectedConditions)
**Eligible For Medicaid**{::nomarkdown}<pre><code>  eligibleForMedicaid</code></pre>{:/} | BOOLEAN | eligible_for_medicaid |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Date Medicaid Last Asked**{::nomarkdown}<pre><code>  dateMedicaidLastAsked</code></pre>{:/} | DATE-TIME | date_medicaid_last_asked |  |  | 
**Medicaid Number**{::nomarkdown}<pre><code>  medicaidNumber</code></pre>{:/} | STRING | medicaid_number |  |  | 
**Pension Award Effective Date**{::nomarkdown}<pre><code>  pensionAwardEffectiveDate</code></pre>{:/} | DATE-TIME | pension_award_effective_date |  |  | 
**Pension Award Reason**{::nomarkdown}<pre><code>  pensionAwardReason</code></pre>{:/} | POINTER | pension_award_reason |  |  | Pension_Award_Reasons-27_18
**Pension Terminated Date**{::nomarkdown}<pre><code>  pensionTerminatedDate</code></pre>{:/} | DATE-TIME | pension_terminated_date |  |  | 
**Pension Terminated Reason 1**{::nomarkdown}<pre><code>  pensionTerminatedReason1</code></pre>{:/} | POINTER | pension_terminated_reason_1 |  |  | Pension_Award_Reasons-27_18
**Pension Terminated Reason 2**{::nomarkdown}<pre><code>  pensionTerminatedReason2</code></pre>{:/} | POINTER | pension_terminated_reason_2 |  |  | Pension_Award_Reasons-27_18
**Pension Terminated Reason 3**{::nomarkdown}<pre><code>  pensionTerminatedReason3</code></pre>{:/} | POINTER | pension_terminated_reason_3 |  |  | Pension_Award_Reasons-27_18
**Pension Terminated Reason 4**{::nomarkdown}<pre><code>  pensionTerminatedReason4</code></pre>{:/} | POINTER | pension_terminated_reason_4 |  |  | Pension_Award_Reasons-27_18
**Class Ii Dental Indicator**{::nomarkdown}<pre><code>  classIiDentalIndicator</code></pre>{:/} | BOOLEAN | class_ii_dental_indicator |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Dental Appl Due Before Date**{::nomarkdown}<pre><code>  dentalApplDueBeforeDate</code></pre>{:/} | DATE-TIME | dental_appl_due_before_date |  |  | 
**Pension Indicator Lock**{::nomarkdown}<pre><code>  pensionIndicatorLock</code></pre>{:/} | BOOLEAN | pension_indicator_lock |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Pension Award Lock**{::nomarkdown}<pre><code>  pensionAwardLock</code></pre>{:/} | BOOLEAN | pension_award_lock |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Veteran Catastrophically Disabled**{::nomarkdown}<pre><code>  veteranCatastrophicallyDisabled</code></pre>{:/} | BOOLEAN | veteran_catastrophically_disabled |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Decided By**{::nomarkdown}<pre><code>  decidedBy</code></pre>{:/} | STRING | decided_by |  |  | 
**Date Of Decision**{::nomarkdown}<pre><code>  dateOfDecision</code></pre>{:/} | DATE-TIME | date_of_decision |  |  | 
**Facility Making Determination**{::nomarkdown}<pre><code>  facilityMakingDetermination</code></pre>{:/} | POINTER | facility_making_determination |  |  | [Institution-4](../VDM/Institution-4)
**Review Date**{::nomarkdown}<pre><code>  reviewDate</code></pre>{:/} | DATE-TIME | review_date |  |  | 
**Method Of Determination**{::nomarkdown}<pre><code>  methodOfDetermination</code></pre>{:/} | ENUMERATION | method_of_determination |  |  | {::nomarkdown}PHYSICAL EXAMINATION: <em><strong>3</strong></em><br/>MEDICAL RECORD REVIEW: <em><strong>2</strong></em>{:/}
**Date Veteran Requested Cd Eval**{::nomarkdown}<pre><code>  dateVeteranRequestedCdEval</code></pre>{:/} | DATE-TIME | date_veteran_requested_cd_eval |  |  | 
**Date Facility Initiated Review**{::nomarkdown}<pre><code>  dateFacilityInitiatedReview</code></pre>{:/} | DATE-TIME | date_facility_initiated_review |  |  | 
**Date Veteran Was Notified**{::nomarkdown}<pre><code>  dateVeteranWasNotified</code></pre>{:/} | DATE-TIME | date_veteran_was_notified |  |  | 
**Cd Status Diagnoses**{::nomarkdown}<pre><code>  cdStatusDiagnoses</code></pre>{:/} | POINTER | cd_status_diagnoses |  |  | Catastrophic_Disability_Reasons-27_17
**Cd Status Procedures**{::nomarkdown}<pre><code>  cdStatusProcedures</code></pre>{:/} | OBJECT | cd_status_procedures |  |  | [cdStatusProcedures](#cdStatusProcedures)
**Cd Status Conditions**{::nomarkdown}<pre><code>  cdStatusConditions</code></pre>{:/} | OBJECT | cd_status_conditions |  |  | [cdStatusConditions](#cdStatusConditions)
**Cd History Date**{::nomarkdown}<pre><code>  cdHistoryDate</code></pre>{:/} | OBJECT | cd_history_date |  |  | [cdHistoryDate](#cdHistoryDate)
**Cd Descriptors**{::nomarkdown}<pre><code>  cdDescriptors</code></pre>{:/} | POINTER | cd_descriptors |  |  | Catastrophic_Disability_Reasons-27_17
**Current Moh Indicator**{::nomarkdown}<pre><code>  currentMohIndicator</code></pre>{:/} | BOOLEAN | current_moh_indicator |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Is Test Patient**{::nomarkdown}<pre><code>  isTestPatient</code></pre>{:/} | BOOLEAN | test_patient_indicator |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Alias**{::nomarkdown}<pre><code>  alias</code></pre>{:/} | OBJECT | alias |  |  | [alias](#alias)
**Race Information**{::nomarkdown}<pre><code>  raceInformation</code></pre>{:/} | OBJECT | race_information |  |  | [raceInformation](#raceInformation)
**Enrollment Clinic**{::nomarkdown}<pre><code>  enrollmentClinic</code></pre>{:/} | OBJECT | enrollment_clinic |  |  | [enrollmentClinic](#enrollmentClinic)
**Ethnicity Information**{::nomarkdown}<pre><code>  ethnicityInformation</code></pre>{:/} | OBJECT | ethnicity_information |  |  | [ethnicityInformation](#ethnicityInformation)
**Current Enrollment**{::nomarkdown}<pre><code>  currentEnrollment</code></pre>{:/} | POINTER | current_enrollment |  |  | Patient_Enrollment-27_11
**Preferred Facility**{::nomarkdown}<pre><code>  preferredFacility</code></pre>{:/} | POINTER | preferred_facility |  |  | [Institution-4](../VDM/Institution-4)
**Source Designation**{::nomarkdown}<pre><code>  sourceDesignation</code></pre>{:/} | ENUMERATION | source_designation |  |  | {::nomarkdown}PCP INACTIVE: <em><strong>PI</strong></em><br/>VISTA: <em><strong>V</strong></em><br/>PCP ACTIVE: <em><strong>PA</strong></em><br/>ESR: <em><strong>E</strong></em>{:/}
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | BOOLEAN | reactions |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Heightcm**{::nomarkdown}<pre><code>  heightcm</code></pre>{:/} | NUMERIC | heightcm |  |  | 
**Weightkg**{::nomarkdown}<pre><code>  weightkg</code></pre>{:/} | NUMERIC | weightkg |  |  | 
**Spinal Cord Injury**{::nomarkdown}<pre><code>  spinalCordInjury</code></pre>{:/} | ENUMERATION | spinal_cord_injury |  |  | {::nomarkdown}QUADRIPLEGIA-NONTRAUMATIC: <em><strong>4</strong></em><br/>QUADRIPLEGIA-TRAUMATIC: <em><strong>2</strong></em><br/>NOT APPLICABLE: <em><strong>X</strong></em><br/>PARAPLEGIA-TRAUMATIC: <em><strong>1</strong></em><br/>PARAPLEGIA-NONTRAUMATIC: <em><strong>3</strong></em>{:/}
**Laboratory Reference**{::nomarkdown}<pre><code>  laboratoryReference</code></pre>{:/} | POINTER | laboratory_reference |  |  | Lab_Data-63
**Lab Referral Ref**{::nomarkdown}<pre><code>  labReferralRef</code></pre>{:/} | POINTER | lab_referral_ref |  |  | Referral_Patient-67
**Cnh Current**{::nomarkdown}<pre><code>  cnhCurrent</code></pre>{:/} | BOOLEAN | cnh_current |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Dental Classification**{::nomarkdown}<pre><code>  dentalClassification</code></pre>{:/} | POINTER | dental_classification |  |  | Dental_Classification-220_2
**Dental Eligibility Expiration**{::nomarkdown}<pre><code>  dentalEligibilityExpiration</code></pre>{:/} | DATE-TIME | dental_eligibility_expiration |  |  | 
**Patient Eligibilities**{::nomarkdown}<pre><code>  patientEligibilities</code></pre>{:/} | OBJECT | patient_eligibilities |  |  | [patientEligibilities](#patientEligibilities)
**Patient Type**{::nomarkdown}<pre><code>  patientType</code></pre>{:/} | POINTER | type-391 |  |  | Type_Of_Patient-391
**Condition**{::nomarkdown}<pre><code>  condition</code></pre>{:/} | ENUMERATION | condition |  |  | {::nomarkdown}SERIOUSLY ILL: <em><strong>S</strong></em>{:/}
**Date Entered On Si List**{::nomarkdown}<pre><code>  dateEnteredOnSiList</code></pre>{:/} | DATE-TIME | date_entered_on_si_list |  |  | 
**Current Pc Practitioner**{::nomarkdown}<pre><code>  currentPcPractitioner</code></pre>{:/} | POINTER | current_pc_practitioner |  |  | [New_Person-200](../VDM/New_Person-200)
**Current Pc Team**{::nomarkdown}<pre><code>  currentPcTeam</code></pre>{:/} | POINTER | current_pc_team |  |  | Team-404_51
**Integration Control Number**{::nomarkdown}<pre><code>  integrationControlNumber</code></pre>{:/} | NUMERIC | integration_control_number |  |  | 
**Icn Checksum**{::nomarkdown}<pre><code>  icnChecksum</code></pre>{:/} | STRING | icn_checksum |  |  | 
**Coordinating Master Of Record**{::nomarkdown}<pre><code>  coordinatingMasterOfRecord</code></pre>{:/} | POINTER | coordinating_master_of_record |  |  | [Institution-4](../VDM/Institution-4)
**Locally Assigned Icn**{::nomarkdown}<pre><code>  locallyAssignedIcn</code></pre>{:/} | BOOLEAN | locally_assigned_icn |  |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Subscription Control Number**{::nomarkdown}<pre><code>  subscriptionControlNumber</code></pre>{:/} | POINTER | subscription_control_number |  |  | Subscription_Control-774
**Cmor Activity Score**{::nomarkdown}<pre><code>  cmorActivityScore</code></pre>{:/} | NUMERIC | cmor_activity_score |  |  | 
**Score Calculation Date**{::nomarkdown}<pre><code>  scoreCalculationDate</code></pre>{:/} | DATE-TIME | score_calculation_date |  |  | 
**Temporary Id Number**{::nomarkdown}<pre><code>  temporaryIdNumber</code></pre>{:/} | STRING | temporary_id_number |  |  | 
**Foreign Id Number**{::nomarkdown}<pre><code>  foreignIdNumber</code></pre>{:/} | STRING | foreign_id_number |  |  | 
**Full Icn**{::nomarkdown}<pre><code>  fullIcn</code></pre>{:/} | STRING | full_icn |  |  | 
**Full Icn History**{::nomarkdown}<pre><code>  fullIcnHistory</code></pre>{:/} | STRING | full_icn_history |  |  | 
**Icn History**{::nomarkdown}<pre><code>  icnHistory</code></pre>{:/} | OBJECT | icn_history |  |  | [icnHistory](#icnHistory)
**Cmor History**{::nomarkdown}<pre><code>  cmorHistory</code></pre>{:/} | OBJECT | cmor_history |  |  | [cmorHistory](#cmorHistory)
**Multiple Birth Indicator**{::nomarkdown}<pre><code>  multipleBirthIndicator</code></pre>{:/} | ENUMERATION | multiple_birth_indicator |  |  | {::nomarkdown}*MULTIPLE BIRTH*: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Disposition Login Date Time**{::nomarkdown}<pre><code>  dispositionLoginDateTime</code></pre>{:/} | OBJECT | disposition_login_date_time |  |  | [dispositionLoginDateTime](#dispositionLoginDateTime)
**Received Va Care Previously**{::nomarkdown}<pre><code>  receivedVaCarePreviously</code></pre>{:/} | BOOLEAN | received_va_care_previously |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Most Recent Date Of Care**{::nomarkdown}<pre><code>  mostRecentDateOfCare</code></pre>{:/} | DATE-TIME | most_recent_date_of_care |  |  | 
**Appointment Request Date**{::nomarkdown}<pre><code>  appointmentRequestDate</code></pre>{:/} | DATE-TIME | appointment_request_date |  |  | 
**Most Recent Location Of Care**{::nomarkdown}<pre><code>  mostRecentLocationOfCare</code></pre>{:/} | POINTER | most_recent_location_of_care |  |  | [Institution-4](../VDM/Institution-4)
**2 Nd Most Recent Date Of Care**{::nomarkdown}<pre><code>  2ndMostRecentDateOfCare</code></pre>{:/} | DATE-TIME | _2nd_most_recent_date_of_care |  |  | 
**2 Nd Most Recent Location**{::nomarkdown}<pre><code>  2ndMostRecentLocation</code></pre>{:/} | POINTER | _2nd_most_recent_location |  |  | [Institution-4](../VDM/Institution-4)
**Most Recent 1010 Ez**{::nomarkdown}<pre><code>  mostRecent1010ez</code></pre>{:/} | POINTER | most_recent_1010ez |  |  | _1010Ez_Holding-712
**Combat Indicated On 1010 Ez**{::nomarkdown}<pre><code>  combatIndicatedOn1010ez</code></pre>{:/} | BOOLEAN | combat_indicated_on_1010ez |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Disability Discharge On 1010 Ez**{::nomarkdown}<pre><code>  disabilityDischargeOn1010ez</code></pre>{:/} | BOOLEAN | disability_discharge_on_1010ez |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Appointment Request On 1010 Ez**{::nomarkdown}<pre><code>  appointmentRequestOn1010ez</code></pre>{:/} | BOOLEAN | appointment_request_on_1010ez |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Appointment Request Status**{::nomarkdown}<pre><code>  appointmentRequestStatus</code></pre>{:/} | ENUMERATION | appointment_request_status |  |  | {::nomarkdown}CANCELLED: <em><strong>C</strong></em><br/>IN PROCESS/VETERAN CONTACTED: <em><strong>I</strong></em><br/>FILLED: <em><strong>F</strong></em><br/>EWL: <em><strong>E</strong></em>{:/}
**Date Status Last Edited**{::nomarkdown}<pre><code>  dateStatusLastEdited</code></pre>{:/} | DATE-TIME | date_status_last_edited |  |  | 
**Appointment Request Comment**{::nomarkdown}<pre><code>  appointmentRequestComment</code></pre>{:/} | STRING | appointment_request_comment |  |  | 
**Date Comment Last Edited**{::nomarkdown}<pre><code>  dateCommentLastEdited</code></pre>{:/} | DATE-TIME | date_comment_last_edited |  |  | 
**Fugitive Felon Flag**{::nomarkdown}<pre><code>  fugitiveFelonFlag</code></pre>{:/} | BOOLEAN | fugitive_felon_flag |  |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Fff Entered By**{::nomarkdown}<pre><code>  fffEnteredBy</code></pre>{:/} | POINTER | fff_entered_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Fff Date Entered**{::nomarkdown}<pre><code>  fffDateEntered</code></pre>{:/} | DATE-TIME | fff_date_entered |  |  | 
**Fff Removed By**{::nomarkdown}<pre><code>  fffRemovedBy</code></pre>{:/} | POINTER | fff_removed_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Fff Date Removed**{::nomarkdown}<pre><code>  fffDateRemoved</code></pre>{:/} | DATE-TIME | fff_date_removed |  |  | 
**Fff Removal Remarks**{::nomarkdown}<pre><code>  fffRemovalRemarks</code></pre>{:/} | STRING | fff_removal_remarks |  |  | 
**Appointment**{::nomarkdown}<pre><code>  appointment</code></pre>{:/} | OBJECT | appointment |  |  | [appointment](#appointment)
**Is Veteran**{::nomarkdown}<pre><code>  isVeteran</code></pre>{:/} | BOOLEAN | veteran_y_n |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Archived Data**{::nomarkdown}<pre><code>  archivedData</code></pre>{:/} | OBJECT | archived_data |  |  | [archivedData](#archivedData)
**Vts Patient Flag**{::nomarkdown}<pre><code>  vtsPatientFlag</code></pre>{:/} | BOOLEAN | vts_patient_flag |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Initial Ods Treatment Received**{::nomarkdown}<pre><code>  initialOdsTreatmentReceived</code></pre>{:/} | DATE-TIME | initial_ods_treatment_received |  |  | 
**Recalled To Active Duty**{::nomarkdown}<pre><code>  recalledToActiveDuty</code></pre>{:/} | ENUMERATION | recalled_to_active_duty |  |  | {::nomarkdown}NATIONAL GUARD: <em><strong>1</strong></em><br/>RESERVES: <em><strong>2</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Patient Rank**{::nomarkdown}<pre><code>  patientRank</code></pre>{:/} |  | rank-2 |  |  | 
**Network Identifier**{::nomarkdown}<pre><code>  networkIdentifier</code></pre>{:/} | STRING | network_identifier |  |  | 

### SubObjects
#### <a name="permanentAddress"></a>

<dl>
<dt>ID</dt><dd>permanentAddress</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**County**{::nomarkdown}<pre><code>  county</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Province**{::nomarkdown}<pre><code>  province</code></pre>{:/} | STRING | N/A |  |  | 
**Postal Code**{::nomarkdown}<pre><code>  postalCode</code></pre>{:/} | STRING | N/A |  |  | 
**Country**{::nomarkdown}<pre><code>  country</code></pre>{:/} | POINTER | N/A |  |  | Country_Code-779_004
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Change Source**{::nomarkdown}<pre><code>  changeSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}USPS: <em><strong>USPS</strong></em><br/>VOA: <em><strong>VOA</strong></em><br/>VAMC: <em><strong>VAMC</strong></em><br/>HBSC: <em><strong>HBSC</strong></em><br/>BVA: <em><strong>BVA</strong></em><br/>LACS: <em><strong>LACS</strong></em><br/>HEC: <em><strong>HEC</strong></em><br/>NCOA: <em><strong>NCOA</strong></em><br/>VAINS: <em><strong>VAINS</strong></em>{:/}
**Change Site**{::nomarkdown}<pre><code>  changeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Bad Address Indicator**{::nomarkdown}<pre><code>  badAddressIndicator</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}ADDRESS NOT FOUND: <em><strong>4</strong></em><br/>OTHER: <em><strong>3</strong></em><br/>UNDELIVERABLE: <em><strong>1</strong></em><br/>HOMELESS: <em><strong>2</strong></em>{:/}
**Change User**{::nomarkdown}<pre><code>  changeUser</code></pre>{:/} | POINTER | N/A |  |  | [New_Person-200](../VDM/New_Person-200)

#### <a name="temporaryAddress"></a>

<dl>
<dt>ID</dt><dd>temporaryAddress</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Active**{::nomarkdown}<pre><code>  active</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**County**{::nomarkdown}<pre><code>  county</code></pre>{:/} | NUMERIC | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Start Date**{::nomarkdown}<pre><code>  startDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**End Date**{::nomarkdown}<pre><code>  endDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Province**{::nomarkdown}<pre><code>  province</code></pre>{:/} | STRING | N/A |  |  | 
**Postal Code**{::nomarkdown}<pre><code>  postalCode</code></pre>{:/} | STRING | N/A |  |  | 
**Country**{::nomarkdown}<pre><code>  country</code></pre>{:/} | POINTER | N/A |  |  | Country_Code-779_004
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Change Site**{::nomarkdown}<pre><code>  changeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)

#### <a name="patientContact"></a>

<dl>
<dt>ID</dt><dd>patientContact</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Phone Number Residence**{::nomarkdown}<pre><code>  phoneNumberResidence</code></pre>{:/} | STRING | N/A |  |  | 
**Cellular Number Change Source**{::nomarkdown}<pre><code>  cellularNumberChangeSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}HBSC: <em><strong>HBSC</strong></em><br/>VAMC: <em><strong>VAMC</strong></em><br/>VOA: <em><strong>VOA</strong></em><br/>HEC: <em><strong>HEC</strong></em>{:/}
**Cellular Number Change Site**{::nomarkdown}<pre><code>  cellularNumberChangeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Pager Number Change Date Time**{::nomarkdown}<pre><code>  pagerNumberChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Pager Number Change Source**{::nomarkdown}<pre><code>  pagerNumberChangeSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}HBSC: <em><strong>HBSC</strong></em><br/>VAMC: <em><strong>VAMC</strong></em><br/>VOA: <em><strong>VOA</strong></em><br/>HEC: <em><strong>HEC</strong></em>{:/}
**Pager Number Change Site**{::nomarkdown}<pre><code>  pagerNumberChangeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Confidential Phone Number**{::nomarkdown}<pre><code>  confidentialPhoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number Work**{::nomarkdown}<pre><code>  phoneNumberWork</code></pre>{:/} | STRING | N/A |  |  | 
**Residence Number Change Date Time**{::nomarkdown}<pre><code>  residenceNumberChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Residence Number Change Source**{::nomarkdown}<pre><code>  residenceNumberChangeSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}HBSC: <em><strong>HBSC</strong></em><br/>VAMC: <em><strong>VAMC</strong></em><br/>VOA: <em><strong>VOA</strong></em><br/>HEC: <em><strong>HEC</strong></em>{:/}
**Residence Number Change Site**{::nomarkdown}<pre><code>  residenceNumberChangeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Email Address**{::nomarkdown}<pre><code>  emailAddress</code></pre>{:/} | STRING | N/A |  |  | 
**Email Address Indicator**{::nomarkdown}<pre><code>  emailAddressIndicator</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Email Address Indicator Date Time**{::nomarkdown}<pre><code>  emailAddressIndicatorDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Phone Number Cellular**{::nomarkdown}<pre><code>  phoneNumberCellular</code></pre>{:/} | STRING | N/A |  |  | 
**Pager Number**{::nomarkdown}<pre><code>  pagerNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Email Address Change Date Time**{::nomarkdown}<pre><code>  emailAddressChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Email Address Change Source**{::nomarkdown}<pre><code>  emailAddressChangeSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}HBSC: <em><strong>HBSC</strong></em><br/>VAMC: <em><strong>VAMC</strong></em><br/>VOA: <em><strong>VOA</strong></em><br/>HEC: <em><strong>HEC</strong></em>{:/}
**Email Address Change Site**{::nomarkdown}<pre><code>  emailAddressChangeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Cellular Number Change Date Time**{::nomarkdown}<pre><code>  cellularNumberChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="confidentialAddress"></a>

<dl>
<dt>ID</dt><dd>confidentialAddress</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Address Category**{::nomarkdown}<pre><code>  addressCategory</code></pre>{:/} | OBJECT | N/A |  |  | [categories](#categories)
**Active**{::nomarkdown}<pre><code>  active</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**County**{::nomarkdown}<pre><code>  county</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Change Site**{::nomarkdown}<pre><code>  changeSite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Province**{::nomarkdown}<pre><code>  province</code></pre>{:/} | STRING | N/A |  |  | 
**Postal Code**{::nomarkdown}<pre><code>  postalCode</code></pre>{:/} | STRING | N/A |  |  | 
**Country**{::nomarkdown}<pre><code>  country</code></pre>{:/} | POINTER | N/A |  |  | Country_Code-779_004
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | confidential_street_line_2 |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | confidential_street_line_3 |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | confidential_address_city |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | confidential_address_state |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Start Date**{::nomarkdown}<pre><code>  startDate</code></pre>{:/} | DATE-TIME | confidential_start_date |  |  | 
**End Date**{::nomarkdown}<pre><code>  endDate</code></pre>{:/} | DATE-TIME | confidential_end_date |  |  | 

#### <a name="categories"></a>Confidential Address Category

<dl>
<dt>ID</dt><dd>categories</dd>
<dt>File Type</dt><dd>2.141</dd>
<dt>Label</dt><dd>Confidential Address Category</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Confidential Address Category**{::nomarkdown}<pre><code>  addressCategory</code></pre>{:/} | ENUMERATION | N/A |  | INDEXED<br/>REQUIRED | {::nomarkdown}ELIGIBILITY/ENROLLMENT: <em><strong>1</strong></em><br/>MEDICAL RECORDS: <em><strong>4</strong></em><br/>APPOINTMENT/SCHEDULING: <em><strong>2</strong></em><br/>COPAYMENTS/VETERAN BILLING: <em><strong>3</strong></em><br/>ALL OTHERS: <em><strong>5</strong></em>{:/}
**Confidential Category Active**{::nomarkdown}<pre><code>  categoryActive</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}

#### <a name="ineligibility"></a>

<dl>
<dt>ID</dt><dd>ineligibility</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Ineligible Date**{::nomarkdown}<pre><code>  ineligibleDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Missing Person Date**{::nomarkdown}<pre><code>  missingPersonDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Missing Or Ineligible**{::nomarkdown}<pre><code>  missingOrIneligible</code></pre>{:/} | STRING | N/A |  |  | 
**Ineligible Twx Source**{::nomarkdown}<pre><code>  ineligibleTwxSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}REGIONAL OFFICE: <em><strong>2</strong></em><br/>VAMC: <em><strong>1</strong></em><br/>RPC: <em><strong>3</strong></em>{:/}
**Ineligible Twx City**{::nomarkdown}<pre><code>  ineligibleTwxCity</code></pre>{:/} | STRING | N/A |  |  | 
**Ineligible Twx State**{::nomarkdown}<pre><code>  ineligibleTwxState</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Ineligible Varo Decision**{::nomarkdown}<pre><code>  ineligibleVaroDecision</code></pre>{:/} | STRING | N/A |  |  | 
**Missing Person Twx Source**{::nomarkdown}<pre><code>  missingPersonTwxSource</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}REGIONAL OFFICE: <em><strong>2</strong></em><br/>VAMC: <em><strong>1</strong></em><br/>RPC: <em><strong>3</strong></em>{:/}
**Missing Person Twx City**{::nomarkdown}<pre><code>  missingPersonTwxCity</code></pre>{:/} | STRING | N/A |  |  | 
**Missing Person Twx State**{::nomarkdown}<pre><code>  missingPersonTwxState</code></pre>{:/} | POINTER | N/A |  |  | State-5

#### <a name="contacts"></a>

<dl>
<dt>ID</dt><dd>contacts</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Primary Next Of Kin**{::nomarkdown}<pre><code>  primaryNextOfKin</code></pre>{:/} | OBJECT | N/A |  |  | [primaryNextOfKin](#primaryNextOfKin)
**Secondary Next Of Kin**{::nomarkdown}<pre><code>  secondaryNextOfKin</code></pre>{:/} | OBJECT | N/A |  |  | [secondaryNextOfKin](#secondaryNextOfKin)
**Va Guardian**{::nomarkdown}<pre><code>  vaGuardian</code></pre>{:/} | OBJECT | N/A |  |  | [vaGuardian](#vaGuardian)
**Civil Guardian**{::nomarkdown}<pre><code>  civilGuardian</code></pre>{:/} | OBJECT | N/A |  |  | [civilGuardian](#civilGuardian)
**Employer**{::nomarkdown}<pre><code>  employer</code></pre>{:/} | OBJECT | N/A |  |  | [employer](#employer)
**Spouses Employer**{::nomarkdown}<pre><code>  spousesEmployer</code></pre>{:/} | OBJECT | N/A |  |  | [spouse](#spouse)
**Primary Emergency Contact**{::nomarkdown}<pre><code>  primaryEmergencyContact</code></pre>{:/} | OBJECT | N/A |  |  | [primaryEmergencyContact](#primaryEmergencyContact)
**Secondary Emergency Contact**{::nomarkdown}<pre><code>  secondaryEmergencyContact</code></pre>{:/} | OBJECT | N/A |  |  | [secondaryEmergencyContact](#secondaryEmergencyContact)
**Designee**{::nomarkdown}<pre><code>  designee</code></pre>{:/} | OBJECT | N/A |  |  | [designee](#designee)

#### <a name="primaryNextOfKin"></a>

<dl>
<dt>ID</dt><dd>primaryNextOfKin</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Work Phone Number**{::nomarkdown}<pre><code>  workPhoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Primary Nok Change Date Time**{::nomarkdown}<pre><code>  primaryNokChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Relationship To Patient**{::nomarkdown}<pre><code>  relationshipToPatient</code></pre>{:/} | STRING | N/A |  |  | 
**Is Address Same As Patients**{::nomarkdown}<pre><code>  isAddressSameAsPatients</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name Components**{::nomarkdown}<pre><code>  nameComponents</code></pre>{:/} | POINTER | N/A |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="secondaryNextOfKin"></a>

<dl>
<dt>ID</dt><dd>secondaryNextOfKin</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Work Phone Number**{::nomarkdown}<pre><code>  workPhoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Secondary Nok Change Date Time**{::nomarkdown}<pre><code>  secondaryNokChangeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Relationship To Patient**{::nomarkdown}<pre><code>  relationshipToPatient</code></pre>{:/} | STRING | N/A |  |  | 
**Address Same As Patients**{::nomarkdown}<pre><code>  addressSameAsPatients</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name Components**{::nomarkdown}<pre><code>  nameComponents</code></pre>{:/} | POINTER | N/A |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="vaGuardian"></a>

<dl>
<dt>ID</dt><dd>vaGuardian</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Relationship**{::nomarkdown}<pre><code>  relationship</code></pre>{:/} | STRING | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Institution**{::nomarkdown}<pre><code>  institution</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)

#### <a name="civilGuardian"></a>

<dl>
<dt>ID</dt><dd>civilGuardian</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Relationship**{::nomarkdown}<pre><code>  relationship</code></pre>{:/} | STRING | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Institution**{::nomarkdown}<pre><code>  institution</code></pre>{:/} | STRING | N/A |  |  | 

#### <a name="employer"></a>

<dl>
<dt>ID</dt><dd>employer</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}EMPLOYED PART TIME: <em><strong>2</strong></em><br/>SELF EMPLOYED: <em><strong>4</strong></em><br/>RETIRED: <em><strong>5</strong></em><br/>UNKNOWN: <em><strong>9</strong></em><br/>NOT EMPLOYED: <em><strong>3</strong></em><br/>EMPLOYED FULL TIME: <em><strong>1</strong></em><br/>ACTIVE MILITARY DUTY: <em><strong>6</strong></em>{:/}
**Date Of Retirement**{::nomarkdown}<pre><code>  dateOfRetirement</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Is Government Agency**{::nomarkdown}<pre><code>  isGovernmentAgency</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 

#### <a name="spouse"></a>

<dl>
<dt>ID</dt><dd>spouse</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Occupation**{::nomarkdown}<pre><code>  occupation</code></pre>{:/} | STRING | N/A |  |  | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}EMPLOYED PART TIME: <em><strong>2</strong></em><br/>SELF EMPLYED: <em><strong>4</strong></em><br/>RETIRED: <em><strong>5</strong></em><br/>UNKNOWN: <em><strong>9</strong></em><br/>NOT EMPLOYED: <em><strong>3</strong></em><br/>EMPLOYED FULL TIME: <em><strong>1</strong></em><br/>ACTIVE MILITARY DUTY: <em><strong>6</strong></em>{:/}
**Retirement Date**{::nomarkdown}<pre><code>  retirementDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 

#### <a name="primaryEmergencyContact"></a>

<dl>
<dt>ID</dt><dd>primaryEmergencyContact</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Is Same As Next Of Kin**{::nomarkdown}<pre><code>  isSameAsNextOfKin</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Relationship To Patient**{::nomarkdown}<pre><code>  relationshipToPatient</code></pre>{:/} | STRING | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name Components**{::nomarkdown}<pre><code>  nameComponents</code></pre>{:/} | POINTER | N/A |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="secondaryEmergencyContact"></a>

<dl>
<dt>ID</dt><dd>secondaryEmergencyContact</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Work Phone Number**{::nomarkdown}<pre><code>  workPhoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Relationship To Patient**{::nomarkdown}<pre><code>  relationshipToPatient</code></pre>{:/} | STRING | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name Components**{::nomarkdown}<pre><code>  nameComponents</code></pre>{:/} | POINTER | N/A |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="designee"></a>

<dl>
<dt>ID</dt><dd>designee</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Work Phone Number**{::nomarkdown}<pre><code>  workPhoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Is Same As Next Of Kin**{::nomarkdown}<pre><code>  isSameAsNextOfKin</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | N/A |  |  | 
**Change Date Time**{::nomarkdown}<pre><code>  changeDateTime</code></pre>{:/} | DATE-TIME | designee_change_date_time |  |  | 
**Relationship To Patient**{::nomarkdown}<pre><code>  relationshipToPatient</code></pre>{:/} | STRING | N/A |  |  | 
**Street 1**{::nomarkdown}<pre><code>  street1</code></pre>{:/} | STRING | N/A |  |  | 
**Street 2**{::nomarkdown}<pre><code>  street2</code></pre>{:/} | STRING | N/A |  |  | 
**Street 3**{::nomarkdown}<pre><code>  street3</code></pre>{:/} | STRING | N/A |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | N/A |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | N/A |  |  | State-5
**Zip Code**{::nomarkdown}<pre><code>  zipCode</code></pre>{:/} | STRING | N/A |  |  | 
**Phone Number**{::nomarkdown}<pre><code>  phoneNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Name Components**{::nomarkdown}<pre><code>  nameComponents</code></pre>{:/} | POINTER | N/A |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="serviceConnected"></a>

<dl>
<dt>ID</dt><dd>serviceConnected</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Is Service Connected**{::nomarkdown}<pre><code>  isServiceConnected</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Award Date**{::nomarkdown}<pre><code>  awardDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Pt Effective Date**{::nomarkdown}<pre><code>  ptEffectiveDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Eff Date Combined Sc Eval**{::nomarkdown}<pre><code>  effDateCombinedScEval</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Service Connected Percentage**{::nomarkdown}<pre><code>  serviceConnectedPercentage</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Receiving Va Disability**{::nomarkdown}<pre><code>  receivingVaDisability</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Amount Of Va Disability**{::nomarkdown}<pre><code>  amountOfVaDisability</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Pt**{::nomarkdown}<pre><code>  pt</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Unemployable**{::nomarkdown}<pre><code>  unemployable</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Monetary Ben Verify Date**{::nomarkdown}<pre><code>  monetaryBenVerifyDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Ineligible Reason**{::nomarkdown}<pre><code>  ineligibleReason</code></pre>{:/} | STRING | N/A |  |  | 
**Agency Allied Country**{::nomarkdown}<pre><code>  agencyAlliedCountry</code></pre>{:/} | POINTER | N/A |  |  | Other_Federal_Agency-35
**Category Of Beneficiary**{::nomarkdown}<pre><code>  categoryOfBeneficiary</code></pre>{:/} | POINTER | N/A |  |  | Category_Of_Beneficiary-45_82

#### <a name="claim"></a>

<dl>
<dt>ID</dt><dd>claim</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Claim Number**{::nomarkdown}<pre><code>  claimNumber</code></pre>{:/} | STRING | N/A |  |  | 
**Claim Folder Location**{::nomarkdown}<pre><code>  claimFolderLocation</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)
**Covered By Health Insurance**{::nomarkdown}<pre><code>  coveredByHealthInsurance</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}

#### <a name="insuranceType"></a>Insurance Type

<dl>
<dt>ID</dt><dd>insuranceType</dd>
<dt>File Type</dt><dd>2.312</dd>
<dt>Label</dt><dd>Insurance Type</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Insurance Type**{::nomarkdown}<pre><code>  insuranceType</code></pre>{:/} | POINTER | insurance_type |  | INDEXED<br/>REQUIRED | Insurance_Company-36
**Group Plan**{::nomarkdown}<pre><code>  groupPlan</code></pre>{:/} | POINTER | group_plan |  |  | Group_Insurance_Plan-355_3
**Coordination Of Benefits**{::nomarkdown}<pre><code>  coordinationOfBenefits</code></pre>{:/} | ENUMERATION | coordination_of_benefits |  |  | {::nomarkdown}PRIMARY: <em><strong>1</strong></em><br/>TERTIARY: <em><strong>3</strong></em><br/>SECONDARY: <em><strong>2</strong></em>{:/}
***Subscriber Id**{::nomarkdown}<pre><code>  subscriberId</code></pre>{:/} | STRING | subscriber_id |  |  | 
**Date Entered**{::nomarkdown}<pre><code>  dateEntered</code></pre>{:/} | DATE-TIME | date_entered |  |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | entered_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Date Last Verified**{::nomarkdown}<pre><code>  dateLastVerified</code></pre>{:/} | DATE-TIME | date_last_verified |  |  | 
**Verified By**{::nomarkdown}<pre><code>  verifiedBy</code></pre>{:/} | POINTER | verified_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Date Last Edited**{::nomarkdown}<pre><code>  dateLastEdited</code></pre>{:/} | DATE-TIME | date_last_edited |  |  | 
**Last Edited By**{::nomarkdown}<pre><code>  lastEditedBy</code></pre>{:/} | POINTER | last_edited_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Comment - Patient Policy**{::nomarkdown}<pre><code>  commentPatientPolicy</code></pre>{:/} | STRING | comment__patient_policy |  |  | 
**Source Of Information**{::nomarkdown}<pre><code>  sourceOfInformation</code></pre>{:/} | POINTER | source_of_information |  |  | Source_Of_Information-355_12
**Date Of Source Of Information**{::nomarkdown}<pre><code>  dateOfSourceOfInformation</code></pre>{:/} | DATE-TIME | date_of_source_of_information |  |  | 
***Group Number**{::nomarkdown}<pre><code>  groupNumber</code></pre>{:/} | STRING | group_number |  |  | 
**Send Bill To Employer**{::nomarkdown}<pre><code>  sendBillToEmployer</code></pre>{:/} | BOOLEAN | send_bill_to_employer |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Subscriber&#x27;S Employer Name**{::nomarkdown}<pre><code>  subscribersEmployerName</code></pre>{:/} | STRING | subscribers_employer_name |  |  | 
**Employer Claims Street Address**{::nomarkdown}<pre><code>  employerClaimStreetAddress</code></pre>{:/} | STRING | employer_claims_street_address |  |  | 
**Employ Claim St Address Line 2**{::nomarkdown}<pre><code>  employClaimStAddressLine2</code></pre>{:/} | STRING | employ_claim_st_address_line_2 |  |  | 
**Employ Claim St Address Line 3**{::nomarkdown}<pre><code>  employClaimStAddressLine3</code></pre>{:/} | STRING | employ_claim_st_address_line_3 |  |  | 
**Employer Claims City**{::nomarkdown}<pre><code>  employerClaimsCity</code></pre>{:/} | STRING | employer_claims_city |  |  | 
**Employer Claims State**{::nomarkdown}<pre><code>  employerClaimsState</code></pre>{:/} | POINTER | employer_claims_state |  |  | State-5
**Employer Claims Zip Code**{::nomarkdown}<pre><code>  employerClaimsZipCode</code></pre>{:/} | STRING | employer_claims_zip_code |  |  | 
**Employer Claims Phone**{::nomarkdown}<pre><code>  employerClaimsPhone</code></pre>{:/} | STRING | employer_claims_phone |  |  | 
**Esghp**{::nomarkdown}<pre><code>  esghp</code></pre>{:/} | BOOLEAN | esghp |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Employment Status**{::nomarkdown}<pre><code>  employmentStatus</code></pre>{:/} | ENUMERATION | employment_status |  |  | {::nomarkdown}SELF EMPLOYED: <em><strong>4</strong></em><br/>PART TIME: <em><strong>2</strong></em><br/>RETIRED: <em><strong>5</strong></em><br/>UNKNOWN: <em><strong>9</strong></em><br/>NOT EMPLOYED: <em><strong>3</strong></em><br/>FULL TIME: <em><strong>1</strong></em><br/>ACTIVE MILITARY: <em><strong>6</strong></em>{:/}
**Retirement Date**{::nomarkdown}<pre><code>  retirementDate</code></pre>{:/} | DATE-TIME | retirement_date |  |  | 
**Insurance Expiration Date**{::nomarkdown}<pre><code>  insuranceExpirationDate</code></pre>{:/} | DATE-TIME | insurance_expiration_date |  |  | 
**Insured&#x27;S Dob**{::nomarkdown}<pre><code>  insuredsDob</code></pre>{:/} | DATE-TIME | insureds_dob |  |  | 
**Insured&#x27;S Branch**{::nomarkdown}<pre><code>  insuredsBranch</code></pre>{:/} | POINTER | insureds_branch |  |  | Branch_Of_Service-23
**Insured&#x27;S Rank**{::nomarkdown}<pre><code>  insuredsRank</code></pre>{:/} | STRING | insureds_rank |  |  | 
**Policy Not Billable**{::nomarkdown}<pre><code>  policyNotBillable</code></pre>{:/} | BOOLEAN | policy_not_billable |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Insured&#x27;S Ssn**{::nomarkdown}<pre><code>  insuredsSsn</code></pre>{:/} | STRING | insureds_ssn |  |  | 
**Insured&#x27;S Street 1**{::nomarkdown}<pre><code>  insuredsStreet1</code></pre>{:/} | STRING | insureds_street_1 |  |  | 
**Insured&#x27;S Street 2**{::nomarkdown}<pre><code>  insuredsStreet2</code></pre>{:/} | STRING | insureds_street_2 |  |  | 
**Insured&#x27;S City**{::nomarkdown}<pre><code>  insuredsCity</code></pre>{:/} | STRING | insureds_city |  |  | 
**Insured&#x27;S State**{::nomarkdown}<pre><code>  insuredsState</code></pre>{:/} | POINTER | insureds_state |  |  | State-5
**Insured&#x27;S Zip**{::nomarkdown}<pre><code>  insuredsZip</code></pre>{:/} | STRING | insureds_zip |  |  | 
**Insured&#x27;S Phone**{::nomarkdown}<pre><code>  insuredsPhone</code></pre>{:/} | STRING | insureds_phone |  |  | 
**Insured&#x27;S Sex**{::nomarkdown}<pre><code>  insuredsSex</code></pre>{:/} | ENUMERATION | insureds_sex |  |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Insured&#x27;S Country**{::nomarkdown}<pre><code>  insuredsCountry</code></pre>{:/} | STRING | insureds_country |  |  | 
**Insured&#x27;S Country Subdivision**{::nomarkdown}<pre><code>  insuredsCountrySubdivision</code></pre>{:/} | STRING | insureds_country_subdivision |  |  | 
**Primary Care Provider**{::nomarkdown}<pre><code>  primaryCareProvider</code></pre>{:/} | STRING | primary_care_provider |  |  | 
**Primary Provider Phone**{::nomarkdown}<pre><code>  primaryProviderPhone</code></pre>{:/} | STRING | primary_provider_phone |  |  | 
**Pt. Relationship - Hipaa**{::nomarkdown}<pre><code>  ptRelationshipHipaa</code></pre>{:/} | ENUMERATION | pt_relationship__hipaa |  |  | {::nomarkdown}INJURED PLAINTIFF: <em><strong>41</strong></em><br/>ORGAN DONOR: <em><strong>39</strong></em><br/>SELF: <em><strong>18</strong></em><br/>CHILD: <em><strong>19</strong></em><br/>FATHER: <em><strong>33</strong></em><br/>SIGNIFICANT OTHER: <em><strong>29</strong></em><br/>MOTHER: <em><strong>32</strong></em><br/>EMPLOYEE: <em><strong>20</strong></em><br/>SPOUSE: <em><strong>01</strong></em><br/>LIFE PARTNER: <em><strong>53</strong></em><br/>OTHER RELATIONSHIP: <em><strong>G8</strong></em>{:/}
**Eiv Auto-Update**{::nomarkdown}<pre><code>  eivAutoupdate</code></pre>{:/} | BOOLEAN | eiv_autoupdate |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Pharmacy Relationship Code**{::nomarkdown}<pre><code>  pharmacyRelationshipCode</code></pre>{:/} | POINTER | pharmacy_relationship_code |  |  | Bps_Ncpdp_Patient_Relationship_Code-9002313_19
**Pharmacy Person Code**{::nomarkdown}<pre><code>  pharmacyPersonCode</code></pre>{:/} | STRING | pharmacy_person_code |  |  | 
**Patient Id**{::nomarkdown}<pre><code>  patientId</code></pre>{:/} | STRING | patient_id |  |  | 
**Subscriber&#x27;S Sec Qualifier(1)**{::nomarkdown}<pre><code>  subscribersSecQualifier1</code></pre>{:/} | ENUMERATION | subscribers_sec_qualifier1 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Subscriber&#x27;S Sec Id(1)**{::nomarkdown}<pre><code>  subscribersSecId1</code></pre>{:/} | STRING | subscribers_sec_id1 |  |  | 
**Subscriber&#x27;S Sec Qualifier(2)**{::nomarkdown}<pre><code>  subscribersSecQualifer2</code></pre>{:/} | ENUMERATION | subscribers_sec_qualifier2 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Subscriber&#x27;S Sec Id(2)**{::nomarkdown}<pre><code>  subscribersSecId2</code></pre>{:/} | STRING | subscribers_sec_id2 |  |  | 
**Subscriber&#x27;S Sec Qualifier(3)**{::nomarkdown}<pre><code>  subscribersSecQualifer3</code></pre>{:/} | ENUMERATION | subscribers_sec_qualifier3 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Subscriber&#x27;S Sec Id(3)**{::nomarkdown}<pre><code>  subscribersSecId3</code></pre>{:/} | STRING | subscribers_sec_id3 |  |  | 
**Patient&#x27;S Sec Qualifier(1)**{::nomarkdown}<pre><code>  patientsSecQualifer1</code></pre>{:/} | ENUMERATION | patients_sec_qualifier1 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Patient&#x27;S Secondary Id(1)**{::nomarkdown}<pre><code>  patientsSecondaryId1</code></pre>{:/} | STRING | patients_secondary_id1 |  |  | 
**Patient&#x27;S Sec Qualifier(2)**{::nomarkdown}<pre><code>  patientsSecQualifier2</code></pre>{:/} | ENUMERATION | patients_sec_qualifier2 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Patient&#x27;S Secondary Id(2)**{::nomarkdown}<pre><code>  patientsSecondaryId2</code></pre>{:/} | STRING | patients_secondary_id2 |  |  | 
**Patient&#x27;S Sec Qualifier(3)**{::nomarkdown}<pre><code>  patientsSecQualifier3</code></pre>{:/} | ENUMERATION | patients_sec_qualifier3 |  |  | {::nomarkdown}Insurance Policy Number: <em><strong>IG</strong></em><br/>Client Number: <em><strong>23</strong></em><br/>Social Security Number: <em><strong>SY</strong></em>{:/}
**Patient&#x27;S Secondary Id(3)**{::nomarkdown}<pre><code>  patientsSecondaryId3</code></pre>{:/} | STRING | patients_secondary_id3 |  |  | 
**Whose Insurance**{::nomarkdown}<pre><code>  whoseInsurance</code></pre>{:/} | ENUMERATION | whose_insurance |  |  | {::nomarkdown}VETERAN: <em><strong>v</strong></em><br/>SPOUSE: <em><strong>s</strong></em><br/>OTHER: <em><strong>o</strong></em>{:/}
**Name Of Insured**{::nomarkdown}<pre><code>  nameOfInsured</code></pre>{:/} | STRING | name_of_insured |  |  | 
**Subscriber Id**{::nomarkdown}<pre><code>  subscriberId</code></pre>{:/} | STRING | subscriber_id-2_312-7_02 |  |  | 
**Effective Date Of Policy**{::nomarkdown}<pre><code>  effectiveDateOfPolicy</code></pre>{:/} | DATE-TIME | effective_date_of_policy |  |  | 
**Requested Service Date**{::nomarkdown}<pre><code>  requestedServiceDate</code></pre>{:/} | DATE-TIME | requested_service_date |  |  | 
**Requested Service Type**{::nomarkdown}<pre><code>  requestedServiceType</code></pre>{:/} | POINTER | requested_service_type |  |  | X12_271_Service_Type-365_013
**Group Reference Information**{::nomarkdown}<pre><code>  groupReferenceInformation</code></pre>{:/} | OBJECT | group_reference_information |  |  | [Group_Reference_Information-2_3129](#Group_Reference_Information-2_3129)
**Group Provider Info**{::nomarkdown}<pre><code>  groupProviderInfo</code></pre>{:/} | OBJECT | group_provider_info |  |  | [Group_Provider_Info-2_332](#Group_Provider_Info-2_332)
**Health Care Code Information**{::nomarkdown}<pre><code>  healthCareCodeInformation</code></pre>{:/} | OBJECT | health_care_code_information |  |  | [Health_Care_Code_Information-2_31211](#Health_Care_Code_Information-2_31211)
**Military Info Status Code**{::nomarkdown}<pre><code>  militaryInfoStatusCode</code></pre>{:/} | POINTER | military_info_status_code |  |  | X12_271_Military_Personnel_Info_Status_Code-365_039
**Military Employment Status**{::nomarkdown}<pre><code>  militaryEmploymentStatus</code></pre>{:/} | POINTER | military_employment_status |  |  | X12_271_Military_Employment_Status_Code-365_046
**Military Govt Affiliation Code**{::nomarkdown}<pre><code>  militaryGovtAffiliationCode</code></pre>{:/} | POINTER | military_govt_affiliation_code |  |  | X12_271_Military_Govt_Service_Affiliation-365_041
**Military Personnel Description**{::nomarkdown}<pre><code>  militaryPersonnelDescription</code></pre>{:/} | STRING | military_personnel_description |  |  | 
**Military Service Rank Code**{::nomarkdown}<pre><code>  militaryServieRankCode</code></pre>{:/} | POINTER | military_service_rank_code |  |  | X12_271_Military_Service_Rank-365_042
**Date Time Period Format Qual**{::nomarkdown}<pre><code>  dateTimePeriodFormatQual</code></pre>{:/} | POINTER | date_time_period_format_qual |  |  | X12_271_Date_Format_Qualifier-365_032
**Date Time Period**{::nomarkdown}<pre><code>  dateTimePeriod</code></pre>{:/} | STRING | date_time_period |  |  | 
***Group Name**{::nomarkdown}<pre><code>  groupName</code></pre>{:/} | STRING | group_name |  |  | 
**Pt. Relationship To Insured**{::nomarkdown}<pre><code>  ptRelationshipToInsured</code></pre>{:/} | ENUMERATION | pt_relationship_to_insured |  |  | {::nomarkdown}PATIENT: <em><strong>01</strong></em><br/>ORGAN DONOR: <em><strong>11</strong></em><br/>NATURAL CHILD: <em><strong>03</strong></em><br/>DO NOT USE: <em><strong>18</strong></em><br/>FATHER: <em><strong>33</strong></em><br/>INJURED PLANTIFF: <em><strong>15</strong></em><br/>SIGNIFICANT OTHER: <em><strong>34</strong></em><br/>MOTHER: <em><strong>32</strong></em><br/>EMPLOYEE: <em><strong>08</strong></em><br/>SPOUSE: <em><strong>02</strong></em><br/>LIFE PARTNER: <em><strong>35</strong></em><br/>OTHER RELATIONSHIP: <em><strong>36</strong></em>{:/}
***Name Of Insured**{::nomarkdown}<pre><code>  nameOfInsured</code></pre>{:/} | STRING | name_of_insured-2_312-17 |  |  | 
**Eligibility/Benefit**{::nomarkdown}<pre><code>  eligibilityBenefit</code></pre>{:/} | OBJECT | eligibility_benefit |  |  | [Eligibility_Benefit-2_322](#Eligibility_Benefit-2_322)

#### <a name="Group_Reference_Information-2_3129"></a>Group Reference Information

<dl>
<dt>ID</dt><dd>Group_Reference_Information-2_3129</dd>
<dt>File Type</dt><dd>2.3129</dd>
<dt>Label</dt><dd>Group Reference Information</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Reference Id (Group)**{::nomarkdown}<pre><code>  referenceIdGroup</code></pre>{:/} | STRING | reference_id_group |  |  | 
**Ref Id Qualifier (Group)**{::nomarkdown}<pre><code>  refIdQualifierGroup</code></pre>{:/} | POINTER | ref_id_qualifier_group |  |  | X12_271_Reference_Identification-365_028
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | STRING | description |  |  | 

#### <a name="Group_Provider_Info-2_332"></a>Group Provider Info

<dl>
<dt>ID</dt><dd>Group_Provider_Info-2_332</dd>
<dt>File Type</dt><dd>2.332</dd>
<dt>Label</dt><dd>Group Provider Info</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Provider Code**{::nomarkdown}<pre><code>  providerCode</code></pre>{:/} | POINTER | provider_code |  |  | X12_271_Provider_Code-365_024
**Prov Reference Id**{::nomarkdown}<pre><code>  provReferenceId</code></pre>{:/} | STRING | prov_reference_id |  |  | 

#### <a name="Health_Care_Code_Information-2_31211"></a>Health Care Code Information

<dl>
<dt>ID</dt><dd>Health_Care_Code_Information-2_31211</dd>
<dt>File Type</dt><dd>2.31211</dd>
<dt>Label</dt><dd>Health Care Code Information</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Diagnosis Code**{::nomarkdown}<pre><code>  diagnosisCode</code></pre>{:/} | POINTER | diagnosis_code |  |  | [Icd_Diagnosis-80](../VDM/Icd_Diagnosis-80)
**Diagnosis Code Qualifier**{::nomarkdown}<pre><code>  diagnosisCodeQualifier</code></pre>{:/} | STRING | diagnosis_code_qualifier |  |  | 
**Primary Or Secondary?**{::nomarkdown}<pre><code>  primaryOrSecondary</code></pre>{:/} | ENUMERATION | primary_or_secondary |  |  | {::nomarkdown}PRIMARY: <em><strong>P</strong></em><br/>SECONDARY: <em><strong>S</strong></em>{:/}

#### <a name="Eligibility_Benefit-2_322"></a>Eligibility/Benefit

<dl>
<dt>ID</dt><dd>Eligibility_Benefit-2_322</dd>
<dt>File Type</dt><dd>2.322</dd>
<dt>Label</dt><dd>Eligibility/Benefit</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Eb Number**{::nomarkdown}<pre><code>  ebNumber</code></pre>{:/} | NUMERIC | eb_number |  | INDEXED<br/>REQUIRED | 
**Eligibility/Benefit Info**{::nomarkdown}<pre><code>  eligibilityBenefitInfo</code></pre>{:/} | POINTER | eligibility_benefit_info |  |  | X12_271_Eligibility_Benefit-365_011
**Coverage Level**{::nomarkdown}<pre><code>  coverageLevel</code></pre>{:/} | POINTER | coverage_level |  |  | X12_271_Coverage_Level-365_012
***Service Type**{::nomarkdown}<pre><code>  serviceType</code></pre>{:/} | POINTER | service_type |  |  | X12_271_Service_Type-365_013
**Insurance Type**{::nomarkdown}<pre><code>  insuranceType</code></pre>{:/} | POINTER | insurance_type |  |  | X12_271_Insurance_Type-365_014
**Plan Coverage Description**{::nomarkdown}<pre><code>  planCoverageDescription</code></pre>{:/} | STRING | plan_coverage_description |  |  | 
**Time Period Qualifier**{::nomarkdown}<pre><code>  timePeriodQualifier</code></pre>{:/} | POINTER | time_period_qualifier |  |  | X12_271_Time_Period_Qualifier-365_015
**Monetary Amount**{::nomarkdown}<pre><code>  monetaryAmount</code></pre>{:/} | STRING | monetary_amount |  |  | 
**Percent**{::nomarkdown}<pre><code>  percent</code></pre>{:/} | NUMERIC | percent |  |  | 
**Quantity Qualifier**{::nomarkdown}<pre><code>  quantityQualifier</code></pre>{:/} | POINTER | quantity_qualifier |  |  | X12_271_Quantity_Qualifier-365_016
**Quantity**{::nomarkdown}<pre><code>  quantity</code></pre>{:/} | STRING | quantity |  |  | 
**Authorization/Certification**{::nomarkdown}<pre><code>  authorizationCertification</code></pre>{:/} | POINTER | authorization_certification |  |  | X12_271_Yes_No_Response_Code_-365_033
**In Plan**{::nomarkdown}<pre><code>  inPlan</code></pre>{:/} | POINTER | in_plan |  |  | X12_271_Yes_No_Response_Code_-365_033
**Procedure Coding Method**{::nomarkdown}<pre><code>  procedureCodingMethod</code></pre>{:/} | POINTER | procedure_coding_method |  |  | X12_271_Procedure_Coding_Method-365_035
**Procedure Code**{::nomarkdown}<pre><code>  procedureCode</code></pre>{:/} | STRING | procedure_code |  |  | 
**Procedure Modifier 1**{::nomarkdown}<pre><code>  procedureModifier1</code></pre>{:/} | STRING | procedure_modifier_1 |  |  | 
**Procedure Modifier 2**{::nomarkdown}<pre><code>  procedureModifier2</code></pre>{:/} | STRING | procedure_modifier_2 |  |  | 
**Procedure Modifier 3**{::nomarkdown}<pre><code>  procedureModifier3</code></pre>{:/} | STRING | procedure_modifier_3 |  |  | 
**Procedure Modifier 4**{::nomarkdown}<pre><code>  procedureModifier4</code></pre>{:/} | STRING | procedure_modifier_4 |  |  | 
**Notes**{::nomarkdown}<pre><code>  notes</code></pre>{:/} | STRING | notes |  |  | 
**Entity Id Code**{::nomarkdown}<pre><code>  entityIdCode</code></pre>{:/} | POINTER | entity_id_code |  |  | X12_271_Entity_Identifier_Code-365_022
**Entity Type**{::nomarkdown}<pre><code>  entityType</code></pre>{:/} | POINTER | entity_type |  |  | X12_271_Entity_Type_Qualifier-365_043
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | name |  |  | 
**Entity Id**{::nomarkdown}<pre><code>  entityId</code></pre>{:/} | STRING | entity_id |  |  | 
**Entity Id Qualifier**{::nomarkdown}<pre><code>  entityIdQualifier</code></pre>{:/} | POINTER | entity_id_qualifier |  |  | X12_271_Identification_Qualifier-365_023
**Entity Relationship Code**{::nomarkdown}<pre><code>  entityRelationshipCode</code></pre>{:/} | POINTER | entity_relationship_code |  |  | X12_271_Entity_Relationship_Code-365_031
**Address Line 1**{::nomarkdown}<pre><code>  addressLine1</code></pre>{:/} | STRING | address_line_1 |  |  | 
**Address Line 2**{::nomarkdown}<pre><code>  addressLine2</code></pre>{:/} | STRING | address_line_2 |  |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | STRING | city |  |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | POINTER | state |  |  | State-5
**Zip**{::nomarkdown}<pre><code>  zip</code></pre>{:/} | STRING | zip |  |  | 
**Country Code**{::nomarkdown}<pre><code>  countryCode</code></pre>{:/} | STRING | country_code |  |  | 
**Location**{::nomarkdown}<pre><code>  location</code></pre>{:/} | STRING | location |  |  | 
**Location Qualifier**{::nomarkdown}<pre><code>  locationQualifier</code></pre>{:/} | POINTER | location_qualifier |  |  | X12_271_Location_Qualifer-365_034
**Subdivision Code**{::nomarkdown}<pre><code>  subdivisionCode</code></pre>{:/} | STRING | subdivision_code |  |  | 
**Provider Code**{::nomarkdown}<pre><code>  providerCode</code></pre>{:/} | POINTER | provider_code |  |  | X12_271_Provider_Code-365_024
**Reference Id**{::nomarkdown}<pre><code>  referenceId</code></pre>{:/} | STRING | reference_id |  |  | 
**Reference Id Qualifier**{::nomarkdown}<pre><code>  referenceIdQualifier</code></pre>{:/} | POINTER | reference_id_qualifier |  |  | X12_271_Reference_Identification-365_028
**Contact Information**{::nomarkdown}<pre><code>  contactInformation</code></pre>{:/} | OBJECT | contact_information |  |  | [Contact_Information-2_3226](#Contact_Information-2_3226)
**Healthcare Services Delivery**{::nomarkdown}<pre><code>  healthcareServicesDelivery</code></pre>{:/} | OBJECT | healthcare_services_delivery |  |  | [Healthcare_Services_Delivery-2_3227](#Healthcare_Services_Delivery-2_3227)
**Subscriber Dates**{::nomarkdown}<pre><code>  subscriberDates</code></pre>{:/} | OBJECT | subscriber_dates |  |  | [Subscriber_Dates-2_3228](#Subscriber_Dates-2_3228)
**Subscriber Additional Info**{::nomarkdown}<pre><code>  subscriberAdditionalInfo</code></pre>{:/} | OBJECT | subscriber_additional_info |  |  | [Subscriber_Additional_Info-2_3229](#Subscriber_Additional_Info-2_3229)
**Subscriber Reference Id**{::nomarkdown}<pre><code>  subscriberReferenceId</code></pre>{:/} | OBJECT | subscriber_reference_id |  |  | [Subscriber_Reference_Id-2_32291](#Subscriber_Reference_Id-2_32291)
**Service Types**{::nomarkdown}<pre><code>  serviceTypes</code></pre>{:/} | POINTER | service_types |  |  | X12_271_Service_Type-365_013

#### <a name="Contact_Information-2_3226"></a>Contact Information

<dl>
<dt>ID</dt><dd>Contact_Information-2_3226</dd>
<dt>File Type</dt><dd>2.3226</dd>
<dt>Label</dt><dd>Contact Information</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | name |  |  | 
***Communication Number**{::nomarkdown}<pre><code>  communcationNumber</code></pre>{:/} | STRING | communication_number |  |  | 
**Communication Qualifier**{::nomarkdown}<pre><code>  communicationQualifier</code></pre>{:/} | POINTER | communication_qualifier |  |  | X12_271_Contact_Qualifier-365_021
**Communication Number**{::nomarkdown}<pre><code>  communicationNumber</code></pre>{:/} | STRING | communication_number-2_3226-1 |  |  | 

#### <a name="Healthcare_Services_Delivery-2_3227"></a>Healthcare Services Delivery

<dl>
<dt>ID</dt><dd>Healthcare_Services_Delivery-2_3227</dd>
<dt>File Type</dt><dd>2.3227</dd>
<dt>Label</dt><dd>Healthcare Services Delivery</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Benefit Quantity**{::nomarkdown}<pre><code>  benefitQuantity</code></pre>{:/} | NUMERIC | benefit_quantity |  |  | 
**Quantity Qualifier**{::nomarkdown}<pre><code>  quantityQualifier</code></pre>{:/} | POINTER | quantity_qualifier |  |  | X12_271_Quantity_Qualifier-365_016
**Sample Selection Modulus**{::nomarkdown}<pre><code>  sampleSelectionModulus</code></pre>{:/} | STRING | sample_selection_modulus |  |  | 
**Units Of Measurement**{::nomarkdown}<pre><code>  unitsOfMeasurement</code></pre>{:/} | POINTER | units_of_measurement |  |  | X12_271_Units_Of_Measurement-365_029
**Time Periods**{::nomarkdown}<pre><code>  timePeriods</code></pre>{:/} | NUMERIC | time_periods |  |  | 
**Time Period Qualifier**{::nomarkdown}<pre><code>  timePeriodQualifier</code></pre>{:/} | POINTER | time_period_qualifier |  |  | X12_271_Time_Period_Qualifier-365_015
**Delivery Frequency**{::nomarkdown}<pre><code>  deliveryFrequency</code></pre>{:/} | POINTER | delivery_frequency |  |  | X12_271_Delivery_Frequency_Code-365_025
**Delivery Pattern**{::nomarkdown}<pre><code>  deliveryPattern</code></pre>{:/} | POINTER | delivery_pattern |  |  | X12_271_Delivery_Pattern-365_036

#### <a name="Subscriber_Dates-2_3228"></a>Subscriber Dates

<dl>
<dt>ID</dt><dd>Subscriber_Dates-2_3228</dd>
<dt>File Type</dt><dd>2.3228</dd>
<dt>Label</dt><dd>Subscriber Dates</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | STRING | date |  |  | 
**Date Qualifier**{::nomarkdown}<pre><code>  dateQualifier</code></pre>{:/} | POINTER | date_qualifier |  |  | X12_271_Date_Qualifier-365_026
**Date Format**{::nomarkdown}<pre><code>  dateFormat</code></pre>{:/} | POINTER | date_format |  |  | X12_271_Date_Format_Qualifier-365_032

#### <a name="Subscriber_Additional_Info-2_3229"></a>Subscriber Additional Info

<dl>
<dt>ID</dt><dd>Subscriber_Additional_Info-2_3229</dd>
<dt>File Type</dt><dd>2.3229</dd>
<dt>Label</dt><dd>Subscriber Additional Info</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Place Of Service**{::nomarkdown}<pre><code>  placeOfService</code></pre>{:/} | POINTER | place_of_service |  |  | Place_Of_Service-353_1
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | POINTER | diagnosis |  |  | [Icd_Diagnosis-80](../VDM/Icd_Diagnosis-80)
**Qualifier**{::nomarkdown}<pre><code>  qualifier</code></pre>{:/} | POINTER | qualifier |  |  | X12_271_Code_List_Qualifier-365_044
**Nature Of Injury Code**{::nomarkdown}<pre><code>  natureOfInjuryCode</code></pre>{:/} | POINTER | nature_of_injury_code |  |  | X12_271_Nature_Of_Injury_Codes-365_045
**Nature Of Injury Category**{::nomarkdown}<pre><code>  natureOfInjuryCategory</code></pre>{:/} | STRING | nature_of_injury_category |  |  | 
**Nature Of Injury Text**{::nomarkdown}<pre><code>  natureOfInjuryText</code></pre>{:/} | STRING | nature_of_injury_text |  |  | 

#### <a name="Subscriber_Reference_Id-2_32291"></a>Subscriber Reference Id

<dl>
<dt>ID</dt><dd>Subscriber_Reference_Id-2_32291</dd>
<dt>File Type</dt><dd>2.32291</dd>
<dt>Label</dt><dd>Subscriber Reference Id</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | NUMERIC | sequence |  | INDEXED<br/>REQUIRED | 
**Reference Id**{::nomarkdown}<pre><code>  referenceId</code></pre>{:/} | STRING | reference_id |  |  | 
**Reference Id Qualifier**{::nomarkdown}<pre><code>  referenceIdQualifier</code></pre>{:/} | POINTER | reference_id_qualifier |  |  | X12_271_Reference_Identification-365_028
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | STRING | description |  |  | 

#### <a name="treatmentFactors"></a>

<dl>
<dt>ID</dt><dd>treatmentFactors</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Radiation Exposure**{::nomarkdown}<pre><code>  radiationExposure</code></pre>{:/} | OBJECT | N/A |  |  | [radiationExposure](#radiationExposure)
**Agent Orange Exposure**{::nomarkdown}<pre><code>  agentOrangeExposure</code></pre>{:/} | OBJECT | N/A |  |  | [agentOrangeExposure](#agentOrangeExposure)
**Southwest Asian Conditions**{::nomarkdown}<pre><code>  southwestAsianConditions</code></pre>{:/} | OBJECT | N/A |  |  | [southwestAsianConditions](#southwestAsianConditions)

#### <a name="radiationExposure"></a>

<dl>
<dt>ID</dt><dd>radiationExposure</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Exposure Indicated**{::nomarkdown}<pre><code>  exposureIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Registration Date**{::nomarkdown}<pre><code>  registrationDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Exposure Method**{::nomarkdown}<pre><code>  exposureMethod</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}H/N AND ATMOSPHERIC TESTING: <em><strong>4</strong></em><br/>OTHER: <em><strong>7</strong></em><br/>HIROSHIMA/NAGASAKI: <em><strong>2</strong></em><br/>EXPOSURE AT NUCLEAR FACILITY: <em><strong>6</strong></em><br/>UNDERGROUND NUCLEAR TESTING: <em><strong>5</strong></em><br/>ATMOSPHERIC NUCLEAR TESTING: <em><strong>3</strong></em>{:/}

#### <a name="agentOrangeExposure"></a>

<dl>
<dt>ID</dt><dd>agentOrangeExposure</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Exposure Indicated**{::nomarkdown}<pre><code>  exposureIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Registration Date**{::nomarkdown}<pre><code>  registrationDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Reported To Co**{::nomarkdown}<pre><code>  reportedToCo</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Exam Date**{::nomarkdown}<pre><code>  examDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Registration Number**{::nomarkdown}<pre><code>  registrationNumber</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Exposure Location**{::nomarkdown}<pre><code>  exposureLocation</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}VIETNAM: <em><strong>V</strong></em><br/>OTHER: <em><strong>O</strong></em><br/>KOREAN DMZ: <em><strong>K</strong></em>{:/}

#### <a name="southwestAsianConditions"></a>

<dl>
<dt>ID</dt><dd>southwestAsianConditions</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Southwest Asia Conditions?**{::nomarkdown}<pre><code>  exposureIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Sw Asia Cond Registration Date**{::nomarkdown}<pre><code>  registrationDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Sw Asia Cond Exam Date**{::nomarkdown}<pre><code>  examDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="militaryService"></a>

<dl>
<dt>ID</dt><dd>militaryService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Period Of Service**{::nomarkdown}<pre><code>  periodOfService</code></pre>{:/} | POINTER | N/A |  |  | Period_Of_Service-21
**Discharge Type Last**{::nomarkdown}<pre><code>  dischargeTypeLast</code></pre>{:/} | POINTER | N/A |  |  | Type_Of_Discharge-25
**Branch Last**{::nomarkdown}<pre><code>  branchLast</code></pre>{:/} | POINTER | N/A |  |  | Branch_Of_Service-23
**Entry Date Last**{::nomarkdown}<pre><code>  entryDateLast</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Separation Date Last**{::nomarkdown}<pre><code>  separationDateLast</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Service Number Last**{::nomarkdown}<pre><code>  serviceNumberLast</code></pre>{:/} | STRING | N/A |  |  | 
**Second Episode**{::nomarkdown}<pre><code>  secondEpisode</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Discharge Type Ntl**{::nomarkdown}<pre><code>  dischargeTypeNtl</code></pre>{:/} | POINTER | N/A |  |  | Type_Of_Discharge-25
**Branch Ntl**{::nomarkdown}<pre><code>  branchNtl</code></pre>{:/} | POINTER | N/A |  |  | Branch_Of_Service-23
**Component Last**{::nomarkdown}<pre><code>  componentLast</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}ACTIVATED RESERVE: <em><strong>V</strong></em><br/>ACTIVATED NG: <em><strong>G</strong></em><br/>REGULAR: <em><strong>R</strong></em>{:/}
**Component Ntl**{::nomarkdown}<pre><code>  componentNtl</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}ACTIVATED RESERVE: <em><strong>V</strong></em><br/>ACTIVATED NG: <em><strong>G</strong></em><br/>REGULAR: <em><strong>R</strong></em>{:/}
**Component Nntl**{::nomarkdown}<pre><code>  componentNntl</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}ACTIVATED RESERVE: <em><strong>V</strong></em><br/>ACTIVATED NG: <em><strong>G</strong></em><br/>REGULAR: <em><strong>R</strong></em>{:/}
**Entry Date Ntl**{::nomarkdown}<pre><code>  entryDateNtl</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Separation Date Ntl**{::nomarkdown}<pre><code>  separationDateNtl</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Service Number Ntl**{::nomarkdown}<pre><code>  serviceNumberNtl</code></pre>{:/} | STRING | N/A |  |  | 
**Third Episode**{::nomarkdown}<pre><code>  thirdEpisode</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Discharge Type Nntl**{::nomarkdown}<pre><code>  dischargeTypeNntl</code></pre>{:/} | POINTER | N/A |  |  | Type_Of_Discharge-25
**Branch Nntl**{::nomarkdown}<pre><code>  branchNntl</code></pre>{:/} | POINTER | N/A |  |  | Branch_Of_Service-23
**Entry Date Nntl**{::nomarkdown}<pre><code>  entryDateNntl</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Separation Date Nntl**{::nomarkdown}<pre><code>  separationDateNntl</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Service Number Nntl**{::nomarkdown}<pre><code>  serviceNumberNntl</code></pre>{:/} | STRING | N/A |  |  | 
**Verification Date**{::nomarkdown}<pre><code>  verificationDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Filipino Veteran Proof**{::nomarkdown}<pre><code>  filipinoVeteranProof</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}NO PROOF: <em><strong>NO</strong></em><br/>REPORT OF BIRTH ABROAD OF US CITIZEN: <em><strong>BA</strong></em><br/>US BIRTH CERTIFICATE: <em><strong>BC</strong></em><br/>VERIFICATION OF PERMANENT RESIDENCY: <em><strong>PR</strong></em><br/>VA COMPENSATION AT FULL DOLLAR RATE: <em><strong>VA</strong></em><br/>US PASSPORT: <em><strong>PP</strong></em><br/>VERIFICATION OF NATURALIZATION: <em><strong>NA</strong></em>{:/}
**Service Oef Or Oif**{::nomarkdown}<pre><code>  serviceOefOrOif</code></pre>{:/} | OBJECT | N/A |  |  | [serviceOefOrOifs](#serviceOefOrOifs)
**Military Service Episode**{::nomarkdown}<pre><code>  militaryServiceEpisode</code></pre>{:/} | OBJECT | military_service_episode |  |  | [militaryServiceEpisodes](#militaryServiceEpisodes)
**Vietnam Service**{::nomarkdown}<pre><code>  vietnamService</code></pre>{:/} | OBJECT | N/A |  |  | [vietnamService](#vietnamService)
**Persian Gulf Service**{::nomarkdown}<pre><code>  persianGulfService</code></pre>{:/} | OBJECT | N/A |  |  | [persianGulfService](#persianGulfService)
**Somalia Service**{::nomarkdown}<pre><code>  somaliaService</code></pre>{:/} | OBJECT | N/A |  |  | [somaliaService](#somaliaService)
**Yugoslavia Service**{::nomarkdown}<pre><code>  yugoslaviaService</code></pre>{:/} | OBJECT | N/A |  |  | [yugoslaviaService](#yugoslaviaService)
**Lebanon Service**{::nomarkdown}<pre><code>  lebanonService</code></pre>{:/} | OBJECT | N/A |  |  | [lebanonService](#lebanonService)
**Grenada Service**{::nomarkdown}<pre><code>  grenadaService</code></pre>{:/} | OBJECT | N/A |  |  | [grenadaService](#grenadaService)
**Panama Service**{::nomarkdown}<pre><code>  panamaService</code></pre>{:/} | OBJECT | N/A |  |  | [panamaService](#panamaService)
**Pow Status**{::nomarkdown}<pre><code>  powStatus</code></pre>{:/} | OBJECT | N/A |  |  | [powStatus](#powStatus)
**Combat Service**{::nomarkdown}<pre><code>  combatService</code></pre>{:/} | OBJECT | N/A |  |  | [combatService](#combatService)
**Purple Heart Status**{::nomarkdown}<pre><code>  purpleHeartStatus</code></pre>{:/} | OBJECT | N/A |  |  | [combatService](#combatService)
**Purple Heart Date Time Updated**{::nomarkdown}<pre><code>  purpleHeartDateTimeUpdated</code></pre>{:/} | OBJECT | N/A |  |  | [phDateTimeUpdated](#phDateTimeUpdated)

#### <a name="serviceOefOrOifs"></a>Service [Oef Or Oif]

<dl>
<dt>ID</dt><dd>serviceOefOrOifs</dd>
<dt>File Type</dt><dd>2.3215</dd>
<dt>Label</dt><dd>Service [Oef Or Oif]</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Location Of Service**{::nomarkdown}<pre><code>  locationOfService</code></pre>{:/} | ENUMERATION | N/A |  | INDEXED<br/>REQUIRED | {::nomarkdown}UNKNOWN OEF/OIF: <em><strong>3</strong></em><br/>OIF: <em><strong>1</strong></em><br/>OEF: <em><strong>2</strong></em>{:/}
**Oef/Oif From Date**{::nomarkdown}<pre><code>  oefOifFromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Oef/Oif To Date**{::nomarkdown}<pre><code>  oefOifToDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Data Locked**{::nomarkdown}<pre><code>  dataLocked</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Recorded Date/Time**{::nomarkdown}<pre><code>  recordedDateTime</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Entered By Site**{::nomarkdown}<pre><code>  enteredBySite</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)

#### <a name="militaryServiceEpisodes"></a>Military Service Episode

<dl>
<dt>ID</dt><dd>militaryServiceEpisodes</dd>
<dt>File Type</dt><dd>2.3216</dd>
<dt>Label</dt><dd>Military Service Episode</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Entry Date**{::nomarkdown}<pre><code>  entryDate</code></pre>{:/} | DATE-TIME | N/A |  | INDEXED<br/>REQUIRED | 
**Service Separation Date**{::nomarkdown}<pre><code>  separationDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Service Branch**{::nomarkdown}<pre><code>  branch</code></pre>{:/} | POINTER | N/A |  |  | Branch_Of_Service-23
**Service Component**{::nomarkdown}<pre><code>  component</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}ACTIVATED RESERVE: <em><strong>V</strong></em><br/>ACTIVATED NG: <em><strong>G</strong></em><br/>REGULAR: <em><strong>R</strong></em>{:/}
**Service Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | STRING | N/A |  |  | 
**Service Discharge Type**{::nomarkdown}<pre><code>  dischargeType</code></pre>{:/} | POINTER | N/A |  |  | Type_Of_Discharge-25
**Data Locked**{::nomarkdown}<pre><code>  dataLocked</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

#### <a name="vietnamService"></a>

<dl>
<dt>ID</dt><dd>vietnamService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="persianGulfService"></a>

<dl>
<dt>ID</dt><dd>persianGulfService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="somaliaService"></a>

<dl>
<dt>ID</dt><dd>somaliaService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="yugoslaviaService"></a>

<dl>
<dt>ID</dt><dd>yugoslaviaService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="lebanonService"></a>

<dl>
<dt>ID</dt><dd>lebanonService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="grenadaService"></a>

<dl>
<dt>ID</dt><dd>grenadaService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="panamaService"></a>

<dl>
<dt>ID</dt><dd>panamaService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="powStatus"></a>

<dl>
<dt>ID</dt><dd>powStatus</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Status Indicated**{::nomarkdown}<pre><code>  statusIndicated</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Confinement Location**{::nomarkdown}<pre><code>  confinementLocation</code></pre>{:/} | POINTER | N/A |  |  | Pow_Period-22
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Status Verified**{::nomarkdown}<pre><code>  statusVerified</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="combatService"></a>

<dl>
<dt>ID</dt><dd>combatService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Indicated**{::nomarkdown}<pre><code>  serviceIndicated</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Service Location**{::nomarkdown}<pre><code>  serviceLocation</code></pre>{:/} | POINTER | N/A |  |  | Pow_Period-22
**From Date**{::nomarkdown}<pre><code>  fromDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**To Date**{::nomarkdown}<pre><code>  toDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Combat Veteran End Date**{::nomarkdown}<pre><code>  combatVeteranEndDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Cv Date Edited**{::nomarkdown}<pre><code>  cvDateEdited</code></pre>{:/} | DATE-TIME | N/A |  |  | 

#### <a name="combatService"></a>

<dl>
<dt>ID</dt><dd>combatService</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Status Indicated**{::nomarkdown}<pre><code>  statusIndicated</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Current Status**{::nomarkdown}<pre><code>  currentStatus</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}CONFIRMED: <em><strong>3</strong></em><br/>IN PROCESS: <em><strong>2</strong></em><br/>PENDING: <em><strong>1</strong></em>{:/}
**Current Remarks**{::nomarkdown}<pre><code>  currentRemarks</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNDELIVERABLE MAIL: <em><strong>6</strong></em><br/>VAMC: <em><strong>5</strong></em><br/>ENTERED IN ERROR: <em><strong>3</strong></em><br/>UNACCEPTABLE DOCUMENTATION: <em><strong>1</strong></em><br/>NO DOCUMENTATION REC'D: <em><strong>2</strong></em><br/>UNSUPPORTED PURPLE HEART: <em><strong>4</strong></em>{:/}
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | POINTER | N/A |  |  | [Institution-4](../VDM/Institution-4)

#### <a name="phDateTimeUpdated"></a>Ph Date/Time Updated

<dl>
<dt>ID</dt><dd>phDateTimeUpdated</dd>
<dt>File Type</dt><dd>2.0534</dd>
<dt>Label</dt><dd>Ph Date/Time Updated</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Ph Date/Time Updated**{::nomarkdown}<pre><code>  phDateTimeUpdated</code></pre>{:/} | DATE-TIME | N/A |  | INDEXED<br/>REQUIRED | 
**Ph?**{::nomarkdown}<pre><code>  ph</code></pre>{:/} | BOOLEAN | N/A |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Ph Status**{::nomarkdown}<pre><code>  phStatus</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}CONFIRMED: <em><strong>3</strong></em><br/>IN PROCESS: <em><strong>2</strong></em><br/>PENDING: <em><strong>1</strong></em>{:/}
**Ph Remarks**{::nomarkdown}<pre><code>  phRemarks</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}UNDELIVERABLE MAIL: <em><strong>6</strong></em><br/>VAMC: <em><strong>5</strong></em><br/>ENTERED IN ERROR: <em><strong>3</strong></em><br/>UNACCEPTABLE DOCUMENTATION: <em><strong>1</strong></em><br/>NO DOCUMENTATION REC'D: <em><strong>2</strong></em><br/>UNSUPPORTED PURPLE HEART: <em><strong>4</strong></em>{:/}
**Ph User**{::nomarkdown}<pre><code>  phUser</code></pre>{:/} | STRING | N/A |  |  | 

#### <a name="dateOfDentalTreatment"></a>Date Of Dental Treatment

<dl>
<dt>ID</dt><dd>dateOfDentalTreatment</dd>
<dt>File Type</dt><dd>2.11</dd>
<dt>Label</dt><dd>Date Of Dental Treatment</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date Of Dental Treatment**{::nomarkdown}<pre><code>  dateOfDentalTreatment</code></pre>{:/} | DATE-TIME | date_of_dental_treatment |  | REQUIRED | 
**Condition**{::nomarkdown}<pre><code>  condition</code></pre>{:/} | STRING | condition |  |  | 
**Date Condition First Noticed**{::nomarkdown}<pre><code>  dateConditionFirstNoticed</code></pre>{:/} | DATE-TIME | date_condition_first_noticed |  |  | 

#### <a name="ratedDisabilities"></a>Rated Disabilities (Va)

<dl>
<dt>ID</dt><dd>ratedDisabilities</dd>
<dt>File Type</dt><dd>2.04</dd>
<dt>Label</dt><dd>Rated Disabilities (Va)</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Rated Disabilities (Va)**{::nomarkdown}<pre><code>  ratedDisabilitiesVa</code></pre>{:/} | POINTER | rated_disabilities_va |  | REQUIRED | Disability_Condition-31
**Disability %**{::nomarkdown}<pre><code>  disability</code></pre>{:/} | NUMERIC | disability_ |  |  | 
**Service Connected**{::nomarkdown}<pre><code>  serviceConncted</code></pre>{:/} | BOOLEAN | service_connected |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Extremity Affected**{::nomarkdown}<pre><code>  extremityEffected</code></pre>{:/} | ENUMERATION | extremity_affected |  |  | {::nomarkdown}RIGHT UPPER: <em><strong>RU</strong></em><br/>LEFT LOWER: <em><strong>LL</strong></em><br/>BOTH LOWER: <em><strong>BL</strong></em><br/>LEFT UPPER: <em><strong>LU</strong></em><br/>RIGHT LOWER: <em><strong>RL</strong></em><br/>BOTH UPPER: <em><strong>BU</strong></em>{:/}
**Original Effective Date**{::nomarkdown}<pre><code>  originalEffectiveDate</code></pre>{:/} | DATE-TIME | original_effective_date |  |  | 
**Current Effective Date**{::nomarkdown}<pre><code>  currentEffectiveDate</code></pre>{:/} | DATE-TIME | current_effective_date |  |  | 

#### <a name="serviceConnectedConditions"></a>Service Connected Conditions

<dl>
<dt>ID</dt><dd>serviceConnectedConditions</dd>
<dt>File Type</dt><dd>2.05</dd>
<dt>Label</dt><dd>Service Connected Conditions</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Service Connected Conditions**{::nomarkdown}<pre><code>  serviceConnectedConditions</code></pre>{:/} | STRING | service_connected_conditions |  | REQUIRED | 
**Percentage**{::nomarkdown}<pre><code>  percentage</code></pre>{:/} | NUMERIC | percentage |  |  | 

#### <a name="cdStatusProcedures"></a>Cd Status Procedures

<dl>
<dt>ID</dt><dd>cdStatusProcedures</dd>
<dt>File Type</dt><dd>2.397</dd>
<dt>Label</dt><dd>Cd Status Procedures</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cd Status Procedures**{::nomarkdown}<pre><code>  cdStatusProcedures</code></pre>{:/} | POINTER | cd_status_procedures |  | INDEXED<br/>REQUIRED | Catastrophic_Disability_Reasons-27_17
**Affected Extremity**{::nomarkdown}<pre><code>  affectedExtremity</code></pre>{:/} | ENUMERATION | affected_extremity |  |  | {::nomarkdown}Right Lower Extremity: <em><strong>RLE</strong></em><br/>Bilateral Lower Extremity: <em><strong>BLE</strong></em><br/>Left Lower Extremity: <em><strong>LLE</strong></em><br/>Left Upper Extremity: <em><strong>LUE</strong></em><br/>Bilateral Upper Extremity: <em><strong>BUE</strong></em><br/>Right Upper Extremity: <em><strong>RUE</strong></em>{:/}

#### <a name="cdStatusConditions"></a>Cd Status Conditions

<dl>
<dt>ID</dt><dd>cdStatusConditions</dd>
<dt>File Type</dt><dd>2.398</dd>
<dt>Label</dt><dd>Cd Status Conditions</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cd Status Conditions**{::nomarkdown}<pre><code>  cdStatusConditions</code></pre>{:/} | POINTER | cd_status_conditions |  | INDEXED<br/>REQUIRED | Catastrophic_Disability_Reasons-27_17
**Score**{::nomarkdown}<pre><code>  score</code></pre>{:/} | NUMERIC | score |  |  | 
**Permanent Indicator**{::nomarkdown}<pre><code>  permanentIndicator</code></pre>{:/} | ENUMERATION | permanent_indicator |  |  | {::nomarkdown}UNKNOWN: <em><strong>3</strong></em><br/>PERMANENT: <em><strong>1</strong></em><br/>NOT PERMANENT: <em><strong>2</strong></em>{:/}

#### <a name="cdHistoryDate"></a>Cd History Date

<dl>
<dt>ID</dt><dd>cdHistoryDate</dd>
<dt>File Type</dt><dd>2.399</dd>
<dt>Label</dt><dd>Cd History Date</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cd History Date**{::nomarkdown}<pre><code>  cdHistoryDate</code></pre>{:/} | DATE-TIME | cd_history_date |  | INDEXED<br/>REQUIRED | 
**Veteran Catastrophically Disabled?**{::nomarkdown}<pre><code>  veteranCatastrophicallyDisabled</code></pre>{:/} | BOOLEAN | veteran_catastrophically_disabled |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Decided By**{::nomarkdown}<pre><code>  decidedBy</code></pre>{:/} | STRING | decided_by |  |  | 
**Date Of Decision**{::nomarkdown}<pre><code>  dateOfDecision</code></pre>{:/} | DATE-TIME | date_of_decision |  |  | 
**Facility Making Determination**{::nomarkdown}<pre><code>  facilityMakingDetermination</code></pre>{:/} | POINTER | facility_making_determination |  |  | [Institution-4](../VDM/Institution-4)
**Review Date**{::nomarkdown}<pre><code>  reviewDate</code></pre>{:/} | DATE-TIME | review_date |  |  | 
**Method Of Determination**{::nomarkdown}<pre><code>  methodOfDetermination</code></pre>{:/} | ENUMERATION | method_of_determination |  |  | {::nomarkdown}AUTOMATED RECORD REVIEW: <em><strong>1</strong></em><br/>PHYSICAL EXAMINATION: <em><strong>3</strong></em><br/>MEDICAL RECORD REVIEW: <em><strong>2</strong></em>{:/}
**Date Veteran Requested Cd Eval**{::nomarkdown}<pre><code>  dateVeteranRequestedCdEval</code></pre>{:/} | DATE-TIME | date_veteran_requested_cd_eval |  |  | 
**Date Facility Initiated Review**{::nomarkdown}<pre><code>  dateFacilityInitiatedReview</code></pre>{:/} | DATE-TIME | date_facility_initiated_review |  |  | 
**Date Veteran Was Notified**{::nomarkdown}<pre><code>  dateVeteranWasNotified</code></pre>{:/} | DATE-TIME | date_veteran_was_notified |  |  | 
**Cd Reason**{::nomarkdown}<pre><code>  cdReason</code></pre>{:/} | OBJECT | cd_reason |  |  | [cdReason](#cdReason)

#### <a name="cdReason"></a>Cd Reason

<dl>
<dt>ID</dt><dd>cdReason</dd>
<dt>File Type</dt><dd>2.409</dd>
<dt>Label</dt><dd>Cd Reason</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cd Reason**{::nomarkdown}<pre><code>  cdReason</code></pre>{:/} | POINTER | cd_reason |  | INDEXED<br/>REQUIRED | Catastrophic_Disability_Reasons-27_17
**Affected Extremity**{::nomarkdown}<pre><code>  affectedExtremity</code></pre>{:/} | ENUMERATION | affected_extremity |  |  | {::nomarkdown}RIGHT LOWER EXTREMITY: <em><strong>RLE</strong></em><br/>Bilateral Lower Extremity: <em><strong>BLE</strong></em><br/>LEFT LOWER EXTREMITY: <em><strong>LLE</strong></em><br/>LEFT UPPER EXTREMITY: <em><strong>LUE</strong></em><br/>Bilateral Upper Extremity: <em><strong>BLU</strong></em><br/>RIGHT UPPER EXTREMITY: <em><strong>RUE</strong></em>{:/}
**Score**{::nomarkdown}<pre><code>  score</code></pre>{:/} | NUMERIC | score |  |  | 
**Permanent Indicator**{::nomarkdown}<pre><code>  permanentIndicator</code></pre>{:/} | ENUMERATION | permanent_indicator |  |  | {::nomarkdown}UNKNOWN: <em><strong>3</strong></em><br/>PERMANENT: <em><strong>1</strong></em><br/>NOT PERMANENT: <em><strong>2</strong></em>{:/}

#### <a name="alias"></a>Alias

<dl>
<dt>ID</dt><dd>alias</dd>
<dt>File Type</dt><dd>2.01</dd>
<dt>Label</dt><dd>Alias</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Alias**{::nomarkdown}<pre><code>  alias</code></pre>{:/} | STRING | alias |  | REQUIRED | 
**Alias Ssn**{::nomarkdown}<pre><code>  aliasSsn</code></pre>{:/} | STRING | alias_ssn |  |  | 
**Alias Components**{::nomarkdown}<pre><code>  aliasComponents</code></pre>{:/} | POINTER | alias_components |  |  | [Name_Components-20](../VDM/Name_Components-20)

#### <a name="raceInformation"></a>Race Information

<dl>
<dt>ID</dt><dd>raceInformation</dd>
<dt>File Type</dt><dd>2.02</dd>
<dt>Label</dt><dd>Race Information</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Race Information**{::nomarkdown}<pre><code>  raceInformation</code></pre>{:/} | POINTER | race_information |  | INDEXED<br/>REQUIRED | Race-10
**Method Of Collection**{::nomarkdown}<pre><code>  methodOfCollection</code></pre>{:/} | POINTER | method_of_collection |  |  | Race_And_Ethnicity_Collection_Method-10_3

#### <a name="enrollmentClinic"></a>Enrollment Clinic

<dl>
<dt>ID</dt><dd>enrollmentClinic</dd>
<dt>File Type</dt><dd>2.001</dd>
<dt>Label</dt><dd>Enrollment Clinic</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Enrollment Clinic**{::nomarkdown}<pre><code>  enrollmentClinic</code></pre>{:/} | POINTER | enrollment_clinic |  | INDEXED<br/>REQUIRED | [Hospital_Location-44](../VDM/Hospital_Location-44)
**Enrollment Data**{::nomarkdown}<pre><code>  enrollmentData</code></pre>{:/} | OBJECT | enrollment_data |  |  | [enrollmentData](#enrollmentData)
**Current Status**{::nomarkdown}<pre><code>  currentStatus</code></pre>{:/} | ENUMERATION | current_status |  |  | {::nomarkdown}INACTIVE: <em><strong>I</strong></em>{:/}

#### <a name="enrollmentData"></a>Enrollment Data

<dl>
<dt>ID</dt><dd>enrollmentData</dd>
<dt>File Type</dt><dd>2.011</dd>
<dt>Label</dt><dd>Enrollment Data</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date Of Enrollment**{::nomarkdown}<pre><code>  dateOfEnrollment</code></pre>{:/} | DATE-TIME | date_of_enrollment |  | REQUIRED | 
**Opt Or Ac**{::nomarkdown}<pre><code>  optOrAc</code></pre>{:/} | ENUMERATION | opt_or_ac |  |  | {::nomarkdown}OPT: <em><strong>O</strong></em><br/>AC: <em><strong>A</strong></em>{:/}
**Date Of Discharge**{::nomarkdown}<pre><code>  dateOfDischarge</code></pre>{:/} | DATE-TIME | date_of_discharge |  |  | 
**Reason For Discharge**{::nomarkdown}<pre><code>  reasonForDischarge</code></pre>{:/} | STRING | reason_for_discharge |  |  | 
**Review Date**{::nomarkdown}<pre><code>  reviewDate</code></pre>{:/} | DATE-TIME | review_date |  |  | 

#### <a name="ethnicityInformation"></a>Ethnicity Information

<dl>
<dt>ID</dt><dd>ethnicityInformation</dd>
<dt>File Type</dt><dd>2.06</dd>
<dt>Label</dt><dd>Ethnicity Information</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Ethnicity Information**{::nomarkdown}<pre><code>  ethnicityInformation</code></pre>{:/} | POINTER | ethnicity_information |  | INDEXED<br/>REQUIRED | Ethnicity-10_2
**Method Of Collection**{::nomarkdown}<pre><code>  methodOfCollection</code></pre>{:/} | POINTER | method_of_collection |  |  | Race_And_Ethnicity_Collection_Method-10_3

#### <a name="patientEligibilities"></a>Patient Eligibilities

<dl>
<dt>ID</dt><dd>patientEligibilities</dd>
<dt>File Type</dt><dd>2.0361</dd>
<dt>Label</dt><dd>Patient Eligibilities</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Eligibility**{::nomarkdown}<pre><code>  eligibility</code></pre>{:/} | POINTER | eligibility |  | INDEXED<br/>REQUIRED | [Eligibility_Code-8](../VDM/Eligibility_Code-8)
**Long Id**{::nomarkdown}<pre><code>  longId</code></pre>{:/} | STRING | long_id |  |  | 
**Short Id**{::nomarkdown}<pre><code>  shortId</code></pre>{:/} | STRING | short_id |  |  | 

#### <a name="icnHistory"></a>Icn History

<dl>
<dt>ID</dt><dd>icnHistory</dd>
<dt>File Type</dt><dd>2.0992</dd>
<dt>Label</dt><dd>Icn History</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Icn History**{::nomarkdown}<pre><code>  icnHistory</code></pre>{:/} | NUMERIC | icn_history |  | REQUIRED | 
**Icn Checksum**{::nomarkdown}<pre><code>  icnChecksum</code></pre>{:/} | NUMERIC | icn_checksum |  |  | 
**Cmor**{::nomarkdown}<pre><code>  cmor</code></pre>{:/} | POINTER | cmor |  |  | [Institution-4](../VDM/Institution-4)
**Date/Time Of Change**{::nomarkdown}<pre><code>  dateTimeOfChange</code></pre>{:/} | DATE-TIME | date_time_of_change |  |  | 

#### <a name="cmorHistory"></a>Cmor History

<dl>
<dt>ID</dt><dd>cmorHistory</dd>
<dt>File Type</dt><dd>2.0993</dd>
<dt>Label</dt><dd>Cmor History</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cmor History**{::nomarkdown}<pre><code>  cmorHistory</code></pre>{:/} | NUMERIC | cmor_history |  | REQUIRED | 
**Cmor Activity Score**{::nomarkdown}<pre><code>  cmorActivityScore</code></pre>{:/} | NUMERIC | cmor_activity_score |  |  | 
**Cmor Score Calculation Date**{::nomarkdown}<pre><code>  cmorScoreCalculationDate</code></pre>{:/} | DATE-TIME | cmor_score_calculation_date |  |  | 
**Cmor Change Date**{::nomarkdown}<pre><code>  cmorChangeDate</code></pre>{:/} | DATE-TIME | cmor_change_date |  |  | 

#### <a name="dispositionLoginDateTime"></a>Disposition Log-In Date/Time

<dl>
<dt>ID</dt><dd>dispositionLoginDateTime</dd>
<dt>File Type</dt><dd>2.101</dd>
<dt>Label</dt><dd>Disposition Log-In Date/Time</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Log In Date/Time**{::nomarkdown}<pre><code>  logInDateTime</code></pre>{:/} | DATE-TIME | log_in_date_time |  | INDEXED<br/>REQUIRED | 
**10-10T Registration**{::nomarkdown}<pre><code>  1010tRegistration</code></pre>{:/} | BOOLEAN | _1010t_registration |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | ENUMERATION | status |  |  | {::nomarkdown}APPLICATION WITHOUT EXAM: <em><strong>2</strong></em><br/>10/10 VISIT: <em><strong>0</strong></em><br/>UNSCHEDULED: <em><strong>1</strong></em>{:/}
**Type Of Benefit Applied For**{::nomarkdown}<pre><code>  type_of_benefit_applied_for</code></pre>{:/} | ENUMERATION | N/A |  |  | {::nomarkdown}OUTPATIENT MEDICAL: <em><strong>3</strong></em><br/>DOMICILIARY: <em><strong>2</strong></em><br/>HOSPITAL: <em><strong>1</strong></em><br/>OUTPATIENT DENTAL: <em><strong>4</strong></em><br/>NURSING HOME CARE: <em><strong>5</strong></em>{:/}
**Type Of Care Applied For**{::nomarkdown}<pre><code>  typeOfCareAppliedFor</code></pre>{:/} | ENUMERATION | type_of_care_applied_for |  |  | {::nomarkdown}STERILIZATION: <em><strong>3</strong></em><br/>PREGNANCY: <em><strong>4</strong></em><br/>DENTAL: <em><strong>1</strong></em><br/>PLASTIC SURGERY: <em><strong>2</strong></em><br/>ALL OTHER: <em><strong>5</strong></em>{:/}
**Facility Applying To**{::nomarkdown}<pre><code>  facilityApplyingTo</code></pre>{:/} | POINTER | facility_applying_to |  |  | [Medical_Center_Division-40_8](../VDM/Medical_Center_Division-40_8)
**Who Entered 10/10**{::nomarkdown}<pre><code>  who_entered_10_10</code></pre>{:/} | POINTER | N/A |  |  | [New_Person-200](../VDM/New_Person-200)
**Log Out Date Time**{::nomarkdown}<pre><code>  logOutDateTime</code></pre>{:/} | DATE-TIME | log_out_date_time |  |  | 
**Disposition**{::nomarkdown}<pre><code>  disposition</code></pre>{:/} | POINTER | disposition |  |  | Disposition-37
**Reason For Late Disposition**{::nomarkdown}<pre><code>  reasonForLateDisposition</code></pre>{:/} | POINTER | reason_for_late_disposition |  |  | Disposition_Late_Reason-30
**Who Dispositioned**{::nomarkdown}<pre><code>  whoDispositioned</code></pre>{:/} | POINTER | who_dispositioned |  |  | [New_Person-200](../VDM/New_Person-200)
**Description Of Incident**{::nomarkdown}<pre><code>  descriptionOfIncident</code></pre>{:/} | STRING | description_of_incident |  |  | 
***Eligible For Medicaid**{::nomarkdown}<pre><code>  eligibleForMedicaid</code></pre>{:/} | BOOLEAN | eligible_for_medicaid |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Registration Eligibility Code**{::nomarkdown}<pre><code>  registrationEligibilityCode</code></pre>{:/} | POINTER | registration_eligibility_code |  |  | [Eligibility_Code-8](../VDM/Eligibility_Code-8)
**Elig Verified At Registration**{::nomarkdown}<pre><code>  eligVerifiedAtRegistration</code></pre>{:/} | BOOLEAN | elig_verified_at_registration |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Sc At Registration**{::nomarkdown}<pre><code>  scAtRegistration</code></pre>{:/} | BOOLEAN | sc_at_registration |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Sc% At Registration**{::nomarkdown}<pre><code>  scAtRegistration2_101-16</code></pre>{:/} | NUMERIC | sc_at_registration-2_101-16 |  |  | 
**Amis 420 Segment**{::nomarkdown}<pre><code>  amis420Segment</code></pre>{:/} | POINTER | amis_420_segment |  |  | Amis_Segment-391_1
**Outpatient Encounter**{::nomarkdown}<pre><code>  outpatientEncounter</code></pre>{:/} | POINTER | outpatient_encounter |  |  | Outpatient_Encounter-409_68
**Encounter Conversion Status**{::nomarkdown}<pre><code>  encounterConversionStatus</code></pre>{:/} | ENUMERATION | encounter_conversion_status |  |  | {::nomarkdown}NOT CONVERTED: <em><strong>0</strong></em><br/>CONVERTED: <em><strong>1</strong></em>{:/}
**Need Related To Occupation**{::nomarkdown}<pre><code>  needRelatedToOccupation</code></pre>{:/} | ENUMERATION | need_related_to_occupation |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Workmen&#x27;S Comp Claim Filed**{::nomarkdown}<pre><code>  workmensCompClaimFiled</code></pre>{:/} | BOOLEAN | workmens_comp_claim_filed |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Workmen&#x27;S Comp Claim Number**{::nomarkdown}<pre><code>  workmensCompClaimNumber</code></pre>{:/} | STRING | workmens_comp_claim_number |  |  | 
**Need Related To An Accident**{::nomarkdown}<pre><code>  needRelatedToAnAccident</code></pre>{:/} | ENUMERATION | need_related_to_an_accident |  |  | {::nomarkdown}UNKNOWN: <em><strong>U</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Injury Caused By**{::nomarkdown}<pre><code>  injuryCausedBy</code></pre>{:/} | STRING | injury_caused_by |  |  | 
**Injuring Parties Insurance**{::nomarkdown}<pre><code>  injuringPartiesInsurance</code></pre>{:/} | POINTER | injuring_parties_insurance |  |  | Insurance_Company-36
**Filed Against Injuring Party**{::nomarkdown}<pre><code>  filedAgainstInjuringParty</code></pre>{:/} | BOOLEAN | filed_against_injuring_party |  |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Attorney&#x27;S Name**{::nomarkdown}<pre><code>  attorneysName</code></pre>{:/} | STRING | attorneys_name |  |  | 
**A-Address 1**{::nomarkdown}<pre><code>  aaddress1</code></pre>{:/} | STRING | aaddress_1 |  |  | 
**A-Address 2**{::nomarkdown}<pre><code>  aaddress2</code></pre>{:/} | STRING | aaddress_2 |  |  | 
**A-Address 3**{::nomarkdown}<pre><code>  aaddress3</code></pre>{:/} | STRING | aaddress_3 |  |  | 
**A-City**{::nomarkdown}<pre><code>  acity</code></pre>{:/} | STRING | acity |  |  | 
**A-State**{::nomarkdown}<pre><code>  astate</code></pre>{:/} | POINTER | astate |  |  | State-5
**A-Zip Code**{::nomarkdown}<pre><code>  azipCode</code></pre>{:/} | STRING | azip_code |  |  | 
**A-Phone**{::nomarkdown}<pre><code>  aphone</code></pre>{:/} | STRING | aphone |  |  | 
**A-Zip+4**{::nomarkdown}<pre><code>  azip4</code></pre>{:/} | STRING | azip4 |  |  | 
**Active**{::nomarkdown}<pre><code>  active</code></pre>{:/} | ENUMERATION | active |  | INDEXED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em>{:/}
**Attorney&#x27;S Name Components**{::nomarkdown}<pre><code>  attorneysNameComponents</code></pre>{:/} | POINTER | attorneys_name_components |  |  | [Name_Components-20](../VDM/Name_Components-20)
**Ods At Registration?**{::nomarkdown}<pre><code>  odsAtRegistration</code></pre>{:/} | BOOLEAN | ods_at_registration |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ods Registration Entry**{::nomarkdown}<pre><code>  odsRegistrationEntry</code></pre>{:/} |  | ods_registration_entry-2_101 |  |  | 

#### <a name="appointment"></a>Appointment

<dl>
<dt>ID</dt><dd>appointment</dd>
<dt>File Type</dt><dd>2.98</dd>
<dt>Label</dt><dd>Appointment</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Appointment Date/Time**{::nomarkdown}<pre><code>  appointmentDateTime</code></pre>{:/} | IEN | N/A |  |  | 
**Clinic**{::nomarkdown}<pre><code>  clinic</code></pre>{:/} | POINTER | clinic |  | REQUIRED | [Hospital_Location-44](../VDM/Hospital_Location-44)
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | ENUMERATION | status |  |  | {::nomarkdown}INPATIENT APPOINTMENT: <em><strong>I</strong></em><br/>NO ACTION TAKEN: <em><strong>NT</strong></em><br/>NO-SHOW: <em><strong>N</strong></em><br/>CANCELLED BY PATIENT & AUTO-REBOOK: <em><strong>PCA</strong></em><br/>NO-SHOW & AUTO RE-BOOK: <em><strong>NA</strong></em><br/>CANCELLED BY CLINIC: <em><strong>C</strong></em><br/>CANCELLED BY CLINIC & AUTO RE-BOOK: <em><strong>CA</strong></em><br/>CANCELLED BY PATIENT: <em><strong>PC</strong></em>{:/}
**Lab Date/Time**{::nomarkdown}<pre><code>  labDateTime</code></pre>{:/} | DATE-TIME | lab_date_time |  |  | 
**X-Ray Date/Time**{::nomarkdown}<pre><code>  xrayDateTime</code></pre>{:/} | DATE-TIME | xray_date_time |  |  | 
**Ekg Date/Time**{::nomarkdown}<pre><code>  ekgDateTime</code></pre>{:/} | DATE-TIME | ekg_date_time |  |  | 
**Routing Slip Printed**{::nomarkdown}<pre><code>  routingSlipPrinted</code></pre>{:/} | BOOLEAN | routing_slip_printed |  |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Routing Slip Print Date**{::nomarkdown}<pre><code>  routingSlipPrintDate</code></pre>{:/} | DATE-TIME | routing_slip_print_date |  |  | 
**Purpose Of Visit**{::nomarkdown}<pre><code>  purposeOfVisit</code></pre>{:/} | ENUMERATION | purpose_of_visit |  |  | {::nomarkdown}10-10: <em><strong>2</strong></em><br/>UNSCHED. VISIT: <em><strong>4</strong></em><br/>C&P: <em><strong>1</strong></em><br/>SCHEDULED VISIT: <em><strong>3</strong></em>{:/}
**Appointment Type**{::nomarkdown}<pre><code>  appointmentType</code></pre>{:/} | POINTER | appointment_type |  |  | Appointment_Type-409_1
**Special Survey Disposition**{::nomarkdown}<pre><code>  specialSurveyDisposition</code></pre>{:/} | NUMERIC | special_survey_disposition |  |  | 
**Number Of Collateral Seen**{::nomarkdown}<pre><code>  numberOfCollateralSeen</code></pre>{:/} | NUMERIC | number_of_collateral_seen |  |  | 
**Auto-Rebooked Appt. Date/Time**{::nomarkdown}<pre><code>  autorebookedApptDateTime</code></pre>{:/} | DATE-TIME | autorebooked_appt_date_time |  |  | 
**Collateral Visit**{::nomarkdown}<pre><code>  collateralVisit</code></pre>{:/} | BOOLEAN | collateral_visit |  |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**No-Show/Cancelled By**{::nomarkdown}<pre><code>  noshowCancelledBy</code></pre>{:/} | POINTER | noshow_cancelled_by |  |  | [New_Person-200](../VDM/New_Person-200)
**No-Show/Cancel Date/Time**{::nomarkdown}<pre><code>  noshowCancelDateTime</code></pre>{:/} | DATE-TIME | noshow_cancel_date_time |  |  | 
**Cancellation Reason**{::nomarkdown}<pre><code>  cancellationReason</code></pre>{:/} | POINTER | cancellation_reason |  |  | Cancellation_Reasons-409_2
**Cancellation Remarks**{::nomarkdown}<pre><code>  cancellationRemarks</code></pre>{:/} | STRING | cancellation_remarks |  |  | 
**Appt. Cancelled**{::nomarkdown}<pre><code>  apptCancelled</code></pre>{:/} | POINTER | appt_cancelled |  |  | [Hospital_Location-44](../VDM/Hospital_Location-44)
**Data Entry Clerk**{::nomarkdown}<pre><code>  dataEntryClerk</code></pre>{:/} | POINTER | data_entry_clerk |  |  | [New_Person-200](../VDM/New_Person-200)
**Date Appt. Made**{::nomarkdown}<pre><code>  dateApptMade</code></pre>{:/} | DATE-TIME | date_appt_made |  |  | 
**Outpatient Encounter**{::nomarkdown}<pre><code>  outpatientEncounter</code></pre>{:/} | POINTER | outpatient_encounter |  |  | Outpatient_Encounter-409_68
**Encounter Forms Printed**{::nomarkdown}<pre><code>  encounterFormsPrinted</code></pre>{:/} | BOOLEAN | encounter_forms_printed |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Encounter Forms As Add-Ons**{::nomarkdown}<pre><code>  encounterFormsAsAddons</code></pre>{:/} | BOOLEAN | encounter_forms_as_addons |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Encounter Conversion Status**{::nomarkdown}<pre><code>  encounterConversionStatus</code></pre>{:/} | ENUMERATION | encounter_conversion_status |  |  | {::nomarkdown}NOT CONVERTED: <em><strong>0</strong></em><br/>CONVERTED: <em><strong>1</strong></em>{:/}
**Appointment Type Sub-Category**{::nomarkdown}<pre><code>  appointmentTypeSubcategory</code></pre>{:/} | POINTER | appointment_type_subcategory |  |  | Sharing_Agreement_SubCategory-35_2
**Scheduling Request Type**{::nomarkdown}<pre><code>  schedulingRequestType</code></pre>{:/} | ENUMERATION | scheduling_request_type |  |  | {::nomarkdown}AUTO REBOOK: <em><strong>A</strong></em><br/>MULTIPLE APPT. BOOKING: <em><strong>M</strong></em><br/>OTHER THAN 'NEXT AVA.' (CLINICIAN REQ.): <em><strong>C</strong></em><br/>'NEXT AVAILABLE' APPT.: <em><strong>N</strong></em><br/>OTHER THAN 'NEXT AVA.' (PATIENT REQ.): <em><strong>P</strong></em><br/>WALKIN APPT.: <em><strong>W</strong></em><br/>OTHER THAN 'NEXT AVA.' APPT.: <em><strong>O</strong></em>{:/}
**Next Ava. Appt. Indicator**{::nomarkdown}<pre><code>  nextAvaApptIndicator</code></pre>{:/} | ENUMERATION | next_ava_appt_indicator |  |  | {::nomarkdown}'NEXT AVA.' APPT. INDICATED BY USER: <em><strong>1</strong></em><br/>'NEXT AVA.' APPT. INDICATED BY CALCULATION: <em><strong>2</strong></em><br/>NOT INDICATED TO BE A 'NEXT AVA.' APPT.: <em><strong>0</strong></em><br/>'NEXT AVA.' APPT. INDICATED BY USER & CALCULATION: <em><strong>3</strong></em>{:/}
**Desired Date Of Appointment**{::nomarkdown}<pre><code>  desiredDateOfAppointment</code></pre>{:/} | DATE-TIME | desired_date_of_appointment |  |  | 
**Follow-Up Visit**{::nomarkdown}<pre><code>  followupVisit</code></pre>{:/} | BOOLEAN | followup_visit |  |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

#### <a name="archivedData"></a>Archived Data

<dl>
<dt>ID</dt><dd>archivedData</dd>
<dt>File Type</dt><dd>2.12</dd>
<dt>Label</dt><dd>Archived Data</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Data Type**{::nomarkdown}<pre><code>  dataType</code></pre>{:/} | ENUMERATION | data_type |  | INDEXED<br/>REQUIRED | {::nomarkdown}SPECIAL SURVEY DISP: <em><strong>SSD</strong></em><br/>APPOINTMENT: <em><strong>S</strong></em><br/>CLINIC ENROLLMENT: <em><strong>DE</strong></em>{:/}
**Date Of Archive**{::nomarkdown}<pre><code>  date_of_archive</code></pre>{:/} | OBJECT | N/A |  |  | [dateOfArchive](#dateOfArchive)

#### <a name="dateOfArchive"></a>Date Of Archive

<dl>
<dt>ID</dt><dd>dateOfArchive</dd>
<dt>File Type</dt><dd>2.13</dd>
<dt>Label</dt><dd>Date Of Archive</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date Of Archive**{::nomarkdown}<pre><code>  dateOfArchive</code></pre>{:/} | DATE-TIME | date_of_archive |  | REQUIRED | 
**Tape #**{::nomarkdown}<pre><code>  tapeNumber</code></pre>{:/} | STRING | tape_number |  |  | 
**Begin Archive Date**{::nomarkdown}<pre><code>  beginArchiveDate</code></pre>{:/} | DATE-TIME | begin_archive_date |  |  | 
**End Archive Date**{::nomarkdown}<pre><code>  endArchiveDate</code></pre>{:/} | DATE-TIME | end_archive_date |  |  | 
**Number Of Records Archived**{::nomarkdown}<pre><code>  numberOfRecordsArchived</code></pre>{:/} | NUMERIC | number_of_records_archived |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}