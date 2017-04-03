---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Vital 

<dl>
<dt>id</dt><dd>Vital</dd>
<dt>label</dt><dd>Patient Vitals</dd>
<dt>description</dt><dd>Contains patient vital information.</dd>
<dt>fmIdForId</dt><dd>120.5</dd>
<dt>baseVDMClass</dt><dd><a href="../vdm/Gmrv_Vital_Measurement-120_5">Gmrv_Vital_Measurement-120_5</a></dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Gmrv_Vitals_Measurement-120_5,query:DESCRIBE $ID}]</dd>
<dt>fromVDMList</dt><dd>SELECT 120_5 FILTER(!bound(2))</dd>
<dt>fromVDMListPerPatient</dt><dd>SELECT 120_5 FILTER(.02=$PID&&!bound(2))</dd>
</dl>
Total # of Subobjects: 1

Total # of Properties: 17
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 1
DATE-TIME | 2
OBJECT | 1
POINTER | 5
STRING | 7
[POINTER] | 1



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| vitalsTakenDateTime | Date/Time Vitals Taken | DATE-TIME | date_time_vitals_taken |  |  | REQUIRED, INDEXED | 
| patient | Patient | POINTER | patient | $PATIENTID |  | INDEXED | 
| vitalType | Vital Type | POINTER | vital_type |  |  | REQUIRED, INDEXED | 
| vitalsEnteredDateTime | Date/Time Vitals Entered | DATE-TIME | date_time_vitals_entered | $NOW |  |  | 
| hospitalLocation | Hospital Location | POINTER | hospital_location |  |  | REQUIRED | 
| enteredBy | Entered By | POINTER | entered_by | $USERID |  |  | 
| value | Value | STRING | rate |  |  | REQUIRED | 
| units | Units | STRING |  |  |  |  | 
| high | High | STRING |  |  |  |  | 
| low | Low | STRING |  |  |  |  | 
| metricUnits | metricUnits | STRING |  |  |  |  | 
| metricValue | metricValue | STRING |  |  |  |  | 
| supplementalO2 | Supplemental O2 | STRING | supplemental_o2 |  |  |  | 
| qualifier | Qualifier | [POINTER] | qualifier |  |  |  | 
| isRemoved | Removed | BOOLEAN | entered_in_error |  | {::nomarkdown}<dl></dl>{:/} |  | 
| removalDetails |  | OBJECT |  |  | [RemovalDetails](#removaldetails)  |  | 
| facility |  | POINTER |  |  |  |  | 

## RemovalDetails 

<dl>
<dt>id</dt><dd>RemovalDetails</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | Entered By | POINTER |  |  |  |  | 
| comment | Comment | STRING |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:16 pm</p>{:/}