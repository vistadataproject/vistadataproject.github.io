---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Topography_Field-61
# Topography Field (61)
This is the TOPOGRAPHY file of SNOMED

<dl>
<dt>Global</dt><dd>^LAB(61,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of the specimen or source. | STRING | INDEXED<br/>REQUIRED | 
**Icdo Code**{::nomarkdown}<pre><code>  icdo_code</code></pre>{:/} | .07 | The appropriate ICD0 code associated with this specimen or source. | STRING |  | 
**Hl7 Code**{::nomarkdown}<pre><code>  hl7_code</code></pre>{:/} | .08 |  | STRING |  | 
**Ledi Hl7**{::nomarkdown}<pre><code>  ledi_hl7</code></pre>{:/} | .09 | This field contains the HL7 standard specimen type code. | POINTER |  | [Lab_Electronic_Codes-64_061](Lab_Electronic_Codes-64_061)
**Time Aspect**{::nomarkdown}<pre><code>  time_aspect</code></pre>{:/} | .0961 | This field describes the time aspect for this specimen.<br/>(i.e. 24hour, point, fasting, 30 mins ...)<br/> You may select any entry in the LAB ELECTRONIC CODE (#64.061) that has<br/>the type of SPECIMEN.<br/> <br/>This field is used to determine the correct specimen LOINC code during<br/>verification of results. | POINTER |  | [Lab_Electronic_Codes-64_061](Lab_Electronic_Codes-64_061)
**Snomed Code**{::nomarkdown}<pre><code>  snomed_code</code></pre>{:/} | 2 | The code consists of the characters following "T-" in the SNOMED reference book. | STRING | INDEXED | 
**Sex Specific**{::nomarkdown}<pre><code>  sex_specific</code></pre>{:/} | 2.5 | If this specimen is specific to one sex only, enter F for female or M<br/>for male. | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Synonyms**{::nomarkdown}<pre><code>  synonyms</code></pre>{:/} | 3 | This is a multiple field.  Enter synonyms or common<br/>misspellings of the specimen or organ/tissue. | STRING |  | 
**Weigh**{::nomarkdown}<pre><code>  weigh</code></pre>{:/} | 4 | WEIGH is a YES/NO question.  Answer YES if you want this specimen to<br/>be weighed for surgical pathology.  A null answer equals NO. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Collection Sample**{::nomarkdown}<pre><code>  collection_sample</code></pre>{:/} | 4.1 | The name of the collection sample for this specimen.<br/>Points to the COLLECTION SAMPLE file. | POINTER |  | [Collection_Sample-62](Collection_Sample-62)
**Journal Reference**{::nomarkdown}<pre><code>  journal_reference</code></pre>{:/} | 5 | This is a multiple field.  You may enter Journal references that apply<br/>to this specimen.<br/>Points to FILE #95. | OBJECT |  | [Journal_Reference-61_02](#Journal_Reference-61_02)
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 6 | This must be a 1,2, or 3 character abbreviation of the specimen. | STRING | INDEXED | 
**Snomed Ct Id**{::nomarkdown}<pre><code>  snomed_ct_id</code></pre>{:/} | 20 | This is the SNOMED CT concept identifier for this entry. If this<br/>entry is null then the entry is either unmapped or no valid SNOMED concept<br/>term exists to map this term.<br/> <br/>This field is not editable except by the Lab software. | STRING | INDEXED | 
**Sct Code Status**{::nomarkdown}<pre><code>  sct_code_status</code></pre>{:/} | 21 | This field indicate the status or disposition of this entry.<br/> P  = SNOMED Preferred term<br/> S  = SNOMED Synonym term<br/> L  = Local spelling of a SNOMED term (miss-spelled)<br/> R  = Referred to national coders to determine if acceptable<br/> X  = No applicable mapping<br/> LN = New term pending LEXICON release/update.<br/> RN = STS Request New Code<br/> E  = Error encountered when applying STS disposition to file entry.  | ENUMERATION | INDEXED | {::nomarkdown}SYNONYM: <em><strong>S</strong></em><br/>NO APPLICABLE MAPPING: <em><strong>X</strong></em><br/>NEW TERM PENDING LEXICON UPDATE: <em><strong>LN</strong></em><br/>ERROR: <em><strong>E</strong></em><br/>STS REQUEST NEW CODE: <em><strong>RN</strong></em><br/>PREFERRED TERM: <em><strong>P</strong></em><br/>LOCAL: <em><strong>L</strong></em><br/>REFERRED: <em><strong>R</strong></em>{:/}
**Sct Top Concept**{::nomarkdown}<pre><code>  sct_top_concept</code></pre>{:/} | 22 | This field Identifies the SNOMED CT top level concept for this SNOMED<br/>code. This is useful to determine the proper code when the spelling of<br/>the terms are identical but have different concept (meaning). | POINTER |  | [Lab_Electronic_Codes-64_061](Lab_Electronic_Codes-64_061)
**Sct Status Date**{::nomarkdown}<pre><code>  sct_status_date</code></pre>{:/} | 23 | This multiple tracks the status of SNOMED SCT codes referred to STS to <br/>determine if the code is a valid VHA SCT term.  This field is not editable<br/>except by Lab software. | OBJECT |  | [Sct_Status_Date-61_023](#Sct_Status_Date-61_023)
***negative Bacteriology Comment**{::nomarkdown}<pre><code>  negative_bacteriology_comment</code></pre>{:/} | 63.05 | This comment facilitates batch entry of microbiology results.  The text contained in this field is the default comment for the named specimen. | STRING | DEPRECATED | 
**Inactive Date**{::nomarkdown}<pre><code>  inactive_date</code></pre>{:/} | 64.9103 | This is the date on or after which the entry will no longer be active.  <br/>Inactive entries will not be available for selection in CPRS nor be able<br/>to be associated with a test in the LABORATORY TEST file (#60).   | DATE-TIME |  | 

### Subfile
#### <a name="Journal_Reference-61_02"></a>Journal Reference

<dl>
<dt>ID</dt><dd>Journal_Reference-61_02</dd>
<dt>File Type</dt><dd>61.02</dd>
<dt>Label</dt><dd>Journal Reference</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Title Of Article**{::nomarkdown}<pre><code>  title_of_article</code></pre>{:/} | .01 | Title of an article that discusses the named specimen. | STRING | REQUIRED | 
**Author(s)**{::nomarkdown}<pre><code>  authors</code></pre>{:/} | 1 | Author(s) of the named article. | STRING |  | 
**Medical Journal**{::nomarkdown}<pre><code>  medical_journal</code></pre>{:/} | 2 | The name of the medical journal containing the article.  Points to FILE #95. | POINTER |  | [Lab_Journal-95](Lab_Journal-95)
**Volume**{::nomarkdown}<pre><code>  volume</code></pre>{:/} | 3 | The volume number/name that contains the article. | STRING |  | 
**Starting Page**{::nomarkdown}<pre><code>  starting_page</code></pre>{:/} | 4 | The first page of the article. | STRING |  | 
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | 5 | Date of article. | DATE-TIME |  | 
**List On Patient Record**{::nomarkdown}<pre><code>  list_on_patient_record</code></pre>{:/} | 6 | If this reference is to be listed on a patient record whenever this specimen is used, this field requires a YES entry. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

#### <a name="Sct_Status_Date-61_023"></a>Sct Status Date

<dl>
<dt>ID</dt><dd>Sct_Status_Date-61_023</dd>
<dt>File Type</dt><dd>61.023</dd>
<dt>Label</dt><dd>Sct Status Date</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sct Status Date**{::nomarkdown}<pre><code>  sct_status_date</code></pre>{:/} | .01 | The date the status was changed. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Sct Status Change To**{::nomarkdown}<pre><code>  sct_status_change_to</code></pre>{:/} | 1 | This field track the status of terms referred to the ERT team to <br/>determine if this code is a valid VHA SNOMED SCT term. | ENUMERATION |  | {::nomarkdown}SYNONYM: <em><strong>S</strong></em><br/>NO APPLICABLE MAPPING: <em><strong>X</strong></em><br/>NEW TERM PENDING LEXICON UPDATE: <em><strong>LN</strong></em><br/>ERROR: <em><strong>E</strong></em><br/>STS REQUEST NEW CODE: <em><strong>RN</strong></em><br/>PREFERRED TERM: <em><strong>P</strong></em><br/>LOCAL: <em><strong>L</strong></em><br/>REFERRED: <em><strong>R</strong></em>{:/}
**Sct Transaction Number**{::nomarkdown}<pre><code>  sct_transaction_number</code></pre>{:/} | 2 | Transaction number generated by Laboratory software when referring a term<br/>for mediation by STS and mapping to SNOMED CT. | STRING |  | 
**Sct Status User**{::nomarkdown}<pre><code>  sct_status_user</code></pre>{:/} | 3 | Store the user who initiated the process to apply the STS SNOMED CT code <br/>resolution or the original mapping to this file entry. | POINTER |  | [New_Person-200](New_Person-200)
**Sct Comment Text**{::nomarkdown}<pre><code>  sct_comment_text</code></pre>{:/} | 4 | Contains text or comments related to the mapping of a term to SNOMED CT.<br/>The text can relate to information submitted to STS for the term to be <br/>mapped, the comments returned by STS related to the mapping and <br/>any comments when attempting to apply the disposition from STS. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}