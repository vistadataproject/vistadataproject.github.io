
## [MVDM](TableOfContent.md) --> Document 

 property | value 
--- | --- 
 id | Document
 label | 
 description | 
 fmIdForId | 8925
 baseVDMClass | [Tiu_Document-8925](../VDM/Tiu_Document-8925.md)
 fromVDMQueries | [{vdmId:Tiu_Document-8925,query:DESCRIBE $ID}]
 fromVDMList | SELECT 8925 FILTER(!bound(1611))
 fromVDMListPerPatient | SELECT 8925 FILTER(.02=$PID&&!bound(1611))

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient |  | {id:Patient_IHS-9000001} | REQUIRED | 
| documentType | Document Type | POINTER | document_type |  | {id:Tiu_Document_Definition-8925_1} | REQUIRED | 
| parentDocumentType | Parent Document Type | POINTER | parent_document_type |  | {id:Tiu_Document_Definition-8925_1} |  | 
| visit | Visit | POINTER | visit |  | {id:Visit-9000010} | REQUIRED, INDEXED | 
| visitType | Visit Type | STRING | visit_type |  |  | CREATE | 
| status | Status | POINTER | status | {id:8925_6-5,label:UNSIGNED} | {id:Tiu_Status-8925_6} |  | 
| text | Report Text | STRING | report_text |  |  | REQUIRED | 
| dateTimeEntered | Entry Date/Time | DATE-TIME | entry_date_time | $NOW |  |  | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  |  | 
| authorDictator | Author/Dictator | POINTER | author_dictator | $USERID | {id:New_Person-200} | INDEXED | 
| facility | Division | POINTER | division | $FACILITYID | {id:Institution-4} |  | 
| hospitalLocation |  | POINTER | hospital_location |  | {id:Hospital_Location-44} |  | 
| service | Service | POINTER | service |  | {id:Service_Section-49} |  | 
| referenceDate | Reference Date | DATE-TIME | reference_date | $NOW |  |  | 
| releaseDateTime | Release Date/Time | DATE-TIME | release_date_time | $NOW |  |  | 
| expectedSigner | Expected Signer | POINTER | expected_signer | $USERID | {id:New_Person-200} |  | 
| isSigned |  | BOOLEAN | Mapper |  |  |  | 
| signingDetails |  | OBJECT | Mapper |  | [SigningDetails](#signingdetails)  |  | 
| isRemoved |  | BOOLEAN | Mapper |  |  |  | 
| removalDetails |  | OBJECT | Mapper |  | [RemovalDetails](#removaldetails)  |  | 

## SigningDetails 

 property | value 
--- | --- 
 id | SigningDetails
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Signature Date/Time | DATE-TIME | signature_date_time |  |  |  | 
| enteredBy | Signed By | POINTER | signed_by |  | {id:New_Person-200} |  | 
| signatureBlockName | Signature Block Name | STRING | signature_block_name |  |  |  | 
| signatureBlockTitle | Signature Block Title | STRING | signature_block_title |  |  |  | 
| signatureMode | Signature Mode | ENUMERATION | signature_mode |  | <dl><dt>electronic</dt><dd>0</dd><dt>chart</dt><dd>1</dd></dl> |  | 

## RemovalDetails 

 property | value 
--- | --- 
 id | RemovalDetails
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME | deletion_date |  |  |  | 
| enteredBy | Entered By | POINTER | deleted_by |  |  |  | 
| reasonForDocumentDeletion |  | ENUMERATION | reason_for_deletion |  | <dl><dt>privacy act</dt><dd>0</dd><dt>administrative</dt><dd>1</dd></dl> |  | 