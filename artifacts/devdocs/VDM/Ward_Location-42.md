---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Ward_Location-42<br/>
<a name="top"></a>
# Ward Location (42)
This file contains all the facility ward locations and their related data, i.e., Operating Beds,  Bedsection, etc.  The wards  are created/edited using the WARD DEFINITION option of the ADT module. WARD DEFINITION option of the ADT module. contains all statistical data, by date, necessary for the computation of the daily Bed Status report.

**Global:** ^DIC(42,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Enter in this field the name of the ward location as selectable using<br/>bed control options in MAS.  Mixing ward names that are pure<br/>numbers (4,5,6...) with ward names that are alphabetic (A,B,C...) or<br/> with ward names that combine numbers with<br/>alphas (4A, 4B, 5C...) may yield unexpected results when printing <br/>output sorted by ward. | STRING | INDEXED<br/>REQUIRED | 
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | .015 | Enter the division at which this ward is located. | POINTER |  | [Medical_Center_Division-40_8](Medical_Center_Division-40_8)
**Specialty**{::nomarkdown}<pre><code>  specialty</code></pre>{:/} | .017 | Enter the PTF specialty that this ward is assign to.  The specialty<br/>and its MPCR number will be transmitted to Austin as part of the N501<br/>and N535 transactions.  This information is sent in the physcial<br/>specialty and physcial MPCR elements of those transactions. | POINTER | REQUIRED | [Specialty-42_4](Specialty-42_4)
**Bedsection**{::nomarkdown}<pre><code>  bedsection</code></pre>{:/} | .02 | Enter 2-10 characters describing the bedsection of this ward. | STRING | REQUIRED | 
**Service**{::nomarkdown}<pre><code>  service</code></pre>{:/} | .03 | Enter the service of the ward.  Choose from the available list.  This<br/>service is used by various MAS reports to determine how inpatient stays<br/>on this ward should be counted.  This should be answered carefully. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}NON-COUNT: <em><strong>NC</strong></em><br/>REHAB MEDICINE: <em><strong>R</strong></em><br/>SPINAL CORD INJURY: <em><strong>SCI</strong></em><br/>PSYCHIATRY: <em><strong>P</strong></em><br/>NEUROLOGY: <em><strong>NE</strong></em><br/>INTERMEDIATE MED: <em><strong>I</strong></em><br/>MEDICINE: <em><strong>M</strong></em><br/>DOMICILIARY: <em><strong>D</strong></em><br/>SURGERY: <em><strong>S</strong></em><br/>BLIND REHAB: <em><strong>B</strong></em><br/>NHCU: <em><strong>NH</strong></em>{:/}
**Rai/mds Ward**{::nomarkdown}<pre><code>  rai_mds_ward</code></pre>{:/} | .035 | This field provides a parameter to determine whether HL7 messages should <br/>be generated and sent for patients in this ward to the RAI/MDS COTS<br/>system. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Print Ward On Wristband**{::nomarkdown}<pre><code>  print_ward_on_wristband</code></pre>{:/} | .04 | This field determines if the ward location is printed on the patient's<br/>wristband.  If it is answered 'NO', it will not print, otherwise it will. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Fy Target**{::nomarkdown}<pre><code>  fy_target</code></pre>{:/} | .07 | Enter the target number of patients to be deen during a particular fiscal<br/>year. | NUMERIC |  | 
**Seriously Ill**{::nomarkdown}<pre><code>  seriously_ill</code></pre>{:/} | .09 | If patients seen on this ward are typically seriously ill, enter yes here.<br/>When admitting or transferring patients to this ward their status will be<br/>changed to seriously ill (unless the users chooses otherwise). | ENUMERATION |  | {::nomarkdown}INCLUDE ON SERIOUSLY ILL LIST: <em><strong>1</strong></em>{:/}
**Terminal**{::nomarkdown}<pre><code>  terminal</code></pre>{:/} | .1 | Enter the device number ($I value) on which inpatient reports for this<br/>ward should print. | NUMERIC |  | 
**Primary Location**{::nomarkdown}<pre><code>  primary_location</code></pre>{:/} | .15 | If this field is left blank, the primary location on the Bed Status Report <br/>will be 'UNKNOWN'.  You may group different wards together for a 'mini'<br/>Bed Status Report, examples of what you might want to group are wards <br/>in the same physical location or wards of the same treating specialty, etc. | STRING |  | 
**Intermediate Medicine - Ltc**{::nomarkdown}<pre><code>  intermediate_medicine__ltc</code></pre>{:/} | .17 | Intermediate Medicine Service can provide both acute care and long term<br/>care.  The long term care wards must utilize the RAI/MDS tool.  Therefore,<br/>this field is needed to distinguish between the acute care and long term<br/>care wards.  This field only applies to those wards that have a service of<br/>"INTERMEDIATE MED".  When this field contains a "1" representing "Yes",<br/>the business rules that apply to a nursing home patient will be followed<br/>for patients in this ward.  For example, a patient in this ward requiring<br/>acute care will need to be sent Absent Sick In Hospital (ASIH) for no<br/>longer than 30 days.  Patient will be discharged from this ward if he<br/>exceeds the 30 day timeframe. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 1 | This multiple contains all alternate names by which this ward location is<br/>known.  At any WARD LOCATION prompt, either the name of the ward or one<br/>of the synonyms can be entered. | STRING |  | 
**Hospital Location File Pointer**{::nomarkdown}<pre><code>  hospital_location_file_pointer</code></pre>{:/} | 44 | Enter the entry in the hospital location which this ward is associated<br/>with.  This is defined automatically when setting up a ward through the<br/>'Ward Definition' option.  It MUST NOT BE EDITED!! | POINTER | REQUIRED | [Hospital_Location-44](Hospital_Location-44)
**Authorized Beds Date**{::nomarkdown}<pre><code>  authorized_beds_date</code></pre>{:/} | 100 | This multiple contains a history of the number of CO-authorized beds for<br/>this ward broken down by date.  Each time a new number is assigned, the<br/>date and the number of beds must be entered here.  This data is utilized<br/>by the gains and lossed and bed status reports. | OBJECT |  | [Authorized_Beds_Date-42_09](#Authorized_Beds_Date-42_09)
**Out-of-service Date**{::nomarkdown}<pre><code>  outofservice_date</code></pre>{:/} | 200 | This multiple contains data on when a ward was placed out-of-service and<br/>returned to service.  This multiple also contains information on the number<br/>of beds that are placed out-of-service at any given time. | OBJECT |  | [Outofservice_Date-42_08](#Outofservice_Date-42_08)
**G&amp;l Order**{::nomarkdown}<pre><code>  gl_order</code></pre>{:/} | 400 | This field indicates the G&L Order that this Ward will print and<br/>subsequently, the Totals on the Bed Status Report, (e.g. Ward with<br/>a G&L Order of 1.5 would be placed after a Ward with a G&L Order of<br/>1.49 or earlier and would be before a Ward with a G&L Order of 1.51<br/>or greater). This G&L Order placement has a direct impact on the way<br/>the totals calculate on the Bed Status Report. | NUMERIC | INDEXED | 
**Totals**{::nomarkdown}<pre><code>  totals</code></pre>{:/} | 401 | This field is a multiple and is directly related to the G&L Order field.  <br/>The information contained in this multiple is utilized on the Bed Status <br/>Report. | OBJECT |  | [Totals-42_05](#Totals-42_05)
**G&amp;l Header**{::nomarkdown}<pre><code>  gl_header</code></pre>{:/} | 804 | This field is free text (1 to 89 characters in length) and contains the <br/>name that you want to print for this ward on the Bed Status Report. | STRING |  | 
***nserv**{::nomarkdown}<pre><code>  nserv</code></pre>{:/} | 1491 | Enter the nursing service associated with this ward. | ENUMERATION | DEPRECATED | 

## Sub-Files
### <a name="Authorized_Beds_Date-42_09"></a>Authorized Beds Date (42.09)

<dl>
<dt>ID</dt><dd>Authorized_Beds_Date-42_09</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Authorized Beds Date**{::nomarkdown}<pre><code>  authorized_beds_date</code></pre>{:/} | .01 | Enter the date on which these authorized beds were assigned.  This<br/>assignment comes from VA Central Office. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Number Of Authorized Beds**{::nomarkdown}<pre><code>  number_of_authorized_beds</code></pre>{:/} | 2 | Enter in this field the number of beds this ward is authorized.  This<br/>data is used by the G&L and bed status reports. | NUMERIC | REQUIRED | 

[&uarr; Return to top](#top)<br/>


### <a name="Outofservice_Date-42_08"></a>Out-of-service Date (42.08)

<dl>
<dt>ID</dt><dd>Outofservice_Date-42_08</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Out-of-service Date(s)**{::nomarkdown}<pre><code>  outofservice_dates</code></pre>{:/} | .01 | Enter the first full day for which this ward was placed out of service.<br/>Enter the date only (no time) and do not include a day which has any<br/>inpatient activity as this would affect the gains and losses sheet. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Reason**{::nomarkdown}<pre><code>  reason</code></pre>{:/} | .02 | Enter the reason this ward (or part of a ward) was placed out of service.<br/>This is a pointer to the MAS OUT-OF-SERVICE file.  These reasons are<br/>determined by MAS VACO. | POINTER | REQUIRED | [Mas_Outofservice-405_5](Mas_Outofservice-405_5)
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | .03 | If, when placing an entire ward or part of a ward out of service, you<br/>wish to enter additional information as to the reason, it may be entered<br/>here. | STRING |  | 
**Return To Service Date**{::nomarkdown}<pre><code>  return_to_service_date</code></pre>{:/} | .04 | Enter date that this ward was returned or expected to return to service.<br/>If the return to service date is unknown or this bed is being placed<br/>out-of-service indefinately, leave this field blank. | DATE-TIME |  | 
**Oos Display End Date**{::nomarkdown}<pre><code>  oos_display_end_date</code></pre>{:/} | .05 | Enter here the date on which this ward should cease to appear on the<br/>G&L or bed status report. | DATE-TIME |  | 
**Is Entire Ward Out Of Service?**{::nomarkdown}<pre><code>  is_entire_ward_out_of_service</code></pre>{:/} | .06 | Enter YES here if the entire ward has been placed out-of-service.  If only<br/>a certain number of beds is being placed out-of-service, enter NO here. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Display Oos On G&amp;l**{::nomarkdown}<pre><code>  display_oos_on_gl</code></pre>{:/} | .07 | If you would like to have this out-of-service period display on the G&L,<br/>answer YES.  Otherwise, answer NO. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Show On Bed Status Report**{::nomarkdown}<pre><code>  show_on_bed_status_report</code></pre>{:/} | .08 | If you would like this out-of-service period to appear on the bed status<br/>report, answer YES.  Otherwise, answer NO. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Include Stat&#x27;s On Bed Status**{::nomarkdown}<pre><code>  include_stats_on_bed_status</code></pre>{:/} | .09 | If you would like the statistics for this out-of-service period to be<br/>calculated into the bed status report, respond YES here.  Otherwise,<br/>respond NO. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Bed Status Display End Date**{::nomarkdown}<pre><code>  bed_status_display_end_date</code></pre>{:/} | .1 | Enter the date on which you would like this out-of-service period to<br/>cease to display on the bed status report. | DATE-TIME |  | 
**Number Beds Oos**{::nomarkdown}<pre><code>  number_beds_oos</code></pre>{:/} | .11 | If the entire ward is not placed out-of-service, enter the number of<br/>individual beds being placed out-of-service. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Totals-42_05"></a>Totals (42.05)

<dl>
<dt>ID</dt><dd>Totals-42_05</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Level**{::nomarkdown}<pre><code>  level</code></pre>{:/} | .001 | This sub-field of the Totals multiple is the .001 and contains the IFN <br/>place holder for this multiple.  This numeric can be a whole number <br/>between 1 and 9.  The first level is the first sub-totaling that is done,  <br/>the second level is the second sub-totaling (this includes the previous <br/>level one) this level sub-totaling can be repeated back to the previously <br/>equal level and can contain a grand total with 9 sub-total levels. | IEN |  | 
**Totals**{::nomarkdown}<pre><code>  totals</code></pre>{:/} | .01 |  | STRING | REQUIRED | 
**Target**{::nomarkdown}<pre><code>  target</code></pre>{:/} | 1 | This field contains the planned Average Daily Census (ADC) <br/>that is printed on the Average Daily Census Section of the <br/>Bed Status Report. | NUMERIC |  | 
**Adc Cum**{::nomarkdown}<pre><code>  adc_cum</code></pre>{:/} | 2 | This field contains the actual Average Daily Census (ADC)  <br/>that is printed on the Average Daily Census Section of the <br/>Bed Status Report. | NUMERIC |  | 
**Print In Cumulative Totals**{::nomarkdown}<pre><code>  print_in_cumulative_totals</code></pre>{:/} | 2.5 | This field is a set of codes '0' for no and '1' for yes, it is used <br/>to indicate whether you want this level (totals) to be used in <br/>the Cumulative Totals Section of the Bed Status Report. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Plan Cum Disch Month**{::nomarkdown}<pre><code>  plan_cum_disch_month</code></pre>{:/} | 3 | This field is a multiple that adds new entry without asking. | OBJECT |  | [Plan_Cum_Disch_Month-42_07](#Plan_Cum_Disch_Month-42_07)
**Cum Title**{::nomarkdown}<pre><code>  cum_title</code></pre>{:/} | 4 | This field is free text (1 to 20 characters in length) and is the title <br/>you want to print for the Cumulative Totals Section of the Bed Status <br/>Report. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Plan_Cum_Disch_Month-42_07"></a>Plan Cum Disch Month (42.07)

<dl>
<dt>ID</dt><dd>Plan_Cum_Disch_Month-42_07</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Plan Cum Disch Month**{::nomarkdown}<pre><code>  plan_cum_disch_month</code></pre>{:/} | .01 | This sub-field of the multiple 'Plan Cum Disch Month' field is also  <br/>a multiple and contains a set of codes for the month for which <br/>you would like to enter the planned cumulative discharges. | ENUMERATION | REQUIRED | {::nomarkdown}MAR: <em><strong>6</strong></em><br/>FEB: <em><strong>5</strong></em><br/>AUG: <em><strong>11</strong></em><br/>SEP: <em><strong>12</strong></em><br/>APR: <em><strong>7</strong></em><br/>JUN: <em><strong>9</strong></em><br/>JUL: <em><strong>10</strong></em><br/>JAN: <em><strong>4</strong></em><br/>MAY: <em><strong>8</strong></em><br/>NOV: <em><strong>2</strong></em><br/>DEC: <em><strong>3</strong></em><br/>OCT: <em><strong>1</strong></em>{:/}
**Planned Discharges For Month**{::nomarkdown}<pre><code>  planned_discharges_for_month</code></pre>{:/} | 1 | This sub-field of the multiple 'Plan Cum Disch Month' field contains <br/>the number of discharges planned for the month selected from 0 to 9999. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}