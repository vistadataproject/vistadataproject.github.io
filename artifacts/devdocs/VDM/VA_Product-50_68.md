---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; VA_Product-50_68
# VA Product (50.68)
Per VHA Directive 2005-044, this file has been "locked down" by Data Standardization (DS). The file definition (i.e. data dictionary) shall not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to VHA Directive 2005-044 shall not be supported.   This file contains a list of available drug products.

<dl>
<dt>Global</dt><dd>^PSNDF(50.68,</dd>
<dt>Domain</dt><dd>Allergies</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**VA Generic Name**{::nomarkdown}<pre><code>  va_generic_name</code></pre>{:/} | .05 | VA GENERIC NAME | POINTER |  | [VA_Generic-50_6](VA_Generic-50_6)
**Dosage Form**{::nomarkdown}<pre><code>  dosage_form</code></pre>{:/} | 1 | This is the dose form. | POINTER |  | [Dosage_Form-50_606](Dosage_Form-50_606)
**Strength**{::nomarkdown}<pre><code>  strength</code></pre>{:/} | 2 | This is the strength. | STRING |  | 
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | 3 | This is the unit of measure. | POINTER |  | [Drug_Units-50_607](Drug_Units-50_607)
**National Formulary Name**{::nomarkdown}<pre><code>  national_formulary_name</code></pre>{:/} | 4 | This is the National Formulary Name for this product.  In most cases<br/>it will be comprised of the VA Generic Name and Dosage Form. | STRING |  | 
**VA Print Name**{::nomarkdown}<pre><code>  va_print_name</code></pre>{:/} | 5 | This is the VA Print Name. | STRING |  | 
**VA Product Identifier**{::nomarkdown}<pre><code>  va_product_identifier</code></pre>{:/} | 6 | This is the VA Product Identifier. | STRING | INDEXED | 
**Transmit To Cmop**{::nomarkdown}<pre><code>  transmit_to_cmop</code></pre>{:/} | 7 | This flag is used for CMOP purposes. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VA Dispense Unit**{::nomarkdown}<pre><code>  va_dispense_unit</code></pre>{:/} | 8 | This is the VA Dispense Unit. | POINTER |  | [VA_Dispense_Unit-50_64](VA_Dispense_Unit-50_64)
**Gcnseqno**{::nomarkdown}<pre><code>  gcnseqno</code></pre>{:/} | 11 | This contains the GCNSEQNO code, which relates to mapping PMIs and<br/>Warning Labels. Entries in this field are accomplished by the NDF Data<br/>Manager mapping functions and shall not be edited. | NUMERIC |  | 
**Previous Gcnseqno**{::nomarkdown}<pre><code>  previous_gcnseqno</code></pre>{:/} | 12 | This field contains the PREVIOUS GCNSEQNO code, which relates to mapping to<br/>PMIs and Warning Labels. Entries in this field are accomplished by the NDF<br/>Data Manager mapping functions and shall not be edited. | NUMERIC |  | 
**Ndc Link To Gcnseqno**{::nomarkdown}<pre><code>  ndc_link_to_gcnseqno</code></pre>{:/} | 13 | This field contains the NDC used to link to GCNSEQNO. Entries in this field<br/>are accomplished by the NDF Data Manager mapping functions and shall not be<br/>edited. | STRING |  | 
**Active Ingredients**{::nomarkdown}<pre><code>  active_ingredients</code></pre>{:/} | 14 |  | OBJECT |  | [Active_Ingredients-50_6814](#Active_Ingredients-50_6814)
**Primary VA Drug Class**{::nomarkdown}<pre><code>  primary_va_drug_class</code></pre>{:/} | 15 | This is the primary VA classification for this product. | POINTER |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Secondary VA Drug Class**{::nomarkdown}<pre><code>  secondary_va_drug_class</code></pre>{:/} | 16 |  | POINTER |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**National Formulary Indicator**{::nomarkdown}<pre><code>  national_formulary_indicator</code></pre>{:/} | 17 | This field denoted whether this product is on the National Formulary. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**National Formulary Restriction**{::nomarkdown}<pre><code>  national_formulary_restriction</code></pre>{:/} | 18 |  | STRING |  | 
**Cs Federal Schedule**{::nomarkdown}<pre><code>  cs_federal_schedule</code></pre>{:/} | 19 | This is the Federal Schedule for controlled substances. | ENUMERATION |  | {::nomarkdown}Schedule I: <em><strong>1</strong></em><br/>Schedule II: <em><strong>2</strong></em><br/>Schedule III: <em><strong>3</strong></em><br/>Schedule II Non-Narcotics: <em><strong>2n</strong></em><br/>Unscheduled: <em><strong>0</strong></em><br/>Schedule IV: <em><strong>4</strong></em><br/>Schedule III Non-Narcotics: <em><strong>3n</strong></em><br/>Schedule V: <em><strong>5</strong></em>{:/}
**Single/multi Source Product**{::nomarkdown}<pre><code>  single_multi_source_product</code></pre>{:/} | 20 | This indicates whether the product is available from a single source<br/>or from multiple sources. | ENUMERATION |  | {::nomarkdown}Multisource: <em><strong>M</strong></em><br/>Single source: <em><strong>S</strong></em>{:/}
**Inactivation Date**{::nomarkdown}<pre><code>  inactivation_date</code></pre>{:/} | 21 | This is the date when this product was inactivated. | DATE-TIME |  | 
**Exclude Drg-drg Interaction Ck**{::nomarkdown}<pre><code>  exclude_drgdrg_interaction_ck</code></pre>{:/} | 23 | This field contains a flag which is set to 1 when no Drug-Drug Interactions are to be performed during Order Checking. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Max Single Dose**{::nomarkdown}<pre><code>  max_single_dose</code></pre>{:/} | 25 | This is the maximum amount of the drug to be administered as a single dose. | NUMERIC |  | 
**Min Single Dose**{::nomarkdown}<pre><code>  min_single_dose</code></pre>{:/} | 26 | This is the minimum amount of the drug to be administered as a single dose. | NUMERIC |  | 
**Max Daily Dose**{::nomarkdown}<pre><code>  max_daily_dose</code></pre>{:/} | 27 | This is the maximum amount of the drug to be administered daily. | NUMERIC |  | 
**Min Daily Dose**{::nomarkdown}<pre><code>  min_daily_dose</code></pre>{:/} | 28 | This is  the minimum amount of the drug to be administered daily. | NUMERIC |  | 
**Max Cumulative Dose**{::nomarkdown}<pre><code>  max_cumulative_dose</code></pre>{:/} | 29 | This is the maximum cumulative amount of the drug to be administered. | NUMERIC |  | 
**Dss Number**{::nomarkdown}<pre><code>  dss_number</code></pre>{:/} | 30 | Used to identify VA product entries sent to DSS,  This field holds<br/>the original VA Product entry number used by DSS. | NUMERIC |  | 
**Override Df Dose Chk Exclusion**{::nomarkdown}<pre><code>  override_df_dose_chk_exclusion</code></pre>{:/} | 31 | If this field is set to '1' or 'Yes', any value that is in the EXCLUDE<br/>FROM DOSAGE CHECKS (#11) Field of the DOSAGE FORM (#50.606) File shall be<br/>overridden. If this field is set to '1' or 'Yes' and the EXCLUDE FROM <br/>DOSAGE CHECKS field is set to '1' or 'Yes' for the dosage form assigned to<br/>this VA Product, dosage checks WILL be performed on this VA Product. Any<br/>other VA Product with that dosage form WILL NOT have dosage checks<br/>performed during order entry. If this field is set to '1' or 'Yes' and the<br/>EXCLUDE FROM DOSAGE CHECKS field is set to 'No' or null, dosage checks<br/>WILL NOT be performed on this VA Product. Any other VA Product with that<br/>dosage form WILL have dosage checks performed during order entry. This<br/>field is set at the national level and is not locally editable. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Create Default Possible Dosage**{::nomarkdown}<pre><code>  create_default_possible_dosage</code></pre>{:/} | 40 | Indicate whether Possible Dosages should be auto-created based on<br/>Dosage Form/Dispense Unit (Default) or if you want to control<br/>the Possible Dosage auto-creation process for the Dispense Drugs<br/>matched/re-matched to this VA Product.<br/> <br/>   YES - Possible Dosages will be auto-created based upon Dosage<br/>         Form/Dispense Unit combination (Default).<br/>    NO - Possible Dosages will be auto-created according to the rule set<br/>         by the POSSIBLE DOSAGES TO CREATE (#41) and PACKAGE (#42) fields. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Possible Dosages To Create**{::nomarkdown}<pre><code>  possible_dosages_to_create</code></pre>{:/} | 41 | Indicate which Possible Dosages or if no Possible Dosages should be<br/>auto-created for Dispense Drugs matched/re-matched to this VA Product.<br/>  <br/>    N - No Possible Dosages are auto-created for Dispense Drugs matched<br/>        to this VA PRODUCT entry during the match/re-match process.<br/>    O - Only 1x Possible Dosage is auto-created for Dispense Drugs matched<br/>        to this VA PRODUCT entry during the match/re-match process.<br/>    B - Both 1x and 2x Possible Dosages are auto-created for Dispense<br/>        Drugs matched to this VA PRODUCT entry during the match/re-match<br/>        process.  | ENUMERATION |  | {::nomarkdown}1x Possible Dosage: <em><strong>O</strong></em><br/>No Possible Dosages: <em><strong>N</strong></em><br/>1x and 2x Possible Dosages: <em><strong>B</strong></em>{:/}
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 42 | Indicate the Package(s) use for the Possible Dosage(s) auto-created.<br/> <br/>   I  - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        the Inpatient application only.<br/>   O  - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        the Outpatient application only.<br/>   IO - Possible Dosages auto-created for Dispense Drugs<br/>        matched/re-matched to this VA PRODUCT entry will be available for<br/>        both, Inpatient and Outpatient applications. | ENUMERATION |  | {::nomarkdown}Both Inpatient and Outpatient: <em><strong>IO</strong></em><br/>Inpatient: <em><strong>I</strong></em><br/>Outpatient: <em><strong>O</strong></em>{:/}
**Reduced Copay**{::nomarkdown}<pre><code>  reduced_copay</code></pre>{:/} | 45 | This sub-file is used to indicate reduced co-pay for the VA Product <br/>entry. Reduced co-pay entries in this multiple must have a START DATE <br/>and may or may not have a STOP DATE. When the STOP DATE is not set it<br/>indicates that the reduced co-pay should be applied from the START DATE<br/>onwards. | OBJECT |  | [Reduced_Copay-50_6845](#Reduced_Copay-50_6845)
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-50_6899](#Effective_Date_time-50_6899)
**Fda Med Guide**{::nomarkdown}<pre><code>  fda_med_guide</code></pre>{:/} | 100 | This field contains the filename of the FDA Medication Guide associated<br/>with this VA Product. This field can only be edited on the National <br/>Drug File Management System. | STRING |  | 
**Service Code**{::nomarkdown}<pre><code>  service_code</code></pre>{:/} | 2000 | This field contains a Charge Description Master (CDM) Change Control board<br/>assigned Service Code. The value should be a number between 600001-699999. | NUMERIC |  | 

### Subfile
#### <a name="Active_Ingredients-50_6814"></a>Active Ingredients

<dl>
<dt>ID</dt><dd>Active_Ingredients-50_6814</dd>
<dt>File Type</dt><dd>50.6814</dd>
<dt>Label</dt><dd>Active Ingredients</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Active Ingredients**{::nomarkdown}<pre><code>  active_ingredients</code></pre>{:/} | .01 | This is a pointer to the drug ingredients file. | POINTER | REQUIRED | [Drug_Ingredients-50_416](Drug_Ingredients-50_416)
**Strength**{::nomarkdown}<pre><code>  strength</code></pre>{:/} | 1 | This is the strength of the ingredient. | STRING |  | 
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | 2 | This is the unit of measure. | POINTER |  | [Drug_Units-50_607](Drug_Units-50_607)

#### <a name="Reduced_Copay-50_6845"></a>Reduced Copay

<dl>
<dt>ID</dt><dd>Reduced_Copay-50_6845</dd>
<dt>File Type</dt><dd>50.6845</dd>
<dt>Label</dt><dd>Reduced Copay</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Start Date**{::nomarkdown}<pre><code>  start_date</code></pre>{:/} | .01 | This is the effective date for the reduced co-pay for the VA Product. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Stop Date**{::nomarkdown}<pre><code>  stop_date</code></pre>{:/} | .02 | This is the stop date for the reduced co-pay for the VA Product. If<br/>not present, it indicates that the reduced co-pay applies from the <br/>start date onwards. | DATE-TIME |  | 

#### <a name="Effective_Date_time-50_6899"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-50_6899</dd>
<dt>File Type</dt><dd>50.6899</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term was established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If the term'ACTIVE', then the term will be accessible by end-users to document a particular patient event. If 'INACTIVE', then the term will only be accessible by the application<br/>to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}