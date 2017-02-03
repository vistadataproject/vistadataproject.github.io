---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Icd_Diagnosis-80 

<dl>
<dt>id</dt><dd>Icd_Diagnosis-80</dd>
<dt>fmId</dt><dd>80</dd>
<dt>label</dt><dd>Icd Diagnosis</dd>
<dt>location</dt><dd>^ICD9(</dd>
<dt>description</dt><dd>ICD Diagnosis file #80 contains codes from the International <br/>Classification of Diseases (ICD) Clinical Modification (CM) <br/>provided by the Centers for Medicare and Medicaid Services <br/>(CMS) and the National Center for Health Statistics (NCHS).<br/>This file contains both the 9th (ICD-9-CM) and 10th (ICD-10-CM)<br/>Revisions.<br/> <br/>If an entry needs to be added, modified or deleted, a patch will<br/>be issued containing the change.<br/> <br/>This table file should NOT be edited in anyway by the site.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| code_number | .01 | Code Number | {::nomarkdown}ICD-9 or ICD-10 Code{:/} | STRING |  | REQUIRED |  | 
| coding_system | 1.1 | Coding System | {::nomarkdown}This is the coding system to which the code belongs.{:/} | POINTER |  |  | Icd_Coding_Systems-80_4 | 
| pdx_exclusion_code | 1.11 | Pdx Exclusion Code | {::nomarkdown}This is a Primary Diagnosis Exclusion Code <br/>(file #82.13) containing a list of Diagnosis <br/>codes that, when used as the primary diagnosis<br/>code with this code will cause the CC <br/>(Complication/Comorbidity) to be zero (meaning<br/>\no CC\).  {:/} | POINTER |  |  | Drg_Cc_Exclusions-82_13 | 
| identifier | 1.2 | Identifier | {::nomarkdown}This field contains Identifier codes providing more detail on <br/>the DRG.{:/} | STRING |  |  |  | 
| unacceptable_as_principal_dx | 1.3 | Unacceptable As Principal Dx | {::nomarkdown}This field contains a flag indicating that this code is <br/>unacceptable as the principal diagnosis.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| mdc13 | 1.4 | Mdc13 | {::nomarkdown}Field is set to 13 when the Major Diagnostic Code (MDC) <br/>equals 13 (Female Reproductive System){:/} | NUMERIC |  |  |  | 
| mdc24 | 1.5 | Mdc24 | {::nomarkdown}Code entry of body site of Multiple Significant Trauma.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>URINARY</dd><dt>1</dt><dd>HEAD</dd><dt>7</dt><dd>UPPER LIMB</dd><dt>2</dt><dd>CHEST</dd><dt>3</dt><dd>ABDOMEN</dd><dt>0</dt><dd>PRINCIPAL DX</dd><dt>6</dt><dd>PELVIS</dd><dt>4</dt><dd>KIDNEY</dd><dt>8</dt><dd>LOWER LIMB</dd></dl>{:/} | 
| mdc25 | 1.6 | Mdc25 | {::nomarkdown}Set of codes refers to type of HIV code or related condition.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>3</dt><dd>NON-MAJOR HIV CONDITION</dd><dt>2</dt><dd>MAJOR HIV CONDITION</dd><dt>1</dt><dd>HIV INFECTION</dd></dl>{:/} | 
| icd_expanded | 1.7 | Icd Expanded | {::nomarkdown}This field is a flag indicating that the ICD code was expanded <br/>by the VA (local code).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| poa_exempt | 1.9 | Poa Exempt | {::nomarkdown}The value in this field is used to determine<br/>whether Present On Admission (POA) processing<br/>applies to this code.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>Not POA Exempt</dd><dt>1</dt><dd>POA Exempt</dd></dl>{:/} | 
| sex | 10 | Sex | {::nomarkdown}This is a history of the Sex designation (Male/Female) for the <br/>diagnosis and includes the Sex with the date it became effective.{:/} | [OBJECT] |  |  | [Sex-80_04](#Sex-80_04)  | 
| age_low | 11 | Age Low | {::nomarkdown}This is a history of lowest age reasonable for<br/>a procedure and includes the lowest age and the<br/>date it became effective. {:/} | [OBJECT] |  |  | [Age_Low-80_011](#Age_Low-80_011)  | 
| age_high | 12 | Age High | {::nomarkdown}This is a history of highest age reasonable for<br/>a procedure and includes the highest age and the<br/>date it became effective. {:/} | [OBJECT] |  |  | [Age_High-80_012](#Age_High-80_012)  | 
| icd_codes_not_to_use_with | 20 | Icd Codes Not To Use With | {::nomarkdown}This is a listing of ICD codes that cannot be used in conjunction<br/>with this code.{:/} | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| icd_codes_required_with | 30 | Icd Codes Required With | {::nomarkdown}This is a listing of ICD codes required when this code is used.{:/} | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| icd_codes_not_cc_with | 40 | Icd Codes Not Cc With | {::nomarkdown}This is a listing of codes not considered as Complication/comorbidity<br/>with this code.{:/} | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| status | 66 | Status | {::nomarkdown}This multiple contains versioned information for an ICD code.<br/>A new entry is created whenever an ICD code's status is changed.{:/} | [OBJECT] |  |  | [Status-80_066](#Status-80_066)  | 
| diagnosis | 67 | Diagnosis | {::nomarkdown}This is a history of the Diagnosis (short text) to include the date the <br/>text was first used along with the text.{:/} | [OBJECT] |  |  | [Diagnosis-80_067](#Diagnosis-80_067)  | 
| description | 68 | Description | {::nomarkdown}This is a history of the descriptive<br/>text to include the date the text <br/>was first used and the text used.{:/} | [OBJECT] |  |  | [Description-80_068](#Description-80_068)  | 
| drg_grouper | 71 | Drg Grouper | {::nomarkdown}This field sets the effective date for the DRGs for a given fiscal year. <br/>It should normally be the first day of October of the fiscal year. Each<br/>year a new entry will be created and the DRG's hierachy will reside within<br/>this field.{:/} | [OBJECT] |  |  | [Drg_Grouper-80_071](#Drg_Grouper-80_071)  | 
| major_diagnostic_category | 72 | Major Diagnostic Category | {::nomarkdown}This is a listing of Major Diagnostic Categories (MDC) associated<br/>with this ICD Diagnosis by fiscal year.{:/} | [OBJECT] |  |  | [Major_Diagnostic_Category-80_072](#Major_Diagnostic_Category-80_072)  | 
| drg_diagnosis_identifier_codes | 73 | Drg Diagnosis Identifier Codes | {::nomarkdown}This is a listing of identifier codes used in<br/>the DRG rules processing to determine DRG.{:/} | [POINTER] |  |  | Drg_Diagnosis_Identifier_Codes-82 | 
| complication_comorbidity | 103 | Complication/comorbidity | {::nomarkdown}This is a history of the Complication/Comorbidity (CC) designation<br/>for the diagnosis and includes the CC designation with the date <br/>it became effective.  {:/} | [OBJECT] |  |  | [Complication_comorbidity-80_0103](#Complication_comorbidity-80_0103)  | 

## <a name="Sex-80_04"></a>Sex-80_04 

<dl>
<dt>id</dt><dd>Sex-80_04</dd>
<dt>fmId</dt><dd>80.04</dd>
<dt>label</dt><dd>Sex</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sex_effective_date | .01 | Sex Effective Date | {::nomarkdown}This is the date the Sex designation (F/M) became effective.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| sex | 1 | Sex | {::nomarkdown}This is the sex designation for the diagnosis.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>N</dt><dd>N/A</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 

## <a name="Age_Low-80_011"></a>Age_Low-80_011 

<dl>
<dt>id</dt><dd>Age_Low-80_011</dd>
<dt>fmId</dt><dd>80.011</dd>
<dt>label</dt><dd>Age Low</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| age_low_effective_date | .01 | Age Low Effective Date | {::nomarkdown}The date that the AGE LOW limit was effective.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| age_low | 1 | Age Low | {::nomarkdown}This is the minimum age value for an age range for which<br/>the code can be applied.  Blank otherwise.{:/} | NUMERIC |  |  |  | 

## <a name="Age_High-80_012"></a>Age_High-80_012 

<dl>
<dt>id</dt><dd>Age_High-80_012</dd>
<dt>fmId</dt><dd>80.012</dd>
<dt>label</dt><dd>Age High</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| age_high_effective_date | .01 | Age High Effective Date | {::nomarkdown}The date that the AGE HIGH limit was effective.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| age_high | 1 | Age High | {::nomarkdown}This is the maximun age value for an age range for which<br/>the code can be applied.  Blank otherwise.{:/} | NUMERIC |  |  |  | 

## <a name="Status-80_066"></a>Status-80_066 

<dl>
<dt>id</dt><dd>Status-80_066</dd>
<dt>fmId</dt><dd>80.066</dd>
<dt>label</dt><dd>Status</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| status_effective_date | .01 | Status Effective Date | {::nomarkdown}Date versioned information becomes/became effective.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}Status set to 1 when the code is active and 0 when the code<br/>is inactive.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

## <a name="Diagnosis-80_067"></a>Diagnosis-80_067 

<dl>
<dt>id</dt><dd>Diagnosis-80_067</dd>
<dt>fmId</dt><dd>80.067</dd>
<dt>label</dt><dd>Diagnosis</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| diagnosis_effective_date | .01 | Diagnosis Effective Date | {::nomarkdown}This is the date the diagnosis text was first used.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| diagnosis | 1 | Diagnosis | {::nomarkdown}This is the Diagnosis (short text).{:/} | STRING |  | REQUIRED |  | 

## <a name="Description-80_068"></a>Description-80_068 

<dl>
<dt>id</dt><dd>Description-80_068</dd>
<dt>fmId</dt><dd>80.068</dd>
<dt>label</dt><dd>Description</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| description_effective_date | .01 | Description Effective Date | {::nomarkdown}This is the date the description was first used.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| description | 1 | Description | {::nomarkdown}This is the description (long text) that was in use on the effective <br/>date.{:/} | STRING |  | REQUIRED |  | 
| supplemental | 2 | Supplemental | {::nomarkdown}This is a list of Supplemental keywords<br/>which should be included in the word <br/>index to assist in look-up operations.{:/} | [STRING] |  |  |  | 

## <a name="Drg_Grouper-80_071"></a>Drg_Grouper-80_071 

<dl>
<dt>id</dt><dd>Drg_Grouper-80_071</dd>
<dt>fmId</dt><dd>80.071</dd>
<dt>label</dt><dd>Drg Grouper</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| drg_grouper_effective_date | .01 | Drg Grouper Effective Date | {::nomarkdown}This field contains the effective date for the DRGs for a <br/>fiscal year.  It should normally be the first day of October<br/>of the fiscal year. Each year a new entry will be created and<br/>the DRG's hierarchy will reside within this field.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| drg | 1 | Drg | {::nomarkdown}This field contains all of the DRGs associated with the corresponding <br/>ICD Diagnosis for the fiscal year indicated by the DRG Grouper <br/>effective date.{:/} | [POINTER] |  |  | Drg-80_2 | 

## <a name="Major_Diagnostic_Category-80_072"></a>Major_Diagnostic_Category-80_072 

<dl>
<dt>id</dt><dd>Major_Diagnostic_Category-80_072</dd>
<dt>fmId</dt><dd>80.072</dd>
<dt>label</dt><dd>Major Diagnostic Category</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| mdc_effective_date | .01 | Mdc Effective Date | {::nomarkdown}This is the date that the Major Diagnostic Categories became<br/>effective for this diagnosis.  This is normally the beginning<br/>of a fiscal year.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| mdc | 1 | Mdc | {::nomarkdown}This is a single Major Diagnostic Category code associated with the <br/>corresponding ICD Diagnosis for the fiscal year indicated by the MCD<br/>effective date.{:/} | POINTER |  |  | Major_Diagnostic_Category-80_3 | 

## <a name="Complication_comorbidity-80_0103"></a>Complication_comorbidity-80_0103 

<dl>
<dt>id</dt><dd>Complication_comorbidity-80_0103</dd>
<dt>fmId</dt><dd>80.0103</dd>
<dt>label</dt><dd>Complication/comorbidity</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| cc_effective_date | .01 | Cc Effective Date | {::nomarkdown}This is the date that a Complication/Comorbidity (CC) designation<br/>became effective.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| complication_comorbidity | 1 | Complication/comorbidity | {::nomarkdown}This is the Complication/Comorbidity (CC) <br/>designation for the diagnosis.  It includes <br/>Complication/Comorbidity (CC), Major <br/>Complication/Comorbidity (MCC), Major <br/>Complication/Comorbidity when patient is <br/>discharged alive and non-Complication/Comorbidity<br/>(no complications/cormorbidities){:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>CC</dd><dt>3</dt><dd>MCC when patient is discharged alive</dd><dt>2</dt><dd>MCC</dd><dt>0</dt><dd>non-CC</dd></dl>{:/} | 
| primary | 2 | Primary | {::nomarkdown}The value in this field is used to determine<br/>whether CC/MCC value is taken from primary <br/>diagnosis instead of the secondary diagnosis.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Primary DX is own CC/MCC</dd><dt>0</dt><dd>Primary DX is not own CC/MCC</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}