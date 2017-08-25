---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Medication_Instruction-51<br/>
<a name="top"></a>
# Medication Instruction (51)
  This file holds the abbreviations which are often used when entering the Rx sig.  Each record holds an expansion of the abbreviation which is used to complete the sig as it is printed on the Rx label.  Care should be taken to not delete entries in this file after going into production use of the pharmacy package.  If an entry were deleted then any sigs that contain the abbreviation would not find it when printed later and thus could confuse the patient.   The above description indicates that this file is not strictly 'pointed to' in the classical VA FileMan sense, but that logically it is nearly the same thing.

**Global:** ^PS(51,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |   For inpatient pharmacy use, you may enter one of the following standard<br/>times or you may use a non-standard schedule when appropriate.  For<br/>example,  Q36H  or Q17H. | STRING | INDEXED<br/>REQUIRED | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | .5 | This field is used to indicate the synonym if applicable. | STRING |  | 
**Expansion**{::nomarkdown}<pre><code>  expansion</code></pre>{:/} | 1 |   This is the full explanation of the instruction and will print on<br/>some reports. | STRING | REQUIRED | 
**Other Language Expansion**{::nomarkdown}<pre><code>  other_language_expansion</code></pre>{:/} | 1.1 | This field is used to store the expansion in another language. | STRING |  | 
**Med Route**{::nomarkdown}<pre><code>  med_route</code></pre>{:/} | 2 |  | POINTER |  | [Medication_Routes-51_2](Medication_Routes-51_2)
**Schedule**{::nomarkdown}<pre><code>  schedule</code></pre>{:/} | 3 | This is the Schedule that is associated with the Medication Instruction.<br/>Prior to the Pharmacy Ordering Enhancements project, this field was used<br/>to associate schedules with Outpatient prescriptions, by running each word<br/>of the Sig through the Medication Instruction file to look for an<br/>associated Schedule. The field is currently not being used by the Pharmacy<br/>software. | STRING |  | 
**Instructions**{::nomarkdown}<pre><code>  instructions</code></pre>{:/} | 4 |  | STRING |  | 
**Additional Instruction**{::nomarkdown}<pre><code>  additional_instruction</code></pre>{:/} | 5 |  | STRING |  | 
**Plural**{::nomarkdown}<pre><code>  plural</code></pre>{:/} | 9 | This field is used to indicate if there's a plural name for this instruction. | STRING |  | 
**Default Admin Times**{::nomarkdown}<pre><code>  default_admin_times</code></pre>{:/} | 10 | This field is used to indicate a default admin time if applicable. | STRING |  | 
**Ward**{::nomarkdown}<pre><code>  ward</code></pre>{:/} | 20 | This sub file is used to indicate any wards associated with a medication<br/>instruction. | OBJECT |  | [Ward-51_01](#Ward-51_01)
**Intended Use**{::nomarkdown}<pre><code>  intended_use</code></pre>{:/} | 30 |   This controls the users' view of this file.  If the entry is marked as<br/>OUTPATIENT ONLY (0), then only the Outpatient package will use it as a<br/>valid abbreviation.  If marked INPATIENT ONLY (2), then only the Inpatient<br/>package will use the entry as a valid abbreviation.  The entry may be<br/>marked as Inpatient and Outpatient (1). | ENUMERATION | REQUIRED | {::nomarkdown}INPATIENT ONLY: <em><strong>2</strong></em><br/>OUTPATIENT ONLY: <em><strong>0</strong></em><br/>IN & OUTPATIENT: <em><strong>1</strong></em>{:/}
**Frequency (in Minutes)**{::nomarkdown}<pre><code>  frequency_in_minutes</code></pre>{:/} | 31 | This is the number of minutes between each time that the action should<br/>take place. This field will be used to calculate defaults for Quantity and<br/>Days Supply in the Outpatient Pharmacy Package. It will also be used to<br/>calculate defaults for the fields in the pharmacy dialog in Computerized<br/>Patient Record System (CPRS). | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Ward-51_01"></a>Ward (51.01)

<dl>
<dt>ID</dt><dd>Ward-51_01</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Ward**{::nomarkdown}<pre><code>  ward</code></pre>{:/} | .01 | This field is ued to indicate any wards associated with a medication<br/>instruction. | POINTER | REQUIRED | [Ward_Location-42](Ward_Location-42)
**Default Admin Times**{::nomarkdown}<pre><code>  default_admin_times</code></pre>{:/} | .02 | This field is used to indicate a default admin time if applicable. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}