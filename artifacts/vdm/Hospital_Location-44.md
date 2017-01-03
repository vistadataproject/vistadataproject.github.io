---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Hospital_Location-44 

 property | value 
--- | --- 
 id | Hospital_Location-44
 fmId | 44
 label | Hospital Location
 location | ^SC(
 description | Contains locations found in the hospital (ie. Wards, Clinics)\r *********DO NOT RE-INDEX THIS FILE**********

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | Name given by user to any ward, clinic, fileroom, operating room\ror other location within a VA facility. | STRING |  | REQUIRED, INDEXED |  | 
| abbreviation | 1 | Abbreviation | Abbreviation given by user to any ward, clinic, fileroom, operating\rroom or other location associated with the NAME. | STRING |  | INDEXED |  | 
| type-2 | 2 | Type | Type of location assigned to entries into this file, i.e. Ward,\rClinic, Fileroom, Operating Room, Other. | ENUMERATION |  | REQUIRED | <dl><dt>N</dt><dd>NON-CLINIC STOP</dd><dt>M</dt><dd>MODULE</dd><dt>OR</dt><dd>OPERATING ROOM</dd><dt>Z</dt><dd>OTHER LOCATION</dd><dt>C</dt><dd>CLINIC</dd><dt>F</dt><dd>FILE AREA</dd><dt>I</dt><dd>IMAGING</dd><dt>W</dt><dd>WARD</dd></dl> | 
| type_extension | 2.1 | Type Extension | Type extension of a location assigned to entries into this file\rto insure user is not allowed to use a previously designated\rWard Location as a Clinic Location for example. | POINTER |  | REQUIRED | {id:Location_Type-40_9} | 
| institution | 3 | Institution | Institution name assigned to each entry in this file to identify\rwhere the specific location is. | POINTER |  |  | [Institution-4](Institution-4.md) | 
| division | 3.5 | Division | Division name assigned to each entry in this file to identify\rwehre the specific location is.  There can be multiple divisions\rassigned to an Institution, but only one division per location. | POINTER |  |  | {id:Medical_Center_Division-40_8} | 
| module | 4 | Module | Module or name of hospital location. | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| default_device | 5 | Default Device | Default device to which information should print for a specific\rlocation.  This field is not currently being utilized. | STRING |  |  |  | 
| disposition_action | 6 | Disposition Action | A disposition action associated with specific location, i.e.\r'0'= none; '1'=appointment record request; '2'=scheduling. | ENUMERATION |  |  | <dl><dt>2</dt><dd>SCHEDULING</dd><dt>0</dt><dd>NONE</dd><dt>1</dt><dd>APPOINTMENT REC REQ</dd></dl> | 
| visit_location | 7 | Visit Location | Location of visit for specified entry. | STRING |  |  |  | 
| stop_code_number | 8 | Stop Code Number | Three digit stop code number assigned to specific location.  Each\rstop code number represents a type of care or Service/treating\rspecialty (clinics only). | POINTER |  | REQUIRED | {id:Clinic_Stop-40_7} | 
| prv_year_stop_code | 8.1 | Prv. Year Stop Code | Previous year's three digit stop code number that was assigned to\rspecific location (clinics only). | POINTER |  |  | {id:Clinic_Stop-40_7} | 
| service | 9 | Service | Service assigned to specific location, i.e. Medicine, Surgery,\rPsychiatry, etc. | ENUMERATION |  | REQUIRED | <dl><dt>0</dt><dd>NONE</dd><dt>R</dt><dd>REHAB MEDICINE</dd><dt>P</dt><dd>PSYCHIATRY</dd><dt>N</dt><dd>NEUROLOGY</dd><dt>M</dt><dd>MEDICINE</dd><dt>S</dt><dd>SURGERY</dd></dl> | 
| treating_specialty | 9.5 | Treating Specialty | Treating specialty assigned a specific location, i.e. neurosurgery,\ralcohol/drug rehabilitation, dermatology (specialties within\rServices usually). | POINTER |  | REQUIRED | {id:Facility_Treating_Specialty-45_7} | 
| physical_location | 10 | Physical Location | Physical location of a specific ward or clinic, etc., i.e.\r3rd floor,  Wing A. | STRING |  |  |  | 
| okc_a | 11 | *okc A |  | STRING |  |  |  | 
| okc_b | 12 | *okc B |  | STRING |  |  |  | 
| synonym | 13 | Synonym | Synonym or shortened name associated with a specific location. | [STRING] |  |  |  | 
| special_amis_stop | 14 | Special Amis Stop | Special AMIS stop associated with a specific location based on\rthe Service assigned. | ENUMERATION |  |  | <dl><dt>10</dt><dd>MENTAL HYGEINE</dd><dt>16</dt><dd>EMPLOYEE HEALTH</dd><dt>14</dt><dd>ALCOHOL TREATMENT</dd><dt>12</dt><dd>DAY HOSPITAL</dd><dt>15</dt><dd>EMERGENCY UNIT</dd><dt>13</dt><dd>DRUG DEPENDANCE</dd><dt>11</dt><dd>DAY TREATMENT</dd></dl> | 
| category_of_visit | 15 | Category Of Visit | Category of visit associated with a specific location. | STRING |  |  |  | 
| default_provider | 16 | Default Provider | Default provider or physician that is assigned to specific clinic. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| prohibited_terminal | 19 | Prohibited Terminal | Terminals that cannot be utilized from specific location. | [STRING] |  |  |  | 
| agency | 23 | Agency | Agency associated with specific location, i.e. Veterans Affairs,\rDepartment of Defense, etc. | POINTER |  |  | {id:Agency-4_11} | 
| ask_for_check_in_out_time | 24 | Ask For Check In/out Time | When checking in/out a patient for an appointment, should the\ruser be prompted for date and time?\r \rIf this field is set to 'YES', the user will be prompted\rfor the date and time.  The current date and time will be the\rdefault.\r \rIf this field is set to 'NO' or is not entered, the user will\rnot be prompted and the current date and time will automatically\rbe entered.\r \rIf an appointment is scheduled retroactively then the system\rwill use the date and time of the appointment as the check\rin/out time.  This date/time will either be entered automatically or\rused as a default, depending upon how this parameter is set. | BOOLEAN |  |  | {false:1,true:0} | 
| clinic_services_resource | 29 | *clinic Services Resource | This field is used to associate the clinic with a Clinic Services Resource. | STRING |  |  |  | 
| workload_validation_at_chk_out | 30 | Workload Validation At Chk Out | Yes or 1 will result in a validation being performed on each checked out\rencounter for this clinic.  No or zero will stop the validation of the\rencounters as they are checked out for this clinic.  This validation is\rto help ensure that the workload data is acceptable to the Austin\rNational Patient Care Database. | BOOLEAN |  |  | {false:0,true:1} | 
| clinic_group_reports | 31 | Clinic Group (reports) |  | POINTER |  | INDEXED | {id:Clinic_Group-409_67} | 
| ward_location_file_pointer | 42 | Ward Location File Pointer | If location is a ward, this is the file pointer to the Ward\rLocation File, File 42 in which this location is also stored. | POINTER |  |  | {id:Ward_Location-42} | 
| occasion_of_service_clinic | 50.01 | Occasion Of Service Clinic? | This field is non-editable.  It is created automatically by a scheduling\rAPI and must NOT be edited by the site.  It designates clinic locations\radded by ancillary packages for occasions of service.  These clinics can\rnot be edited through Scheduling options.  They can only be altered using\rthe API. | BOOLEAN |  | INDEXED | {false:0,true:1} | 
| oos_calling_package | 50.02 | Oos Calling Package | This field stores the package which created the occasion of service\rlocation.  This field should NOT be altered by the site.  It is uneditable\rthrough FileMan. | POINTER |  |  | {id:Package-9_4} | 
| patient_friendly_name | 60 | Patient Friendly Name | Populate this field with a description of the clinic that will be\rmeaningful to patients. Do not enter any sensitive patient information \rin this field such as HIV CLINIC as an example. | STRING |  |  |  | 
| direct_patient_scheduling | 61 | Direct Patient Scheduling? | This field will determine if patients can self-schedule into this \rclinic. A \Yes\ in this field will enable patients to directly schedule \rappointments into this clinic. | BOOLEAN |  | REQUIRED | {false:N,true:Y} | 
| display_clin_appt_to_patients | 62 | Display Clin Appt To Patients? | This field will determine if the clinic appointment information will be \rdisplayed to patients. A \Yes\ in this field will enable patients to \rsee their appointments in this clinic. | BOOLEAN |  | REQUIRED | {false:N,true:Y} | 
| telephone | 99 | Telephone | Telephone number for specific location. | STRING |  |  |  | 
| telephone_extension | 99.1 | Telephone Extension | Clinic telephone extension number where patients can call directly. | STRING |  |  |  | 
| associated_location_types | 101 | Associated Location Types |  | [POINTER] |  |  | {id:Location_Type-40_9} | 
| appointment | 1900 | Appointment | Appointment multiple stores all data related to outpatient visits\rincluding basic demographic data on a patient, appointment data,\rlab, x-ray and EKG appointment dates/times. | [OBJECT] |  |  | [Appointment-44_001](#appointment-44_001)  | 
| cancel_date_time_begin | 1901 | Cancel Date/time Begin | Cancellation date/time beginning for a clinic. | [OBJECT] |  |  | [Cancel_Date_time_Begin-44_05](#cancel_date_time_begin-44_05)  | 
| chart_check | 1906 | Chart Check | Does user want the chart checked for availability for this clinic. | [OBJECT] |  |  | [Chart_Check-44_006](#chart_check-44_006)  | 
| special_instructions | 1910 | Special Instructions | Special instructions (free text) entered by clerk at time of making\rthe appointment. | [STRING] |  |  |  | 
| length_of_appt | 1912 | Length Of App't | Length of appointment designated for clinic. | NUMERIC |  | REQUIRED |  | 
| variable_appntment_length | 1913 | Variable App'ntment Length | Does the clinic have variable appointment lengths?  Can, if length\rof appointment is 10 minutes, user make longer appointments in\rincrements of 10 at time of making appointment? | ENUMERATION |  |  | <dl><dt>V</dt><dd>YES, VARIABLE LENGTH</dd></dl> | 
| hour_clinic_display_begins | 1914 | Hour Clinic Display Begins | The hour clinic will begin displaying availability (i.e. 8AM). | NUMERIC |  |  |  | 
| hold_sc_slots_until_number_of_days | 1915 | Hold Sc Slots Until # Of Days | Should service connected slots be held open for a set number of\rdays?  Service connected veterans have priority over NSC veterans\rwhen scheduling appointments. | NUMERIC |  |  |  | 
| principal_clinic | 1916 | Principal Clinic | Principal clinic or main clinic assigned to a specific location. | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| display_increments_per_hour | 1917 | Display Increments Per Hour |      This field SHOULD NOT BE EDITED when patterns have been established\rusing another increment per hour. Editing this field will cause \rexisting patterns to be erroneous and scheduling conflicts may also occur \rif the increments are changed. | ENUMERATION |  | REQUIRED | <dl><dt>4</dt><dd>15-MIN </dd><dt>2</dt><dd>30-MIN </dd><dt>3</dt><dd>20-MIN </dd><dt>1</dt><dd>60-MIN </dd><dt>6</dt><dd>10-MIN </dd></dl> | 
| overbooks_day_maximum | 1918 | Overbooks/day Maximum | Number of allowable overbooks per day.  If overbooks are not allowed, the\rnumber should be set to zero. | NUMERIC |  | REQUIRED |  | 
| schedule_on_holidays | 1918.5 | Schedule On Holidays? | Should the user be able to schedule appointments on holiday's for\rspecific location? | BOOLEAN |  |  | {true:Y} | 
| copies | 1919 | Copies | How many copies of appointment lists should be generated for this\rclinic? | NUMERIC |  |  |  | 
| availability | 1920 | Availability | Multiple that stores clinic availability information. | [OBJECT] |  |  | [Availability-44_002](#availability-44_002)  | 
| availability_flag | 1920.9 | Availability Flag | Date/time set up for clinic availability. | DATE-TIME |  |  |  | 
| pattern | 1921 | Pattern | Pattern for clinic availability information. | [OBJECT] |  |  | [Pattern-44_005](#pattern-44_005)  | 
| special_pattern | 1921.5 | Special Pattern | Special pattern information (storage of previous clinic patterns\rand current one). | [OBJECT] |  |  | [Special_Pattern-44_0002](#special_pattern-44_0002)  | 
| sunday_template | 1922 | Sunday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Sundays.  These fields are overridden by patterns entered\rfor a specific (Sunday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Sunday_Template-44_06](#sunday_template-44_06)  | 
| monday_template | 1923 | Monday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Mondays.  These fields are overridden by patterns entered\rfor a specific (Monday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Monday_Template-44_07](#monday_template-44_07)  | 
| tuesday_template | 1924 | Tuesday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Tuesdays.  These fields are overridden by patterns entered\rfor a specific (Tuesday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Tuesday_Template-44_08](#tuesday_template-44_08)  | 
| wednesday_template | 1925 | Wednesday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Wednesdays.  These fields are overridden by patterns entered\rfor a specific (Wednesday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Wednesday_Template-44_09](#wednesday_template-44_09)  | 
| thursday_template | 1926 | Thursday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Thursdays.  These fields are overridden by patterns entered\rfor a specific (Thursday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Thursday_Template-44_008](#thursday_template-44_008)  | 
| friday_template | 1927 | Friday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Fridays.  These fields are overridden by patterns entered\rfor a specific (Friday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Friday_Template-44_009](#friday_template-44_009)  | 
| saturday_template | 1928 | Saturday Template | This field contains the patterns and limit dates applicable to scheduling\rappointments on Saturdays.  These fields are overridden by patterns entered\rfor a specific (Saturday) date and stored on the \OST\ nodes. | [OBJECT] |  |  | [Saturday_Template-44_0001](#saturday_template-44_0001)  | 
| require_xray_films | 2000 | Require X-ray Films? | Will x-ray films be required for patients scheduled in this clinic? | BOOLEAN |  |  | {true:Y} | 
| require_action_profiles | 2000.5 | Require Action Profiles? | Will pharmacy action profiles be required for patients scheduled in\rthis clinic? | ENUMERATION |  | REQUIRED | <dl><dt>0</dt><dd>YES</dd><dt>1</dt><dd>NO</dd></dl> | 
| allowable_consecutive_noshows | 2001 | Allowable Consecutive No-shows | This is the number of times in a row that a patient can be a no-show in\ra clinic before he/she is flagged for possible discharge from the clinic. | NUMERIC |  | REQUIRED |  | 
| max_number_days_for_future_booking | 2002 | Max # Days For Future Booking | Maximum number of days that can be available when clerk searching\rfor open clinic slots in the future. | NUMERIC |  | REQUIRED |  | 
| start_time_for_auto_rebook | 2003 | Start Time For Auto Rebook | Start time (hour of day) that should be searched for when user\rauto rebooking an appointment.  For example, if the clinic regularly\rstarts at 8am, user may wish to set this parameter to 9am so that\rthe next available slot at 9am or later will be stuffed with new\rappointment. | NUMERIC |  |  |  | 
| collateral_visits_y_or_n | 2004 | Collateral Visits? (y Or N) | Are collateral visits allowed to this clinic? Yes or No | BOOLEAN |  | REQUIRED | {false:N,true:Y} | 
| max_number_days_for_autorebook | 2005 | Max # Days For Auto-rebook | Maximum number of days the system can be set to search up to when\rauto rebooking appointments.  For instance, if an appointment to\rthis clinic is cancelled and the latest time that should be allowed\rfor rescheduling is a period of two weeks (set parameter), then\rauto rebook function will quit after searching a two week period in\rfuture for available slots. | NUMERIC |  | REQUIRED |  | 
| record_tracking_communication | 2006 | *record Tracking Communication |  | ENUMERATION |  |  | <dl></dl> | 
| communication_format | 2007 | *communication Format |  | STRING |  |  |  | 
| record_request_device | 2008 | *record Request Device |  | STRING |  |  |  | 
| rt_at_home_retreiver | 2009 | *rt At Home Retreiver |  | POINTER |  |  |  | 
| rt_not_at_home_retreiver | 2010 | *rt Not At Home Retreiver |  | POINTER |  |  |  | 
| record_request_priority | 2011 | *record Request Priority |  | NUMERIC |  |  |  | 
| record_appointment_status | 2012 | *record Appointment Status |  | ENUMERATION |  |  | <dl></dl> | 
| prohibit_access_to_clinic | 2500 | Prohibit Access To Clinic? | Should only privileged users have access to book to this clinic? | BOOLEAN |  |  | {true:Y} | 
| privileged_user | 2501 | Privileged User | Privileged users set up to have access to book to clinic.\rOnce one privileged user is entered into this multiple, no other\ruser will have access to book to the clinic.  Each individual who\rshould have access to clinic must be entered one at a time. | [POINTER] |  |  | [New_Person-200](New_Person-200.md) | 
| noncount_clinic_y_or_n | 2502 | Non-count Clinic? (y Or N) | Is this clinic to be a non-count clinic for workload purposes? OR\rAre visits to this clinic to be included in workload statistics? | BOOLEAN |  | REQUIRED | {false:N,true:Y} | 
| include_on_file_room_lists | 2502.5 | Include On File Room Lists? | This field should contain a Yes if this is a non-count clinic that should\rbe included on the file room lists. | BOOLEAN |  |  | {false:1,true:0} | 
| credit_stop_code | 2503 | Credit Stop Code | Appointments to this clinic will receive this stop code credit in addition\rto the 'normal' stop code credit if a stop code different from the 'normal'\rstop code for this clinic is entered here. | POINTER |  |  | {id:Clinic_Stop-40_7} | 
| prv_year_credit_stop_code | 2503.1 | Prv. Year Credit Stop Code | Previous year's credit stop code assigned to clinic. | POINTER |  |  | {id:Clinic_Stop-40_7} | 
| clinic_meets_at_this_facility | 2504 | Clinic Meets At This Facility? | Does clinic meet at designated facility? | BOOLEAN |  | REQUIRED | {false:N,true:Y} | 
| inactivate_date | 2505 | Inactivate Date | Date clinic was inactivated. | DATE-TIME |  |  |  | 
| reactivate_date | 2506 | Reactivate Date | Date clinic was reactivated. | DATE-TIME |  |  |  | 
| default_appointment_type | 2507 | Default Appointment Type | The default or usual appointment type to be associated with this\rclinic. | POINTER |  |  | {id:Appointment_Type-409_1} | 
| no_show_letter | 2508 | No Show Letter | Enter the no-show letter to be associated with this clinic, so if\rpatient does not show for appointment, this specific no-show letter\rwill print as opposed to the generic no-show letter. | POINTER |  | INDEXED | {id:Letter-407_5} | 
| preappointment_letter | 2509 | Pre-appointment Letter | Enter the pre-appointment letter to be associated with this clinic,\rso if letters are generated, this specific pre-appointment letter\rwill print as opposed to the generic pre-appointment letter. | POINTER |  | INDEXED | {id:Letter-407_5} | 
| clinic_cancellation_letter | 2510 | Clinic Cancellation Letter | Enter the clinic cancellation letter to be associated with this clinic,\rso if clinic is cancelled, this letter will print as opposed to\rgeneric clinic cancellation letter. | POINTER |  | INDEXED | {id:Letter-407_5} | 
| appt_cancellation_letter | 2511 | Appt. Cancellation Letter | Enter appointment cancellation letter to be associated with this clinic,\rso if veteran cancels appointment, this letter will print as opposed\rto generic appointment cancellation letter. | POINTER |  | INDEXED | {id:Letter-407_5} | 
| provider | 2600 | Provider | Enter in this field the providers associated with this clinic.  These\rproviders will then be displayed when updating the provider through\rAppointment Management or Check Out to assist the user in entering\rthe correct provider. | [OBJECT] |  |  | [Provider-44_1](#provider-44_1)  | 
| diagnosis | 2700 | Diagnosis | These are the diagnoses associated with this clinic.  These diagnoses will\rbe displayed when updating the diagnosis through Appointment Management or\rCheck Out to assist the user in entering the correct diagnosis. | [OBJECT] |  |  | [Diagnosis-44_11](#diagnosis-44_11)  | 
| team_positions | 2800 | Team Positions | This contains one or more team positions that have this clinic as\ran 'ASSOCIATE CLINIC' - defined in the TEAM POSITION (#404.57) File. | [OBJECT] |  |  | [Team_Positions-44_40457](#team_positions-44_40457)  | 
| default_to_pc_practitioner | 2801 | Default To Pc Practitioner? | This only is relevant if there is no default provider.  If so, if\rthere is a current primary care practitioner for the patient - it will\rbe provided as the default provider. | BOOLEAN |  |  | {false:0,true:1} | 
| administer_inpatient_meds | 2802 | Administer Inpatient Meds? | This field should contain a YES only if the clinic location is\rauthorized to dispense inpatient medications to outpatients. | BOOLEAN |  | INDEXED | {true:1} | 
| autofinish_rx_site | 22900 | Autofinish Rx Site | This field is a pointer to File#59, Outpatient Site, that this hospital \rlocation is associated with.  If this field is not set autofinishing of \rRx's for this hospital location will not take place. | POINTER |  |  | {id:Outpatient_Site-59} | 
| autofinish_clinic_printer | 22901 | Autofinish Clinic Printer | Printer where autofinished Rx's will print for a particular clinic. | POINTER |  |  | {id:Device-3_5} | 

## Appointment-44_001 

 property | value 
--- | --- 
 id | Appointment-44_001
 label | Appointment

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| appointment_date_time | .01 | Appointment Date/time | Date/time of a veteran's appointment to an outpatient clinic. | DATE-TIME |  | REQUIRED |  | 
| patient | 2 | Patient | Patient for whom this data relates. | [OBJECT] |  |  | {id:Patient-44_003,fmId:44.003,label:Patient,properties:[{id:patient,fmId:.01,label:Patient,description:Patient for whom appointment data relates.,datatype:POINTER,required:true,range:{id:Patient-2}},{id:length_of_appt,fmId:1,label:Length Of App't,description:Length of appointment in minutes (i.e. 15-60).,datatype:NUMERIC},{id:xray,fmId:2,label:Xray,description:X-ray  ordered in association with an appointment.,datatype:STRING},{id:other,fmId:3,label:Other,description:Any other tests ordered in association with an appointment,datatype:STRING},{id:ward_loc,fmId:4,label:Ward Loc,description:Ward location of patient if an inpatient at the time of appointment.,datatype:STRING},{id:data_entry_clerk,fmId:7,label:Data Entry Clerk,description:Clerk who entered the appointment.,datatype:POINTER,range:{id:New_Person-200}},{id:date_appointment_made,fmId:8,label:Date Appointment Made,description:Date/time appointment was placed into the package.,datatype:DATE-TIME},{id:overbook,fmId:9,label:Overbook,description:Was this appointment an overbook, or scheduled over the maximum number\rof appointments allowed for that day/slot.,datatype:ENUMERATION,range:{OVERBOOK:O}},{id:prior_xray_results_to_clinic,fmId:10,label:Prior X-ray Results To Clinic?,description:Are prior x-ray results required to be sent to clinic at time of\rappointment?,datatype:BOOLEAN,range:{true:Y}},{id:eligibility_of_visit,fmId:30,label:Eligibility Of Visit,description:This field was previously called NON-VETERAN VISIT ELIGIBILITY.  It now\rcontains the eligibility being used at the time of the appointment.  If\ra patient has Other Entitled Eligibilities (replaces Dual Status), the\rappointment options will prompt for eligibility and be set here.,datatype:POINTER,range:{id:Eligibility_Code-8}},{id:parent_record_request_number,fmId:200,label:Parent Record Request #,description:This field contains the request number from the record tracking system.\rIt will only have a request number if the clinic requires records\rfor an appointment and if the site is utilitizing the record tracking\rmodule.\r \rThe request number represents the 'parent' request for records. This\rparent request may then, in turn, indicate that more than one record \rrequest is associated with this appointment. For example, if the patient's\rmedical record has two volumes then there maybe a request issued for each\rvolume.\r \rThe request for volume 1 maybe the initial(parent) request and the\rrequest for the second volume would have volumes 1's request as its\rparent.\r \rAlso, requests for x-ray film folders, dental records etc. maybe linked\rto this parent request.,datatype:POINTER,range:{id:Requested_Records-190_1}},{id:check_in_user,fmId:302,label:Check In User,description:This field contains the user who checked in the patient\rfor the appointment.  It is automatically filled in when the\rCHECKED-IN field(#309) is entered.,datatype:POINTER,range:{id:New_Person-200}},{id:checked_out,fmId:303,label:Checked Out,description:This field contains the date and time the patient was checked out\rof the appointment.,datatype:DATE-TIME},{id:check_out_user,fmId:304,label:Check Out User,description:This field contains the user who checked out the patient\rfor the appointment.  It is automatically entered when the\rCHECKED OUT field(#303) is entered.,datatype:POINTER,range:{id:New_Person-200}},{id:check_in_entered,fmId:305,label:Check In Entered,description:Date and time that the 'check in' was entered into the system.\rThis field is automatically filled in when the CHECKED-IN(#309) field\ris entered.,datatype:DATE-TIME},{id:check_out_entered,fmId:306,label:Check Out Entered,description:Date and time that the 'check out' was entered into the system.\rThis field is automatically filled in when the CHECKED-OUT(#303) field\ris entered.,datatype:DATE-TIME},{id:checkedin,fmId:309,label:Checked-in,description:This field contains the date and time the patient was checked in\rfor the appointment.,datatype:DATE-TIME},{id:appointment_cancelled,fmId:310,label:Appointment Cancelled?,description:Was appointment cancelled?,datatype:ENUMERATION,range:{CANCELLED:C}},{id:consult_link,fmId:688,label:Consult Link,description:This field links the appointment to a consult.,datatype:POINTER,indexed:true,range:{id:Request_consultation-123}}]} | 
| message | 1400 | Message | Message generated when clerk attempting to make appointment and\rpatient has appointment same day in another or same clinic to\ralert them of same. | STRING |  |  |  | 

## Cancel_Date_time_Begin-44_05 

 property | value 
--- | --- 
 id | Cancel_Date_time_Begin-44_05
 label | Cancel Date/time Begin

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| cancel_date_time_begin | .01 | Cancel Date/time Begin | Date/time a clinic started cancellation period. | DATE-TIME |  | REQUIRED |  | 
| cancel_ending_time | 1 | Cancel Ending Time | Date/time a clinic ended cancellation period. | STRING |  |  |  | 

## Chart_Check-44_006 

 property | value 
--- | --- 
 id | Chart_Check-44_006
 label | Chart Check

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date | .01 | Date | Date chart was checked for availability for this appointment. | DATE-TIME |  | REQUIRED |  | 
| patient | 2 | Patient | Patient associated with appointment data. | [POINTER] |  |  | [Patient-2](Patient-2.md) | 

## Availability-44_002 

 property | value 
--- | --- 
 id | Availability-44_002
 label | Availability

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| availability | .01 | Availability | Clinic availability information. | DATE-TIME |  | REQUIRED |  | 
| schedule_time | 2 | Schedule Time | Time slots or pattern scheduled for a specific clinic. | [OBJECT] |  |  | {id:Schedule_Time-44_004,fmId:44.004,label:Schedule Time,properties:[{id:schedule_time,fmId:.01,label:Schedule Time,description:Time slots or pattern scheduled for a specific clinic.,datatype:STRING,required:true},{id:number_of_patients,fmId:1,label:Number Of Patients,description:Number of patients allowed to be booked for time slots.,datatype:NUMERIC}]} | 

## Pattern-44_005 

 property | value 
--- | --- 
 id | Pattern-44_005
 label | Pattern

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| pattern_date | .01 | Pattern Date | Date/time this particular clinic pattern was set up by user. | DATE-TIME |  | REQUIRED |  | 
| current_availability | 1 | Current Availability | Current clinic availability.  What slots are and are not available\rfor specified clinic days. | STRING |  |  |  | 
| special_availability_flag | 3 | Special Availability Flag | This node's existence indicates there is a 'special' availability set up\rfor this date and the master pattern for this date should be taken from\rthe \OST\ node with the same date, not the \T0\-\T6\ master pattern nodes. | DATE-TIME |  |  |  | 

## Special_Pattern-44_0002 

 property | value 
--- | --- 
 id | Special_Pattern-44_0002
 label | Special Pattern

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| pattern_date | .01 | Pattern Date | Date a particular pattern was established by user. | DATE-TIME |  | REQUIRED |  | 
| original_availability | 1 | Original Availability | First or original availability pattern set up for a clinic. | STRING |  |  |  | 

## Sunday_Template-44_06 

 property | value 
--- | --- 
 id | Sunday_Template-44_06
 label | Sunday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Sundays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Sunday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Sundays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up by user on specified date for Sundays.  All patterns\rstored. | STRING |  |  |  | 

## Monday_Template-44_07 

 property | value 
--- | --- 
 id | Monday_Template-44_07
 label | Monday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Mondays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Monday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Mondays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up by user for clinic for Mondays. | STRING |  |  |  | 

## Tuesday_Template-44_08 

 property | value 
--- | --- 
 id | Tuesday_Template-44_08
 label | Tuesday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Tuesdays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Tuesday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Tuesdays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master Pattern set up for clinic for Tuesdays. | STRING |  |  |  | 

## Wednesday_Template-44_09 

 property | value 
--- | --- 
 id | Wednesday_Template-44_09
 label | Wednesday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Wednesdays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Wednesday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Wednesdays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up for clinic for wednesdays. | STRING |  |  |  | 

## Thursday_Template-44_008 

 property | value 
--- | --- 
 id | Thursday_Template-44_008
 label | Thursday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Thursdays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Thursday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Thursdays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up for clinic for thursdays. | STRING |  |  |  | 

## Friday_Template-44_009 

 property | value 
--- | --- 
 id | Friday_Template-44_009
 label | Friday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Fridays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Friday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Fridays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up for clinic for fridays. | STRING |  |  |  | 

## Saturday_Template-44_0001 

 property | value 
--- | --- 
 id | Saturday_Template-44_0001
 label | Saturday Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| limit_date | .01 | Limit Date | The pattern stored at this date is applicable for Saturdays from the previous\rentry's date up to but not including this date.  If there is no previous\rentry date, this date is the first Saturday when appointments may be made to\rthis clinic.  If the date equals 9999999, this pattern is effective\rindefinitely for Saturdays from the previous entry date. | NUMERIC |  | REQUIRED |  | 
| master_pattern | 1 | Master Pattern | Master pattern set up for clinic for saturdays. | STRING |  |  |  | 

## Provider-44_1 

 property | value 
--- | --- 
 id | Provider-44_1
 label | Provider

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| provider | .01 | Provider | Enter in this field the providers associated with this clinic.  These\rproviders will then be displayed when updating the provider through\rAppointment Management or Check Out to assist the user in entering\rthe correct provider. | POINTER |  | REQUIRED, INDEXED | [New_Person-200](New_Person-200.md) | 
| default_provider | .02 | Default Provider | Enter 'YES' in this field if the provider is the default for this\rclinic.  Otherwise, enter 'NO'. | BOOLEAN |  |  | {false:1,true:0} | 

## Diagnosis-44_11 

 property | value 
--- | --- 
 id | Diagnosis-44_11
 label | Diagnosis

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| diagnosis | .01 | Diagnosis | This is a diagnosis associated with this clinic.  This diagnosis will\rbe displayed when updating the diagnosis through Appointment Management\ror Check Out to assist the user in entering the correct diagnosis. | POINTER |  | REQUIRED, INDEXED | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| default_diagnosis | .02 | Default Diagnosis | This field indicates whether or not this ICD code is this clinic's \rdefault diagnosis for an ICD version. Only one ICD code for an ICD version\rmay be the default code for a clinic. | BOOLEAN |  |  | {false:1,true:0} | 

## Team_Positions-44_40457 

 property | value 
--- | --- 
 id | Team_Positions-44_40457
 label | Team Positions

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| team_positions | .01 | Team Positions | This is populated via a trigger on the ASSOCIATED CLINIC (#.09) Field\rof the TEAM POSITION (#404.57) File. | POINTER |  | REQUIRED, INDEXED | {id:Team_Position-404_57} | 
| team | .02 | Team |  | POINTER |  | INDEXED | {id:Team-404_51} | 