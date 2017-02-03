---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Topography_Field-61 

<dl>
<dt>id</dt><dd>Topography_Field-61</dd>
<dt>fmId</dt><dd>61</dd>
<dt>label</dt><dd>Topography Field</dd>
<dt>location</dt><dd>^LAB(61,</dd>
<dt>description</dt><dd>This is the TOPOGRAPHY file of SNOMED</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of the specimen or source.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| icdo_code | .07 | Icdo Code | {::nomarkdown}The appropriate ICD0 code associated with this specimen or source.{:/} | STRING |  |  |  | 
| hl7_code | .08 | Hl7 Code |  | STRING |  |  |  | 
| ledi_hl7 | .09 | Ledi Hl7 | {::nomarkdown}This field contains the HL7 standard specimen type code.{:/} | POINTER |  |  | Lab_Electronic_Codes-64_061 | 
| time_aspect | .0961 | Time Aspect | {::nomarkdown}This field describes the time aspect for this specimen.<br/>(i.e. 24hour, point, fasting, 30 mins ...)<br/> You may select any entry in the LAB ELECTRONIC CODE (#64.061) that has<br/>the type of SPECIMEN.<br/> <br/>This field is used to determine the correct specimen LOINC code during<br/>verification of results.{:/} | POINTER |  |  | Lab_Electronic_Codes-64_061 | 
| snomed_code | 2 | Snomed Code | {::nomarkdown}The code consists of the characters following \T-\ in the SNOMED reference book.{:/} | STRING |  | INDEXED |  | 
| sex_specific | 2.5 | Sex Specific | {::nomarkdown}If this specimen is specific to one sex only, enter F for female or M<br/>for male.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
| synonyms | 3 | Synonyms | {::nomarkdown}This is a multiple field.  Enter synonyms or common<br/>misspellings of the specimen or organ/tissue.{:/} | [STRING] |  |  |  | 
| weigh | 4 | Weigh | {::nomarkdown}WEIGH is a YES/NO question.  Answer YES if you want this specimen to<br/>be weighed for surgical pathology.  A null answer equals NO.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| collection_sample | 4.1 | Collection Sample | {::nomarkdown}The name of the collection sample for this specimen.<br/>Points to the COLLECTION SAMPLE file.{:/} | POINTER |  |  | Collection_Sample-62 | 
| journal_reference | 5 | Journal Reference | {::nomarkdown}This is a multiple field.  You may enter Journal references that apply<br/>to this specimen.<br/>Points to FILE #95.{:/} | [OBJECT] |  |  | [Journal_Reference-61_02](#Journal_Reference-61_02)  | 
| abbreviation | 6 | Abbreviation | {::nomarkdown}This must be a 1,2, or 3 character abbreviation of the specimen.{:/} | STRING |  | INDEXED |  | 
| snomed_ct_id | 20 | Snomed Ct Id | {::nomarkdown}This is the SNOMED CT concept identifier for this entry. If this<br/>entry is null then the entry is either unmapped or no valid SNOMED concept<br/>term exists to map this term.<br/> <br/>This field is not editable except by the Lab software.{:/} | STRING |  | INDEXED |  | 
| sct_code_status | 21 | Sct Code Status | {::nomarkdown}This field indicate the status or disposition of this entry.<br/> P  = SNOMED Preferred term<br/> S  = SNOMED Synonym term<br/> L  = Local spelling of a SNOMED term (miss-spelled)<br/> R  = Referred to national coders to determine if acceptable<br/> X  = No applicable mapping<br/> LN = New term pending LEXICON release/update.<br/> RN = STS Request New Code<br/> E  = Error encountered when applying STS disposition to file entry. {:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
| sct_top_concept | 22 | Sct Top Concept | {::nomarkdown}This field Identifies the SNOMED CT top level concept for this SNOMED<br/>code. This is useful to determine the proper code when the spelling of<br/>the terms are identical but have different concept (meaning).{:/} | POINTER |  |  | Lab_Electronic_Codes-64_061 | 
| sct_status_date | 23 | Sct Status Date | {::nomarkdown}This multiple tracks the status of SNOMED SCT codes referred to STS to <br/>determine if the code is a valid VHA SCT term.  This field is not editable<br/>except by Lab software.{:/} | [OBJECT] |  |  | [Sct_Status_Date-61_023](#Sct_Status_Date-61_023)  | 
| negative_bacteriology_comment | 63.05 | *negative Bacteriology Comment | {::nomarkdown}This comment facilitates batch entry of microbiology results.  The text contained in this field is the default comment for the named specimen.{:/} | STRING |  |  |  | 
| inactive_date | 64.9103 | Inactive Date | {::nomarkdown}This is the date on or after which the entry will no longer be active.  <br/>Inactive entries will not be available for selection in CPRS nor be able<br/>to be associated with a test in the LABORATORY TEST file (#60).  {:/} | DATE-TIME |  |  |  | 

## <a name="Journal_Reference-61_02"></a>Journal_Reference-61_02 

<dl>
<dt>id</dt><dd>Journal_Reference-61_02</dd>
<dt>fmId</dt><dd>61.02</dd>
<dt>label</dt><dd>Journal Reference</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| title_of_article | .01 | Title Of Article | {::nomarkdown}Title of an article that discusses the named specimen.{:/} | STRING |  | REQUIRED |  | 
| authors | 1 | Author(s) | {::nomarkdown}Author(s) of the named article.{:/} | STRING |  |  |  | 
| medical_journal | 2 | Medical Journal | {::nomarkdown}The name of the medical journal containing the article.  Points to FILE #95.{:/} | POINTER |  |  | Lab_Journal-95 | 
| volume | 3 | Volume | {::nomarkdown}The volume number/name that contains the article.{:/} | STRING |  |  |  | 
| starting_page | 4 | Starting Page | {::nomarkdown}The first page of the article.{:/} | STRING |  |  |  | 
| date | 5 | Date | {::nomarkdown}Date of article.{:/} | DATE-TIME |  |  |  | 
| list_on_patient_record | 6 | List On Patient Record | {::nomarkdown}If this reference is to be listed on a patient record whenever this specimen is used, this field requires a YES entry.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Sct_Status_Date-61_023"></a>Sct_Status_Date-61_023 

<dl>
<dt>id</dt><dd>Sct_Status_Date-61_023</dd>
<dt>fmId</dt><dd>61.023</dd>
<dt>label</dt><dd>Sct Status Date</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sct_status_date | .01 | Sct Status Date | {::nomarkdown}The date the status was changed.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| sct_status_change_to | 1 | Sct Status Change To | {::nomarkdown}This field track the status of terms referred to the ERT team to <br/>determine if this code is a valid VHA SNOMED SCT term.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SYNONYM</dd><dt>X</dt><dd>NO APPLICABLE MAPPING</dd><dt>LN</dt><dd>NEW TERM PENDING LEXICON UPDATE</dd><dt>E</dt><dd>ERROR</dd><dt>RN</dt><dd>STS REQUEST NEW CODE</dd><dt>P</dt><dd>PREFERRED TERM</dd><dt>L</dt><dd>LOCAL</dd><dt>R</dt><dd>REFERRED</dd></dl>{:/} | 
| sct_transaction_number | 2 | Sct Transaction Number | {::nomarkdown}Transaction number generated by Laboratory software when referring a term<br/>for mediation by STS and mapping to SNOMED CT.{:/} | STRING |  |  |  | 
| sct_status_user | 3 | Sct Status User | {::nomarkdown}Store the user who initiated the process to apply the STS SNOMED CT code <br/>resolution or the original mapping to this file entry.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| sct_comment_text | 4 | Sct Comment Text | {::nomarkdown}Contains text or comments related to the mapping of a term to SNOMED CT.<br/>The text can relate to information submitted to STS for the term to be <br/>mapped, the comments returned by STS related to the mapping and <br/>any comments when attempting to apply the disposition from STS.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:27:56 am</p>{:/}