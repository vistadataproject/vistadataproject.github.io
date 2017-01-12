---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Adverse_Reaction_Reporting-120_85 

 property | value 
--- | --- 
 id | Adverse_Reaction_Reporting-120_85
 fmId | 120.85
 label | Adverse Reaction Reporting
 location | ^GMR(120.85,
 description | {::nomarkdown}This file contains all the data for an Observed Drug reaction.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_of_event | .01 | Date/time Of Event | {::nomarkdown}The date/time that this observed reaction occurred.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | {::nomarkdown}This field is the patient to whom this observed reaction occurred.<br/>This field is a pointer to the Patient file.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| related_reaction | .03 | Related Reaction | {::nomarkdown}This is the related reaction in the Patient Allergies (120.8) file for<br/>this event.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient_Allergies-120_8](Patient_Allergies-120_8.md) | 
| observer | .5 | Observer | {::nomarkdown}This field is the person who witnessed this reaction.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_reported | 1.1 | Date Reported | {::nomarkdown}This field is to track when a report is entered into this file.{:/} | DATE-TIME |  | INDEXED |  | 
| reporting_user | 1.2 | Reporting User | {::nomarkdown}This field is used to track the user who entered the reaction.  It is a<br/>pointer to File 200.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| reactions | 2 | Reactions | {::nomarkdown}A list of signs/symptoms observed for this reaction.{:/} | [OBJECT] |  |  | [Reactions-120_8502](#Reactions-120_8502)  | 
| suspected_agent | 3 | Suspected Agent | {::nomarkdown}A list of suspected agents for this observed reaction.{:/} | [OBJECT] |  |  | [Suspected_Agent-120_8503](#Suspected_Agent-120_8503)  | 
| relevant_test_lab_data | 4 | Relevant Test/lab Data | {::nomarkdown}A list of all the relevant test/lab data for this observed reaction.{:/} | [OBJECT] |  |  | [Relevant_Test_lab_Data-120_8504](#Relevant_Test_lab_Data-120_8504)  | 
| question_number1 | 5 | Question #1 | {::nomarkdown}This field indicates whether or not a patient has died from this reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number2 | 6 | Question #2 | {::nomarkdown}This field indicates whether or not a patient was treated with a RX drug<br/>for this reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number3 | 7 | Question #3 | {::nomarkdown}This field indicates whether or not the reaction caused a life threatening<br/>illness.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number4 | 8 | Question #4 | {::nomarkdown}This field indicates whether or not the patient had to visit a doctor or<br/>an ER because of this reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number5 | 9 | Question #5 | {::nomarkdown}This field indicates whether this reaction required hospitalization.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| no_day_hospitalized | 9.1 | No. Day Hospitalized | {::nomarkdown}This field shows the number of days the patient was hospitalized because<br/>of the reaction.{:/} | NUMERIC |  |  |  | 
| question_number6 | 10 | Question #6 | {::nomarkdown}This field indicates if the patient had a prolonged hospitalization<br/>because of the reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number7 | 11 | Question #7 | {::nomarkdown}This field indicates whether or not the patient had some sort of<br/>permanent disability as a result of this reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number8 | 12 | Question #8 | {::nomarkdown}This field indicates whether the patient recovered from any illness that<br/>may have resulted from the reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number9 | 12.1 | Question #9 | {::nomarkdown}This field is to find out if the observed reaction was a Congenital Anomaly.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| question_number10 | 12.2 | Question #10 | {::nomarkdown}This field is to find out if this event required any intervention.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| concomitant_drugs | 13 | Concomitant Drugs | {::nomarkdown}A list of all drugs that may have been taken at the time of the reaction.{:/} | [OBJECT] |  |  | [Concomitant_Drugs-120_8513](#Concomitant_Drugs-120_8513)  | 
| other_related_history | 14 | Other Related History | {::nomarkdown}This field contains any other related event history for this reaction.{:/} | STRING |  |  |  | 
| severity | 14.5 | Severity | {::nomarkdown}This field indicates the severity of this reaction.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>MILD</dd><dt>2</dt><dd>MODERATE</dd><dt>3</dt><dd>SEVERE</dd></dl>{:/} | 
| date_md_notified | 22 | Date Md Notified | {::nomarkdown}This field contains the date the doctor was notified of this reaction.{:/} | DATE-TIME |  |  |  | 
| fda_question_number1 | 23 | Fda Question #1 | {::nomarkdown}This field determines if the reaction is considered serious.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| fda_question_number2 | 24 | Fda Question #2 | {::nomarkdown}This question determines whether this reaction is related to a new drug.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| fda_question_number3 | 25 | Fda Question #3 | {::nomarkdown}This question determines whether this reaction was an unexpected reaction<br/>for this drug.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| fda_question_number4 | 26 | Fda Question #4 | {::nomarkdown}This question determines whether this reaction is related to a<br/>therapeutic failure of the drug.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| fda_question_number5 | 26.1 | Fda Question #5 | {::nomarkdown}This field is to track if the reaction was a dose related reaction.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| date_reported_to_fda | 27 | Date Reported To Fda | {::nomarkdown}This field contains the date on which the FDA was sent the ADR report.{:/} | DATE-TIME |  |  |  | 
| date_of_patient_consent_to_mfr | 28 | Date Of Patient Consent To Mfr | {::nomarkdown}This field is the date the patient had given his consent to have the<br/>reaction reported to the manufacturer.{:/} | DATE-TIME |  |  |  | 
| date_sent_to_mfr | 29 | Date Sent To Mfr | {::nomarkdown} This is the date when the report was sent to the manufacturer.{:/} | DATE-TIME |  |  |  | 
| date_sent_to_rcpm | 30 | *date Sent To Rcpm | {::nomarkdown}This is the date when the report was sent to the regional offices.{:/} | DATE-TIME |  |  |  | 
| date_sent_to_vaers | 31 | Date Sent To Vaers | {::nomarkdown}This field is the date when the report was sent to the VAERS.{:/} | DATE-TIME |  |  |  | 
| pt_action_fda_report | 31.1 | P&t Action Fda Report | {::nomarkdown}This field indicates if the P&T committee determined whether to send<br/>the report to FDA.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| pt_action_mfr_report | 31.2 | P&t Action Mfr Report | {::nomarkdown}This field tells if the P&T committee determined whether to send the report to<br/>the manufacturer.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| pt_action_rcpm_report | 31.3 | *p&t Action Rcpm Report | {::nomarkdown}This field determines whether or not the P&T committee will send the<br/>report to the regional offices.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| pt_addendum | 31.5 | P&t Addendum | {::nomarkdown}List of comments made by the P&T committee.{:/} | [OBJECT] |  |  | [Pt_Addendum-120_85315](#Pt_Addendum-120_85315)  | 
| reporter_name | 43 | Reporter Name | {::nomarkdown}This field contains the name of the person filling out the reports.{:/} | STRING |  |  |  | 
| reporter_address1 | 44 | Reporter Address1 | {::nomarkdown}Line one of the address of the person filling out the report.{:/} | STRING |  |  |  | 
| reporter_address2 | 45 | Reporter Address2 | {::nomarkdown}Line two of the address of the person filling out the report.{:/} | STRING |  |  |  | 
| reporter_address3 | 46 | Reporter Address3 | {::nomarkdown}Line three of the address of the person filling out the report.{:/} | STRING |  |  |  | 
| reporter_city | 47 | Reporter City | {::nomarkdown}The city where the person lives who is filling out the report.{:/} | STRING |  |  |  | 
| reporter_state | 48 | Reporter State | {::nomarkdown}The state where the reporter resides.{:/} | POINTER |  |  | {id:State-5} | 
| reporter_zip | 49 | Reporter ZIP | {::nomarkdown}This is the zip code of the person filling out the report.{:/} | STRING |  |  |  | 
| reporter_phone | 50 | Reporter Phone | {::nomarkdown}This is the phone number of the person who is filling out the report.{:/} | STRING |  |  |  | 
| rpt_question_number1 | 51 | Rpt Question #1 | {::nomarkdown}This field determines if the reporter is a health care provider.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| rpt_question_number2 | 52 | Rpt Question #2 | {::nomarkdown}This field determines if the reporter wants to permit the FDA to inform the manufacturer of his identity.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| occupation | 52.1 | Occupation | {::nomarkdown}This field contains the reporter's current occupation.{:/} | STRING |  |  |  | 
| manufacturer_name | 53 | Manufacturer Name | {::nomarkdown}This field is the name of the manufacturer of the reactant.{:/} | STRING |  |  |  | 
| mfr_address_number1 | 54 | Mfr Address #1 | {::nomarkdown}This is address line one for the manufacturer.{:/} | STRING |  |  |  | 
| mfr_address_number2 | 55 | Mfr Address #2 | {::nomarkdown}This is address line two for the manufacturer.{:/} | STRING |  |  |  | 
| mfr_address_number3 | 56 | Mfr Address #3 | {::nomarkdown}This is address line three for the manufacturer.{:/} | STRING |  |  |  | 
| mfr_city | 57 | Mfr City | {::nomarkdown}This is the city of the manufacturer.{:/} | STRING |  |  |  | 
| mfr_state | 58 | Mfr State | {::nomarkdown}This is the state where the manufacturer is located.{:/} | POINTER |  |  | {id:State-5} | 
| mfr_zip | 59 | Mfr ZIP | {::nomarkdown}This is the Zip Code of the manufacturer.{:/} | STRING |  |  |  | 
| ind_nda_number_for_support_drug | 60 | Ind/nda # For Support Drug | {::nomarkdown}This is the IND/NDA # for support drug for the manufacturer.{:/} | STRING |  |  |  | 
| mfr_control_number | 61 | Mfr Control # | {::nomarkdown}This is the control number used by the manufacturer.{:/} | STRING |  |  |  | 
| date_received_by_mfr | 62 | Date Received By Mfr | {::nomarkdown}This is the date the report was received by the manufacturer.{:/} | DATE-TIME |  |  |  | 
| report_source | 63 | Report Source | {::nomarkdown}This is the source of the report.{:/} | [ENUMERATION] |  |  | {::nomarkdown}<dl><dt>c</dt><dd>CONSUMER</dd><dt>s</dt><dd>STUDY</dd><dt>l</dt><dd>LITERATURE</dd><dt>h</dt><dd>HEALTH PROFESSIONAL</dd><dt>f</dt><dd>FOREIGN</dd></dl>{:/} | 
| _15_day_report | 64 | 15 Day Report | {::nomarkdown}This field is to determine if the 15 Day Report has been completed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| report_type | 65 | Report Type | {::nomarkdown}This is the type of report issued.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>f</dt><dd>FOLLOWUP</dd><dt>i</dt><dd>INITIAL</dd></dl>{:/} | 

## <a name="Reactions-120_8502"></a>Reactions-120_8502 

 property | value 
--- | --- 
 id | Reactions-120_8502
 label | Reactions

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reactions | .01 | Reactions | {::nomarkdown}One sign/symptom observed for this reaction.{:/} | POINTER |  | REQUIRED, INDEXED | {id:Sign_symptoms-120_83} | 
| other_reaction | 1 | Other Reaction | {::nomarkdown}If this sign/symptom cannot be found in the Sign/Symptoms (120.83) file,<br/>then the free text of what the user typed in will be here, and the<br/>signs/symptoms of OTHER REACTION will be the value of the REACTIONS field.{:/} | STRING |  |  |  | 
| entered_by | 2 | Entered By | {::nomarkdown}The person who entered this reaction into the system.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Suspected_Agent-120_8503"></a>Suspected_Agent-120_8503 

 property | value 
--- | --- 
 id | Suspected_Agent-120_8503
 label | Suspected Agent

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| suspected_agent | .01 | Suspected Agent | {::nomarkdown}This field indicates one of the suspected agents for this observed reaction.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| daily_dose | 1 | Daily Dose | {::nomarkdown}This field contains the daily dosage for this suspected agent.{:/} | STRING |  |  |  | 
| sig | 1.5 | Sig | {::nomarkdown}This file contains the SIG code that indicates how this drug is to be given.{:/} | STRING |  |  |  | 
| route_of_administration | 2 | Route Of Administration | {::nomarkdown}This is the route of administration for this suspected agent.{:/} | STRING |  |  |  | 
| indications_for_use | 3 | Indications For Use | {::nomarkdown}This field indicates the reasoning for a particular agent.{:/} | STRING |  |  |  | 
| start_date_of_administration | 4 | Start Date Of Administration | {::nomarkdown}This field contains the date a patient was first given the suspected agent.{:/} | DATE-TIME |  |  |  | 
| stop_date_of_administration | 5 | Stop Date Of Administration | {::nomarkdown}This field contains the stop date for a suspected agent.{:/} | DATE-TIME |  |  |  | 
| manufacturer | 7 | Manufacturer | {::nomarkdown}This field contains the name of the manufacturer of the suspected agent.{:/} | STRING |  |  |  | 
| lot_number | 8 | Lot # | {::nomarkdown}This field contains the lot # for a suspected agent.{:/} | STRING |  |  |  | 
| number_of_previous_doses | 9 | Number Of Previous Doses | {::nomarkdown}This field contains the total number of doses of this suspected agent that<br/>were given to the patient prior to the reaction.{:/} | NUMERIC |  |  |  | 
| last_fill_dt | 10 | Last Fill Dt | {::nomarkdown}This field is the date that this agent was last filled.{:/} | DATE-TIME |  |  |  | 
| expiration_date | 10.1 | Expiration Date | {::nomarkdown}This is the date that the suspected agent is to expire.{:/} | DATE-TIME |  |  |  | 
| ndc_number | 10.2 | Ndc # | {::nomarkdown}This is the NDC (National Drug Code) of this agent.{:/} | STRING |  |  |  | 
| like_question_number1 | 11 | Like Question #1 | {::nomarkdown}This question determines whether this reaction normally occurs with this reactant.<br/>reactant.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| like_question_number2 | 12 | Like Question #2 | {::nomarkdown}This question determines whether administration of the reactant was stopped.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| like_question_number3 | 13 | Like Question #3 | {::nomarkdown}This question determines if the reaction stopped when the administration of the reactant was terminated.<br/>the reactant was terminated.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| like_question_number4 | 14 | Like Question #4 | {::nomarkdown}This question determines whether the reactant was readministered.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| like_question_number5 | 15 | Like Question #5 | {::nomarkdown}This question determines whether the reaction could be due to the patient current clinical condition.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| like_question_number6 | 16 | Like Question #6 | {::nomarkdown}This question determines if the reaction reappeared after the reactant was readministered.<br/>was readministered.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| likelihood | 17 | Likelihood | {::nomarkdown}If this is an observed drug allergy/adverse reaction, then this is the<br/>likelihood that this is an adverse reaction.  The data for this field is<br/>based on an algorithm used by the FDA.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>REMOTE</dd><dt>2</dt><dd>POSSIBLE</dd><dt>4</dt><dd>HIGHLY PROBABLE</dd><dt>3</dt><dd>PROBABLE</dd></dl>{:/} | 

## <a name="Relevant_Test_lab_Data-120_8504"></a>Relevant_Test_lab_Data-120_8504 

 property | value 
--- | --- 
 id | Relevant_Test_lab_Data-120_8504
 label | Relevant Test/lab Data

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| test | .01 | Test | {::nomarkdown}This field contains a particular test/lab data for this observed reaction.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| results | 1 | Results | {::nomarkdown}This field will contain the results for the particular test.{:/} | STRING |  |  |  | 
| collection_d_t | 2 | Collection D/t | {::nomarkdown}This field is the date the sample was collected from the patient.{:/} | DATE-TIME |  |  |  | 

## <a name="Concomitant_Drugs-120_8513"></a>Concomitant_Drugs-120_8513 

 property | value 
--- | --- 
 id | Concomitant_Drugs-120_8513
 label | Concomitant Drugs

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| concomitant_drugs | .01 | Concomitant Drugs | {::nomarkdown}This field contains the drug(s) this patient was taking at the time<br/>of the reaction.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| start_date_of_administration | 1 | Start Date Of Administration | {::nomarkdown}This field is the date this drug was first given to the patient.{:/} | DATE-TIME |  |  |  | 
| stop_date_of_administration | 2 | Stop Date Of Administration | {::nomarkdown}This field is the last day the patient was given this drug.{:/} | DATE-TIME |  |  |  | 
| last_fill_dt | 3 | Last Fill Dt | {::nomarkdown}This field is the last date that this drug was filled.{:/} | DATE-TIME |  |  |  | 
| sig | 4 | Sig | {::nomarkdown}This file contains the SIG code that indicates how this drug is to be given.{:/} | STRING |  |  |  | 

## <a name="Pt_Addendum-120_85315"></a>Pt_Addendum-120_85315 

 property | value 
--- | --- 
 id | Pt_Addendum-120_85315
 label | P&t Addendum

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_entered | .01 | Date/time Entered | {::nomarkdown}This is the date/time the comment was entered.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| addendum | 1 | Addendum | {::nomarkdown}This is the actual comment that is being added.{:/} | STRING |  |  |  | 




 Generated on January 12th 2017, 6:30:19 am