---
layout: default
title: MVDM documentation
---

## [MVDM](TableOfContent.md) &#8594; AllergyAssessment 

<dl>
<dt>id</dt><dd>AllergyAssessment</dd>
<dt>label</dt><dd>Allergy Assessment</dd>
<dt>fmIdForId</dt><dd>120.86</dd>
<dt>baseVDMClass</dt><dd><a href="../vdm/Adverse_Reaction_Assessment-120_86">Adverse_Reaction_Assessment-120_86</a></dd>
<dt>fromVDMQueries</dt><dd>[{vdmId:Adverse_Reaction_Assessment-120_86,query:DESCRIBE $ID}]</dd>
<dt>fromVDMList</dt><dd>SELECT 120_86</dd>
<dt>fromVDMListPerPatient</dt><dd>SELECT 120_86 FILTER(.01=$PID)</dd>
</dl>
Total # of Subobjects: 0

Total # of Properties: 4
 

 Property Type | Numeric 
 --- | --- 
BOOLEAN | 1
DATE-TIME | 1
POINTER | 2



### Properties

| id | label | datatype | fromVDM | default | range | attributes | 
| --- | --- | --- | --- | --- | --- | --- | 
| patient |  | POINTER | name |  | [Patient](Patient.md) | REQUIRED | 
| hasReactions |  | BOOLEAN | reaction_assessment | false | {::nomarkdown}<dl></dl>{:/} | UPDATE | 
| enteredBy |  | POINTER | assessing_user | $USERID | Person |  | 
| dateTimeEntered |  | DATE-TIME | assessment_date_time | $NOW |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:16 pm</p>{:/}