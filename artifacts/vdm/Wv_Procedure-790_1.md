---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Wv_Procedure-790_1 

 property | value 
--- | --- 
 id | Wv_Procedure-790_1
 fmId | 790.1
 label | Wv Procedure
 location | ^WV(790.1,
 description | {::nomarkdown}This file contains the Women Veterans Health's database of procedures <br/>actually performed and the data associated with them.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| accessionnumber | .01 | Accession# | {::nomarkdown}This is the record number assigned by the Women's Health package.  It is<br/>composed of the procedure's abbreviated code, a four digit year and a<br/>sequential number.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | {::nomarkdown}This field contains the name of the patient associated with the procedure.<br/>Pointer to the WV Patient (#790) file.{:/} | POINTER |  | REQUIRED, INDEXED | Wv_Patient-790 | 
| procedure | .04 | Procedure | {::nomarkdown}This field stores the name of the procedure performed on the patient.<br/>Pointer to the WV Procedure (#790.1) file.{:/} | POINTER |  | REQUIRED, INDEXED | Wv_Procedure_Type-790_2 | 
| results_diagnosis | .05 | Results/diagnosis | {::nomarkdown}This field stores the main result or diagnosis of the patient's procedure.<br/>Pointer to the WV Results/Diagnosis (#790.31) file.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| sec_result_diagnosis | .06 | Sec Result/diagnosis | {::nomarkdown}This field stores a secondary outcome/diagnosis associated with the<br/>procedure.  Pointer to the WV Results/Diagnosis (#790.31) file.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| provider | .07 | Provider | {::nomarkdown}This field stores the name of the clinician who ordered and/or performed<br/>this procedure.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| hpv | .08 | Hpv | {::nomarkdown}This field is used to document the presence or absence of the Human<br/>Papilloma Virus (HPV) in the cytology reports.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| mam_unilateral_left_or_right | .09 | Mam Unilateral: Left Or Right | {::nomarkdown}Select left or right for this unilateral mammogram.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>r</dt><dd>RIGHT</dd><dt>l</dt><dd>LEFT</dd></dl>{:/} | 
| health_care_facility | .1 | Health Care Facility | {::nomarkdown}This field identifies the name of the health care facility where this<br/>procedure was performed.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| ward_clinic_location | .11 | Ward/clinic/location | {::nomarkdown}This field contains the name of the ward, clinic, or location where the<br/>procedure was performed.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| date_of_procedure | .12 | Date Of Procedure | {::nomarkdown}This field identifies the date on which the procedure was performed. Dates<br/>in the future may not be entered.{:/} | DATE-TIME |  | INDEXED |  | 
| complete_by_date | .13 | Complete By (date) | {::nomarkdown}This field contains the date used to determine that this procedure record<br/>is delinquent when a close status has not been entered in the record.{:/} | DATE-TIME |  |  |  | 
| status | .14 | Status | {::nomarkdown}This field contains the status (set of codes: O = Open, C = Closed).  The<br/>value of this field is used in the Program Snapshot reports and the Browse<br/>Patients with Needs Past Due report.{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>o</dt><dd>OPEN</dd><dt>c</dt><dd>CLOSED</dd></dl>{:/} | 
| radiology_mam_casenumber | .15 | Radiology Mam Case# | {::nomarkdown}This field stores the VISTA Radiology/Nuclear Medicine case# for this<br/>mammogram procedure when the Women's Health package automatically imports<br/>radiology procedures.{:/} | STRING |  | INDEXED |  | 
| processed_y_n | .16 | Processed Y/n? | {::nomarkdown}This field indicates if the procedure result was entered via a Clinical <br/>Reminder. <br/> <br/>Answer YES to indicate the procedure result was entered by a Clinical <br/>Reminder. Answer NO if the procedure result was not entered by a Clinical <br/>Reminder.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| entering_user | .18 | Entering User | {::nomarkdown}This field stores the name of the person initially creating this record.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_first_entered | .19 | Date First Entered | {::nomarkdown}This field stores the date on which this procedure record was first<br/>entered.{:/} | DATE-TIME |  | INDEXED |  | 
| satisfactory_exam | .2 | Satisfactory Exam | {::nomarkdown}This field documents that the procedure or gynecologic exam was<br/>satisfactorily performed without any impediments.  Set of codes (1 = Yes,<br/>0 = No).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| tzone_seen_entirely | .21 | T-zone Seen Entirely | {::nomarkdown}This field documents (set of codes: 1 = Yes, 0 = No) that the T-Zone in<br/>the colposcopy/biopsy procedure was adequately visualized.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| lesion_outside_canal | .22 | Lesion Outside Canal | {::nomarkdown}This field documents (set of codes: 1 = Yes, 0 = No) that the lesion seen<br/>during the procedure was outside the canal.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| multifocal | .23 | Multifocal | {::nomarkdown}This field documents (set of codes: 1 = Yes, 0 = No) that the lesion seen<br/>during the procedure was multifocal (as opposed to unifocal).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| number_of_quadrants | .24 | Number Of Quadrants | {::nomarkdown}This field contains a number (0-4) that identifies the number of quadrants<br/>occupied by the lesion.{:/} | NUMERIC |  |  |  | 
| quadrant_locations | .245 | Quadrant Locations | {::nomarkdown}     <br/>The location of the affected quadrants.  Any of the following abbreviations<br/>may be selected: UL,LL,UR,LR.<br/>  <br/>UL - Upper Left quadrant<br/>LL - Lower Left quadrant<br/>UR - Upper Right quadrant<br/>LR - Lower Right quadrant<br/>   <br/>If more than one quadrant is included separate them with a comma, ie: LL,<br/>UL,UR will represent the inclusion of 3 of the 4 quadrants.{:/} | STRING |  |  |  | 
| ecc_dysplasia | .25 | Ecc Dysplasia | {::nomarkdown}This field indicates if ectocervical dysplasia was present, if an<br/>insufficient tissue sample was provided, or the sample was not examined<br/>for dysplasia.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>y</dt><dd>YES</dd><dt>i</dt><dd>Insufficient Tissue</dd><dt>nd</dt><dd>Not Done</dd><dt>n</dt><dd>NO</dd></dl>{:/} | 
| ectocervical_biopsy | .26 | Ectocervical Biopsy | {::nomarkdown}This field contains the diagnosis or impression resulting from the<br/>cytology examination.  Pointer to the WV Results/Diagnosis (#790.31) file.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| margins_clear | .27 | Margins Clear | {::nomarkdown}This field indicates tissue sample showed no pathology at the margins of<br/>the tissue sample.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| std_evaluation | .28 | Std Evaluation | {::nomarkdown}This field documents the findings after testing for sexually transmitted<br/>diseases.  Pointer to the WV Results/Diagnosis (#790.31) file.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| impression | .29 | Impression | {::nomarkdown}This field contains the impression of the clinician performing the exam.  <br/>Pointer to the WV Results/Diagnosis (#790.31) file.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| screening_pap | .3 | Screening Pap | {::nomarkdown}This field stores the PAP procedure associated with the follow-up<br/>procedure (e.g., colposcopy).  Pointer to the WV Procedure (#790.1) file.{:/} | POINTER |  |  | [Wv_Procedure-790_1](Wv_Procedure-790_1.md) | 
| stage_at_final_dx | .31 | Stage At Final Dx | {::nomarkdown}This field is used to document the clinical stage for invasive carcinoma<br/>of the cervix.  If clinical stage is unknown, enter the summary ('S-')<br/>stage.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>7</dt><dd>S-Distant</dd><dt>1</dt><dd>I</dd><dt>8</dt><dd>Unknown</dd><dt>4</dt><dd>IV</dd><dt>2</dt><dd>II</dd><dt>6</dt><dd>S-Regional</dd><dt>5</dt><dd>S-Local</dd><dt>3</dt><dd>III</dd></dl>{:/} | 
| date_results_received | .32 | Date Results Received | {::nomarkdown}Enter the date that the results were received/uploaded from the lab.{:/} | DATE-TIME |  |  |  | 
| final_dx_pap_colp | .33 | Final Dx Pap/colp | {::nomarkdown}Enter the Final Diagnosis for this PAP/Colp case.{:/} | POINTER |  |  | Wv_Results_diagnosis-790_31 | 
| facility_where_accessioned | .34 | Facility Where Accessioned | {::nomarkdown}Select the facility where this procedure was accessioned.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| radiology_credit_method | .35 | Radiology Credit Method | {::nomarkdown}This field is a set of codes that identify if the radiology exam was<br/>performed at the facility or elsewhere. This value is automatically<br/>entered by the Radiology/NM package when a radiology report is verified<br/>and the WH site parameter is set to accept data from the Radiology/NM<br/>package.<br/> <br/>This piece of information will be used for WH reporting requirements to<br/>determine how many radiology procedures were performed at the facility and<br/>elsewhere.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>No credit</dd><dt>0</dt><dd>Regular Credit</dd><dt>3</dt><dd>Technical Component Only</dd><dt>1</dt><dd>Interpretation Only</dd></dl>{:/} | 
| notes | 1.01 | Notes | {::nomarkdown}This field allows you to enter word-processing text in which to elaborate<br/>further on the results of this patients various tests.{:/} | STRING |  |  |  | 
| lab_accessionnumber | 2.17 | Lab Accession# | {::nomarkdown}This field contains the lab accession number from the LAB DATA file (#63)<br/>for the patient, if this procedure entry is a lab test.{:/} | STRING |  | INDEXED |  | 
| lab_data_file_ien | 2.18 | Lab Data File Ien | {::nomarkdown}This field contains the internal entry number of the LAB DATA file (#63)<br/>for the patient, if this procedure entry is a lab test.{:/} | NUMERIC |  |  |  | 
| lab_inverse_date_time | 2.19 | Lab Inverse Date/time | {::nomarkdown}This field contains the inverse date/time of a lab test from the LAB DATA<br/>file (#63) for the patient, if this procedure entry is a lab test.{:/} | STRING |  |  |  | 
| lab_subscript | 2.2 | Lab Subscript | {::nomarkdown}This field contains a character string that distinguishes the type of lab<br/>test performed. The letters \CY\ will represent a cytology test and the<br/>letters \SP\ will represent a surgical pathology test.{:/} | STRING |  |  |  | 
| comments | 3.01 | Comments | {::nomarkdown}You may enter a one-line clinical history note (limited to 78 characters).{:/} | STRING |  |  |  | 
| reports | 9 | Reports | {::nomarkdown}This field is not editable through WH options.  The lab or radiology exams<br/>related to this procedure are presented here.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:09:58 am</p>{:/}