---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) --> Patient 

 property | value 
--- | --- 
 id | Patient
 label | 
 description | 
 fmIdForId | 2
 baseVDMClass | [Patient-2](../VDM/Patient-2.md)
 fromVDMQueries | [{vdmId:Patient-2,query:DESCRIBE $ID}]
 fromVDMList | SELECT 2
 fromVDMListPerPatient | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| name |  | STRING | name |  |  |  | 
| sex |  | ENUMERATION | sex |  | <dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl> |  | 
| selfIdentifiedGender |  | ENUMERATION | self_identified_gender |  | <dl><dt>TM</dt><dd>Transmale/Transman/Female-to-Male</dd><dt>TF</dt><dd>Transfemale/Transwoman/Male-to-Female</dd><dt>N</dt><dd>individual chooses not to answer</dd><dt>O</dt><dd>Other</dd><dt>F</dt><dd>Female</dd><dt>M</dt><dd>Male</dd></dl> |  | 
| dateOfBirth |  | DATE | date_of_birth |  |  |  | 
| maritalStatus |  | POINTER | marital_status |  | {id:Marital_Status-11} |  | 
| race |  | POINTER | race |  | {id:Race-10} |  | 
| occupation |  | STRING | occupation |  |  |  | 
| religiousPreference |  | POINTER | religious_preference |  | {id:Religion-13} |  | 
| duplicateStatus |  | ENUMERATION | duplicate_status |  | <dl><dt>1</dt><dd>CHECK DUPLICATE RECORDS FILE</dd><dt>0</dt><dd>NO UNRESOLVED DUPLICATES</dd></dl> |  | 
| patientMergedTo |  | POINTER | patient_merged_to |  | {id:Patient-2} |  | 
| isCheckForDuplicate |  | BOOLEAN | check_for_duplicate |  | {true:1} |  | 
| socialSecurityNumber |  | STRING | social_security_number |  |  |  | 
| pseudoSsnReason |  | ENUMERATION | pseudo_ssn_reason |  | <dl><dt>N</dt><dd>NO SSN ASSIGNED</dd><dt>S</dt><dd>SSN UNKNOWN/FOLLOW-UP REQUIRED</dd><dt>R</dt><dd>REFUSED TO PROVIDE</dd></dl> |  | 
| ssnVerificationStatus |  | ENUMERATION | ssn_verification_status |  | <dl><dt>4</dt><dd>VERIFIED</dd><dt>2</dt><dd>INVALID</dd></dl> |  | 
| remarks |  | STRING | remarks |  |  |  | 
| placeOfBirthCity |  | STRING | place_of_birth_city |  |  |  | 
| placeOfBirthState |  | POINTER | place_of_birth_state |  | {id:State-5} |  | 
| enteredBy |  | POINTER | who_entered_patient |  | {id:New_Person-200} |  | 
| enteredDate |  | DATE | date_entered_into_file |  |  |  | 
| enteredPatientMethod |  | ENUMERATION | how_was_patient_entered |  | <dl><dt>1</dt><dd>10-10T REGISTRATION</dd></dl> |  | 
| wardLocation |  | STRING | ward_location |  |  |  | 
| roombed |  | STRING | roombed |  |  |  | 
| currentMovement |  | POINTER | current_movement |  | {id:Patient_Movement-405} |  | 
| treatingSpecialty |  | POINTER | treating_specialty |  | {id:Facility_Treating_Specialty-45_7} |  | 
| provider |  | POINTER | provider |  | {id:New_Person-200} |  | 
| attendingPhysician |  | POINTER | attending_physician |  | {id:New_Person-200} |  | 
| currentAdmission |  | POINTER | current_admission |  | {id:Patient_Movement-405} |  | 
| lastDmmsEpisodeNumber |  | NUMERIC | last_dmms_episode_number |  |  |  | 
| lodgerWardLocation |  | STRING | lodger_ward_location |  |  |  | 
| currentRoom |  | POINTER | current_room |  | {id:RoomBed-405_4} |  | 
| excludeFromFacilityDir |  | BOOLEAN | exclude_from_facility_dir |  | {false:0,true:1} |  | 
| streetAddressLine1 |  | STRING | street_address_line_1 |  |  |  | 
| zip4 |  | STRING | zip4 |  |  |  | 
| streetAddressLine2 |  | STRING | street_address_line_2 |  |  |  | 
| streetAddressLine3 |  | STRING | street_address_line_3 |  |  |  | 
| city |  | STRING | city |  |  |  | 
| state |  | POINTER | state |  | {id:State-5} |  | 
| zipCode |  | STRING | zip_code |  |  |  | 
| county |  | NUMERIC | county |  |  |  | 
| province |  | STRING | province |  |  |  | 
| postalCode |  | STRING | postal_code |  |  |  | 
| country |  | POINTER | country |  | {id:Country_Code-779_004} |  | 
| addressChangeDtTm |  | DATE-TIME | address_change_dt_tm |  |  |  | 
| addressChangeSource |  | ENUMERATION | address_change_source |  | <dl><dt>USPS</dt><dd>USPS</dd><dt>VOA</dt><dd>VOA</dd><dt>VAMC</dt><dd>VAMC</dd><dt>HBSC</dt><dd>HBSC</dd><dt>BVA</dt><dd>BVA</dd><dt>LACS</dt><dd>LACS</dd><dt>HEC</dt><dd>HEC</dd><dt>NCOA</dt><dd>NCOA</dd><dt>VAINS</dt><dd>VAINS</dd></dl> |  | 
| addressChangeSite |  | POINTER | address_change_site |  | {id:Institution-4} |  | 
| badAddressIndicator |  | ENUMERATION | bad_address_indicator |  | <dl><dt>4</dt><dd>ADDRESS NOT FOUND</dd><dt>3</dt><dd>OTHER</dd><dt>1</dt><dd>UNDELIVERABLE</dd><dt>2</dt><dd>HOMELESS</dd></dl> |  | 
| temporaryAddressActive |  | BOOLEAN | temporary_address_active |  | {false:N,true:Y} |  | 
| temporaryStreetLine1 |  | STRING | temporary_street_line_1 |  |  |  | 
| temporaryAddressCounty |  | NUMERIC | temporary_address_county |  |  |  | 
| temporaryZip4 |  | STRING | temporary_zip4 |  |  |  | 
| temporaryAddressChangeDtTm |  | DATE-TIME | temporary_address_change_dt_tm |  |  |  | 
| temporaryAddressChangeSite |  | POINTER | temporary_address_change_site |  | {id:Institution-4} |  | 
| temporaryStreetLine2 |  | STRING | temporary_street_line_2 |  |  |  | 
| temporaryStreetLine3 |  | STRING | temporary_street_line_3 |  |  |  | 
| temporaryCity |  | STRING | temporary_city |  |  |  | 
| temporaryState |  | POINTER | temporary_state |  | {id:State-5} |  | 
| temporaryZipCode |  | STRING | temporary_zip_code |  |  |  | 
| temporaryAddressStartDate |  | DATE-TIME | temporary_address_start_date |  |  |  | 
| temporaryAddressEndDate |  | DATE-TIME | temporary_address_end_date |  |  |  | 
| temporaryPhoneNumber |  | STRING | temporary_phone_number |  |  |  | 
| addressChangeUser |  | POINTER | address_change_user |  | {id:New_Person-200} |  | 
| temporaryAddressProvince |  | STRING | temporary_address_province |  |  |  | 
| temporaryAddressPostalCode |  | STRING | temporary_address_postal_code |  |  |  | 
| temporaryAddressCountry |  | POINTER | temporary_address_country |  | {id:Country_Code-779_004} |  | 
| phoneNumberResidence |  | STRING | phone_number_residence |  |  |  | 
| cellularNumberChangeSource |  | ENUMERATION | cellular_number_change_source |  | <dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl> |  | 
| cellularNumberChangeSite |  | POINTER | cellular_number_change_site |  | {id:Institution-4} |  | 
| pagerNumberChangeDtTm |  | DATE-TIME | pager_number_change_dt_tm |  |  |  | 
| pagerNumberChangeSource |  | ENUMERATION | pager_number_change_source |  | <dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl> |  | 
| pagerNumberChangeSite |  | POINTER | pager_number_change_site |  | {id:Institution-4} |  | 
| confidentialPhoneNumber |  | STRING | confidential_phone_number |  |  |  | 
| phoneNumberWork |  | STRING | phone_number_work |  |  |  | 
| residenceNumberChangeDtTm |  | DATE-TIME | residence_number_change_dt_tm |  |  |  | 
| residenceNumberChangeSource |  | ENUMERATION | residence_number_change_source |  | <dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl> |  | 
| residenceNumberChangeSite |  | POINTER | residence_number_change_site |  | {id:Institution-4} |  | 
| emailAddress |  | STRING | email_address |  |  |  | 
| phoneNumberCellular |  | STRING | phone_number_cellular |  |  |  | 
| pagerNumber |  | STRING | pager_number |  |  |  | 
| emailAddressChangeDtTm |  | DATE-TIME | email_address_change_dt_tm |  |  |  | 
| emailAddressChangeSource |  | ENUMERATION | email_address_change_source |  | <dl><dt>HBSC</dt><dd>HBSC</dd><dt>VAMC</dt><dd>VAMC</dd><dt>VOA</dt><dd>VOA</dd><dt>HEC</dt><dd>HEC</dd></dl> |  | 
| emailAddressChangeSite |  | POINTER | email_address_change_site |  | {id:Institution-4} |  | 
| cellularNumberChangeDtTm |  | DATE-TIME | cellular_number_change_dt_tm |  |  |  | 
| currentMeansTestStatus |  | POINTER | current_means_test_status |  | {id:Means_Test_Status-408_32} |  | 
| confidentialAddressCategory |  | [OBJECT] | confidential_address_category |  | [Confidential_Address_Category-2_141](#confidential_address_category-2_141)  |  | 
| confidentialAddressActive |  | BOOLEAN | confidential_address_active |  | {false:N,true:Y} |  | 
| confidentialStreetLine1 |  | STRING | confidential_street_line_1 |  |  |  | 
| confidentialAddressCounty |  | NUMERIC | confidential_address_county |  |  |  | 
| confidentialAddrChangeDtTm |  | DATE-TIME | confidential_addr_change_dt_tm |  |  |  | 
| confidentialAddrChangeSite |  | POINTER | confidential_addr_change_site |  | {id:Institution-4} |  | 
| confidentialAddrProvince |  | STRING | confidential_addr_province |  |  |  | 
| confidentialAddrPostalCode |  | STRING | confidential_addr_postal_code |  |  |  | 
| confidentialAddrCountry |  | POINTER | confidential_addr_country |  | {id:Country_Code-779_004} |  | 
| confidentialStreetLine2 |  | STRING | confidential_street_line_2 |  |  |  | 
| confidentialStreetLine3 |  | STRING | confidential_street_line_3 |  |  |  | 
| confidentialAddressCity |  | STRING | confidential_address_city |  |  |  | 
| confidentialAddressState |  | POINTER | confidential_address_state |  | {id:State-5} |  | 
| confidentialAddressZipCode |  | STRING | confidential_address_zip_code |  |  |  | 
| confidentialStartDate |  | DATE-TIME | confidential_start_date |  |  |  | 
| confidentialEndDate |  | DATE-TIME | confidential_end_date |  |  |  | 
| ineligibleDate |  | DATE-TIME | ineligible_date |  |  |  | 
| missingPersonDate |  | DATE-TIME | missing_person_date |  |  |  | 
| missingOrIneligible |  | STRING | missing_or_ineligible |  |  |  | 
| ineligibleTwxSource |  | ENUMERATION | ineligible_twx_source |  | <dl><dt>2</dt><dd>REGIONAL OFFICE</dd><dt>1</dt><dd>VAMC</dd><dt>3</dt><dd>RPC</dd></dl> |  | 
| ineligibleTwxCity |  | STRING | ineligible_twx_city |  |  |  | 
| ineligibleTwxState |  | POINTER | ineligible_twx_state |  | {id:State-5} |  | 
| ineligibleVaroDecision |  | STRING | ineligible_varo_decision |  |  |  | 
| missingPersonTwxSource |  | ENUMERATION | missing_person_twx_source |  | <dl><dt>2</dt><dd>REGIONAL OFFICE</dd><dt>1</dt><dd>VAMC</dd><dt>3</dt><dd>RPC</dd></dl> |  | 
| missingPersonTwxCity |  | STRING | missing_person_twx_city |  |  |  | 
| missingPersonTwxState |  | POINTER | missing_person_twx_state |  | {id:State-5} |  | 
| feeHospitalId |  | ENUMERATION | fee_hospital_id |  | <dl><dt>C</dt><dd>CANCELLED</dd><dt>I</dt><dd>ISSUED</dd></dl> |  | 
| emergencyResponseIndicator |  | ENUMERATION | emergency_response_indicator |  | <dl><dt>K</dt><dd>HURRICANE KATRINA</dd></dl> |  | 
| kworkPhoneNumber |  | STRING | kwork_phone_number |  |  |  | 
| primaryNokChangeDateTime |  | DATE-TIME | primary_nok_change_date_time |  |  |  | 
| knameOfPrimaryNok |  | STRING | kname_of_primary_nok |  |  |  | 
| k2workPhoneNumber |  | STRING | k2work_phone_number |  |  |  | 
| secondaryNokChangeDateTime |  | DATE-TIME | secondary_nok_change_date_time |  |  |  | 
| krelationshipToPatient |  | STRING | krelationship_to_patient |  |  |  | 
| kaddressSameAsPatients |  | BOOLEAN | kaddress_same_as_patients |  | {false:N,true:Y} |  | 
| kstreetAddressLine1 |  | STRING | kstreet_address_line_1 |  |  |  | 
| kstreetAddressLine2 |  | STRING | kstreet_address_line_2 |  |  |  | 
| kstreetAddressLine3 |  | STRING | kstreet_address_line_3 |  |  |  | 
| kcity |  | STRING | kcity |  |  |  | 
| kstate |  | POINTER | kstate |  | {id:State-5} |  | 
| kzipCode |  | STRING | kzip_code |  |  |  | 
| kphoneNumber |  | STRING | kphone_number |  |  |  | 
| k2nameOfSecondaryNok |  | STRING | k2name_of_secondary_nok |  |  |  | 
| k2relationshipToPatient |  | STRING | k2relationship_to_patient |  |  |  | 
| k2addressSameAsPatients |  | BOOLEAN | k2address_same_as_patients |  | {false:N,true:Y} |  | 
| k2streetAddressLine1 |  | STRING | k2street_address_line_1 |  |  |  | 
| k2streetAddressLine2 |  | STRING | k2street_address_line_2 |  |  |  | 
| k2streetAddressLine3 |  | STRING | k2street_address_line_3 |  |  |  | 
| k2city |  | STRING | k2city |  |  |  | 
| k2state |  | POINTER | k2state |  | {id:State-5} |  | 
| k2zipCode |  | STRING | k2zip_code |  |  |  | 
| k2phoneNumber |  | STRING | k2phone_number |  |  |  | 
| ezip4 |  | STRING | ezip4 |  |  |  | 
| dzip4 |  | STRING | dzip4 |  |  |  | 
| k2zip4 |  | STRING | k2zip4 |  |  |  | 
| e2zip4 |  | STRING | e2zip4 |  |  |  | 
| employerZip4 |  | STRING | employer_zip4 |  |  |  | 
| spousesEmpZip4 |  | STRING | spouses_emp_zip4 |  |  |  | 
| kzip4 |  | STRING | kzip4 |  |  |  | 
| fathersName |  | STRING | fathers_name |  |  |  | 
| mothersName |  | STRING | mothers_name |  |  |  | 
| mothersMaidenName |  | STRING | mothers_maiden_name |  |  |  | 
| spousesEmployerName |  | STRING | spouses_employer_name |  |  |  | 
| spousesOccupation |  | STRING | spouses_occupation |  |  |  | 
| spousesEmploymentStatus |  | ENUMERATION | spouses_employment_status |  | <dl><dt>2</dt><dd>EMPLOYED PART TIME</dd><dt>4</dt><dd>SELF EMPLYED</dd><dt>5</dt><dd>RETIRED</dd><dt>9</dt><dd>UNKNOWN</dd><dt>3</dt><dd>NOT EMPLOYED</dd><dt>1</dt><dd>EMPLOYED FULL TIME</dd><dt>6</dt><dd>ACTIVE MILITARY DUTY</dd></dl> |  | 
| spousesRetirementDate |  | DATE-TIME | spouses_retirement_date |  |  |  | 
| spousesEmpStreetLine1 |  | STRING | spouses_emp_street_line_1 |  |  |  | 
| spousesEmpStreetLine2 |  | STRING | spouses_emp_street_line_2 |  |  |  | 
| spousesEmpStreetLine3 |  | STRING | spouses_emp_street_line_3 |  |  |  | 
| spousesEmployersCity |  | STRING | spouses_employers_city |  |  |  | 
| spousesEmployersState |  | POINTER | spouses_employers_state |  | {id:State-5} |  | 
| spousesEmpZipCode |  | STRING | spouses_emp_zip_code |  |  |  | 
| spousesEmpPhoneNumber |  | STRING | spouses_emp_phone_number |  |  |  | 
| zip4Civil |  | STRING | zip4_civil |  |  |  | 
| zip4Va |  | STRING | zip4_va |  |  |  | 
| dateRuledIncompetentVa |  | DATE-TIME | date_ruled_incompetent_va |  |  |  | 
| institutionVa |  | POINTER | institution_va |  | {id:Institution-4} |  | 
| guardianVa |  | STRING | guardian_va |  |  |  | 
| relationshipVa |  | STRING | relationship_va |  |  |  | 
| streetAddress1Va |  | STRING | street_address_1_va |  |  |  | 
| streetAddress2Va |  | STRING | street_address_2_va |  |  |  | 
| cityVa |  | STRING | city_va |  |  |  | 
| stateVa |  | POINTER | state_va |  | {id:State-5} |  | 
| zipVa |  | STRING | zip_va |  |  |  | 
| phoneVa |  | STRING | phone_va |  |  |  | 
| dateRuledIncompetentCivil |  | DATE-TIME | date_ruled_incompetent_civil |  |  |  | 
| institutionCivil |  | STRING | institution_civil |  |  |  | 
| guardianCivil |  | STRING | guardian_civil |  |  |  | 
| relationshipCivil |  | STRING | relationship_civil |  |  |  | 
| streetAddress1Civil |  | STRING | street_address_1_civil |  |  |  | 
| streetAddress2Civil |  | STRING | street_address_2_civil |  |  |  | 
| cityCivil |  | STRING | city_civil |  |  |  | 
| stateCivil |  | POINTER | state_civil |  | {id:State-5} |  | 
| zipCivil |  | STRING | zip_civil |  |  |  | 
| phoneCivil |  | STRING | phone_civil |  |  |  | 
| ratedIncompetent |  | BOOLEAN | rated_incompetent |  | {false:0,true:1} |  | 
| isServiceConnected |  | BOOLEAN | service_connected |  | {false:N,true:Y} |  | 
| scAwardDate |  | DATE-TIME | sc_award_date |  |  |  | 
| ptEffectiveDate |  | DATE-TIME | pt_effective_date |  |  |  | 
| effDateCombinedScEval |  | DATE-TIME | eff_date_combined_sc_eval |  |  |  | 
| serviceConnectedPercentage |  | NUMERIC | service_connected_percentage |  |  |  | 
| receivingVaDisability |  | ENUMERATION | receiving_va_disability |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfVaDisability |  | NUMERIC | amount_of_va_disability |  |  |  | 
| pt |  | BOOLEAN | pt |  | {false:N,true:Y} |  | 
| unemployable |  | BOOLEAN | unemployable |  | {false:N,true:Y} |  | 
| monetaryBenVerifyDate |  | DATE-TIME | monetary_ben_verify_date |  |  |  | 
| ineligibleReason |  | STRING | ineligible_reason |  |  |  | 
| agencyAlliedCountry |  | POINTER | agency_allied_country |  | {id:Other_Federal_Agency-35} |  | 
| categoryOfBeneficiary |  | POINTER | category_of_beneficiary |  | {id:Category_Of_Beneficiary-45_82} |  | 
| employerName |  | STRING | employer_name |  |  |  | 
| employmentStatus |  | ENUMERATION | employment_status |  | <dl><dt>2</dt><dd>EMPLOYED PART TIME</dd><dt>4</dt><dd>SELF EMPLOYED</dd><dt>5</dt><dd>RETIRED</dd><dt>9</dt><dd>UNKNOWN</dd><dt>3</dt><dd>NOT EMPLOYED</dd><dt>1</dt><dd>EMPLOYED FULL TIME</dd><dt>6</dt><dd>ACTIVE MILITARY DUTY</dd></dl> |  | 
| dateOfRetirement |  | DATE-TIME | date_of_retirement |  |  |  | 
| governmentAgency |  | BOOLEAN | government_agency |  | {false:N,true:Y} |  | 
| employerStreetLine1 |  | STRING | employer_street_line_1 |  |  |  | 
| employerStreetLine2 |  | STRING | employer_street_line_2 |  |  |  | 
| employerStreetLine3 |  | STRING | employer_street_line_3 |  |  |  | 
| employerCity |  | STRING | employer_city |  |  |  | 
| employerState |  | POINTER | employer_state |  | {id:State-5} |  | 
| employerZipCode |  | STRING | employer_zip_code |  |  |  | 
| employerPhoneNumber |  | STRING | employer_phone_number |  |  |  | 
| claimFolderLocation |  | STRING | claim_folder_location |  |  |  | 
| insuranceType |  | [OBJECT] | insurance_type |  | [Insurance_Type-2_312](#insurance_type-2_312)  |  | 
| claimNumber |  | STRING | claim_number |  |  |  | 
| claimFolderLocation-2-314 |  | POINTER | claim_folder_location-2-_314 |  | {id:Institution-4} |  | 
| coveredByHealthInsurance |  | ENUMERATION | covered_by_health_insurance |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| vietnamServiceIndicated |  | ENUMERATION | vietnam_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| agentOrangeExposIndicated |  | ENUMERATION | agent_orange_expos_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| radiationExposureIndicated |  | ENUMERATION | radiation_exposure_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| vietnamFromDate |  | DATE-TIME | vietnam_from_date |  |  |  | 
| vietnamToDate |  | DATE-TIME | vietnam_to_date |  |  |  | 
| agentOrangeRegistrationDate |  | DATE-TIME | agent_orange_registration_date |  |  |  | 
| agentOrangeReportedToCo |  | DATE-TIME | agent_orange_reported_to_co |  |  |  | 
| agentOrangeExamDate |  | DATE-TIME | agent_orange_exam_date |  |  |  | 
| agentOrangeRegistrationNumber |  | NUMERIC | agent_orange_registration_number |  |  |  | 
| radiationRegistrationDate |  | DATE-TIME | radiation_registration_date |  |  |  | 
| proj112Shad |  | BOOLEAN | proj_112_shad |  | {false:0,true:1} |  | 
| radiationExposureMethod |  | ENUMERATION | radiation_exposure_method |  | <dl><dt>4</dt><dd>H/N AND ATMOSPHERIC TESTING</dd><dt>7</dt><dd>OTHER</dd><dt>2</dt><dd>HIROSHIMA/NAGASAKI</dd><dt>6</dt><dd>EXPOSURE AT NUCLEAR FACILITY</dd><dt>5</dt><dd>UNDERGROUND NUCLEAR TESTING</dd><dt>3</dt><dd>ATMOSPHERIC NUCLEAR TESTING</dd></dl> |  | 
| agentOrangeExposureLocation |  | ENUMERATION | agent_orange_exposure_location |  | <dl><dt>V</dt><dd>VIETNAM</dd><dt>O</dt><dd>OTHER</dd><dt>K</dt><dd>KOREAN DMZ</dd></dl> |  | 
| filipinoVeteranProof |  | ENUMERATION | filipino_veteran_proof |  | <dl><dt>NO</dt><dd>NO PROOF</dd><dt>BA</dt><dd>REPORT OF BIRTH ABROAD OF US CITIZEN</dd><dt>BC</dt><dd>US BIRTH CERTIFICATE</dd><dt>PR</dt><dd>VERIFICATION OF PERMANENT RESIDENCY</dd><dt>VA</dt><dd>VA COMPENSATION AT FULL DOLLAR RATE</dd><dt>PP</dt><dd>US PASSPORT</dd><dt>NA</dt><dd>VERIFICATION OF NATURALIZATION</dd></dl> |  | 
| serviceOefOrOif |  | [OBJECT] | service_oef_or_oif |  | [Service_Oef_Or_Oif-2_3215](#service_oef_or_oif-2_3215)  |  | 
| militaryServiceEpisode |  | [OBJECT] | military_service_episode |  | [Military_Service_Episode-2_3216](#military_service_episode-2_3216)  |  | 
| serviceVerificationDate |  | DATE-TIME | service_verification_date |  |  |  | 
| persianGulfService |  | ENUMERATION | persian_gulf_service |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| persianGulfFromDate |  | DATE-TIME | persian_gulf_from_date |  |  |  | 
| persianGulfToDate |  | DATE-TIME | persian_gulf_to_date |  |  |  | 
| southwestAsiaConditions |  | ENUMERATION | southwest_asia_conditions |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| swAsiaCondRegistrationDate |  | DATE-TIME | sw_asia_cond_registration_date |  |  |  | 
| swAsiaCondExamDate |  | DATE-TIME | sw_asia_cond_exam_date |  |  |  | 
| somaliaServiceIndicated |  | ENUMERATION | somalia_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| somaliaFromDate |  | DATE-TIME | somalia_from_date |  |  |  | 
| somaliaToDate |  | DATE-TIME | somalia_to_date |  |  |  | 
| yugoslaviaServiceIndicated |  | ENUMERATION | yugoslavia_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| yugoslaviaFromDate |  | DATE-TIME | yugoslavia_from_date |  |  |  | 
| yugoslaviaToDate |  | DATE-TIME | yugoslavia_to_date |  |  |  | 
| lebanonServiceIndicated |  | ENUMERATION | lebanon_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| lebanonFromDate |  | DATE-TIME | lebanon_from_date |  |  |  | 
| lebanonToDate |  | DATE-TIME | lebanon_to_date |  |  |  | 
| grenadaServiceIndicated |  | ENUMERATION | grenada_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| grenadaFromDate |  | DATE-TIME | grenada_from_date |  |  |  | 
| grenadaToDate |  | DATE-TIME | grenada_to_date |  |  |  | 
| panamaServiceIndicated |  | ENUMERATION | panama_service_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| panamaFromDate |  | DATE-TIME | panama_from_date |  |  |  | 
| panamaToDate |  | DATE-TIME | panama_to_date |  |  |  | 
| periodOfService |  | POINTER | period_of_service |  | {id:Period_Of_Service-21} |  | 
| serviceDischargeTypeLast |  | POINTER | service_discharge_type_last |  | {id:Type_Of_Discharge-25} |  | 
| serviceBranchLast |  | POINTER | service_branch_last |  | {id:Branch_Of_Service-23} |  | 
| serviceEntryDateLast |  | DATE-TIME | service_entry_date_last |  |  |  | 
| serviceSeparationDateLast |  | DATE-TIME | service_separation_date_last |  |  |  | 
| serviceNumberLast |  | STRING | service_number_last |  |  |  | 
| serviceSecondEpisode |  | BOOLEAN | service_second_episode |  | {false:N,true:Y} |  | 
| serviceDischargeTypeNtl |  | POINTER | service_discharge_type_ntl |  | {id:Type_Of_Discharge-25} |  | 
| serviceBranchNtl |  | POINTER | service_branch_ntl |  | {id:Branch_Of_Service-23} |  | 
| serviceComponentLast |  | ENUMERATION | service_component_last |  | <dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl> |  | 
| serviceComponentNtl |  | ENUMERATION | service_component_ntl |  | <dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl> |  | 
| serviceComponentNntl |  | ENUMERATION | service_component_nntl |  | <dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl> |  | 
| serviceEntryDateNtl |  | DATE-TIME | service_entry_date_ntl |  |  |  | 
| serviceSeparationDateNtl |  | DATE-TIME | service_separation_date_ntl |  |  |  | 
| serviceNumberNtl |  | STRING | service_number_ntl |  |  |  | 
| serviceThirdEpisode |  | BOOLEAN | service_third_episode |  | {false:N,true:Y} |  | 
| serviceDischargeTypeNntl |  | POINTER | service_discharge_type_nntl |  | {id:Type_Of_Discharge-25} |  | 
| serviceBranchNntl |  | POINTER | service_branch_nntl |  | {id:Branch_Of_Service-23} |  | 
| serviceEntryDateNntl |  | DATE-TIME | service_entry_date_nntl |  |  |  | 
| serviceSeparationDateNntl |  | DATE-TIME | service_separation_date_nntl |  |  |  | 
| serviceNumberNntl |  | STRING | service_number_nntl |  |  |  | 
| eworkPhoneNumber |  | STRING | ework_phone_number |  |  |  | 
| econtactChangeDateTime |  | DATE-TIME | econtact_change_date_time |  |  |  | 
| eemerContactSameAsNok |  | BOOLEAN | eemer_contact_same_as_nok |  | {false:N,true:Y} |  | 
| ename |  | STRING | ename |  |  |  | 
| e2workPhoneNumber |  | STRING | e2work_phone_number |  |  |  | 
| e2nameOfSecondaryContact |  | STRING | e2name_of_secondary_contact |  |  |  | 
| e2contactChangeDateTime |  | DATE-TIME | e2contact_change_date_time |  |  |  | 
| e2relationshipToPatient |  | STRING | e2relationship_to_patient |  |  |  | 
| e2streetAddressLine1 |  | STRING | e2street_address_line_1 |  |  |  | 
| e2streetAddressLine2 |  | STRING | e2street_address_line_2 |  |  |  | 
| e2streetAddressLine3 |  | STRING | e2street_address_line_3 |  |  |  | 
| e2city |  | STRING | e2city |  |  |  | 
| e2state |  | POINTER | e2state |  | {id:State-5} |  | 
| e2zipCode |  | STRING | e2zip_code |  |  |  | 
| e2phoneNumber |  | STRING | e2phone_number |  |  |  | 
| erelationshipToPatient |  | STRING | erelationship_to_patient |  |  |  | 
| estreetAddressLine1 |  | STRING | estreet_address_line_1 |  |  |  | 
| estreetAddressLine2 |  | STRING | estreet_address_line_2 |  |  |  | 
| estreetAddressLine3 |  | STRING | estreet_address_line_3 |  |  |  | 
| ecity |  | STRING | ecity |  |  |  | 
| estate |  | POINTER | estate |  | {id:State-5} |  | 
| ezipCode |  | STRING | ezip_code |  |  |  | 
| ephoneNumber |  | STRING | ephone_number |  |  |  | 
| dworkPhoneNumber |  | STRING | dwork_phone_number |  |  |  | 
| ddesigneeSameAsNok |  | BOOLEAN | ddesignee_same_as_nok |  | {false:N,true:Y} |  | 
| dnameOfDesignee |  | STRING | dname_of_designee |  |  |  | 
| designeeChangeDateTime |  | DATE-TIME | designee_change_date_time |  |  |  | 
| drelationshipToPatient |  | STRING | drelationship_to_patient |  |  |  | 
| dstreetAddressLine1 |  | STRING | dstreet_address_line_1 |  |  |  | 
| dstreetAddressLine2 |  | STRING | dstreet_address_line_2 |  |  |  | 
| dstreetAddressLine3 |  | STRING | dstreet_address_line_3 |  |  |  | 
| dcity |  | STRING | dcity |  |  |  | 
| dstate |  | POINTER | dstate |  | {id:State-5} |  | 
| dzipCode |  | STRING | dzip_code |  |  |  | 
| dphoneNumber |  | STRING | dphone_number |  |  |  | 
| dateOfDeath |  | DATE-TIME | date_of_death |  |  |  | 
| deathEnteredBy |  | POINTER | death_entered_by |  | {id:New_Person-200} |  | 
| sourceOfNotification |  | ENUMERATION | source_of_notification |  | <dl><dt>4</dt><dd>VBA</dd><dt>1</dt><dd>INPATIENT AT VAMC</dd><dt>2</dt><dd>NON-VA MEDICAL FACILITY</dd><dt>9</dt><dd>OTHER</dd><dt>8</dt><dd>NEXT OF KIN/FAMILY/FRIEND</dd><dt>5</dt><dd>VA INSURANCE</dd><dt>7</dt><dd>NCA</dd><dt>6</dt><dd>SSA</dd><dt>3</dt><dd>DEATH CERTIFICATE ON FILE</dd></dl> |  | 
| dateOfDeathLastUpdated |  | DATE-TIME | date_of_death_last_updated |  |  |  | 
| lastEditedBy |  | POINTER | last_edited_by |  | {id:New_Person-200} |  | 
| collateralSponsorsName |  | POINTER | collateral_sponsors_name |  | {id:Patient-2} |  | 
| militaryDisabilityRetirement |  | BOOLEAN | military_disability_retirement |  | {false:0,true:1} |  | 
| dischargeDueToDisability |  | BOOLEAN | discharge_due_to_disability |  | {false:0,true:1} |  | 
| primaryEligibilityCode |  | POINTER | primary_eligibility_code |  | {id:Eligibility_Code-8} |  | 
| eligibilityStatus |  | ENUMERATION | eligibility_status |  | <dl><dt>P</dt><dd>PENDING VERIFICATION</dd><dt>R</dt><dd>PENDING RE-VERIFICATION</dd><dt>V</dt><dd>VERIFIED</dd></dl> |  | 
| eligibilityStatusDate |  | DATE-TIME | eligibility_status_date |  |  |  | 
| eligibilityVerifSource |  | ENUMERATION | eligibility_verif_source |  | <dl><dt>V</dt><dd>VISTA</dd><dt>H</dt><dd>HEC</dd></dl> |  | 
| eligibilityInterimResponse |  | DATE-TIME | eligibility_interim_response |  |  |  | 
| eligibilityVerifMethod |  | STRING | eligibility_verif_method |  |  |  | 
| eligibilityStatusEnteredBy |  | POINTER | eligibility_status_entered_by |  | {id:New_Person-200} |  | 
| userEnrolleeValidThrough |  | DATE-TIME | user_enrollee_valid_through |  |  |  | 
| userEnrolleeSite |  | POINTER | user_enrollee_site |  | {id:Institution-4} |  | 
| disabilityRetFromMilitary |  | ENUMERATION | disability_ret_from_military |  | <dl><dt>2</dt><dd>YES, RECEIVING MILITARY RETIREMENT IN LIEU OF VA COMPENSATION</dd><dt>1</dt><dd>YES, RECEIVING MILITARY RETIREMENT</dd><dt>3</dt><dd>UNKNOWN</dd><dt>0</dt><dd>NO</dd></dl> |  | 
| receivingAaBenefits |  | ENUMERATION | receiving_aa_benefits |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfAidAttendance |  | NUMERIC | amount_of_aid__attendance |  |  |  | 
| receivingHouseboundBenefits |  | ENUMERATION | receiving_housebound_benefits |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfHousebound |  | NUMERIC | amount_of_housebound |  |  |  | 
| receivingSocialSecurity |  | ENUMERATION | receiving_social_security |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfSocialSecurity |  | NUMERIC | amount_of_social_security |  |  |  | 
| receivingAVaPension |  | ENUMERATION | receiving_a_va_pension |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfVaPension |  | NUMERIC | amount_of_va_pension |  |  |  | 
| amountOfMilitaryRetirement |  | NUMERIC | amount_of_military_retirement |  |  |  | 
| receivingMilitaryRetirement |  | ENUMERATION | receiving_military_retirement |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfGiInsurance |  | NUMERIC | amount_of_gi_insurance |  |  |  | 
| giInsurancePolicy |  | ENUMERATION | gi_insurance_policy |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfSsi |  | NUMERIC | amount_of_ssi |  |  |  | 
| receivingSupSecuritySsi |  | ENUMERATION | receiving_sup_security_ssi |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| amountOfOtherRetirement |  | NUMERIC | amount_of_other_retirement |  |  |  | 
| typeOfOtherRetirement |  | ENUMERATION | type_of_other_retirement |  | <dl><dt>C</dt><dd>CIVIL</dd><dt>X</dt><dd>COMBINATIONS OF TYPES</dd><dt>O</dt><dd>OTHER</dd><dt>M</dt><dd>MILITARY</dd><dt>R</dt><dd>RAILROAD</dd><dt>B</dt><dd>BLACK LUNG</dd></dl> |  | 
| amountOfOtherIncome |  | NUMERIC | amount_of_other_income |  |  |  | 
| totalAnnualVaCheckAmount |  | NUMERIC | total_annual_va_check_amount |  |  |  | 
| primaryLongId |  | STRING | primary_long_id |  |  |  | 
| primaryShortId |  | STRING | primary_short_id |  |  |  | 
| serviceDentalInjury |  | BOOLEAN | service_dental_injury |  | {false:N,true:Y} |  | 
| serviceTeethExtracted |  | BOOLEAN | service_teeth_extracted |  | {false:N,true:Y} |  | 
| dateOfDentalTreatment |  | [OBJECT] | date_of_dental_treatment |  | [Date_Of_Dental_Treatment-2_11](#date_of_dental_treatment-2_11)  |  | 
| ratedDisabilitiesVa |  | [OBJECT] | rated_disabilities_va |  | [Rated_Disabilities_Va-2_04](#rated_disabilities_va-2_04)  |  | 
| serviceConnectedConditions |  | [OBJECT] | service_connected_conditions |  | [Service_Connected_Conditions-2_05](#service_connected_conditions-2_05)  |  | 
| eligibleForMedicaid |  | BOOLEAN | eligible_for_medicaid |  | {false:0,true:1} |  | 
| dateMedicaidLastAsked |  | DATE-TIME | date_medicaid_last_asked |  |  |  | 
| medicaidNumber |  | STRING | medicaid_number |  |  |  | 
| pensionAwardEffectiveDate |  | DATE-TIME | pension_award_effective_date |  |  |  | 
| pensionAwardReason |  | POINTER | pension_award_reason |  | {id:Pension_Award_Reasons-27_18} |  | 
| pensionTerminatedDate |  | DATE-TIME | pension_terminated_date |  |  |  | 
| pensionTerminatedReason1 |  | POINTER | pension_terminated_reason_1 |  | {id:Pension_Award_Reasons-27_18} |  | 
| pensionTerminatedReason2 |  | POINTER | pension_terminated_reason_2 |  | {id:Pension_Award_Reasons-27_18} |  | 
| pensionTerminatedReason3 |  | POINTER | pension_terminated_reason_3 |  | {id:Pension_Award_Reasons-27_18} |  | 
| pensionTerminatedReason4 |  | POINTER | pension_terminated_reason_4 |  | {id:Pension_Award_Reasons-27_18} |  | 
| classIiDentalIndicator |  | BOOLEAN | class_ii_dental_indicator |  | {false:N,true:Y} |  | 
| dentalApplDueBeforeDate |  | DATE-TIME | dental_appl_due_before_date |  |  |  | 
| pensionIndicatorLock |  | BOOLEAN | pension_indicator_lock |  | {false:N,true:Y} |  | 
| pensionAwardLock |  | BOOLEAN | pension_award_lock |  | {false:N,true:Y} |  | 
| veteranCatastrophicallyDisabled |  | BOOLEAN | veteran_catastrophically_disabled |  | {false:N,true:Y} |  | 
| decidedBy |  | STRING | decided_by |  |  |  | 
| dateOfDecision |  | DATE-TIME | date_of_decision |  |  |  | 
| facilityMakingDetermination |  | POINTER | facility_making_determination |  | {id:Institution-4} |  | 
| reviewDate |  | DATE-TIME | review_date |  |  |  | 
| methodOfDetermination |  | ENUMERATION | method_of_determination |  | <dl><dt>3</dt><dd>PHYSICAL EXAMINATION</dd><dt>2</dt><dd>MEDICAL RECORD REVIEW</dd></dl> |  | 
| dateVeteranRequestedCdEval |  | DATE-TIME | date_veteran_requested_cd_eval |  |  |  | 
| dateFacilityInitiatedReview |  | DATE-TIME | date_facility_initiated_review |  |  |  | 
| dateVeteranWasNotified |  | DATE-TIME | date_veteran_was_notified |  |  |  | 
| cdStatusDiagnoses |  | [POINTER] | cd_status_diagnoses |  | {id:Catastrophic_Disability_Reasons-27_17} |  | 
| cdStatusProcedures |  | [OBJECT] | cd_status_procedures |  | [Cd_Status_Procedures-2_397](#cd_status_procedures-2_397)  |  | 
| cdStatusConditions |  | [OBJECT] | cd_status_conditions |  | [Cd_Status_Conditions-2_398](#cd_status_conditions-2_398)  |  | 
| cdHistoryDate |  | [OBJECT] | cd_history_date |  | [Cd_History_Date-2_399](#cd_history_date-2_399)  |  | 
| cdDescriptors |  | [POINTER] | cd_descriptors |  | {id:Catastrophic_Disability_Reasons-27_17} |  | 
| powStatusIndicated |  | ENUMERATION | pow_status_indicated |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| powConfinementLocation |  | POINTER | pow_confinement_location |  | {id:Pow_Period-22} |  | 
| powFromDate |  | DATE-TIME | pow_from_date |  |  |  | 
| powToDate |  | DATE-TIME | pow_to_date |  |  |  | 
| powStatusVerified |  | DATE-TIME | pow_status_verified |  |  |  | 
| combatServiceIndicated |  | BOOLEAN | combat_service_indicated |  | {false:N,true:Y} |  | 
| combatServiceLocation |  | POINTER | combat_service_location |  | {id:Pow_Period-22} |  | 
| combatFromDate |  | DATE-TIME | combat_from_date |  |  |  | 
| combatToDate |  | DATE-TIME | combat_to_date |  |  |  | 
| combatVeteranEndDate |  | DATE-TIME | combat_veteran_end_date |  |  |  | 
| cvDateEdited |  | DATE-TIME | cv_date_edited |  |  |  | 
| currentPhIndicator |  | BOOLEAN | current_ph_indicator |  | {false:N,true:Y} |  | 
| currentPurpleHeartStatus |  | ENUMERATION | current_purple_heart_status |  | <dl><dt>3</dt><dd>CONFIRMED</dd><dt>2</dt><dd>IN PROCESS</dd><dt>1</dt><dd>PENDING</dd></dl> |  | 
| currentPurpleHeartRemarks |  | ENUMERATION | current_purple_heart_remarks |  | <dl><dt>6</dt><dd>UNDELIVERABLE MAIL</dd><dt>5</dt><dd>VAMC</dd><dt>3</dt><dd>ENTERED IN ERROR</dd><dt>1</dt><dd>UNACCEPTABLE DOCUMENTATION</dd><dt>2</dt><dd>NO DOCUMENTATION REC'D</dd><dt>4</dt><dd>UNSUPPORTED PURPLE HEART</dd></dl> |  | 
| phDivision |  | POINTER | ph_division |  | {id:Institution-4} |  | 
| currentMohIndicator |  | BOOLEAN | current_moh_indicator |  | {false:N,true:Y} |  | 
| isTestPatient |  | BOOLEAN | test_patient_indicator |  | {false:0,true:1} |  | 
| alias |  | [OBJECT] | alias |  | [Alias-2_01](#alias-2_01)  |  | 
| knameComponents |  | POINTER | kname_components |  | {id:Name_Components-20} |  | 
| k2nameComponents |  | POINTER | k2name_components |  | {id:Name_Components-20} |  | 
| fathersNameComponents |  | POINTER | fathers_name_components |  | {id:Name_Components-20} |  | 
| mothersNameComponents |  | POINTER | mothers_name_components |  | {id:Name_Components-20} |  | 
| mothersMaidenNameComponents |  | POINTER | mothers_maiden_name_components |  | {id:Name_Components-20} |  | 
| enameComponents |  | POINTER | ename_components |  | {id:Name_Components-20} |  | 
| e2nameComponents |  | POINTER | e2name_components |  | {id:Name_Components-20} |  | 
| dnameComponents |  | POINTER | dname_components |  | {id:Name_Components-20} |  | 
| raceInformation |  | [OBJECT] | race_information |  | [Race_Information-2_02](#race_information-2_02)  |  | 
| enrollmentClinic |  | [OBJECT] | enrollment_clinic |  | [Enrollment_Clinic-2_001](#enrollment_clinic-2_001)  |  | 
| ethnicityInformation |  | [OBJECT] | ethnicity_information |  | [Ethnicity_Information-2_06](#ethnicity_information-2_06)  |  | 
| currentEnrollment |  | POINTER | current_enrollment |  | {id:Patient_Enrollment-27_11} |  | 
| preferredFacility |  | POINTER | preferred_facility |  | {id:Institution-4} |  | 
| sourceDesignation |  | ENUMERATION | source_designation |  | <dl><dt>PI</dt><dd>PCP INACTIVE</dd><dt>V</dt><dd>VISTA</dd><dt>PA</dt><dd>PCP ACTIVE</dd><dt>E</dt><dd>ESR</dd></dl> |  | 
| reactions |  | BOOLEAN | reactions |  | {false:N,true:Y} |  | 
| heightcm |  | NUMERIC | heightcm |  |  |  | 
| weightkg |  | NUMERIC | weightkg |  |  |  | 
| spinalCordInjury |  | ENUMERATION | spinal_cord_injury |  | <dl><dt>4</dt><dd>QUADRIPLEGIA-NONTRAUMATIC</dd><dt>2</dt><dd>QUADRIPLEGIA-TRAUMATIC</dd><dt>X</dt><dd>NOT APPLICABLE</dd><dt>1</dt><dd>PARAPLEGIA-TRAUMATIC</dd><dt>3</dt><dd>PARAPLEGIA-NONTRAUMATIC</dd></dl> |  | 
| laboratoryReference |  | POINTER | laboratory_reference |  | {id:Lab_Data-63} |  | 
| labReferralRef |  | POINTER | lab_referral_ref |  | {id:Referral_Patient-67} |  | 
| cnhCurrent |  | BOOLEAN | cnh_current |  | {false:N,true:Y} |  | 
| dentalClassification |  | POINTER | dental_classification |  | {id:Dental_Classification-220_2} |  | 
| dentalEligibilityExpiration |  | DATE-TIME | dental_eligibility_expiration |  |  |  | 
| patientEligibilities |  | [OBJECT] | patient_eligibilities |  | [Patient_Eligibilities-2_0361](#patient_eligibilities-2_0361)  |  | 
| patientType |  | POINTER | type-391 |  | {id:Type_Of_Patient-391} |  | 
| condition |  | ENUMERATION | condition |  | <dl><dt>S</dt><dd>SERIOUSLY ILL</dd></dl> |  | 
| dateEnteredOnSiList |  | DATE-TIME | date_entered_on_si_list |  |  |  | 
| currentPcPractitioner |  | POINTER | current_pc_practitioner |  | {id:New_Person-200} |  | 
| currentPcTeam |  | POINTER | current_pc_team |  | {id:Team-404_51} |  | 
| phDateTimeUpdated |  | [OBJECT] | ph_date_time_updated |  | [Ph_Date_Time_Updated-2_0534](#ph_date_time_updated-2_0534)  |  | 
| integrationControlNumber |  | NUMERIC | integration_control_number |  |  |  | 
| icnChecksum |  | STRING | icn_checksum |  |  |  | 
| coordinatingMasterOfRecord |  | POINTER | coordinating_master_of_record |  | {id:Institution-4} |  | 
| locallyAssignedIcn |  | BOOLEAN | locally_assigned_icn |  | {true:1} |  | 
| subscriptionControlNumber |  | POINTER | subscription_control_number |  | {id:Subscription_Control-774} |  | 
| cmorActivityScore |  | NUMERIC | cmor_activity_score |  |  |  | 
| scoreCalculationDate |  | DATE-TIME | score_calculation_date |  |  |  | 
| temporaryIdNumber |  | STRING | temporary_id_number |  |  |  | 
| foreignIdNumber |  | STRING | foreign_id_number |  |  |  | 
| fullIcn |  | STRING | full_icn |  |  |  | 
| fullIcnHistory |  | [STRING] | full_icn_history |  |  |  | 
| icnHistory |  | [OBJECT] | icn_history |  | [Icn_History-2_0992](#icn_history-2_0992)  |  | 
| cmorHistory |  | [OBJECT] | cmor_history |  | [Cmor_History-2_0993](#cmor_history-2_0993)  |  | 
| multipleBirthIndicator |  | ENUMERATION | multiple_birth_indicator |  | <dl><dt>Y</dt><dd>*MULTIPLE BIRTH*</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| dispositionLoginDateTime |  | [OBJECT] | disposition_login_date_time |  | [Disposition_LogIn_Date_Time-2_101](#disposition_login_date_time-2_101)  |  | 
| receivedVaCarePreviously |  | BOOLEAN | received_va_care_previously |  | {false:N,true:Y} |  | 
| mostRecentDateOfCare |  | DATE-TIME | most_recent_date_of_care |  |  |  | 
| appointmentRequestDate |  | DATE-TIME | appointment_request_date |  |  |  | 
| mostRecentLocationOfCare |  | POINTER | most_recent_location_of_care |  | {id:Institution-4} |  | 
| 2ndMostRecentDateOfCare |  | DATE-TIME | _2nd_most_recent_date_of_care |  |  |  | 
| 2ndMostRecentLocation |  | POINTER | _2nd_most_recent_location |  | {id:Institution-4} |  | 
| mostRecent1010ez |  | POINTER | most_recent_1010ez |  | {id:_1010Ez_Holding-712} |  | 
| combatIndicatedOn1010ez |  | BOOLEAN | combat_indicated_on_1010ez |  | {false:0,true:1} |  | 
| disabilityDischargeOn1010ez |  | BOOLEAN | disability_discharge_on_1010ez |  | {false:0,true:1} |  | 
| appointmentRequestOn1010ez |  | BOOLEAN | appointment_request_on_1010ez |  | {false:0,true:1} |  | 
| appointmentRequestStatus |  | ENUMERATION | appointment_request_status |  | <dl><dt>C</dt><dd>CANCELLED</dd><dt>I</dt><dd>IN PROCESS/VETERAN CONTACTED</dd><dt>F</dt><dd>FILLED</dd><dt>E</dt><dd>EWL</dd></dl> |  | 
| dateStatusLastEdited |  | DATE-TIME | date_status_last_edited |  |  |  | 
| appointmentRequestComment |  | STRING | appointment_request_comment |  |  |  | 
| dateCommentLastEdited |  | DATE-TIME | date_comment_last_edited |  |  |  | 
| fugitiveFelonFlag |  | BOOLEAN | fugitive_felon_flag |  | {true:1} |  | 
| fffEnteredBy |  | POINTER | fff_entered_by |  | {id:New_Person-200} |  | 
| fffDateEntered |  | DATE-TIME | fff_date_entered |  |  |  | 
| fffRemovedBy |  | POINTER | fff_removed_by |  | {id:New_Person-200} |  | 
| fffDateRemoved |  | DATE-TIME | fff_date_removed |  |  |  | 
| fffRemovalRemarks |  | STRING | fff_removal_remarks |  |  |  | 
| appointment |  | [OBJECT] | appointment |  | [Appointment-2_98](#appointment-2_98)  |  | 
| isVeteran |  | BOOLEAN | veteran_y_n |  | {false:N,true:Y} |  | 
| archivedData |  | [OBJECT] | archived_data |  | [Archived_Data-2_12](#archived_data-2_12)  |  | 
| vtsPatientFlag |  | BOOLEAN | vts_patient_flag |  | {false:0,true:1} |  | 
| initialOdsTreatmentReceived |  | DATE-TIME | initial_ods_treatment_received |  |  |  | 
| recalledToActiveDuty |  | ENUMERATION | recalled_to_active_duty |  | <dl><dt>1</dt><dd>NATIONAL GUARD</dd><dt>2</dt><dd>RESERVES</dd><dt>0</dt><dd>NO</dd></dl> |  | 
| patientRank |  |  | rank-2 |  |  |  | 
| networkIdentifier |  | STRING | network_identifier |  |  |  | 

## Confidential_Address_Category-2_141 

 property | value 
--- | --- 
 id | Confidential_Address_Category-2_141
 label | Confidential Address Category

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| confidential_address_category | Confidential Address Category | ENUMERATION |  |  | <dl><dt>1</dt><dd>ELIGIBILITY/ENROLLMENT</dd><dt>4</dt><dd>MEDICAL RECORDS</dd><dt>2</dt><dd>APPOINTMENT/SCHEDULING</dd><dt>3</dt><dd>COPAYMENTS/VETERAN BILLING</dd><dt>5</dt><dd>ALL OTHERS</dd></dl> | REQUIRED, INDEXED | 
| confidential_category_active | Confidential Category Active | BOOLEAN |  |  | {false:N,true:Y} |  | 

## Insurance_Type-2_312 

 property | value 
--- | --- 
 id | Insurance_Type-2_312
 label | Insurance Type

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| insurance_type | Insurance Type | POINTER |  |  | {id:Insurance_Company-36} | REQUIRED, INDEXED | 
| group_plan | Group Plan | POINTER |  |  | {id:Group_Insurance_Plan-355_3} |  | 
| coordination_of_benefits | Coordination Of Benefits | ENUMERATION |  |  | <dl><dt>1</dt><dd>PRIMARY</dd><dt>3</dt><dd>TERTIARY</dd><dt>2</dt><dd>SECONDARY</dd></dl> |  | 
| subscriber_id | *Subscriber Id | STRING |  |  |  |  | 
| date_entered | Date Entered | DATE-TIME |  |  |  |  | 
| entered_by | Entered By | POINTER |  |  | {id:New_Person-200} |  | 
| date_last_verified | Date Last Verified | DATE-TIME |  |  |  |  | 
| verified_by | Verified By | POINTER |  |  | {id:New_Person-200} |  | 
| date_last_edited | Date Last Edited | DATE-TIME |  |  |  |  | 
| last_edited_by | Last Edited By | POINTER |  |  | {id:New_Person-200} |  | 
| comment__patient_policy | Comment - Patient Policy | STRING |  |  |  |  | 
| source_of_information | Source Of Information | POINTER |  |  | {id:Source_Of_Information-355_12} |  | 
| date_of_source_of_information | Date Of Source Of Information | DATE-TIME |  |  |  |  | 
| group_number | *Group Number | STRING |  |  |  |  | 
| send_bill_to_employer | Send Bill To Employer | BOOLEAN |  |  | {false:0,true:1} |  | 
| subscribers_employer_name | Subscriber'S Employer Name | STRING |  |  |  |  | 
| employer_claims_street_address | Employer Claims Street Address | STRING |  |  |  |  | 
| employ_claim_st_address_line_2 | Employ Claim St Address Line 2 | STRING |  |  |  |  | 
| employ_claim_st_address_line_3 | Employ Claim St Address Line 3 | STRING |  |  |  |  | 
| employer_claims_city | Employer Claims City | STRING |  |  |  |  | 
| employer_claims_state | Employer Claims State | POINTER |  |  | {id:State-5} |  | 
| employer_claims_zip_code | Employer Claims Zip Code | STRING |  |  |  |  | 
| employer_claims_phone | Employer Claims Phone | STRING |  |  |  |  | 
| esghp | Esghp | BOOLEAN |  |  | {false:0,true:1} |  | 
| employment_status | Employment Status | ENUMERATION |  |  | <dl><dt>4</dt><dd>SELF EMPLOYED</dd><dt>2</dt><dd>PART TIME</dd><dt>5</dt><dd>RETIRED</dd><dt>9</dt><dd>UNKNOWN</dd><dt>3</dt><dd>NOT EMPLOYED</dd><dt>1</dt><dd>FULL TIME</dd><dt>6</dt><dd>ACTIVE MILITARY</dd></dl> |  | 
| retirement_date | Retirement Date | DATE-TIME |  |  |  |  | 
| insurance_expiration_date | Insurance Expiration Date | DATE-TIME |  |  |  |  | 
| insureds_dob | Insured'S Dob | DATE-TIME |  |  |  |  | 
| insureds_branch | Insured'S Branch | POINTER |  |  | {id:Branch_Of_Service-23} |  | 
| insureds_rank | Insured'S Rank | STRING |  |  |  |  | 
| policy_not_billable | Policy Not Billable | BOOLEAN |  |  | {false:0,true:1} |  | 
| insureds_ssn | Insured'S Ssn | STRING |  |  |  |  | 
| insureds_street_1 | Insured'S Street 1 | STRING |  |  |  |  | 
| insureds_street_2 | Insured'S Street 2 | STRING |  |  |  |  | 
| insureds_city | Insured'S City | STRING |  |  |  |  | 
| insureds_state | Insured'S State | POINTER |  |  | {id:State-5} |  | 
| insureds_zip | Insured'S Zip | STRING |  |  |  |  | 
| insureds_phone | Insured'S Phone | STRING |  |  |  |  | 
| insureds_sex | Insured'S Sex | ENUMERATION |  |  | <dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl> |  | 
| insureds_country | Insured'S Country | STRING |  |  |  |  | 
| insureds_country_subdivision | Insured'S Country Subdivision | STRING |  |  |  |  | 
| primary_care_provider | Primary Care Provider | STRING |  |  |  |  | 
| primary_provider_phone | Primary Provider Phone | STRING |  |  |  |  | 
| pt_relationship__hipaa | Pt. Relationship - Hipaa | ENUMERATION |  |  | <dl><dt>41</dt><dd>INJURED PLAINTIFF</dd><dt>39</dt><dd>ORGAN DONOR</dd><dt>18</dt><dd>SELF</dd><dt>19</dt><dd>CHILD</dd><dt>33</dt><dd>FATHER</dd><dt>29</dt><dd>SIGNIFICANT OTHER</dd><dt>32</dt><dd>MOTHER</dd><dt>20</dt><dd>EMPLOYEE</dd><dt>01</dt><dd>SPOUSE</dd><dt>53</dt><dd>LIFE PARTNER</dd><dt>G8</dt><dd>OTHER RELATIONSHIP</dd></dl> |  | 
| eiv_autoupdate | Eiv Auto-Update | BOOLEAN |  |  | {false:0,true:1} |  | 
| pharmacy_relationship_code | Pharmacy Relationship Code | POINTER |  |  | {id:Bps_Ncpdp_Patient_Relationship_Code-9002313_19} |  | 
| pharmacy_person_code | Pharmacy Person Code | STRING |  |  |  |  | 
| patient_id | Patient Id | STRING |  |  |  |  | 
| subscribers_sec_qualifier1 | Subscriber'S Sec Qualifier(1) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| subscribers_sec_id1 | Subscriber'S Sec Id(1) | STRING |  |  |  |  | 
| subscribers_sec_qualifier2 | Subscriber'S Sec Qualifier(2) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| subscribers_sec_id2 | Subscriber'S Sec Id(2) | STRING |  |  |  |  | 
| subscribers_sec_qualifier3 | Subscriber'S Sec Qualifier(3) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| subscribers_sec_id3 | Subscriber'S Sec Id(3) | STRING |  |  |  |  | 
| patients_sec_qualifier1 | Patient'S Sec Qualifier(1) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| patients_secondary_id1 | Patient'S Secondary Id(1) | STRING |  |  |  |  | 
| patients_sec_qualifier2 | Patient'S Sec Qualifier(2) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| patients_secondary_id2 | Patient'S Secondary Id(2) | STRING |  |  |  |  | 
| patients_sec_qualifier3 | Patient'S Sec Qualifier(3) | ENUMERATION |  |  | <dl><dt>IG</dt><dd>Insurance Policy Number</dd><dt>23</dt><dd>Client Number</dd><dt>SY</dt><dd>Social Security Number</dd></dl> |  | 
| patients_secondary_id3 | Patient'S Secondary Id(3) | STRING |  |  |  |  | 
| whose_insurance | Whose Insurance | ENUMERATION |  |  | <dl><dt>v</dt><dd>VETERAN</dd><dt>s</dt><dd>SPOUSE</dd><dt>o</dt><dd>OTHER</dd></dl> |  | 
| name_of_insured | Name Of Insured | STRING |  |  |  |  | 
| subscriber_id-2_312-7_02 | Subscriber Id | STRING |  |  |  |  | 
| effective_date_of_policy | Effective Date Of Policy | DATE-TIME |  |  |  |  | 
| requested_service_date | Requested Service Date | DATE-TIME |  |  |  |  | 
| requested_service_type | Requested Service Type | POINTER |  |  | {id:X12_271_Service_Type-365_013} |  | 
| group_reference_information | Group Reference Information | [OBJECT] |  |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Subscriber Supplemental Identifier.,datatype:STRING,label:Reference Id (Group),fmId:.02,id:reference_id_group},{description: Describes the type of reference ID at the REFERENCE ID (GROUP) (#.02)\rfield. ,datatype:POINTER,label:Ref Id Qualifier (Group),range:{id:X12_271_Reference_Identification-365_028},fmId:.03,id:ref_id_qualifier_group},{description:A free-form description to clarify the Reference ID in the REFERENCE ID\r(GROUP) (#.02) field.  It will be populated with the Plan, Group or Plan\rNetwork Name.,datatype:STRING,label:Description,fmId:.04,id:description}],fmId:2.3129,id:Group_Reference_Information-2_3129,label:Group Reference Information} |  | 
| group_provider_info | Group Provider Info | [OBJECT] |  |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Code that identifies the type of provider (e.g., \AD\ for Admitting).,datatype:POINTER,label:Provider Code,range:{id:X12_271_Provider_Code-365_024},fmId:.02,id:provider_code},{description:Provider specialty type identifier.,datatype:STRING,label:Prov Reference Id,fmId:.03,id:prov_reference_id}],fmId:2.332,id:Group_Provider_Info-2_332,label:Group Provider Info} |  | 
| health_care_code_information | Health Care Code Information | [OBJECT] |  |  | {properties:[{description:This field contains a sequential number generated at the time a record is\rstored in the subfile.  ,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Diagnosis Code sent by the payer in response to the insurance eligibility\rinquiry.,datatype:POINTER,label:Diagnosis Code,range:{id:Icd_Diagnosis-80},fmId:.02,id:diagnosis_code},{description:Diagnosis Type Code identifying a specific industry code list ICD-9 or\rICD-10.,datatype:STRING,label:Diagnosis Code Qualifier,fmId:.03,id:diagnosis_code_qualifier},{description:This field indicates whether the code in the DIAGNOSIS CODE (#.02) field\ris a primary or secondary diagnosis.,datatype:ENUMERATION,label:Primary Or Secondary?,range:{PRIMARY:P,SECONDARY:S},fmId:.04,id:primary_or_secondary}],fmId:2.31211,id:Health_Care_Code_Information-2_31211,label:Health Care Code Information} |  | 
| military_info_status_code | Military Info Status Code | POINTER |  |  | {id:X12_271_Military_Personnel_Info_Status_Code-365_039} |  | 
| military_employment_status | Military Employment Status | POINTER |  |  | {id:X12_271_Military_Employment_Status_Code-365_046} |  | 
| military_govt_affiliation_code | Military Govt Affiliation Code | POINTER |  |  | {id:X12_271_Military_Govt_Service_Affiliation-365_041} |  | 
| military_personnel_description | Military Personnel Description | STRING |  |  |  |  | 
| military_service_rank_code | Military Service Rank Code | POINTER |  |  | {id:X12_271_Military_Service_Rank-365_042} |  | 
| date_time_period_format_qual | Date Time Period Format Qual | POINTER |  |  | {id:X12_271_Date_Format_Qualifier-365_032} |  | 
| date_time_period | Date Time Period | STRING |  |  |  |  | 
| group_name | *Group Name | STRING |  |  |  |  | 
| pt_relationship_to_insured | Pt. Relationship To Insured | ENUMERATION |  |  | <dl><dt>01</dt><dd>PATIENT</dd><dt>11</dt><dd>ORGAN DONOR</dd><dt>03</dt><dd>NATURAL CHILD</dd><dt>18</dt><dd>DO NOT USE</dd><dt>33</dt><dd>FATHER</dd><dt>15</dt><dd>INJURED PLANTIFF</dd><dt>34</dt><dd>SIGNIFICANT OTHER</dd><dt>32</dt><dd>MOTHER</dd><dt>08</dt><dd>EMPLOYEE</dd><dt>02</dt><dd>SPOUSE</dd><dt>35</dt><dd>LIFE PARTNER</dd><dt>36</dt><dd>OTHER RELATIONSHIP</dd></dl> |  | 
| name_of_insured-2_312-17 | *Name Of Insured | STRING |  |  |  |  | 
| eligibility_benefit | Eligibility/Benefit | [OBJECT] |  |  | {properties:[{description:This is a sequential number corresponding to the Set-ID for all\rof the eligibility/benefit (X.12 EB segments) segments coming\rinto VISTA.,datatype:NUMERIC,required:true,label:Eb Number,indexed:true,fmId:.01,id:eb_number},{description:This field contains a code identifying the eligibility status\rof the individual or the benefit returned by the Payer.,datatype:POINTER,label:Eligibility/Benefit Info,range:{id:X12_271_Eligibility_Benefit-365_011},fmId:.02,id:eligibility_benefit_info},{description:This field identifies the level of coverage of benefits.,datatype:POINTER,label:Coverage Level,range:{id:X12_271_Coverage_Level-365_012},fmId:.03,id:coverage_level},{description:This field is a code identifying the classification of service.,datatype:POINTER,label:*Service Type,range:{id:X12_271_Service_Type-365_013},fmId:.04,id:service_type},{description:This is a code identifying the type of insurance policy within\ra specific insurance program.,datatype:POINTER,label:Insurance Type,range:{id:X12_271_Insurance_Type-365_014},fmId:.05,id:insurance_type},{description:This code is a description or number that identifies the plan\ror coverage.,datatype:STRING,label:Plan Coverage Description,fmId:.06,id:plan_coverage_description},{description:This is a code for the time period category that determines\rfor how long the benefits are available.,datatype:POINTER,label:Time Period Qualifier,range:{id:X12_271_Time_Period_Qualifier-365_015},fmId:.07,id:time_period_qualifier},{description:This field is populated if eligibility or benefit must be\rqualified by a monetary amount.,datatype:STRING,label:Monetary Amount,fmId:.08,id:monetary_amount},{description:This field is used if eligibility or benefit must be qualified\rby a percentage.,datatype:NUMERIC,label:Percent,fmId:.09,id:percent},{description:This field is used to identify the type of units that are being\rconveyed in the QUANTITY field (#.11).,datatype:POINTER,label:Quantity Qualifier,range:{id:X12_271_Quantity_Qualifier-365_016},fmId:.1,id:quantity_qualifier},{description:This field number is used for the quantity value as qualified by\rthe QUANTITY QUALIFIER field.,datatype:STRING,label:Quantity,fmId:.11,id:quantity},{description:This field indicates that an authorization or certification\ris required per plan provisions.,datatype:POINTER,label:Authorization/Certification,range:{id:X12_271_Yes_No_Response_Code_-365_033},fmId:.12,id:authorization_certification},{description:This field indicates the plan network indicator.  A YES value indicates\rthe benefits identified are considered In-Plan-Network.  A NO value\rindicates that the benefits identified are considered \rOut-Of-Plan-Network.  A \U\ value indicates it is unknown whether the\rbenefits identified are part of the Plan Network.,datatype:POINTER,label:In Plan,range:{id:X12_271_Yes_No_Response_Code_-365_033},fmId:.13,id:in_plan},{description:Two character code describing procedure coding method.,datatype:POINTER,label:Procedure Coding Method,range:{id:X12_271_Procedure_Coding_Method-365_035},fmId:1.01,id:procedure_coding_method},{description:Identification code for the procedure.,datatype:STRING,label:Procedure Code,fmId:1.02,id:procedure_code},{description:Identifies special circumstances related to the procedure; first modifier.,datatype:STRING,label:Procedure Modifier 1,fmId:1.03,id:procedure_modifier_1},{description:Identifies special circumstances related to the procedure; second\rmodifier.,datatype:STRING,label:Procedure Modifier 2,fmId:1.04,id:procedure_modifier_2},{description:Identifies special circumstances related to the procedure; third modifier.,datatype:STRING,label:Procedure Modifier 3,fmId:1.05,id:procedure_modifier_3},{description:Identifies special circumstances related to the procedure; fourth\rmodifier.,datatype:STRING,label:Procedure Modifier 4,fmId:1.06,id:procedure_modifier_4},{description:This field contains any additional text about the eligibility\rbenefit information.  It is transcribed from X.12 271 MSG segments.,datatype:STRING,label:Notes,isWP:true,fmId:2,id:notes},{description:X12 Entity Identifier Code.,datatype:POINTER,label:Entity Id Code,range:{id:X12_271_Entity_Identifier_Code-365_022},fmId:3.01,id:entity_id_code},{description:Entity Type Qualifier.,datatype:POINTER,label:Entity Type,range:{id:X12_271_Entity_Type_Qualifier-365_043},fmId:3.02,id:entity_type},{description:Name of person or organization.,datatype:STRING,label:Name,fmId:3.03,id:name},{description:Entity identifier.,datatype:STRING,label:Entity Id,fmId:3.04,id:entity_id},{description:Code designating the system/method used for Identification.,datatype:POINTER,label:Entity Id Qualifier,range:{id:X12_271_Identification_Qualifier-365_023},fmId:3.05,id:entity_id_qualifier},{description:Benefit Related Entity's relationship to the patient.,datatype:POINTER,label:Entity Relationship Code,range:{id:X12_271_Entity_Relationship_Code-365_031},fmId:3.06,id:entity_relationship_code},{description:Entity address, line 1.,datatype:STRING,label:Address Line 1,fmId:4.01,id:address_line_1},{description:Entity address, line 2.,datatype:STRING,label:Address Line 2,fmId:4.02,id:address_line_2},{description:Entity address, city.,datatype:STRING,label:City,fmId:4.03,id:city},{description:Entity address, state or province code.,datatype:POINTER,label:State,range:{id:State-5},fmId:4.04,id:state},{description:Entity address, zip or postal code.,datatype:STRING,label:Zip,fmId:4.05,id:zip},{description:Entity address, country code.,datatype:STRING,label:Country Code,fmId:4.06,id:country_code},{description:Entity address, location identifier.,datatype:STRING,label:Location,fmId:4.07,id:location},{description:Entity address, location qualifier.,datatype:POINTER,label:Location Qualifier,range:{id:X12_271_Location_Qualifer-365_034},fmId:4.08,id:location_qualifier},{description:Entity address, country subdivision code.,datatype:STRING,label:Subdivision Code,fmId:4.09,id:subdivision_code},{description:Code identifying the type of provider.,datatype:POINTER,label:Provider Code,range:{id:X12_271_Provider_Code-365_024},fmId:5.01,id:provider_code},{description:Reference identifier.,datatype:STRING,label:Reference Id,fmId:5.02,id:reference_id},{description:Reference identifier type.,datatype:POINTER,label:Reference Id Qualifier,range:{id:X12_271_Reference_Identification-365_028},fmId:5.03,id:reference_id_qualifier},{description:This multiple contains contact information for an eligibility/benefit\rentity.,datatype:[OBJECT],label:Contact Information,range:{properties:[{description:Sequential entry number.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Name of the contact.,datatype:STRING,label:Name,fmId:.02,id:name},{description:Phone, fax, email, etc.\r \rThis field is scheduled for deletion in May 2015.,datatype:STRING,label:*Communication Number,fmId:.03,id:communication_number},{description:Code describing type of communication number.,datatype:POINTER,label:Communication Qualifier,range:{id:X12_271_Contact_Qualifier-365_021},fmId:.04,id:communication_qualifier},{description:Phone, fax, email, URL,datatype:STRING,label:Communication Number,fmId:1,id:communication_number-2_3226-1}],fmId:2.3226,id:Contact_Information-2_3226,label:Contact Information},fmId:6,id:contact_information},{description:Healthcare services delivery multiple.,datatype:[OBJECT],label:Healthcare Services Delivery,range:{properties:[{description:Sequential entry number.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Numeric value of benefit quantity as qualified by QUANTITY QUALIFIER\rfield.,datatype:NUMERIC,label:Benefit Quantity,fmId:.02,id:benefit_quantity},{description:Benefit quantity qualifier.,datatype:POINTER,label:Quantity Qualifier,range:{id:X12_271_Quantity_Qualifier-365_016},fmId:.03,id:quantity_qualifier},{description:Sampling frequency in terms of a modulus of the Unit of Measure. Qualified\rby UNITS OF MEASUREMENT field.,datatype:STRING,label:Sample Selection Modulus,fmId:.04,id:sample_selection_modulus},{description:Units of measurement for frequency of the benefits.,datatype:POINTER,label:Units Of Measurement,range:{id:X12_271_Units_Of_Measurement-365_029},fmId:.05,id:units_of_measurement},{description:Number of time periods as qualified by TIME PERIOD QUALIFIER field.,datatype:NUMERIC,label:Time Periods,fmId:.06,id:time_periods},{description:Code that defines a time period.,datatype:POINTER,label:Time Period Qualifier,range:{id:X12_271_Time_Period_Qualifier-365_015},fmId:.07,id:time_period_qualifier},{description:Code that defines frequency of deliveries.,datatype:POINTER,label:Delivery Frequency,range:{id:X12_271_Delivery_Frequency_Code-365_025},fmId:.08,id:delivery_frequency},{description:Code that defines pattern of deliveries.,datatype:POINTER,label:Delivery Pattern,range:{id:X12_271_Delivery_Pattern-365_036},fmId:.09,id:delivery_pattern}],fmId:2.3227,id:Healthcare_Services_Delivery-2_3227,label:Healthcare Services Delivery},fmId:7,id:healthcare_services_delivery},{description:Subscriber dates multiple.,datatype:[OBJECT],label:Subscriber Dates,range:{properties:[{description:Sequential number of ZSD segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Date or range of dates.,datatype:STRING,label:Date,fmId:.02,id:date},{description:Code describing the type of date.,datatype:POINTER,label:Date Qualifier,range:{id:X12_271_Date_Qualifier-365_026},fmId:.03,id:date_qualifier},{description:Format of the date representation.,datatype:POINTER,label:Date Format,range:{id:X12_271_Date_Format_Qualifier-365_032},fmId:.04,id:date_format}],fmId:2.3228,id:Subscriber_Dates-2_3228,label:Subscriber Dates},fmId:8,id:subscriber_dates},{description:Additional subscriber information multiple.,datatype:[OBJECT],label:Subscriber Additional Info,range:{properties:[{description:Sequential number of ZII segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Place of service code.,datatype:POINTER,label:Place Of Service,range:{id:Place_Of_Service-353_1},fmId:.02,id:place_of_service},{description:Diagnosis code.,datatype:POINTER,label:Diagnosis,range:{id:Icd_Diagnosis-80},fmId:.03,id:diagnosis},{description:Additional information qualifier.,datatype:POINTER,label:Qualifier,range:{id:X12_271_Code_List_Qualifier-365_044},fmId:.04,id:qualifier},{description:Code that represents the nature of the patient injury.,datatype:POINTER,label:Nature Of Injury Code,range:{id:X12_271_Nature_Of_Injury_Codes-365_045},fmId:.05,id:nature_of_injury_code},{description:Specifies the situation or category to which the code applies.,datatype:STRING,label:Nature Of Injury Category,fmId:.06,id:nature_of_injury_category},{description:Describes the injured body part or parts.,datatype:STRING,label:Nature Of Injury Text,fmId:.07,id:nature_of_injury_text}],fmId:2.3229,id:Subscriber_Additional_Info-2_3229,label:Subscriber Additional Info},fmId:9,id:subscriber_additional_info},{description:Subscriber reference id multiple.,datatype:[OBJECT],label:Subscriber Reference Id,range:{properties:[{description:Sequential number of ZRF segment.,datatype:NUMERIC,required:true,label:Sequence,indexed:true,fmId:.01,id:sequence},{description:Reference id value.,datatype:STRING,label:Reference Id,fmId:.02,id:reference_id},{description:Code describing the type of reference id.,datatype:POINTER,label:Reference Id Qualifier,range:{id:X12_271_Reference_Identification-365_028},fmId:.03,id:reference_id_qualifier},{description:Short description of reference id.,datatype:STRING,label:Description,fmId:.04,id:description}],fmId:2.32291,id:Subscriber_Reference_Id-2_32291,label:Subscriber Reference Id},fmId:10,id:subscriber_reference_id},{datatype:[POINTER],label:Service Types,range:{id:X12_271_Service_Type-365_013},fmId:11,id:service_types}],fmId:2.322,id:Eligibility_Benefit-2_322,label:Eligibility/Benefit} |  | 

## Service_Oef_Or_Oif-2_3215 

 property | value 
--- | --- 
 id | Service_Oef_Or_Oif-2_3215
 label | Service [Oef Or Oif]

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| location_of_service | Location Of Service | ENUMERATION |  |  | <dl><dt>3</dt><dd>UNKNOWN OEF/OIF</dd><dt>1</dt><dd>OIF</dd><dt>2</dt><dd>OEF</dd></dl> | REQUIRED, INDEXED | 
| oef_oif_from_date | Oef/Oif From Date | DATE-TIME |  |  |  |  | 
| oef_oif_to_date | Oef/Oif To Date | DATE-TIME |  |  |  |  | 
| data_locked | Data Locked | BOOLEAN |  |  | {false:0,true:1} |  | 
| recorded_date_time | Recorded Date/Time | DATE-TIME |  |  |  |  | 
| entered_by_site | Entered By Site | POINTER |  |  | {id:Institution-4} |  | 

## Military_Service_Episode-2_3216 

 property | value 
--- | --- 
 id | Military_Service_Episode-2_3216
 label | Military Service Episode

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| service_entry_date | Service Entry Date | DATE-TIME |  |  |  | REQUIRED, INDEXED | 
| service_separation_date | Service Separation Date | DATE-TIME |  |  |  |  | 
| service_branch | Service Branch | POINTER |  |  | {id:Branch_Of_Service-23} |  | 
| service_component | Service Component | ENUMERATION |  |  | <dl><dt>V</dt><dd>ACTIVATED RESERVE</dd><dt>G</dt><dd>ACTIVATED NG</dd><dt>R</dt><dd>REGULAR</dd></dl> |  | 
| service_number | Service Number | STRING |  |  |  |  | 
| service_discharge_type | Service Discharge Type | POINTER |  |  | {id:Type_Of_Discharge-25} |  | 
| data_locked | Data Locked | BOOLEAN |  |  | {false:0,true:1} |  | 

## Date_Of_Dental_Treatment-2_11 

 property | value 
--- | --- 
 id | Date_Of_Dental_Treatment-2_11
 label | Date Of Dental Treatment

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| date_of_dental_treatment | Date Of Dental Treatment | DATE-TIME |  |  |  | REQUIRED | 
| condition | Condition | STRING |  |  |  |  | 
| date_condition_first_noticed | Date Condition First Noticed | DATE-TIME |  |  |  |  | 

## Rated_Disabilities_Va-2_04 

 property | value 
--- | --- 
 id | Rated_Disabilities_Va-2_04
 label | Rated Disabilities (Va)

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| rated_disabilities_va | Rated Disabilities (Va) | POINTER |  |  | {id:Disability_Condition-31} | REQUIRED | 
| disability_ | Disability % | NUMERIC |  |  |  |  | 
| service_connected | Service Connected | BOOLEAN |  |  | {false:0,true:1} |  | 
| extremity_affected | Extremity Affected | ENUMERATION |  |  | <dl><dt>RU</dt><dd>RIGHT UPPER</dd><dt>LL</dt><dd>LEFT LOWER</dd><dt>BL</dt><dd>BOTH LOWER</dd><dt>LU</dt><dd>LEFT UPPER</dd><dt>RL</dt><dd>RIGHT LOWER</dd><dt>BU</dt><dd>BOTH UPPER</dd></dl> |  | 
| original_effective_date | Original Effective Date | DATE-TIME |  |  |  |  | 
| current_effective_date | Current Effective Date | DATE-TIME |  |  |  |  | 

## Service_Connected_Conditions-2_05 

 property | value 
--- | --- 
 id | Service_Connected_Conditions-2_05
 label | Service Connected Conditions

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| service_connected_conditions | Service Connected Conditions | STRING |  |  |  | REQUIRED | 
| percentage | Percentage | NUMERIC |  |  |  |  | 

## Cd_Status_Procedures-2_397 

 property | value 
--- | --- 
 id | Cd_Status_Procedures-2_397
 label | Cd Status Procedures

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cd_status_procedures | Cd Status Procedures | POINTER |  |  | {id:Catastrophic_Disability_Reasons-27_17} | REQUIRED, INDEXED | 
| affected_extremity | Affected Extremity | ENUMERATION |  |  | <dl><dt>RLE</dt><dd>Right Lower Extremity</dd><dt>BLE</dt><dd>Bilateral Lower Extremity</dd><dt>LLE</dt><dd>Left Lower Extremity</dd><dt>LUE</dt><dd>Left Upper Extremity</dd><dt>BUE</dt><dd>Bilateral Upper Extremity</dd><dt>RUE</dt><dd>Right Upper Extremity</dd></dl> |  | 

## Cd_Status_Conditions-2_398 

 property | value 
--- | --- 
 id | Cd_Status_Conditions-2_398
 label | Cd Status Conditions

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cd_status_conditions | Cd Status Conditions | POINTER |  |  | {id:Catastrophic_Disability_Reasons-27_17} | REQUIRED, INDEXED | 
| score | Score | NUMERIC |  |  |  |  | 
| permanent_indicator | Permanent Indicator | ENUMERATION |  |  | <dl><dt>3</dt><dd>UNKNOWN</dd><dt>1</dt><dd>PERMANENT</dd><dt>2</dt><dd>NOT PERMANENT</dd></dl> |  | 

## Cd_History_Date-2_399 

 property | value 
--- | --- 
 id | Cd_History_Date-2_399
 label | Cd History Date

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cd_history_date | Cd History Date | DATE-TIME |  |  |  | REQUIRED, INDEXED | 
| veteran_catastrophically_disabled | Veteran Catastrophically Disabled? | BOOLEAN |  |  | {false:N,true:Y} |  | 
| decided_by | Decided By | STRING |  |  |  |  | 
| date_of_decision | Date Of Decision | DATE-TIME |  |  |  |  | 
| facility_making_determination | Facility Making Determination | POINTER |  |  | {id:Institution-4} |  | 
| review_date | Review Date | DATE-TIME |  |  |  |  | 
| method_of_determination | Method Of Determination | ENUMERATION |  |  | <dl><dt>1</dt><dd>AUTOMATED RECORD REVIEW</dd><dt>3</dt><dd>PHYSICAL EXAMINATION</dd><dt>2</dt><dd>MEDICAL RECORD REVIEW</dd></dl> |  | 
| date_veteran_requested_cd_eval | Date Veteran Requested Cd Eval | DATE-TIME |  |  |  |  | 
| date_facility_initiated_review | Date Facility Initiated Review | DATE-TIME |  |  |  |  | 
| date_veteran_was_notified | Date Veteran Was Notified | DATE-TIME |  |  |  |  | 
| cd_reason | Cd Reason | [OBJECT] |  |  | {properties:[{description:This sub-field will contain pointers to the CD REASONS file (#27.17),\ras well as the supporting data stored in the CD STATUS DIAGNOSES (#.396),\rPROCEDURES (#.397) and CONDITIONS (#.398) fields.,datatype:POINTER,required:true,label:Cd Reason,range:{id:Catastrophic_Disability_Reasons-27_17},indexed:true,fmId:.01,id:cd_reason},{description:This is the extremity affected by the CD.,datatype:ENUMERATION,label:Affected Extremity,range:{RIGHT LOWER EXTREMITY:RLE,Bilateral Lower Extremity:BLE,LEFT LOWER EXTREMITY:LLE,LEFT UPPER EXTREMITY:LUE,Bilateral Upper Extremity:BLU,RIGHT UPPER EXTREMITY:RUE},fmId:1,id:affected_extremity},{description:This field stores a historical value for the SCORE subfield (#1) of the\rCD STATUS CONDITIONS field (#.398) of the PATIENT file (#2).,datatype:NUMERIC,label:Score,fmId:2,id:score},{description:This subfield stores a historical value of the PERMANENT INDICATOR subfield\r(#2) of the CD STATUS CONDITIONS field (#.398) of the PATIENT file (#2).,datatype:ENUMERATION,label:Permanent Indicator,range:{UNKNOWN:3,PERMANENT:1,NOT PERMANENT:2},fmId:3,id:permanent_indicator}],fmId:2.409,id:Cd_Reason-2_409,label:Cd Reason} |  | 

## Alias-2_01 

 property | value 
--- | --- 
 id | Alias-2_01
 label | Alias

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| alias | Alias | STRING |  |  |  | REQUIRED | 
| alias_ssn | Alias Ssn | STRING |  |  |  |  | 
| alias_components | Alias Components | POINTER |  |  | {id:Name_Components-20} |  | 

## Race_Information-2_02 

 property | value 
--- | --- 
 id | Race_Information-2_02
 label | Race Information

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| race_information | Race Information | POINTER |  |  | {id:Race-10} | REQUIRED, INDEXED | 
| method_of_collection | Method Of Collection | POINTER |  |  | {id:Race_And_Ethnicity_Collection_Method-10_3} |  | 

## Enrollment_Clinic-2_001 

 property | value 
--- | --- 
 id | Enrollment_Clinic-2_001
 label | Enrollment Clinic

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| enrollment_clinic | Enrollment Clinic | POINTER |  |  | {id:Hospital_Location-44} | REQUIRED, INDEXED | 
| enrollment_data | Enrollment Data | [OBJECT] |  |  | {properties:[{description:Enter the date this patient was initially enrolled in this clinic.,datatype:DATE-TIME,required:true,label:Date Of Enrollment,fmId:.01,id:date_of_enrollment},{description:Enter O if the patient is being seen by this clinic on an outpatient\rbasis.  Enter A if the patient is being seen for ambulatory care.,datatype:ENUMERATION,label:Opt Or Ac,range:{OPT:O,AC:A},fmId:1,id:opt_or_ac},{description:This field contains the date this patient was discharged from this clinic.,datatype:DATE-TIME,label:Date Of Discharge,fmId:3,id:date_of_discharge},{description:If the patient has been discharged from this clinic, this field contains the\rreason the patient was discharged.  This is a free text field which\rallows up to 80 characters to be entered.,datatype:STRING,label:Reason For Discharge,fmId:4,id:reason_for_discharge},{description:Enter the date on which this patients enrollment in this particular\rclinic was last reviewed.,datatype:DATE-TIME,label:Review Date,fmId:5,id:review_date}],fmId:2.011,id:Enrollment_Data-2_011,label:Enrollment Data} |  | 
| current_status | Current Status | ENUMERATION |  |  | <dl><dt>I</dt><dd>INACTIVE</dd></dl> |  | 

## Ethnicity_Information-2_06 

 property | value 
--- | --- 
 id | Ethnicity_Information-2_06
 label | Ethnicity Information

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| ethnicity_information | Ethnicity Information | POINTER |  |  | {id:Ethnicity-10_2} | REQUIRED, INDEXED | 
| method_of_collection | Method Of Collection | POINTER |  |  | {id:Race_And_Ethnicity_Collection_Method-10_3} |  | 

## Patient_Eligibilities-2_0361 

 property | value 
--- | --- 
 id | Patient_Eligibilities-2_0361
 label | Patient Eligibilities

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| eligibility | Eligibility | POINTER |  |  | {id:Eligibility_Code-8} | REQUIRED, INDEXED | 
| long_id | Long Id | STRING |  |  |  |  | 
| short_id | Short Id | STRING |  |  |  |  | 

## Ph_Date_Time_Updated-2_0534 

 property | value 
--- | --- 
 id | Ph_Date_Time_Updated-2_0534
 label | Ph Date/Time Updated

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| ph_date_time_updated | Ph Date/Time Updated | DATE-TIME |  |  |  | REQUIRED, INDEXED | 
| ph | Ph? | BOOLEAN |  |  | {false:N,true:Y} |  | 
| ph_status | Ph Status | ENUMERATION |  |  | <dl><dt>3</dt><dd>CONFIRMED</dd><dt>2</dt><dd>IN PROCESS</dd><dt>1</dt><dd>PENDING</dd></dl> |  | 
| ph_remarks | Ph Remarks | ENUMERATION |  |  | <dl><dt>6</dt><dd>UNDELIVERABLE MAIL</dd><dt>5</dt><dd>VAMC</dd><dt>3</dt><dd>ENTERED IN ERROR</dd><dt>1</dt><dd>UNACCEPTABLE DOCUMENTATION</dd><dt>2</dt><dd>NO DOCUMENTATION REC'D</dd><dt>4</dt><dd>UNSUPPORTED PURPLE HEART</dd></dl> |  | 
| ph_user | Ph User | STRING |  |  |  |  | 

## Icn_History-2_0992 

 property | value 
--- | --- 
 id | Icn_History-2_0992
 label | Icn History

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| icn_history | Icn History | NUMERIC |  |  |  | REQUIRED | 
| icn_checksum | Icn Checksum | NUMERIC |  |  |  |  | 
| cmor | Cmor | POINTER |  |  | {id:Institution-4} |  | 
| date_time_of_change | Date/Time Of Change | DATE-TIME |  |  |  |  | 

## Cmor_History-2_0993 

 property | value 
--- | --- 
 id | Cmor_History-2_0993
 label | Cmor History

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| cmor_history | Cmor History | NUMERIC |  |  |  | REQUIRED | 
| cmor_activity_score | Cmor Activity Score | NUMERIC |  |  |  |  | 
| cmor_score_calculation_date | Cmor Score Calculation Date | DATE-TIME |  |  |  |  | 
| cmor_change_date | Cmor Change Date | DATE-TIME |  |  |  |  | 

## Disposition_LogIn_Date_Time-2_101 

 property | value 
--- | --- 
 id | Disposition_LogIn_Date_Time-2_101
 label | Disposition Log-In Date/Time

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| log_in_date_time | Log In Date/Time | DATE-TIME |  |  |  | REQUIRED, INDEXED | 
| _1010t_registration | 10-10T Registration | BOOLEAN |  |  | {false:0,true:1} |  | 
| status | Status | ENUMERATION |  |  | <dl><dt>2</dt><dd>APPLICATION WITHOUT EXAM</dd><dt>0</dt><dd>10/10 VISIT</dd><dt>1</dt><dd>UNSCHEDULED</dd></dl> |  | 
| type_of_benefit_applied_for | Type Of Benefit Applied For | ENUMERATION |  |  | <dl><dt>3</dt><dd>OUTPATIENT MEDICAL</dd><dt>2</dt><dd>DOMICILIARY</dd><dt>1</dt><dd>HOSPITAL</dd><dt>4</dt><dd>OUTPATIENT DENTAL</dd><dt>5</dt><dd>NURSING HOME CARE</dd></dl> |  | 
| type_of_care_applied_for | Type Of Care Applied For | ENUMERATION |  |  | <dl><dt>3</dt><dd>STERILIZATION</dd><dt>4</dt><dd>PREGNANCY</dd><dt>1</dt><dd>DENTAL</dd><dt>2</dt><dd>PLASTIC SURGERY</dd><dt>5</dt><dd>ALL OTHER</dd></dl> |  | 
| facility_applying_to | Facility Applying To | POINTER |  |  | {id:Medical_Center_Division-40_8} |  | 
| who_entered_10_10 | Who Entered 10/10 | POINTER |  |  | {id:New_Person-200} |  | 
| log_out_date_time | Log Out Date Time | DATE-TIME |  |  |  |  | 
| disposition | Disposition | POINTER |  |  | {id:Disposition-37} |  | 
| reason_for_late_disposition | Reason For Late Disposition | POINTER |  |  | {id:Disposition_Late_Reason-30} |  | 
| who_dispositioned | Who Dispositioned | POINTER |  |  | {id:New_Person-200} |  | 
| description_of_incident | Description Of Incident | STRING |  |  |  |  | 
| eligible_for_medicaid | *Eligible For Medicaid | BOOLEAN |  |  | {false:0,true:1} |  | 
| registration_eligibility_code | Registration Eligibility Code | POINTER |  |  | {id:Eligibility_Code-8} |  | 
| elig_verified_at_registration | Elig Verified At Registration | BOOLEAN |  |  | {false:0,true:1} |  | 
| sc_at_registration | Sc At Registration | BOOLEAN |  |  | {false:0,true:1} |  | 
| sc_at_registration-2_101-16 | Sc% At Registration | NUMERIC |  |  |  |  | 
| amis_420_segment | Amis 420 Segment | POINTER |  |  | {id:Amis_Segment-391_1} |  | 
| outpatient_encounter | Outpatient Encounter | POINTER |  |  | {id:Outpatient_Encounter-409_68} |  | 
| encounter_conversion_status | Encounter Conversion Status | ENUMERATION |  |  | <dl><dt>0</dt><dd>NOT CONVERTED</dd><dt>1</dt><dd>CONVERTED</dd></dl> |  | 
| need_related_to_occupation | Need Related To Occupation | ENUMERATION |  |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| workmens_comp_claim_filed | Workmen'S Comp Claim Filed | BOOLEAN |  |  | {false:N,true:Y} |  | 
| workmens_comp_claim_number | Workmen'S Comp Claim Number | STRING |  |  |  |  | 
| need_related_to_an_accident | Need Related To An Accident | ENUMERATION |  |  | <dl><dt>U</dt><dd>UNKNOWN</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl> |  | 
| injury_caused_by | Injury Caused By | STRING |  |  |  |  | 
| injuring_parties_insurance | Injuring Parties Insurance | POINTER |  |  | {id:Insurance_Company-36} |  | 
| filed_against_injuring_party | Filed Against Injuring Party | BOOLEAN |  |  | {false:N,true:Y} |  | 
| attorneys_name | Attorney'S Name | STRING |  |  |  |  | 
| aaddress_1 | A-Address 1 | STRING |  |  |  |  | 
| aaddress_2 | A-Address 2 | STRING |  |  |  |  | 
| aaddress_3 | A-Address 3 | STRING |  |  |  |  | 
| acity | A-City | STRING |  |  |  |  | 
| astate | A-State | POINTER |  |  | {id:State-5} |  | 
| azip_code | A-Zip Code | STRING |  |  |  |  | 
| aphone | A-Phone | STRING |  |  |  |  | 
| azip4 | A-Zip+4 | STRING |  |  |  |  | 
| active | Active | ENUMERATION |  |  | <dl><dt>1</dt><dd>ACTIVE</dd></dl> | INDEXED | 
| attorneys_name_components | Attorney'S Name Components | POINTER |  |  | {id:Name_Components-20} |  | 
| ods_at_registration | Ods At Registration? | BOOLEAN |  |  | {false:0,true:1} |  | 
| ods_registration_entry-2_101 | Ods Registration Entry |  |  |  |  |  | 

## Appointment-2_98 

 property | value 
--- | --- 
 id | Appointment-2_98
 label | Appointment

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| appointment_date_time | Appointment Date/Time | IEN |  |  |  |  | 
| clinic | Clinic | POINTER |  |  | {id:Hospital_Location-44} | REQUIRED | 
| status | Status | ENUMERATION |  |  | <dl><dt>I</dt><dd>INPATIENT APPOINTMENT</dd><dt>NT</dt><dd>NO ACTION TAKEN</dd><dt>N</dt><dd>NO-SHOW</dd><dt>PCA</dt><dd>CANCELLED BY PATIENT & AUTO-REBOOK</dd><dt>NA</dt><dd>NO-SHOW & AUTO RE-BOOK</dd><dt>C</dt><dd>CANCELLED BY CLINIC</dd><dt>CA</dt><dd>CANCELLED BY CLINIC & AUTO RE-BOOK</dd><dt>PC</dt><dd>CANCELLED BY PATIENT</dd></dl> |  | 
| lab_date_time | Lab Date/Time | DATE-TIME |  |  |  |  | 
| xray_date_time | X-Ray Date/Time | DATE-TIME |  |  |  |  | 
| ekg_date_time | Ekg Date/Time | DATE-TIME |  |  |  |  | 
| routing_slip_printed | Routing Slip Printed | BOOLEAN |  |  | {true:Y} |  | 
| routing_slip_print_date | Routing Slip Print Date | DATE-TIME |  |  |  |  | 
| purpose_of_visit | Purpose Of Visit | ENUMERATION |  |  | <dl><dt>2</dt><dd>10-10</dd><dt>4</dt><dd>UNSCHED. VISIT</dd><dt>1</dt><dd>C&P</dd><dt>3</dt><dd>SCHEDULED VISIT</dd></dl> |  | 
| appointment_type | Appointment Type | POINTER |  |  | {id:Appointment_Type-409_1} |  | 
| special_survey_disposition | Special Survey Disposition | NUMERIC |  |  |  |  | 
| number_of_collateral_seen | Number Of Collateral Seen | NUMERIC |  |  |  |  | 
| autorebooked_appt_date_time | Auto-Rebooked Appt. Date/Time | DATE-TIME |  |  |  |  | 
| collateral_visit | Collateral Visit | BOOLEAN |  |  | {true:1} |  | 
| noshow_cancelled_by | No-Show/Cancelled By | POINTER |  |  | {id:New_Person-200} |  | 
| noshow_cancel_date_time | No-Show/Cancel Date/Time | DATE-TIME |  |  |  |  | 
| cancellation_reason | Cancellation Reason | POINTER |  |  | {id:Cancellation_Reasons-409_2} |  | 
| cancellation_remarks | Cancellation Remarks | STRING |  |  |  |  | 
| appt_cancelled | Appt. Cancelled | POINTER |  |  | {id:Hospital_Location-44} |  | 
| data_entry_clerk | Data Entry Clerk | POINTER |  |  | {id:New_Person-200} |  | 
| date_appt_made | Date Appt. Made | DATE-TIME |  |  |  |  | 
| outpatient_encounter | Outpatient Encounter | POINTER |  |  | {id:Outpatient_Encounter-409_68} |  | 
| encounter_forms_printed | Encounter Forms Printed | BOOLEAN |  |  | {false:0,true:1} |  | 
| encounter_forms_as_addons | Encounter Forms As Add-Ons | BOOLEAN |  |  | {false:0,true:1} |  | 
| encounter_conversion_status | Encounter Conversion Status | ENUMERATION |  |  | <dl><dt>0</dt><dd>NOT CONVERTED</dd><dt>1</dt><dd>CONVERTED</dd></dl> |  | 
| appointment_type_subcategory | Appointment Type Sub-Category | POINTER |  |  | {id:Sharing_Agreement_SubCategory-35_2} |  | 
| scheduling_request_type | Scheduling Request Type | ENUMERATION |  |  | <dl><dt>A</dt><dd>AUTO REBOOK</dd><dt>M</dt><dd>MULTIPLE APPT. BOOKING</dd><dt>C</dt><dd>OTHER THAN 'NEXT AVA.' (CLINICIAN REQ.)</dd><dt>N</dt><dd>'NEXT AVAILABLE' APPT.</dd><dt>P</dt><dd>OTHER THAN 'NEXT AVA.' (PATIENT REQ.)</dd><dt>W</dt><dd>WALKIN APPT.</dd><dt>O</dt><dd>OTHER THAN 'NEXT AVA.' APPT.</dd></dl> |  | 
| next_ava_appt_indicator | Next Ava. Appt. Indicator | ENUMERATION |  |  | <dl><dt>1</dt><dd>'NEXT AVA.' APPT. INDICATED BY USER</dd><dt>2</dt><dd>'NEXT AVA.' APPT. INDICATED BY CALCULATION</dd><dt>0</dt><dd>NOT INDICATED TO BE A 'NEXT AVA.' APPT.</dd><dt>3</dt><dd>'NEXT AVA.' APPT. INDICATED BY USER & CALCULATION</dd></dl> |  | 
| desired_date_of_appointment | Desired Date Of Appointment | DATE-TIME |  |  |  |  | 
| followup_visit | Follow-Up Visit | BOOLEAN |  |  | {false:0,true:1} |  | 

## Archived_Data-2_12 

 property | value 
--- | --- 
 id | Archived_Data-2_12
 label | Archived Data

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| data_type | Data Type | ENUMERATION |  |  | <dl><dt>SSD</dt><dd>SPECIAL SURVEY DISP</dd><dt>S</dt><dd>APPOINTMENT</dd><dt>DE</dt><dd>CLINIC ENROLLMENT</dd></dl> | REQUIRED, INDEXED | 
| date_of_archive | Date Of Archive | [OBJECT] |  |  | {properties:[{description:Enter the date/time the archiving utility was run.\r \rThis field is not currently used.  The archiving software was not\rdistributed.,datatype:DATE-TIME,required:true,label:Date Of Archive,fmId:.01,id:date_of_archive},{description:Enter the sequential number of the tape on which this archiving data\rwas put.,datatype:STRING,label:Tape #,fmId:1,id:tape_number},{description:Enter the date the user chose to begin the scheduling archive.,datatype:DATE-TIME,label:Begin Archive Date,fmId:2,id:begin_archive_date},{description:Enter the ending date the user chose for the scheduling archive.,datatype:DATE-TIME,label:End Archive Date,fmId:3,id:end_archive_date},{description:The number of records archived.  This is created automatically by the\rsoftware.\r \rThis software has not been released and this field is not presently\rused in DHCP.,datatype:NUMERIC,label:Number Of Records Archived,fmId:4,id:number_of_records_archived}],fmId:2.13,id:Date_Of_Archive-2_13,label:Date Of Archive} |  | 