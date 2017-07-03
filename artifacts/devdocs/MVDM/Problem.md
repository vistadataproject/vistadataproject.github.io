---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; Problem
# Patient Problems
Contains patient problem information.

<dl>
<dt>File Type</dt><dd>9000011</dd>
<dt>Base VDM Class</dt><dd>Problem-9000011</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Problem-9000011: <pre><code>DESCRIBE $ID</code></pre>
Problem_List_Audit-125_8: <pre><code>DESCRIBE 125_8 FILTER(.01&#x3D;$ID)</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 9000011 FILTER(1.02&#x3D;&#x27;P&#x27;)</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code>SELECT 9000011 FILTER(.02&#x3D;$PID&amp;&amp;1.02&#x3D;&#x27;P&#x27;)</code></pre></dd>
</dl>


### Property Summary

Property Count: **36**

Sub-Object Count: **2**

Type | Count
--- | ---
STRING | 6
NUMERIC | 1
POINTER | 8
DATE-TIME | 1
DATE | 4
ENUMERATION | 4
BOOLEAN | 9
OBJECT | 2
UNKNOWN | 1

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | STRING | *GENERATED* |  | CREATE<br/>UPDATE | 
**Unique Identifier**{::nomarkdown}<pre><code>  uniqueId</code></pre>{:/} | NUMERIC | nmbr |  |  | 
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | POINTER | diagnosis |  | INDEXED<br/>REQUIRED<br/>CREATE<br/>UPDATE | 
**icdd**{::nomarkdown}<pre><code>  icdd</code></pre>{:/} | STRING | *GENERATED* |  | CREATE<br/>UPDATE | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | *GENERATED* | $PATIENTID | INDEXED | 
**Date Last Modified**{::nomarkdown}<pre><code>  lastModifiedDate</code></pre>{:/} | DATE-TIME | date_last_modified | $NOW | CREATE<br/>UPDATE | 
**Provider Narrative**{::nomarkdown}<pre><code>  providerNarrative</code></pre>{:/} | POINTER | provider_narrative |  | REQUIRED<br/>CREATE<br/>UPDATE | 
**Facility**{::nomarkdown}<pre><code>  facility</code></pre>{:/} | POINTER | *GENERATED* | $FACILITYID |  | 
**Date Entered**{::nomarkdown}<pre><code>  enteredDate</code></pre>{:/} | DATE | date_entered | $NOW |  | 
**Problem Status**{::nomarkdown}<pre><code>  problemStatus</code></pre>{:/} | ENUMERATION | status |  | REQUIRED<br/>CREATE<br/>UPDATE | {::nomarkdown}0: <em><strong>ACTIVE</strong></em><br/>1: <em><strong>INACTIVE</strong></em>{:/}
**Date Of Onset**{::nomarkdown}<pre><code>  onsetDate</code></pre>{:/} | DATE | date_of_onset |  | CREATE<br/>UPDATE | 
**Problem**{::nomarkdown}<pre><code>  problem</code></pre>{:/} | POINTER | problem |  | INDEXED<br/>CREATE<br/>UPDATE | 
**Condition**{::nomarkdown}<pre><code>  condition</code></pre>{:/} | ENUMERATION | condition |  | CREATE<br/>UPDATE | {::nomarkdown}0: <em><strong>TRANSCRIBED</strong></em><br/>1: <em><strong>PERMANENT</strong></em><br/>2: <em><strong>HIDDEN</strong></em>{:/}
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | entered_by | $USERID | UPDATE | 
**Responsible Provider**{::nomarkdown}<pre><code>  responsibleProvider</code></pre>{:/} | POINTER | responsible_provider | $USERID | CREATE<br/>UPDATE | 
**Date Resolved**{::nomarkdown}<pre><code>  resolvedDate</code></pre>{:/} | DATE | date_resolved |  | UPDATE | 
**Clinic**{::nomarkdown}<pre><code>  clinic</code></pre>{:/} | POINTER | clinic |  | CREATE<br/>UPDATE | 
**Service Connected**{::nomarkdown}<pre><code>  isServiceConnected</code></pre>{:/} | BOOLEAN | service_connected |  | CREATE<br/>UPDATE | 
**Agent Orange Exposure**{::nomarkdown}<pre><code>  isAgentOrangeExposure</code></pre>{:/} | BOOLEAN | agent_orange_exposure |  | CREATE<br/>UPDATE | 
**Ionizing Radiation Exposure**{::nomarkdown}<pre><code>  isIonizingRadiationExposure</code></pre>{:/} | BOOLEAN | ionizing_radiation_exposure |  | CREATE<br/>UPDATE | 
**Persian Gulf Exposure**{::nomarkdown}<pre><code>  isPersianGulfExposure</code></pre>{:/} | BOOLEAN | persian_gulf_exposure |  | CREATE<br/>UPDATE | 
**Priority**{::nomarkdown}<pre><code>  priority</code></pre>{:/} | ENUMERATION | priority |  | CREATE<br/>UPDATE | {::nomarkdown}0: <em><strong>ACUTE</strong></em><br/>1: <em><strong>CHRONIC</strong></em>{:/}
**Head And/Or Neck Cancer**{::nomarkdown}<pre><code>  isHeadAndOrNeckCancer</code></pre>{:/} | BOOLEAN | head_and_or_neck_cancer |  | CREATE<br/>UPDATE | 
**Military Sexual Trauma**{::nomarkdown}<pre><code>  isMilitarySexualTrauma</code></pre>{:/} | BOOLEAN | military_sexual_trauma |  | CREATE<br/>UPDATE | 
**Combat Veteran**{::nomarkdown}<pre><code>  isCombatVeteran</code></pre>{:/} | BOOLEAN | combat_veteran |  | CREATE<br/>UPDATE | 
**Shipboard Hazard &amp; Defense**{::nomarkdown}<pre><code>  isShipboardHazardDefense</code></pre>{:/} | BOOLEAN | shipboard_hazard__defense |  | CREATE<br/>UPDATE | 
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | OBJECT | *GENERATED* |  | CREATE<br/>UPDATE | [Comments](#Comments)
**SNOMED CT Concept Value**{::nomarkdown}<pre><code>  snomedCTConceptValue</code></pre>{:/} |  | *GENERATED* |  |  | 
**SNOMED CT Concept Code**{::nomarkdown}<pre><code>  snomedCTConceptCode</code></pre>{:/} | STRING | snomed_ct_concept_code |  | INDEXED<br/>CREATE<br/>UPDATE | 
**SNOMED CT Designation Code**{::nomarkdown}<pre><code>  snomedCTDesignationCode</code></pre>{:/} | STRING | snomed_ct_designation_code |  | CREATE<br/>UPDATE | 
**Unique New Term Requested**{::nomarkdown}<pre><code>  uniqueNewTermRequested</code></pre>{:/} | ENUMERATION | *GENERATED* |  | CREATE<br/>UPDATE | {::nomarkdown}0: <em><strong>false</strong></em><br/>1: <em><strong>true</strong></em>{:/}
**Unique Term Request Comment**{::nomarkdown}<pre><code>  uniqueTermRequestComment</code></pre>{:/} | STRING | unique_term_request_comment |  | CREATE<br/>UPDATE | 
**Date Of Interest**{::nomarkdown}<pre><code>  interestDate</code></pre>{:/} | DATE | date_of_interest | $NOW | CREATE<br/>UPDATE | 
**Coding System**{::nomarkdown}<pre><code>  codingSystem</code></pre>{:/} | STRING | coding_system |  | CREATE<br/>UPDATE | 
**Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | BOOLEAN | *GENERATED* |  |  | 
**audits**{::nomarkdown}<pre><code>  audits</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [Audits](#Audits)

### SubObjects
#### <a name="Comments"></a>

<dl>
<dt>ID</dt><dd>Comments</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Comment identifier**{::nomarkdown}<pre><code>  commentId</code></pre>{:/} | NUMERIC | N/A |  | REQUIRED<br/>UPDATE | 
**Comment Text**{::nomarkdown}<pre><code>  commentText</code></pre>{:/} | STRING | N/A |  | UPDATE | 
**Date Commented Entered**{::nomarkdown}<pre><code>  enteredDate</code></pre>{:/} | DATE | N/A | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | STRING | N/A | $USERID |  | 
**Facility**{::nomarkdown}<pre><code>  facility</code></pre>{:/} | POINTER | N/A | $FACILITYID |  | [Location-9999999_06](../VDM/Location-9999999_06)

#### <a name="Audits"></a>

<dl>
<dt>ID</dt><dd>Audits</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**ID**{::nomarkdown}<pre><code>  id</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Problem**{::nomarkdown}<pre><code>  problem</code></pre>{:/} | POINTER | N/A |  |  | 
**Field number**{::nomarkdown}<pre><code>  fieldNumber</code></pre>{:/} | NUMERIC | N/A |  |  | 
**Modified Date**{::nomarkdown}<pre><code>  modifiedDate</code></pre>{:/} | DATE-TIME | N/A |  |  | 
**Who modified**{::nomarkdown}<pre><code>  whoModified</code></pre>{:/} | POINTER | N/A |  |  | 
**Old Value**{::nomarkdown}<pre><code>  oldValue</code></pre>{:/} | STRING | N/A |  |  | 
**New Value**{::nomarkdown}<pre><code>  newValue</code></pre>{:/} | STRING | N/A |  |  | 
**Reason for change**{::nomarkdown}<pre><code>  reason</code></pre>{:/} | STRING | N/A |  |  | 
**Requesting provider**{::nomarkdown}<pre><code>  requestingProvider</code></pre>{:/} | POINTER | N/A |  |  | 
**Old Problem Entry**{::nomarkdown}<pre><code>  oldProblemEntry</code></pre>{:/} | STRING | N/A |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}