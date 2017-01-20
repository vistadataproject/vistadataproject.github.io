---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Vital 

 property | value 
--- | --- 
 id | Vital
 label | Patient Vitals
 description | {::nomarkdown}Contains patient vital information.{:/}
 fmIdForId | 120.5
 baseVDMClass | [Gmrv_Vital_Measurement-120_5](../vdm/Gmrv_Vital_Measurement-120_5)
 fromVDMQueries | [{vdmId:Gmrv_Vitals_Measurement-120_5,query:DESCRIBE $ID}]
 fromVDMList | SELECT 120_5 FILTER(!bound(2))
 fromVDMListPerPatient | SELECT 120_5 FILTER(.02=$PID&&!bound(2))

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

 property | value 
--- | --- 
 id | RemovalDetails
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | Entered By | POINTER |  |  |  |  | 
| comment | Comment | STRING |  |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:59:50 am</p>{:/}