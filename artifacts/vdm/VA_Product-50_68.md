---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; VA_Product-50_68 

 property | value 
--- | --- 
 id | VA_Product-50_68
 fmId | 50.68
 label | VA Product
 location | ^PSNDF(50.68,
 description | {::nomarkdown}Per VHA Directive 2005-044, this file has been \locked down\<br/>by Data Standardization (DS). The file definition (i.e. data dictionary)<br/>shall not be modified. All additions, changes and deletions to entries in<br/>the file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS). Creating and/or<br/>editing locally defined fields in the file are not permitted. Use of<br/>locally defined fields that were created prior to VHA Directive<br/>2005-044 shall not be supported.<br/> <br/>This file contains a list of available drug products.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name |  | STRING |  | REQUIRED, INDEXED |  | 
| va_generic_name | .05 | VA Generic Name | {::nomarkdown}VA GENERIC NAME{:/} | POINTER |  |  | [VA_Generic-50_6](VA_Generic-50_6.md) | 
| dosage_form | 1 | Dosage Form | {::nomarkdown}This is the dose form.{:/} | POINTER |  |  | {id:Dosage_Form-50_606} | 
| strength | 2 | Strength | {::nomarkdown}This is the strength.{:/} | STRING |  |  |  | 
| units | 3 | Units | {::nomarkdown}This is the unit of measure.{:/} | POINTER |  |  | {id:Drug_Units-50_607} | 
| national_formulary_name | 4 | National Formulary Name | {::nomarkdown}This is the National Formulary Name for this product.  In most cases<br/>it will be comprised of the VA Generic Name and Dosage Form.{:/} | STRING |  |  |  | 
| va_print_name | 5 | VA Print Name | {::nomarkdown}This is the VA Print Name.{:/} | STRING |  |  |  | 
| va_product_identifier | 6 | VA Product Identifier | {::nomarkdown}This is the VA Product Identifier.{:/} | STRING |  | INDEXED |  | 
| transmit_to_cmop | 7 | Transmit To Cmop | {::nomarkdown}This flag is used for CMOP purposes.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| va_dispense_unit | 8 | VA Dispense Unit | {::nomarkdown}This is the VA Dispense Unit.{:/} | POINTER |  |  | {id:VA_Dispense_Unit-50_64} | 
| gcnseqno | 11 | Gcnseqno | {::nomarkdown}This contains the GCNSEQNO code, which relates to mapping PMIs and<br/>Warning Labels. Entries in this field are accomplished by the NDF Data<br/>Manager mapping functions and shall not be edited.{:/} | NUMERIC |  |  |  | 
| previous_gcnseqno | 12 | Previous Gcnseqno | {::nomarkdown}This field contains the PREVIOUS GCNSEQNO code, which relates to mapping to<br/>PMIs and Warning Labels. Entries in this field are accomplished by the NDF<br/>Data Manager mapping functions and shall not be edited.{:/} | NUMERIC |  |  |  | 
| ndc_link_to_gcnseqno | 13 | Ndc Link To Gcnseqno | {::nomarkdown}This field contains the NDC used to link to GCNSEQNO. Entries in this field<br/>are accomplished by the NDF Data Manager mapping functions and shall not be<br/>edited.{:/} | STRING |  |  |  | 
| active_ingredients | 14 | Active Ingredients |  | [OBJECT] |  |  | [Active_Ingredients-50_6814](#Active_Ingredients-50_6814)  | 
| primary_va_drug_class | 15 | Primary VA Drug Class | {::nomarkdown}This is the primary VA classification for this product.{:/} | POINTER |  |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| secondary_va_drug_class | 16 | Secondary VA Drug Class |  | [POINTER] |  |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| national_formulary_indicator | 17 | National Formulary Indicator | {::nomarkdown}This field denoted whether this product is on the National Formulary.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| national_formulary_restriction | 18 | National Formulary Restriction |  | STRING |  |  |  | 
| cs_federal_schedule | 19 | Cs Federal Schedule | {::nomarkdown}This is the Federal Schedule for controlled substances.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Schedule I</dd><dt>2</dt><dd>Schedule II</dd><dt>3</dt><dd>Schedule III</dd><dt>2n</dt><dd>Schedule II Non-Narcotics</dd><dt>0</dt><dd>Unscheduled</dd><dt>4</dt><dd>Schedule IV</dd><dt>3n</dt><dd>Schedule III Non-Narcotics</dd><dt>5</dt><dd>Schedule V</dd></dl>{:/} | 
| single_multi_source_product | 20 | Single/multi Source Product | {::nomarkdown}This indicates whether the product is available from a single source<br/>or from multiple sources.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>Multisource</dd><dt>S</dt><dd>Single source</dd></dl>{:/} | 
| inactivation_date | 21 | Inactivation Date | {::nomarkdown}This is the date when this product was inactivated.{:/} | DATE-TIME |  |  |  | 
| exclude_drgdrg_interaction_ck | 23 | Exclude Drg-drg Interaction Ck | {::nomarkdown}This field contains a flag which is set to 1 when no Drug-Drug Interactions are to be performed during Order Checking.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| max_single_dose | 25 | Max Single Dose | {::nomarkdown}This is the maximum amount of the drug to be administered as a single dose.{:/} | NUMERIC |  |  |  | 
| min_single_dose | 26 | Min Single Dose | {::nomarkdown}This is the minimum amount of the drug to be administered as a single dose.{:/} | NUMERIC |  |  |  | 
| max_daily_dose | 27 | Max Daily Dose | {::nomarkdown}This is the maximum amount of the drug to be administered daily.{:/} | NUMERIC |  |  |  | 
| min_daily_dose | 28 | Min Daily Dose | {::nomarkdown}This is  the minimum amount of the drug to be administered daily.{:/} | NUMERIC |  |  |  | 
| max_cumulative_dose | 29 | Max Cumulative Dose | {::nomarkdown}This is the maximum cumulative amount of the drug to be administered.{:/} | NUMERIC |  |  |  | 
| dss_number | 30 | Dss Number | {::nomarkdown}Used to identify VA product entries sent to DSS,  This field holds<br/>the original VA Product entry number used by DSS.{:/} | NUMERIC |  |  |  | 
| override_df_dose_chk_exclusion | 31 | Override Df Dose Chk Exclusion | {::nomarkdown}If this field is set to '1' or 'Yes', any value that is in the EXCLUDE<br/>FROM DOSAGE CHECKS (#11) Field of the DOSAGE FORM (#50.606) File shall be<br/>overridden. If this field is set to '1' or 'Yes' and the EXCLUDE FROM <br/>DOSAGE CHECKS field is set to '1' or 'Yes' for the dosage form assigned to<br/>this VA Product, dosage checks WILL be performed on this VA Product. Any<br/>other VA Product with that dosage form WILL NOT have dosage checks<br/>performed during order entry. If this field is set to '1' or 'Yes' and the<br/>EXCLUDE FROM DOSAGE CHECKS field is set to 'No' or null, dosage checks<br/>WILL NOT be performed on this VA Product. Any other VA Product with that<br/>dosage form WILL have dosage checks performed during order entry. This<br/>field is set at the national level and is not locally editable.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| create_default_possible_dosage | 40 | Create Default Possible Dosage | {::nomarkdown}Indicate whether Possible Dosages should be auto-created based on<br/>Dosage Form/Dispense Unit (Default) or if you want to control<br/>the Possible Dosage auto-creation process for the Dispense Drugs<br/>matched/re-matched to this VA Product.<br/> <br/>   YES - Possible Dosages will be auto-created based upon Dosage<br/>         Form/Dispense Unit combination (Default).<br/>    NO - Possible Dosages will be auto-created according to the rule set<br/>         by the POSSIBLE DOSAGES TO CREATE (#41) and PACKAGE (#42) fields.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| possible_dosages_to_create | 41 | Possible Dosages To Create | {::nomarkdown}Indicate which Possible Dosages or if no Possible Dosages should be<br/>auto-created for Dispense Drugs matched/re-matched to this VA Product.<br/>  <br/>    N - No Possible Dosages are auto-created for Dispense Drugs matched<br/>        to this VA PRODUCT entry during the match/re-match process.<br/>    O - Only 1x Possible Dosage is auto-created for Dispense Drugs matched<br/>        to this VA PRODUCT entry during the match/re-match process.<br/>    B - Both 1x and 2x Possible Dosages are auto-created for Dispense<br/>        Drugs matched to this VA PRODUCT entry during the match/re-match<br/>        process. {:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>O</dt><dd>1x Possible Dosage</dd><dt>N</dt><dd>No Possible Dosages</dd><dt>B</dt><dd>1x and 2x Possible Dosages</dd></dl>{:/} | 
| package | 42 | Package | {::nomarkdown}Indicate the Package(s) use for the Possible Dosage(s) auto-created.<br/> <br/>   I  - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        the Inpatient application only.<br/>   O  - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        the Outpatient application only.<br/>   IO - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        both, Inpatient and Outpatient applications.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>IO</dt><dd>Both Inpatient and Outpatient</dd><dt>I</dt><dd>Inpatient</dd><dt>O</dt><dd>Outpatient</dd></dl>{:/} | 
| reduced_copay | 45 | Reduced Copay | {::nomarkdown}This sub-file is used to indicate reduced co-pay for the VA Product <br/>entry. Reduced co-pay entries in this multiple must have a START DATE <br/>and may or may not have a STOP DATE. When the STOP DATE is not set it<br/>indicates that the reduced co-pay should be applied from the START DATE<br/>onwards.{:/} | [OBJECT] |  |  | [Reduced_Copay-50_6845](#Reduced_Copay-50_6845)  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-50_6899](#Effective_Date_time-50_6899)  | 
| fda_med_guide | 100 | Fda Med Guide | {::nomarkdown}This field contains the filename of the FDA Medication Guide associated<br/>with this VA Product. This field can only be edited on the National <br/>Drug File Management System.{:/} | STRING |  |  |  | 
| service_code | 2000 | Service Code | {::nomarkdown}This field contains a Charge Description Master (CDM) Change Control board<br/>assigned Service Code. The value should be a number between 600001-699999.{:/} | NUMERIC |  |  |  | 

## <a name="Active_Ingredients-50_6814"></a>Active_Ingredients-50_6814 

 property | value 
--- | --- 
 id | Active_Ingredients-50_6814
 label | Active Ingredients

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| active_ingredients | .01 | Active Ingredients | {::nomarkdown}This is a pointer to the drug ingredients file.{:/} | POINTER |  | REQUIRED | [Drug_Ingredients-50_416](Drug_Ingredients-50_416.md) | 
| strength | 1 | Strength | {::nomarkdown}This is the strength of the ingredient.{:/} | STRING |  |  |  | 
| units | 2 | Units | {::nomarkdown}This is the unit of measure.{:/} | POINTER |  |  | {id:Drug_Units-50_607} | 

## <a name="Reduced_Copay-50_6845"></a>Reduced_Copay-50_6845 

 property | value 
--- | --- 
 id | Reduced_Copay-50_6845
 label | Reduced Copay

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| start_date | .01 | Start Date | {::nomarkdown}This is the effective date for the reduced co-pay for the VA Product.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| stop_date | .02 | Stop Date | {::nomarkdown}This is the stop date for the reduced co-pay for the VA Product. If<br/>not present, it indicates that the reduced co-pay applies from the <br/>start date onwards.{:/} | DATE-TIME |  |  |  | 

## <a name="Effective_Date_time-50_6899"></a>Effective_Date_time-50_6899 

 property | value 
--- | --- 
 id | Effective_Date_time-50_6899
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term was established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If the term'ACTIVE', then the term will be accessible by end-users to document a particular patient event. If 'INACTIVE', then the term will only be accessible by the application<br/>to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 




 Generated on January 12th 2017, 6:30:19 am