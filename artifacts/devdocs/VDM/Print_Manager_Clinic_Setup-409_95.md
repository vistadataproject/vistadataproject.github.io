---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Print_Manager_Clinic_Setup-409_95<br/>
<a name="top"></a>
# Print Manager Clinic Setup (409.95)
This file defines which encounter forms to use for a particular clinic.   Also, this file can be used to define other forms or reports to print, along with the encounter forms. The idea is that for each appointment a packet of forms can be printed, saving the effort of collating the forms manually. first time patients, and one for all patients.   Also, this file can be used to define other forms or reports to print, along with the encounter forms. The idea is that for each appointment a packet of forms can be printed, saving the effort of collating the forms manually.

**Global:** ^SD(409.95,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Clinic**{::nomarkdown}<pre><code>  clinic</code></pre>{:/} | .01 | Enter a clinic or ward. | POINTER | INDEXED<br/>REQUIRED | [Hospital_Location-44](Hospital_Location-44)
**Basic Default Encounter Form**{::nomarkdown}<pre><code>  basic_default_encounter_form</code></pre>{:/} | .02 |  <br/>The encounter form that will be printed for every appointment. | POINTER | INDEXED | Encounter_Form-357
**Supplmntl Form - Estblshed Pt.**{::nomarkdown}<pre><code>  supplmntl_form__estblshed_pt</code></pre>{:/} | .03 |  <br/>This is a supplemental form that will print only for patients that have<br/>been seen in the clinic previously. | POINTER | INDEXED | Encounter_Form-357
**Supplmntl Form - First Visit**{::nomarkdown}<pre><code>  supplmntl_form__first_visit</code></pre>{:/} | .04 |  <br/>This is a supplemental for that will print only for patients that have<br/>not been seen previously at the clinic. | POINTER | INDEXED | Encounter_Form-357
**Form W/o Patient Data**{::nomarkdown}<pre><code>  form_w_o_patient_data</code></pre>{:/} | .05 |  <br/>This is the encounter form that should be printed for unscheduled visits.<br/>It may have a space in the top left hand corner for imprinting the<br/>embossed patient card or space to write in the name, ssn, etc. | POINTER | INDEXED | Encounter_Form-357
**Supplmntl Form #1 All Patients**{::nomarkdown}<pre><code>  supplmntl_form_number1_all_patients</code></pre>{:/} | .06 |  <br/>This is a supplemental form to be used by all patients of the clinic. A<br/>form in this category should not also be in one of the other categories<br/>for supplemental forms, else it will be printed twice. | POINTER | INDEXED | Encounter_Form-357
**Reserved For Future Use**{::nomarkdown}<pre><code>  reserved_for_future_use</code></pre>{:/} | .07 | This category was created for clinics to assign new forms that are not yet<br/>complete without fear that they would be accidently printed. | POINTER | INDEXED | Encounter_Form-357
**Supplmntl Form #2 All Patients**{::nomarkdown}<pre><code>  supplmntl_form_number2_all_patients</code></pre>{:/} | .08 |  | POINTER | INDEXED | Encounter_Form-357
**Supplmntl Form #3 All Patients**{::nomarkdown}<pre><code>  supplmntl_form_number3_all_patients</code></pre>{:/} | .09 |  | POINTER | INDEXED | Encounter_Form-357
**Don&#x27;t Use Pcmm Providers**{::nomarkdown}<pre><code>  dont_use_pcmm_providers</code></pre>{:/} | .1 | AICS defaults to printing providers specified in PCMM if they are<br/>defined otherwise the providers from the clinic setup is used.<br/>Answering this field "YES" for a clinic will cause AICS to print<br/>the providers from clinic setup irregardless PCMM.  This is intended<br/>for use by sites bringing up PCMM but who have not completed the<br/>entry of providers. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Report**{::nomarkdown}<pre><code>  report</code></pre>{:/} | 1 |  <br/>This is a list of reports or forms that should be printed under certain<br/>circumstances. The only types of forms or reports that can be printed are<br/>ones that are defined in the Package Interface file. | OBJECT |  | [Report-409_9501](#Report-409_9501)
**Excluded Report**{::nomarkdown}<pre><code>  excluded_report</code></pre>{:/} | 2 | Used to override reports defined to print for the division. <br/>Reports defined to print for the division will not print if they are<br/>excluded for the clinic. | POINTER |  | Package_Interface-357_6

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Report-409_9501"></a>Report (409.9501)

<dl>
<dt>ID</dt><dd>Report-409_9501</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Report**{::nomarkdown}<pre><code>  report</code></pre>{:/} | .01 |  <br/> <br/>An entry in the Package Interface file that should identify a routine that<br/>prints the desired form or report. | POINTER | INDEXED<br/>REQUIRED | Package_Interface-357_6
**Print Condition**{::nomarkdown}<pre><code>  print_condition</code></pre>{:/} | .02 |  <br/>The particular condition under which the form or report should print. | POINTER | REQUIRED | Print_Conditions-357_92
**Simplex/duplex**{::nomarkdown}<pre><code>  simplex_duplex</code></pre>{:/} | .03 | Allows reports to be printed one-sided or two-sided. | ENUMERATION |  | {::nomarkdown}DUPLEX,SHORT-EDGE BINDING: <em><strong>2</strong></em><br/>SIMPLEX: <em><strong>0</strong></em><br/>DUPLEX,LONG-EDGE BINDING: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}