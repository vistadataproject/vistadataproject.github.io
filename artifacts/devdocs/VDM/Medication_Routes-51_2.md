---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Medication_Routes-51_2<br/>
<a name="top"></a>
# Medication Routes (51.2)
None

**Global:** ^PS(51.2,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is a route of administration for a medication.<br/>a patient. | STRING | INDEXED<br/>REQUIRED | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 1 | This is an abbreviation for the medication route<br/>entered.  If an abbreviation is found for a medication route, the<br/>abbreviation will be used on various reports.<br/>the Latin form of the medication route name. In most cases, medication<br/>routes can be selected by abbreviation. | STRING | INDEXED | 
**Package Use**{::nomarkdown}<pre><code>  package_use</code></pre>{:/} | 3 |   The National Drug File uses far more Med Routes than need to<br/>be selected by Inpatient personnel.  This field is used to screen<br/>out Med Routes not needed by the Inpatient packages.<br/>med route is for use only by the National Drug File. | ENUMERATION |  | {::nomarkdown}ALL PACKAGES: <em><strong>1</strong></em><br/>NATIONAL DRUG FILE ONLY: <em><strong>0</strong></em>{:/}
**Outpatient Expansion**{::nomarkdown}<pre><code>  outpatient_expansion</code></pre>{:/} | 4 | This is the Medication route's expansion to be use in the Outpatient Pharmacy.<br/>Pharmacy. | STRING |  | 
**Other Language Expansion**{::nomarkdown}<pre><code>  other_language_expansion</code></pre>{:/} | 4.1 | This field is used to store the other language expansion. | STRING |  | 
**Inactivation Date**{::nomarkdown}<pre><code>  inactivation_date</code></pre>{:/} | 5 | This is the date that the medication route was inactivated. | DATE-TIME |  | 
**Iv Flag**{::nomarkdown}<pre><code>  iv_flag</code></pre>{:/} | 6 | This field shall designate IV medication routes. This will help determine<br/>how Inpatient Medication orders entered through CPRS will be finished<br/>in the Pharmacy package. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Standard Med Route Change Log**{::nomarkdown}<pre><code>  standard_med_route_change_log</code></pre>{:/} | 7 | This multiple will track all changes made to the STANDARD MEDICATION <br/>ROUTE (#10) Field, which is the pointer to the STANDARD MEDICATION ROUTES <br/>(#51.23) File. | OBJECT |  | [Standard_Med_Route_Change_Log-51_27](#Standard_Med_Route_Change_Log-51_27)
**Prompt For Inj. Site In Bcma**{::nomarkdown}<pre><code>  prompt_for_inj_site_in_bcma</code></pre>{:/} | 8 | The purpose of this field is to provide a way to indicate that a<br/>medication route needs to have a prompt for injection site in BCMA. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Dsply On Ivp/ivpb Tab In Bcma?**{::nomarkdown}<pre><code>  dsply_on_ivp_ivpb_tab_in_bcma</code></pre>{:/} | 9 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Standard Medication Route**{::nomarkdown}<pre><code>  standard_medication_route</code></pre>{:/} | 10 | This is a pointer to the Standard Medication Routes (#51.23) File. This <br/>link will allow standardization of the local Medication Route, to be used <br/>for various purposes, such as using a Standard Med Route for Vendor order <br/>checks. | POINTER |  | Standard_Medication_Routes-51_23

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Standard_Med_Route_Change_Log-51_27"></a>Standard Med Route Change Log (51.27)

<dl>
<dt>ID</dt><dd>Standard_Med_Route_Change_Log-51_27</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Activity Date And Time**{::nomarkdown}<pre><code>  activity_date_and_time</code></pre>{:/} | .01 | This is the date and time the change was made to the STANDARD MEDICATION <br/>ROUTE (#10) Field. It is set from the PSSMEDX routine, which is invoked <br/>from the new style cross reference of the STANDARD MEDICATION ROUTE (#10) <br/>Field of the MEDICATION ROUTES (#51.2) File. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Person Making Change**{::nomarkdown}<pre><code>  person_making_change</code></pre>{:/} | 1 | This is person who made the change to the STANDARD MEDICATION ROUTE (#10) <br/>Field. This field will be null if the change was done by an automated <br/>process. It is set from the PSSMEDX routine, which is invoked from the new<br/>style cross reference of the STANDARD MEDICATION ROUTE (#10) Field of the<br/>MEDICATION ROUTES (#51.2) File. | POINTER |  | [New_Person-200](New_Person-200)
**Old Value**{::nomarkdown}<pre><code>  old_value</code></pre>{:/} | 2 | This is the previous value of the STANDARD MEDICATION ROUTE (#10) Field <br/>when a change is made. It can be null, if there was no previous value. It <br/>is set from the PSSMEDX routine, which is invoked from the new style cross<br/>reference of the STANDARD MEDICATION ROUTE (#10) Field of the MEDICATION<br/>ROUTES (#51.2) File. | POINTER |  | Standard_Medication_Routes-51_23
**New Value**{::nomarkdown}<pre><code>  new_value</code></pre>{:/} | 3 | This is the new value of the STANDARD MEDICATION ROUTE (#10) Field when a<br/>change is made. It can be null, if there is no new value. It is set from<br/>the PSSMEDX routine, which is invoked from the new style cross reference<br/>of the STANDARD MEDICATION ROUTE (#10) Field of the MEDICATION ROUTES<br/>(#51.2) File. | POINTER |  | Standard_Medication_Routes-51_23

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}