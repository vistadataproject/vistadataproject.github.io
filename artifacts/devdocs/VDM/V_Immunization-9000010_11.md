---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; V_Immunization-9000010_11<br/>
<a name="top"></a>
# V Immunization (9000010.11)
In order to preserve the continuity of files shared by the Indian Health  Service and the Department of Veterans Affairs, this file includes fields  used by Indian Health Service that will not be used by the Department of  Veterans Affairs. These fields may point to other files and routines not  deployed by the Department of Veterans Affairs. Inclusion of these fields,  as designed, was approved by the DBA.  These fields were initially  introduced with the release of the VISTA IMMUNIZATION ENHANCEMENTS 1.0  (PX*1*201) for the VistA Immunization Enhancements Project.  Additional  fields may be included in later enhancements.      This file contains immunizations specific to a particular visit for a  particular patient.  This file contains one record for each immunization.   In the VA, if a CPT code is entered into PCE that represents an immunization, than an immunization will automatically be entered in the V Immunization file.  And vice versa, if an immunization is entered into PCE that has a related CPT code, then a V CPT entry will automatically be created with the CPT code for the immunization.  The PCE Code Mapping file contains the definitions of what immunization is related to what CPT code, and vice versa.

**Global:** ^AUPNVIMM(

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Immunization**{::nomarkdown}<pre><code>  immunization</code></pre>{:/} | .01 | This is the type of immunization that was given to the patient at the<br/>encounter. | POINTER | INDEXED<br/>REQUIRED | [Immunization-9999999_14](Immunization-9999999_14)
**Patient Name**{::nomarkdown}<pre><code>  patient_name</code></pre>{:/} | .02 | This is the patient who was given the immunization. | POINTER | REQUIRED | [Patient_ihs-9000001](Patient_ihs-9000001)
**Visit**{::nomarkdown}<pre><code>  visit</code></pre>{:/} | .03 | This is the encounter defined in the Visit file that represents when and<br/>where the immunization was given. | POINTER | INDEXED<br/>REQUIRED | [Visit-9000010](Visit-9000010)
**Series**{::nomarkdown}<pre><code>  series</code></pre>{:/} | .04 | This field allows the provider to specify which series of immunization<br/>type was given to the patient. | ENUMERATION |  | {::nomarkdown}COMPLETE: <em><strong>C</strong></em><br/>PARTIALLY COMPLETE: <em><strong>P</strong></em><br/>SERIES 8: <em><strong>8</strong></em><br/>SERIES 7: <em><strong>7</strong></em><br/>SERIES 6: <em><strong>6</strong></em><br/>SERIES 5: <em><strong>5</strong></em><br/>SERIES 4: <em><strong>4</strong></em><br/>SERIES 3: <em><strong>3</strong></em><br/>SERIES 2: <em><strong>2</strong></em><br/>SERIES 1: <em><strong>1</strong></em><br/>BOOSTER: <em><strong>B</strong></em>{:/}
**Lot**{::nomarkdown}<pre><code>  lot</code></pre>{:/} | .05 | This Indian Health Service field indicates the lot number associated <br/>with this immunization. | POINTER |  | Immunization_Lot-9999999_41
**Reaction**{::nomarkdown}<pre><code>  reaction</code></pre>{:/} | .06 | This is the reaction that may have been observed by the provider as a<br/>result of the immunization given. | ENUMERATION |  | {::nomarkdown}IRRITABILITY: <em><strong>2</strong></em><br/>ANAPHYLAXIS OR COLLAPSE: <em><strong>9</strong></em><br/>NONE: <em><strong>0</strong></em><br/>FEVER: <em><strong>1</strong></em><br/>LETHARGY: <em><strong>6</strong></em><br/>RESPIRATORY DISTRESS: <em><strong>10</strong></em><br/>OTHER: <em><strong>11</strong></em><br/>VOMITING: <em><strong>4</strong></em><br/>ARTHRITIS OR ARTHRALGIAS: <em><strong>8</strong></em><br/>LOCAL REACTION OR SWELLING: <em><strong>3</strong></em><br/>RASH OR ITCHING: <em><strong>5</strong></em><br/>CONVULSIONS: <em><strong>7</strong></em>{:/}
**Contraindicated**{::nomarkdown}<pre><code>  contraindicated</code></pre>{:/} | .07 | This field allows the immunization to be recorded as contraindicated.<br/>Reminders will include a check to see if the previous immunization was <br/>contraindicated before creating reminders. | ENUMERATION |  | {::nomarkdown}NO (OK TO USE IN THE FUTURE): <em><strong>0</strong></em><br/>YES (DO NOT REPEAT THIS VACCINE).: <em><strong>1</strong></em>{:/}
**Dose Override**{::nomarkdown}<pre><code>  dose_override</code></pre>{:/} | .08 | This Indian Health Service field indicates the dose override status of <br/>this immunization. | ENUMERATION |  | {::nomarkdown}@: <em><strong>0</strong></em><br/>INVALID--ADMIN ERROR: <em><strong>4</strong></em><br/>FORCED VALID: <em><strong>9</strong></em><br/>INVALID--DEFECTIVE: <em><strong>2</strong></em><br/>INVALID--EXPIRED: <em><strong>3</strong></em><br/>INVALID--BAD STORAGE: <em><strong>1</strong></em>{:/}
**Injection Site**{::nomarkdown}<pre><code>  injection_site</code></pre>{:/} | .09 | This Indian Health Service field identifies the body site where the <br/>immunization was administered. | ENUMERATION |  | {::nomarkdown}Left Arm Intradermal: <em><strong>LID</strong></em><br/>Both Thighs IM: <em><strong>BTI</strong></em><br/>Oral: <em><strong>O</strong></em><br/>Left Delt IM: <em><strong>LDI</strong></em><br/>Nasal: <em><strong>IN</strong></em><br/>Right Arm SQ: <em><strong>RAS</strong></em><br/>Left Thigh SQ: <em><strong>LTS</strong></em><br/>Right Thigh IM: <em><strong>RTI</strong></em><br/>Left Arm SQ: <em><strong>LAS</strong></em><br/>Left Thigh IM: <em><strong>LTI</strong></em><br/>Right Thigh SQ: <em><strong>RTS</strong></em><br/>Right Delt IM: <em><strong>RDI</strong></em><br/>Right Arm Intradermal: <em><strong>RID</strong></em>{:/}
**Volume**{::nomarkdown}<pre><code>  volume</code></pre>{:/} | .11 | This Indian Health Service field indicates the volume of vaccine <br/>administered for this immunization. | NUMERIC |  | 
**Date Of Vac Info Statement**{::nomarkdown}<pre><code>  date_of_vac_info_statement</code></pre>{:/} | .12 | This Indian Health Service field indicates the date the vaccine <br/>information statement associated with this immunization was <br/>offered/given to the patient. | DATE-TIME |  | 
**Created By V Cpt Entry**{::nomarkdown}<pre><code>  created_by_v_cpt_entry</code></pre>{:/} | .13 | This Indian Health Service field identifies the V CPT entry, if any,<br/>that created this V Immunization entry. | NUMERIC |  | 
**Vac Eligibility**{::nomarkdown}<pre><code>  vac_eligibility</code></pre>{:/} | .14 | This Indian Health Service field indicates the Vaccine for Children <br/>(VFC) Program eligibility for this patient on this visit. |  |  | 
**Import From Outside Registry**{::nomarkdown}<pre><code>  import_from_outside_registry</code></pre>{:/} | .15 | This Indian Health Service field indicated the import status of this <br/>immunization from an outside registry. | ENUMERATION |  | {::nomarkdown}IMPORTED: <em><strong>1</strong></em><br/>NOT IMPORTED: <em><strong>0</strong></em><br/>EDITED AFTER IMPORT: <em><strong>2</strong></em>{:/}
**Ndc**{::nomarkdown}<pre><code>  ndc</code></pre>{:/} | .16 | This Indian Health Service field identifies the National Drug Code <br/>(NDC) for this vaccine. |  |  | 
**Administrative Notes**{::nomarkdown}<pre><code>  administrative_notes</code></pre>{:/} | 1 | This Indian Health Service field is a free text field used to document<br/>administrative information about this immunization. | STRING |  | 
**Vis Offered/given To Patient**{::nomarkdown}<pre><code>  vis_offered_given_to_patient</code></pre>{:/} | 2 | This is the Vaccine Information Statement (VIS) that was offered to the <br/>patient prior to the administration of the immunization, along with the<br/>date/time it was offered. | OBJECT |  | [Vis_Offered_given_To_Patient-9000010_112](#Vis_Offered_given_To_Patient-9000010_112)
**Other Diagnosis**{::nomarkdown}<pre><code>  other_diagnosis</code></pre>{:/} | 3 | This is a list of diagnoses for this immunization event, in addition to<br/>the Primary Diagnosis selected for this event. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Remarks**{::nomarkdown}<pre><code>  remarks</code></pre>{:/} | 1101 | This is additional comments or remarks related to the immunization given<br/>to the patient. | STRING |  | 
**Event Date And Time**{::nomarkdown}<pre><code>  event_date_and_time</code></pre>{:/} | 1201 | This is the date and time the immunization was given.  This date and time<br/>may be different from the visit date and time.  For example, for clinic<br/>appointment visits, the visit date and time is the date and time of the<br/>appointment, not the time the provider performed the clinical event.<br/> <br/>The date may be an imprecise date.<br/> <br/>Date and time may be within 30 days before or after the visit date, with the<br/>restriction the date cannot be a future date. | DATE-TIME |  | 
**Ordering Provider**{::nomarkdown}<pre><code>  ordering_provider</code></pre>{:/} | 1202 | The field can be used to document the provider who ordered the<br/>immunization. | POINTER |  | [New_Person-200](New_Person-200)
**Clinic**{::nomarkdown}<pre><code>  clinic</code></pre>{:/} | 1203 | This Indian Health Service field indicates the clinic stop associated <br/>with this visit. | POINTER |  | [Clinic_Stop-40_7](Clinic_Stop-40_7)
**Encounter Provider**{::nomarkdown}<pre><code>  encounter_provider</code></pre>{:/} | 1204 | This is the provider who gave this<br/>immunization. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Recorded**{::nomarkdown}<pre><code>  date_time_recorded</code></pre>{:/} | 1205 | This timestamp field is the date and time of documentation of<br/>administration of the immunization. This field is set automatically <br/>when the EVENT DATE AND TIME is entered. | DATE-TIME |  | 
**Immunization Documenter**{::nomarkdown}<pre><code>  immunization_documenter</code></pre>{:/} | 1206 | This is the person/provider who documented this immunization by entering<br/>the data into the system by whatever means. | POINTER |  | [New_Person-200](New_Person-200)
**Lot Number**{::nomarkdown}<pre><code>  lot_number</code></pre>{:/} | 1207 | This is the lot number of the Immunization entered for this event.  It is<br/>not designed to be edited manually, but automatically set when an<br/>Immunization is selected. | POINTER | INDEXED | Immunization_Lot-9999999_41
**Parent**{::nomarkdown}<pre><code>  parent</code></pre>{:/} | 1208 | This Indian Health Service field indicates the parent immunization, if <br/>any, associated with this immunization, such as for immunizations given <br/>in series. | POINTER |  | [V_Immunization-9000010_11](V_Immunization-9000010_11)
**External Key**{::nomarkdown}<pre><code>  external_key</code></pre>{:/} | 1209 | This Indian Health Service free text field identifies the external key <br/>associated with this immunization. | STRING |  | 
**Outside Provider Name**{::nomarkdown}<pre><code>  outside_provider_name</code></pre>{:/} | 1210 | This Indian Health Service field contains the name of the outside <br/>provider associated with this immunization. | STRING |  | 
**Ancillary POV**{::nomarkdown}<pre><code>  ancillary_pov</code></pre>{:/} | 1213 | This Indian Health Service field indicated the ancillary diagnosis <br/>related to this immunization. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**User Last Update**{::nomarkdown}<pre><code>  user_last_update</code></pre>{:/} | 1214 | This Indian Health Service field indicates the user who last updated <br/>information for this immunization. | POINTER |  | [New_Person-200](New_Person-200)
**Ordering Location**{::nomarkdown}<pre><code>  ordering_location</code></pre>{:/} | 1215 | This Indian Health Service field indicated the hospital location ordering <br/>this immunization. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Date/time Entered**{::nomarkdown}<pre><code>  date_time_entered</code></pre>{:/} | 1216 | This Indian Health Service field indicates the date and time that this <br/>immunization information was entered into this record. | DATE-TIME |  | 
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | 1217 | This Indian Health Service field indicates the user who entered this <br/>immunization record. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Last Modified**{::nomarkdown}<pre><code>  date_time_last_modified</code></pre>{:/} | 1218 | This Indian Health Service field indicates the date and time this <br/>immunization record was last modified. | DATE-TIME |  | 
**Last Modified By**{::nomarkdown}<pre><code>  last_modified_by</code></pre>{:/} | 1219 | This Indian Health Service field indicates the user who last modified <br/>this immunization record. | POINTER |  | [New_Person-200](New_Person-200)
**Timestamp**{::nomarkdown}<pre><code>  timestamp</code></pre>{:/} | 1221 | Indicates the date/time the record was added or edited. | DATE-TIME |  | 
**Event Information Source**{::nomarkdown}<pre><code>  event_information_source</code></pre>{:/} | 1301 | This is the source of the information obtained for this immunization<br/>event.  If this is a new event for this patient, no entry is required. | POINTER |  | Immunization_Info_Source-920_1
**Route Of Administration**{::nomarkdown}<pre><code>  route_of_administration</code></pre>{:/} | 1302 | This is the method this vaccine was administered.  Select from the list<br/>provided. | POINTER |  | Imm_Administration_Route-920_2
**Site Of Administration (body)**{::nomarkdown}<pre><code>  site_of_administration_body</code></pre>{:/} | 1303 | This is the area of the patient's body through which the vaccine was<br/>administered. | POINTER |  | Imm_Administration_Site_body-920_3
**Primary Diagnosis**{::nomarkdown}<pre><code>  primary_diagnosis</code></pre>{:/} | 1304 | This is the primary (or initial) diagnosis for this immunization event. It<br/>is selected from the ISC DIAGNOSIS file. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Dosage**{::nomarkdown}<pre><code>  dosage</code></pre>{:/} | 1312 | This is the amount of this vaccine to be administered for this event.<br/>It is free text, 3 to 30 characters, and should be in the format of an<br/>amount followed by units of measure, such as "30 cc". | STRING |  | 
**Snomed Ct**{::nomarkdown}<pre><code>  snomed_ct</code></pre>{:/} | 2601 | This Indian Health Service field indicates the SNOMED Clinical Terms (CT)<br/>that describe this immunization and their preferred terms. | OBJECT |  | [Snomed_Ct-9000010_1126](#Snomed_Ct-9000010_1126)
**Loinc Codes**{::nomarkdown}<pre><code>  loinc_codes</code></pre>{:/} | 2701 | This Indian Health Service field is the LOINC codes that identifies this<br/>immunization, along with their descriptions. | OBJECT |  | [Loinc_Codes-9000010_1127](#Loinc_Codes-9000010_1127)
**Edited Flag**{::nomarkdown}<pre><code>  edited_flag</code></pre>{:/} | 80101 | This field is automatically set to 1 if PCE detects that any original<br/>immunization data is being edited. | ENUMERATION |  | {::nomarkdown}EDITED: <em><strong>1</strong></em>{:/}
**Audit Trail**{::nomarkdown}<pre><code>  audit_trail</code></pre>{:/} | 80102 | This field is populated automatically by the PCE filing logic.  The format<br/>of the field is as follows:  Pointer to PCE data source file_"-"_A for Add<br/>or E for Edit_" "_DUZ of the person who entered the data_";"... | STRING |  | 
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | 81101 | This is a comment related to the patient's immunization.  The provider may enter<br/>this manually via the PCE User Interface. | STRING |  | 
**Verified**{::nomarkdown}<pre><code>  verified</code></pre>{:/} | 81201 | This is used to note how the event was verified and is automatically<br/>entered by the software. | ENUMERATION |  | {::nomarkdown}VERIFIED BY PACKAGE: <em><strong>2</strong></em><br/>ELECTRONICALLY SIGNED: <em><strong>1</strong></em>{:/}
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 81202 | This is the VistA package from which this immunization record <br/>originated through PCE. | POINTER |  | [Package-9_4](Package-9_4)
**Data Source**{::nomarkdown}<pre><code>  data_source</code></pre>{:/} | 81203 | This is the data source for this immunization, automatically entered <br/>through the PCS software and uneditable by users. | POINTER |  | Pce_Data_Source-839_7

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Vis_Offered_given_To_Patient-9000010_112"></a>Vis Offered/given To Patient (9000010.112)

<dl>
<dt>ID</dt><dd>Vis_Offered_given_To_Patient-9000010_112</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Vis Offered/given To Patient**{::nomarkdown}<pre><code>  vis_offered_given_to_patient</code></pre>{:/} | .01 | This is the name of the Vaccine Information Statement offered to or given <br/>to the patient before administration of the immunization. | POINTER | INDEXED<br/>REQUIRED | Vaccine_Information_Statement-920
**Date Vis Offered/given**{::nomarkdown}<pre><code>  date_vis_offered_given</code></pre>{:/} | .02 | This is the date the Vaccine Information Statement was offered to or <br/>given to the patient. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Snomed_Ct-9000010_1126"></a>Snomed Ct (9000010.1126)

<dl>
<dt>ID</dt><dd>Snomed_Ct-9000010_1126</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Snomed Ct**{::nomarkdown}<pre><code>  snomed_ct</code></pre>{:/} | .01 | This Indian Health Service field indicates a SNOMED Clinical Term (CT)<br/>that describes this immunization. | STRING | INDEXED<br/>REQUIRED | 

[&uarr; Return to top](#top)<br/>


### <a name="Loinc_Codes-9000010_1127"></a>Loinc Codes (9000010.1127)

<dl>
<dt>ID</dt><dd>Loinc_Codes-9000010_1127</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Loinc Codes**{::nomarkdown}<pre><code>  loinc_codes</code></pre>{:/} | .01 | This Indian Health Service field is a LOINC code that identifies this<br/>immunization. | STRING | INDEXED<br/>REQUIRED | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}