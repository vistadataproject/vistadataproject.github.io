---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Immunization-9999999_14 

<dl>
<dt>id</dt><dd>Immunization-9999999_14</dd>
<dt>fmId</dt><dd>9999999.14</dd>
<dt>label</dt><dd>Immunization</dd>
<dt>location</dt><dd>^AUTTIMM(</dd>
<dt>description</dt><dd>Per VHA Directive, this file has been \locked down\ by Data <br/>Standardization (DS). The file definition (i.e. data dictionary) shall <br/>not be modified. All additions, changes and deletions to entries in the<br/>file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by the Common Services (CS). Creating<br/>and/or editing locally defined fields in the file are not permitted. Use<br/>of locally defined fields that were created prior to the VHA Directive<br/>shall not be supported.<br/> <br/>In order to preserve the continuity of files shared by the Indian Health<br/>Service and the Department of Veterans Affairs, this file includes<br/>fields used by Indian Health Service that will not be used by the<br/>Department of Veterans Affairs. These fields may point to other files<br/>and routines not deployed by the Department of Veterans Affairs.<br/>Inclusion of these fields, as designed, was approved by the DBA. These<br/>fields were initially introduced with the release of the VISTA<br/>IMMUNIZATION ENHANCEMENTS 1.0 (PX*1*201) for the VistA Immunization<br/>Enhancements Project. Additional fields may be included in later<br/>enhancements.<br/>  <br/>This file is a list of Immunizations and associated codes developed<br/>specifically for use in the IHS. This file contains a full descriptive <br/>name for each Immunization, plus a shortened name of Ten Characters <br/>which is used on the Health Summary and on reports where space is <br/>limited, plus a Two Digit Code for each Immunization.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the Immunization (e.g. Hib-Hep B).<br/> <br/>Enter the Name of the Immunization using 3 to 100 characters.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| short_name | .02 | Short Name | {::nomarkdown}This is the \Short\ name for this immunization such as an acronym, <br/>nickname, or other name by which it might be called (e.g. Tet Tox).<br/> <br/>Enter the short name using 2 to 10 characters (e.g. Tet Tox).{:/} | STRING |  | INDEXED |  | 
| cvx_code | .03 | Cvx Code | {::nomarkdown}This is the Center for Disease Control's (CDC) code for this vaccine,<br/>known as the CVX Code.  The purpose of the CVX code is mainly when using<br/>HL7 to share data regarding this vaccine.{:/} | STRING |  | INDEXED |  | 
| default_lotnumber | .04 | Default Lot# | {::nomarkdown}This is the default lot number for this immunization.{:/} | POINTER |  |  | Immunization_Lot-9999999_41 | 
| max_number_in_series | .05 | Max # In Series | {::nomarkdown}(Optional) This is the maximum number of vaccinations that can be given<br/>for this immunization.<br/> <br/>Enter the number between 0 and 8 that represents the maximum allowable <br/>vaccinations that can be given for this immunization.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>1</dd><dt>2</dt><dd>2</dd><dt>3</dt><dd>3</dd><dt>4</dt><dd>4</dd><dt>5</dt><dd>5</dd><dt>6</dt><dd>6</dd><dt>7</dt><dd>7</dd><dt>8</dt><dd>8</dd><dt>0</dt><dd>NON-SERIES</dd></dl>{:/} | 
| childhood_immunization | .06 | Childhood Immunization | {::nomarkdown}YES in this field indicates this immunization is a childhood <br/>immunization. NO in this field indicates this immunization is not a<br/>childhood immunization.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| inactive_flag | .07 | Inactive Flag | {::nomarkdown}This field is used to inactivate an immunization type.  If this field<br/>contains a \1\ then the immunization is inactive.  Inactive immunizations<br/>cannot be selected in the manual data entry process. Immunization entries<br/>should be made inactive when they are no longer used. Do not delete the<br/>entry or change the meaning of the immunization entry.<br/> <br/>To make an inactive immunization active,<br/>enter the \@\ symbol to delete the \1\ from the field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| skin_test | .08 | Skin Test | {::nomarkdown}This field indicates if this immunization is a skin test. Enter '1' if <br/>this immunization is a skin test. Enter '0' if this immunization is not <br/>a skin test.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>NOT A SKIN TEST</dd><dt>1</dt><dd>SKIN TEST</dd></dl>{:/} | 
| vaccine_group_series_type | .09 | Vaccine Group (series Type) | {::nomarkdown}This field identifies the Imm/Serve Series Type (or \Vaccine group\) to <br/>which this immunization belongs.{:/} |  |  |  |  | 
| alternate_short_name | .1 | Alternate Short Name | {::nomarkdown}This is an alternate short name for this immunization.{:/} | STRING |  | INDEXED |  | 
| cpt_code | .11 | Cpt Code | {::nomarkdown}This is the CPT code associated with this immunization.{:/} | POINTER |  | INDEXED | Cpt-81 | 
| related_contraind_hl7_codes | .12 | Related Contraind Hl7 Codes | {::nomarkdown}This field indicates the HL7 code(s) of any immunizations that should be<br/>contraindicated when this immunization is contraindicated.{:/} | STRING |  |  |  | 
| vis_default_date | .13 | Vis Default Date | {::nomarkdown}This is the default date of the Vaccine Information Statement for this <br/>immunization.{:/} | DATE-TIME |  |  |  | 
| icd_diagnosis_code | .14 | Icd Diagnosis Code | {::nomarkdown}This is the ICD diagnosis code associated with this immunization.{:/} | STRING |  |  |  | 
| icd_procedure_code | .15 | Icd Procedure Code | {::nomarkdown}This is the ICD Procedure Code associated with this immunization.{:/} | STRING |  |  |  | 
| include_in_forecast | .16 | Include In Forecast | {::nomarkdown}This field indicates if this vaccine is allowed to be forecast for <br/>patients when appropriate. Enter NO to exclude this vaccine from all <br/>forecasts.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>YES, INCLUDE</dd><dt>1</dt><dd>NO, EXCLUDE</dd></dl>{:/} | 
| include_in_vac_account_report | .17 | Include In Vac Account Report | {::nomarkdown}This field indicates if this vaccine should be included in the Vaccine <br/>Accountability Report. Enter NO if not.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| default_volume | .18 | Default Volume | {::nomarkdown}This is the default volume for this vaccine.{:/} | NUMERIC |  |  |  | 
| combination_immunization_y_n | .2 | Combination Immunization (y/n) | {::nomarkdown}This YES/NO field identifies if this immunization is a combination<br/>product or not.  If this immunization is a combination product (a<br/>multi-component vaccine requiring multiple vaccine information<br/>statements), enter YES.  If this immunization is not a combination<br/>product, but can be represented by a single vaccine information<br/>statement, enter NO.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| component_number1 | .21 | Component #1 | {::nomarkdown}This is the first component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| component_number2 | .22 | Component #2 | {::nomarkdown}This is the second component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| component_number3 | .23 | Component #3 | {::nomarkdown}This is the third component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| component_number4 | .24 | Component #4 | {::nomarkdown}This is the fourth component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| component_number5 | .25 | Component #5 | {::nomarkdown}This is the fifth component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| component_number6 | .26 | Component #6 | {::nomarkdown}This is the sixth component of this combination vaccine.{:/} | POINTER |  |  | Immunization-9999999_14 | 
| reading_required | .51 | Reading Required | {::nomarkdown}This field indicates if this inoculation requires an objective reading <br/>and a subjective interpretation of the reading.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| brand_number1 | 1.01 | Brand #1 | {::nomarkdown}This is the first brand name for this vaccine.{:/} | STRING |  |  |  | 
| brand_number2 | 1.03 | Brand #2 | {::nomarkdown}This is the second brand name for this vaccine.{:/} | STRING |  |  |  | 
| brand_number3 | 1.05 | Brand #3 | {::nomarkdown}This is the third brand name for this vaccine.{:/} | STRING |  |  |  | 
| brand_number4 | 1.07 | Brand #4 | {::nomarkdown}This is the fourth brand name for this vaccine.{:/} | STRING |  |  |  | 
| brand_number5 | 1.09 | Brand #5 | {::nomarkdown}This is the fifth brand name for this vaccine.{:/} | STRING |  |  |  | 
| full_name | 1.14 | Full Name | {::nomarkdown}This is the full name for this immunization.{:/} | STRING |  |  |  | 
| cpt_code_2nd | 1.15 | Cpt Code 2nd | {::nomarkdown}This is a second CPT code for this immunization.{:/} | POINTER |  | INDEXED | Cpt-81 | 
| cdc_full_vaccine_name | 2 | Cdc Full Vaccine Name | {::nomarkdown}This is the CDC Full Vaccine Name for this immunization.{:/} | STRING |  |  |  | 
| coding_system | 3 | Coding System | {::nomarkdown}This multiple stores the coding system(s) associated with the codes <br/>identifying this immunization.{:/} | [OBJECT] |  |  | [Coding_System-9999999_143](#Coding_System-9999999_143)  | 
| vaccine_information_statement | 4 | Vaccine Information Statement | {::nomarkdown}This multiple identifies the Vaccine Information Statement(s) <br/>associated with this immunization.{:/} | [POINTER] |  |  | {id:Vaccine_Information_Statement-920} | 
| cdc_product_name | 5 | Cdc Product Name | {::nomarkdown}This multiple stores the CDC Product Name(s) reflecting manufacturer <br/>trade names, but may not be identical to those registered trade names.{:/} | [STRING] |  |  |  | 
| vaccine_group_name | 7 | Vaccine Group Name | {::nomarkdown}This multiple field contains the VACCINE GROUP NAME(s) with which this<br/>immunization is associated.{:/} | [STRING] |  |  |  | 
| synonym | 10 | Synonym | {::nomarkdown}This multiple stores locally editable synonyms for this immunization.{:/} | [STRING] |  |  |  | 
| replaced_by_vha_standard_term | 99.97 | Replaced By Vha Standard Term | {::nomarkdown}This field is populated when one Term/Concept replaces another <br/>Term/Concept.  This field is controlled by standardization and should <br/>only be changed by standardization processes.  This field contains a <br/>pointer to a VHA standard term that replaces this entry.{:/} | POINTER |  | INDEXED | Immunization-9999999_14 | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a <br/>Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference<br/>terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-9999999_1499](#Effective_Date_time-9999999_1499)  | 
| class | 100 | Class | {::nomarkdown}This is the CLASS of this Immunization. {:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>L</dt><dd>LOCAL</dd><dt>N</dt><dd>NATIONAL</dd><dt>V</dt><dd>VISN</dd></dl>{:/} | 
| mnemonic | 8801 | Mnemonic | {::nomarkdown}This is the mnemonic for this Immunization.<br/> <br/>Enter a 1 to 3 character mnemonic.{:/} | STRING |  |  |  | 
| acronym | 8802 | Acronym | {::nomarkdown}This standardized vaccine acronym for this immunization is intended to <br/>provide a uniform approach to vaccine references.{:/} | STRING |  | INDEXED |  | 
| selectable_for_historic | 8803 | Selectable For Historic | {::nomarkdown}This field determines whether an inactive immunization is selectable when <br/>documenting a historic administration.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 

## <a name="Coding_System-9999999_143"></a>Coding_System-9999999_143 

<dl>
<dt>id</dt><dd>Coding_System-9999999_143</dd>
<dt>label</dt><dd>Coding System</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| coding_system | .01 | Coding System | {::nomarkdown}This field indicates the coding system associated with the codes <br/>identifying this immunization.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| code | .02 | Code | {::nomarkdown}This multiple stores the code(s) representing this immunization within <br/>this coding system.{:/} | [STRING] |  |  |  | 

## <a name="Effective_Date_time-9999999_1499"></a>Effective_Date_time-9999999_1499 

<dl>
<dt>id</dt><dd>Effective_Date_time-9999999_1499</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was <br/>established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If <br/>'ACTIVE', then the term will be accessible by end-users to document a<br/>particular patient event. If 'INACTIVE', then the term will only be<br/>accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:17:13 pm</p>{:/}