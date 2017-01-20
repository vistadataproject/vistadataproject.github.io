---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Ward_Location-42 

 property | value 
--- | --- 
 id | Ward_Location-42
 fmId | 42
 label | Ward Location
 location | ^DIC(42,
 description | {::nomarkdown}This file contains all the facility ward locations and their<br/>related data, i.e., Operating Beds,  Bedsection, etc.  The wards <br/>are created/edited using the WARD DEFINITION option of the ADT module.<br/>WARD DEFINITION option of the ADT module.<br/>contains all statistical data, by date, necessary for the<br/>computation of the daily Bed Status report.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Enter in this field the name of the ward location as selectable using<br/>bed control options in MAS.  Mixing ward names that are pure<br/>numbers (4,5,6...) with ward names that are alphabetic (A,B,C...) or<br/> with ward names that combine numbers with<br/>alphas (4A, 4B, 5C...) may yield unexpected results when printing <br/>output sorted by ward.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| division | .015 | Division | {::nomarkdown}Enter the division at which this ward is located.{:/} | POINTER |  |  | Medical_Center_Division-40_8 | 
| specialty | .017 | Specialty | {::nomarkdown}Enter the PTF specialty that this ward is assign to.  The specialty<br/>and its MPCR number will be transmitted to Austin as part of the N501<br/>and N535 transactions.  This information is sent in the physcial<br/>specialty and physcial MPCR elements of those transactions.{:/} | POINTER |  | REQUIRED | Specialty-42_4 | 
| bedsection | .02 | Bedsection | {::nomarkdown}Enter 2-10 characters describing the bedsection of this ward.{:/} | STRING |  | REQUIRED |  | 
| service | .03 | Service | {::nomarkdown}Enter the service of the ward.  Choose from the available list.  This<br/>service is used by various MAS reports to determine how inpatient stays<br/>on this ward should be counted.  This should be answered carefully.{:/} | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>NC</dt><dd>NON-COUNT</dd><dt>R</dt><dd>REHAB MEDICINE</dd><dt>SCI</dt><dd>SPINAL CORD INJURY</dd><dt>P</dt><dd>PSYCHIATRY</dd><dt>NE</dt><dd>NEUROLOGY</dd><dt>I</dt><dd>INTERMEDIATE MED</dd><dt>M</dt><dd>MEDICINE</dd><dt>D</dt><dd>DOMICILIARY</dd><dt>S</dt><dd>SURGERY</dd><dt>B</dt><dd>BLIND REHAB</dd><dt>NH</dt><dd>NHCU</dd></dl>{:/} | 
| rai_mds_ward | .035 | Rai/mds Ward | {::nomarkdown}This field provides a parameter to determine whether HL7 messages should <br/>be generated and sent for patients in this ward to the RAI/MDS COTS<br/>system.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_ward_on_wristband | .04 | Print Ward On Wristband | {::nomarkdown}This field determines if the ward location is printed on the patient's<br/>wristband.  If it is answered 'NO', it will not print, otherwise it will.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| fy_target | .07 | Fy Target | {::nomarkdown}Enter the target number of patients to be deen during a particular fiscal<br/>year.{:/} | NUMERIC |  |  |  | 
| seriously_ill | .09 | Seriously Ill | {::nomarkdown}If patients seen on this ward are typically seriously ill, enter yes here.<br/>When admitting or transferring patients to this ward their status will be<br/>changed to seriously ill (unless the users chooses otherwise).{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INCLUDE ON SERIOUSLY ILL LIST</dd></dl>{:/} | 
| terminal | .1 | Terminal | {::nomarkdown}Enter the device number ($I value) on which inpatient reports for this<br/>ward should print.{:/} | NUMERIC |  |  |  | 
| primary_location | .15 | Primary Location | {::nomarkdown}If this field is left blank, the primary location on the Bed Status Report <br/>will be 'UNKNOWN'.  You may group different wards together for a 'mini'<br/>Bed Status Report, examples of what you might want to group are wards <br/>in the same physical location or wards of the same treating specialty, etc.{:/} | STRING |  |  |  | 
| intermediate_medicine__ltc | .17 | Intermediate Medicine - Ltc | {::nomarkdown}Intermediate Medicine Service can provide both acute care and long term<br/>care.  The long term care wards must utilize the RAI/MDS tool.  Therefore,<br/>this field is needed to distinguish between the acute care and long term<br/>care wards.  This field only applies to those wards that have a service of<br/>\INTERMEDIATE MED\.  When this field contains a \1\ representing \Yes\,<br/>the business rules that apply to a nursing home patient will be followed<br/>for patients in this ward.  For example, a patient in this ward requiring<br/>acute care will need to be sent Absent Sick In Hospital (ASIH) for no<br/>longer than 30 days.  Patient will be discharged from this ward if he<br/>exceeds the 30 day timeframe.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| synonym | 1 | Synonym | {::nomarkdown}This multiple contains all alternate names by which this ward location is<br/>known.  At any WARD LOCATION prompt, either the name of the ward or one<br/>of the synonyms can be entered.{:/} | [STRING] |  |  |  | 
| hospital_location_file_pointer | 44 | Hospital Location File Pointer | {::nomarkdown}Enter the entry in the hospital location which this ward is associated<br/>with.  This is defined automatically when setting up a ward through the<br/>'Ward Definition' option.  It MUST NOT BE EDITED!!{:/} | POINTER |  | REQUIRED | [Hospital_Location-44](Hospital_Location-44.md) | 
| authorized_beds_date | 100 | Authorized Beds Date | {::nomarkdown}This multiple contains a history of the number of CO-authorized beds for<br/>this ward broken down by date.  Each time a new number is assigned, the<br/>date and the number of beds must be entered here.  This data is utilized<br/>by the gains and lossed and bed status reports.{:/} | [OBJECT] |  |  | [Authorized_Beds_Date-42_09](#Authorized_Beds_Date-42_09)  | 
| outofservice_date | 200 | Out-of-service Date | {::nomarkdown}This multiple contains data on when a ward was placed out-of-service and<br/>returned to service.  This multiple also contains information on the number<br/>of beds that are placed out-of-service at any given time.{:/} | [OBJECT] |  |  | [Outofservice_Date-42_08](#Outofservice_Date-42_08)  | 
| gl_order | 400 | G&l Order | {::nomarkdown}This field indicates the G&L Order that this Ward will print and<br/>subsequently, the Totals on the Bed Status Report, (e.g. Ward with<br/>a G&L Order of 1.5 would be placed after a Ward with a G&L Order of<br/>1.49 or earlier and would be before a Ward with a G&L Order of 1.51<br/>or greater). This G&L Order placement has a direct impact on the way<br/>the totals calculate on the Bed Status Report.{:/} | NUMERIC |  | INDEXED |  | 
| totals | 401 | Totals | {::nomarkdown}This field is a multiple and is directly related to the G&L Order field.  <br/>The information contained in this multiple is utilized on the Bed Status <br/>Report.{:/} | [OBJECT] |  |  | [Totals-42_05](#Totals-42_05)  | 
| gl_header | 804 | G&l Header | {::nomarkdown}This field is free text (1 to 89 characters in length) and contains the <br/>name that you want to print for this ward on the Bed Status Report.{:/} | STRING |  |  |  | 
| nserv | 1491 | *nserv | {::nomarkdown}Enter the nursing service associated with this ward.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl></dl>{:/} | 

## <a name="Authorized_Beds_Date-42_09"></a>Authorized_Beds_Date-42_09 

 property | value 
--- | --- 
 id | Authorized_Beds_Date-42_09
 label | Authorized Beds Date

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| authorized_beds_date | .01 | Authorized Beds Date | {::nomarkdown}Enter the date on which these authorized beds were assigned.  This<br/>assignment comes from VA Central Office.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| number_of_authorized_beds | 2 | Number Of Authorized Beds | {::nomarkdown}Enter in this field the number of beds this ward is authorized.  This<br/>data is used by the G&L and bed status reports.{:/} | NUMERIC |  | REQUIRED |  | 

## <a name="Outofservice_Date-42_08"></a>Outofservice_Date-42_08 

 property | value 
--- | --- 
 id | Outofservice_Date-42_08
 label | Out-of-service Date

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| outofservice_dates | .01 | Out-of-service Date(s) | {::nomarkdown}Enter the first full day for which this ward was placed out of service.<br/>Enter the date only (no time) and do not include a day which has any<br/>inpatient activity as this would affect the gains and losses sheet.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| reason | .02 | Reason | {::nomarkdown}Enter the reason this ward (or part of a ward) was placed out of service.<br/>This is a pointer to the MAS OUT-OF-SERVICE file.  These reasons are<br/>determined by MAS VACO.{:/} | POINTER |  | REQUIRED | Mas_Outofservice-405_5 | 
| comment | .03 | Comment | {::nomarkdown}If, when placing an entire ward or part of a ward out of service, you<br/>wish to enter additional information as to the reason, it may be entered<br/>here.{:/} | STRING |  |  |  | 
| return_to_service_date | .04 | Return To Service Date | {::nomarkdown}Enter date that this ward was returned or expected to return to service.<br/>If the return to service date is unknown or this bed is being placed<br/>out-of-service indefinately, leave this field blank.{:/} | DATE-TIME |  |  |  | 
| oos_display_end_date | .05 | Oos Display End Date | {::nomarkdown}Enter here the date on which this ward should cease to appear on the<br/>G&L or bed status report.{:/} | DATE-TIME |  |  |  | 
| is_entire_ward_out_of_service | .06 | Is Entire Ward Out Of Service? | {::nomarkdown}Enter YES here if the entire ward has been placed out-of-service.  If only<br/>a certain number of beds is being placed out-of-service, enter NO here.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| display_oos_on_gl | .07 | Display Oos On G&l | {::nomarkdown}If you would like to have this out-of-service period display on the G&L,<br/>answer YES.  Otherwise, answer NO.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| show_on_bed_status_report | .08 | Show On Bed Status Report | {::nomarkdown}If you would like this out-of-service period to appear on the bed status<br/>report, answer YES.  Otherwise, answer NO.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| include_stats_on_bed_status | .09 | Include Stat's On Bed Status | {::nomarkdown}If you would like the statistics for this out-of-service period to be<br/>calculated into the bed status report, respond YES here.  Otherwise,<br/>respond NO.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| bed_status_display_end_date | .1 | Bed Status Display End Date | {::nomarkdown}Enter the date on which you would like this out-of-service period to<br/>cease to display on the bed status report.{:/} | DATE-TIME |  |  |  | 
| number_beds_oos | .11 | Number Beds Oos | {::nomarkdown}If the entire ward is not placed out-of-service, enter the number of<br/>individual beds being placed out-of-service.{:/} | NUMERIC |  |  |  | 

## <a name="Totals-42_05"></a>Totals-42_05 

 property | value 
--- | --- 
 id | Totals-42_05
 label | Totals

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| level | .001 | Level | {::nomarkdown}This sub-field of the Totals multiple is the .001 and contains the IFN <br/>place holder for this multiple.  This numeric can be a whole number <br/>between 1 and 9.  The first level is the first sub-totaling that is done,  <br/>the second level is the second sub-totaling (this includes the previous <br/>level one) this level sub-totaling can be repeated back to the previously <br/>equal level and can contain a grand total with 9 sub-total levels.{:/} | IEN |  |  |  | 
| totals | .01 | Totals |  | STRING |  | REQUIRED |  | 
| target | 1 | Target | {::nomarkdown}This field contains the planned Average Daily Census (ADC) <br/>that is printed on the Average Daily Census Section of the <br/>Bed Status Report.{:/} | NUMERIC |  |  |  | 
| adc_cum | 2 | Adc Cum | {::nomarkdown}This field contains the actual Average Daily Census (ADC)  <br/>that is printed on the Average Daily Census Section of the <br/>Bed Status Report.{:/} | NUMERIC |  |  |  | 
| print_in_cumulative_totals | 2.5 | Print In Cumulative Totals | {::nomarkdown}This field is a set of codes '0' for no and '1' for yes, it is used <br/>to indicate whether you want this level (totals) to be used in <br/>the Cumulative Totals Section of the Bed Status Report.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| plan_cum_disch_month | 3 | Plan Cum Disch Month | {::nomarkdown}This field is a multiple that adds new entry without asking.{:/} | [OBJECT] |  |  | {id:Plan_Cum_Disch_Month-42_07,fmId:42.07,label:Plan Cum Disch Month,properties:[{id:plan_cum_disch_month,fmId:.01,label:Plan Cum Disch Month,description:This sub-field of the multiple 'Plan Cum Disch Month' field is also  \ra multiple and contains a set of codes for the month for which \ryou would like to enter the planned cumulative discharges.,datatype:ENUMERATION,required:true,range:{MAR:6,FEB:5,AUG:11,SEP:12,APR:7,JUN:9,JUL:10,JAN:4,MAY:8,NOV:2,DEC:3,OCT:1}},{id:planned_discharges_for_month,fmId:1,label:Planned Discharges For Month,description:This sub-field of the multiple 'Plan Cum Disch Month' field contains \rthe number of discharges planned for the month selected from 0 to 9999.,datatype:NUMERIC}]} | 
| cum_title | 4 | Cum Title | {::nomarkdown}This field is free text (1 to 20 characters in length) and is the title <br/>you want to print for the Cumulative Totals Section of the Bed Status <br/>Report.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:13:02 pm</p>{:/}