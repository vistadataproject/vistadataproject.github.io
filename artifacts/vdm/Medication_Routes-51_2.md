---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Medication_Routes-51_2 

<dl>
<dt>id</dt><dd>Medication_Routes-51_2</dd>
<dt>fmId</dt><dd>51.2</dd>
<dt>label</dt><dd>Medication Routes</dd>
<dt>location</dt><dd>^PS(51.2,</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is a route of administration for a medication.<br/>a patient.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| abbreviation | 1 | Abbreviation | {::nomarkdown}This is an abbreviation for the medication route<br/>entered.  If an abbreviation is found for a medication route, the<br/>abbreviation will be used on various reports.<br/>the Latin form of the medication route name. In most cases, medication<br/>routes can be selected by abbreviation.{:/} | STRING |  | INDEXED |  | 
| package_use | 3 | Package Use | {::nomarkdown}  The National Drug File uses far more Med Routes than need to<br/>be selected by Inpatient personnel.  This field is used to screen<br/>out Med Routes not needed by the Inpatient packages.<br/>med route is for use only by the National Drug File.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ALL PACKAGES</dd><dt>0</dt><dd>NATIONAL DRUG FILE ONLY</dd></dl>{:/} | 
| outpatient_expansion | 4 | Outpatient Expansion | {::nomarkdown}This is the Medication route's expansion to be use in the Outpatient Pharmacy.<br/>Pharmacy.{:/} | STRING |  |  |  | 
| other_language_expansion | 4.1 | Other Language Expansion | {::nomarkdown}This field is used to store the other language expansion.{:/} | STRING |  |  |  | 
| inactivation_date | 5 | Inactivation Date | {::nomarkdown}This is the date that the medication route was inactivated.{:/} | DATE-TIME |  |  |  | 
| iv_flag | 6 | Iv Flag | {::nomarkdown}This field shall designate IV medication routes. This will help determine<br/>how Inpatient Medication orders entered through CPRS will be finished<br/>in the Pharmacy package.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| standard_med_route_change_log | 7 | Standard Med Route Change Log | {::nomarkdown}This multiple will track all changes made to the STANDARD MEDICATION <br/>ROUTE (#10) Field, which is the pointer to the STANDARD MEDICATION ROUTES <br/>(#51.23) File.{:/} | [OBJECT] |  |  | [Standard_Med_Route_Change_Log-51_27](#Standard_Med_Route_Change_Log-51_27)  | 
| prompt_for_inj_site_in_bcma | 8 | Prompt For Inj. Site In Bcma | {::nomarkdown}The purpose of this field is to provide a way to indicate that a<br/>medication route needs to have a prompt for injection site in BCMA.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| dsply_on_ivp_ivpb_tab_in_bcma | 9 | Dsply On Ivp/ivpb Tab In Bcma? |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| standard_medication_route | 10 | Standard Medication Route | {::nomarkdown}This is a pointer to the Standard Medication Routes (#51.23) File. This <br/>link will allow standardization of the local Medication Route, to be used <br/>for various purposes, such as using a Standard Med Route for Vendor order <br/>checks.{:/} | POINTER |  |  | Standard_Medication_Routes-51_23 | 

## <a name="Standard_Med_Route_Change_Log-51_27"></a>Standard_Med_Route_Change_Log-51_27 

<dl>
<dt>id</dt><dd>Standard_Med_Route_Change_Log-51_27</dd>
<dt>label</dt><dd>Standard Med Route Change Log</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| activity_date_and_time | .01 | Activity Date And Time | {::nomarkdown}This is the date and time the change was made to the STANDARD MEDICATION <br/>ROUTE (#10) Field. It is set from the PSSMEDX routine, which is invoked <br/>from the new style cross reference of the STANDARD MEDICATION ROUTE (#10) <br/>Field of the MEDICATION ROUTES (#51.2) File.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| person_making_change | 1 | Person Making Change | {::nomarkdown}This is person who made the change to the STANDARD MEDICATION ROUTE (#10) <br/>Field. This field will be null if the change was done by an automated <br/>process. It is set from the PSSMEDX routine, which is invoked from the new<br/>style cross reference of the STANDARD MEDICATION ROUTE (#10) Field of the<br/>MEDICATION ROUTES (#51.2) File.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| old_value | 2 | Old Value | {::nomarkdown}This is the previous value of the STANDARD MEDICATION ROUTE (#10) Field <br/>when a change is made. It can be null, if there was no previous value. It <br/>is set from the PSSMEDX routine, which is invoked from the new style cross<br/>reference of the STANDARD MEDICATION ROUTE (#10) Field of the MEDICATION<br/>ROUTES (#51.2) File.{:/} | POINTER |  |  | Standard_Medication_Routes-51_23 | 
| new_value | 3 | New Value | {::nomarkdown}This is the new value of the STANDARD MEDICATION ROUTE (#10) Field when a<br/>change is made. It can be null, if there is no new value. It is set from<br/>the PSSMEDX routine, which is invoked from the new style cross reference<br/>of the STANDARD MEDICATION ROUTE (#10) Field of the MEDICATION ROUTES<br/>(#51.2) File.{:/} | POINTER |  |  | Standard_Medication_Routes-51_23 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:29:32 am</p>{:/}