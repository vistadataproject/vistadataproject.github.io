---
layout: default
title: VPR Model
---

__NOTE - DRAFT 1 with many more details to come__

Model __VPR__ has __23__ top classes, __9__ contained classes and __402__ properties.

\# | Name | \# Properties | \# Contained Classes | FM Files | Domain Matches
--- | --- | --- | --- | --- | ---
1 | Accession | 23 | 1 | 60, 68, 63.04 | accession
2 | Appointment | 12 | 0 | 2.98 | appointment
3 | Consult | 11 | 0 | 123 | consult
4 | Demographic | 27 | 0 | 2 | demograph, patient
5 | Document | 22 | 0 | 8925 | document
6 | Flag | 11 | 0 | 26.13 | flag
7 | HealthFactor | 8 | 0 | 9000010.23 | factor
8 | Immunization | 12 | 0 | 9000010.11 | immunization
9 | InsurancePolicy | 10 | 0 |  | polic, insur
10 | Item | 7 | 0 | 9000010.12, 9000010.13, 9000010.16 | fim, function, skin, exam, educ
11 | Lab | 20 | 0 | 60, 68, 63.04 | lab
12 | Med | 51 | 2 | 52 | med, pharm
13 | Observation | 16 | 0 | 704.117 | observ
14 | Order | 13 | 0 | 100 | order
15 | Panel | 20 | 1 | 60, 68, 63.04 | panel
16 | Problem | 22 | 0 | 9000011 | problem
17 | Procedure | 16 | 0 | 702 | procedure
18 | Radiology | 17 | 0 | 70 | rad, xray
19 | Reaction | 27 | 4 | 120.8, 120.85 | allerg, reaction
20 | Reminder | 9 | 0 | 811.9 | reminder
21 | Surgery | 13 | 0 | 130 | surg
22 | Visit | 19 | 0 |  | visit
23 | Vital | 16 | 1 | 120.5 | vital


## 1. Accession

\# | Name | Type | Details
--- | --- | --- | ---
1 | collected |  | 
2 | comment |  | 
3 | document |  | 
4 | facility |  | 
5 | groupName |  | 
6 | id |  | 
7 | name |  | 
8 | resulted |  | 
9 | sample |  | 
10 | specimen |  | 
11 | status |  | 
12 | type |  | 
13 | value |  | 
14 | labOrderID |  | 



## 2. Appointment

\# | Name | Type | Details
--- | --- | --- | ---
1 | apptStatus |  | 
2 | clinicStop |  | 
3 | dateTime |  | 
4 | facility |  | 
5 | id |  | 
6 | location |  | 
7 | patientClass |  | 
8 | provider | [OBJECT] | 
9 | service |  | 
10 | serviceCategory |  | 
11 | type |  | 
12 | visitString |  | 



## 3. Consult

\# | Name | Type | Details
--- | --- | --- | ---
1 | document | [OBJECT] | 
2 | facility |  | 
3 | id |  | 
4 | name |  | 
5 | orderID |  | 
6 | procedure |  | 
7 | requested |  | 
8 | result |  | 
9 | service |  | 
10 | status |  | 
11 | type |  | 



## 4. Demographic

\# | Name | Type | Details
--- | --- | --- | ---
1 | address | OBJECT | 
2 | alias | [OBJECT] | 
3 | bid |  | 
4 | died | DATETIME | 
5 | disability | [OBJECT] | 
6 | dob | DATETIME | 
7 | ethnicity | [OBJECT] | 
8 | exposures |  | 
9 | familyName |  | 
10 | fullName |  | 
11 | gender |  | 
12 | givenNames |  | 
13 | icn |  | 
14 | lrdfn |  | 
15 | maritalStatus |  | 
16 | race | [OBJECT] | 
17 | religion |  | 
18 | sc |  | 
19 | scPercent |  | 
20 | ssn |  | 
21 | support | [OBJECT] | 
22 | or | [OBJECT] | 
23 | telecom |  | 
24 | veteran |  | 
25 | flag | [OBJECT] | 
26 | sensitive |  | 
27 | facility | [OBJECT] | 



## 5. Document

\# | Name | Type | Details
--- | --- | --- | ---
1 | category |  | 
2 | clinician | [OBJECT] | 
3 | role |  | 
4 | content |  | 
5 | documentClass |  | 
6 | encounter |  | 
7 | facility |  | 
8 | id |  | 
9 | localTitle |  | 
10 | loinc |  | 
11 | nationalTitle |  | 
12 | nationalTitleRole |  | 
13 | nationalTitleService |  | 
14 | nationalTitleSetting |  | 
15 | nationalTitleSubject |  | 
16 | nationalTitleType |  | 
17 | parent |  | 
18 | referenceDateTime |  | 
19 | status |  | 
20 | subject |  | 
21 | type |  | 
22 | images |  | 



## 6. Flag

\# | Name | Type | Details
--- | --- | --- | ---
1 | category |  | 
2 | content |  | 
3 | id |  | 
4 | name |  | 
5 | origSite |  | 
6 | ownSite |  | 
7 | reviewDue |  | 
8 | type |  | 
9 | approvedBy |  | 
10 | assigned |  | 
11 | document |  | 



## 7. HealthFactor

\# | Name | Type | Details
--- | --- | --- | ---
1 | category |  | 
2 | comment |  | 
3 | encounter |  | 
4 | facility |  | 
5 | id |  | 
6 | name |  | 
7 | recorded |  | 
8 | severity |  | 



## 8. Immunization

\# | Name | Type | Details
--- | --- | --- | ---
1 | administered |  | 
2 | comment |  | 
3 | contraindicated |  | 
4 | cpt |  | 
5 | encounter |  | 
6 | facility |  | 
7 | id |  | 
8 | location |  | 
9 | name |  | 
10 | provider |  | 
11 | reaction |  | 
12 | series |  | 



## 9. InsurancePolicy

\# | Name | Type | Details
--- | --- | --- | ---
1 | company | OBJECT | 
2 | effectiveDate |  | 
3 | expirationDate |  | 
4 | facility |  | 
5 | groupName |  | 
6 | groupNumber |  | 
7 | insuranceType |  | 
8 | memberID |  | 
9 | relationship | ENUMERATION | 
10 | subscriber | OBJECT | 



## 10. Item

\# | Name | Type | Details
--- | --- | --- | ---
1 | comment |  | 
2 | dateTime |  | 
3 | encounter |  | 
4 | facility |  | 
5 | id |  | 
6 | name |  | 
7 | result |  | 



## 11. Lab

\# | Name | Type | Details
--- | --- | --- | ---
1 | collected |  | 
2 | comment |  | 
3 | facility |  | 
4 | groupName |  | 
5 | interpretation |  | 
6 | loinc |  | 
7 | result |  | 
8 | resulted |  | 
9 | sample |  | 
10 | specimen |  | 
11 | status |  | 
12 | type |  | 
13 | vuid |  | 
14 | labOrderID |  | 
15 | orderID |  | 
16 | high |  | 
17 | localName |  | 
18 | low |  | 
19 | test |  | 
20 | units |  | 



## 12. Med

\# | Name | Type | Details
--- | --- | --- | ---
1 | currentProvider |  | 
2 | daysSupply |  | 
3 | dose |  | 
4 | expires |  | 
5 | facility |  | 
6 | fill | [OBJECT] | 
7 | fillsAllowed |  | 
8 | fillCost |  | 
9 | fillsRemaining |  | 
10 | form |  | 
11 | id |  | 
12 | IMO |  | 
13 | ivLimit |  | 
14 | lastFilled |  | 
15 | location |  | 
16 | name |  | 
17 | ordered |  | 
18 | orderID |  | 
19 | orderingProvider |  | 
20 | parent |  | 
21 | pharmacist |  | 
22 | prescription |  | 
23 | product |  | 
24 | ptInstructions |  | 
25 | quantity |  | 
26 | rate |  | 
27 | routing |  | 
28 | sig |  | 
29 | start |  | 
30 | status |  | 
31 | stop |  | 
32 | supply |  | 
33 | type |  | 
34 | vaStatus |  | 
35 | vaType |  | 
36 | medID |  | 



## 13. Observation

\# | Name | Type | Details
--- | --- | --- | ---
1 | comment |  | 
2 | entered |  | 
3 | facility |  | 
4 | location |  | 
5 | name |  | 
6 | observed |  | 
7 | range |  | 
8 | status |  | 
9 | value |  | 
10 | vuid |  | 
11 | bodySite |  | 
12 | method |  | 
13 | position |  | 
14 | product |  | 
15 | quality |  | 
16 | units |  | 



## 14. Order

\# | Name | Type | Details
--- | --- | --- | ---
1 | content |  | 
2 | entered |  | 
3 | facility |  | 
4 | group |  | 
5 | id |  | 
6 | location |  | 
7 | name |  | 
8 | provider |  | 
9 | service |  | 
10 | start |  | 
11 | status |  | 
12 | stop |  | 
13 | acknowledgement | [OBJECT] | 



## 15. Panel

\# | Name | Type | Details
--- | --- | --- | ---
1 | order |  | 
2 | collected |  | 
3 | comment |  | 
4 | facility |  | 
5 | groupName |  | 
6 | resulted |  | 
7 | sample |  | 
8 | specimen |  | 
9 | status |  | 
10 | type |  | 
11 | value |  | 



## 16. Problem

\# | Name | Type | Details
--- | --- | --- | ---
1 | acuity |  | 
2 | code |  | 
3 | comment | [OBJECT] | 
4 | entered |  | 
5 | exposure | [OBJECT] | 
6 | facility |  | 
7 | history | ENUMERATION | 
8 | icd |  | 
9 | location |  | 
10 | name |  | 
11 | onset |  | 
12 | predecessor |  | 
13 | problemType |  | 
14 | provider |  | 
15 | removed |  | 
16 | resolved | DATETIME | 
17 | sc | BOOLEAN | 
18 | service |  | 
19 | status |  | 
20 | successor |  | 
21 | unverified | BOOLEAN | 
22 | updated | DATETIME | 



## 17. Procedure

\# | Name | Type | Details
--- | --- | --- | ---
1 | category |  | 
2 | consult |  | 
3 | dateTime |  | 
4 | document | [OBJECT] | 
5 | encounter |  | 
6 | facility |  | 
7 | hasImages |  | 
8 | id |  | 
9 | interpretation |  | 
10 | location |  | 
11 | name |  | 
12 | order |  | 
13 | provider |  | 
14 | requested |  | 
15 | status |  | 
16 | type |  | 



## 18. Radiology

\# | Name | Type | Details
--- | --- | --- | ---
1 | case |  | 
2 | category |  | 
3 | dateTime |  | 
4 | document | [OBJECT] | 
5 | encounter |  | 
6 | facility |  | 
7 | hasImages |  | 
8 | id |  | 
9 | imagingType |  | 
10 | interpretation |  | 
11 | location |  | 
12 | modifier | [OBJECT] | 
13 | name |  | 
14 | order |  | 
15 | provider |  | 
16 | status |  | 
17 | type |  | 



## 19. Reaction

\# | Name | Type | Details
--- | --- | --- | ---
1 | assessment | ENUMERATION | nka, not done
2 | comments | [OBJECT] | Contained Class 'Comment'
3 | drugClasses | [OBJECT] | Contained Class 'DrugClass'
4 | drugIngredients | [OBJECT] | Contained Class 'DrugIngredient'
5 | entered | DATETIME | 
6 | facility | POINTER | 
7 | localCode | POINTER | 
8 | mechanism | ENUMERATION | 
9 | name | STRING | 
10 | reaction | [OBJECT] | 
11 | removed |  | 
12 | source | ENUMERATION | H, O
13 | type | ENUMERATION | D, F, DF, O
14 | verified | DATETIME | 
15 | vuid | STRING | 
16 | severity | ENUMERATION | 
17 | reactions | [OBJECT] | Contained Class 'Reaction'

Contained Class 'Comment'

\# | Name | Type | Details
--- | --- | --- | ---
1 | entered |  | 
2 | enteredBy |  | 
3 | commentType |  | 
4 | commentText |  | 

Contained Class 'DrugClass'

\# | Name | Type | Details
--- | --- | --- | ---
1 | name |  | 
2 | vuid |  | 

Contained Class 'DrugIngredient'

\# | Name | Type | Details
--- | --- | --- | ---
1 | name |  | 
2 | vuid |  | 

Contained Class 'Reaction'

\# | Name | Type | Details
--- | --- | --- | ---
1 | name |  | 
2 | vuid |  | 




## 20. Reminder

\# | Name | Type | Details
--- | --- | --- | ---
1 | class |  | 
2 | due |  | 
3 | facility |  | 
4 | id |  | 
5 | lastDone |  | 
6 | name |  | 
7 | status |  | 
8 | text |  | 
9 | usage |  | 



## 21. Surgery

\# | Name | Type | Details
--- | --- | --- | ---
1 | category |  | 
2 | dateTime |  | 
3 | document | [OBJECT] | 
4 | encounter |  | 
5 | facility |  | 
6 | id |  | 
7 | name |  | 
8 | opReport |  | 
9 | provider |  | 
10 | status |  | 
11 | modifier | [OBJECT] | 
12 | otherProcedure | [OBJECT] | 
13 | type |  | 



## 22. Visit

\# | Name | Type | Details
--- | --- | --- | ---
1 | creditStopCode |  | 
2 | dateTime |  | 
3 | facility |  | 
4 | id |  | 
5 | location |  | 
6 | patientClass |  | 
7 | service |  | 
8 | serviceCategory |  | 
9 | stopCode |  | 
10 | visitString |  | 
11 | type |  | 
12 | reason |  | 
13 | provider | [OBJECT] | 
14 | document | [OBJECT] | 
15 | arrivalDateTime |  | 
16 | departureDateTime |  | 
17 | provider2 | [OBJECT] | 
18 | roomBed |  | 
19 | specialty |  | 



## 23. Vital

\# | Name | Type | Details
--- | --- | --- | ---
1 | entered | DATETIME | 
2 | facility |  | 
3 | location |  | 
4 | measurement | OBJECT | Contained Class 'Measurement'
5 | removed | [OBJECT] | 
6 | taken |  | 

Contained Class 'Measurement'

\# | Name | Type | Details
--- | --- | --- | ---
1 | id |  | 
2 | vuid |  | 
3 | name |  | 
4 | value |  | 
5 | units |  | 
6 | metricvalue |  | 
7 | metricUnits |  | 
8 | high |  | 
9 | low |  | 
10 | qualifier | [OBJECT] | 




