---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Icd_Diagnosis-80 

 property | value 
--- | --- 
 id | Icd_Diagnosis-80
 fmId | 80
 label | Icd Diagnosis
 location | ^ICD9(
 description | ICD Diagnosis file #80 contains codes from the International \rClassification of Diseases (ICD) Clinical Modification (CM) \rprovided by the Centers for Medicare and Medicaid Services \r(CMS) and the National Center for Health Statistics (NCHS).\rThis file contains both the 9th (ICD-9-CM) and 10th (ICD-10-CM)\rRevisions.\r \rIf an entry needs to be added, modified or deleted, a patch will\rbe issued containing the change.\r \rThis table file should NOT be edited in anyway by the site.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| code_number | .01 | Code Number | ICD-9 or ICD-10 Code | STRING |  | REQUIRED |  | 
| coding_system | 1.1 | Coding System | This is the coding system to which the code belongs. | POINTER |  |  | {id:Icd_Coding_Systems-80_4} | 
| pdx_exclusion_code | 1.11 | Pdx Exclusion Code | This is a Primary Diagnosis Exclusion Code \r(file #82.13) containing a list of Diagnosis \rcodes that, when used as the primary diagnosis\rcode with this code will cause the CC \r(Complication/Comorbidity) to be zero (meaning\r\no CC\).   | POINTER |  |  | {id:Drg_Cc_Exclusions-82_13} | 
| identifier | 1.2 | Identifier | This field contains Identifier codes providing more detail on \rthe DRG. | STRING |  |  |  | 
| unacceptable_as_principal_dx | 1.3 | Unacceptable As Principal Dx | This field contains a flag indicating that this code is \runacceptable as the principal diagnosis. | BOOLEAN |  |  | {true:1} | 
| mdc13 | 1.4 | Mdc13 | Field is set to 13 when the Major Diagnostic Code (MDC) \requals 13 (Female Reproductive System) | NUMERIC |  |  |  | 
| mdc24 | 1.5 | Mdc24 | Code entry of body site of Multiple Significant Trauma. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>5</dt><dd>URINARY</dd><dt>1</dt><dd>HEAD</dd><dt>7</dt><dd>UPPER LIMB</dd><dt>2</dt><dd>CHEST</dd><dt>3</dt><dd>ABDOMEN</dd><dt>0</dt><dd>PRINCIPAL DX</dd><dt>6</dt><dd>PELVIS</dd><dt>4</dt><dd>KIDNEY</dd><dt>8</dt><dd>LOWER LIMB</dd></dl>{:/} | 
| mdc25 | 1.6 | Mdc25 | Set of codes refers to type of HIV code or related condition. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>3</dt><dd>NON-MAJOR HIV CONDITION</dd><dt>2</dt><dd>MAJOR HIV CONDITION</dd><dt>1</dt><dd>HIV INFECTION</dd></dl>{:/} | 
| icd_expanded | 1.7 | Icd Expanded | This field is a flag indicating that the ICD code was expanded \rby the VA (local code). | BOOLEAN |  |  | {false:0,true:1} | 
| poa_exempt | 1.9 | Poa Exempt | The value in this field is used to determine\rwhether Present On Admission (POA) processing\rapplies to this code. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>Not POA Exempt</dd><dt>1</dt><dd>POA Exempt</dd></dl>{:/} | 
| sex | 10 | Sex | This is a history of the Sex designation (Male/Female) for the \rdiagnosis and includes the Sex with the date it became effective. | [OBJECT] |  |  | [Sex-80_04](#sex-80_04)  | 
| age_low | 11 | Age Low | This is a history of lowest age reasonable for\ra procedure and includes the lowest age and the\rdate it became effective.  | [OBJECT] |  |  | [Age_Low-80_011](#age_low-80_011)  | 
| age_high | 12 | Age High | This is a history of highest age reasonable for\ra procedure and includes the highest age and the\rdate it became effective.  | [OBJECT] |  |  | [Age_High-80_012](#age_high-80_012)  | 
| icd_codes_not_to_use_with | 20 | Icd Codes Not To Use With | This is a listing of ICD codes that cannot be used in conjunction\rwith this code. | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| icd_codes_required_with | 30 | Icd Codes Required With | This is a listing of ICD codes required when this code is used. | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| icd_codes_not_cc_with | 40 | Icd Codes Not Cc With | This is a listing of codes not considered as Complication/comorbidity\rwith this code. | [POINTER] |  |  | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| status | 66 | Status | This multiple contains versioned information for an ICD code.\rA new entry is created whenever an ICD code's status is changed. | [OBJECT] |  |  | [Status-80_066](#status-80_066)  | 
| diagnosis | 67 | Diagnosis | This is a history of the Diagnosis (short text) to include the date the \rtext was first used along with the text. | [OBJECT] |  |  | [Diagnosis-80_067](#diagnosis-80_067)  | 
| description | 68 | Description | This is a history of the descriptive\rtext to include the date the text \rwas first used and the text used. | [OBJECT] |  |  | [Description-80_068](#description-80_068)  | 
| drg_grouper | 71 | Drg Grouper | This field sets the effective date for the DRGs for a given fiscal year. \rIt should normally be the first day of October of the fiscal year. Each\ryear a new entry will be created and the DRG's hierachy will reside within\rthis field. | [OBJECT] |  |  | [Drg_Grouper-80_071](#drg_grouper-80_071)  | 
| major_diagnostic_category | 72 | Major Diagnostic Category | This is a listing of Major Diagnostic Categories (MDC) associated\rwith this ICD Diagnosis by fiscal year. | [OBJECT] |  |  | [Major_Diagnostic_Category-80_072](#major_diagnostic_category-80_072)  | 
| drg_diagnosis_identifier_codes | 73 | Drg Diagnosis Identifier Codes | This is a listing of identifier codes used in\rthe DRG rules processing to determine DRG. | [POINTER] |  |  | {id:Drg_Diagnosis_Identifier_Codes-82} | 
| complication_comorbidity | 103 | Complication/comorbidity | This is a history of the Complication/Comorbidity (CC) designation\rfor the diagnosis and includes the CC designation with the date \rit became effective.   | [OBJECT] |  |  | [Complication_comorbidity-80_0103](#complication_comorbidity-80_0103)  | 

## Sex-80_04 

 property | value 
--- | --- 
 id | Sex-80_04
 label | Sex

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sex_effective_date | .01 | Sex Effective Date | This is the date the Sex designation (F/M) became effective. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| sex | 1 | Sex | This is the sex designation for the diagnosis. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>N</dt><dd>N/A</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 

## Age_Low-80_011 

 property | value 
--- | --- 
 id | Age_Low-80_011
 label | Age Low

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| age_low_effective_date | .01 | Age Low Effective Date | The date that the AGE LOW limit was effective. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| age_low | 1 | Age Low | This is the minimum age value for an age range for which\rthe code can be applied.  Blank otherwise. | NUMERIC |  |  |  | 

## Age_High-80_012 

 property | value 
--- | --- 
 id | Age_High-80_012
 label | Age High

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| age_high_effective_date | .01 | Age High Effective Date | The date that the AGE HIGH limit was effective. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| age_high | 1 | Age High | This is the maximun age value for an age range for which\rthe code can be applied.  Blank otherwise. | NUMERIC |  |  |  | 

## Status-80_066 

 property | value 
--- | --- 
 id | Status-80_066
 label | Status

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| status_effective_date | .01 | Status Effective Date | Date versioned information becomes/became effective. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | Status set to 1 when the code is active and 0 when the code\ris inactive. | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

## Diagnosis-80_067 

 property | value 
--- | --- 
 id | Diagnosis-80_067
 label | Diagnosis

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| diagnosis_effective_date | .01 | Diagnosis Effective Date | This is the date the diagnosis text was first used. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| diagnosis | 1 | Diagnosis | This is the Diagnosis (short text). | STRING |  | REQUIRED |  | 

## Description-80_068 

 property | value 
--- | --- 
 id | Description-80_068
 label | Description

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| description_effective_date | .01 | Description Effective Date | This is the date the description was first used. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| description | 1 | Description | This is the description (long text) that was in use on the effective \rdate. | STRING |  | REQUIRED |  | 
| supplemental | 2 | Supplemental | This is a list of Supplemental keywords\rwhich should be included in the word \rindex to assist in look-up operations. | [STRING] |  |  |  | 

## Drg_Grouper-80_071 

 property | value 
--- | --- 
 id | Drg_Grouper-80_071
 label | Drg Grouper

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| drg_grouper_effective_date | .01 | Drg Grouper Effective Date | This field contains the effective date for the DRGs for a \rfiscal year.  It should normally be the first day of October\rof the fiscal year. Each year a new entry will be created and\rthe DRG's hierarchy will reside within this field. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| drg | 1 | Drg | This field contains all of the DRGs associated with the corresponding \rICD Diagnosis for the fiscal year indicated by the DRG Grouper \reffective date. | [POINTER] |  |  | {id:Drg-80_2} | 

## Major_Diagnostic_Category-80_072 

 property | value 
--- | --- 
 id | Major_Diagnostic_Category-80_072
 label | Major Diagnostic Category

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| mdc_effective_date | .01 | Mdc Effective Date | This is the date that the Major Diagnostic Categories became\reffective for this diagnosis.  This is normally the beginning\rof a fiscal year. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| mdc | 1 | Mdc | This is a single Major Diagnostic Category code associated with the \rcorresponding ICD Diagnosis for the fiscal year indicated by the MCD\reffective date. | POINTER |  |  | {id:Major_Diagnostic_Category-80_3} | 

## Complication_comorbidity-80_0103 

 property | value 
--- | --- 
 id | Complication_comorbidity-80_0103
 label | Complication/comorbidity

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| cc_effective_date | .01 | Cc Effective Date | This is the date that a Complication/Comorbidity (CC) designation\rbecame effective. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| complication_comorbidity | 1 | Complication/comorbidity | This is the Complication/Comorbidity (CC) \rdesignation for the diagnosis.  It includes \rComplication/Comorbidity (CC), Major \rComplication/Comorbidity (MCC), Major \rComplication/Comorbidity when patient is \rdischarged alive and non-Complication/Comorbidity\r(no complications/cormorbidities) | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>CC</dd><dt>3</dt><dd>MCC when patient is discharged alive</dd><dt>2</dt><dd>MCC</dd><dt>0</dt><dd>non-CC</dd></dl>{:/} | 
| primary | 2 | Primary | The value in this field is used to determine\rwhether CC/MCC value is taken from primary \rdiagnosis instead of the secondary diagnosis. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Primary DX is own CC/MCC</dd><dt>0</dt><dd>Primary DX is not own CC/MCC</dd></dl>{:/} | 