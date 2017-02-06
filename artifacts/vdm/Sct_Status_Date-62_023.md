---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Collection_Sample-62 

<dl>
<dt>id</dt><dd>Collection_Sample-62</dd>
<dt>fmId</dt><dd>62</dd>
<dt>label</dt><dd>Collection Sample</dd>
<dt>location</dt><dd>^LAB(62,</dd>
<dt>description</dt><dd>Collection samples for laboratory specimens.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of the collection sample.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| default_specimen | 2 | Default Specimen | {::nomarkdown}This is the specimen that will appear as the default specimen for this collection sample.  This does not preclude other specimens from being used but, rather, if it is the most frequently used one, it will save time and keystrokes for the user.<br/> collection sample.  This does not preclude other specimens from being used<br/> but, rather, if it is the most frequently used one, it will save  time<br/> and keystrokes for the user.{:/} | POINTER |  |  | Topography_Field-61 | 
| tube_top_color | 3 | Tube Top Color | {::nomarkdown}The common color description of the tube used for this sample.{:/} | STRING |  | INDEXED |  | 
| volume_large | 4 | Volume Large | {::nomarkdown}The volume required for this sample.{:/} | NUMERIC |  |  |  | 
| volume_small | 5 | Volume Small | {::nomarkdown}The volume required for this sample if an alternate small tube is used.{:/} | NUMERIC |  |  |  | 
| lab_section | 6 | Lab Section | {::nomarkdown}The functional section of the lab that this sample is associated with.<br/>Points to FILE #62.2.{:/} | POINTER |  |  | Lab_Section-62_2 | 
| can_lab_collect | 7 | Can Lab Collect | {::nomarkdown}If the Lab is allowed to collect this sample, this field must contain a YES entry.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| synonym | 8 | Synonym | {::nomarkdown}This is a multiple field.  Enter synonyms, abbreviations, or common misspellings of this sample.{:/} | [STRING] |  |  |  | 
| snomed_ct_id | 20 | Snomed Ct Id | {::nomarkdown}This is the SNOMED CT concept identifier for this entry. If this entry is<br/>null then the entry is either unmapped or no valid SNOMED concept<br/>term exists to map this term.<br/> <br/>This field is only editable by the Lab software.{:/} | STRING |  | INDEXED |  | 
| sct_code_status | 21 | Sct Code Status | {::nomarkdown}This field indicate the status or disposition of this entry.<br/> P  = SNOMED Preferred term<br/> S  = SNOMED Synonym term<br/> L  = Local spelling of a SNOMED term (miss-spelled)<br/> R  = Referred to national coders to determine if acceptable<br/> X  = No applicable mapping<br/> LN = New term pending LEXICON release/update.<br/> RN = STS Request New Code<br/> E  = Error encountered when applying STS disposition to file entry. {:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
| sct_top_concept | 22 | Sct Top Concept | {::nomarkdown}This field Identifies the SNOMED CT top level concept for this SNOMED<br/>code. This is useful to determine the proper code when the spelling of<br/>the terms are identical but have different concept (meaning).{:/} | POINTER |  |  | Lab_Electronic_Codes-64_061 | 
| sct_status_date | 23 | Sct Status Date | {::nomarkdown}This field track the status of terms referred to the STS team to determine<br/>if this code is a valid VHA SNOMED SCT term.{:/} | [OBJECT] |  |  | [Sct_Status_Date-62_023](#Sct_Status_Date-62_023)  | 
| inactive_date | 64.9101 | Inactive Date | {::nomarkdown}This is the date on or after which the entry<br/>will no longer be active.  Inactive entries<br/>will not be available for selection<br/>in CPRS nor be able to be associated with a<br/>test in the LABORATORY TEST file (#60).{:/} | DATE-TIME |  |  |  | 
| collection_wkld_code | 500 | Collection Wkld Code | {::nomarkdown} This field is used for those unique situations when an accession<br/>WKLD code can not be used. For example Bacterial culture test. By<br/>using this field you don't have to enter collection samples in file<br/>60 (LABORATORY TEST).{:/} | [OBJECT] |  |  | [Collection_Wkld_Code-62_02](#Collection_Wkld_Code-62_02)  | 

## <a name="Collection_Wkld_Code-62_02"></a>Collection_Wkld_Code-62_02 

<dl>
<dt>id</dt><dd>Collection_Wkld_Code-62_02</dd>
<dt>fmId</dt><dd>62.02</dd>
<dt>label</dt><dd>Collection Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| accession_area | .01 | Accession Area | {::nomarkdown}  Which accession area does the test belong that you want have<br/>accession WKLD codes triggered.{:/} | POINTER |  | REQUIRED | Accession-68 | 
| lab_test | 1 | Lab Test | {::nomarkdown} Enter a list of lab test that should trigger workload capture.{:/} | [OBJECT] |  |  | [Lab_Test-62_21](#Lab_Test-62_21)  | 

## <a name="Lab_Test-62_21"></a>Lab_Test-62_21 

<dl>
<dt>id</dt><dd>Lab_Test-62_21</dd>
<dt>fmId</dt><dd>62.21</dd>
<dt>label</dt><dd>Lab Test</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| lab_test | .01 | Lab Test |  | POINTER |  | REQUIRED | Laboratory_Test-60 | 
| wkld_code | 1 | Wkld Code | {::nomarkdown}  Enter a list of WKLD code you wish to have counted when this<br/>test is accessioned. This is an alternate point for entering<br/>accession WKLD codes.  It is simular to accession WKLD codes but<br/>is by accession area and test.<br/>   This field is to be used when it is not desirable to enter<br/>collection samples to a test in file 60 (LABORATORY TEST). It<br/>is particularly useful in Microbioloby type test.{:/} | [OBJECT] |  |  | [Wkld_Code-62_211](#Wkld_Code-62_211)  | 

## <a name="Wkld_Code-62_211"></a>Wkld_Code-62_211 

<dl>
<dt>id</dt><dd>Wkld_Code-62_211</dd>
<dt>fmId</dt><dd>62.211</dd>
<dt>label</dt><dd>Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| wkld_code | .01 | Wkld Code | {::nomarkdown} Enter the WKLD code for thi{:/} | POINTER |  | REQUIRED | Wkld_Code-64 | 
| test_multiply_factor | 2 | Test Multiply Factor | {::nomarkdown}  This field contains the a number by which the count<br/>should be multiplied by.{:/} | NUMERIC |  |  |  | 

## <a name="Sct_Status_Date-62_023"></a>Sct_Status_Date-62_023 

<dl>
<dt>id</dt><dd>Sct_Status_Date-62_023</dd>
<dt>fmId</dt><dd>62.023</dd>
<dt>label</dt><dd>Sct Status Date</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sct_status_date | .01 | Sct Status Date | {::nomarkdown}This field is used to indicate the date the status was changed.<br/>This field is editable only by the Lab software.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| sct_status_changed_to | 1 | Sct Status Changed To |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
| sct_transaction_number | 2 | Sct Transaction Number | {::nomarkdown}Transaction number generated by Laboratory software when referring a term<br/>for mediation by STS and mapping to SNOMED CT.{:/} | STRING |  |  |  | 
| sct_status_user | 3 | Sct Status User | {::nomarkdown}Store the user who initiated the process to apply the STS SNOMED CT code<br/>resolution or the original mapping to this file entry.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| sct_comment_text | 4 | Sct Comment Text | {::nomarkdown}Contains text or comments related to the mapping of a term to SNOMED CT.<br/>The text can relate to information submitted to STS for the term to be<br/>mapped, the comments returned by STS related to the mapping and<br/>any comments when attempting to apply the disposition from STS.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:18:28 am</p>{:/}