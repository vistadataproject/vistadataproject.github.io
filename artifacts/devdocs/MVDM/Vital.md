---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; Vital
# Patient Vitals
Contains patient vital information.

<dl>
<dt>File Type</dt><dd>120.5</dd>
<dt>Base VDM Class</dt><dd>Gmrv_Vital_Measurement-120_5</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Gmrv_Vitals_Measurement-120_5: <pre><code>DESCRIBE $ID</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 120_5 FILTER(!bound(2))</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code>SELECT 120_5 FILTER(.02&#x3D;$PID&amp;&amp;!bound(2))</code></pre></dd>
</dl>


### Property Summary

Property Count: **17**

Sub-Object Count: **1**

Type | Count
--- | ---
DATE-TIME | 2
POINTER | 6
STRING | 7
BOOLEAN | 1
OBJECT | 1

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Vitals Taken**{::nomarkdown}<pre><code>  vitalsTakenDateTime</code></pre>{:/} | DATE-TIME | date_time_vitals_taken |  | INDEXED<br/>REQUIRED | 
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | patient | $PATIENTID | INDEXED | 
**Vital Type**{::nomarkdown}<pre><code>  vitalType</code></pre>{:/} | POINTER | vital_type |  | INDEXED<br/>REQUIRED | 
**Date/Time Vitals Entered**{::nomarkdown}<pre><code>  vitalsEnteredDateTime</code></pre>{:/} | DATE-TIME | date_time_vitals_entered | $NOW |  | 
**Hospital Location**{::nomarkdown}<pre><code>  hospitalLocation</code></pre>{:/} | POINTER | hospital_location |  | REQUIRED | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | entered_by | $USERID |  | 
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | STRING | rate |  | REQUIRED | 
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | STRING | *GENERATED* |  |  | 
**High**{::nomarkdown}<pre><code>  high</code></pre>{:/} | STRING | *GENERATED* |  |  | 
**Low**{::nomarkdown}<pre><code>  low</code></pre>{:/} | STRING | *GENERATED* |  |  | 
**metricUnits**{::nomarkdown}<pre><code>  metricUnits</code></pre>{:/} | STRING | *GENERATED* |  |  | 
**metricValue**{::nomarkdown}<pre><code>  metricValue</code></pre>{:/} | STRING | *GENERATED* |  |  | 
**Supplemental O2**{::nomarkdown}<pre><code>  supplementalO2</code></pre>{:/} | STRING | supplemental_o2 |  |  | 
**Qualifier**{::nomarkdown}<pre><code>  qualifier</code></pre>{:/} | POINTER | qualifier |  |  | 
**Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | BOOLEAN | entered_in_error |  |  | 
**Removal Details**{::nomarkdown}<pre><code>  removalDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [RemovalDetails](#RemovalDetails)
**Facility**{::nomarkdown}<pre><code>  facility</code></pre>{:/} | POINTER | *GENERATED* |  |  | 

### SubObjects
#### <a name="RemovalDetails"></a>

<dl>
<dt>ID</dt><dd>RemovalDetails</dd>
<dt>File Type</dt><dd></dd>
<dt>Label</dt><dd></dd></dl>

#### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | N/A | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | N/A |  |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | N/A |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}