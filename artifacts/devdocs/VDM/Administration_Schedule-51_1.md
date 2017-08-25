---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Administration_Schedule-51_1<br/>
<a name="top"></a>
# Administration Schedule (51.1)
  Sets of standard times over which medications are to be administered.

**Global:** ^PS(51.1,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |   This a common abbreviation for a schedule.  A schedule is the frequency<br/>for which an action is to take place, such as every eight hours ('Q8H') or<br/>every other day ('QOD'). | STRING | INDEXED<br/>REQUIRED | 
**Standard Administration Times**{::nomarkdown}<pre><code>  standard_administration_times</code></pre>{:/} | 1 | These are the times of day, for this schedule, that the action should<br/>take place.  Use military time (24 hour clock) when entering the times,<br/>separating each time with a '-'.  Be sure that the times are in<br/>ascending order, i.e., 06-14-22 or 0600-1400-2200.  All times must be<br/>the same length, either 2 or 4 digits. | STRING |  | 
**Frequency (in Minutes)**{::nomarkdown}<pre><code>  frequency_in_minutes</code></pre>{:/} | 2 |   The number of minutes between each time that the action should take<br/>place. | NUMERIC |  | 
**Max Days For Orders**{::nomarkdown}<pre><code>  max_days_for_orders</code></pre>{:/} | 2.5 |  | NUMERIC |  | 
**Ward**{::nomarkdown}<pre><code>  ward</code></pre>{:/} | 3 |   This allows the site to enter information pertaining to a schedule on<br/>ward by ward basis.  The wards used are from the WARD LOCATION file. | OBJECT |  | [Ward-51_11](#Ward-51_11)
**Package Prefix**{::nomarkdown}<pre><code>  package_prefix</code></pre>{:/} | 4 |   This is the package prefix (as found in file 9.4) for the package that<br/>will be the primary user of this schedule.  This is used primary as a<br/>screen to allow various packages to enter and edit their own set of<br/>schedules.  This is NOT to be set through the VA FileMan, but only through<br/>the designated utility. | STRING | REQUIRED | 
**Type Of Schedule**{::nomarkdown}<pre><code>  type_of_schedule</code></pre>{:/} | 5 |   This is the type of schedule.  The type of schedule determines how the<br/>schedule will be processed. | ENUMERATION |  | {::nomarkdown}DAY OF THE WEEK-RANGE: <em><strong>DR</strong></em><br/>PRN: <em><strong>P</strong></em><br/>SHIFT: <em><strong>S</strong></em><br/>CONTINUOUS: <em><strong>C</strong></em><br/>ONE-TIME: <em><strong>O</strong></em><br/>DAY OF THE WEEK: <em><strong>D</strong></em><br/>RANGE: <em><strong>R</strong></em><br/>ON CALL: <em><strong>OC</strong></em>{:/}
**Standard Shifts**{::nomarkdown}<pre><code>  standard_shifts</code></pre>{:/} | 6 |   This is the standard shift (or shifts) which pertain to this schedule.  If<br/>there is more than one shift, separate them with dashes (i.e., 'M-E'). | STRING |  | 
**Hospital Location**{::nomarkdown}<pre><code>  hospital_location</code></pre>{:/} | 7 |   This allows the site to enter information pertaining to a schedule on<br/>hospital location by hospital location basis.  The wards used are from the<br/>HOSPITAL LOCATION file. | OBJECT |  | [Hospital_Location-51_17](#Hospital_Location-51_17)
**Outpatient Expansion**{::nomarkdown}<pre><code>  outpatient_expansion</code></pre>{:/} | 8 | This is the expansion for this Administration Schedule to be use in the Outpatient Pharmacy. | STRING |  | 
**Other Language Expansion**{::nomarkdown}<pre><code>  other_language_expansion</code></pre>{:/} | 8.1 | This field is used to store the other language expansion. | STRING |  | 
**Exclude From All Dosing Checks**{::nomarkdown}<pre><code>  exclude_from_all_dosing_checks</code></pre>{:/} | 9 | If this field is set to '1' or 'Yes', no dosing checks will be performed<br/>for any medication orders entered in Computerized Patient Record System<br/>(CPRS), Inpatient Medications, or Outpatient Pharmacy, that contain this<br/>schedule. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Exclude From Daily Dose Check**{::nomarkdown}<pre><code>  exclude_from_daily_dose_check</code></pre>{:/} | 10 | If this field is set to '1' or 'Yes', a daily dose range check will not be<br/>performed for any medication orders entered in Computerized Patient Record<br/>System (CPRS), Inpatient Medications, or Outpatient Pharmacy, that contain<br/>this schedule. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Ward-51_11"></a>Ward (51.11)

<dl>
<dt>ID</dt><dd>Ward-51_11</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Ward**{::nomarkdown}<pre><code>  ward</code></pre>{:/} | .01 |   Ward for which a special set of administration times for this schedule<br/>pertain. | POINTER | REQUIRED | [Ward_Location-42](Ward_Location-42)
**Ward Administration Times**{::nomarkdown}<pre><code>  ward_administration_times</code></pre>{:/} | 1 |   This is the times of the day, for this schedule and especially for this<br/>ward, that the action should take place.  Use military time (24 hour clock)<br/>when entering the times, separating each time with a '-'.  Be sure that<br/>the times are in ascending order, i.e. 06-14-22 or 0600-1400-2200.  All<br/>times must be the same length, either 2 or 4 digits. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Hospital_Location-51_17"></a>Hospital Location (51.17)

<dl>
<dt>ID</dt><dd>Hospital_Location-51_17</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Hospital Location**{::nomarkdown}<pre><code>  hospital_location</code></pre>{:/} | .01 |   This is the hospital location for which this administration schedule is<br/>applicable. | POINTER | INDEXED<br/>REQUIRED | [Hospital_Location-44](Hospital_Location-44)
**Administration Times**{::nomarkdown}<pre><code>  administration_times</code></pre>{:/} | 1 |   This is a set administration times for this<br/>schedule that are specific to this hospital<br/>location.  This used whenever an area of the<br/>medical center uses a set of administration<br/>times for this schedule that is different<br/>than the standard set of administration times<br/>entered for this schedule. | STRING |  | 
**Shifts**{::nomarkdown}<pre><code>  shifts</code></pre>{:/} | 2 |   This is a set of shifts for this schedule that are specific to this<br/>hospital location.  If there is more than one shift, they must be separated<br/>by dashes (i.e. 'M-E').<br/>  This is used whenever an area of the medical center uses a set of shifts<br/>for this schedule that is different than the standard set of shifts entered<br/>for this schedule. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}