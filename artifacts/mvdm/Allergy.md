---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; Allergy 

<dl>
<dt>id</dt><dd>Allergy</dd>
<dt>label</dt><dd>Patient Allergies</dd>
<dt>description</dt><dd>Contains patient allergy/adverse reaction information.</dd>
<dt>fmIdForId</dt><dd>120.8</dd>
<dt>baseVDMClass</dt><dd><a href="../vdm/Patient_Allergies-120_8">Patient_Allergies-120_8</a></dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Patient_Allergy-120_8,query:DESCRIBE $ID},{vdmId:Adverse_Reaction_Reporting-120_85,query:DESCRIBE 120_85 FILTER(.03=$ID)}]</dd>
<dt>fromVDMList</dt><dd>SELECT 120_8 FILTER(!bound(22))</dd>
<dt>fromVDMListPerPatient</dt><dd>SELECT 120_8 FILTER(.01=$PID&&!bound(22))</dd>
</dl>
Total # of Subobjects: 5

Total # of Properties: 16
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 1
DATE | 1
DATE-TIME | 1
ENUMERATION | 4
OBJECT | 2
POINTER | 4
[OBJECT] | 3



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient | Patient | POINTER | patient | $PATIENTID |  |  | 
| reactant | Reactant | POINTER |  |  |  | REQUIRED | 
| reactantDetails |  | OBJECT |  |  | [ReactantDetails](#reactantdetails)  |  | 
| allergyType | Allergy Type | ENUMERATION |  |  | {::nomarkdown}<dl><dt>DRUG</dt><dd>0</dd><dt>DRUG, FOOD</dt><dd>1</dd><dt>FOOD</dt><dd>2</dd><dt>OTHER</dt><dd>3</dd></dl>{:/} | REQUIRED | 
| mechanism | Mechanism | ENUMERATION | mechanism |  | {::nomarkdown}<dl><dt>ALLERGY</dt><dd>0</dd><dt>PHARMACOLOGIC</dt><dd>1</dd><dt>UNKNOWN</dt><dd>2</dd></dl>{:/} | REQUIRED | 
| dateTimeEntered | Origination Date/Time | DATE-TIME | origination_date_time | $NOW |  |  | 
| enteredBy | Originator | POINTER | originator | $USERID |  |  | 
| enteredAtFacility | Facility where entered | POINTER |  |  |  |  | 
| observedOrHistorical | Observed/Historical | ENUMERATION | observed_historical |  | {::nomarkdown}<dl><dt>OBSERVED</dt><dd>0</dd><dt>HISTORICAL</dt><dd>1</dd></dl>{:/} | REQUIRED | 
| reactions | Reactions | [OBJECT] | reactions |  | [Reaction](#reaction)  |  | 
| allergySeverity |  | ENUMERATION | Adverse_Reaction_Reporting-120_85:severity |  | {::nomarkdown}<dl><dt>MILD</dt><dd>0</dd><dt>MODERATE</dt><dd>1</dd><dt>SEVERE</dt><dd>2</dd></dl>{:/} |  | 
| dateOccurred |  | DATE | Adverse_Reaction_Reporting-120_85:date_time_of_event |  |  |  | 
| idBandMarked | Id Band Marked | [OBJECT] | id_band_marked |  | [IdBandMarked](#idbandmarked)  | CREATE, UPDATE | 
| isRemoved | Removed | BOOLEAN | entered_in_error |  | {::nomarkdown}<dl></dl>{:/} |  | 
| removalDetails |  | OBJECT |  |  | [RemovalDetails](#removaldetails)  |  | 
| comments | Comments | [OBJECT] |  |  | [Comment](#comment)  | CREATE, UPDATE | 

## ReactantDetails 

<dl>
<dt>id</dt><dd>ReactantDetails</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| drugIngredients | Drug Ingredients | [POINTER] |  |  |  |  | 
| drugClasses | Drug Classes | [POINTER] |  |  |  |  | 

## Reaction 

<dl>
<dt>id</dt><dd>Reaction</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| reaction | Reaction | [POINTER] | reaction |  |  |  | 
| dateTimeOccurred | Date/Time of Reaction | DATE-TIME | date_entered |  |  |  | 

## IdBandMarked 

<dl>
<dt>id</dt><dd>IdBandMarked</dd>
<dt>label</dt><dd>Id Band Marked</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time | DATE-TIME | date_time | $NOW |  |  | 
| enteredBy | User Entering | POINTER | user_entering | $USERID |  |  | 

## RemovalDetails 

<dl>
<dt>id</dt><dd>RemovalDetails</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | Entered By | POINTER |  | $USERID |  |  | 
| comment | Comment | STRING |  |  |  |  | 

## Comment 

<dl>
<dt>id</dt><dd>Comment</dd>
<dt>label</dt><dd>Comment</dd>
</dl>

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| dateTimeEntered | Date/Time Comment Entered | DATE-TIME |  | $NOW |  |  | 
| enteredBy | User Entering | POINTER |  | $USERID |  |  | 
| comment | Comment | STRING |  |  |  | REQUIRED, UPDATE | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:16 pm</p>{:/}