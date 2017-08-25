---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Hospital_Location-44<br/>
<a name="top"></a>
# Hospital Location (44)
Contains locations found in the hospital (ie. Wards, Clinics)  *********DO NOT RE-INDEX THIS FILE**********

**Global:** ^SC(

**Domain:** Problems

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Name given by user to any ward, clinic, fileroom, operating room<br/>or other location within a VA facility. | STRING | INDEXED<br/>REQUIRED | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 1 | Abbreviation given by user to any ward, clinic, fileroom, operating<br/>room or other location associated with the NAME. | STRING | INDEXED | 
**Type**{::nomarkdown}<pre><code>  type-2</code></pre>{:/} | 2 | Type of location assigned to entries into this file, i.e. Ward,<br/>Clinic, Fileroom, Operating Room, Other. | ENUMERATION | REQUIRED | {::nomarkdown}NON-CLINIC STOP: <em><strong>N</strong></em><br/>MODULE: <em><strong>M</strong></em><br/>OPERATING ROOM: <em><strong>OR</strong></em><br/>OTHER LOCATION: <em><strong>Z</strong></em><br/>CLINIC: <em><strong>C</strong></em><br/>FILE AREA: <em><strong>F</strong></em><br/>IMAGING: <em><strong>I</strong></em><br/>WARD: <em><strong>W</strong></em>{:/}
**Type Extension**{::nomarkdown}<pre><code>  type_extension</code></pre>{:/} | 2.1 | Type extension of a location assigned to entries into this file<br/>to insure user is not allowed to use a previously designated<br/>Ward Location as a Clinic Location for example. | POINTER | REQUIRED | Location_Type-40_9
**Institution**{::nomarkdown}<pre><code>  institution</code></pre>{:/} | 3 | Institution name assigned to each entry in this file to identify<br/>where the specific location is. | POINTER |  | [Institution-4](Institution-4)
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | 3.5 | Division name assigned to each entry in this file to identify<br/>wehre the specific location is.  There can be multiple divisions<br/>assigned to an Institution, but only one division per location. | POINTER |  | [Medical_Center_Division-40_8](Medical_Center_Division-40_8)
**Module**{::nomarkdown}<pre><code>  module</code></pre>{:/} | 4 | Module or name of hospital location. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Default Device**{::nomarkdown}<pre><code>  default_device</code></pre>{:/} | 5 | Default device to which information should print for a specific<br/>location.  This field is not currently being utilized. | STRING |  | 
**Disposition Action**{::nomarkdown}<pre><code>  disposition_action</code></pre>{:/} | 6 | A disposition action associated with specific location, i.e.<br/>'0'= none; '1'=appointment record request; '2'=scheduling. | ENUMERATION |  | {::nomarkdown}SCHEDULING: <em><strong>2</strong></em><br/>NONE: <em><strong>0</strong></em><br/>APPOINTMENT REC REQ: <em><strong>1</strong></em>{:/}
**Visit Location**{::nomarkdown}<pre><code>  visit_location</code></pre>{:/} | 7 | Location of visit for specified entry. | STRING |  | 
**Stop Code Number**{::nomarkdown}<pre><code>  stop_code_number</code></pre>{:/} | 8 | Three digit stop code number assigned to specific location.  Each<br/>stop code number represents a type of care or Service/treating<br/>specialty (clinics only). | POINTER | REQUIRED | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Prv. Year Stop Code**{::nomarkdown}<pre><code>  prv_year_stop_code</code></pre>{:/} | 8.1 | Previous year's three digit stop code number that was assigned to<br/>specific location (clinics only). | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Service**{::nomarkdown}<pre><code>  service</code></pre>{:/} | 9 | Service assigned to specific location, i.e. Medicine, Surgery,<br/>Psychiatry, etc. | ENUMERATION | REQUIRED | {::nomarkdown}NONE: <em><strong>0</strong></em><br/>REHAB MEDICINE: <em><strong>R</strong></em><br/>PSYCHIATRY: <em><strong>P</strong></em><br/>NEUROLOGY: <em><strong>N</strong></em><br/>MEDICINE: <em><strong>M</strong></em><br/>SURGERY: <em><strong>S</strong></em>{:/}
**Treating Specialty**{::nomarkdown}<pre><code>  treating_specialty</code></pre>{:/} | 9.5 | Treating specialty assigned a specific location, i.e. neurosurgery,<br/>alcohol/drug rehabilitation, dermatology (specialties within<br/>Services usually). | POINTER | REQUIRED | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)
**Physical Location**{::nomarkdown}<pre><code>  physical_location</code></pre>{:/} | 10 | Physical location of a specific ward or clinic, etc., i.e.<br/>3rd floor,  Wing A. | STRING |  | 
***okc A**{::nomarkdown}<pre><code>  okc_a</code></pre>{:/} | 11 |  | STRING | DEPRECATED | 
***okc B**{::nomarkdown}<pre><code>  okc_b</code></pre>{:/} | 12 |  | STRING | DEPRECATED | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 13 | Synonym or shortened name associated with a specific location. | STRING |  | 
**Special Amis Stop**{::nomarkdown}<pre><code>  special_amis_stop</code></pre>{:/} | 14 | Special AMIS stop associated with a specific location based on<br/>the Service assigned. | ENUMERATION |  | {::nomarkdown}MENTAL HYGEINE: <em><strong>10</strong></em><br/>EMPLOYEE HEALTH: <em><strong>16</strong></em><br/>ALCOHOL TREATMENT: <em><strong>14</strong></em><br/>DAY HOSPITAL: <em><strong>12</strong></em><br/>EMERGENCY UNIT: <em><strong>15</strong></em><br/>DRUG DEPENDANCE: <em><strong>13</strong></em><br/>DAY TREATMENT: <em><strong>11</strong></em>{:/}
**Category Of Visit**{::nomarkdown}<pre><code>  category_of_visit</code></pre>{:/} | 15 | Category of visit associated with a specific location. | STRING |  | 
**Default Provider**{::nomarkdown}<pre><code>  default_provider</code></pre>{:/} | 16 | Default provider or physician that is assigned to specific clinic. | POINTER |  | [New_Person-200](New_Person-200)
**Prohibited Terminal**{::nomarkdown}<pre><code>  prohibited_terminal</code></pre>{:/} | 19 | Terminals that cannot be utilized from specific location. | STRING |  | 
**Agency**{::nomarkdown}<pre><code>  agency</code></pre>{:/} | 23 | Agency associated with specific location, i.e. Veterans Affairs,<br/>Department of Defense, etc. | POINTER |  | Agency-4_11
**Ask For Check In/out Time**{::nomarkdown}<pre><code>  ask_for_check_in_out_time</code></pre>{:/} | 24 | When checking in/out a patient for an appointment, should the<br/>user be prompted for date and time?<br/> <br/>If this field is set to 'YES', the user will be prompted<br/>for the date and time.  The current date and time will be the<br/>default.<br/> <br/>If this field is set to 'NO' or is not entered, the user will<br/>not be prompted and the current date and time will automatically<br/>be entered.<br/> <br/>If an appointment is scheduled retroactively then the system<br/>will use the date and time of the appointment as the check<br/>in/out time.  This date/time will either be entered automatically or<br/>used as a default, depending upon how this parameter is set. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
***clinic Services Resource**{::nomarkdown}<pre><code>  clinic_services_resource</code></pre>{:/} | 29 | This field is used to associate the clinic with a Clinic Services Resource. | STRING | DEPRECATED | 
**Workload Validation At Chk Out**{::nomarkdown}<pre><code>  workload_validation_at_chk_out</code></pre>{:/} | 30 | Yes or 1 will result in a validation being performed on each checked out<br/>encounter for this clinic.  No or zero will stop the validation of the<br/>encounters as they are checked out for this clinic.  This validation is<br/>to help ensure that the workload data is acceptable to the Austin<br/>National Patient Care Database. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Clinic Group (reports)**{::nomarkdown}<pre><code>  clinic_group_reports</code></pre>{:/} | 31 |  | POINTER | INDEXED | Clinic_Group-409_67
**Ward Location File Pointer**{::nomarkdown}<pre><code>  ward_location_file_pointer</code></pre>{:/} | 42 | If location is a ward, this is the file pointer to the Ward<br/>Location File, File 42 in which this location is also stored. | POINTER |  | [Ward_Location-42](Ward_Location-42)
**Occasion Of Service Clinic?**{::nomarkdown}<pre><code>  occasion_of_service_clinic</code></pre>{:/} | 50.01 | This field is non-editable.  It is created automatically by a scheduling<br/>API and must NOT be edited by the site.  It designates clinic locations<br/>added by ancillary packages for occasions of service.  These clinics can<br/>not be edited through Scheduling options.  They can only be altered using<br/>the API. | BOOLEAN | INDEXED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Oos Calling Package**{::nomarkdown}<pre><code>  oos_calling_package</code></pre>{:/} | 50.02 | This field stores the package which created the occasion of service<br/>location.  This field should NOT be altered by the site.  It is uneditable<br/>through FileMan. | POINTER |  | [Package-9_4](Package-9_4)
**Patient Friendly Name**{::nomarkdown}<pre><code>  patient_friendly_name</code></pre>{:/} | 60 | Populate this field with a description of the clinic that will be<br/>meaningful to patients. Do not enter any sensitive patient information <br/>in this field such as HIV CLINIC as an example. | STRING |  | 
**Direct Patient Scheduling?**{::nomarkdown}<pre><code>  direct_patient_scheduling</code></pre>{:/} | 61 | This field will determine if patients can self-schedule into this <br/>clinic. A "Yes" in this field will enable patients to directly schedule <br/>appointments into this clinic. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Display Clin Appt To Patients?**{::nomarkdown}<pre><code>  display_clin_appt_to_patients</code></pre>{:/} | 62 | This field will determine if the clinic appointment information will be <br/>displayed to patients. A "Yes" in this field will enable patients to <br/>see their appointments in this clinic. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Telephone**{::nomarkdown}<pre><code>  telephone</code></pre>{:/} | 99 | Telephone number for specific location. | STRING |  | 
**Telephone Extension**{::nomarkdown}<pre><code>  telephone_extension</code></pre>{:/} | 99.1 | Clinic telephone extension number where patients can call directly. | STRING |  | 
**Associated Location Types**{::nomarkdown}<pre><code>  associated_location_types</code></pre>{:/} | 101 |  | POINTER |  | Location_Type-40_9
**Appointment**{::nomarkdown}<pre><code>  appointment</code></pre>{:/} | 1900 | Appointment multiple stores all data related to outpatient visits<br/>including basic demographic data on a patient, appointment data,<br/>lab, x-ray and EKG appointment dates/times. | OBJECT |  | [Appointment-44_001](#Appointment-44_001)
**Cancel Date/time Begin**{::nomarkdown}<pre><code>  cancel_date_time_begin</code></pre>{:/} | 1901 | Cancellation date/time beginning for a clinic. | OBJECT |  | [Cancel_Date_time_Begin-44_05](#Cancel_Date_time_Begin-44_05)
**Chart Check**{::nomarkdown}<pre><code>  chart_check</code></pre>{:/} | 1906 | Does user want the chart checked for availability for this clinic. | OBJECT |  | [Chart_Check-44_006](#Chart_Check-44_006)
**Special Instructions**{::nomarkdown}<pre><code>  special_instructions</code></pre>{:/} | 1910 | Special instructions (free text) entered by clerk at time of making<br/>the appointment. | STRING |  | 
**Length Of App&#x27;t**{::nomarkdown}<pre><code>  length_of_appt</code></pre>{:/} | 1912 | Length of appointment designated for clinic. | NUMERIC | REQUIRED | 
**Variable App&#x27;ntment Length**{::nomarkdown}<pre><code>  variable_appntment_length</code></pre>{:/} | 1913 | Does the clinic have variable appointment lengths?  Can, if length<br/>of appointment is 10 minutes, user make longer appointments in<br/>increments of 10 at time of making appointment? | ENUMERATION |  | {::nomarkdown}YES, VARIABLE LENGTH: <em><strong>V</strong></em>{:/}
**Hour Clinic Display Begins**{::nomarkdown}<pre><code>  hour_clinic_display_begins</code></pre>{:/} | 1914 | The hour clinic will begin displaying availability (i.e. 8AM). | NUMERIC |  | 
**Hold Sc Slots Until # Of Days**{::nomarkdown}<pre><code>  hold_sc_slots_until_number_of_days</code></pre>{:/} | 1915 | Should service connected slots be held open for a set number of<br/>days?  Service connected veterans have priority over NSC veterans<br/>when scheduling appointments. | NUMERIC |  | 
**Principal Clinic**{::nomarkdown}<pre><code>  principal_clinic</code></pre>{:/} | 1916 | Principal clinic or main clinic assigned to a specific location. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Display Increments Per Hour**{::nomarkdown}<pre><code>  display_increments_per_hour</code></pre>{:/} | 1917 |      This field SHOULD NOT BE EDITED when patterns have been established<br/>using another increment per hour. Editing this field will cause <br/>existing patterns to be erroneous and scheduling conflicts may also occur <br/>if the increments are changed. | ENUMERATION | REQUIRED | {::nomarkdown}15-MIN : <em><strong>4</strong></em><br/>30-MIN : <em><strong>2</strong></em><br/>20-MIN : <em><strong>3</strong></em><br/>60-MIN : <em><strong>1</strong></em><br/>10-MIN : <em><strong>6</strong></em>{:/}
**Overbooks/day Maximum**{::nomarkdown}<pre><code>  overbooks_day_maximum</code></pre>{:/} | 1918 | Number of allowable overbooks per day.  If overbooks are not allowed, the<br/>number should be set to zero. | NUMERIC | REQUIRED | 
**Schedule On Holidays?**{::nomarkdown}<pre><code>  schedule_on_holidays</code></pre>{:/} | 1918.5 | Should the user be able to schedule appointments on holiday's for<br/>specific location? | BOOLEAN |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Copies**{::nomarkdown}<pre><code>  copies</code></pre>{:/} | 1919 | How many copies of appointment lists should be generated for this<br/>clinic? | NUMERIC |  | 
**Availability**{::nomarkdown}<pre><code>  availability</code></pre>{:/} | 1920 | Multiple that stores clinic availability information. | OBJECT |  | [Availability-44_002](#Availability-44_002)
**Availability Flag**{::nomarkdown}<pre><code>  availability_flag</code></pre>{:/} | 1920.9 | Date/time set up for clinic availability. | DATE-TIME |  | 
**Pattern**{::nomarkdown}<pre><code>  pattern</code></pre>{:/} | 1921 | Pattern for clinic availability information. | OBJECT |  | [Pattern-44_005](#Pattern-44_005)
**Special Pattern**{::nomarkdown}<pre><code>  special_pattern</code></pre>{:/} | 1921.5 | Special pattern information (storage of previous clinic patterns<br/>and current one). | OBJECT |  | [Special_Pattern-44_0002](#Special_Pattern-44_0002)
**Sunday Template**{::nomarkdown}<pre><code>  sunday_template</code></pre>{:/} | 1922 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Sundays.  These fields are overridden by patterns entered<br/>for a specific (Sunday) date and stored on the "OST" nodes. | OBJECT |  | [Sunday_Template-44_06](#Sunday_Template-44_06)
**Monday Template**{::nomarkdown}<pre><code>  monday_template</code></pre>{:/} | 1923 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Mondays.  These fields are overridden by patterns entered<br/>for a specific (Monday) date and stored on the "OST" nodes. | OBJECT |  | [Monday_Template-44_07](#Monday_Template-44_07)
**Tuesday Template**{::nomarkdown}<pre><code>  tuesday_template</code></pre>{:/} | 1924 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Tuesdays.  These fields are overridden by patterns entered<br/>for a specific (Tuesday) date and stored on the "OST" nodes. | OBJECT |  | [Tuesday_Template-44_08](#Tuesday_Template-44_08)
**Wednesday Template**{::nomarkdown}<pre><code>  wednesday_template</code></pre>{:/} | 1925 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Wednesdays.  These fields are overridden by patterns entered<br/>for a specific (Wednesday) date and stored on the "OST" nodes. | OBJECT |  | [Wednesday_Template-44_09](#Wednesday_Template-44_09)
**Thursday Template**{::nomarkdown}<pre><code>  thursday_template</code></pre>{:/} | 1926 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Thursdays.  These fields are overridden by patterns entered<br/>for a specific (Thursday) date and stored on the "OST" nodes. | OBJECT |  | [Thursday_Template-44_008](#Thursday_Template-44_008)
**Friday Template**{::nomarkdown}<pre><code>  friday_template</code></pre>{:/} | 1927 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Fridays.  These fields are overridden by patterns entered<br/>for a specific (Friday) date and stored on the "OST" nodes. | OBJECT |  | [Friday_Template-44_009](#Friday_Template-44_009)
**Saturday Template**{::nomarkdown}<pre><code>  saturday_template</code></pre>{:/} | 1928 | This field contains the patterns and limit dates applicable to scheduling<br/>appointments on Saturdays.  These fields are overridden by patterns entered<br/>for a specific (Saturday) date and stored on the "OST" nodes. | OBJECT |  | [Saturday_Template-44_0001](#Saturday_Template-44_0001)
**Require X-ray Films?**{::nomarkdown}<pre><code>  require_xray_films</code></pre>{:/} | 2000 | Will x-ray films be required for patients scheduled in this clinic? | BOOLEAN |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Require Action Profiles?**{::nomarkdown}<pre><code>  require_action_profiles</code></pre>{:/} | 2000.5 | Will pharmacy action profiles be required for patients scheduled in<br/>this clinic? | ENUMERATION | REQUIRED | {::nomarkdown}YES: <em><strong>0</strong></em><br/>NO: <em><strong>1</strong></em>{:/}
**Allowable Consecutive No-shows**{::nomarkdown}<pre><code>  allowable_consecutive_noshows</code></pre>{:/} | 2001 | This is the number of times in a row that a patient can be a no-show in<br/>a clinic before he/she is flagged for possible discharge from the clinic. | NUMERIC | REQUIRED | 
**Max # Days For Future Booking**{::nomarkdown}<pre><code>  max_number_days_for_future_booking</code></pre>{:/} | 2002 | Maximum number of days that can be available when clerk searching<br/>for open clinic slots in the future. | NUMERIC | REQUIRED | 
**Start Time For Auto Rebook**{::nomarkdown}<pre><code>  start_time_for_auto_rebook</code></pre>{:/} | 2003 | Start time (hour of day) that should be searched for when user<br/>auto rebooking an appointment.  For example, if the clinic regularly<br/>starts at 8am, user may wish to set this parameter to 9am so that<br/>the next available slot at 9am or later will be stuffed with new<br/>appointment. | NUMERIC |  | 
**Collateral Visits? (y Or N)**{::nomarkdown}<pre><code>  collateral_visits_y_or_n</code></pre>{:/} | 2004 | Are collateral visits allowed to this clinic? Yes or No | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Max # Days For Auto-rebook**{::nomarkdown}<pre><code>  max_number_days_for_autorebook</code></pre>{:/} | 2005 | Maximum number of days the system can be set to search up to when<br/>auto rebooking appointments.  For instance, if an appointment to<br/>this clinic is cancelled and the latest time that should be allowed<br/>for rescheduling is a period of two weeks (set parameter), then<br/>auto rebook function will quit after searching a two week period in<br/>future for available slots. | NUMERIC | REQUIRED | 
***record Tracking Communication**{::nomarkdown}<pre><code>  record_tracking_communication</code></pre>{:/} | 2006 |  | ENUMERATION | DEPRECATED | 
***communication Format**{::nomarkdown}<pre><code>  communication_format</code></pre>{:/} | 2007 |  | STRING | DEPRECATED | 
***record Request Device**{::nomarkdown}<pre><code>  record_request_device</code></pre>{:/} | 2008 |  | STRING | DEPRECATED | 
***rt At Home Retreiver**{::nomarkdown}<pre><code>  rt_at_home_retreiver</code></pre>{:/} | 2009 |  | POINTER | DEPRECATED | 
***rt Not At Home Retreiver**{::nomarkdown}<pre><code>  rt_not_at_home_retreiver</code></pre>{:/} | 2010 |  | POINTER | DEPRECATED | 
***record Request Priority**{::nomarkdown}<pre><code>  record_request_priority</code></pre>{:/} | 2011 |  | NUMERIC | DEPRECATED | 
***record Appointment Status**{::nomarkdown}<pre><code>  record_appointment_status</code></pre>{:/} | 2012 |  | ENUMERATION | DEPRECATED | 
**Prohibit Access To Clinic?**{::nomarkdown}<pre><code>  prohibit_access_to_clinic</code></pre>{:/} | 2500 | Should only privileged users have access to book to this clinic? | BOOLEAN |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Privileged User**{::nomarkdown}<pre><code>  privileged_user</code></pre>{:/} | 2501 | Privileged users set up to have access to book to clinic.<br/>Once one privileged user is entered into this multiple, no other<br/>user will have access to book to the clinic.  Each individual who<br/>should have access to clinic must be entered one at a time. | POINTER |  | [New_Person-200](New_Person-200)
**Non-count Clinic? (y Or N)**{::nomarkdown}<pre><code>  noncount_clinic_y_or_n</code></pre>{:/} | 2502 | Is this clinic to be a non-count clinic for workload purposes? OR<br/>Are visits to this clinic to be included in workload statistics? | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Include On File Room Lists?**{::nomarkdown}<pre><code>  include_on_file_room_lists</code></pre>{:/} | 2502.5 | This field should contain a Yes if this is a non-count clinic that should<br/>be included on the file room lists. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Credit Stop Code**{::nomarkdown}<pre><code>  credit_stop_code</code></pre>{:/} | 2503 | Appointments to this clinic will receive this stop code credit in addition<br/>to the 'normal' stop code credit if a stop code different from the 'normal'<br/>stop code for this clinic is entered here. | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Prv. Year Credit Stop Code**{::nomarkdown}<pre><code>  prv_year_credit_stop_code</code></pre>{:/} | 2503.1 | Previous year's credit stop code assigned to clinic. | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Clinic Meets At This Facility?**{::nomarkdown}<pre><code>  clinic_meets_at_this_facility</code></pre>{:/} | 2504 | Does clinic meet at designated facility? | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Inactivate Date**{::nomarkdown}<pre><code>  inactivate_date</code></pre>{:/} | 2505 | Date clinic was inactivated. | DATE-TIME |  | 
**Reactivate Date**{::nomarkdown}<pre><code>  reactivate_date</code></pre>{:/} | 2506 | Date clinic was reactivated. | DATE-TIME |  | 
**Default Appointment Type**{::nomarkdown}<pre><code>  default_appointment_type</code></pre>{:/} | 2507 | The default or usual appointment type to be associated with this<br/>clinic. | POINTER |  | Appointment_Type-409_1
**No Show Letter**{::nomarkdown}<pre><code>  no_show_letter</code></pre>{:/} | 2508 | Enter the no-show letter to be associated with this clinic, so if<br/>patient does not show for appointment, this specific no-show letter<br/>will print as opposed to the generic no-show letter. | POINTER | INDEXED | Letter-407_5
**Pre-appointment Letter**{::nomarkdown}<pre><code>  preappointment_letter</code></pre>{:/} | 2509 | Enter the pre-appointment letter to be associated with this clinic,<br/>so if letters are generated, this specific pre-appointment letter<br/>will print as opposed to the generic pre-appointment letter. | POINTER | INDEXED | Letter-407_5
**Clinic Cancellation Letter**{::nomarkdown}<pre><code>  clinic_cancellation_letter</code></pre>{:/} | 2510 | Enter the clinic cancellation letter to be associated with this clinic,<br/>so if clinic is cancelled, this letter will print as opposed to<br/>generic clinic cancellation letter. | POINTER | INDEXED | Letter-407_5
**Appt. Cancellation Letter**{::nomarkdown}<pre><code>  appt_cancellation_letter</code></pre>{:/} | 2511 | Enter appointment cancellation letter to be associated with this clinic,<br/>so if veteran cancels appointment, this letter will print as opposed<br/>to generic appointment cancellation letter. | POINTER | INDEXED | Letter-407_5
**Provider**{::nomarkdown}<pre><code>  provider</code></pre>{:/} | 2600 | Enter in this field the providers associated with this clinic.  These<br/>providers will then be displayed when updating the provider through<br/>Appointment Management or Check Out to assist the user in entering<br/>the correct provider. | OBJECT |  | [Provider-44_1](#Provider-44_1)
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | 2700 | These are the diagnoses associated with this clinic.  These diagnoses will<br/>be displayed when updating the diagnosis through Appointment Management or<br/>Check Out to assist the user in entering the correct diagnosis. | OBJECT |  | [Diagnosis-44_11](#Diagnosis-44_11)
**Team Positions**{::nomarkdown}<pre><code>  team_positions</code></pre>{:/} | 2800 | This contains one or more team positions that have this clinic as<br/>an 'ASSOCIATE CLINIC' - defined in the TEAM POSITION (#404.57) File. | OBJECT |  | [Team_Positions-44_40457](#Team_Positions-44_40457)
**Default To Pc Practitioner?**{::nomarkdown}<pre><code>  default_to_pc_practitioner</code></pre>{:/} | 2801 | This only is relevant if there is no default provider.  If so, if<br/>there is a current primary care practitioner for the patient - it will<br/>be provided as the default provider. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Administer Inpatient Meds?**{::nomarkdown}<pre><code>  administer_inpatient_meds</code></pre>{:/} | 2802 | This field should contain a YES only if the clinic location is<br/>authorized to dispense inpatient medications to outpatients. | BOOLEAN | INDEXED | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Autofinish Rx Site**{::nomarkdown}<pre><code>  autofinish_rx_site</code></pre>{:/} | 22900 | This field is a pointer to File#59, Outpatient Site, that this hospital <br/>location is associated with.  If this field is not set autofinishing of <br/>Rx's for this hospital location will not take place. | POINTER |  | Outpatient_Site-59
**Autofinish Clinic Printer**{::nomarkdown}<pre><code>  autofinish_clinic_printer</code></pre>{:/} | 22901 | Printer where autofinished Rx's will print for a particular clinic. | POINTER |  | [Device-3_5](Device-3_5)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Appointment-44_001"></a>Appointment (44.001)

<dl>
<dt>ID</dt><dd>Appointment-44_001</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Appointment Date/time**{::nomarkdown}<pre><code>  appointment_date_time</code></pre>{:/} | .01 | Date/time of a veteran's appointment to an outpatient clinic. | DATE-TIME | REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | 2 | Patient for whom this data relates. | OBJECT |  | [Patient-44_003](#Patient-44_003)
**Message**{::nomarkdown}<pre><code>  message</code></pre>{:/} | 1400 | Message generated when clerk attempting to make appointment and<br/>patient has appointment same day in another or same clinic to<br/>alert them of same. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Patient-44_003"></a>Patient (44.003)

<dl>
<dt>ID</dt><dd>Patient-44_003</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .01 | Patient for whom appointment data relates. | POINTER | REQUIRED | [Patient-2](Patient-2)
**Length Of App&#x27;t**{::nomarkdown}<pre><code>  length_of_appt</code></pre>{:/} | 1 | Length of appointment in minutes (i.e. 15-60). | NUMERIC |  | 
**Xray**{::nomarkdown}<pre><code>  xray</code></pre>{:/} | 2 | X-ray  ordered in association with an appointment. | STRING |  | 
**Other**{::nomarkdown}<pre><code>  other</code></pre>{:/} | 3 | Any other tests ordered in association with an appointment | STRING |  | 
**Ward Loc**{::nomarkdown}<pre><code>  ward_loc</code></pre>{:/} | 4 | Ward location of patient if an inpatient at the time of appointment. | STRING |  | 
**Data Entry Clerk**{::nomarkdown}<pre><code>  data_entry_clerk</code></pre>{:/} | 7 | Clerk who entered the appointment. | POINTER |  | [New_Person-200](New_Person-200)
**Date Appointment Made**{::nomarkdown}<pre><code>  date_appointment_made</code></pre>{:/} | 8 | Date/time appointment was placed into the package. | DATE-TIME |  | 
**Overbook**{::nomarkdown}<pre><code>  overbook</code></pre>{:/} | 9 | Was this appointment an overbook, or scheduled over the maximum number<br/>of appointments allowed for that day/slot. | ENUMERATION |  | {::nomarkdown}OVERBOOK: <em><strong>O</strong></em>{:/}
**Prior X-ray Results To Clinic?**{::nomarkdown}<pre><code>  prior_xray_results_to_clinic</code></pre>{:/} | 10 | Are prior x-ray results required to be sent to clinic at time of<br/>appointment? | BOOLEAN |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Eligibility Of Visit**{::nomarkdown}<pre><code>  eligibility_of_visit</code></pre>{:/} | 30 | This field was previously called NON-VETERAN VISIT ELIGIBILITY.  It now<br/>contains the eligibility being used at the time of the appointment.  If<br/>a patient has Other Entitled Eligibilities (replaces Dual Status), the<br/>appointment options will prompt for eligibility and be set here. | POINTER |  | [Eligibility_Code-8](Eligibility_Code-8)
**Parent Record Request #**{::nomarkdown}<pre><code>  parent_record_request_number</code></pre>{:/} | 200 | This field contains the request number from the record tracking system.<br/>It will only have a request number if the clinic requires records<br/>for an appointment and if the site is utilitizing the record tracking<br/>module.<br/> <br/>The request number represents the 'parent' request for records. This<br/>parent request may then, in turn, indicate that more than one record <br/>request is associated with this appointment. For example, if the patient's<br/>medical record has two volumes then there maybe a request issued for each<br/>volume.<br/> <br/>The request for volume 1 maybe the initial(parent) request and the<br/>request for the second volume would have volumes 1's request as its<br/>parent.<br/> <br/>Also, requests for x-ray film folders, dental records etc. maybe linked<br/>to this parent request. | POINTER |  | Requested_Records-190_1
**Check In User**{::nomarkdown}<pre><code>  check_in_user</code></pre>{:/} | 302 | This field contains the user who checked in the patient<br/>for the appointment.  It is automatically filled in when the<br/>CHECKED-IN field(#309) is entered. | POINTER |  | [New_Person-200](New_Person-200)
**Checked Out**{::nomarkdown}<pre><code>  checked_out</code></pre>{:/} | 303 | This field contains the date and time the patient was checked out<br/>of the appointment. | DATE-TIME |  | 
**Check Out User**{::nomarkdown}<pre><code>  check_out_user</code></pre>{:/} | 304 | This field contains the user who checked out the patient<br/>for the appointment.  It is automatically entered when the<br/>CHECKED OUT field(#303) is entered. | POINTER |  | [New_Person-200](New_Person-200)
**Check In Entered**{::nomarkdown}<pre><code>  check_in_entered</code></pre>{:/} | 305 | Date and time that the 'check in' was entered into the system.<br/>This field is automatically filled in when the CHECKED-IN(#309) field<br/>is entered. | DATE-TIME |  | 
**Check Out Entered**{::nomarkdown}<pre><code>  check_out_entered</code></pre>{:/} | 306 | Date and time that the 'check out' was entered into the system.<br/>This field is automatically filled in when the CHECKED-OUT(#303) field<br/>is entered. | DATE-TIME |  | 
**Checked-in**{::nomarkdown}<pre><code>  checkedin</code></pre>{:/} | 309 | This field contains the date and time the patient was checked in<br/>for the appointment. | DATE-TIME |  | 
**Appointment Cancelled?**{::nomarkdown}<pre><code>  appointment_cancelled</code></pre>{:/} | 310 | Was appointment cancelled? | ENUMERATION |  | {::nomarkdown}CANCELLED: <em><strong>C</strong></em>{:/}
**Consult Link**{::nomarkdown}<pre><code>  consult_link</code></pre>{:/} | 688 | This field links the appointment to a consult. | POINTER | INDEXED | Request_consultation-123

[&uarr; Return to top](#top)<br/>


### <a name="Cancel_Date_time_Begin-44_05"></a>Cancel Date/time Begin (44.05)

<dl>
<dt>ID</dt><dd>Cancel_Date_time_Begin-44_05</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cancel Date/time Begin**{::nomarkdown}<pre><code>  cancel_date_time_begin</code></pre>{:/} | .01 | Date/time a clinic started cancellation period. | DATE-TIME | REQUIRED | 
**Cancel Ending Time**{::nomarkdown}<pre><code>  cancel_ending_time</code></pre>{:/} | 1 | Date/time a clinic ended cancellation period. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Chart_Check-44_006"></a>Chart Check (44.006)

<dl>
<dt>ID</dt><dd>Chart_Check-44_006</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | .01 | Date chart was checked for availability for this appointment. | DATE-TIME | REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | 2 | Patient associated with appointment data. | POINTER |  | [Patient-2](Patient-2)

[&uarr; Return to top](#top)<br/>


### <a name="Availability-44_002"></a>Availability (44.002)

<dl>
<dt>ID</dt><dd>Availability-44_002</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Availability**{::nomarkdown}<pre><code>  availability</code></pre>{:/} | .01 | Clinic availability information. | DATE-TIME | REQUIRED | 
**Schedule Time**{::nomarkdown}<pre><code>  schedule_time</code></pre>{:/} | 2 | Time slots or pattern scheduled for a specific clinic. | OBJECT |  | [Schedule_Time-44_004](#Schedule_Time-44_004)

[&uarr; Return to top](#top)<br/>


### <a name="Schedule_Time-44_004"></a>Schedule Time (44.004)

<dl>
<dt>ID</dt><dd>Schedule_Time-44_004</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Schedule Time**{::nomarkdown}<pre><code>  schedule_time</code></pre>{:/} | .01 | Time slots or pattern scheduled for a specific clinic. | STRING | REQUIRED | 
**Number Of Patients**{::nomarkdown}<pre><code>  number_of_patients</code></pre>{:/} | 1 | Number of patients allowed to be booked for time slots. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Pattern-44_005"></a>Pattern (44.005)

<dl>
<dt>ID</dt><dd>Pattern-44_005</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Pattern Date**{::nomarkdown}<pre><code>  pattern_date</code></pre>{:/} | .01 | Date/time this particular clinic pattern was set up by user. | DATE-TIME | REQUIRED | 
**Current Availability**{::nomarkdown}<pre><code>  current_availability</code></pre>{:/} | 1 | Current clinic availability.  What slots are and are not available<br/>for specified clinic days. | STRING |  | 
**Special Availability Flag**{::nomarkdown}<pre><code>  special_availability_flag</code></pre>{:/} | 3 | This node's existence indicates there is a 'special' availability set up<br/>for this date and the master pattern for this date should be taken from<br/>the "OST" node with the same date, not the "T0"-"T6" master pattern nodes. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Special_Pattern-44_0002"></a>Special Pattern (44.0002)

<dl>
<dt>ID</dt><dd>Special_Pattern-44_0002</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Pattern Date**{::nomarkdown}<pre><code>  pattern_date</code></pre>{:/} | .01 | Date a particular pattern was established by user. | DATE-TIME | REQUIRED | 
**Original Availability**{::nomarkdown}<pre><code>  original_availability</code></pre>{:/} | 1 | First or original availability pattern set up for a clinic. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Sunday_Template-44_06"></a>Sunday Template (44.06)

<dl>
<dt>ID</dt><dd>Sunday_Template-44_06</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Sundays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Sunday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Sundays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up by user on specified date for Sundays.  All patterns<br/>stored. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Monday_Template-44_07"></a>Monday Template (44.07)

<dl>
<dt>ID</dt><dd>Monday_Template-44_07</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Mondays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Monday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Mondays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up by user for clinic for Mondays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Tuesday_Template-44_08"></a>Tuesday Template (44.08)

<dl>
<dt>ID</dt><dd>Tuesday_Template-44_08</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Tuesdays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Tuesday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Tuesdays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master Pattern set up for clinic for Tuesdays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Wednesday_Template-44_09"></a>Wednesday Template (44.09)

<dl>
<dt>ID</dt><dd>Wednesday_Template-44_09</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Wednesdays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Wednesday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Wednesdays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up for clinic for wednesdays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Thursday_Template-44_008"></a>Thursday Template (44.008)

<dl>
<dt>ID</dt><dd>Thursday_Template-44_008</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Thursdays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Thursday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Thursdays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up for clinic for thursdays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Friday_Template-44_009"></a>Friday Template (44.009)

<dl>
<dt>ID</dt><dd>Friday_Template-44_009</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Fridays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Friday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Fridays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up for clinic for fridays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Saturday_Template-44_0001"></a>Saturday Template (44.0001)

<dl>
<dt>ID</dt><dd>Saturday_Template-44_0001</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Limit Date**{::nomarkdown}<pre><code>  limit_date</code></pre>{:/} | .01 | The pattern stored at this date is applicable for Saturdays from the previous<br/>entry's date up to but not including this date.  If there is no previous<br/>entry date, this date is the first Saturday when appointments may be made to<br/>this clinic.  If the date equals 9999999, this pattern is effective<br/>indefinitely for Saturdays from the previous entry date. | NUMERIC | REQUIRED | 
**Master Pattern**{::nomarkdown}<pre><code>  master_pattern</code></pre>{:/} | 1 | Master pattern set up for clinic for saturdays. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Provider-44_1"></a>Provider (44.1)

<dl>
<dt>ID</dt><dd>Provider-44_1</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Provider**{::nomarkdown}<pre><code>  provider</code></pre>{:/} | .01 | Enter in this field the providers associated with this clinic.  These<br/>providers will then be displayed when updating the provider through<br/>Appointment Management or Check Out to assist the user in entering<br/>the correct provider. | POINTER | INDEXED<br/>REQUIRED | [New_Person-200](New_Person-200)
**Default Provider**{::nomarkdown}<pre><code>  default_provider</code></pre>{:/} | .02 | Enter 'YES' in this field if the provider is the default for this<br/>clinic.  Otherwise, enter 'NO'. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Diagnosis-44_11"></a>Diagnosis (44.11)

<dl>
<dt>ID</dt><dd>Diagnosis-44_11</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | .01 | This is a diagnosis associated with this clinic.  This diagnosis will<br/>be displayed when updating the diagnosis through Appointment Management<br/>or Check Out to assist the user in entering the correct diagnosis. | POINTER | INDEXED<br/>REQUIRED | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Default Diagnosis**{::nomarkdown}<pre><code>  default_diagnosis</code></pre>{:/} | .02 | This field indicates whether or not this ICD code is this clinic's <br/>default diagnosis for an ICD version. Only one ICD code for an ICD version<br/>may be the default code for a clinic. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Team_Positions-44_40457"></a>Team Positions (44.40457)

<dl>
<dt>ID</dt><dd>Team_Positions-44_40457</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Team Positions**{::nomarkdown}<pre><code>  team_positions</code></pre>{:/} | .01 | This is populated via a trigger on the ASSOCIATED CLINIC (#.09) Field<br/>of the TEAM POSITION (#404.57) File. | POINTER | INDEXED<br/>REQUIRED | Team_Position-404_57
**Team**{::nomarkdown}<pre><code>  team</code></pre>{:/} | .02 |  | POINTER | INDEXED | Team-404_51

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}