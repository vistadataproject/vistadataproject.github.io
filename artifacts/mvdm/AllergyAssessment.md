---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; AllergyAssessment 

 property | value 
--- | --- 
 id | AllergyAssessment
 label | Allergy Assessment
 description | 
 fmIdForId | 120.86
 baseVDMClass | [Adverse_Reaction_Assessment-120_86](../vdm/Adverse_Reaction_Assessment-120_86)
 fromVDMQueries | [{vdmId:Adverse_Reaction_Assessment-120_86,query:DESCRIBE $ID}]
 fromVDMList | SELECT 120_86
 fromVDMListPerPatient | SELECT 120_86 FILTER(.01=$PID)

### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | name |  | [Patient](Patient.md) | REQUIRED | 
| hasReactions |  | BOOLEAN | reaction_assessment | false | {::nomarkdown}<dl></dl>{:/} | UPDATE | 
| enteredBy |  | POINTER | assessing_user | $USERID | Person |  | 
| dateTimeEntered |  | DATE-TIME | assessment_date_time | $NOW |  |  | 




 Generated on January 13th 2017, 6:16:06 am