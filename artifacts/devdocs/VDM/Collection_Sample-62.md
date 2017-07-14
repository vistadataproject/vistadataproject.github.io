---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Collection_Sample-62<br/>
<a name="top"></a>
# Collection Sample (62)
Collection samples for laboratory specimens.

**Global:** ^LAB(62,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of the collection sample. | STRING | INDEXED<br/>REQUIRED | 
**Default Specimen**{::nomarkdown}<pre><code>  default_specimen</code></pre>{:/} | 2 | This is the specimen that will appear as the default specimen for this collection sample.  This does not preclude other specimens from being used but, rather, if it is the most frequently used one, it will save time and keystrokes for the user.<br/> collection sample.  This does not preclude other specimens from being used<br/> but, rather, if it is the most frequently used one, it will save  time<br/> and keystrokes for the user. | POINTER |  | [Topography_Field-61](Topography_Field-61)
**Tube Top Color**{::nomarkdown}<pre><code>  tube_top_color</code></pre>{:/} | 3 | The common color description of the tube used for this sample. | STRING | INDEXED | 
**Volume Large**{::nomarkdown}<pre><code>  volume_large</code></pre>{:/} | 4 | The volume required for this sample. | NUMERIC |  | 
**Volume Small**{::nomarkdown}<pre><code>  volume_small</code></pre>{:/} | 5 | The volume required for this sample if an alternate small tube is used. | NUMERIC |  | 
**Lab Section**{::nomarkdown}<pre><code>  lab_section</code></pre>{:/} | 6 | The functional section of the lab that this sample is associated with.<br/>Points to FILE #62.2. | POINTER |  | [Lab_Section-62_2](Lab_Section-62_2)
**Can Lab Collect**{::nomarkdown}<pre><code>  can_lab_collect</code></pre>{:/} | 7 | If the Lab is allowed to collect this sample, this field must contain a YES entry. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 8 | This is a multiple field.  Enter synonyms, abbreviations, or common misspellings of this sample. | STRING |  | 
**Snomed Ct Id**{::nomarkdown}<pre><code>  snomed_ct_id</code></pre>{:/} | 20 | This is the SNOMED CT concept identifier for this entry. If this entry is<br/>null then the entry is either unmapped or no valid SNOMED concept<br/>term exists to map this term.<br/> <br/>This field is only editable by the Lab software. | STRING | INDEXED | 
**Sct Code Status**{::nomarkdown}<pre><code>  sct_code_status</code></pre>{:/} | 21 | This field indicate the status or disposition of this entry.<br/> P  = SNOMED Preferred term<br/> S  = SNOMED Synonym term<br/> L  = Local spelling of a SNOMED term (miss-spelled)<br/> R  = Referred to national coders to determine if acceptable<br/> X  = No applicable mapping<br/> LN = New term pending LEXICON release/update.<br/> RN = STS Request New Code<br/> E  = Error encountered when applying STS disposition to file entry.  | ENUMERATION | INDEXED | {::nomarkdown}SYNONYM: <em><strong>S</strong></em><br/>NO APPLICABLE MAPPING: <em><strong>X</strong></em><br/>NEW TERM PENDING LEXICON UPDATE: <em><strong>LN</strong></em><br/>ERROR: <em><strong>E</strong></em><br/>STS REQUEST NEW CODE: <em><strong>RN</strong></em><br/>PREFERRED TERM: <em><strong>P</strong></em><br/>LOCAL: <em><strong>L</strong></em><br/>REFERRED: <em><strong>R</strong></em>{:/}
**Sct Top Concept**{::nomarkdown}<pre><code>  sct_top_concept</code></pre>{:/} | 22 | This field Identifies the SNOMED CT top level concept for this SNOMED<br/>code. This is useful to determine the proper code when the spelling of<br/>the terms are identical but have different concept (meaning). | POINTER |  | [Lab_Electronic_Codes-64_061](Lab_Electronic_Codes-64_061)
**Sct Status Date**{::nomarkdown}<pre><code>  sct_status_date</code></pre>{:/} | 23 | This field track the status of terms referred to the STS team to determine<br/>if this code is a valid VHA SNOMED SCT term. | OBJECT |  | [Sct_Status_Date-62_023](#Sct_Status_Date-62_023)
**Inactive Date**{::nomarkdown}<pre><code>  inactive_date</code></pre>{:/} | 64.9101 | This is the date on or after which the entry<br/>will no longer be active.  Inactive entries<br/>will not be available for selection<br/>in CPRS nor be able to be associated with a<br/>test in the LABORATORY TEST file (#60). | DATE-TIME |  | 
**Collection Wkld Code**{::nomarkdown}<pre><code>  collection_wkld_code</code></pre>{:/} | 500 |  This field is used for those unique situations when an accession<br/>WKLD code can not be used. For example Bacterial culture test. By<br/>using this field you don't have to enter collection samples in file<br/>60 (LABORATORY TEST). | OBJECT |  | [Collection_Wkld_Code-62_02](#Collection_Wkld_Code-62_02)

## Sub-Files
### <a name="Sct_Status_Date-62_023"></a>Sct Status Date (62.023)

<dl>
<dt>ID</dt><dd>Sct_Status_Date-62_023</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sct Status Date**{::nomarkdown}<pre><code>  sct_status_date</code></pre>{:/} | .01 | This field is used to indicate the date the status was changed.<br/>This field is editable only by the Lab software. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Sct Status Changed To**{::nomarkdown}<pre><code>  sct_status_changed_to</code></pre>{:/} | 1 |  | ENUMERATION |  | {::nomarkdown}SYNONYM: <em><strong>S</strong></em><br/>NO APPLICABLE MAPPING: <em><strong>X</strong></em><br/>NEW TERM PENDING LEXICON UPDATE: <em><strong>LN</strong></em><br/>ERROR: <em><strong>E</strong></em><br/>STS REQUEST NEW CODE: <em><strong>RN</strong></em><br/>PREFERRED TERM: <em><strong>P</strong></em><br/>LOCAL: <em><strong>L</strong></em><br/>REFERRED: <em><strong>R</strong></em>{:/}
**Sct Transaction Number**{::nomarkdown}<pre><code>  sct_transaction_number</code></pre>{:/} | 2 | Transaction number generated by Laboratory software when referring a term<br/>for mediation by STS and mapping to SNOMED CT. | STRING |  | 
**Sct Status User**{::nomarkdown}<pre><code>  sct_status_user</code></pre>{:/} | 3 | Store the user who initiated the process to apply the STS SNOMED CT code<br/>resolution or the original mapping to this file entry. | POINTER |  | [New_Person-200](New_Person-200)
**Sct Comment Text**{::nomarkdown}<pre><code>  sct_comment_text</code></pre>{:/} | 4 | Contains text or comments related to the mapping of a term to SNOMED CT.<br/>The text can relate to information submitted to STS for the term to be<br/>mapped, the comments returned by STS related to the mapping and<br/>any comments when attempting to apply the disposition from STS. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Collection_Wkld_Code-62_02"></a>Collection Wkld Code (62.02)

<dl>
<dt>ID</dt><dd>Collection_Wkld_Code-62_02</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Accession Area**{::nomarkdown}<pre><code>  accession_area</code></pre>{:/} | .01 |   Which accession area does the test belong that you want have<br/>accession WKLD codes triggered. | POINTER | REQUIRED | [Accession-68](Accession-68)
**Lab Test**{::nomarkdown}<pre><code>  lab_test</code></pre>{:/} | 1 |  Enter a list of lab test that should trigger workload capture. | OBJECT |  | [Lab_Test-62_21](#Lab_Test-62_21)

[&uarr; Return to top](#top)<br/>


### <a name="Lab_Test-62_21"></a>Lab Test (62.21)

<dl>
<dt>ID</dt><dd>Lab_Test-62_21</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lab Test**{::nomarkdown}<pre><code>  lab_test</code></pre>{:/} | .01 |  | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Wkld Code**{::nomarkdown}<pre><code>  wkld_code</code></pre>{:/} | 1 |   Enter a list of WKLD code you wish to have counted when this<br/>test is accessioned. This is an alternate point for entering<br/>accession WKLD codes.  It is simular to accession WKLD codes but<br/>is by accession area and test.<br/>   This field is to be used when it is not desirable to enter<br/>collection samples to a test in file 60 (LABORATORY TEST). It<br/>is particularly useful in Microbioloby type test. | OBJECT |  | [Wkld_Code-62_211](#Wkld_Code-62_211)

[&uarr; Return to top](#top)<br/>


### <a name="Wkld_Code-62_211"></a>Wkld Code (62.211)

<dl>
<dt>ID</dt><dd>Wkld_Code-62_211</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Wkld Code**{::nomarkdown}<pre><code>  wkld_code</code></pre>{:/} | .01 |  Enter the WKLD code for thi | POINTER | REQUIRED | [Wkld_Code-64](Wkld_Code-64)
**Test Multiply Factor**{::nomarkdown}<pre><code>  test_multiply_factor</code></pre>{:/} | 2 |   This field contains the a number by which the count<br/>should be multiplied by. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}