---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; TIU_Document-8925 

 property | value 
--- | --- 
 id | TIU_Document-8925
 fmId | 8925
 label | TIU Document
 location | ^TIU(8925,
 description | {::nomarkdown}This file stores textual information for the clinical record database.<br/>Though it is designed to initially accommodate Progress Notes, Consult <br/>Reports, and Discharge Summaries, it is intended to be sufficiently<br/>flexible to accommodate textual reports or provider narrative of any<br/>length or type, and to potentially accommodate such data transmitted <br/>from remote sites, which may be excluded from the corresponding local <br/>DHCP Package databases (e.g., Operative Reports, Radiology Reports, <br/>Pathology Reports, etc.) to avoid confusion with local workload.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| document_type | .01 | Document Type | {::nomarkdown}This field points to the Tiu Document Definition file, whose entry defines<br/>the components of the document and various parameters for the document's<br/>behavior.{:/} | POINTER |  | REQUIRED, INDEXED | [TIU_Document_Definition-8925_1](TIU_Document_Definition-8925_1.md) | 
| patient | .02 | Patient | {::nomarkdown}This field contains a pointer to the patient file.{:/} | POINTER |  | INDEXED | [Patient_ihs-9000001](Patient_ihs-9000001.md) | 
| visit | .03 | Visit |  | POINTER |  | INDEXED | [Visit-9000010](Visit-9000010.md) | 
| parent_document_type | .04 | Parent Document Type | {::nomarkdown}This field points to the immediate parent class or document type to which the<br/>current record belongs.  For example, when the current document has the type <br/>SOAP - GENERAL NOTE, this field will point to PROGRESS NOTE, as the parent <br/>class to which SOAP Notes belong, whereas, if the current record is a <br/>SUBJECTIVE component, then this field will point to SOAP - GENERAL NOTE as <br/>the parent document type to which the component belongs.{:/} | POINTER |  |  | [TIU_Document_Definition-8925_1](TIU_Document_Definition-8925_1.md) | 
| status | .05 | Status | {::nomarkdown}This field is intended to accommodate the status of a given report.{:/} | POINTER |  |  | TIU_Status-8925_6 | 
| parent | .06 | Parent | {::nomarkdown}In the event that the current report is an addendum or replacement, or is<br/>a component of a report, this field points to the original report.{:/} | POINTER |  | INDEXED | [TIU_Document-8925](TIU_Document-8925.md) | 
| episode_begin_date_time | .07 | Episode Begin Date/time | {::nomarkdown}This is the date/time at which the treatment episode associated with this<br/>document was initiated (e.g., Amission date/time for a discharge summary,<br/>Visit date/time for a clinic note, Transfer date/time for an interim<br/>summary).  Time is optional.{:/} | DATE-TIME |  |  |  | 
| episode_end_date_time | .08 | Episode End Date/time | {::nomarkdown}This is the ending date/time for the treatment episode associated with<br/>this document (e.g., .  Time is optional.{:/} | DATE-TIME |  |  |  | 
| urgency | .09 | Urgency | {::nomarkdown}This is the urgency with which the report should be completed.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>P</dt><dd>priority</dd><dt>R</dt><dd>routine</dd></dl>{:/} | 
| line_count | .1 | Line Count | {::nomarkdown}This is the number of characters in the document (blank lines excluded),<br/>divided by the CHARACTERS PER LINE parameter defined by your site.{:/} | STRING |  |  |  | 
| credit_stop_code_on_completion | .11 | Credit Stop Code On Completion | {::nomarkdown}This boolean field indicates whether the stop code associated with a new<br/>visit should be credited when the note is completed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| mark_disch_dt_for_correction | .12 | Mark Disch Dt For Correction | {::nomarkdown}This boolean field identfies those discharge summaries which were filed<br/>prior to actual discharge of the patient for the nightly background<br/>process to back-fill with corrected discharge dates.{:/} | BOOLEAN |  | INDEXED | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| visit_type | .13 | Visit Type | {::nomarkdown}This field is used to identify the type of visit information related to<br/>the current document.  The value is determined during processing and is<br/>entered by the program.  It is used in the generation of a cross-reference<br/>to identify available documents for specified visits.{:/} | STRING |  |  |  | 
| report_text | 2 | Report Text | {::nomarkdown}This is a word processing field that contains the report text.{:/} | STRING |  |  |  | 
| edit_text_buffer | 3 | Edit Text Buffer | {::nomarkdown}This field provides a temporary holding place for the body of a report to<br/>prevent inadvertant record deletion or corruption in a manner independent<br/>of the user's preferred editor.{:/} | STRING |  |  |  | 
| entry_date_time | 1201 | Entry Date/time | {::nomarkdown}This is the date/time at which the document was originally entered into<br/>the database.{:/} | DATE-TIME |  | INDEXED |  | 
| author_dictator | 1202 | Author/dictator | {::nomarkdown} <br/>This is the person who composed or dictated the document.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| clinic | 1203 | Clinic | {::nomarkdown}This is the stop code to which the document is to be credited (e.g., if the <br/>document is a progress note documenting an encounter which took place in the <br/>Admitting/Screening Clinic, then select the corresponding stop code, etc.).<br/>{:/} | POINTER |  |  | Clinic_Stop-40_7 | 
| expected_signer | 1204 | Expected Signer | {::nomarkdown}This is the person who is expected to enter the first-line signature for<br/>the document.  Ordinarily, this would be the author.  One case in which<br/>this would differ would be in the case of a Discharge Summary, when the<br/>author's signature is NOT required.  Then, the attending physician would<br/>be the expected signer.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| hospital_location | 1205 | Hospital Location | {::nomarkdown}This is the location (WARD or CLINIC) associated with the document.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| service_credit_stop | 1206 | Service Credit Stop | {::nomarkdown}This is the attending physician of record, who is ultimately responsible<br/>for the care of the patient, and the accurate documentation of the care<br/>episode.{:/} | POINTER |  |  | Clinic_Stop-40_7 | 
| secondary_visit | 1207 | Secondary Visit |  | POINTER |  |  | [Visit-9000010](Visit-9000010.md) | 
| expected_cosigner | 1208 | Expected Cosigner |  | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| attending_physician | 1209 | Attending Physician |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| order_number | 1210 | Order Number | {::nomarkdown}This is the Order which was acted on to produce the result reported in the <br/>current document.{:/} | POINTER |  |  | Order-100 | 
| visit_location | 1211 | Visit Location | {::nomarkdown}This is the location at which the visit/admission occurred.  As distinct <br/>from the HOSPITAL LOCATION field, which represents the location at the time <br/>the document was written, this is the location for the visit/admission with <br/>which the note is associated.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| division | 1212 | Division | {::nomarkdown}This field contains the institution associated with the document. It is <br/>extracted from the document's hospital location if known; otherwise it is <br/>extracted from the user's log-on division.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| reference_date | 1301 | Reference Date | {::nomarkdown}This is the Date (and time) by which the clinician will reference the <br/>document.  For Progress Notes, this will likely be the date of the <br/>provider's encounter with the patient.  For Discharge Summaries, it will <br/>correspond to the Discharge Date of the Admission referenced in the <br/>document.  (If there is no Discharge Date when dictated, it will <br/>correspond to the dictation date of the record instead.)<br/>In all cases, this is the date by which the document will be referenced<br/>and sorted.{:/} | DATE-TIME |  | INDEXED |  | 
| entered_by | 1302 | Entered By |  | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| capture_method | 1303 | Capture Method |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>R</dt><dd>remote procedure</dd><dt>O</dt><dd>copy</dd><dt>C</dt><dd>converted</dd><dt>D</dt><dd>direct</dd><dt>U</dt><dd>upload</dd></dl>{:/} | 
| release_date_time | 1304 | Release Date/time |  | DATE-TIME |  | INDEXED |  | 
| verification_date_time | 1305 | Verification Date/time |  | DATE-TIME |  |  |  | 
| verified_by | 1306 | Verified By |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| dictation_date | 1307 | Dictation Date | {::nomarkdown}This is the date (and time) on which the document was dictated by its <br/>author.  In the event that a document originates by dictation, we recommend <br/>that the REFERENCE DATE for the document be defaulted to dictation date, as <br/>the author will be able to identify the document by the date on which s/he <br/>dictated it.{:/} | DATE-TIME |  |  |  | 
| suspense_date_time | 1308 | Suspense Date/time | {::nomarkdown}This is the date (and time) on which the document will be removed from<br/>public view.  It is currently used only for Patient Postings, although it<br/>may be generalized for use with other document types, if appropriate.{:/} | DATE-TIME |  |  |  | 
| patient_movement_record | 1401 | Patient Movement Record |  | POINTER |  |  | [Patient_Movement-405](Patient_Movement-405.md) | 
| treating_specialty | 1402 | Treating Specialty |  | POINTER |  | INDEXED | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7.md) | 
| irt_record | 1403 | Irt Record |  | POINTER |  |  | Incomplete_Records-393 | 
| service | 1404 | Service |  | POINTER |  | INDEXED | [Service_section-49](Service_section-49.md) | 
| requesting_package_reference | 1405 | Requesting Package Reference | {::nomarkdown}This field allows a linkage to be maintained between the TIU Document and<br/>the DHCP Package for which it was generated.{:/} | POINTER |  | INDEXED | undefined | 
| retracted_original | 1406 | Retracted Original | {::nomarkdown}This self-refering pointer identifies the original document which was <br/>retracted in error to produce this record.{:/} | POINTER |  |  | [TIU_Document-8925](TIU_Document-8925.md) | 
| signature_date_time | 1501 | Signature Date/time |  | DATE-TIME |  |  |  | 
| signed_by | 1502 | Signed By |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| signature_block_name | 1503 | Signature Block Name |  | STRING |  |  |  | 
| signature_block_title | 1504 | Signature Block Title | {::nomarkdown}This is the encrypted signature block title of the person who signed the<br/>document.{:/} | STRING |  |  |  | 
| signature_mode | 1505 | Signature Mode | {::nomarkdown}This is the mode by which the signature was obtained (i.e., either<br/>electronic or chart).{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>E</dt><dd>electronic</dd><dt>C</dt><dd>chart</dd></dl>{:/} | 
| cosignature_needed | 1506 | Cosignature Needed | {::nomarkdown}This boolean flag indicates to the system whether or not a cosignature is<br/>needed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| cosignature_date_time | 1507 | Cosignature Date/time | {::nomarkdown}This is the date/time at which cosignature was obtained.{:/} | DATE-TIME |  |  |  | 
| cosigned_by | 1508 | Cosigned By |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| cosignature_block_name | 1509 | Cosignature Block Name |  | STRING |  |  |  | 
| cosignature_block_title | 1510 | Cosignature Block Title |  | STRING |  |  |  | 
| cosignature_mode | 1511 | Cosignature Mode |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>E</dt><dd>electronic</dd><dt>C</dt><dd>chart</dd></dl>{:/} | 
| marked_signed_on_chart_by | 1512 | Marked Signed On Chart By | {::nomarkdown}This is the identity of the person who marked a given document 'signed on <br/>chart,' indicating that a 'wet' signature of the chart copy had been obtained.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| marked_cosigned_on_chart_by | 1513 | Marked Cosigned On Chart By | {::nomarkdown}This is the user who marked a given document as 'cosigned on chart.'{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| amendment_date_time | 1601 | Amendment Date/time |  | DATE-TIME |  |  |  | 
| amended_by | 1602 | Amended By |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| amendment_signed | 1603 | Amendment Signed |  | DATE-TIME |  |  |  | 
| amendment_sign_block_name | 1604 | Amendment Sign Block Name | {::nomarkdown}This is the signature block name of the person who amended the document.{:/} | STRING |  |  |  | 
| amendment_sign_block_title | 1605 | Amendment Sign Block Title |  | STRING |  |  |  | 
| administrative_closure_date | 1606 | Administrative Closure Date |  | DATE-TIME |  |  |  | 
| admin_closure_sig_block_name | 1607 | Admin Closure Sig Block Name |  | STRING |  |  |  | 
| admin_closure_sig_block_title | 1608 | Admin Closure Sig Block Title |  | STRING |  |  |  | 
| archive_purge_date_time | 1609 | Archive/purge Date/time |  | DATE-TIME |  |  |  | 
| deleted_by | 1610 | Deleted By | {::nomarkdown}This is the person who deleted the document per the Privacy Act.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| deletion_date | 1611 | Deletion Date | {::nomarkdown}This is the date/(time optional) at which the document was deleted per the <br/>Privacy Act.{:/} | DATE-TIME |  |  |  | 
| reason_for_deletion | 1612 | Reason For Deletion | {::nomarkdown}This is the reason for which the document was deleted, either: Privacy<br/>Act, as invoked by the patient; or Administrative Action, where the note<br/>needed to be removed, following signature, for administrative reasons.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>A</dt><dd>administrative</dd><dt>P</dt><dd>privacy act</dd></dl>{:/} | 
| administrative_closure_mode | 1613 | Administrative Closure Mode | {::nomarkdown}This indicates whether the document was closed manually by an<br/>administrative person (in order to satisfy authentication<br/>requirements), or automatically by scanning a paper document<br/>bearing the signature of the patient (e.g., Consents, Advanced<br/>Directives, etc.) and not requiring the signature of an author.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>manual</dd><dt>S</dt><dd>scanned document</dd></dl>{:/} | 
| subject_optional_description | 1701 | Subject (optional Description) | {::nomarkdown}This freetext field is used to help you find documents by subject (i.e.,<br/>consider the subject a \key word\ of sorts.{:/} | STRING |  |  |  | 
| vbc_line_count | 1801 | Vbc Line Count | {::nomarkdown}A VBC Line is defined as the total number of characters you can see with<br/>the naked eye, divided by 65. It includes any character contained within a<br/>header or footer. Spaces, carriage returns, and hidden format<br/>instructions, such as bold, underline, text boxes, printer configurations,<br/>spell check, etc., are not counted in the total character count. A VBC<br/>Line is calculated by counting all visual characters and simply dividing<br/>the total number of characters by 65 to arrive at the number of defined<br/>lines.{:/} | NUMERIC |  |  |  | 
| id_parent | 2101 | Id Parent | {::nomarkdown}Applies to ID (interdisciplinary) notes only.  The ID PARENT is the note<br/>this note is attached to, making this note an entry in an ID note.<br/> <br/>A note with an ID PARENT is referred to as an ID child note. ID parent<br/>notes and ID child notes are both file entries in file 8925.<br/>  <br/>The entries of an interdisciplinary note consist of the first entry, which<br/>is also the ID PARENT of the ID note, followed by the ID children.{:/} | POINTER |  | INDEXED | [TIU_Document-8925](TIU_Document-8925.md) | 
| visit_id | 15001 | Visit Id | {::nomarkdown}Unique Visit Identifier for use by CIRN.  The value of this field should<br/>ONLY be modified by virtue of a change to the Visit (.03) field.{:/} | STRING |  | INDEXED |  | 
| procedure_summary_code | 70201 | Procedure Summary Code | {::nomarkdown}This field contains the summary code for this procedure once it is<br/>complete.  'Machine Resulted' is the initial, default code.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>Machine Resulted</dd><dt>2</dt><dd>Abnormal</dd><dt>4</dt><dd>Incomplete</dd><dt>3</dt><dd>Borderline</dd><dt>1</dt><dd>Normal</dd></dl>{:/} | 
| date_time_performed | 70202 | Date/time Performed | {::nomarkdown}This field contains the Date/Time when the procedure was performed.{:/} | DATE-TIME |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:09:58 am</p>{:/}