---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Laboratory_Site-69_9
# Laboratory Site (69.9)
This file holds specific information which defines certain site parameters relating to the actual functioning of your laboratory.  The parameters include the official laboratory site name, whether the physician's name must be entered when ordering and/or accessioning tests, what type of accession label format (if any) the lab will be using, and scheduled hours of routine phlebotomy collection times, as well as others.

<dl>
<dt>Global</dt><dd>^LAB(69.9,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site Name**{::nomarkdown}<pre><code>  site_name</code></pre>{:/} | .01 | There can be only one entry in this file. | STRING | INDEXED<br/>REQUIRED | 
**Blood Donor Unit Id Prefix**{::nomarkdown}<pre><code>  blood_donor_unit_id_prefix</code></pre>{:/} | .18 | The number of eye readable (non bar coded) characters<br/> as a prefix in the blood donor unit ID.<br/> A x-ref will be set ^DD(65.54,4,1,3,1) for the unit ID to exclude<br/> this prefix. | NUMERIC |  | 
**Default Lab Oos Location**{::nomarkdown}<pre><code>  default_lab_oos_location</code></pre>{:/} | .8 | Occassion Of Service (OOS)<br/> <br/>This field contains the default laboratory OOS location use to capture<br/>NPCDB workload. This field should contain the primary institution's<br/>laboratory OOS location. This location is used whenever a given Accession<br/>Area does not have a specific LAB OOS LOCATION assigned to capture NPCDB<br/>workload. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Default Institution**{::nomarkdown}<pre><code>  default_institution</code></pre>{:/} | 3 |   Certain workload functions are performed in the background, that is<br/>a user is not identified. In this circumstance, the system has no way<br/>of identifying the institution the workload should be credited. This<br/>field is the default value to be used by the system.<br/>  Enter the institution which should be considered the primary reporting<br/>institution. If this site is a multidivisional site, enter the parent<br/>institution in this field.<br/>  If this field is not filled in the Mailman domain value will be used. | POINTER |  | [Institution-4](Institution-4)
**Immed Lab Collect Div.**{::nomarkdown}<pre><code>  immed_lab_collect_div</code></pre>{:/} | 5.1 |  If your laboratory provides specimen collection service outside<br/>of the normal routine collection, use this subfile to enter data about<br/>your particular site. The parameters of Immediate Lab Collect define one<br/>institution. Therefore, multidivisional sites can have different parameters<br/>for each division. | OBJECT |  | [Immed_Lab_Collect_Div-69_9006](#Immed_Lab_Collect_Div-69_9006)
**Blood Bank Defaults**{::nomarkdown}<pre><code>  blood_bank_defaults</code></pre>{:/} | 8 | Defaults for Donor, Inventory, and Patient portions of the blood bank. | OBJECT |  | [Blood_Bank_Defaults-69_98](#Blood_Bank_Defaults-69_98)
**Blood Bank Division**{::nomarkdown}<pre><code>  blood_bank_division</code></pre>{:/} | 8.1 |   Indicate here which institution will be considered primary for this<br/>site. | OBJECT |  | [Blood_Bank_Institution-69_981](#Blood_Bank_Institution-69_981)
**Hospital Site**{::nomarkdown}<pre><code>  hospital_site</code></pre>{:/} | 9 | This is where parameters are selected for sites throughout the hospital<br/>to control various aspects of lab order entry through OE/RR. | OBJECT |  | [Hospital_Site-69_99](#Hospital_Site-69_99)
***ask Provider**{::nomarkdown}<pre><code>  ask_provider</code></pre>{:/} | 10 |  Because of OERR Alert generation, a provider must be entered for all ordered<br/>test. Therefore this field is no longer active. It will be deleted in a<br/>later version. | BOOLEAN | DEPRECATED | 
**Que Ch,he,etc Verified Test(s)**{::nomarkdown}<pre><code>  que_chheetc_verified_tests</code></pre>{:/} | 11 | If the verified test notice is to be automatically queued, this field must contain YES. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ask Frozen Section**{::nomarkdown}<pre><code>  ask_frozen_section</code></pre>{:/} | 11.1 | If frozen sections are to be put in a separate field (DD(63.08,1.3)<br/> 'YES' should be entered. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Ask Surg Path Diagnosis**{::nomarkdown}<pre><code>  ask_surg_path_diagnosis</code></pre>{:/} | 11.2 | If diagnoses are to be put in a separate field 'YES' should <br/>be entered. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Ask Cytopath Diagnosis**{::nomarkdown}<pre><code>  ask_cytopath_diagnosis</code></pre>{:/} | 11.3 | If diagnoses are to be put in a separate field 'YES' should <br/>be entered. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Ask Em Diagnosis**{::nomarkdown}<pre><code>  ask_em_diagnosis</code></pre>{:/} | 11.4 | If diagnoses are to be put in a separate field 'YES' should <br/>be entered. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Que Micro Verified Tests(s)**{::nomarkdown}<pre><code>  que_micro_verified_testss</code></pre>{:/} | 11.5 | If technologist approved work is to be automatically queued, this field<br/>must contain YES. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Print Labels**{::nomarkdown}<pre><code>  print_labels</code></pre>{:/} | 12 | If you want labels automatically printed, this field must contain YES. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Allow Lab To Add Patients**{::nomarkdown}<pre><code>  allow_lab_to_add_patients</code></pre>{:/} | 13 | This field is not functional.  It is no longer used to allow Lab to add <br/>patients to the Patient file.     | BOOLEAN | REQUIRED | {::nomarkdown}true: <em><strong>0</strong></em>{:/}
**Choice Of Accession Numbers**{::nomarkdown}<pre><code>  choice_of_accession_numbers</code></pre>{:/} | 14 | If you are running this system in parallel with another, setting this field to YES enables you to change or choose accession numbers.  When actually running, this field should be set to NO. | ENUMERATION |  | {::nomarkdown}NOT ALLOWED: <em><strong>0</strong></em><br/>ALLOWED: <em><strong>1</strong></em>{:/}
**Grace Period For Orders**{::nomarkdown}<pre><code>  grace_period_for_orders</code></pre>{:/} | 15 | This is the number of days that inactive orders will be kept.  (Minimum is 7 days.) | NUMERIC | REQUIRED | 
**Grace Period For Cumulative**{::nomarkdown}<pre><code>  grace_period_for_cumulative</code></pre>{:/} | 16 | The cumulative report (^LAC global) will be purged automatically when<br/>the cumulative report is run.  Inpatient data is not purged.  Patients<br/>currently enrolled in clinics are not purged.  All other data (inactive<br/>for the number of days specified by this field) is purged.<br/>No entry means that no data will be purged. | NUMERIC |  | 
**Wkld Stats On**{::nomarkdown}<pre><code>  wkld_stats_on</code></pre>{:/} | 17 | To have WKLD statistics collected at the time of accessioning and<br/>verification, set this field to YES.<br/>  This is the primary switch to turn on workload collection. This<br/>entry turns off the entire function.<br/>  There is also a secondary switch (field) which allow each accession<br/>area to be turned on independently. It must also be answered yes to<br/>allow workload data collection in that specific accession area. <br/> It is located in the ACCESSION AREA file (#68), WORKLOAD ON field<br/>(#10).<br/>  NOTE: BOTH FIELDS MUST BE ANSWERED YES TO ALLOW WORKLOAD DATA TO<br/>BE ACCUMULATED. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
***amis/cap Default**{::nomarkdown}<pre><code>  amis_cap_default</code></pre>{:/} | 17.1 |  This field is marked for deletion. It is no longer used after version<br/>5.2 Workload release.<br/>default AMIS/CAP code for each test.<br/> <br/>A YES entry means that the defaults setup in file 60 will be used<br/>and no extra AMIS/CAP related questions are asked at the time of verification<br/>unless you have indicated in the field ASK AMIS/CAP CODES in file 60 that<br/>the specific test on the accession being verified should have the<br/>AMIS/CAP code questions asked. | BOOLEAN | DEPRECATED | 
***grace Period For Statistics**{::nomarkdown}<pre><code>  grace_period_for_statistics</code></pre>{:/} | 18 | NOTE: THIS FIELD NO LONGER SERVES THIS FUNCTION. IT WILL BE DELETED<br/>IN 18 MONTHS AFTER THE RELEASE OF V 5.2.<br/>field to determine the number of days to go back to before purging<br/>data from these files.  Allow enough time for you to get your<br/>monthly or quarterly lab statistics reports. | NUMERIC | DEPRECATED | 
**Grace Period For Inactivity**{::nomarkdown}<pre><code>  grace_period_for_inactivity</code></pre>{:/} | 19 | Enter the number of days that a patient has to be inactive (no lab orders),<br/>for the "Force cumulative data to permanent page" option to identify the<br/>patient data as qualified to be forced to permanent. | NUMERIC |  | 
**Days Back For Delta Checks**{::nomarkdown}<pre><code>  days_back_for_delta_checks</code></pre>{:/} | 20 | The number of days going backwards to use for delta checking. | NUMERIC |  | 
**Last Ien Processed**{::nomarkdown}<pre><code>  last_ien_processed</code></pre>{:/} | 64.913 | This is the last IEN processed by the TaskMan<br/>job that monitors the LABORATORY TEST (#60)<br/>file for changes that might require quick order <br/>updates. This field is updated by a TaskMan<br/>job so it is recommended you DO NOT edit this<br/>field manually. | NUMERIC |  | 
**Last Date Processed**{::nomarkdown}<pre><code>  last_date_processed</code></pre>{:/} | 64.914 | This is the last date/time processed by the TaskMan<br/>job that monitors the LABORATORY TEST (#60)<br/>file for changes that might require quick order <br/>updates. This field is updated by a TaskMan job so <br/>it is recommended you DO NOT edit this field manually. | DATE-TIME |  | 
**Loinc Historical Mapping Date**{::nomarkdown}<pre><code>  loinc_historical_mapping_date</code></pre>{:/} | 95.3 | This is the date that the LOINC Historical mapping was completed. The LAB <br/>DATA LOINC Mapping [LR LOINC HISTORICAL MAPPER 63] option populates this <br/>field after it has successfully completed all mapping. | DATE-TIME |  | 
**Loinc Historical Last Lrdfn**{::nomarkdown}<pre><code>  loinc_historical_last_lrdfn</code></pre>{:/} | 95.31 | This field contains the last LRDFN that was mapped by the LAB <br/>DATA LOINC Mapping [LR LOINC HISTORICAL MAPPER 63] option. | NUMERIC |  | 
**Default Blood Specimen**{::nomarkdown}<pre><code>  default_blood_specimen</code></pre>{:/} | 100 | The blood specimen that will be used as a default choice. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Default Urine Specimen**{::nomarkdown}<pre><code>  default_urine_specimen</code></pre>{:/} | 101 | The urine specimen that will be used as a default choice. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Default Serum Specimen**{::nomarkdown}<pre><code>  default_serum_specimen</code></pre>{:/} | 102 | The serum specimen that will be used as a default choice. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Default Plasma Specimen**{::nomarkdown}<pre><code>  default_plasma_specimen</code></pre>{:/} | 103 | The plasma specimen that will be used as a default choice. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Default Unknown Specimen**{::nomarkdown}<pre><code>  default_unknown_specimen</code></pre>{:/} | 104 | When the specimen is unknown, this is the specimen that will be chosen. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Default Nature Of Order**{::nomarkdown}<pre><code>  default_nature_of_order</code></pre>{:/} | 150.1 | This is the default Nature of order for orders placed with Lab options.<br/>This field points to OE/RR's Nature of order file. | POINTER |  | [Nature_Of_Order-100_02](Nature_Of_Order-100_02)
**Default Dc Reason**{::nomarkdown}<pre><code>  default_dc_reason</code></pre>{:/} | 150.2 | This is the default DC Reason used when orders are canceled or deleted<br/>with Lab options.  This field points to OE/RR's Order Reason file. | POINTER |  | [Order_Reason-100_03](Order_Reason-100_03)
**Micro Survey Report Defaults**{::nomarkdown}<pre><code>  micro_survey_report_defaults</code></pre>{:/} | 200 |   This field contains the default parameters used to print Micro survey<br/>report. | ENUMERATION |  | {::nomarkdown}PHYSICIAN: <em><strong>D</strong></em><br/>ORGANISM: <em><strong>O</strong></em><br/>COLLECTION SAMPLE: <em><strong>C</strong></em><br/>PATIENT: <em><strong>P</strong></em><br/>LOCATION: <em><strong>L</strong></em>{:/}
**Micro Trend Report Defaults**{::nomarkdown}<pre><code>  micro_trend_report_defaults</code></pre>{:/} | 201 |  This field contains the default parameters for the Micro Trend Report. | ENUMERATION |  | {::nomarkdown}PHYSICIAN: <em><strong>D</strong></em><br/>PATIENT: <em><strong>P</strong></em><br/>COLLECTION SAMPLE: <em><strong>C</strong></em><br/>LOCATION: <em><strong>L</strong></em><br/>SITE/SPECIMEN: <em><strong>S</strong></em><br/>ORGANISM: <em><strong>O</strong></em>{:/}
**Micro Report Format**{::nomarkdown}<pre><code>  micro_report_format</code></pre>{:/} | 202 | The output of the microbiology patient's report can display antibiotic<br/>susceptiblities as:  I - interpretation only,  R - results only, or<br/>B - both interpretation and results.  No entry will default to<br/>interpretation only. | ENUMERATION |  | {::nomarkdown}BOTH INTERPRETATION AND RESULT: <em><strong>B</strong></em><br/>RESULT ONLY: <em><strong>R</strong></em><br/>INTERPRETATION ONLY: <em><strong>I</strong></em>{:/}
**Micro Default Template**{::nomarkdown}<pre><code>  micro_default_template</code></pre>{:/} | 203 | Contains the edit template name that will be used for entering<br/>antimicrobial results for those organisms that do not have a<br/>SUSCEPTIBILITY EDIT TEMPLATE defined in the ETIOLOGY file. | STRING |  | 
**Micro Other Template**{::nomarkdown}<pre><code>  micro_other_template</code></pre>{:/} | 204 | Contains the edit template name that will be used for entering <br/>antimicobial results that are not on the template specific for the <br/>organism.  Generally, this template will include all antibiotic fields <br/>being reported. | STRING |  | 
**Download Full Data**{::nomarkdown}<pre><code>  download_full_data</code></pre>{:/} | 210 | This field is used to determine how much data is to be downloaded to<br/>an instrument. If this field is set to download full data it will send<br/>data for all those instrument fields we have data for.  A caution when<br/>setting this field is that the more data sent to the instrument the<br/>larger the records get and the longer it takes to complete a download.<br/>Also if there is limited disk space on the instrument you may  overrun<br/>the space available causing the download to abort before you have all<br/>the data downloaded.  This may cause the instrument to stop its<br/>processing until you correct the problem. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Hold-over Sort Urgency**{::nomarkdown}<pre><code>  holdover_sort_urgency</code></pre>{:/} | 300 | This is the urgency of hold-overs in building a load list.  '0' is before STAT, and '10' is after ROUTINE.  Choose from the numbers listed in the URGENCY file. | NUMERIC | REQUIRED | 
**Default Urgency**{::nomarkdown}<pre><code>  default_urgency</code></pre>{:/} | 301 | The urgency that will be used as the default choice, usually Routine. | POINTER | REQUIRED | [Urgency-62_05](Urgency-62_05)
**Label Type**{::nomarkdown}<pre><code>  label_type</code></pre>{:/} | 302 | Determines the format of the label that is printed.  Choice of predefined<br/> default label (Null), 2x5 uneven (SLC special #1), or Order # first (#2),<br/> Medlab 7 part (#3), Site file label (routine LRLABEL4, #4), Site<br/> developed (VAF 10-1392) label (routine LRLABEL5, #5).<br/>Intermec printer, label stock No. 049114 1X3 inch (routine LRLABEL6, #6) | ENUMERATION |  | {::nomarkdown}INTERMEC 1X3: <em><strong>6</strong></em><br/>ORDER # FIRST: <em><strong>2</strong></em><br/>SITE FILE: <em><strong>4</strong></em><br/>2X5 UNEVEN: <em><strong>1</strong></em><br/>MEDLAB: <em><strong>3</strong></em><br/>SITE DEVELOPED (VAF 10-1392): <em><strong>5</strong></em>{:/}
**Log Printer For Routine Lc**{::nomarkdown}<pre><code>  log_printer_for_routine_lc</code></pre>{:/} | 303 | This is the device you want the Routine Lab Collect Request to print on.<br/>  It is recommended that this printer be different one than the<br/>one use for immediate lab collect listing. | POINTER |  | [Device-3_5](Device-3_5)
**Reserved Field #1**{::nomarkdown}<pre><code>  reserved_field_number1</code></pre>{:/} | 304 |  This field is reserved for future development. Will be used to indicate<br/>if data can be transferred to a foreign computer.<br/>  NOT PRESENTLY USED | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Printer Division**{::nomarkdown}<pre><code>  printer_division</code></pre>{:/} | 350 | This sub-file is for multidivisional sites that wish to print lab collect<br/>orders at separate divisions.  If this field is left blank, then the #303<br/>Log Printer for Routine LC is used.  Also, this sub-file is for multi-<br/>divisional sites that wish to have default label printers from LABLABEL to<br/>a division specific printer. | OBJECT |  | [Printer_Division-69_9007](#Printer_Division-69_9007)
**Label Device**{::nomarkdown}<pre><code>  label_device</code></pre>{:/} | 360 | Used by Laboratory software to identify which devices are label printers.<br/>This allows the software to handle various types of label printers and<br/>label stock. | OBJECT |  | [Label_Device-69_9008](#Label_Device-69_9008)
**Phlebotomy Order Cut-off Time**{::nomarkdown}<pre><code>  phlebotomy_order_cutoff_time</code></pre>{:/} | 400 | The order cut-off time for associated collection time.  Time is in 24 hour<br/>format.  Orders placed after the cut-off time will be put on the next<br/>routine lab collection. | OBJECT |  | [Phlebotomy_Order_Cutoff_Time-69_9001](#Phlebotomy_Order_Cutoff_Time-69_9001)
**Collect Thursday Orders In **{::nomarkdown}<pre><code>  collect_thursday_orders_in_</code></pre>{:/} | 500 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Fridays Orders In**{::nomarkdown}<pre><code>  collect_fridays_orders_in</code></pre>{:/} | 501 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Saturdays Orders In**{::nomarkdown}<pre><code>  collect_saturdays_orders_in</code></pre>{:/} | 502 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Sundays Orders In**{::nomarkdown}<pre><code>  collect_sundays_orders_in</code></pre>{:/} | 503 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Mondays Orders In**{::nomarkdown}<pre><code>  collect_mondays_orders_in</code></pre>{:/} | 504 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Tuesdays Orders In**{::nomarkdown}<pre><code>  collect_tuesdays_orders_in</code></pre>{:/} | 505 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Collect Wednesdays Orders In**{::nomarkdown}<pre><code>  collect_wednesdays_orders_in</code></pre>{:/} | 506 | The number of days until the next phlebotomy collection. | NUMERIC | REQUIRED | 
**Ignore Holidays**{::nomarkdown}<pre><code>  ignore_holidays</code></pre>{:/} | 507 |   This field indicates if this institution operates at full service during<br/>federal holidays. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Excepted Locations**{::nomarkdown}<pre><code>  excepted_locations</code></pre>{:/} | 509 |  This field contains those locations which have special printing or specimen<br/>collection status apart from other hospital locations. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Building Collection List**{::nomarkdown}<pre><code>  building_collection_list</code></pre>{:/} | 510 | This field is here only to allow a site to reset it if the system stopped<br/>during the building of the phlebotomy collection list.<br/>IF THE USER SETS THIS TO YES THE COLLECTION LIST WILL NOT WORK!!! | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Collection List Build $h**{::nomarkdown}<pre><code>  collection_list_build_h</code></pre>{:/} | 511 | This field is used and filled in by the collection list when it is<br/>built.  It contains the date that the list was built.<br/>For troubleshooting purposes only. | STRING |  | 
**Collection List Builder (duz)**{::nomarkdown}<pre><code>  collection_list_builder_duz</code></pre>{:/} | 512 | This field is used and filled in by the collection list when it is <br/>built.  It contains the DUZ of the user that built the list.<br/>For troubleshooting purposes only. | NUMERIC |  | 
**Collection List Time**{::nomarkdown}<pre><code>  collection_list_time</code></pre>{:/} | 513 | This field is used and filled in by the collection list when it is<br/>built.  It contains the time that the list is built.<br/>For troubleshooting purposes only. | DATE-TIME |  | 
**Collection List Print Count**{::nomarkdown}<pre><code>  collection_list_print_count</code></pre>{:/} | 514 | This field is used and filled in by the collection list when it is<br/>built and printed.  It contains a count of the number of times<br/>a collection list is printed.<br/>For troubleshooting purposes only. | NUMERIC |  | 
**Date Rollover Last Run**{::nomarkdown}<pre><code>  date_rollover_last_run</code></pre>{:/} | 520 | This field contains the date that Rollover last run. | STRING |  | 
**Rollover Running**{::nomarkdown}<pre><code>  rollover_running</code></pre>{:/} | 521 | This field will be automatically set to YES when rollover is running. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Standard Locations Only**{::nomarkdown}<pre><code>  standard_locations_only</code></pre>{:/} | 530 | If you want to restrict accessioning to only allow the entry of<br/>standard locations (locations defined in the Hospital location<br/>file), set this field to YES. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Archive Data**{::nomarkdown}<pre><code>  archive_data</code></pre>{:/} | 600 |  This field contains a history of archive activity done in the past. It<br/>also may contain information concerning archive process in progress. | OBJECT |  | [Archive_Data-69_9003](#Archive_Data-69_9003)
**Default Provider**{::nomarkdown}<pre><code>  default_provider</code></pre>{:/} | 601 | Enter a 1 if you want to be defaulted with a provider if the patient is<br/>an outpatient. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Combine Test During Order**{::nomarkdown}<pre><code>  combine_test_during_order</code></pre>{:/} | 602 |    This field allows a site to turn on or off the feature of combining test with in<br/>a panel which have the same sample and urgency during the ordering process.<br/>The software will check here first before attempting to combine single test<br/>with profiles. If there are certain test which never should be combined,<br/>edit ^LAB(60, field SHOULD NOT BE COMBINE. Then this test will not be combine with<br/>any other panel during ordering process. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Last Lrdfn Archive Search**{::nomarkdown}<pre><code>  last_lrdfn_archive_search</code></pre>{:/} | 603 | This field contains the last LRDFN that was found that required archiving<br/>during the search process of lab archive. | NUMERIC |  | 
**Last Purged Lrdfn From Archive**{::nomarkdown}<pre><code>  last_purged_lrdfn_from_archive</code></pre>{:/} | 604 | This is the last LRDFN that the archive process had purged from the<br/>LAR global. | NUMERIC |  | 
**Tape Number**{::nomarkdown}<pre><code>  tape_number</code></pre>{:/} | 605 | This field contains the tape number that the archive process is using<br/>during the output of archive data to a tape media. | NUMERIC |  | 
**# Of Days For Errors**{::nomarkdown}<pre><code>  number_of_days_for_errors</code></pre>{:/} | 606 |  This field is used by the ^LABERR routine to determine the how many days<br/>before auto-instrument errors will be purged out of ^LA("ERR"). If this<br/>entry is blank, a default value of 3 days will be used. | NUMERIC |  | 
**Default Opt Treating Sp. **{::nomarkdown}<pre><code>  default_opt_treating_sp_</code></pre>{:/} | 607 |  This field will be used as the default treating speciality for all<br/>out patient workload data collection for WKLD. It is recommended that<br/>an entry in the FACILITY TREATING SPECIALITY (#45.7) be made for<br/>AMBULATORY CARE.<br/>  Then use that entry in this field.  IF THIS FIELD IS BLANK, THEN<br/>THERE WILL BE NO TREATING SPECIALITY FOR OUTPATIENT WORKLOAD.<br/>PURPOSES. | POINTER |  | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)
**Lrnight**{::nomarkdown}<pre><code>  lrnight</code></pre>{:/} | 608 | This node is used for preventing two copies of the WORKLOAD data<br/>collection routine from being executed at the same time.  This<br/>node contains the date/time that the WORKLOAD collection routine<br/>began processing the data.  The node is set to null when the <br/>process completes.  This node should NOT be set through FILEMAN.<br/>TO RECOVER AFTER A SYSTEM FAILURE: DELETE THIS ENTRY TO ALLOW THE<br/>WORKLOAD COLLECTION ROUTINE TO PROCEED. | STRING |  | 
**Phleb/stop Code Running**{::nomarkdown}<pre><code>  phleb_stop_code_running</code></pre>{:/} | 609 |   Do not enter a date in this field. Doing so may stop the data collection<br/>process. The routines will fill in the field during the data collection<br/>process and delete the date when the process has gone to a normal completion.<br/>  If the system goes down during the data collection process, you must delete the date from this field. When the scheduled run time occures, the data collect-<br/>ion will continue automatically.<br/> However if the routine error doing the collection process this field<br/>will contain the word 'ERROR' followed by the date when the error occured.<br/>If this is the case, you may wish to contact your IRM service for assistance.<br/>If the error appears two days in session, contact your IRM service. | DATE-TIME |  | 
**Clinic Stop Code**{::nomarkdown}<pre><code>  clinic_stop_code</code></pre>{:/} | 611 |  Enter the clinic stop code to used by the laboratory for the MAS<br/>package stop code credit.  Generally the code number is 108. Select<br/>the stop code with the STOP CODE of 108.<br/> NOTE: THE DEFAULT VALUE IS 108. | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Counting Bb Workload**{::nomarkdown}<pre><code>  counting_bb_workload</code></pre>{:/} | 612 |  This field is filled in by the routine while it processes the Blood Bank<br/>workload. | STRING |  | 
**Urgency Alert**{::nomarkdown}<pre><code>  urgency_alert</code></pre>{:/} | 613 |  This field is used as a cutoff level (urgency) to control the<br/>flashing the urgency alert display during verification.<br/>  Any urgency equal or less than this urgency will cause the<br/>display to flash.<br/>  For example, if you enter the urgency of OUTPATIENT, it has a<br/>value of 3. Then the urgencies of STAT, ASAP and OUTPATIENT for any <br/>accession will be flashed on the screen when data is entered.<br/>    NOTE - If your ternimal type file is setup incorrectly or the<br/>terminal you are using does not support reverse video, the urgency<br/>will not flash, it will merely be displayed. | POINTER |  | [Urgency-62_05](Urgency-62_05)
***tramsmit Clinic Stop Codes**{::nomarkdown}<pre><code>  tramsmit_clinic_stop_codes</code></pre>{:/} | 614 |  This field is no longer used to control reporting of clinic stop codes.<br/>The PCE package has replaced the  clinic stop codes with CPT codes for<br/>each test collected. You should now use PCE/VSIT ON (#615) in <br/>LABORATORY SITE (#69.9) file to control both clinic stop code and CPT code<br/>transmission. Patch LR*5.2*127 automatically sets the PCE/VSIT ON field<br/>to report both clinic stop and CPT codes. It expected that beginning with<br/>Oct. 1, 1996 VA DHCP will begin reporting workload using CPT codes. Logic<br/>has been built into the software to determine when to start reporting CPT<br/>codes to the PCE package.<br/> <br/>This field will be retired in future version. | BOOLEAN | DEPRECATED | 
**Pce/vsit On**{::nomarkdown}<pre><code>  pce_vsit_on</code></pre>{:/} | 615 |  This field controls how clinic stop codes are reported. Laboratory<br/>encounters are being converted from Clinic Stop Codes to CPT codes. CPT<br/>codes are passed via a PCE interface.<br/> <br/> Enter OFF to stop all reporting.<br/> Enter PCE/VSIT to send only CPT codes and no Clinic Stop Code<br/>  Reporting.<br/> Enter BOTH PCE/VSIT AND STOP CODES to continue sending Stop codes<br/>  in addition to CPT Codes. | ENUMERATION |  | {::nomarkdown}PCE/VSIT ONLY: <em><strong>1</strong></em><br/>BOTH PCE/VSIT AND STOP CODES: <em><strong>2</strong></em><br/>OFF: <em><strong>0</strong></em>{:/}
**Collect Wkld Log File Data**{::nomarkdown}<pre><code>  collect_wkld_log_file_data</code></pre>{:/} | 616 | The use of this field must be coordinated with the local DSS program<br/>official. New functionality now extracts this data in batch mode.<br/>All data in this file is purged before each batch data extraction<br/>session.<br/> <br/>HIGHLY RECOMMEND THIS FIELD BE SET TO NULL<br/> <br/> <br/> This field controls if data should be accumulated in the <br/>WKLD LOG FILE (#64.03). This file can be used for special onsite<br/>local interest in laboratory workload. This file contains information<br/>about what test are performed by the laboratory. Any special cost<br/>analysis study can make use of this file without having to actually<br/>navigate through various globals to obtain data. DSS/DMSS project<br/>will find the file very useful.<br/>  Also there is an option provided to allow printing of this file<br/>with suitable cell separators for downloading to spread sheets operating<br/>on PC based systems. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Pce Default Provider**{::nomarkdown}<pre><code>  pce_default_provider</code></pre>{:/} | 617 |  The provider entered will be used if the ordering provider has been<br/>terminated or does not have a person class assigned on the date of the<br/>encounter (LAB ARRIVAL TIME). Great care should be taken not to terminate<br/>or remove the default provider's person class. In addition the person<br/>class should be appropriate for a primary care provider. Failure to enter<br/>or the removal of the default provider will cause ALL WORKLOAD REPORTING<br/>TO STOP. No workload will be passed to PCE and no laboratory phlebotomy<br/>workload will be collected.<br/> <br/>If this field is vacant or the default provider becomes invalid NO<br/>WORKLOAD IS COLLECTED. None of the workload data is lost. The workload<br/>processing software will resume processing stored data once a valid<br/>default provider is entered. | POINTER |  | [New_Person-200](New_Person-200)
**Division Parameters**{::nomarkdown}<pre><code>  division_parameters</code></pre>{:/} | 618 |  | OBJECT |  | [Division_Parameters-69_9618](#Division_Parameters-69_9618)
**Ap Esig On**{::nomarkdown}<pre><code>  ap_esig_on</code></pre>{:/} | 619 | This field is used to activate the electronic signature function for Anatomic<br/>Pathology reports.  If the flag is turned on, at the time a report is<br/>verified/released, the user will be prompted for an electronic signature.  The<br/>document will then be stored in TIU.  If the flag is off, the report will be<br/>verified/released without electronic signature and the document will not be<br/>stored in TIU. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Panel Process Date**{::nomarkdown}<pre><code>  panel_process_date</code></pre>{:/} | 620 | The day of the month used for processing panel tests that contain <br/>pending atomic tests for the prior calendar month.  This should be<br/>one day prior to the monthly PCE roll-up date. | DATE-TIME |  | 

### Subfile
#### <a name="Immed_Lab_Collect_Div-69_9006"></a>Immed Lab Collect Div.

<dl>
<dt>ID</dt><dd>Immed_Lab_Collect_Div-69_9006</dd>
<dt>File Type</dt><dd>69.9006</dd>
<dt>Label</dt><dd>Immed Lab Collect Div.</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Immed Collection Div.**{::nomarkdown}<pre><code>  immed_collection_div</code></pre>{:/} | .01 |  | POINTER | REQUIRED | [Institution-4](Institution-4)
**Holidays ?**{::nomarkdown}<pre><code>  holidays_</code></pre>{:/} | .03 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Immed Lab Collect Printer**{::nomarkdown}<pre><code>  immed_lab_collect_printer</code></pre>{:/} | .05 |  This is the printer to which Immediate Lab Collect request will print.<br/>It is recommended that this printer be different than the printer used<br/>for logging routine lab collect. | POINTER |  | [Device-3_5](Device-3_5)
**Minimum Response Time**{::nomarkdown}<pre><code>  minimum_response_time</code></pre>{:/} | .06 |  | NUMERIC |  | 
**Maxium Hours Ahead Allowed**{::nomarkdown}<pre><code>  maxium_hours_ahead_allowed</code></pre>{:/} | .07 |  | NUMERIC |  | 
**Sunday**{::nomarkdown}<pre><code>  sunday</code></pre>{:/} | 1 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Sun Start Time**{::nomarkdown}<pre><code>  sun_start_time</code></pre>{:/} | 1.1 |  | NUMERIC |  | 
**Sun End Time**{::nomarkdown}<pre><code>  sun_end_time</code></pre>{:/} | 1.2 |  | NUMERIC |  | 
**Monday**{::nomarkdown}<pre><code>  monday</code></pre>{:/} | 2 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Mon Start Time**{::nomarkdown}<pre><code>  mon_start_time</code></pre>{:/} | 2.1 |  | NUMERIC |  | 
**Mon End Time**{::nomarkdown}<pre><code>  mon_end_time</code></pre>{:/} | 2.2 |  | NUMERIC |  | 
**Tuesday**{::nomarkdown}<pre><code>  tuesday</code></pre>{:/} | 3 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Tue Start Time**{::nomarkdown}<pre><code>  tue_start_time</code></pre>{:/} | 3.1 |  | NUMERIC |  | 
**Tue End Time**{::nomarkdown}<pre><code>  tue_end_time</code></pre>{:/} | 3.2 |  | NUMERIC |  | 
**Wednesday**{::nomarkdown}<pre><code>  wednesday</code></pre>{:/} | 4 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Wed Start Time**{::nomarkdown}<pre><code>  wed_start_time</code></pre>{:/} | 4.1 |  | NUMERIC |  | 
**Wed End Time**{::nomarkdown}<pre><code>  wed_end_time</code></pre>{:/} | 4.2 |  | NUMERIC |  | 
**Thursday**{::nomarkdown}<pre><code>  thursday</code></pre>{:/} | 5 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Thu Start Time**{::nomarkdown}<pre><code>  thu_start_time</code></pre>{:/} | 5.1 |  | NUMERIC |  | 
**Thu End Time**{::nomarkdown}<pre><code>  thu_end_time</code></pre>{:/} | 5.2 |  | NUMERIC |  | 
**Friday**{::nomarkdown}<pre><code>  friday</code></pre>{:/} | 6 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Fri Start Time**{::nomarkdown}<pre><code>  fri_start_time</code></pre>{:/} | 6.1 |  | NUMERIC |  | 
**Fri End Time**{::nomarkdown}<pre><code>  fri_end_time</code></pre>{:/} | 6.2 |  | NUMERIC |  | 
**Saturday**{::nomarkdown}<pre><code>  saturday</code></pre>{:/} | 7 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Sat Start Time**{::nomarkdown}<pre><code>  sat_start_time</code></pre>{:/} | 7.1 |  | NUMERIC |  | 
**Sat End Time**{::nomarkdown}<pre><code>  sat_end_time</code></pre>{:/} | 7.2 |  | NUMERIC |  | 
**Immed Collect On**{::nomarkdown}<pre><code>  immed_collect_on</code></pre>{:/} | 8 |  | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}

#### <a name="Blood_Bank_Defaults-69_98"></a>Blood Bank Defaults

<dl>
<dt>ID</dt><dd>Blood_Bank_Defaults-69_98</dd>
<dt>File Type</dt><dd>69.98</dd>
<dt>Label</dt><dd>Blood Bank Defaults</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Blood Bank Option**{::nomarkdown}<pre><code>  blood_bank_option</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**First Default**{::nomarkdown}<pre><code>  first_default</code></pre>{:/} | .02 |  DONOR: Move ABO/Rh test results to inventory file<br/> INVENTORY:<br/> PATIENT: Direct Coombs testing default | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Second Default**{::nomarkdown}<pre><code>  second_default</code></pre>{:/} | .03 | DONOR: ASK MILITARY RANK | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Third Default**{::nomarkdown}<pre><code>  third_default</code></pre>{:/} | .04 |  DONOR: ASK BAG LOT NUMBER | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Fourth Default**{::nomarkdown}<pre><code>  fourth_default</code></pre>{:/} | .05 | DONOR: ASK SOCIAL SECURITY NUMBER | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Fifth Default**{::nomarkdown}<pre><code>  fifth_default</code></pre>{:/} | .06 | DONOR: Turn on ALT testing | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Sixth Default**{::nomarkdown}<pre><code>  sixth_default</code></pre>{:/} | .07 | DONOR: Turn on HIV ANTIGEN testing | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Seventh Default**{::nomarkdown}<pre><code>  seventh_default</code></pre>{:/} | .08 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Major Section**{::nomarkdown}<pre><code>  major_section</code></pre>{:/} | .1 |  | POINTER |  | [Accession-68](Accession-68)
**Subsection**{::nomarkdown}<pre><code>  subsection</code></pre>{:/} | .11 |  | POINTER |  | [Accession-68](Accession-68)

#### <a name="Blood_Bank_Institution-69_981"></a>Blood Bank Institution

<dl>
<dt>ID</dt><dd>Blood_Bank_Institution-69_981</dd>
<dt>File Type</dt><dd>69.981</dd>
<dt>Label</dt><dd>Blood Bank Institution</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Blood Bank Division**{::nomarkdown}<pre><code>  blood_bank_division</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Inventory Major Section**{::nomarkdown}<pre><code>  inventory_major_section</code></pre>{:/} | .02 |  | POINTER |  | [Accession-68](Accession-68)
**Inventory Subsection**{::nomarkdown}<pre><code>  inventory_subsection</code></pre>{:/} | .03 |  | POINTER |  | [Accession-68](Accession-68)
**Donor Major Section**{::nomarkdown}<pre><code>  donor_major_section</code></pre>{:/} | .04 |  | POINTER |  | [Accession-68](Accession-68)
**Donor Subsection**{::nomarkdown}<pre><code>  donor_subsection</code></pre>{:/} | .05 |  | POINTER |  | [Accession-68](Accession-68)
**Multiple Accession Area**{::nomarkdown}<pre><code>  multiple_accession_area</code></pre>{:/} | .06 |  | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}

#### <a name="Hospital_Site-69_99"></a>Hospital Site

<dl>
<dt>ID</dt><dd>Hospital_Site-69_99</dd>
<dt>File Type</dt><dd>69.99</dd>
<dt>Label</dt><dd>Hospital Site</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Hospital Site**{::nomarkdown}<pre><code>  hospital_site</code></pre>{:/} | .01 | This is the hospital site where parameters may aply. | POINTER | REQUIRED | [Hospital_Location-44](Hospital_Location-44)
**Max Days For Continuous Orders**{::nomarkdown}<pre><code>  max_days_for_continuous_orders</code></pre>{:/} | 1 | This is the maximum number of days that multiple-continuous orders<br/>can be placed for this location. | NUMERIC |  | 
**Ask Urgency**{::nomarkdown}<pre><code>  ask_urgency</code></pre>{:/} | 4 | Answer YES to this field to prompt with urgency for every test when <br/>ordering through OE/RR.  Tests with a forced urgency as defined in the<br/>Laboratory test file overide this parameter. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Default Type For Quick Orders**{::nomarkdown}<pre><code>  default_type_for_quick_orders</code></pre>{:/} | 5 | The entry in this field will determine the type of collection that 'Quick<br/>Orders' will have assigned to them.<br/>ex: Ward Collect, Send Patient or Lab Collect | ENUMERATION |  | {::nomarkdown}LAB COLLECT: <em><strong>LC</strong></em><br/>WARD COLLECT: <em><strong>WC</strong></em><br/>SEND PATIENT: <em><strong>SP</strong></em>{:/}

#### <a name="Printer_Division-69_9007"></a>Printer Division

<dl>
<dt>ID</dt><dd>Printer_Division-69_9007</dd>
<dt>File Type</dt><dd>69.9007</dd>
<dt>Label</dt><dd>Printer Division</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Printer Division**{::nomarkdown}<pre><code>  printer_division</code></pre>{:/} | .01 | This field should be set equal to the DUZ(2) value. | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Log Printer For Routine Lc**{::nomarkdown}<pre><code>  log_printer_for_routine_lc</code></pre>{:/} | .02 | This is the device you want the Routine Lab Collect Request to print on.<br/>It is recommended that this printer be different one than the one used for<br/>immediate collect listing.  If this field is vacant, the program defaults <br/>to field #303 Log Printer for Routine LC. | POINTER |  | [Device-3_5](Device-3_5)
**Accession Printer**{::nomarkdown}<pre><code>  accession_printer</code></pre>{:/} | .03 |  | POINTER |  | [Device-3_5](Device-3_5)

#### <a name="Label_Device-69_9008"></a>Label Device

<dl>
<dt>ID</dt><dd>Label_Device-69_9008</dd>
<dt>File Type</dt><dd>69.9008</dd>
<dt>Label</dt><dd>Label Device</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Label Device**{::nomarkdown}<pre><code>  label_device</code></pre>{:/} | .01 | Used by Laboratory software to identify which devices are label printers.<br/>This allows the software to handle various types of label printers and<br/>label stock concurrently. It should be useful at multi-divisional and<br/>integrated sites that use a variety of dissimilar equipment/label stock. | POINTER | INDEXED<br/>REQUIRED | [Device-3_5](Device-3_5)
**Printer Type**{::nomarkdown}<pre><code>  printer_type</code></pre>{:/} | .02 | Used to designate if device is a specialized label printer that is<br/>supported by Lab software and to determine the specialized Lab label<br/>routine to use.<br/> <br/>Use "OTHER" when the printer is not compatible with the supported<br/>printers.<br/> <br/>When Lab supports other manufacturers of label printers, they will be added<br/>as supported printers to this field. | ENUMERATION |  | {::nomarkdown}ZEBRA ZPL II COMPATIBLE: <em><strong>2</strong></em><br/>OTHER: <em><strong>0</strong></em><br/>INTERMEC 3000/4000 SERIES: <em><strong>1</strong></em>{:/}
**Label Stock**{::nomarkdown}<pre><code>  label_stock</code></pre>{:/} | .03 | This field is used to designate the type of label stock that is<br/>installed in this printer. | ENUMERATION |  | {::nomarkdown}1X2: <em><strong>2</strong></em><br/>1X3: <em><strong>1</strong></em><br/>2.5X4 10 PART: <em><strong>3</strong></em><br/>OTHER: <em><strong>0</strong></em>{:/}
**Alternate Label Entry**{::nomarkdown}<pre><code>  alternate_label_entry</code></pre>{:/} | .04 | Site can enter an alternate label entry point to be used instead of <br/>the standard lab label routines used by the lab package when printing<br/>labels using this device. Field ALTERNATE LABEL ROUTINE (#.05) must be<br/>completed for software to use this field. | STRING |  | 
**Alternate Label Routine**{::nomarkdown}<pre><code>  alternate_label_routine</code></pre>{:/} | .05 | Site can enter an alternate label routine to be used instead of the standard<br/>lab label routines used by the lab package when printing labels using this<br/>device. | STRING |  | 
**Default Accession Area**{::nomarkdown}<pre><code>  default_accession_area</code></pre>{:/} | .06 | This field is used by the label software when printing test or future<br/>order labels. When printing these types of labels, there is no accession<br/>area identified to obtain additional label characteristics such as type<br/>of barcode or accession area alternate label routine.<br/> <br/>The accession area designated for this device will be used by the software<br/>to obtain accession area specific characteristics when printing labels which<br/>are not associated with any particular accession area. Examples of these<br/>characteristics are barcode type, number of pad digits for barcode number,<br/>and alternate label routine. | POINTER |  | [Accession-68](Accession-68)

#### <a name="Phlebotomy_Order_Cutoff_Time-69_9001"></a>Phlebotomy Order Cut-off Time

<dl>
<dt>ID</dt><dd>Phlebotomy_Order_Cutoff_Time-69_9001</dd>
<dt>File Type</dt><dd>69.9001</dd>
<dt>Label</dt><dd>Phlebotomy Order Cut-off Time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Phlebotomy Order Cut-off Time**{::nomarkdown}<pre><code>  phlebotomy_order_cutoff_time</code></pre>{:/} | .01 | The order cutoff time for associated collection time. Time is in 24 hour<br/>format.  Orders placed after the cut-off time will be put on the next<br/>routine lab collection. | NUMERIC | REQUIRED | 
**Phlebotomy Collection Time**{::nomarkdown}<pre><code>  phlebotomy_collection_time</code></pre>{:/} | 1 | This is the default time for the routine phlebotomy collection. | NUMERIC | REQUIRED | 
**$h Format For Collection Time**{::nomarkdown}<pre><code>  h_format_for_collection_time</code></pre>{:/} | 2 | This field is computed from what is entered in the PHLEBOTOMY<br/>COLLECTION field. | NUMERIC | INDEXED<br/>REQUIRED | 
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | 3 | Allows a multi-division site to define which collection times are<br/>applicable to which division.  OE/RR-LAB interface uses this to screen<br/>out times for Lab Collection.<br/>DUZ(2) ((users division)) and only allows them to select from collection<br/>times that are appropriate for their division. | POINTER |  | [Institution-4](Institution-4)

#### <a name="Archive_Data-69_9003"></a>Archive Data

<dl>
<dt>ID</dt><dd>Archive_Data-69_9003</dd>
<dt>File Type</dt><dd>69.9003</dd>
<dt>Label</dt><dd>Archive Data</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Logical Name**{::nomarkdown}<pre><code>  logical_name</code></pre>{:/} | .01 | The logical name for the archive media. | STRING | REQUIRED | 
**Physical Name**{::nomarkdown}<pre><code>  physical_name</code></pre>{:/} | 1 | The physical name for the archive media. | STRING |  | 
**Run Date**{::nomarkdown}<pre><code>  run_date</code></pre>{:/} | 2 | The date on which the particular archive run is made. | DATE-TIME |  | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 3 | This field indicates the current status of the archive process. | ENUMERATION |  | {::nomarkdown}Purge done: <em><strong>5</strong></em><br/>Clear: <em><strong>3</strong></em><br/>Purging: <em><strong>4</strong></em><br/>Searching: <em><strong>1</strong></em><br/>Search done: <em><strong>2</strong></em>{:/}
**For Data Before Date**{::nomarkdown}<pre><code>  for_data_before_date</code></pre>{:/} | 4 | The date prior to which data may be archived. | DATE-TIME |  | 

#### <a name="Division_Parameters-69_9618"></a>Division Parameters

<dl>
<dt>ID</dt><dd>Division_Parameters-69_9618</dd>
<dt>File Type</dt><dd>69.9618</dd>
<dt>Label</dt><dd>Division Parameters</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Division Parameters**{::nomarkdown}<pre><code>  division_parameters</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Venipuncture Default Acc Area**{::nomarkdown}<pre><code>  venipuncture_default_acc_area</code></pre>{:/} | 618 | This field will allow the site to assign the venipuncture LMIP workload to<br/>a specific ACCESSION AREA. If this field is blank, the venipuncture<br/>workload software will use the ACCESSION AREA name that begins with 'HEM'.<br/>If there is no ACCESSION AREA with a name beginning with 'HEM', ACCESSION<br/>AREA the internal file number of 10 will be used as the default<br/>Venipuncture Accession Area. | POINTER |  | [Accession-68](Accession-68)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}