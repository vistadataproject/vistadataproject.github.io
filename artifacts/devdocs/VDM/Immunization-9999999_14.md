---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Immunization-9999999_14
# Immunization (9999999.14)
Per VHA Directive, this file has been "locked down" by Data  Standardization (DS). The file definition (i.e. data dictionary) shall  not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by the Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to the VHA Directive shall not be supported.   In order to preserve the continuity of files shared by the Indian Health Service and the Department of Veterans Affairs, this file includes fields used by Indian Health Service that will not be used by the Department of Veterans Affairs. These fields may point to other files and routines not deployed by the Department of Veterans Affairs. Inclusion of these fields, as designed, was approved by the DBA. These fields were initially introduced with the release of the VISTA IMMUNIZATION ENHANCEMENTS 1.0 (PX*1*201) for the VistA Immunization Enhancements Project. Additional fields may be included in later enhancements.    This file is a list of Immunizations and associated codes developed specifically for use in the IHS. This file contains a full descriptive  name for each Immunization, plus a shortened name of Ten Characters  which is used on the Health Summary and on reports where space is  limited, plus a Two Digit Code for each Immunization.

<dl>
<dt>Global</dt><dd>^AUTTIMM(</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the Immunization (e.g. Hib-Hep B).<br/> <br/>Enter the Name of the Immunization using 3 to 100 characters. | STRING | INDEXED<br/>REQUIRED | 
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | .02 | This is the "Short" name for this immunization such as an acronym, <br/>nickname, or other name by which it might be called (e.g. Tet Tox).<br/> <br/>Enter the short name using 2 to 10 characters (e.g. Tet Tox). | STRING | INDEXED | 
**Cvx Code**{::nomarkdown}<pre><code>  cvx_code</code></pre>{:/} | .03 | This is the Center for Disease Control's (CDC) code for this vaccine,<br/>known as the CVX Code.  The purpose of the CVX code is mainly when using<br/>HL7 to share data regarding this vaccine. | STRING | INDEXED | 
**Default Lot#**{::nomarkdown}<pre><code>  default_lotnumber</code></pre>{:/} | .04 | This is the default lot number for this immunization. | POINTER |  | [Immunization_Lot-9999999_41](Immunization_Lot-9999999_41)
**Max # In Series**{::nomarkdown}<pre><code>  max_number_in_series</code></pre>{:/} | .05 | (Optional) This is the maximum number of vaccinations that can be given<br/>for this immunization.<br/> <br/>Enter the number between 0 and 8 that represents the maximum allowable <br/>vaccinations that can be given for this immunization. | ENUMERATION |  | {::nomarkdown}1: <em><strong>1</strong></em><br/>2: <em><strong>2</strong></em><br/>3: <em><strong>3</strong></em><br/>4: <em><strong>4</strong></em><br/>5: <em><strong>5</strong></em><br/>6: <em><strong>6</strong></em><br/>7: <em><strong>7</strong></em><br/>8: <em><strong>8</strong></em><br/>NON-SERIES: <em><strong>0</strong></em>{:/}
**Childhood Immunization**{::nomarkdown}<pre><code>  childhood_immunization</code></pre>{:/} | .06 | YES in this field indicates this immunization is a childhood <br/>immunization. NO in this field indicates this immunization is not a<br/>childhood immunization. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Inactive Flag**{::nomarkdown}<pre><code>  inactive_flag</code></pre>{:/} | .07 | This field is used to inactivate an immunization type.  If this field<br/>contains a "1" then the immunization is inactive.  Inactive immunizations<br/>cannot be selected in the manual data entry process. Immunization entries<br/>should be made inactive when they are no longer used. Do not delete the<br/>entry or change the meaning of the immunization entry.<br/> <br/>To make an inactive immunization active,<br/>enter the "@" symbol to delete the "1" from the field. | ENUMERATION |  | {::nomarkdown}INACTIVE: <em><strong>1</strong></em>{:/}
**Skin Test**{::nomarkdown}<pre><code>  skin_test</code></pre>{:/} | .08 | This field indicates if this immunization is a skin test. Enter '1' if <br/>this immunization is a skin test. Enter '0' if this immunization is not <br/>a skin test. | ENUMERATION |  | {::nomarkdown}NOT A SKIN TEST: <em><strong>0</strong></em><br/>SKIN TEST: <em><strong>1</strong></em>{:/}
**Vaccine Group (series Type)**{::nomarkdown}<pre><code>  vaccine_group_series_type</code></pre>{:/} | .09 | This field identifies the Imm/Serve Series Type (or "Vaccine group") to <br/>which this immunization belongs. |  |  | 
**Alternate Short Name**{::nomarkdown}<pre><code>  alternate_short_name</code></pre>{:/} | .1 | This is an alternate short name for this immunization. | STRING | INDEXED | 
**Cpt Code**{::nomarkdown}<pre><code>  cpt_code</code></pre>{:/} | .11 | This is the CPT code associated with this immunization. | POINTER | INDEXED | [Cpt-81](Cpt-81)
**Related Contraind Hl7 Codes**{::nomarkdown}<pre><code>  related_contraind_hl7_codes</code></pre>{:/} | .12 | This field indicates the HL7 code(s) of any immunizations that should be<br/>contraindicated when this immunization is contraindicated. | STRING |  | 
**Vis Default Date**{::nomarkdown}<pre><code>  vis_default_date</code></pre>{:/} | .13 | This is the default date of the Vaccine Information Statement for this <br/>immunization. | DATE-TIME |  | 
**Icd Diagnosis Code**{::nomarkdown}<pre><code>  icd_diagnosis_code</code></pre>{:/} | .14 | This is the ICD diagnosis code associated with this immunization. | STRING |  | 
**Icd Procedure Code**{::nomarkdown}<pre><code>  icd_procedure_code</code></pre>{:/} | .15 | This is the ICD Procedure Code associated with this immunization. | STRING |  | 
**Include In Forecast**{::nomarkdown}<pre><code>  include_in_forecast</code></pre>{:/} | .16 | This field indicates if this vaccine is allowed to be forecast for <br/>patients when appropriate. Enter NO to exclude this vaccine from all <br/>forecasts. | ENUMERATION |  | {::nomarkdown}YES, INCLUDE: <em><strong>0</strong></em><br/>NO, EXCLUDE: <em><strong>1</strong></em>{:/}
**Include In Vac Account Report**{::nomarkdown}<pre><code>  include_in_vac_account_report</code></pre>{:/} | .17 | This field indicates if this vaccine should be included in the Vaccine <br/>Accountability Report. Enter NO if not. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Default Volume**{::nomarkdown}<pre><code>  default_volume</code></pre>{:/} | .18 | This is the default volume for this vaccine. | NUMERIC |  | 
**Combination Immunization (y/n)**{::nomarkdown}<pre><code>  combination_immunization_y_n</code></pre>{:/} | .2 | This YES/NO field identifies if this immunization is a combination<br/>product or not.  If this immunization is a combination product (a<br/>multi-component vaccine requiring multiple vaccine information<br/>statements), enter YES.  If this immunization is not a combination<br/>product, but can be represented by a single vaccine information<br/>statement, enter NO. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Component #1**{::nomarkdown}<pre><code>  component_number1</code></pre>{:/} | .21 | This is the first component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Component #2**{::nomarkdown}<pre><code>  component_number2</code></pre>{:/} | .22 | This is the second component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Component #3**{::nomarkdown}<pre><code>  component_number3</code></pre>{:/} | .23 | This is the third component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Component #4**{::nomarkdown}<pre><code>  component_number4</code></pre>{:/} | .24 | This is the fourth component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Component #5**{::nomarkdown}<pre><code>  component_number5</code></pre>{:/} | .25 | This is the fifth component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Component #6**{::nomarkdown}<pre><code>  component_number6</code></pre>{:/} | .26 | This is the sixth component of this combination vaccine. | POINTER |  | [Immunization-9999999_14](Immunization-9999999_14)
**Reading Required**{::nomarkdown}<pre><code>  reading_required</code></pre>{:/} | .51 | This field indicates if this inoculation requires an objective reading <br/>and a subjective interpretation of the reading. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Brand #1**{::nomarkdown}<pre><code>  brand_number1</code></pre>{:/} | 1.01 | This is the first brand name for this vaccine. | STRING |  | 
**Brand #2**{::nomarkdown}<pre><code>  brand_number2</code></pre>{:/} | 1.03 | This is the second brand name for this vaccine. | STRING |  | 
**Brand #3**{::nomarkdown}<pre><code>  brand_number3</code></pre>{:/} | 1.05 | This is the third brand name for this vaccine. | STRING |  | 
**Brand #4**{::nomarkdown}<pre><code>  brand_number4</code></pre>{:/} | 1.07 | This is the fourth brand name for this vaccine. | STRING |  | 
**Brand #5**{::nomarkdown}<pre><code>  brand_number5</code></pre>{:/} | 1.09 | This is the fifth brand name for this vaccine. | STRING |  | 
**Full Name**{::nomarkdown}<pre><code>  full_name</code></pre>{:/} | 1.14 | This is the full name for this immunization. | STRING |  | 
**Cpt Code 2nd**{::nomarkdown}<pre><code>  cpt_code_2nd</code></pre>{:/} | 1.15 | This is a second CPT code for this immunization. | POINTER | INDEXED | [Cpt-81](Cpt-81)
**Cdc Full Vaccine Name**{::nomarkdown}<pre><code>  cdc_full_vaccine_name</code></pre>{:/} | 2 | This is the CDC Full Vaccine Name for this immunization. | STRING |  | 
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | 3 | This multiple stores the coding system(s) associated with the codes <br/>identifying this immunization. | OBJECT |  | [Coding_System-9999999_143](#Coding_System-9999999_143)
**Vaccine Information Statement**{::nomarkdown}<pre><code>  vaccine_information_statement</code></pre>{:/} | 4 | This multiple identifies the Vaccine Information Statement(s) <br/>associated with this immunization. | POINTER |  | [Vaccine_Information_Statement-920](Vaccine_Information_Statement-920)
**Cdc Product Name**{::nomarkdown}<pre><code>  cdc_product_name</code></pre>{:/} | 5 | This multiple stores the CDC Product Name(s) reflecting manufacturer <br/>trade names, but may not be identical to those registered trade names. | STRING |  | 
**Vaccine Group Name**{::nomarkdown}<pre><code>  vaccine_group_name</code></pre>{:/} | 7 | This multiple field contains the VACCINE GROUP NAME(s) with which this<br/>immunization is associated. | STRING |  | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 10 | This multiple stores locally editable synonyms for this immunization. | STRING |  | 
**Replaced By Vha Standard Term**{::nomarkdown}<pre><code>  replaced_by_vha_standard_term</code></pre>{:/} | 99.97 | This field is populated when one Term/Concept replaces another <br/>Term/Concept.  This field is controlled by standardization and should <br/>only be changed by standardization processes.  This field contains a <br/>pointer to a VHA standard term that replaces this entry. | POINTER | INDEXED | [Immunization-9999999_14](Immunization-9999999_14)
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a <br/>Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-9999999_1499](#Effective_Date_time-9999999_1499)
**Class**{::nomarkdown}<pre><code>  class</code></pre>{:/} | 100 | This is the CLASS of this Immunization.  | ENUMERATION |  | {::nomarkdown}LOCAL: <em><strong>L</strong></em><br/>NATIONAL: <em><strong>N</strong></em><br/>VISN: <em><strong>V</strong></em>{:/}
**Mnemonic**{::nomarkdown}<pre><code>  mnemonic</code></pre>{:/} | 8801 | This is the mnemonic for this Immunization.<br/> <br/>Enter a 1 to 3 character mnemonic. | STRING |  | 
**Acronym**{::nomarkdown}<pre><code>  acronym</code></pre>{:/} | 8802 | This standardized vaccine acronym for this immunization is intended to <br/>provide a uniform approach to vaccine references. | STRING | INDEXED | 
**Selectable For Historic**{::nomarkdown}<pre><code>  selectable_for_historic</code></pre>{:/} | 8803 | This field determines whether an inactive immunization is selectable when <br/>documenting a historic administration. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}

### Subfile
#### <a name="Coding_System-9999999_143"></a>Coding System

<dl>
<dt>ID</dt><dd>Coding_System-9999999_143</dd>
<dt>File Type</dt><dd>9999999.143</dd>
<dt>Label</dt><dd>Coding System</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | .01 | This field indicates the coding system associated with the codes <br/>identifying this immunization. | STRING | INDEXED<br/>REQUIRED | 
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | .02 | This multiple stores the code(s) representing this immunization within <br/>this coding system. | STRING |  | 

#### <a name="Effective_Date_time-9999999_1499"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-9999999_1499</dd>
<dt>File Type</dt><dd>9999999.1499</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was <br/>established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a<br/>particular patient event. If 'INACTIVE', then the term will only be<br/>accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}