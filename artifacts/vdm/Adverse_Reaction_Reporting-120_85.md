
## [VDM](TableOfContent.md) --> Adverse_Reaction_Reporting-120_85 

 property | value 
--- | --- 
 id | Adverse_Reaction_Reporting-120_85
 fmId | 120.85
 label | Adverse Reaction Reporting
 location | ^GMR(120.85,
 description | This file contains all the data for an Observed Drug reaction.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_of_event | .01 | Date/time Of Event | The date/time that this observed reaction occurred. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | This field is the patient to whom this observed reaction occurred.\rThis field is a pointer to the Patient file. | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| related_reaction | .03 | Related Reaction | This is the related reaction in the Patient Allergies (120.8) file for\rthis event. | POINTER |  | REQUIRED, INDEXED | [Patient_Allergies-120_8](Patient_Allergies-120_8.md) | 
| observer | .5 | Observer | This field is the person who witnessed this reaction. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_reported | 1.1 | Date Reported | This field is to track when a report is entered into this file. | DATE-TIME |  | INDEXED |  | 
| reporting_user | 1.2 | Reporting User | This field is used to track the user who entered the reaction.  It is a\rpointer to File 200. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| reactions | 2 | Reactions | A list of signs/symptoms observed for this reaction. | [OBJECT] |  |  | [Reactions-120_8502](#reactions-120_8502)  | 
| suspected_agent | 3 | Suspected Agent | A list of suspected agents for this observed reaction. | [OBJECT] |  |  | [Suspected_Agent-120_8503](#suspected_agent-120_8503)  | 
| relevant_test_lab_data | 4 | Relevant Test/lab Data | A list of all the relevant test/lab data for this observed reaction. | [OBJECT] |  |  | [Relevant_Test_lab_Data-120_8504](#relevant_test_lab_data-120_8504)  | 
| question_number1 | 5 | Question #1 | This field indicates whether or not a patient has died from this reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number2 | 6 | Question #2 | This field indicates whether or not a patient was treated with a RX drug\rfor this reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number3 | 7 | Question #3 | This field indicates whether or not the reaction caused a life threatening\rillness. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number4 | 8 | Question #4 | This field indicates whether or not the patient had to visit a doctor or\ran ER because of this reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number5 | 9 | Question #5 | This field indicates whether this reaction required hospitalization. | BOOLEAN |  |  | {false:n,true:y} | 
| no_day_hospitalized | 9.1 | No. Day Hospitalized | This field shows the number of days the patient was hospitalized because\rof the reaction. | NUMERIC |  |  |  | 
| question_number6 | 10 | Question #6 | This field indicates if the patient had a prolonged hospitalization\rbecause of the reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number7 | 11 | Question #7 | This field indicates whether or not the patient had some sort of\rpermanent disability as a result of this reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number8 | 12 | Question #8 | This field indicates whether the patient recovered from any illness that\rmay have resulted from the reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number9 | 12.1 | Question #9 | This field is to find out if the observed reaction was a Congenital Anomaly. | BOOLEAN |  |  | {false:n,true:y} | 
| question_number10 | 12.2 | Question #10 | This field is to find out if this event required any intervention. | BOOLEAN |  |  | {false:n,true:y} | 
| concomitant_drugs | 13 | Concomitant Drugs | A list of all drugs that may have been taken at the time of the reaction. | [OBJECT] |  |  | [Concomitant_Drugs-120_8513](#concomitant_drugs-120_8513)  | 
| other_related_history | 14 | Other Related History | This field contains any other related event history for this reaction. | STRING |  |  |  | 
| severity | 14.5 | Severity | This field indicates the severity of this reaction. | ENUMERATION |  |  | <dl><dt>1</dt><dd>MILD</dd><dt>2</dt><dd>MODERATE</dd><dt>3</dt><dd>SEVERE</dd></dl> | 
| date_md_notified | 22 | Date Md Notified | This field contains the date the doctor was notified of this reaction. | DATE-TIME |  |  |  | 
| fda_question_number1 | 23 | Fda Question #1 | This field determines if the reaction is considered serious. | BOOLEAN |  |  | {false:n,true:y} | 
| fda_question_number2 | 24 | Fda Question #2 | This question determines whether this reaction is related to a new drug. | BOOLEAN |  |  | {false:n,true:y} | 
| fda_question_number3 | 25 | Fda Question #3 | This question determines whether this reaction was an unexpected reaction\rfor this drug. | BOOLEAN |  |  | {false:n,true:y} | 
| fda_question_number4 | 26 | Fda Question #4 | This question determines whether this reaction is related to a\rtherapeutic failure of the drug. | BOOLEAN |  |  | {false:n,true:y} | 
| fda_question_number5 | 26.1 | Fda Question #5 | This field is to track if the reaction was a dose related reaction. | BOOLEAN |  |  | {false:n,true:y} | 
| date_reported_to_fda | 27 | Date Reported To Fda | This field contains the date on which the FDA was sent the ADR report. | DATE-TIME |  |  |  | 
| date_of_patient_consent_to_mfr | 28 | Date Of Patient Consent To Mfr | This field is the date the patient had given his consent to have the\rreaction reported to the manufacturer. | DATE-TIME |  |  |  | 
| date_sent_to_mfr | 29 | Date Sent To Mfr |  This is the date when the report was sent to the manufacturer. | DATE-TIME |  |  |  | 
| date_sent_to_rcpm | 30 | *date Sent To Rcpm | This is the date when the report was sent to the regional offices. | DATE-TIME |  |  |  | 
| date_sent_to_vaers | 31 | Date Sent To Vaers | This field is the date when the report was sent to the VAERS. | DATE-TIME |  |  |  | 
| pt_action_fda_report | 31.1 | P&t Action Fda Report | This field indicates if the P&T committee determined whether to send\rthe report to FDA. | BOOLEAN |  |  | {false:n,true:y} | 
| pt_action_mfr_report | 31.2 | P&t Action Mfr Report | This field tells if the P&T committee determined whether to send the report to\rthe manufacturer. | BOOLEAN |  |  | {false:n,true:y} | 
| pt_action_rcpm_report | 31.3 | *p&t Action Rcpm Report | This field determines whether or not the P&T committee will send the\rreport to the regional offices. | BOOLEAN |  |  |  | 
| pt_addendum | 31.5 | P&t Addendum | List of comments made by the P&T committee. | [OBJECT] |  |  | [Pt_Addendum-120_85315](#pt_addendum-120_85315)  | 
| reporter_name | 43 | Reporter Name | This field contains the name of the person filling out the reports. | STRING |  |  |  | 
| reporter_address1 | 44 | Reporter Address1 | Line one of the address of the person filling out the report. | STRING |  |  |  | 
| reporter_address2 | 45 | Reporter Address2 | Line two of the address of the person filling out the report. | STRING |  |  |  | 
| reporter_address3 | 46 | Reporter Address3 | Line three of the address of the person filling out the report. | STRING |  |  |  | 
| reporter_city | 47 | Reporter City | The city where the person lives who is filling out the report. | STRING |  |  |  | 
| reporter_state | 48 | Reporter State | The state where the reporter resides. | POINTER |  |  | {id:State-5} | 
| reporter_zip | 49 | Reporter ZIP | This is the zip code of the person filling out the report. | STRING |  |  |  | 
| reporter_phone | 50 | Reporter Phone | This is the phone number of the person who is filling out the report. | STRING |  |  |  | 
| rpt_question_number1 | 51 | Rpt Question #1 | This field determines if the reporter is a health care provider. | BOOLEAN |  |  | {false:n,true:y} | 
| rpt_question_number2 | 52 | Rpt Question #2 | This field determines if the reporter wants to permit the FDA to inform the manufacturer of his identity. | BOOLEAN |  |  | {false:n,true:y} | 
| occupation | 52.1 | Occupation | This field contains the reporter's current occupation. | STRING |  |  |  | 
| manufacturer_name | 53 | Manufacturer Name | This field is the name of the manufacturer of the reactant. | STRING |  |  |  | 
| mfr_address_number1 | 54 | Mfr Address #1 | This is address line one for the manufacturer. | STRING |  |  |  | 
| mfr_address_number2 | 55 | Mfr Address #2 | This is address line two for the manufacturer. | STRING |  |  |  | 
| mfr_address_number3 | 56 | Mfr Address #3 | This is address line three for the manufacturer. | STRING |  |  |  | 
| mfr_city | 57 | Mfr City | This is the city of the manufacturer. | STRING |  |  |  | 
| mfr_state | 58 | Mfr State | This is the state where the manufacturer is located. | POINTER |  |  | {id:State-5} | 
| mfr_zip | 59 | Mfr ZIP | This is the Zip Code of the manufacturer. | STRING |  |  |  | 
| ind_nda_number_for_support_drug | 60 | Ind/nda # For Support Drug | This is the IND/NDA # for support drug for the manufacturer. | STRING |  |  |  | 
| mfr_control_number | 61 | Mfr Control # | This is the control number used by the manufacturer. | STRING |  |  |  | 
| date_received_by_mfr | 62 | Date Received By Mfr | This is the date the report was received by the manufacturer. | DATE-TIME |  |  |  | 
| report_source | 63 | Report Source | This is the source of the report. | [ENUMERATION] |  |  | <dl><dt>c</dt><dd>CONSUMER</dd><dt>s</dt><dd>STUDY</dd><dt>l</dt><dd>LITERATURE</dd><dt>h</dt><dd>HEALTH PROFESSIONAL</dd><dt>f</dt><dd>FOREIGN</dd></dl> | 
| _15_day_report | 64 | 15 Day Report | This field is to determine if the 15 Day Report has been completed. | BOOLEAN |  |  | {false:n,true:y} | 
| report_type | 65 | Report Type | This is the type of report issued. | ENUMERATION |  |  | <dl><dt>f</dt><dd>FOLLOWUP</dd><dt>i</dt><dd>INITIAL</dd></dl> | 

## Reactions-120_8502 

 property | value 
--- | --- 
 id | Reactions-120_8502
 label | Reactions

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reactions | .01 | Reactions | One sign/symptom observed for this reaction. | POINTER |  | REQUIRED, INDEXED | {id:Sign_symptoms-120_83} | 
| other_reaction | 1 | Other Reaction | If this sign/symptom cannot be found in the Sign/Symptoms (120.83) file,\rthen the free text of what the user typed in will be here, and the\rsigns/symptoms of OTHER REACTION will be the value of the REACTIONS field. | STRING |  |  |  | 
| entered_by | 2 | Entered By | The person who entered this reaction into the system. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## Suspected_Agent-120_8503 

 property | value 
--- | --- 
 id | Suspected_Agent-120_8503
 label | Suspected Agent

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| suspected_agent | .01 | Suspected Agent | This field indicates one of the suspected agents for this observed reaction. | STRING |  | REQUIRED, INDEXED |  | 
| daily_dose | 1 | Daily Dose | This field contains the daily dosage for this suspected agent. | STRING |  |  |  | 
| sig | 1.5 | Sig | This file contains the SIG code that indicates how this drug is to be given. | STRING |  |  |  | 
| route_of_administration | 2 | Route Of Administration | This is the route of administration for this suspected agent. | STRING |  |  |  | 
| indications_for_use | 3 | Indications For Use | This field indicates the reasoning for a particular agent. | STRING |  |  |  | 
| start_date_of_administration | 4 | Start Date Of Administration | This field contains the date a patient was first given the suspected agent. | DATE-TIME |  |  |  | 
| stop_date_of_administration | 5 | Stop Date Of Administration | This field contains the stop date for a suspected agent. | DATE-TIME |  |  |  | 
| manufacturer | 7 | Manufacturer | This field contains the name of the manufacturer of the suspected agent. | STRING |  |  |  | 
| lot_number | 8 | Lot # | This field contains the lot # for a suspected agent. | STRING |  |  |  | 
| number_of_previous_doses | 9 | Number Of Previous Doses | This field contains the total number of doses of this suspected agent that\rwere given to the patient prior to the reaction. | NUMERIC |  |  |  | 
| last_fill_dt | 10 | Last Fill Dt | This field is the date that this agent was last filled. | DATE-TIME |  |  |  | 
| expiration_date | 10.1 | Expiration Date | This is the date that the suspected agent is to expire. | DATE-TIME |  |  |  | 
| ndc_number | 10.2 | Ndc # | This is the NDC (National Drug Code) of this agent. | STRING |  |  |  | 
| like_question_number1 | 11 | Like Question #1 | This question determines whether this reaction normally occurs with this reactant.\rreactant. | BOOLEAN |  |  | {false:n,true:y} | 
| like_question_number2 | 12 | Like Question #2 | This question determines whether administration of the reactant was stopped. | BOOLEAN |  |  | {false:n,true:y} | 
| like_question_number3 | 13 | Like Question #3 | This question determines if the reaction stopped when the administration of the reactant was terminated.\rthe reactant was terminated. | BOOLEAN |  |  | {false:n,true:y} | 
| like_question_number4 | 14 | Like Question #4 | This question determines whether the reactant was readministered. | BOOLEAN |  |  | {false:n,true:y} | 
| like_question_number5 | 15 | Like Question #5 | This question determines whether the reaction could be due to the patient current clinical condition. | BOOLEAN |  |  | {false:n,true:y} | 
| like_question_number6 | 16 | Like Question #6 | This question determines if the reaction reappeared after the reactant was readministered.\rwas readministered. | BOOLEAN |  |  | {false:n,true:y} | 
| likelihood | 17 | Likelihood | If this is an observed drug allergy/adverse reaction, then this is the\rlikelihood that this is an adverse reaction.  The data for this field is\rbased on an algorithm used by the FDA. | ENUMERATION |  |  | <dl><dt>1</dt><dd>REMOTE</dd><dt>2</dt><dd>POSSIBLE</dd><dt>4</dt><dd>HIGHLY PROBABLE</dd><dt>3</dt><dd>PROBABLE</dd></dl> | 

## Relevant_Test_lab_Data-120_8504 

 property | value 
--- | --- 
 id | Relevant_Test_lab_Data-120_8504
 label | Relevant Test/lab Data

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| test | .01 | Test | This field contains a particular test/lab data for this observed reaction. | STRING |  | REQUIRED, INDEXED |  | 
| results | 1 | Results | This field will contain the results for the particular test. | STRING |  |  |  | 
| collection_d_t | 2 | Collection D/t | This field is the date the sample was collected from the patient. | DATE-TIME |  |  |  | 

## Concomitant_Drugs-120_8513 

 property | value 
--- | --- 
 id | Concomitant_Drugs-120_8513
 label | Concomitant Drugs

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| concomitant_drugs | .01 | Concomitant Drugs | This field contains the drug(s) this patient was taking at the time\rof the reaction. | STRING |  | REQUIRED, INDEXED |  | 
| start_date_of_administration | 1 | Start Date Of Administration | This field is the date this drug was first given to the patient. | DATE-TIME |  |  |  | 
| stop_date_of_administration | 2 | Stop Date Of Administration | This field is the last day the patient was given this drug. | DATE-TIME |  |  |  | 
| last_fill_dt | 3 | Last Fill Dt | This field is the last date that this drug was filled. | DATE-TIME |  |  |  | 
| sig | 4 | Sig | This file contains the SIG code that indicates how this drug is to be given. | STRING |  |  |  | 

## Pt_Addendum-120_85315 

 property | value 
--- | --- 
 id | Pt_Addendum-120_85315
 label | P&t Addendum

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_entered | .01 | Date/time Entered | This is the date/time the comment was entered. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| addendum | 1 | Addendum | This is the actual comment that is being added. | STRING |  |  |  | 