---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; Visit
# Visit
No Description

<dl>
<dt>File Type</dt><dd>9000010</dd>
<dt>Base VDM Class</dt><dd>Visit-9000010</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd></dd>
<dt>List</dt><dd><pre><code></code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code></code></pre></dd>
</dl>


### Property Summary

Property Count: **39**

Sub-Object Count: **0**

Type | Count
--- | ---
POINTER | 12
DATE-TIME | 4
ENUMERATION | 11
STRING | 3
NUMERIC | 1
BOOLEAN | 8

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | patient_name |  | REQUIRED | Patient_Ihs-9000001
**Date Time Event**{::nomarkdown}<pre><code>  dateTimeEvent</code></pre>{:/} | DATE-TIME | visit_admit_datetime | $NOW |  | 
**Date Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | date_visit_created | $NOW |  | 
**Date Time Last Modified**{::nomarkdown}<pre><code>  dateTimeLastModified</code></pre>{:/} | DATE-TIME | date_last_modified | $NOW |  | 
**Date Time Checked Out**{::nomarkdown}<pre><code>  dateTimeCheckedOut</code></pre>{:/} | DATE-TIME | check_out_datetime |  |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | created_by_user | $USERID |  | [New_Person-200](../VDM/New_Person-200)
**Parent Visit**{::nomarkdown}<pre><code>  parentVisit</code></pre>{:/} | POINTER | parent_visit_link |  |  | Visit
**Visit Type**{::nomarkdown}<pre><code>  visitType</code></pre>{:/} | ENUMERATION | encounter_type |  |  | {::nomarkdown}PRIMARY: <em><strong>P</strong></em><br/>OCCASION OF SERVICE: <em><strong>O</strong></em><br/>STOP CODE: <em><strong>S</strong></em><br/>ANCILLARY: <em><strong>A</strong></em><br/>CREDIT STOP: <em><strong>C</strong></em>{:/}
**Facility**{::nomarkdown}<pre><code>  facility</code></pre>{:/} | POINTER | loc_of_encounter |  |  | [Location-9999999_06](../VDM/Location-9999999_06)
**Hospital Location**{::nomarkdown}<pre><code>  hospitalLocation</code></pre>{:/} | POINTER | hospital_location |  |  | [Hospital_Location-44](../VDM/Hospital_Location-44)
**Outside Location**{::nomarkdown}<pre><code>  outsideLocation</code></pre>{:/} | STRING | outside_location |  |  | 
**Dependent Entry Count**{::nomarkdown}<pre><code>  dependentEntryCount</code></pre>{:/} | NUMERIC | dependent_entry_count |  |  | 
**Is Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | ENUMERATION | delete_flag |  |  | {::nomarkdown}ACTIVE: <em><strong>0</strong></em><br/>DELETED: <em><strong>1</strong></em>{:/}
**Clinic Stop**{::nomarkdown}<pre><code>  clinicStop</code></pre>{:/} | POINTER | dss_id |  |  | [Clinic_Stop-40_7](../VDM/Clinic_Stop-40_7)
**Patient Eligibility**{::nomarkdown}<pre><code>  patientEligibility</code></pre>{:/} | POINTER | eligibility |  |  | [Eligibility_Code-8](../VDM/Eligibility_Code-8)
**Pfss Account**{::nomarkdown}<pre><code>  pfssAccount</code></pre>{:/} | POINTER | pfss_account_reference |  |  | Pfss_Account-375
**Visit Id**{::nomarkdown}<pre><code>  visitId</code></pre>{:/} | STRING | visit_id |  |  | 
**Patient In Or Out**{::nomarkdown}<pre><code>  patientInOrOut</code></pre>{:/} | ENUMERATION | patient_status_in_out |  |  | {::nomarkdown}IN: <em><strong>1</strong></em><br/>OUT: <em><strong>0</strong></em>{:/}
**Is Service Connected**{::nomarkdown}<pre><code>  isServiceConnected</code></pre>{:/} | BOOLEAN | service_connected |  |  | 
**Agent Orange Exposure**{::nomarkdown}<pre><code>  agentOrangeExposure</code></pre>{:/} | BOOLEAN | agent_orange_exposure |  |  | 
**Ionizing Radiation Exposure**{::nomarkdown}<pre><code>  ionizingRadiationExposure</code></pre>{:/} | BOOLEAN | ionizing_radiation_exposure |  |  | 
**Sw Asia Conditions**{::nomarkdown}<pre><code>  swAsiaConditions</code></pre>{:/} | BOOLEAN | sw_asia_conditions |  |  | 
**Military Sexual Trauma**{::nomarkdown}<pre><code>  militarySexualTrauma</code></pre>{:/} | BOOLEAN | military_sexual_trauma |  |  | 
**Head And Or Neck Cancer**{::nomarkdown}<pre><code>  headAndOrNeckCancer</code></pre>{:/} | BOOLEAN | head_and_or_neck_cancer |  |  | 
**Combat Veteran**{::nomarkdown}<pre><code>  combatVeteran</code></pre>{:/} | BOOLEAN | combat_veteran |  |  | 
**Proj 112 Shad**{::nomarkdown}<pre><code>  proj112Shad</code></pre>{:/} | BOOLEAN | proj_112_shad |  |  | 
**Service Connection Edit Flag**{::nomarkdown}<pre><code>  serviceConnectionEditFlag</code></pre>{:/} | ENUMERATION | service_connection_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Agent Orange Edit Flag**{::nomarkdown}<pre><code>  agentOrangeEditFlag</code></pre>{:/} | ENUMERATION | agent_orange_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Ionizing Radiation Edit Flag**{::nomarkdown}<pre><code>  ionizingRadiationEditFlag</code></pre>{:/} | ENUMERATION | ionizing_radiation_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Sw Asia Conditions Edit Flag**{::nomarkdown}<pre><code>  swAsiaConditionsEditFlag</code></pre>{:/} | ENUMERATION | sw_asia_conditions_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Mst Edit Flag**{::nomarkdown}<pre><code>  mstEditFlag</code></pre>{:/} | ENUMERATION | mst_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Head And Neck Cancer Edit Flag**{::nomarkdown}<pre><code>  headAndNeckCancerEditFlag</code></pre>{:/} | ENUMERATION | head_and_neck_cancer_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Combat Veteran Edit Flag**{::nomarkdown}<pre><code>  combatVeteranEditFlag</code></pre>{:/} | ENUMERATION | combat_veteran_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Proj 112 Shad Edit Flag**{::nomarkdown}<pre><code>  proj112ShadEditFlag</code></pre>{:/} | ENUMERATION | proj_112_shad_edit_flag |  |  | {::nomarkdown}EDITABLE: <em><strong>0</strong></em><br/>NOT EDITABLE: <em><strong>1</strong></em>{:/}
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | STRING | comments |  |  | 
**Option Used To Enter**{::nomarkdown}<pre><code>  optionUsedToEnter</code></pre>{:/} | POINTER | option_used_to_create |  |  | [Option-19](../VDM/Option-19)
**Protocol Used To Enter**{::nomarkdown}<pre><code>  protocolUsedToEnter</code></pre>{:/} | POINTER | protocol |  |  | [Protocol-101](../VDM/Protocol-101)
**Entered With Package**{::nomarkdown}<pre><code>  enteredWithPackage</code></pre>{:/} | POINTER | package |  |  | [Package-9_4](../VDM/Package-9_4)
**Entered With PCE Data Source**{::nomarkdown}<pre><code>  enteredWithPCEDataSource</code></pre>{:/} | POINTER | data_source |  |  | Pce_Data_Source-839_7



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}