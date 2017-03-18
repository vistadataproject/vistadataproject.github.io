---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Document 

<dl>
<dt>id</dt><dd>Document</dd>
<dt>fmIdForId</dt><dd>8925</dd>
<dt>baseVDMClass</dt><dd><a href="../vdm/Tiu_Document-8925">Tiu_Document-8925</a></dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Tiu_Document-8925,query:DESCRIBE $ID}]</dd>
<dt>fromVDMList</dt><dd>SELECT 8925 FILTER(!bound(1611))</dd>
<dt>fromVDMListPerPatient</dt><dd>SELECT 8925 FILTER(.02=$PID&&!bound(1611))</dd>
</dl>
Total # of Subobjects: 2

Total # of Properties: 20
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 2
DATE-TIME | 3
OBJECT | 2
POINTER | 11
STRING | 2



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient |  | Patient_IHS-9000001 | REQUIRED | 
| documentType | Document Type | POINTER | document_type |  | Tiu_Document_Definition-8925_1 | REQUIRED | 
| parentDocumentType | Parent Document Type | POINTER | parent_document_type |  | Tiu_Document_Definition-8925_1 |  | 
| visit | Visit | POINTER | visit |  | Visit-9000010 | REQUIRED, INDEXED | 
| visitType | Visit Type | STRING | visit_type |  |  | CREATE | 
| status | Status | POINTER | status | {id:8925_6-5,label:UNSIGNED} | Tiu_Status-8925_6 |  | 
| text | Report Text | STRING | report_text |  |  | REQUIRED | 
| dateTimeEntered | Entry Date/Time | DATE-TIME | entry_date_time | $NOW |  |  | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  |  | 
| authorDictator | Author/Dictator | POINTER | author_dictator | $USERID | New_Person-200 | INDEXED | 
| facility | Division | POINTER | division | $FACILITYID | Institution-4 |  | 
| hospitalLocation |  | POINTER | hospital_location |  | Hospital_Location-44 |  | 
| service | Service | POINTER | service |  | Service_Section-49 |  | 
| referenceDate | Reference Date | DATE-TIME | reference_date | $NOW |  |  | 
| releaseDateTime | Release Date/Time | DATE-TIME | release_date_time | $NOW |  |  | 
| expectedSigner | Expected Signer | POINTER | expected_signer | $USERID | New_Person-200 |  | 
| isSigned |  | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} |  | 
| signingDetails |  | OBJECT |  |  | [SigningDetails](#signingdetails)  |  | 
| isRemoved |  | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} |  | 
| removalDetails |  | OBJECT |  |  | [RemovalDetails](#removaldetails)  |  | 

## SigningDetails 

<dl>
<dt>id</dt><dd>SigningDetails</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Signature Date/Time | DATE-TIME | signature_date_time |  |  |  | 
| enteredBy | Signed By | POINTER | signed_by |  | New_Person-200 |  | 
| signatureBlockName | Signature Block Name | STRING | signature_block_name |  |  |  | 
| signatureBlockTitle | Signature Block Title | STRING | signature_block_title |  |  |  | 
| signatureMode | Signature Mode | ENUMERATION | signature_mode |  | {::nomarkdown}<dl><dt>electronic</dt><dd>0</dd><dt>chart</dt><dd>1</dd></dl>{:/} |  | 

## RemovalDetails 

<dl>
<dt>id</dt><dd>RemovalDetails</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME | deletion_date |  |  |  | 
| enteredBy | Entered By | POINTER | deleted_by |  |  |  | 
| reasonForDocumentDeletion |  | ENUMERATION | reason_for_deletion |  | {::nomarkdown}<dl><dt>privacy act</dt><dd>0</dd><dt>administrative</dt><dd>1</dd></dl>{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on March 8th 2017, 6:21:46 am</p>{:/}