---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Adverse_Reaction_Reporting-120_85<br/>
<a name="top"></a>
# Adverse Reaction Reporting (120.85)
This file contains all the data for an Observed Drug reaction.

**Global:** ^GMR(120.85,

**Domain:** Allergies

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time Of Event**{::nomarkdown}<pre><code>  date_time_of_event</code></pre>{:/} | .01 | The date/time that this observed reaction occurred. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .02 | This field is the patient to whom this observed reaction occurred.<br/>This field is a pointer to the Patient file. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**Related Reaction**{::nomarkdown}<pre><code>  related_reaction</code></pre>{:/} | .03 | This is the related reaction in the Patient Allergies (120.8) file for<br/>this event. | POINTER | INDEXED<br/>REQUIRED | [Patient_Allergies-120_8](Patient_Allergies-120_8)
**Observer**{::nomarkdown}<pre><code>  observer</code></pre>{:/} | .5 | This field is the person who witnessed this reaction. | POINTER |  | [New_Person-200](New_Person-200)
**Date Reported**{::nomarkdown}<pre><code>  date_reported</code></pre>{:/} | 1.1 | This field is to track when a report is entered into this file. | DATE-TIME | INDEXED | 
**Reporting User**{::nomarkdown}<pre><code>  reporting_user</code></pre>{:/} | 1.2 | This field is used to track the user who entered the reaction.  It is a<br/>pointer to File 200. | POINTER |  | [New_Person-200](New_Person-200)
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | 2 | A list of signs/symptoms observed for this reaction. | OBJECT |  | [Reactions-120_8502](#Reactions-120_8502)
**Suspected Agent**{::nomarkdown}<pre><code>  suspected_agent</code></pre>{:/} | 3 | A list of suspected agents for this observed reaction. | OBJECT |  | [Suspected_Agent-120_8503](#Suspected_Agent-120_8503)
**Relevant Test/lab Data**{::nomarkdown}<pre><code>  relevant_test_lab_data</code></pre>{:/} | 4 | A list of all the relevant test/lab data for this observed reaction. | OBJECT |  | [Relevant_Test_lab_Data-120_8504](#Relevant_Test_lab_Data-120_8504)
**Question #1**{::nomarkdown}<pre><code>  question_number1</code></pre>{:/} | 5 | This field indicates whether or not a patient has died from this reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #2**{::nomarkdown}<pre><code>  question_number2</code></pre>{:/} | 6 | This field indicates whether or not a patient was treated with a RX drug<br/>for this reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #3**{::nomarkdown}<pre><code>  question_number3</code></pre>{:/} | 7 | This field indicates whether or not the reaction caused a life threatening<br/>illness. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #4**{::nomarkdown}<pre><code>  question_number4</code></pre>{:/} | 8 | This field indicates whether or not the patient had to visit a doctor or<br/>an ER because of this reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #5**{::nomarkdown}<pre><code>  question_number5</code></pre>{:/} | 9 | This field indicates whether this reaction required hospitalization. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**No. Day Hospitalized**{::nomarkdown}<pre><code>  no_day_hospitalized</code></pre>{:/} | 9.1 | This field shows the number of days the patient was hospitalized because<br/>of the reaction. | NUMERIC |  | 
**Question #6**{::nomarkdown}<pre><code>  question_number6</code></pre>{:/} | 10 | This field indicates if the patient had a prolonged hospitalization<br/>because of the reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #7**{::nomarkdown}<pre><code>  question_number7</code></pre>{:/} | 11 | This field indicates whether or not the patient had some sort of<br/>permanent disability as a result of this reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #8**{::nomarkdown}<pre><code>  question_number8</code></pre>{:/} | 12 | This field indicates whether the patient recovered from any illness that<br/>may have resulted from the reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #9**{::nomarkdown}<pre><code>  question_number9</code></pre>{:/} | 12.1 | This field is to find out if the observed reaction was a Congenital Anomaly. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Question #10**{::nomarkdown}<pre><code>  question_number10</code></pre>{:/} | 12.2 | This field is to find out if this event required any intervention. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Concomitant Drugs**{::nomarkdown}<pre><code>  concomitant_drugs</code></pre>{:/} | 13 | A list of all drugs that may have been taken at the time of the reaction. | OBJECT |  | [Concomitant_Drugs-120_8513](#Concomitant_Drugs-120_8513)
**Other Related History**{::nomarkdown}<pre><code>  other_related_history</code></pre>{:/} | 14 | This field contains any other related event history for this reaction. | STRING |  | 
**Severity**{::nomarkdown}<pre><code>  severity</code></pre>{:/} | 14.5 | This field indicates the severity of this reaction. | ENUMERATION |  | {::nomarkdown}MILD: <em><strong>1</strong></em><br/>MODERATE: <em><strong>2</strong></em><br/>SEVERE: <em><strong>3</strong></em>{:/}
**Date Md Notified**{::nomarkdown}<pre><code>  date_md_notified</code></pre>{:/} | 22 | This field contains the date the doctor was notified of this reaction. | DATE-TIME |  | 
**Fda Question #1**{::nomarkdown}<pre><code>  fda_question_number1</code></pre>{:/} | 23 | This field determines if the reaction is considered serious. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Fda Question #2**{::nomarkdown}<pre><code>  fda_question_number2</code></pre>{:/} | 24 | This question determines whether this reaction is related to a new drug. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Fda Question #3**{::nomarkdown}<pre><code>  fda_question_number3</code></pre>{:/} | 25 | This question determines whether this reaction was an unexpected reaction<br/>for this drug. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Fda Question #4**{::nomarkdown}<pre><code>  fda_question_number4</code></pre>{:/} | 26 | This question determines whether this reaction is related to a<br/>therapeutic failure of the drug. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Fda Question #5**{::nomarkdown}<pre><code>  fda_question_number5</code></pre>{:/} | 26.1 | This field is to track if the reaction was a dose related reaction. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Date Reported To Fda**{::nomarkdown}<pre><code>  date_reported_to_fda</code></pre>{:/} | 27 | This field contains the date on which the FDA was sent the ADR report. | DATE-TIME |  | 
**Date Of Patient Consent To Mfr**{::nomarkdown}<pre><code>  date_of_patient_consent_to_mfr</code></pre>{:/} | 28 | This field is the date the patient had given his consent to have the<br/>reaction reported to the manufacturer. | DATE-TIME |  | 
**Date Sent To Mfr**{::nomarkdown}<pre><code>  date_sent_to_mfr</code></pre>{:/} | 29 |  This is the date when the report was sent to the manufacturer. | DATE-TIME |  | 
***date Sent To Rcpm**{::nomarkdown}<pre><code>  date_sent_to_rcpm</code></pre>{:/} | 30 | This is the date when the report was sent to the regional offices. | DATE-TIME | DEPRECATED | 
**Date Sent To Vaers**{::nomarkdown}<pre><code>  date_sent_to_vaers</code></pre>{:/} | 31 | This field is the date when the report was sent to the VAERS. | DATE-TIME |  | 
**P&amp;t Action Fda Report**{::nomarkdown}<pre><code>  pt_action_fda_report</code></pre>{:/} | 31.1 | This field indicates if the P&T committee determined whether to send<br/>the report to FDA. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**P&amp;t Action Mfr Report**{::nomarkdown}<pre><code>  pt_action_mfr_report</code></pre>{:/} | 31.2 | This field tells if the P&T committee determined whether to send the report to<br/>the manufacturer. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
***p&amp;t Action Rcpm Report**{::nomarkdown}<pre><code>  pt_action_rcpm_report</code></pre>{:/} | 31.3 | This field determines whether or not the P&T committee will send the<br/>report to the regional offices. | BOOLEAN | DEPRECATED | 
**P&amp;t Addendum**{::nomarkdown}<pre><code>  pt_addendum</code></pre>{:/} | 31.5 | List of comments made by the P&T committee. | OBJECT |  | [Pt_Addendum-120_85315](#Pt_Addendum-120_85315)
**Reporter Name**{::nomarkdown}<pre><code>  reporter_name</code></pre>{:/} | 43 | This field contains the name of the person filling out the reports. | STRING |  | 
**Reporter Address1**{::nomarkdown}<pre><code>  reporter_address1</code></pre>{:/} | 44 | Line one of the address of the person filling out the report. | STRING |  | 
**Reporter Address2**{::nomarkdown}<pre><code>  reporter_address2</code></pre>{:/} | 45 | Line two of the address of the person filling out the report. | STRING |  | 
**Reporter Address3**{::nomarkdown}<pre><code>  reporter_address3</code></pre>{:/} | 46 | Line three of the address of the person filling out the report. | STRING |  | 
**Reporter City**{::nomarkdown}<pre><code>  reporter_city</code></pre>{:/} | 47 | The city where the person lives who is filling out the report. | STRING |  | 
**Reporter State**{::nomarkdown}<pre><code>  reporter_state</code></pre>{:/} | 48 | The state where the reporter resides. | POINTER |  | [State-5](State-5)
**Reporter ZIP**{::nomarkdown}<pre><code>  reporter_zip</code></pre>{:/} | 49 | This is the zip code of the person filling out the report. | STRING |  | 
**Reporter Phone**{::nomarkdown}<pre><code>  reporter_phone</code></pre>{:/} | 50 | This is the phone number of the person who is filling out the report. | STRING |  | 
**Rpt Question #1**{::nomarkdown}<pre><code>  rpt_question_number1</code></pre>{:/} | 51 | This field determines if the reporter is a health care provider. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Rpt Question #2**{::nomarkdown}<pre><code>  rpt_question_number2</code></pre>{:/} | 52 | This field determines if the reporter wants to permit the FDA to inform the manufacturer of his identity. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Occupation**{::nomarkdown}<pre><code>  occupation</code></pre>{:/} | 52.1 | This field contains the reporter's current occupation. | STRING |  | 
**Manufacturer Name**{::nomarkdown}<pre><code>  manufacturer_name</code></pre>{:/} | 53 | This field is the name of the manufacturer of the reactant. | STRING |  | 
**Mfr Address #1**{::nomarkdown}<pre><code>  mfr_address_number1</code></pre>{:/} | 54 | This is address line one for the manufacturer. | STRING |  | 
**Mfr Address #2**{::nomarkdown}<pre><code>  mfr_address_number2</code></pre>{:/} | 55 | This is address line two for the manufacturer. | STRING |  | 
**Mfr Address #3**{::nomarkdown}<pre><code>  mfr_address_number3</code></pre>{:/} | 56 | This is address line three for the manufacturer. | STRING |  | 
**Mfr City**{::nomarkdown}<pre><code>  mfr_city</code></pre>{:/} | 57 | This is the city of the manufacturer. | STRING |  | 
**Mfr State**{::nomarkdown}<pre><code>  mfr_state</code></pre>{:/} | 58 | This is the state where the manufacturer is located. | POINTER |  | [State-5](State-5)
**Mfr ZIP**{::nomarkdown}<pre><code>  mfr_zip</code></pre>{:/} | 59 | This is the Zip Code of the manufacturer. | STRING |  | 
**Ind/nda # For Support Drug**{::nomarkdown}<pre><code>  ind_nda_number_for_support_drug</code></pre>{:/} | 60 | This is the IND/NDA # for support drug for the manufacturer. | STRING |  | 
**Mfr Control #**{::nomarkdown}<pre><code>  mfr_control_number</code></pre>{:/} | 61 | This is the control number used by the manufacturer. | STRING |  | 
**Date Received By Mfr**{::nomarkdown}<pre><code>  date_received_by_mfr</code></pre>{:/} | 62 | This is the date the report was received by the manufacturer. | DATE-TIME |  | 
**Report Source**{::nomarkdown}<pre><code>  report_source</code></pre>{:/} | 63 | This is the source of the report. | ENUMERATION |  | {::nomarkdown}CONSUMER: <em><strong>c</strong></em><br/>STUDY: <em><strong>s</strong></em><br/>LITERATURE: <em><strong>l</strong></em><br/>HEALTH PROFESSIONAL: <em><strong>h</strong></em><br/>FOREIGN: <em><strong>f</strong></em>{:/}
**15 Day Report**{::nomarkdown}<pre><code>  _15_day_report</code></pre>{:/} | 64 | This field is to determine if the 15 Day Report has been completed. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Report Type**{::nomarkdown}<pre><code>  report_type</code></pre>{:/} | 65 | This is the type of report issued. | ENUMERATION |  | {::nomarkdown}FOLLOWUP: <em><strong>f</strong></em><br/>INITIAL: <em><strong>i</strong></em>{:/}

## Sub-Files
### <a name="Reactions-120_8502"></a>Reactions (120.8502)

<dl>
<dt>ID</dt><dd>Reactions-120_8502</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | .01 | One sign/symptom observed for this reaction. | POINTER | INDEXED<br/>REQUIRED | [Sign_symptoms-120_83](Sign_symptoms-120_83)
**Other Reaction**{::nomarkdown}<pre><code>  other_reaction</code></pre>{:/} | 1 | If this sign/symptom cannot be found in the Sign/Symptoms (120.83) file,<br/>then the free text of what the user typed in will be here, and the<br/>signs/symptoms of OTHER REACTION will be the value of the REACTIONS field. | STRING |  | 
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | 2 | The person who entered this reaction into the system. | POINTER |  | [New_Person-200](New_Person-200)

[&uarr; Return to top](#top)<br/>


### <a name="Suspected_Agent-120_8503"></a>Suspected Agent (120.8503)

<dl>
<dt>ID</dt><dd>Suspected_Agent-120_8503</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Suspected Agent**{::nomarkdown}<pre><code>  suspected_agent</code></pre>{:/} | .01 | This field indicates one of the suspected agents for this observed reaction. | STRING | INDEXED<br/>REQUIRED | 
**Daily Dose**{::nomarkdown}<pre><code>  daily_dose</code></pre>{:/} | 1 | This field contains the daily dosage for this suspected agent. | STRING |  | 
**Sig**{::nomarkdown}<pre><code>  sig</code></pre>{:/} | 1.5 | This file contains the SIG code that indicates how this drug is to be given. | STRING |  | 
**Route Of Administration**{::nomarkdown}<pre><code>  route_of_administration</code></pre>{:/} | 2 | This is the route of administration for this suspected agent. | STRING |  | 
**Indications For Use**{::nomarkdown}<pre><code>  indications_for_use</code></pre>{:/} | 3 | This field indicates the reasoning for a particular agent. | STRING |  | 
**Start Date Of Administration**{::nomarkdown}<pre><code>  start_date_of_administration</code></pre>{:/} | 4 | This field contains the date a patient was first given the suspected agent. | DATE-TIME |  | 
**Stop Date Of Administration**{::nomarkdown}<pre><code>  stop_date_of_administration</code></pre>{:/} | 5 | This field contains the stop date for a suspected agent. | DATE-TIME |  | 
**Manufacturer**{::nomarkdown}<pre><code>  manufacturer</code></pre>{:/} | 7 | This field contains the name of the manufacturer of the suspected agent. | STRING |  | 
**Lot #**{::nomarkdown}<pre><code>  lot_number</code></pre>{:/} | 8 | This field contains the lot # for a suspected agent. | STRING |  | 
**Number Of Previous Doses**{::nomarkdown}<pre><code>  number_of_previous_doses</code></pre>{:/} | 9 | This field contains the total number of doses of this suspected agent that<br/>were given to the patient prior to the reaction. | NUMERIC |  | 
**Last Fill Dt**{::nomarkdown}<pre><code>  last_fill_dt</code></pre>{:/} | 10 | This field is the date that this agent was last filled. | DATE-TIME |  | 
**Expiration Date**{::nomarkdown}<pre><code>  expiration_date</code></pre>{:/} | 10.1 | This is the date that the suspected agent is to expire. | DATE-TIME |  | 
**Ndc #**{::nomarkdown}<pre><code>  ndc_number</code></pre>{:/} | 10.2 | This is the NDC (National Drug Code) of this agent. | STRING |  | 
**Like Question #1**{::nomarkdown}<pre><code>  like_question_number1</code></pre>{:/} | 11 | This question determines whether this reaction normally occurs with this reactant.<br/>reactant. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Like Question #2**{::nomarkdown}<pre><code>  like_question_number2</code></pre>{:/} | 12 | This question determines whether administration of the reactant was stopped. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Like Question #3**{::nomarkdown}<pre><code>  like_question_number3</code></pre>{:/} | 13 | This question determines if the reaction stopped when the administration of the reactant was terminated.<br/>the reactant was terminated. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Like Question #4**{::nomarkdown}<pre><code>  like_question_number4</code></pre>{:/} | 14 | This question determines whether the reactant was readministered. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Like Question #5**{::nomarkdown}<pre><code>  like_question_number5</code></pre>{:/} | 15 | This question determines whether the reaction could be due to the patient current clinical condition. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Like Question #6**{::nomarkdown}<pre><code>  like_question_number6</code></pre>{:/} | 16 | This question determines if the reaction reappeared after the reactant was readministered.<br/>was readministered. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Likelihood**{::nomarkdown}<pre><code>  likelihood</code></pre>{:/} | 17 | If this is an observed drug allergy/adverse reaction, then this is the<br/>likelihood that this is an adverse reaction.  The data for this field is<br/>based on an algorithm used by the FDA. | ENUMERATION |  | {::nomarkdown}REMOTE: <em><strong>1</strong></em><br/>POSSIBLE: <em><strong>2</strong></em><br/>HIGHLY PROBABLE: <em><strong>4</strong></em><br/>PROBABLE: <em><strong>3</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Relevant_Test_lab_Data-120_8504"></a>Relevant Test/lab Data (120.8504)

<dl>
<dt>ID</dt><dd>Relevant_Test_lab_Data-120_8504</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | .01 | This field contains a particular test/lab data for this observed reaction. | STRING | INDEXED<br/>REQUIRED | 
**Results**{::nomarkdown}<pre><code>  results</code></pre>{:/} | 1 | This field will contain the results for the particular test. | STRING |  | 
**Collection D/t**{::nomarkdown}<pre><code>  collection_d_t</code></pre>{:/} | 2 | This field is the date the sample was collected from the patient. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Concomitant_Drugs-120_8513"></a>Concomitant Drugs (120.8513)

<dl>
<dt>ID</dt><dd>Concomitant_Drugs-120_8513</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Concomitant Drugs**{::nomarkdown}<pre><code>  concomitant_drugs</code></pre>{:/} | .01 | This field contains the drug(s) this patient was taking at the time<br/>of the reaction. | STRING | INDEXED<br/>REQUIRED | 
**Start Date Of Administration**{::nomarkdown}<pre><code>  start_date_of_administration</code></pre>{:/} | 1 | This field is the date this drug was first given to the patient. | DATE-TIME |  | 
**Stop Date Of Administration**{::nomarkdown}<pre><code>  stop_date_of_administration</code></pre>{:/} | 2 | This field is the last day the patient was given this drug. | DATE-TIME |  | 
**Last Fill Dt**{::nomarkdown}<pre><code>  last_fill_dt</code></pre>{:/} | 3 | This field is the last date that this drug was filled. | DATE-TIME |  | 
**Sig**{::nomarkdown}<pre><code>  sig</code></pre>{:/} | 4 | This file contains the SIG code that indicates how this drug is to be given. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Pt_Addendum-120_85315"></a>P&amp;t Addendum (120.85315)

<dl>
<dt>ID</dt><dd>Pt_Addendum-120_85315</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time Entered**{::nomarkdown}<pre><code>  date_time_entered</code></pre>{:/} | .01 | This is the date/time the comment was entered. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Addendum**{::nomarkdown}<pre><code>  addendum</code></pre>{:/} | 1 | This is the actual comment that is being added. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}