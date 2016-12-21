
##[VDM](TableOfContent.md) --> Adverse_Reaction_Assessment-120_86 

 property | value 
--- | --- 
 id | Adverse_Reaction_Assessment-120_86
 fmId | 120.86
 label | Adverse Reaction Assessment
 location | ^GMR(120.86,
 description | This file is a listing of all the patients who have been asked about\rallergies/adverse reactions. It contains a pointer to File 2 (PATIENT), a\rflag to indicate if the patient has or does not have an Allergy/Adverse\rReaction, the person making the assessment and the date/time of the\rassessment.

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | This is the patient who has been asked about allergies/adverse reactions. | POINTER |  | REQUIRED, INDEXED | {id:Patient-2} | 
| reaction_assessment | 1 | Reaction Assessment | This field indicates if the patient has a reaction on file or not. | BOOLEAN |  |  | {false:0,true:1} | 
| assessing_user | 2 | Assessing User | This field contains the name of the user who made the last reaction\rassessment for this patient. | POINTER |  |  | {id:New_Person-200} | 
| assessment_date_time | 3 | Assessment Date/time | This field contains the date/time of the last reaction assessment for\rthis patient. | DATE-TIME |  |  |  | 