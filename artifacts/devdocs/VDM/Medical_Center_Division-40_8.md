---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Medical_Center_Division-40_8<br/>
<a name="top"></a>
# Medical Center Division (40.8)
This file contains the Medical Center Divisions which are defined using the 'MAS Parameter Entry/Edit' option.  The primary facility as well as any NHCU, Domiciliary or other division should be defined within this file.

**Global:** ^DG(40.8,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Num**{::nomarkdown}<pre><code>  num</code></pre>{:/} | .001 | This field contains the internal entry number of the division as determined<br/>by VA FileMan. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Enter in this field the name of a division at your facility.  It may be<br/>the main building, a satelite clinic, a domiciliary, or a nursing home. | STRING | INDEXED<br/>REQUIRED | 
**Institution File Pointer**{::nomarkdown}<pre><code>  institution_file_pointer</code></pre>{:/} | .07 | Enter the entry in the institution file that corresponds to this division.<br/>It is IMPERATIVE that you respond to this prompt properly as this affects<br/>transmission of data to Austin as well as many other statistical reports. | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Print Wristbands**{::nomarkdown}<pre><code>  print_wristbands</code></pre>{:/} | .08 | This field determines whether the patient's wristbands are printed at this<br/>division. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Facility Number**{::nomarkdown}<pre><code>  facility_number</code></pre>{:/} | 1 | Enter the number of the facility that this division is affiliated with.<br/>This should be the 3 digit facility number the site is assigned by<br/>Central Office officials.  It may also include a suffix. | STRING | INDEXED<br/>REQUIRED | 
**Employee Health Counts**{::nomarkdown}<pre><code>  employee_health_counts</code></pre>{:/} | 2 | This multiple contains the number of employee health visits to this<br/>division broken down by month/year. | OBJECT |  | [Employee_Health_Counts-40_801](#Employee_Health_Counts-40_801)
**Outpatient Only**{::nomarkdown}<pre><code>  outpatient_only</code></pre>{:/} | 3 | Enter yes if this division has only outpatient medical services (no<br/>inpatient wards). | ENUMERATION |  | {::nomarkdown}OUTPATIENT ONLY: <em><strong>1</strong></em>{:/}
**Print &#x27;aa&#x27;&lt;96&#x27; On G&amp;l**{::nomarkdown}<pre><code>  print_aa96_on_gl</code></pre>{:/} | 4 | Enter YES to display AA<96 (pass) transfers on the gains and losses sheet.<br/>Respond NO if these transfers should not be listed.  The counts will be<br/>included on the bed status report regardless of your response here. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print &#x27;aa&#x27; On G&amp;l**{::nomarkdown}<pre><code>  print_aa_on_gl</code></pre>{:/} | 5 | Enter YES if you would like authorized absence transfers of more than 96<br/>hours to appear on the gains and losses sheet.  Answer NO otherwise.<br/>Regardless of the response here, these figures will be calculated into<br/>the bed status report. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Nhcu/dom/hosp G&amp;l**{::nomarkdown}<pre><code>  nhcu_dom_hosp_gl</code></pre>{:/} | 6 | Respond YES if the gains and losses sheet should combine the movements<br/>which occur in the nursing home, hospital, and dom on a single sheet for<br/>this division.  Answer no if movements for these three types of care<br/>should be on different sheets. | ENUMERATION |  | {::nomarkdown}COMBINED: <em><strong>0</strong></em><br/>SEPARATE: <em><strong>1</strong></em>{:/}
**Default 1010 Printer**{::nomarkdown}<pre><code>  default_1010_printer</code></pre>{:/} | 7 | Enter the printer which the 1010, 1010I, and 1010F outputs will display<br/>on if no other printer is selected.  The reports will only print to this<br/>printer for registrations at this division. | STRING |  | 
**Default Drug Profile Printer**{::nomarkdown}<pre><code>  default_drug_profile_printer</code></pre>{:/} | 8 | Enter the printer on which the pharmacy drug profile will display if no<br/>other printer is selected.  The drug profile will only display to this<br/>printer for registrations entered at this division. | STRING |  | 
**Default Routing Slip Printer**{::nomarkdown}<pre><code>  default_routing_slip_printer</code></pre>{:/} | 9 | Enter the printer on which the routing slip will appear if no other printer<br/>is selected.  The routing slip will only display to this printer for<br/>registrations entered at this division. | STRING |  | 
**Division Ptf Printer**{::nomarkdown}<pre><code>  division_ptf_printer</code></pre>{:/} | 9.1 | This is the printer on which you want all PTF messages to appear<br/>for this division.  It overrides the printer defined in the<br/>DEFAULT PTF MESSAGE PRINTER prompt located in the ADT PARAMETER<br/>file. | STRING |  | 
**Census Date**{::nomarkdown}<pre><code>  census_date</code></pre>{:/} | 10 | This multiple field contains data on inpatient census as broken <br/>down by date.  This data is compiled when the gains and losses <br/>and bed status reports are run. | OBJECT |  | [Census_Date-40_802](#Census_Date-40_802)
**Prf Assignment Ownership**{::nomarkdown}<pre><code>  prf_assignment_ownership</code></pre>{:/} | 26.01 | This field contains the indicator of whether or not this medical center <br/>division has been designated as a patient record flag assignment owner.<br/>Data in this field should not be added or edited except through the use<br/>of the Patient Record Flags software that is part of Registration. | ENUMERATION |  | {::nomarkdown}DISABLED: <em><strong>0</strong></em><br/>ENABLED: <em><strong>1</strong></em>{:/}
**Prf Ownership Edited**{::nomarkdown}<pre><code>  prf_ownership_edited</code></pre>{:/} | 26.02 | This field is used as part of the audit trail for the enabling/disabling<br/>of medical center divisions as patient record flag assignment owners.  This<br/>field will contain the date/time that the PRF ASSIGNMENT OWNERSHIP<br/>indicator was edited.<br/>Data in this field should not be added or edited except through the use<br/>of the Patient Record Flags software that is part of Registration. | DATE-TIME |  | 
**Prf Ownership Edited By**{::nomarkdown}<pre><code>  prf_ownership_edited_by</code></pre>{:/} | 26.03 | This field is used as part of the audit trail for the enabling/disabling<br/>of medical center divisions as patient record flag assignment owners.  This<br/>field will contain the user responsible for editing the PRF ASSIGNMENT<br/>OWNERSHIP indicator.<br/>Data in this field should not be added or edited except through the use<br/>of the Patient Record Flags software that is part of Registration. | POINTER |  | [New_Person-200](New_Person-200)
**Address Location On Letters**{::nomarkdown}<pre><code>  address_location_on_letters</code></pre>{:/} | 30.01 | Enter the location (top or bottom) where the address should appear for<br/>letters generated for appointments or other activities at this division. | ENUMERATION |  | {::nomarkdown}TOP: <em><strong>0</strong></em><br/>BOTTOM: <em><strong>1</strong></em>{:/}
**Op Lab Test Start Time**{::nomarkdown}<pre><code>  op_lab_test_start_time</code></pre>{:/} | 30.02 | Enter the time in the morning at which lab tests begin.  This is used by<br/>the auto-rebook functionality to prevent lab test being scheduled too<br/>early.  For example, if a patient has an appointment at 2pm with lab at<br/>11pm and the appointment is cancelled and autorebooked for 8am, the lab<br/>would have been scheduled for 5am.  This will prevent this from occurring. | STRING |  | 
**Op Ekg Start Time**{::nomarkdown}<pre><code>  op_ekg_start_time</code></pre>{:/} | 30.03 | Enter the time in the morning at which ekg tests begin.  This is used by<br/>the auto-rebook functionality to prevent ekg test being scheduled too<br/>early.  For example, if a patient has an appointment at 2pm with ekg at<br/>11pm and the appointment is cancelled and auto-rebooked for 8am, the ekg<br/>would have been scheduled for 5am.  This will prevent this from occurring. | STRING |  | 
**Op X-ray Start Time**{::nomarkdown}<pre><code>  op_xray_start_time</code></pre>{:/} | 30.04 | Enter the time in the morning at which x-ray tests begin.  This is used by<br/>the auto-rebook functionality to prevent x-ray test being scheduled too<br/>early.  For example, if a patient has an appointment at 2pm with x-ray at<br/>11pm and the appointment is cancelled and auto-rebooked for 8am, the<br/>x-ray would have been scheduled for 5am.  This will prevent this from<br/>occurring. | STRING |  | 
**Display Means Test Required**{::nomarkdown}<pre><code>  display_means_test_required</code></pre>{:/} | 35.01 | This field determines whether a Means Test Required message is displayed on patient lookups at this division | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Means Test Text**{::nomarkdown}<pre><code>  means_test_text</code></pre>{:/} | 35.02 | If you have answered 'Yes' to the Means Test Required prompt, you can<br/>enter text here to be displayed upon patient lookup, such as where to<br/>report to complete the Means Test, etc.  | STRING |  | 
**Display Means Test Req If Gui**{::nomarkdown}<pre><code>  display_means_test_req_if_gui</code></pre>{:/} | 35.03 | This field determines whether a Means Test Required message is displayed on patient GUI lookups | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Op Visit Date**{::nomarkdown}<pre><code>  op_visit_date</code></pre>{:/} | 40 | This field is a multiple containing the OP visit date, planned OP<br/>visits (CUM) and actual OP visits (CUM).   | OBJECT |  | [Op_Visit_Date-40_808](#Op_Visit_Date-40_808)
**Treating Specialty**{::nomarkdown}<pre><code>  treating_specialty</code></pre>{:/} | 50 | This multiple contains data as it is used in the<br/>Treating Specialty Report. | OBJECT |  | [Treating_Specialty-40_806](#Treating_Specialty-40_806)
**Track Incomplete Summaries?**{::nomarkdown}<pre><code>  track_incomplete_summaries</code></pre>{:/} | 100.01 | Is this division using the MAS summary tracking package? | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Default Primary Physician**{::nomarkdown}<pre><code>  default_primary_physician</code></pre>{:/} | 100.02 | Enter 'P' if the PRIMARY CARE PHYSICIAN is responsible for this summary or<br/>op report or 'A' if the ATTENDING PHYSICIAN is responsible.<br/>If, for example, you choose ATTENDING PHYSICIAN, the ATTENDING PHYSICIAN<br/>of record in bed control, when the summary or OP report is created,<br/>will be the default. You may, however, edit the PHYSICIAN RESPONSIBLE<br/>at any time. | ENUMERATION | REQUIRED | {::nomarkdown}PRIMARY CARE PHYSICIAN: <em><strong>P</strong></em><br/>ATTENDING PHYSICIAN: <em><strong>A</strong></em>{:/}
**Are Reports Reviewed?**{::nomarkdown}<pre><code>  are_reports_reviewed</code></pre>{:/} | 100.03 | If this division requires a second physician to review the summary, respond<br/>YES, otherwise respond NO. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Default Reviewing Physician**{::nomarkdown}<pre><code>  default_reviewing_physician</code></pre>{:/} | 100.04 | If summaries require review, enter the PRIMARY or ATTENDING<br/>physician responsible.  If, for example, you choose ATTENDING PHYSICIAN,<br/>the ATTENDING PHYSICIAN of record in bed control, when the summary or<br/>OP report is created, will be the default. | ENUMERATION | REQUIRED | {::nomarkdown}PRIMARY CARE PHYSICIAN: <em><strong>P</strong></em><br/>ATTENDING PHYSICIAN: <em><strong>A</strong></em>{:/}
**Track Outpatient Op Reports?**{::nomarkdown}<pre><code>  track_outpatient_op_reports</code></pre>{:/} | 100.05 | If you want to track outpatient op reports at this division, respond YES.<br/>Otherwise, respond NO. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Days For Dictation**{::nomarkdown}<pre><code>  days_for_dictation</code></pre>{:/} | 100.06 | Enter the number of days the physician has to dictate a summary before it<br/>is considered incomplete. | NUMERIC | REQUIRED | 
**Days For Signature**{::nomarkdown}<pre><code>  days_for_signature</code></pre>{:/} | 100.07 | Enter the number of days from the date of transcription the physician has<br/>in order to sign the summary or op report. | NUMERIC | REQUIRED | 
**Days For Review**{::nomarkdown}<pre><code>  days_for_review</code></pre>{:/} | 100.08 | Enter the number of days the reviewing physician has to review the report<br/>once it has been signed. | NUMERIC |  | 
**Incomplete Summaries Message**{::nomarkdown}<pre><code>  incomplete_summaries_message</code></pre>{:/} | 100.09 | This field contains the message that the facility wants displayed<br/>at the end of each page for each type of report. | STRING |  | 
**Default Phys. For Signature**{::nomarkdown}<pre><code>  default_phys_for_signature</code></pre>{:/} | 100.1 | This is a new field in file 40.8 the MEDICAL CENTER DIVISION<br/>file.  This field will be asked in the Set Up IRT Parameters<br/>option and will be used to store the default of the physician<br/>who will be responsible for the signature of a deficiency.  It<br/>will be either the Primary or the Attending physician. | ENUMERATION | REQUIRED | {::nomarkdown}PRIMARY CARE PHYSICIAN: <em><strong>P</strong></em><br/>ATTENDING PHYSICIAN: <em><strong>A</strong></em>{:/}
**Std. Defic. For Short Forms?**{::nomarkdown}<pre><code>  std_defic_for_short_forms</code></pre>{:/} | 100.2 | By entering yes in this field,  the IRT Backgroud Job will create standard<br/>deficiencies for short form discharges ( discharged less than 48 hours<br/>after admission).  If you enter no in this field the standard deficiencies<br/>will not be created for short forms in the IRT Background Job. | ENUMERATION | REQUIRED | {::nomarkdown}YES: <em><strong>1</strong></em><br/>N: <em><strong>0</strong></em>{:/}
**Default Medical Record Type**{::nomarkdown}<pre><code>  default_medical_record_type</code></pre>{:/} | 100.3 | Incomplete Records Tracking will use this entry as the default Medical<br/>record type for Division when pulling patient information.  If blank,<br/>MEDICAL RECORD will be default value. | POINTER |  | Record_Types-195_2
**Rai Subscription Number**{::nomarkdown}<pre><code>  rai_subscription_number</code></pre>{:/} | 900.01 | This field points to the subscribing RAI/MDS COTS system subscription<br/>registry for patient updates.  This subscription control number is <br/>specific to this division.  Do not change the control number once set<br/>up as this will prevent the COTS system from being updated by VistA.<br/>Use only documented API calls to create or retrieve the subscription<br/>control number. | POINTER |  | Subscription_Control-774

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Employee_Health_Counts-40_801"></a>Employee Health Counts (40.801)

<dl>
<dt>ID</dt><dd>Employee_Health_Counts-40_801</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Month/year**{::nomarkdown}<pre><code>  month_year</code></pre>{:/} | .01 | Enter the year for which employee health visits are to be tracked. | DATE-TIME | REQUIRED | 
**Total**{::nomarkdown}<pre><code>  total</code></pre>{:/} | 1 | Enter the total number of employee health visits to this division during<br/>this month. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Census_Date-40_802"></a>Census Date (40.802)

<dl>
<dt>ID</dt><dd>Census_Date-40_802</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Census Date**{::nomarkdown}<pre><code>  census_date</code></pre>{:/} | .01 |  | DATE-TIME | REQUIRED | 
**Cum Planned Nh Adc**{::nomarkdown}<pre><code>  cum_planned_nh_adc</code></pre>{:/} | 1 | This sub-field of the Census Date contains the Cumulative Planned <br/>Nursing Home Average Daily Census (ADC).   | NUMERIC |  | 
**Cum Planned Dom Adc**{::nomarkdown}<pre><code>  cum_planned_dom_adc</code></pre>{:/} | 1.25 | This sub-field of the Census Date contains the Cumulative Planned <br/>Domicillary Average Daily Census (ADC). | NUMERIC |  | 
**Avg Dom Census Fy To Date**{::nomarkdown}<pre><code>  avg_dom_census_fy_to_date</code></pre>{:/} | 1.5 | This sub-field of the Census Date contains the Average Domicillary <br/>Census for the current fiscal year to date. | NUMERIC |  | 
**Monthly Planned Adc**{::nomarkdown}<pre><code>  monthly_planned_adc</code></pre>{:/} | 2 | This sub-field of the Census Date contains the Monthly Planned Average <br/>Daily Census (ADC). | NUMERIC |  | 
**Monthly Planned Nh Adc**{::nomarkdown}<pre><code>  monthly_planned_nh_adc</code></pre>{:/} | 2.25 | This sub-field of the Census Date contains the Monthly Planned Nursing <br/>Home Average Daily Census (ADC). | NUMERIC |  | 
**Monthly Planned Dom Adc**{::nomarkdown}<pre><code>  monthly_planned_dom_adc</code></pre>{:/} | 2.5 | This sub-field of the Census Date contains the Monthly Planned <br/>Domicillary Average Daily Census (ADC). | NUMERIC |  | 
**Cum Planned Adc**{::nomarkdown}<pre><code>  cum_planned_adc</code></pre>{:/} | 3 | This sub-field of the Census Date contains the Cumulative Planned <br/>Average Daily Census (ADC) for this medical center. | NUMERIC |  | 
***dialysis Patients**{::nomarkdown}<pre><code>  dialysis_patients</code></pre>{:/} | 4 | This sub-field of the Census Date contains the number of <br/>Dialysis Patients for this census date. | NUMERIC | DEPRECATED | 
**Census**{::nomarkdown}<pre><code>  census</code></pre>{:/} | 5 | This sub-field of the Census Date contains the Census figures <br/>for the medical center. | NUMERIC |  | 
**Avg Census Fy To Date**{::nomarkdown}<pre><code>  avg_census_fy_to_date</code></pre>{:/} | 6 | This sub-field of the Census Date contains the Average Census <br/>Fiscal Year to date.   | NUMERIC |  | 
**Avg Nh Census Fy To Date**{::nomarkdown}<pre><code>  avg_nh_census_fy_to_date</code></pre>{:/} | 8 | This sub-field of the Census Date contains the Average <br/>Nursing Home Census Fiscal Year to date. | NUMERIC |  | 
***cumulative Dialysis Patients**{::nomarkdown}<pre><code>  cumulative_dialysis_patients</code></pre>{:/} | 9 | This sub-field of the Census Date contains the Cumulative <br/>Dialysis Patients fiscal year to date. | NUMERIC | DEPRECATED | 
**Wait List - 65 And Over**{::nomarkdown}<pre><code>  wait_list__65_and_over</code></pre>{:/} | 10 | This sub-field of the Census Date contains the number of patients <br/>on the Waiting List that are 65 years old and over. | NUMERIC |  | 
**Wait List - Viet Nam Era**{::nomarkdown}<pre><code>  wait_list__viet_nam_era</code></pre>{:/} | 11 | This sub-field of the Census Date contains the number of patients <br/>on the Waiting List that are Vietnam Era. | NUMERIC |  | 
***bed Occupants - 65 And Over**{::nomarkdown}<pre><code>  bed_occupants__65_and_over</code></pre>{:/} | 12 |  | NUMERIC | DEPRECATED | 
***bed Occupants - Viet Nam Era**{::nomarkdown}<pre><code>  bed_occupants__viet_nam_era</code></pre>{:/} | 13 |  | NUMERIC | DEPRECATED | 
**Wait List Bedsection**{::nomarkdown}<pre><code>  wait_list_bedsection</code></pre>{:/} | 14 | This sub-field of the Census Date multiple is a mutiple that adds <br/>new entries without asking, inpatient AMISs use this information.ient A | OBJECT |  | [Wait_List_Bedsection-40_805](#Wait_List_Bedsection-40_805)
**Corrections To Previous G&amp;l&#x27;s**{::nomarkdown}<pre><code>  corrections_to_previous_gls</code></pre>{:/} | 20 | This sub-field of the Census Date multiple is a word-processing field and <br/>contains the corrections to previous G&L's and is printed at the bottom <br/>Census Date Gains and Losses Sheet (G&L). | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Wait_List_Bedsection-40_805"></a>Wait List Bedsection (40.805)

<dl>
<dt>ID</dt><dd>Wait_List_Bedsection-40_805</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Wait List Bedsection**{::nomarkdown}<pre><code>  wait_list_bedsection</code></pre>{:/} | .01 | This sub-field of the Waiting List Bedsection of the Census Date Multiple <br/>is a set of code and is by inpatient AMISs. | ENUMERATION | REQUIRED | {::nomarkdown}REHAB MEDICINE: <em><strong>338</strong></em><br/>SPINAL CORD INJURY: <em><strong>340</strong></em><br/>MEDICINE: <em><strong>336</strong></em><br/>INTERMEDIATE: <em><strong>335</strong></em><br/>PSYCHIATRY: <em><strong>334</strong></em><br/>SURGERY: <em><strong>341</strong></em><br/>NEUROLOGY: <em><strong>337</strong></em><br/>BLIND REHAB: <em><strong>339</strong></em><br/>NHCU: <em><strong>345</strong></em>{:/}
**Wait List In Hospital**{::nomarkdown}<pre><code>  wait_list_in_hospital</code></pre>{:/} | .02 | This sub-field of the Waiting List Bedsection of the Census Date Multiple<br/>is the number of patients on the waiting list for this bedsection. | NUMERIC |  | 
**Wait List Not In Hospital**{::nomarkdown}<pre><code>  wait_list_not_in_hospital</code></pre>{:/} | .03 | This sub-field of the Waiting List Bedsection of the Census Date Multiple <br/>is the number of patients on the waiting list for this bedsection not <br/>in the hospital. | NUMERIC |  | 
**Wait List - Service Connected**{::nomarkdown}<pre><code>  wait_list__service_connected</code></pre>{:/} | .04 | This sub-field of the Waiting List Bedsection of the Census Date Multiple <br/>is the number of patients on the waiting list for this bedsection who are <br/>service connected.   | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Op_Visit_Date-40_808"></a>Op Visit Date (40.808)

<dl>
<dt>ID</dt><dd>Op_Visit_Date-40_808</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Op Visit Date**{::nomarkdown}<pre><code>  op_visit_date</code></pre>{:/} | .01 | This is a date/time field (FM function) and represents the date/time<br/>of a specifie outpatient visit date/time associated with the medical<br/>center.<br/> | DATE-TIME | INDEXED<br/>REQUIRED | 
**Planned Op Visits [cum]**{::nomarkdown}<pre><code>  planned_op_visits_cum</code></pre>{:/} | .02 | This field contains the number of planned cumulative outpatient<br/>visits for a given medical center as defined by top management. | NUMERIC |  | 
**Actual Op Visits [cum]**{::nomarkdown}<pre><code>  actual_op_visits_cum</code></pre>{:/} | .03 | This field contains the actual number of cumulative outpatient<br/>visits for a medical center in a given fiscal year. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Treating_Specialty-40_806"></a>Treating Specialty (40.806)

<dl>
<dt>ID</dt><dd>Treating_Specialty-40_806</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Treating Specialty**{::nomarkdown}<pre><code>  treating_specialty</code></pre>{:/} | .01 | This sub-field of the Treating Specialty multiple is a multiple and <br/>a pointer to the Facility Treating Speciality File (#45.7) | POINTER | INDEXED<br/>REQUIRED | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)
**Number Of Beds**{::nomarkdown}<pre><code>  number_of_beds</code></pre>{:/} | .02 | This sub-field of the Treating Specialty multiple is the number of beds. | NUMERIC |  | 
**Beginning Tsr Patients**{::nomarkdown}<pre><code>  beginning_tsr_patients</code></pre>{:/} | .03 | This sub-field of the Treating Specialty multiple is used to initialize<br/>the number of patients for the TSR. | NUMERIC |  | 
**Tsr Order**{::nomarkdown}<pre><code>  tsr_order</code></pre>{:/} | .04 | This sub-field of the Treating Specialty multiple will be used in the<br/>print display order of the Treating Specialty Report by division.<br/>This field entry must be unique and greater than 0 for a treating<br/>specialty to appear on the TSR.  If the treating specialty should not be<br/>printed on the TSR, the value in this field should be deleted. | NUMERIC |  | 
**Census Date**{::nomarkdown}<pre><code>  census_date</code></pre>{:/} | 10 | This sub-field of the Treating Specialty multiple is a multiple <br/>that contains the data for the Treating Speciality G&L/BSR. | OBJECT |  | [Census_Date-40_807](#Census_Date-40_807)

[&uarr; Return to top](#top)<br/>


### <a name="Census_Date-40_807"></a>Census Date (40.807)

<dl>
<dt>ID</dt><dd>Census_Date-40_807</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Census Date**{::nomarkdown}<pre><code>  census_date</code></pre>{:/} | .01 | This sub-field of the Census Date multiple contains the inverse date for<br/>for informtaion stored for this treating specialty on a specific <br/>census date. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Patients Remaining**{::nomarkdown}<pre><code>  patients_remaining</code></pre>{:/} | .02 | This sub-field of the Census Date multiple contains the number of <br/>patients remaining in this treating specialty on this census date. | NUMERIC | REQUIRED | 
**Patient Days Of Care [cum]**{::nomarkdown}<pre><code>  patient_days_of_care_cum</code></pre>{:/} | .03 | This sub-field of the Census Date multiple contains the Cumulative <br/>Patient Days of Care in this treating specialty from the <br/>beginning of the fiscal year to date. | NUMERIC |  | 
**Operating Beds [cum]**{::nomarkdown}<pre><code>  operating_beds_cum</code></pre>{:/} | .04 | This sub-field of the Census Date multiple contains the Cumulative <br/>Operating Beds in this treating specialty from the beginning of the <br/>fiscal year to date. | NUMERIC |  | 
**Discharge-total [cum]**{::nomarkdown}<pre><code>  dischargetotal_cum</code></pre>{:/} | .05 | This sub-field of the Census Date multiple contains the Cumulative <br/>Discharges in this treating specialty from the beginning of the <br/>fiscal year to date. | NUMERIC |  | 
**Iwt Losses [cum]**{::nomarkdown}<pre><code>  iwt_losses_cum</code></pre>{:/} | .06 | This sub-field of the Census Date multiple contains the Cumulative <br/>Inter Ward Transfers (IWT) for this treating speciality from the <br/>beginning of the fiscal year to date. | NUMERIC |  | 
**Patients Remaining [cum]**{::nomarkdown}<pre><code>  patients_remaining_cum</code></pre>{:/} | .07 | This sub-field of the Census Date multiple contains the Cumulative  <br/>Patient's Remaining for this treating specialty from the beginning <br/>of the fiscal year to date. | NUMERIC |  | 
**Xrf To Other Ts [cum]**{::nomarkdown}<pre><code>  xrf_to_other_ts_cum</code></pre>{:/} | .08 | This sub-field of the Census Date multiple contains the Cumulative <br/>Transfers to Other Treating Speciality (XFR TO OTHER TS) for this <br/>treating specialty from the beginning of the fiscal year to date. | NUMERIC |  | 
**Pass Days [cum]**{::nomarkdown}<pre><code>  pass_days_cum</code></pre>{:/} | .09 | This sub-field of the Census Date multiple contains the Cumulative <br/>days of Authorized Absence <96 hours (PASS) for this treating specialty <br/>for this fiscal year to date. | NUMERIC |  | 
**Authorized Absence Days [cum]**{::nomarkdown}<pre><code>  authorized_absence_days_cum</code></pre>{:/} | .1 | This sub-field of the Census Date multiple contains the Cumulative <br/>days of Authorized Absence (AA) for this treating specialty for this <br/>fiscal year to date. | NUMERIC |  | 
**Unauth. Absence Days [cum]**{::nomarkdown}<pre><code>  unauth_absence_days_cum</code></pre>{:/} | .11 | This sub-field of theCensus Date multiple contains the Cumulative <br/>number of days of Unauthorized Absence Days for this treating specialty <br/>for this fiscal year to date. | NUMERIC |  | 
**Transfer-in Admits [cum]**{::nomarkdown}<pre><code>  transferin_admits_cum</code></pre>{:/} | .13 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of admissioos with movement type of Transfer In for this <br/>treating specialty for this fiscal year to date. | NUMERIC |  | 
**Transfer-out Discharges [cum]**{::nomarkdown}<pre><code>  transferout_discharges_cum</code></pre>{:/} | .14 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Discharges with the movement type of Transfer Out for this <br/>treating specialty for this fiscal year to date. | NUMERIC |  | 
**Deaths [cum]**{::nomarkdown}<pre><code>  deaths_cum</code></pre>{:/} | .15 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of movement type of Death for this treating specialty for this <br/>fiscal year to date. | NUMERIC |  | 
**Opt/nsc Discharges [cum]**{::nomarkdown}<pre><code>  opt_nsc_discharges_cum</code></pre>{:/} | .16 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of movement type of OPT/NSC Discharges for this treating <br/>specialty for this fiscal year to date. | NUMERIC |  | 
**Admissions-other [cum]**{::nomarkdown}<pre><code>  admissionsother_cum</code></pre>{:/} | .17 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Admissions (Other) for this treating specialty for this <br/>fiscal year to date. | NUMERIC |  | 
**Adm After Rehosp&gt;30days [cum]**{::nomarkdown}<pre><code>  adm_after_rehosp30days_cum</code></pre>{:/} | .18 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Admission after Rehospitalization > 30 days for this <br/>treating specialty for this fiscal year to date. | NUMERIC |  | 
**Return From Asih [cum]**{::nomarkdown}<pre><code>  return_from_asih_cum</code></pre>{:/} | .19 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of return from ASIH (FROM ASIH) for this treating specialty <br/>for this fiscal year to date. | NUMERIC |  | 
**Sent To Asih [cum]**{::nomarkdown}<pre><code>  sent_to_asih_cum</code></pre>{:/} | .2 | This sub-field of the Census Date multiple contains the Cumulative <br/>transfer To ASIH (send to ASIH) for this treating specialty for the<br/>fiscal year to date. | NUMERIC |  | 
**Disch While Asih [cum]**{::nomarkdown}<pre><code>  disch_while_asih_cum</code></pre>{:/} | .21 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Discharges While ASIH for this treating specialty for <br/>this fiscal year to date. | NUMERIC |  | 
**Died While Asih [cum]**{::nomarkdown}<pre><code>  died_while_asih_cum</code></pre>{:/} | .22 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Discharges Of Died While ASIH for this treating specialty  <br/>for this fiscal year to date. | NUMERIC |  | 
**Xfr From Other Ts [cum]**{::nomarkdown}<pre><code>  xfr_from_other_ts_cum</code></pre>{:/} | .23 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of Transfers From Other Treating Specialty (XFR FROM OTHER TS) <br/>for this treating specialty for this fiscal year to date. | NUMERIC |  | 
**Losses-total [cum]**{::nomarkdown}<pre><code>  lossestotal_cum</code></pre>{:/} | .24 | This sub-field of the Census Date multiple contains the Cumulative <br/>Totals of Losses (from transfers and discharges) for this treating <br/>specialty for this fiscal year to date. | NUMERIC |  | 
**To Pass [cum]**{::nomarkdown}<pre><code>  to_pass_cum</code></pre>{:/} | .25 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of To Pass (AA<96) for this treating specailty for this <br/>fiscal year to date. | NUMERIC |  | 
**To Aa [cum]**{::nomarkdown}<pre><code>  to_aa_cum</code></pre>{:/} | .26 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of TO AA (Authorized Absence) to this treating specialty for <br/>this fiscal year to date. | NUMERIC |  | 
**To Ua [cum]**{::nomarkdown}<pre><code>  to_ua_cum</code></pre>{:/} | .27 | This sub-field of the Census Date multiple contains the Cumulative <br/>number of TO UA (Unauthorized Absence) to this treating specialty for <br/>this fiscal year to date. | NUMERIC |  | 
**Gains-total [cum]**{::nomarkdown}<pre><code>  gainstotal_cum</code></pre>{:/} | .28 | This sub-field of the Census Date multiple contains the Cumulative <br/>Gains Total (from admissions and transfers) for this treating specialty <br/>for this fiscal year to date. | NUMERIC |  | 
**Iwt Gains [cum]**{::nomarkdown}<pre><code>  iwt_gains_cum</code></pre>{:/} | .29 | This sub-field of the Census Date multiple contains the Cumulative <br/>Inter Ward Transfers (IWT) Gains for this treating specialty for <br/>this fiscl year to date. | NUMERIC |  | 
**Females Remaining**{::nomarkdown}<pre><code>  females_remaining</code></pre>{:/} | 1 | This sub-field of the Census Date multiple contains the number of  <br/>Female Patients Remaining at the end of the census day (not cumulative) <br/>for this treating specailty.   | NUMERIC |  | 
**Operating Beds**{::nomarkdown}<pre><code>  operating_beds</code></pre>{:/} | 2 | This sub-field of the Census Date multiple contains the number of <br/>Operating Beds at the end of the census day (not Cumulative) <br/>for this treating specailty. | NUMERIC |  | 
**Patients Over 65 Remaining**{::nomarkdown}<pre><code>  patients_over_65_remaining</code></pre>{:/} | 3 | This sub-field of the Census Date multiple contains the number of <br/>Patients Over 65 (65 years old or greater) Remaining at the end of <br/>the census day (not cumulative) for this treating specialty. | NUMERIC |  | 
**Vietnam Era Vets Remaining**{::nomarkdown}<pre><code>  vietnam_era_vets_remaining</code></pre>{:/} | 4 | This sub-field of the Census Date multiple contains the number of <br/>Patients whose period of service indicated Vietnam Era at the end <br/>of the census day (not cumulative) for this treating specialty. | NUMERIC |  | 
**Pass Patients Remaining**{::nomarkdown}<pre><code>  pass_patients_remaining</code></pre>{:/} | 5 | This sub-field of the Census Date multiple contains the number of <br/>Patient on Pass (AA<96) Remaining at the end of the census day <br/>(not cumulative) for this treating specialty. | NUMERIC |  | 
**Aa Patients Remaining**{::nomarkdown}<pre><code>  aa_patients_remaining</code></pre>{:/} | 6 | This sub-field of the Census Date multiple contains the number of <br/>AA (Authorized Absence) Patient's Remaining at the end of the <br/>census day (not cumulative) for this treating specialty. | NUMERIC |  | 
**Ua Patients Remaining**{::nomarkdown}<pre><code>  ua_patients_remaining</code></pre>{:/} | 7 | This sub-field of the Census Date multiple contains the number of <br/>UA (Unauthorized Absence) Patient's Remaining at the end of the <br/>census day (not cumulative) for this treating specialty. | NUMERIC |  | 
**Asih Patients Remaining**{::nomarkdown}<pre><code>  asih_patients_remaining</code></pre>{:/} | 8 | This sub-field of the Census Date multiple contains the number of <br/>ASIH (Absent Sick In Hospital) Patient's Remaining at the end of <br/>the census day (not cumulative for this treating specialty. | NUMERIC |  | 
**One Day Discharges**{::nomarkdown}<pre><code>  one_day_discharges</code></pre>{:/} | 11 | This sub-field of the Census field multiple contains the number of <br/>One Date Discharges (patients who were discharged with admission <br/>on the same day) at end end of the census day (not cumulative) <br/>for this treating specialty. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}