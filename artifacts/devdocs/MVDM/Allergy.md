---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; Allergy
# Patient Allergies
Contains patient allergy/adverse reaction information.

<dl>
<dt>File Type</dt><dd>120.8</dd>
<dt>Base VDM Class</dt><dd>Patient_Allergies-120_8</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Patient_Allergy-120_8: <pre><code>DESCRIBE $ID</code></pre>
Adverse_Reaction_Reporting-120_85: <pre><code>DESCRIBE 120_85 FILTER(.03&#x3D;$ID)</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 120_8 FILTER(!bound(22))</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code>SELECT 120_8 FILTER(.01&#x3D;$PID&amp;&amp;!bound(22))</code></pre></dd>
</dl>


### Property Summary

Property Count: **16**

Sub-Object Count: **5**

Type | Count
--- | ---
POINTER | 4
OBJECT | 5
ENUMERATION | 4
DATE-TIME | 1
DATE | 1
BOOLEAN | 1

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | patient | $PATIENTID |  | 
**Reactant**{::nomarkdown}<pre><code>  reactant</code></pre>{:/} | POINTER | *GENERATED* |  | REQUIRED | 
**Reactant Details**{::nomarkdown}<pre><code>  reactantDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [ReactantDetails](#ReactantDetails)
**Allergy Type**{::nomarkdown}<pre><code>  allergyType</code></pre>{:/} | ENUMERATION | *GENERATED* |  | REQUIRED | {::nomarkdown}0: <em><strong>DRUG</strong></em><br/>1: <em><strong>DRUG, FOOD</strong></em><br/>2: <em><strong>FOOD</strong></em><br/>3: <em><strong>OTHER</strong></em>{:/}
**Mechanism**{::nomarkdown}<pre><code>  mechanism</code></pre>{:/} | ENUMERATION | mechanism |  | REQUIRED | {::nomarkdown}0: <em><strong>ALLERGY</strong></em><br/>1: <em><strong>PHARMACOLOGIC</strong></em><br/>2: <em><strong>UNKNOWN</strong></em>{:/}
**Origination Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | origination_date_time | $NOW |  | 
**Originator**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | originator | $USERID |  | 
**Facility where entered**{::nomarkdown}<pre><code>  enteredAtFacility</code></pre>{:/} | POINTER | *GENERATED* |  |  | 
**Observed/Historical**{::nomarkdown}<pre><code>  observedOrHistorical</code></pre>{:/} | ENUMERATION | observed_historical |  | REQUIRED | {::nomarkdown}0: <em><strong>OBSERVED</strong></em><br/>1: <em><strong>HISTORICAL</strong></em>{:/}
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | OBJECT | reactions |  |  | [Reaction](#Reaction)
**Allergy Severity**{::nomarkdown}<pre><code>  allergySeverity</code></pre>{:/} | ENUMERATION | Adverse_Reaction_Reporting-120_85:severity |  |  | {::nomarkdown}0: <em><strong>MILD</strong></em><br/>1: <em><strong>MODERATE</strong></em><br/>2: <em><strong>SEVERE</strong></em>{:/}
**Date Occurred**{::nomarkdown}<pre><code>  dateOccurred</code></pre>{:/} | DATE | Adverse_Reaction_Reporting-120_85:date_time_of_event |  |  | 
**Id Band Marked**{::nomarkdown}<pre><code>  idBandMarked</code></pre>{:/} | OBJECT | id_band_marked |  | CREATE<br/>UPDATE | [IdBandMarked](#IdBandMarked)
**Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | BOOLEAN | entered_in_error |  |  | 
**Removal Details**{::nomarkdown}<pre><code>  removalDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [RemovalDetails](#RemovalDetails)
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | OBJECT | *GENERATED* |  | CREATE<br/>UPDATE | [Comment](#Comment)

### SubObjects
#### <a name="ReactantDetails"></a>

<dl>
<dt>ID</dt><dd>ReactantDetails</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Drug Ingredients**{::nomarkdown}<pre><code>  drugIngredients</code></pre>{:/} | POINTER | N/A |  |  | 
**Drug Classes**{::nomarkdown}<pre><code>  drugClasses</code></pre>{:/} | POINTER | N/A |  |  | 

#### <a name="Reaction"></a>

<dl>
<dt>ID</dt><dd>Reaction</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reaction**{::nomarkdown}<pre><code>  reaction</code></pre>{:/} | POINTER | reaction |  |  | 
**Date/Time of Reaction**{::nomarkdown}<pre><code>  dateTimeOccurred</code></pre>{:/} | DATE-TIME | date_entered |  |  | 

#### <a name="IdBandMarked"></a>Id Band Marked

<dl>
<dt>ID</dt><dd>IdBandMarked</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd>Id Band Marked</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | date_time | $NOW |  | 
**User Entering**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | user_entering | $USERID |  | 

#### <a name="RemovalDetails"></a>

<dl>
<dt>ID</dt><dd>RemovalDetails</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | N/A | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | N/A | $USERID |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | N/A |  |  | 

#### <a name="Comment"></a>Comment

<dl>
<dt>ID</dt><dd>Comment</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd>Comment</dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Comment Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | N/A | $NOW |  | 
**User Entering**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | N/A | $USERID |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | N/A |  | REQUIRED<br/>UPDATE | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}