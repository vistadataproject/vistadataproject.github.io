---
layout: default
title: MVDM
---

#### [Developer Documentation](../index) &#187; [MVDM](TableOfContents) &#187; Document<br/>
<a name="top"></a>
# Document

### Document

No Description

**Fileman ID:** 8925

**Base VDM Class:** [Tiu_Document-8925](../VDM/Tiu_Document-8925)

## Property Summary

**Property Count:** 20

Type | Count
--- | ---
POINTER | 11
STRING | 2
DATE-TIME | 3
BOOLEAN | 2
OBJECT | 2

**Sub-Object Count:** 2

ID | Label | Field ID
--- | --- | ---
1 | [Removal Details](#RemovalDetails) | RemovalDetails
2 | [Signing Details](#SigningDetails) | SigningDetails

[&uarr; Return to top](#top)<br/>

## Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | patient |  | REQUIRED | Patient_IHS-9000001
**Document Type**{::nomarkdown}<pre><code>  documentType</code></pre>{:/} | POINTER | document_type |  | REQUIRED | [Tiu_Document_Definition-8925_1](../VDM/Tiu_Document_Definition-8925_1)
**Parent Document Type**{::nomarkdown}<pre><code>  parentDocumentType</code></pre>{:/} | POINTER | parent_document_type |  |  | [Tiu_Document_Definition-8925_1](../VDM/Tiu_Document_Definition-8925_1)
**Visit**{::nomarkdown}<pre><code>  visit</code></pre>{:/} | POINTER | visit |  | INDEXED<br/>REQUIRED | [Visit-9000010](../VDM/Visit-9000010)
**Visit Type**{::nomarkdown}<pre><code>  visitType</code></pre>{:/} | STRING | visit_type |  | CREATE | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | POINTER | status | [object Object] |  | Tiu_Status-8925_6
**Report Text**{::nomarkdown}<pre><code>  text</code></pre>{:/} | STRING | report_text |  | REQUIRED | 
**Entry Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | entry_date_time | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | entered_by | $USERID |  | 
**Author/Dictator**{::nomarkdown}<pre><code>  authorDictator</code></pre>{:/} | POINTER | author_dictator | $USERID | INDEXED | [New_Person-200](../VDM/New_Person-200)
**Division**{::nomarkdown}<pre><code>  facility</code></pre>{:/} | POINTER | division | $FACILITYID |  | [Institution-4](../VDM/Institution-4)
**Hospital Location**{::nomarkdown}<pre><code>  hospitalLocation</code></pre>{:/} | POINTER | hospital_location |  |  | [Hospital_Location-44](../VDM/Hospital_Location-44)
**Service**{::nomarkdown}<pre><code>  service</code></pre>{:/} | POINTER | service |  |  | Service_Section-49
**Reference Date**{::nomarkdown}<pre><code>  referenceDate</code></pre>{:/} | DATE-TIME | reference_date | $NOW |  | 
**Release Date/Time**{::nomarkdown}<pre><code>  releaseDateTime</code></pre>{:/} | DATE-TIME | release_date_time | $NOW |  | 
**Expected Signer**{::nomarkdown}<pre><code>  expectedSigner</code></pre>{:/} | POINTER | expected_signer | $USERID |  | [New_Person-200](../VDM/New_Person-200)
**Is Signed**{::nomarkdown}<pre><code>  isSigned</code></pre>{:/} | BOOLEAN | *GENERATED* |  |  | 
**Signing Details**{::nomarkdown}<pre><code>  signingDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [SigningDetails](#SigningDetails)
**Is Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | BOOLEAN | *GENERATED* |  |  | 
**Removal Details**{::nomarkdown}<pre><code>  removalDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [RemovalDetails](#RemovalDetails)

[&uarr; Return to top](#top)<br/>

## Sub-Objects
### <a name="RemovalDetails"></a>1. Removal Details

**Field ID:** RemovalDetails

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | deletion_date |  |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | deleted_by |  |  | 
**Reason For Document Deletion**{::nomarkdown}<pre><code>  reasonForDocumentDeletion</code></pre>{:/} | ENUMERATION | reason_for_deletion |  |  | {::nomarkdown}0: <em><strong>privacy act</strong></em><br/>1: <em><strong>administrative</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="SigningDetails"></a>2. Signing Details

**Field ID:** SigningDetails

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Signature Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | signature_date_time |  |  | 
**Signed By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | signed_by |  |  | [New_Person-200](../VDM/New_Person-200)
**Signature Block Name**{::nomarkdown}<pre><code>  signatureBlockName</code></pre>{:/} | STRING | signature_block_name |  |  | 
**Signature Block Title**{::nomarkdown}<pre><code>  signatureBlockTitle</code></pre>{:/} | STRING | signature_block_title |  |  | 
**Signature Mode**{::nomarkdown}<pre><code>  signatureMode</code></pre>{:/} | ENUMERATION | signature_mode |  |  | {::nomarkdown}0: <em><strong>electronic</strong></em><br/>1: <em><strong>chart</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}