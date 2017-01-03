
## [MVDM](TableOfContent.md) --> AllergyAssessment 

 property | value 
--- | --- 
 id | AllergyAssessment
 label | Allergy Assessment
 description | 
 fmIdForId | 120.86
 baseVDMClass | [Adverse_Reaction_Assessment-120_86](../VDM/Adverse_Reaction_Assessment-120_86.md)
 fromVDMQueries | [{vdmId:Adverse_Reaction_Assessment-120_86,query:DESCRIBE $ID}]
 fromVDMList | SELECT 120_86
 fromVDMListPerPatient | SELECT 120_86 FILTER(.01=$PID)

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | name |  | [Patient](Patient.md) | REQUIRED | 
| hasReactions |  | BOOLEAN | reaction_assessment | false |  | UPDATE | 
| enteredBy |  | POINTER | assessing_user | $USERID | {id:Person} |  | 
| dateTimeEntered |  | DATE-TIME | assessment_date_time | $NOW |  |  | 