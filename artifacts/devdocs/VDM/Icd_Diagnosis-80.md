---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Icd_Diagnosis-80<br/>
<a name="top"></a>
# Icd Diagnosis (80)
ICD Diagnosis file #80 contains codes from the International  Classification of Diseases (ICD) Clinical Modification (CM)  provided by the Centers for Medicare and Medicaid Services  (CMS) and the National Center for Health Statistics (NCHS). This file contains both the 9th (ICD-9-CM) and 10th (ICD-10-CM) Revisions.   If an entry needs to be added, modified or deleted, a patch will be issued containing the change.   This table file should NOT be edited in anyway by the site.

**Global:** ^ICD9(

**Domain:** Problems

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Code Number**{::nomarkdown}<pre><code>  code_number</code></pre>{:/} | .01 | ICD-9 or ICD-10 Code | STRING | REQUIRED | 
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | 1.1 | This is the coding system to which the code belongs. | POINTER |  | [Icd_Coding_Systems-80_4](Icd_Coding_Systems-80_4)
**Pdx Exclusion Code**{::nomarkdown}<pre><code>  pdx_exclusion_code</code></pre>{:/} | 1.11 | This is a Primary Diagnosis Exclusion Code <br/>(file #82.13) containing a list of Diagnosis <br/>codes that, when used as the primary diagnosis<br/>code with this code will cause the CC <br/>(Complication/Comorbidity) to be zero (meaning<br/>"no CC").   | POINTER |  | [Drg_Cc_Exclusions-82_13](Drg_Cc_Exclusions-82_13)
**Identifier**{::nomarkdown}<pre><code>  identifier</code></pre>{:/} | 1.2 | This field contains Identifier codes providing more detail on <br/>the DRG. | STRING |  | 
**Unacceptable As Principal Dx**{::nomarkdown}<pre><code>  unacceptable_as_principal_dx</code></pre>{:/} | 1.3 | This field contains a flag indicating that this code is <br/>unacceptable as the principal diagnosis. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Mdc13**{::nomarkdown}<pre><code>  mdc13</code></pre>{:/} | 1.4 | Field is set to 13 when the Major Diagnostic Code (MDC) <br/>equals 13 (Female Reproductive System) | NUMERIC |  | 
**Mdc24**{::nomarkdown}<pre><code>  mdc24</code></pre>{:/} | 1.5 | Code entry of body site of Multiple Significant Trauma. | ENUMERATION |  | {::nomarkdown}URINARY: <em><strong>5</strong></em><br/>HEAD: <em><strong>1</strong></em><br/>UPPER LIMB: <em><strong>7</strong></em><br/>CHEST: <em><strong>2</strong></em><br/>ABDOMEN: <em><strong>3</strong></em><br/>PRINCIPAL DX: <em><strong>0</strong></em><br/>PELVIS: <em><strong>6</strong></em><br/>KIDNEY: <em><strong>4</strong></em><br/>LOWER LIMB: <em><strong>8</strong></em>{:/}
**Mdc25**{::nomarkdown}<pre><code>  mdc25</code></pre>{:/} | 1.6 | Set of codes refers to type of HIV code or related condition. | ENUMERATION |  | {::nomarkdown}NON-MAJOR HIV CONDITION: <em><strong>3</strong></em><br/>MAJOR HIV CONDITION: <em><strong>2</strong></em><br/>HIV INFECTION: <em><strong>1</strong></em>{:/}
**Icd Expanded**{::nomarkdown}<pre><code>  icd_expanded</code></pre>{:/} | 1.7 | This field is a flag indicating that the ICD code was expanded <br/>by the VA (local code). | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Poa Exempt**{::nomarkdown}<pre><code>  poa_exempt</code></pre>{:/} | 1.9 | The value in this field is used to determine<br/>whether Present On Admission (POA) processing<br/>applies to this code. | ENUMERATION |  | {::nomarkdown}Not POA Exempt: <em><strong>0</strong></em><br/>POA Exempt: <em><strong>1</strong></em>{:/}
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | 10 | This is a history of the Sex designation (Male/Female) for the <br/>diagnosis and includes the Sex with the date it became effective. | OBJECT |  | [Sex-80_04](#Sex-80_04)
**Age Low**{::nomarkdown}<pre><code>  age_low</code></pre>{:/} | 11 | This is a history of lowest age reasonable for<br/>a procedure and includes the lowest age and the<br/>date it became effective.  | OBJECT |  | [Age_Low-80_011](#Age_Low-80_011)
**Age High**{::nomarkdown}<pre><code>  age_high</code></pre>{:/} | 12 | This is a history of highest age reasonable for<br/>a procedure and includes the highest age and the<br/>date it became effective.  | OBJECT |  | [Age_High-80_012](#Age_High-80_012)
**Icd Codes Not To Use With**{::nomarkdown}<pre><code>  icd_codes_not_to_use_with</code></pre>{:/} | 20 | This is a listing of ICD codes that cannot be used in conjunction<br/>with this code. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Icd Codes Required With**{::nomarkdown}<pre><code>  icd_codes_required_with</code></pre>{:/} | 30 | This is a listing of ICD codes required when this code is used. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Icd Codes Not Cc With**{::nomarkdown}<pre><code>  icd_codes_not_cc_with</code></pre>{:/} | 40 | This is a listing of codes not considered as Complication/comorbidity<br/>with this code. | POINTER |  | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 66 | This multiple contains versioned information for an ICD code.<br/>A new entry is created whenever an ICD code's status is changed. | OBJECT |  | [Status-80_066](#Status-80_066)
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | 67 | This is a history of the Diagnosis (short text) to include the date the <br/>text was first used along with the text. | OBJECT |  | [Diagnosis-80_067](#Diagnosis-80_067)
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 68 | This is a history of the descriptive<br/>text to include the date the text <br/>was first used and the text used. | OBJECT |  | [Description-80_068](#Description-80_068)
**Drg Grouper**{::nomarkdown}<pre><code>  drg_grouper</code></pre>{:/} | 71 | This field sets the effective date for the DRGs for a given fiscal year. <br/>It should normally be the first day of October of the fiscal year. Each<br/>year a new entry will be created and the DRG's hierachy will reside within<br/>this field. | OBJECT |  | [Drg_Grouper-80_071](#Drg_Grouper-80_071)
**Major Diagnostic Category**{::nomarkdown}<pre><code>  major_diagnostic_category</code></pre>{:/} | 72 | This is a listing of Major Diagnostic Categories (MDC) associated<br/>with this ICD Diagnosis by fiscal year. | OBJECT |  | [Major_Diagnostic_Category-80_072](#Major_Diagnostic_Category-80_072)
**Drg Diagnosis Identifier Codes**{::nomarkdown}<pre><code>  drg_diagnosis_identifier_codes</code></pre>{:/} | 73 | This is a listing of identifier codes used in<br/>the DRG rules processing to determine DRG. | POINTER |  | [Drg_Diagnosis_Identifier_Codes-82](Drg_Diagnosis_Identifier_Codes-82)
**Complication/comorbidity**{::nomarkdown}<pre><code>  complication_comorbidity</code></pre>{:/} | 103 | This is a history of the Complication/Comorbidity (CC) designation<br/>for the diagnosis and includes the CC designation with the date <br/>it became effective.   | OBJECT |  | [Complication_comorbidity-80_0103](#Complication_comorbidity-80_0103)

## Sub-Files
### <a name="Sex-80_04"></a>Sex (80.04)

<dl>
<dt>ID</dt><dd>Sex-80_04</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sex Effective Date**{::nomarkdown}<pre><code>  sex_effective_date</code></pre>{:/} | .01 | This is the date the Sex designation (F/M) became effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | 1 | This is the sex designation for the diagnosis. | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>N/A: <em><strong>N</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Age_Low-80_011"></a>Age Low (80.011)

<dl>
<dt>ID</dt><dd>Age_Low-80_011</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Age Low Effective Date**{::nomarkdown}<pre><code>  age_low_effective_date</code></pre>{:/} | .01 | The date that the AGE LOW limit was effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Age Low**{::nomarkdown}<pre><code>  age_low</code></pre>{:/} | 1 | This is the minimum age value for an age range for which<br/>the code can be applied.  Blank otherwise. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Age_High-80_012"></a>Age High (80.012)

<dl>
<dt>ID</dt><dd>Age_High-80_012</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Age High Effective Date**{::nomarkdown}<pre><code>  age_high_effective_date</code></pre>{:/} | .01 | The date that the AGE HIGH limit was effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Age High**{::nomarkdown}<pre><code>  age_high</code></pre>{:/} | 1 | This is the maximun age value for an age range for which<br/>the code can be applied.  Blank otherwise. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Status-80_066"></a>Status (80.066)

<dl>
<dt>ID</dt><dd>Status-80_066</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Status Effective Date**{::nomarkdown}<pre><code>  status_effective_date</code></pre>{:/} | .01 | Date versioned information becomes/became effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | Status set to 1 when the code is active and 0 when the code<br/>is inactive. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Diagnosis-80_067"></a>Diagnosis (80.067)

<dl>
<dt>ID</dt><dd>Diagnosis-80_067</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Diagnosis Effective Date**{::nomarkdown}<pre><code>  diagnosis_effective_date</code></pre>{:/} | .01 | This is the date the diagnosis text was first used. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | 1 | This is the Diagnosis (short text). | STRING | REQUIRED | 

[&uarr; Return to top](#top)<br/>


### <a name="Description-80_068"></a>Description (80.068)

<dl>
<dt>ID</dt><dd>Description-80_068</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Description Effective Date**{::nomarkdown}<pre><code>  description_effective_date</code></pre>{:/} | .01 | This is the date the description was first used. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 1 | This is the description (long text) that was in use on the effective <br/>date. | STRING | REQUIRED | 
**Supplemental**{::nomarkdown}<pre><code>  supplemental</code></pre>{:/} | 2 | This is a list of Supplemental keywords<br/>which should be included in the word <br/>index to assist in look-up operations. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Drg_Grouper-80_071"></a>Drg Grouper (80.071)

<dl>
<dt>ID</dt><dd>Drg_Grouper-80_071</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Drg Grouper Effective Date**{::nomarkdown}<pre><code>  drg_grouper_effective_date</code></pre>{:/} | .01 | This field contains the effective date for the DRGs for a <br/>fiscal year.  It should normally be the first day of October<br/>of the fiscal year. Each year a new entry will be created and<br/>the DRG's hierarchy will reside within this field. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Drg**{::nomarkdown}<pre><code>  drg</code></pre>{:/} | 1 | This field contains all of the DRGs associated with the corresponding <br/>ICD Diagnosis for the fiscal year indicated by the DRG Grouper <br/>effective date. | POINTER |  | [Drg-80_2](Drg-80_2)

[&uarr; Return to top](#top)<br/>


### <a name="Major_Diagnostic_Category-80_072"></a>Major Diagnostic Category (80.072)

<dl>
<dt>ID</dt><dd>Major_Diagnostic_Category-80_072</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Mdc Effective Date**{::nomarkdown}<pre><code>  mdc_effective_date</code></pre>{:/} | .01 | This is the date that the Major Diagnostic Categories became<br/>effective for this diagnosis.  This is normally the beginning<br/>of a fiscal year. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Mdc**{::nomarkdown}<pre><code>  mdc</code></pre>{:/} | 1 | This is a single Major Diagnostic Category code associated with the <br/>corresponding ICD Diagnosis for the fiscal year indicated by the MCD<br/>effective date. | POINTER |  | [Major_Diagnostic_Category-80_3](Major_Diagnostic_Category-80_3)

[&uarr; Return to top](#top)<br/>


### <a name="Complication_comorbidity-80_0103"></a>Complication/comorbidity (80.0103)

<dl>
<dt>ID</dt><dd>Complication_comorbidity-80_0103</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cc Effective Date**{::nomarkdown}<pre><code>  cc_effective_date</code></pre>{:/} | .01 | This is the date that a Complication/Comorbidity (CC) designation<br/>became effective. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Complication/comorbidity**{::nomarkdown}<pre><code>  complication_comorbidity</code></pre>{:/} | 1 | This is the Complication/Comorbidity (CC) <br/>designation for the diagnosis.  It includes <br/>Complication/Comorbidity (CC), Major <br/>Complication/Comorbidity (MCC), Major <br/>Complication/Comorbidity when patient is <br/>discharged alive and non-Complication/Comorbidity<br/>(no complications/cormorbidities) | ENUMERATION |  | {::nomarkdown}CC: <em><strong>1</strong></em><br/>MCC when patient is discharged alive: <em><strong>3</strong></em><br/>MCC: <em><strong>2</strong></em><br/>non-CC: <em><strong>0</strong></em>{:/}
**Primary**{::nomarkdown}<pre><code>  primary</code></pre>{:/} | 2 | The value in this field is used to determine<br/>whether CC/MCC value is taken from primary <br/>diagnosis instead of the secondary diagnosis. | ENUMERATION |  | {::nomarkdown}Primary DX is own CC/MCC: <em><strong>1</strong></em><br/>Primary DX is not own CC/MCC: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}