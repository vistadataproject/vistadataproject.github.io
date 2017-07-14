---
layout: default
title: MVDM
---

#### [Developer Documentation](../index) &#187; [MVDM](TableOfContents) &#187; Vital<br/>
<a name="top"></a>
# Vital

### Patient Vitals

Contains patient vital information.

**Fileman ID:** 120.5

**Base VDM Class:** [Gmrv_Vital_Measurement-120_5](../VDM/Gmrv_Vital_Measurement-120_5)

## Property Summary

**Property Count:** 17

Type | Count
--- | ---
DATE-TIME | 2
POINTER | 6
STRING | 7
BOOLEAN | 1
OBJECT | 1

**Sub-Object Count:** 1

ID | Label | Field ID
--- | --- | ---
1 | [Removal Details](#RemovalDetails) | RemovalDetails

[&uarr; Return to top](#top)<br/>

## Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
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

[&uarr; Return to top](#top)<br/>

## Sub-Objects
### <a name="RemovalDetails"></a>1. Removal Details

**Field ID:** RemovalDetails

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | *CUSTOM* | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | *CUSTOM* |  |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | *CUSTOM* |  |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}