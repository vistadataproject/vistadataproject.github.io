---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) --> Allergy 

 property | value 
--- | --- 
 id | Allergy
 label | Patient Allergies
 description | Contains patient allergy/adverse reaction information.
 fmIdForId | 120.8
 baseVDMClass | [Patient_Allergies-120_8](../vdm/Patient_Allergies-120_8)
 fromVDMQueries | [{vdmId:Patient_Allergy-120_8,query:DESCRIBE $ID},{vdmId:Adverse_Reaction_Reporting-120_85,query:DESCRIBE 120_85 FILTER(.03=$ID)}]
 fromVDMList | SELECT 120_8 FILTER(!bound(22))
 fromVDMListPerPatient | SELECT 120_8 FILTER(.01=$PID&&!bound(22))

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient | $PATIENTID |  |  | 
| reactant | Reactant | POINTER | Mapper |  |  | REQUIRED | 
| reactantDetails |  | OBJECT | Mapper |  | [ReactantDetails](#reactantdetails)  |  | 
| allergyType | Allergy Type | ENUMERATION | Mapper |  | {::nomarkdown}<dl><dt>DRUG</dt><dd>0</dd><dt>DRUG, FOOD</dt><dd>1</dd><dt>FOOD</dt><dd>2</dd><dt>OTHER</dt><dd>3</dd></dl>{:/} | REQUIRED | 
| mechanism | Mechanism | ENUMERATION | mechanism |  | {::nomarkdown}<dl><dt>ALLERGY</dt><dd>0</dd><dt>PHARMACOLOGIC</dt><dd>1</dd><dt>UNKNOWN</dt><dd>2</dd></dl>{:/} | REQUIRED | 
| dateTimeEntered | Origination Date/Time | DATE-TIME | origination_date_time | $NOW |  |  | 
| enteredBy | Originator | POINTER | originator | $USERID |  |  | 
| enteredAtFacility | Facility where entered | POINTER | Mapper |  |  |  | 
| observedOrHistorical | Observed/Historical | ENUMERATION | observed_historical |  | {::nomarkdown}<dl><dt>OBSERVED</dt><dd>0</dd><dt>HISTORICAL</dt><dd>1</dd></dl>{:/} | REQUIRED | 
| reactions | Reactions | [OBJECT] | reactions |  | [Reaction](#reaction)  |  | 
| allergySeverity |  | ENUMERATION | Adverse_Reaction_Reporting-120_85:severity |  | {::nomarkdown}<dl><dt>MILD</dt><dd>0</dd><dt>MODERATE</dt><dd>1</dd><dt>SEVERE</dt><dd>2</dd></dl>{:/} |  | 
| dateOccurred |  | DATE | Adverse_Reaction_Reporting-120_85:date_time_of_event |  |  |  | 
| idBandMarked | Id Band Marked | [OBJECT] | id_band_marked |  | [IdBandMarked](#idbandmarked)  | CREATE, UPDATE | 
| isRemoved | Removed | BOOLEAN | entered_in_error |  |  |  | 
| removalDetails |  | OBJECT | Mapper |  | [RemovalDetails](#removaldetails)  |  | 
| comments | Comments | [OBJECT] | Mapper |  | [Comment](#comment)  | CREATE, UPDATE | 

## ReactantDetails 

 property | value 
--- | --- 
 id | ReactantDetails
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| drugIngredients | Drug Ingredients | [POINTER] |  |  |  |  | 
| drugClasses | Drug Classes | [POINTER] |  |  |  |  | 

## Reaction 

 property | value 
--- | --- 
 id | Reaction
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| reaction | Reaction | [POINTER] | reaction |  |  |  | 
| dateTimeOccurred | Date/Time of Reaction | DATE-TIME | date_entered |  |  |  | 

## IdBandMarked 

 property | value 
--- | --- 
 id | IdBandMarked
 label | Id Band Marked

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time | DATE-TIME | date_time | $NOW |  |  | 
| enteredBy | User Entering | POINTER | user_entering | $USERID |  |  | 

## RemovalDetails 

 property | value 
--- | --- 
 id | RemovalDetails
 label | 

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | Entered By | POINTER |  | $USERID |  |  | 
| comment | Comment | STRING |  |  |  |  | 

## Comment 

 property | value 
--- | --- 
 id | Comment
 label | Comment

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Comment Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | User Entering | POINTER |  | $USERID |  |  | 
| comment | Comment | STRING |  |  |  | REQUIRED, UPDATE | 