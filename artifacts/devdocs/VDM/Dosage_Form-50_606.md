---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Dosage_Form-50_606<br/>
<a name="top"></a>
# Dosage Form (50.606)
This file contains dosage forms.

**Global:** ^PS(50.606,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the dosage form. | STRING | INDEXED<br/>REQUIRED | 
**Med Route For Dosage Form**{::nomarkdown}<pre><code>  med_route_for_dosage_form</code></pre>{:/} | 1 |  | POINTER |  | [Medication_Routes-51_2](Medication_Routes-51_2)
**Verb**{::nomarkdown}<pre><code>  verb</code></pre>{:/} | 3 | The verb is used by both the Outpatient Pharmacy package and CPRS. CPRS<br/>uses the verb as the first word when building the order text of an<br/>Outpatient order entered through CPRS. Outpatient Pharmacy uses the verb<br/>as the first word when building the Sig for orders entered through CPRS<br/>and through the Outpatient Pharmacy package. | STRING |  | 
**Other Language Verb**{::nomarkdown}<pre><code>  other_language_verb</code></pre>{:/} | 3.1 | This field is used to store the verb in another language. | STRING |  | 
**Preposition**{::nomarkdown}<pre><code>  preposition</code></pre>{:/} | 5 | The preposition is used by both the Outpatient Pharmacy package and CPRS.<br/>CPRS uses the preposition to precede the Outpatient expansion of the<br/>Medication Route when building the order text of an Outpatient order<br/>entered through CPRS. Outpatient Pharmacy uses the preposition to precede<br/>the Outpatient expansion of the Medication Route when building the Sig for<br/>orders entered through CPRS and through the Outpatient Pharmacy package. | STRING |  | 
**Other Language Preposition**{::nomarkdown}<pre><code>  other_language_preposition</code></pre>{:/} | 5.1 | This field is used to store the preposition in another language. | STRING |  | 
**Noun**{::nomarkdown}<pre><code>  noun</code></pre>{:/} | 6 |  | OBJECT |  | [Noun-50_6066](#Noun-50_6066)
**Inactivation Date**{::nomarkdown}<pre><code>  inactivation_date</code></pre>{:/} | 7 | This is the date that the dosage form was inactivated. | DATE-TIME |  | 
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | 8 | This multiple contains the units and package fields. | OBJECT |  | [Units-50_6068](#Units-50_6068)
**Dispense Units Per Dose**{::nomarkdown}<pre><code>  dispense_units_per_dose</code></pre>{:/} | 9 | This multiple contains the dispense units per dose and package fields. | OBJECT |  | [Dispense_Units_Per_Dose-50_6069](#Dispense_Units_Per_Dose-50_6069)
**Conjunction**{::nomarkdown}<pre><code>  conjunction</code></pre>{:/} | 10 | If there is data in this field, it will become part of the Dosage selection<br/>display in CPRS for Local Possible Dosages, for Dispense Drugs matched to<br/>a Pharmacy Orderable Item with this Dose Form. It will connect the Local<br/>Possible Dosage with the Strength and Units. For example, a Local<br/>Possible Dosage of '2 drop(s) 0.5%' becomes '2 drop(s) of 0.5%' by adding<br/>the word 'of' as the conjunction for the Dosage Form. | STRING |  | 
**Exclude From Dosage Checks**{::nomarkdown}<pre><code>  exclude_from_dosage_checks</code></pre>{:/} | 11 | If this field is set to '1' or 'YES', then any medication orders <br/>containing a drug with this Dosage Form will be excluded from dosage<br/>checks. However, if the VA PRODUCT (#50.68) File entry that the DRUG (#50)<br/>File entry is matched to has a '1' or 'Yes' in the OVERRIDE DF DOSE CHK<br/>EXCLUSION (#31) Field, the Dosage Form exclusion designation would be<br/>overridden, and dosage checks would be performed for Drug (#50) File<br/>entries matched to that VA product. If this field is set to '0' or 'No',<br/>or null, then any medication orders containing a drug with this Dosage<br/>Form will not be excluded from dosage checks. However, if the VA PRODUCT<br/>(#50.68) File entry that the Drug (#50) File entry is matched to has a '1'<br/>or 'Yes' in the OVERRIDE DF DOSE CHK EXCLUSION (#31) Field, the Dosage<br/>Form exclusion designation would be overridden, and dosage checks would<br/>not be performed for Drug (#50) File entries matched to that VA product. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Noun-50_6066"></a>Noun (50.6066)

<dl>
<dt>ID</dt><dd>Noun-50_6066</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Noun**{::nomarkdown}<pre><code>  noun</code></pre>{:/} | .01 | These are the nouns that are associated with this Dosage form. It will<br/>be used by Outpatient Pharmacy to build a Sig for an OE/RR order.<br/>It will also be used for building local possible doses as part of the<br/>pharmacy ordering enhancements for both Outpatient Pharmacy and Inpatient<br/>Medications. | STRING | INDEXED<br/>REQUIRED | 
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 1 | This field will allow a noun to be marked for Inpatient Medications and/or<br/>Outpatient Pharmacy package use. | ENUMERATION |  | {::nomarkdown}Inpatient: <em><strong>I</strong></em><br/>Outpatient: <em><strong>O</strong></em><br/>Both: <em><strong>OI</strong></em>{:/}
**Other Language Noun**{::nomarkdown}<pre><code>  other_language_noun</code></pre>{:/} | 3 | This field is used to store the noun in another language. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Units-50_6068"></a>Units (50.6068)

<dl>
<dt>ID</dt><dd>Units-50_6068</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | .01 | Unit of measure. Pointer to the Drug Units File #50.607. | POINTER | INDEXED<br/>REQUIRED | Drug_Units-50_607
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 1 | This field will designate for which package (Inpatient or Outpatient)<br/>Possible Dosages are convertible. | ENUMERATION |  | {::nomarkdown}Inpatient: <em><strong>I</strong></em><br/>Outpatient: <em><strong>O</strong></em><br/>Both: <em><strong>OI</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Dispense_Units_Per_Dose-50_6069"></a>Dispense Units Per Dose (50.6069)

<dl>
<dt>ID</dt><dd>Dispense_Units_Per_Dose-50_6069</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Dispense Units Per Dose**{::nomarkdown}<pre><code>  dispense_units_per_dose</code></pre>{:/} | .01 | The value in this field shall be used to populate dispense units per<br/>dose fields in the Possible Dosages and Local Possible Dosages sub files<br/>in the Drug File. | NUMERIC | INDEXED<br/>REQUIRED | 
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 1 | This field will allow a dispense units per dose to be marked for Inpatient<br/>Medications and/or Outpatient Pharmacy package use. | ENUMERATION |  | {::nomarkdown}Inpatient: <em><strong>I</strong></em><br/>Outpatient: <em><strong>O</strong></em><br/>Both: <em><strong>OI</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}