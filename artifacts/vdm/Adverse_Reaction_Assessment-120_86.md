---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Adverse_Reaction_Assessment-120_86 

 property | value 
--- | --- 
 id | Adverse_Reaction_Assessment-120_86
 fmId | 120.86
 label | Adverse Reaction Assessment
 location | ^GMR(120.86,
 description | {::nomarkdown}This file is a listing of all the patients who have been asked about<br/>allergies/adverse reactions. It contains a pointer to File 2 (PATIENT), a<br/>flag to indicate if the patient has or does not have an Allergy/Adverse<br/>Reaction, the person making the assessment and the date/time of the<br/>assessment.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the patient who has been asked about allergies/adverse reactions.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| reaction_assessment | 1 | Reaction Assessment | {::nomarkdown}This field indicates if the patient has a reaction on file or not.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| assessing_user | 2 | Assessing User | {::nomarkdown}This field contains the name of the user who made the last reaction<br/>assessment for this patient.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| assessment_date_time | 3 | Assessment Date/time | {::nomarkdown}This field contains the date/time of the last reaction assessment for<br/>this patient.{:/} | DATE-TIME |  |  |  | 




 Generated on January 13th 2017, 6:16:11 am