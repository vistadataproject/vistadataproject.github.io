---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Laboratory_Site-69_9 

 property | value 
--- | --- 
 id | Laboratory_Site-69_9
 fmId | 69.9
 label | Laboratory Site
 location | ^LAB(69.9,
 description | {::nomarkdown}This file holds specific information which defines certain site parameters<br/>relating to the actual functioning of your laboratory.  The parameters<br/>include the official laboratory site name, whether the physician's name must<br/>be entered when ordering and/or accessioning tests, what type of accession<br/>label format (if any) the lab will be using, and scheduled hours of routine<br/>phlebotomy collection times, as well as others.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_name | .01 | Site Name | {::nomarkdown}There can be only one entry in this file.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| blood_donor_unit_id_prefix | .18 | Blood Donor Unit Id Prefix | {::nomarkdown}The number of eye readable (non bar coded) characters<br/> as a prefix in the blood donor unit ID.<br/> A x-ref will be set ^DD(65.54,4,1,3,1) for the unit ID to exclude<br/> this prefix.{:/} | NUMERIC |  |  |  | 
| default_lab_oos_location | .8 | Default Lab Oos Location | {::nomarkdown}Occassion Of Service (OOS)<br/> <br/>This field contains the default laboratory OOS location use to capture<br/>NPCDB workload. This field should contain the primary institution's<br/>laboratory OOS location. This location is used whenever a given Accession<br/>Area does not have a specific LAB OOS LOCATION assigned to capture NPCDB<br/>workload.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| default_institution | 3 | Default Institution | {::nomarkdown}  Certain workload functions are performed in the background, that is<br/>a user is not identified. In this circumstance, the system has no way<br/>of identifying the institution the workload should be credited. This<br/>field is the default value to be used by the system.<br/>  Enter the institution which should be considered the primary reporting<br/>institution. If this site is a multidivisional site, enter the parent<br/>institution in this field.<br/>  If this field is not filled in the Mailman domain value will be used.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| immed_lab_collect_div | 5.1 | Immed Lab Collect Div. | {::nomarkdown} If your laboratory provides specimen collection service outside<br/>of the normal routine collection, use this subfile to enter data about<br/>your particular site. The parameters of Immediate Lab Collect define one<br/>institution. Therefore, multidivisional sites can have different parameters<br/>for each division.{:/} | [OBJECT] |  |  | [Immed_Lab_Collect_Div-69_9006](#Immed_Lab_Collect_Div-69_9006)  | 
| blood_bank_defaults | 8 | Blood Bank Defaults | {::nomarkdown}Defaults for Donor, Inventory, and Patient portions of the blood bank.{:/} | [OBJECT] |  |  | [Blood_Bank_Defaults-69_98](#Blood_Bank_Defaults-69_98)  | 
| blood_bank_division | 8.1 | Blood Bank Division | {::nomarkdown}  Indicate here which institution will be considered primary for this<br/>site.{:/} | [OBJECT] |  |  | [Blood_Bank_Institution-69_981](#Blood_Bank_Institution-69_981)  | 
| hospital_site | 9 | Hospital Site | {::nomarkdown}This is where parameters are selected for sites throughout the hospital<br/>to control various aspects of lab order entry through OE/RR.{:/} | [OBJECT] |  |  | [Hospital_Site-69_99](#Hospital_Site-69_99)  | 
| ask_provider | 10 | *ask Provider | {::nomarkdown} Because of OERR Alert generation, a provider must be entered for all ordered<br/>test. Therefore this field is no longer active. It will be deleted in a<br/>later version.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| que_chheetc_verified_tests | 11 | Que Ch,he,etc Verified Test(s) | {::nomarkdown}If the verified test notice is to be automatically queued, this field must contain YES.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ask_frozen_section | 11.1 | Ask Frozen Section | {::nomarkdown}If frozen sections are to be put in a separate field (DD(63.08,1.3)<br/> 'YES' should be entered.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| ask_surg_path_diagnosis | 11.2 | Ask Surg Path Diagnosis | {::nomarkdown}If diagnoses are to be put in a separate field 'YES' should <br/>be entered.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| ask_cytopath_diagnosis | 11.3 | Ask Cytopath Diagnosis | {::nomarkdown}If diagnoses are to be put in a separate field 'YES' should <br/>be entered.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| ask_em_diagnosis | 11.4 | Ask Em Diagnosis | {::nomarkdown}If diagnoses are to be put in a separate field 'YES' should <br/>be entered.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| que_micro_verified_testss | 11.5 | Que Micro Verified Tests(s) | {::nomarkdown}If technologist approved work is to be automatically queued, this field<br/>must contain YES.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_labels | 12 | Print Labels | {::nomarkdown}If you want labels automatically printed, this field must contain YES.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| allow_lab_to_add_patients | 13 | Allow Lab To Add Patients | {::nomarkdown}This field is not functional.  It is no longer used to allow Lab to add <br/>patients to the Patient file.    {:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>true</dd></dl>{:/} | 
| choice_of_accession_numbers | 14 | Choice Of Accession Numbers | {::nomarkdown}If you are running this system in parallel with another, setting this field to YES enables you to change or choose accession numbers.  When actually running, this field should be set to NO.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>NOT ALLOWED</dd><dt>1</dt><dd>ALLOWED</dd></dl>{:/} | 
| grace_period_for_orders | 15 | Grace Period For Orders | {::nomarkdown}This is the number of days that inactive orders will be kept.  (Minimum is 7 days.){:/} | NUMERIC |  | REQUIRED |  | 
| grace_period_for_cumulative | 16 | Grace Period For Cumulative | {::nomarkdown}The cumulative report (^LAC global) will be purged automatically when<br/>the cumulative report is run.  Inpatient data is not purged.  Patients<br/>currently enrolled in clinics are not purged.  All other data (inactive<br/>for the number of days specified by this field) is purged.<br/>No entry means that no data will be purged.{:/} | NUMERIC |  |  |  | 
| wkld_stats_on | 17 | Wkld Stats On | {::nomarkdown}To have WKLD statistics collected at the time of accessioning and<br/>verification, set this field to YES.<br/>  This is the primary switch to turn on workload collection. This<br/>entry turns off the entire function.<br/>  There is also a secondary switch (field) which allow each accession<br/>area to be turned on independently. It must also be answered yes to<br/>allow workload data collection in that specific accession area. <br/> It is located in the ACCESSION AREA file (#68), WORKLOAD ON field<br/>(#10).<br/>  NOTE: BOTH FIELDS MUST BE ANSWERED YES TO ALLOW WORKLOAD DATA TO<br/>BE ACCUMULATED.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| amis_cap_default | 17.1 | *amis/cap Default | {::nomarkdown} This field is marked for deletion. It is no longer used after version<br/>5.2 Workload release.<br/>default AMIS/CAP code for each test.<br/> <br/>A YES entry means that the defaults setup in file 60 will be used<br/>and no extra AMIS/CAP related questions are asked at the time of verification<br/>unless you have indicated in the field ASK AMIS/CAP CODES in file 60 that<br/>the specific test on the accession being verified should have the<br/>AMIS/CAP code questions asked.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| grace_period_for_statistics | 18 | *grace Period For Statistics | {::nomarkdown}NOTE: THIS FIELD NO LONGER SERVES THIS FUNCTION. IT WILL BE DELETED<br/>IN 18 MONTHS AFTER THE RELEASE OF V 5.2.<br/>field to determine the number of days to go back to before purging<br/>data from these files.  Allow enough time for you to get your<br/>monthly or quarterly lab statistics reports.{:/} | NUMERIC |  |  |  | 
| grace_period_for_inactivity | 19 | Grace Period For Inactivity | {::nomarkdown}Enter the number of days that a patient has to be inactive (no lab orders),<br/>for the \Force cumulative data to permanent page\ option to identify the<br/>patient data as qualified to be forced to permanent.{:/} | NUMERIC |  |  |  | 
| days_back_for_delta_checks | 20 | Days Back For Delta Checks | {::nomarkdown}The number of days going backwards to use for delta checking.{:/} | NUMERIC |  |  |  | 
| last_ien_processed | 64.913 | Last Ien Processed | {::nomarkdown}This is the last IEN processed by the TaskMan<br/>job that monitors the LABORATORY TEST (#60)<br/>file for changes that might require quick order <br/>updates. This field is updated by a TaskMan<br/>job so it is recommended you DO NOT edit this<br/>field manually.{:/} | NUMERIC |  |  |  | 
| last_date_processed | 64.914 | Last Date Processed | {::nomarkdown}This is the last date/time processed by the TaskMan<br/>job that monitors the LABORATORY TEST (#60)<br/>file for changes that might require quick order <br/>updates. This field is updated by a TaskMan job so <br/>it is recommended you DO NOT edit this field manually.{:/} | DATE-TIME |  |  |  | 
| loinc_historical_mapping_date | 95.3 | Loinc Historical Mapping Date | {::nomarkdown}This is the date that the LOINC Historical mapping was completed. The LAB <br/>DATA LOINC Mapping [LR LOINC HISTORICAL MAPPER 63] option populates this <br/>field after it has successfully completed all mapping.{:/} | DATE-TIME |  |  |  | 
| loinc_historical_last_lrdfn | 95.31 | Loinc Historical Last Lrdfn | {::nomarkdown}This field contains the last LRDFN that was mapped by the LAB <br/>DATA LOINC Mapping [LR LOINC HISTORICAL MAPPER 63] option.{:/} | NUMERIC |  |  |  | 
| default_blood_specimen | 100 | Default Blood Specimen | {::nomarkdown}The blood specimen that will be used as a default choice.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| default_urine_specimen | 101 | Default Urine Specimen | {::nomarkdown}The urine specimen that will be used as a default choice.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| default_serum_specimen | 102 | Default Serum Specimen | {::nomarkdown}The serum specimen that will be used as a default choice.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| default_plasma_specimen | 103 | Default Plasma Specimen | {::nomarkdown}The plasma specimen that will be used as a default choice.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| default_unknown_specimen | 104 | Default Unknown Specimen | {::nomarkdown}When the specimen is unknown, this is the specimen that will be chosen.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| default_nature_of_order | 150.1 | Default Nature Of Order | {::nomarkdown}This is the default Nature of order for orders placed with Lab options.<br/>This field points to OE/RR's Nature of order file.{:/} | POINTER |  |  | Nature_Of_Order-100_02 | 
| default_dc_reason | 150.2 | Default Dc Reason | {::nomarkdown}This is the default DC Reason used when orders are canceled or deleted<br/>with Lab options.  This field points to OE/RR's Order Reason file.{:/} | POINTER |  |  | Order_Reason-100_03 | 
| micro_survey_report_defaults | 200 | Micro Survey Report Defaults | {::nomarkdown}  This field contains the default parameters used to print Micro survey<br/>report.{:/} | [ENUMERATION] |  |  | {PHYSICIAN:D,ORGANISM:O,COLLECTION SAMPLE:C,PATIENT:P,LOCATION:L} | 
| micro_trend_report_defaults | 201 | Micro Trend Report Defaults | {::nomarkdown} This field contains the default parameters for the Micro Trend Report.{:/} | [ENUMERATION] |  |  | {PHYSICIAN:D,PATIENT:P,COLLECTION SAMPLE:C,LOCATION:L,SITE/SPECIMEN:S,ORGANISM:O} | 
| micro_report_format | 202 | Micro Report Format | {::nomarkdown}The output of the microbiology patient's report can display antibiotic<br/>susceptiblities as:  I - interpretation only,  R - results only, or<br/>B - both interpretation and results.  No entry will default to<br/>interpretation only.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>B</dt><dd>BOTH INTERPRETATION AND RESULT</dd><dt>R</dt><dd>RESULT ONLY</dd><dt>I</dt><dd>INTERPRETATION ONLY</dd></dl>{:/} | 
| micro_default_template | 203 | Micro Default Template | {::nomarkdown}Contains the edit template name that will be used for entering<br/>antimicrobial results for those organisms that do not have a<br/>SUSCEPTIBILITY EDIT TEMPLATE defined in the ETIOLOGY file.{:/} | STRING |  |  |  | 
| micro_other_template | 204 | Micro Other Template | {::nomarkdown}Contains the edit template name that will be used for entering <br/>antimicobial results that are not on the template specific for the <br/>organism.  Generally, this template will include all antibiotic fields <br/>being reported.{:/} | STRING |  |  |  | 
| download_full_data | 210 | Download Full Data | {::nomarkdown}This field is used to determine how much data is to be downloaded to<br/>an instrument. If this field is set to download full data it will send<br/>data for all those instrument fields we have data for.  A caution when<br/>setting this field is that the more data sent to the instrument the<br/>larger the records get and the longer it takes to complete a download.<br/>Also if there is limited disk space on the instrument you may  overrun<br/>the space available causing the download to abort before you have all<br/>the data downloaded.  This may cause the instrument to stop its<br/>processing until you correct the problem.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| holdover_sort_urgency | 300 | Hold-over Sort Urgency | {::nomarkdown}This is the urgency of hold-overs in building a load list.  '0' is before STAT, and '10' is after ROUTINE.  Choose from the numbers listed in the URGENCY file.{:/} | NUMERIC |  | REQUIRED |  | 
| default_urgency | 301 | Default Urgency | {::nomarkdown}The urgency that will be used as the default choice, usually Routine.{:/} | POINTER |  | REQUIRED | Urgency-62_05 | 
| label_type | 302 | Label Type | {::nomarkdown}Determines the format of the label that is printed.  Choice of predefined<br/> default label (Null), 2x5 uneven (SLC special #1), or Order # first (#2),<br/> Medlab 7 part (#3), Site file label (routine LRLABEL4, #4), Site<br/> developed (VAF 10-1392) label (routine LRLABEL5, #5).<br/>Intermec printer, label stock No. 049114 1X3 inch (routine LRLABEL6, #6){:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>6</dt><dd>INTERMEC 1X3</dd><dt>2</dt><dd>ORDER # FIRST</dd><dt>4</dt><dd>SITE FILE</dd><dt>1</dt><dd>2X5 UNEVEN</dd><dt>3</dt><dd>MEDLAB</dd><dt>5</dt><dd>SITE DEVELOPED (VAF 10-1392)</dd></dl>{:/} | 
| log_printer_for_routine_lc | 303 | Log Printer For Routine Lc | {::nomarkdown}This is the device you want the Routine Lab Collect Request to print on.<br/>  It is recommended that this printer be different one than the<br/>one use for immediate lab collect listing.{:/} | POINTER |  |  | Device-3_5 | 
| reserved_field_number1 | 304 | Reserved Field #1 | {::nomarkdown} This field is reserved for future development. Will be used to indicate<br/>if data can be transferred to a foreign computer.<br/>  NOT PRESENTLY USED{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| printer_division | 350 | Printer Division | {::nomarkdown}This sub-file is for multidivisional sites that wish to print lab collect<br/>orders at separate divisions.  If this field is left blank, then the #303<br/>Log Printer for Routine LC is used.  Also, this sub-file is for multi-<br/>divisional sites that wish to have default label printers from LABLABEL to<br/>a division specific printer.{:/} | [OBJECT] |  |  | [Printer_Division-69_9007](#Printer_Division-69_9007)  | 
| label_device | 360 | Label Device | {::nomarkdown}Used by Laboratory software to identify which devices are label printers.<br/>This allows the software to handle various types of label printers and<br/>label stock.{:/} | [OBJECT] |  |  | [Label_Device-69_9008](#Label_Device-69_9008)  | 
| phlebotomy_order_cutoff_time | 400 | Phlebotomy Order Cut-off Time | {::nomarkdown}The order cut-off time for associated collection time.  Time is in 24 hour<br/>format.  Orders placed after the cut-off time will be put on the next<br/>routine lab collection.{:/} | [OBJECT] |  |  | [Phlebotomy_Order_Cutoff_Time-69_9001](#Phlebotomy_Order_Cutoff_Time-69_9001)  | 
| collect_thursday_orders_in_ | 500 | Collect Thursday Orders In  | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_fridays_orders_in | 501 | Collect Fridays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_saturdays_orders_in | 502 | Collect Saturdays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_sundays_orders_in | 503 | Collect Sundays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_mondays_orders_in | 504 | Collect Mondays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_tuesdays_orders_in | 505 | Collect Tuesdays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| collect_wednesdays_orders_in | 506 | Collect Wednesdays Orders In | {::nomarkdown}The number of days until the next phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| ignore_holidays | 507 | Ignore Holidays | {::nomarkdown}  This field indicates if this institution operates at full service during<br/>federal holidays.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| excepted_locations | 509 | Excepted Locations | {::nomarkdown} This field contains those locations which have special printing or specimen<br/>collection status apart from other hospital locations.{:/} | [POINTER] |  |  | {id:Hospital_Location-44} | 
| building_collection_list | 510 | Building Collection List | {::nomarkdown}This field is here only to allow a site to reset it if the system stopped<br/>during the building of the phlebotomy collection list.<br/>IF THE USER SETS THIS TO YES THE COLLECTION LIST WILL NOT WORK!!!{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| collection_list_build_h | 511 | Collection List Build $h | {::nomarkdown}This field is used and filled in by the collection list when it is<br/>built.  It contains the date that the list was built.<br/>For troubleshooting purposes only.{:/} | STRING |  |  |  | 
| collection_list_builder_duz | 512 | Collection List Builder (duz) | {::nomarkdown}This field is used and filled in by the collection list when it is <br/>built.  It contains the DUZ of the user that built the list.<br/>For troubleshooting purposes only.{:/} | NUMERIC |  |  |  | 
| collection_list_time | 513 | Collection List Time | {::nomarkdown}This field is used and filled in by the collection list when it is<br/>built.  It contains the time that the list is built.<br/>For troubleshooting purposes only.{:/} | DATE-TIME |  |  |  | 
| collection_list_print_count | 514 | Collection List Print Count | {::nomarkdown}This field is used and filled in by the collection list when it is<br/>built and printed.  It contains a count of the number of times<br/>a collection list is printed.<br/>For troubleshooting purposes only.{:/} | NUMERIC |  |  |  | 
| date_rollover_last_run | 520 | Date Rollover Last Run | {::nomarkdown}This field contains the date that Rollover last run.{:/} | STRING |  |  |  | 
| rollover_running | 521 | Rollover Running | {::nomarkdown}This field will be automatically set to YES when rollover is running.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| standard_locations_only | 530 | Standard Locations Only | {::nomarkdown}If you want to restrict accessioning to only allow the entry of<br/>standard locations (locations defined in the Hospital location<br/>file), set this field to YES.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| archive_data | 600 | Archive Data | {::nomarkdown} This field contains a history of archive activity done in the past. It<br/>also may contain information concerning archive process in progress.{:/} | [OBJECT] |  |  | [Archive_Data-69_9003](#Archive_Data-69_9003)  | 
| default_provider | 601 | Default Provider | {::nomarkdown}Enter a 1 if you want to be defaulted with a provider if the patient is<br/>an outpatient.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| combine_test_during_order | 602 | Combine Test During Order | {::nomarkdown}   This field allows a site to turn on or off the feature of combining test with in<br/>a panel which have the same sample and urgency during the ordering process.<br/>The software will check here first before attempting to combine single test<br/>with profiles. If there are certain test which never should be combined,<br/>edit ^LAB(60, field SHOULD NOT BE COMBINE. Then this test will not be combine with<br/>any other panel during ordering process.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| last_lrdfn_archive_search | 603 | Last Lrdfn Archive Search | {::nomarkdown}This field contains the last LRDFN that was found that required archiving<br/>during the search process of lab archive.{:/} | NUMERIC |  |  |  | 
| last_purged_lrdfn_from_archive | 604 | Last Purged Lrdfn From Archive | {::nomarkdown}This is the last LRDFN that the archive process had purged from the<br/>LAR global.{:/} | NUMERIC |  |  |  | 
| tape_number | 605 | Tape Number | {::nomarkdown}This field contains the tape number that the archive process is using<br/>during the output of archive data to a tape media.{:/} | NUMERIC |  |  |  | 
| number_of_days_for_errors | 606 | # Of Days For Errors | {::nomarkdown} This field is used by the ^LABERR routine to determine the how many days<br/>before auto-instrument errors will be purged out of ^LA(\ERR\). If this<br/>entry is blank, a default value of 3 days will be used.{:/} | NUMERIC |  |  |  | 
| default_opt_treating_sp_ | 607 | Default Opt Treating Sp.  | {::nomarkdown} This field will be used as the default treating speciality for all<br/>out patient workload data collection for WKLD. It is recommended that<br/>an entry in the FACILITY TREATING SPECIALITY (#45.7) be made for<br/>AMBULATORY CARE.<br/>  Then use that entry in this field.  IF THIS FIELD IS BLANK, THEN<br/>THERE WILL BE NO TREATING SPECIALITY FOR OUTPATIENT WORKLOAD.<br/>PURPOSES.{:/} | POINTER |  |  | Facility_Treating_Specialty-45_7 | 
| lrnight | 608 | Lrnight | {::nomarkdown}This node is used for preventing two copies of the WORKLOAD data<br/>collection routine from being executed at the same time.  This<br/>node contains the date/time that the WORKLOAD collection routine<br/>began processing the data.  The node is set to null when the <br/>process completes.  This node should NOT be set through FILEMAN.<br/>TO RECOVER AFTER A SYSTEM FAILURE: DELETE THIS ENTRY TO ALLOW THE<br/>WORKLOAD COLLECTION ROUTINE TO PROCEED.{:/} | STRING |  |  |  | 
| phleb_stop_code_running | 609 | Phleb/stop Code Running | {::nomarkdown}  Do not enter a date in this field. Doing so may stop the data collection<br/>process. The routines will fill in the field during the data collection<br/>process and delete the date when the process has gone to a normal completion.<br/>  If the system goes down during the data collection process, you must delete the date from this field. When the scheduled run time occures, the data collect-<br/>ion will continue automatically.<br/> However if the routine error doing the collection process this field<br/>will contain the word 'ERROR' followed by the date when the error occured.<br/>If this is the case, you may wish to contact your IRM service for assistance.<br/>If the error appears two days in session, contact your IRM service.{:/} | DATE-TIME |  |  |  | 
| clinic_stop_code | 611 | Clinic Stop Code | {::nomarkdown} Enter the clinic stop code to used by the laboratory for the MAS<br/>package stop code credit.  Generally the code number is 108. Select<br/>the stop code with the STOP CODE of 108.<br/> NOTE: THE DEFAULT VALUE IS 108.{:/} | POINTER |  |  | Clinic_Stop-40_7 | 
| counting_bb_workload | 612 | Counting Bb Workload | {::nomarkdown} This field is filled in by the routine while it processes the Blood Bank<br/>workload.{:/} | STRING |  |  |  | 
| urgency_alert | 613 | Urgency Alert | {::nomarkdown} This field is used as a cutoff level (urgency) to control the<br/>flashing the urgency alert display during verification.<br/>  Any urgency equal or less than this urgency will cause the<br/>display to flash.<br/>  For example, if you enter the urgency of OUTPATIENT, it has a<br/>value of 3. Then the urgencies of STAT, ASAP and OUTPATIENT for any <br/>accession will be flashed on the screen when data is entered.<br/>    NOTE - If your ternimal type file is setup incorrectly or the<br/>terminal you are using does not support reverse video, the urgency<br/>will not flash, it will merely be displayed.{:/} | POINTER |  |  | Urgency-62_05 | 
| tramsmit_clinic_stop_codes | 614 | *tramsmit Clinic Stop Codes | {::nomarkdown} This field is no longer used to control reporting of clinic stop codes.<br/>The PCE package has replaced the  clinic stop codes with CPT codes for<br/>each test collected. You should now use PCE/VSIT ON (#615) in <br/>LABORATORY SITE (#69.9) file to control both clinic stop code and CPT code<br/>transmission. Patch LR*5.2*127 automatically sets the PCE/VSIT ON field<br/>to report both clinic stop and CPT codes. It expected that beginning with<br/>Oct. 1, 1996 VA DHCP will begin reporting workload using CPT codes. Logic<br/>has been built into the software to determine when to start reporting CPT<br/>codes to the PCE package.<br/> <br/>This field will be retired in future version.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| pce_vsit_on | 615 | Pce/vsit On | {::nomarkdown} This field controls how clinic stop codes are reported. Laboratory<br/>encounters are being converted from Clinic Stop Codes to CPT codes. CPT<br/>codes are passed via a PCE interface.<br/> <br/> Enter OFF to stop all reporting.<br/> Enter PCE/VSIT to send only CPT codes and no Clinic Stop Code<br/>  Reporting.<br/> Enter BOTH PCE/VSIT AND STOP CODES to continue sending Stop codes<br/>  in addition to CPT Codes.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>PCE/VSIT ONLY</dd><dt>2</dt><dd>BOTH PCE/VSIT AND STOP CODES</dd><dt>0</dt><dd>OFF</dd></dl>{:/} | 
| collect_wkld_log_file_data | 616 | Collect Wkld Log File Data | {::nomarkdown}The use of this field must be coordinated with the local DSS program<br/>official. New functionality now extracts this data in batch mode.<br/>All data in this file is purged before each batch data extraction<br/>session.<br/> <br/>HIGHLY RECOMMEND THIS FIELD BE SET TO NULL<br/> <br/> <br/> This field controls if data should be accumulated in the <br/>WKLD LOG FILE (#64.03). This file can be used for special onsite<br/>local interest in laboratory workload. This file contains information<br/>about what test are performed by the laboratory. Any special cost<br/>analysis study can make use of this file without having to actually<br/>navigate through various globals to obtain data. DSS/DMSS project<br/>will find the file very useful.<br/>  Also there is an option provided to allow printing of this file<br/>with suitable cell separators for downloading to spread sheets operating<br/>on PC based systems.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| pce_default_provider | 617 | Pce Default Provider | {::nomarkdown} The provider entered will be used if the ordering provider has been<br/>terminated or does not have a person class assigned on the date of the<br/>encounter (LAB ARRIVAL TIME). Great care should be taken not to terminate<br/>or remove the default provider's person class. In addition the person<br/>class should be appropriate for a primary care provider. Failure to enter<br/>or the removal of the default provider will cause ALL WORKLOAD REPORTING<br/>TO STOP. No workload will be passed to PCE and no laboratory phlebotomy<br/>workload will be collected.<br/> <br/>If this field is vacant or the default provider becomes invalid NO<br/>WORKLOAD IS COLLECTED. None of the workload data is lost. The workload<br/>processing software will resume processing stored data once a valid<br/>default provider is entered.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| division_parameters | 618 | Division Parameters |  | [OBJECT] |  |  | [Division_Parameters-69_9618](#Division_Parameters-69_9618)  | 
| ap_esig_on | 619 | Ap Esig On | {::nomarkdown}This field is used to activate the electronic signature function for Anatomic<br/>Pathology reports.  If the flag is turned on, at the time a report is<br/>verified/released, the user will be prompted for an electronic signature.  The<br/>document will then be stored in TIU.  If the flag is off, the report will be<br/>verified/released without electronic signature and the document will not be<br/>stored in TIU.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| panel_process_date | 620 | Panel Process Date | {::nomarkdown}The day of the month used for processing panel tests that contain <br/>pending atomic tests for the prior calendar month.  This should be<br/>one day prior to the monthly PCE roll-up date.{:/} | DATE-TIME |  |  |  | 

## <a name="Immed_Lab_Collect_Div-69_9006"></a>Immed_Lab_Collect_Div-69_9006 

 property | value 
--- | --- 
 id | Immed_Lab_Collect_Div-69_9006
 label | Immed Lab Collect Div.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| immed_collection_div | .01 | Immed Collection Div. |  | POINTER |  | REQUIRED | [Institution-4](Institution-4.md) | 
| holidays_ | .03 | Holidays ? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| immed_lab_collect_printer | .05 | Immed Lab Collect Printer | {::nomarkdown} This is the printer to which Immediate Lab Collect request will print.<br/>It is recommended that this printer be different than the printer used<br/>for logging routine lab collect.{:/} | POINTER |  |  | Device-3_5 | 
| minimum_response_time | .06 | Minimum Response Time |  | NUMERIC |  |  |  | 
| maxium_hours_ahead_allowed | .07 | Maxium Hours Ahead Allowed |  | NUMERIC |  |  |  | 
| sunday | 1 | Sunday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| sun_start_time | 1.1 | Sun Start Time |  | NUMERIC |  |  |  | 
| sun_end_time | 1.2 | Sun End Time |  | NUMERIC |  |  |  | 
| monday | 2 | Monday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| mon_start_time | 2.1 | Mon Start Time |  | NUMERIC |  |  |  | 
| mon_end_time | 2.2 | Mon End Time |  | NUMERIC |  |  |  | 
| tuesday | 3 | Tuesday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| tue_start_time | 3.1 | Tue Start Time |  | NUMERIC |  |  |  | 
| tue_end_time | 3.2 | Tue End Time |  | NUMERIC |  |  |  | 
| wednesday | 4 | Wednesday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| wed_start_time | 4.1 | Wed Start Time |  | NUMERIC |  |  |  | 
| wed_end_time | 4.2 | Wed End Time |  | NUMERIC |  |  |  | 
| thursday | 5 | Thursday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| thu_start_time | 5.1 | Thu Start Time |  | NUMERIC |  |  |  | 
| thu_end_time | 5.2 | Thu End Time |  | NUMERIC |  |  |  | 
| friday | 6 | Friday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| fri_start_time | 6.1 | Fri Start Time |  | NUMERIC |  |  |  | 
| fri_end_time | 6.2 | Fri End Time |  | NUMERIC |  |  |  | 
| saturday | 7 | Saturday |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| sat_start_time | 7.1 | Sat Start Time |  | NUMERIC |  |  |  | 
| sat_end_time | 7.2 | Sat End Time |  | NUMERIC |  |  |  | 
| immed_collect_on | 8 | Immed Collect On |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Blood_Bank_Defaults-69_98"></a>Blood_Bank_Defaults-69_98 

 property | value 
--- | --- 
 id | Blood_Bank_Defaults-69_98
 label | Blood Bank Defaults

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number |  | IEN |  |  |  | 
| blood_bank_option | .01 | Blood Bank Option |  | STRING |  | REQUIRED, INDEXED |  | 
| first_default | .02 | First Default | {::nomarkdown} DONOR: Move ABO/Rh test results to inventory file<br/> INVENTORY:<br/> PATIENT: Direct Coombs testing default{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| second_default | .03 | Second Default | {::nomarkdown}DONOR: ASK MILITARY RANK{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| third_default | .04 | Third Default | {::nomarkdown} DONOR: ASK BAG LOT NUMBER{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| fourth_default | .05 | Fourth Default | {::nomarkdown}DONOR: ASK SOCIAL SECURITY NUMBER{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| fifth_default | .06 | Fifth Default | {::nomarkdown}DONOR: Turn on ALT testing{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| sixth_default | .07 | Sixth Default | {::nomarkdown}DONOR: Turn on HIV ANTIGEN testing{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| seventh_default | .08 | Seventh Default |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| major_section | .1 | Major Section |  | POINTER |  |  | Accession-68 | 
| subsection | .11 | Subsection |  | POINTER |  |  | Accession-68 | 

## <a name="Blood_Bank_Institution-69_981"></a>Blood_Bank_Institution-69_981 

 property | value 
--- | --- 
 id | Blood_Bank_Institution-69_981
 label | Blood Bank Institution

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| blood_bank_division | .01 | Blood Bank Division |  | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| inventory_major_section | .02 | Inventory Major Section |  | POINTER |  |  | Accession-68 | 
| inventory_subsection | .03 | Inventory Subsection |  | POINTER |  |  | Accession-68 | 
| donor_major_section | .04 | Donor Major Section |  | POINTER |  |  | Accession-68 | 
| donor_subsection | .05 | Donor Subsection |  | POINTER |  |  | Accession-68 | 
| multiple_accession_area | .06 | Multiple Accession Area |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 

## <a name="Hospital_Site-69_99"></a>Hospital_Site-69_99 

 property | value 
--- | --- 
 id | Hospital_Site-69_99
 label | Hospital Site

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| hospital_site | .01 | Hospital Site | {::nomarkdown}This is the hospital site where parameters may aply.{:/} | POINTER |  | REQUIRED | [Hospital_Location-44](Hospital_Location-44.md) | 
| max_days_for_continuous_orders | 1 | Max Days For Continuous Orders | {::nomarkdown}This is the maximum number of days that multiple-continuous orders<br/>can be placed for this location.{:/} | NUMERIC |  |  |  | 
| ask_urgency | 4 | Ask Urgency | {::nomarkdown}Answer YES to this field to prompt with urgency for every test when <br/>ordering through OE/RR.  Tests with a forced urgency as defined in the<br/>Laboratory test file overide this parameter.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| default_type_for_quick_orders | 5 | Default Type For Quick Orders | {::nomarkdown}The entry in this field will determine the type of collection that 'Quick<br/>Orders' will have assigned to them.<br/>ex: Ward Collect, Send Patient or Lab Collect{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>LC</dt><dd>LAB COLLECT</dd><dt>WC</dt><dd>WARD COLLECT</dd><dt>SP</dt><dd>SEND PATIENT</dd></dl>{:/} | 

## <a name="Printer_Division-69_9007"></a>Printer_Division-69_9007 

 property | value 
--- | --- 
 id | Printer_Division-69_9007
 label | Printer Division

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| printer_division | .01 | Printer Division | {::nomarkdown}This field should be set equal to the DUZ(2) value.{:/} | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| log_printer_for_routine_lc | .02 | Log Printer For Routine Lc | {::nomarkdown}This is the device you want the Routine Lab Collect Request to print on.<br/>It is recommended that this printer be different one than the one used for<br/>immediate collect listing.  If this field is vacant, the program defaults <br/>to field #303 Log Printer for Routine LC.{:/} | POINTER |  |  | Device-3_5 | 
| accession_printer | .03 | Accession Printer |  | POINTER |  |  | Device-3_5 | 

## <a name="Label_Device-69_9008"></a>Label_Device-69_9008 

 property | value 
--- | --- 
 id | Label_Device-69_9008
 label | Label Device

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| label_device | .01 | Label Device | {::nomarkdown}Used by Laboratory software to identify which devices are label printers.<br/>This allows the software to handle various types of label printers and<br/>label stock concurrently. It should be useful at multi-divisional and<br/>integrated sites that use a variety of dissimilar equipment/label stock.{:/} | POINTER |  | REQUIRED, INDEXED | Device-3_5 | 
| printer_type | .02 | Printer Type | {::nomarkdown}Used to designate if device is a specialized label printer that is<br/>supported by Lab software and to determine the specialized Lab label<br/>routine to use.<br/> <br/>Use \OTHER\ when the printer is not compatible with the supported<br/>printers.<br/> <br/>When Lab supports other manufacturers of label printers, they will be added<br/>as supported printers to this field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>ZEBRA ZPL II COMPATIBLE</dd><dt>0</dt><dd>OTHER</dd><dt>1</dt><dd>INTERMEC 3000/4000 SERIES</dd></dl>{:/} | 
| label_stock | .03 | Label Stock | {::nomarkdown}This field is used to designate the type of label stock that is<br/>installed in this printer.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>1X2</dd><dt>1</dt><dd>1X3</dd><dt>3</dt><dd>2.5X4 10 PART</dd><dt>0</dt><dd>OTHER</dd></dl>{:/} | 
| alternate_label_entry | .04 | Alternate Label Entry | {::nomarkdown}Site can enter an alternate label entry point to be used instead of <br/>the standard lab label routines used by the lab package when printing<br/>labels using this device. Field ALTERNATE LABEL ROUTINE (#.05) must be<br/>completed for software to use this field.{:/} | STRING |  |  |  | 
| alternate_label_routine | .05 | Alternate Label Routine | {::nomarkdown}Site can enter an alternate label routine to be used instead of the standard<br/>lab label routines used by the lab package when printing labels using this<br/>device.{:/} | STRING |  |  |  | 
| default_accession_area | .06 | Default Accession Area | {::nomarkdown}This field is used by the label software when printing test or future<br/>order labels. When printing these types of labels, there is no accession<br/>area identified to obtain additional label characteristics such as type<br/>of barcode or accession area alternate label routine.<br/> <br/>The accession area designated for this device will be used by the software<br/>to obtain accession area specific characteristics when printing labels which<br/>are not associated with any particular accession area. Examples of these<br/>characteristics are barcode type, number of pad digits for barcode number,<br/>and alternate label routine.{:/} | POINTER |  |  | Accession-68 | 

## <a name="Phlebotomy_Order_Cutoff_Time-69_9001"></a>Phlebotomy_Order_Cutoff_Time-69_9001 

 property | value 
--- | --- 
 id | Phlebotomy_Order_Cutoff_Time-69_9001
 label | Phlebotomy Order Cut-off Time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| phlebotomy_order_cutoff_time | .01 | Phlebotomy Order Cut-off Time | {::nomarkdown}The order cutoff time for associated collection time. Time is in 24 hour<br/>format.  Orders placed after the cut-off time will be put on the next<br/>routine lab collection.{:/} | NUMERIC |  | REQUIRED |  | 
| phlebotomy_collection_time | 1 | Phlebotomy Collection Time | {::nomarkdown}This is the default time for the routine phlebotomy collection.{:/} | NUMERIC |  | REQUIRED |  | 
| h_format_for_collection_time | 2 | $h Format For Collection Time | {::nomarkdown}This field is computed from what is entered in the PHLEBOTOMY<br/>COLLECTION field.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| division | 3 | Division | {::nomarkdown}Allows a multi-division site to define which collection times are<br/>applicable to which division.  OE/RR-LAB interface uses this to screen<br/>out times for Lab Collection.<br/>DUZ(2) ((users division)) and only allows them to select from collection<br/>times that are appropriate for their division.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 

## <a name="Archive_Data-69_9003"></a>Archive_Data-69_9003 

 property | value 
--- | --- 
 id | Archive_Data-69_9003
 label | Archive Data

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| logical_name | .01 | Logical Name | {::nomarkdown}The logical name for the archive media.{:/} | STRING |  | REQUIRED |  | 
| physical_name | 1 | Physical Name | {::nomarkdown}The physical name for the archive media.{:/} | STRING |  |  |  | 
| run_date | 2 | Run Date | {::nomarkdown}The date on which the particular archive run is made.{:/} | DATE-TIME |  |  |  | 
| status | 3 | Status | {::nomarkdown}This field indicates the current status of the archive process.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>Purge done</dd><dt>3</dt><dd>Clear</dd><dt>4</dt><dd>Purging</dd><dt>1</dt><dd>Searching</dd><dt>2</dt><dd>Search done</dd></dl>{:/} | 
| for_data_before_date | 4 | For Data Before Date | {::nomarkdown}The date prior to which data may be archived.{:/} | DATE-TIME |  |  |  | 

## <a name="Division_Parameters-69_9618"></a>Division_Parameters-69_9618 

 property | value 
--- | --- 
 id | Division_Parameters-69_9618
 label | Division Parameters

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| division_parameters | .01 | Division Parameters |  | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| venipuncture_default_acc_area | 618 | Venipuncture Default Acc Area | {::nomarkdown}This field will allow the site to assign the venipuncture LMIP workload to<br/>a specific ACCESSION AREA. If this field is blank, the venipuncture<br/>workload software will use the ACCESSION AREA name that begins with 'HEM'.<br/>If there is no ACCESSION AREA with a name beginning with 'HEM', ACCESSION<br/>AREA the internal file number of 10 will be used as the default<br/>Venipuncture Accession Area.{:/} | POINTER |  |  | Accession-68 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 9:52:13 pm</p>{:/}