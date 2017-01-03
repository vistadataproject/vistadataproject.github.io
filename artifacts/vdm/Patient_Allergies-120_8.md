
## [VDM](TableOfContent.md) --> Patient_Allergies-120_8 

 property | value 
--- | --- 
 id | Patient_Allergies-120_8
 fmId | 120.8
 label | Patient Allergies
 location | ^GMR(120.8,
 description | Contains patient allergy/adverse reaction information.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| patient | .01 | Patient | This is the patient to whom this allergy/adverse reaction pertains. | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| reactant | .02 | Reactant | This is the agent to which the patient had this reaction.  This is the \rname of the reactant and will be the result of a look up on either the GMR\rAllergies (120.82), National Drug (50.6), Drug Ingredients (50.416), \rLocal Drug (50) or VA Drug Class (50.605) files. | STRING |  | REQUIRED, INDEXED |  | 
| gmr_allergy | 1 | GMR Allergy | This field is a variable pointer to help relate this allergy to some\rrecord in one of the files to which this field points.  The files that are\rpointed to are the GMR Allergies (120.82) file, National Drug (50.6) file,\rDrug (50) file, Drug Ingredients (50.416) file and VA Drug Class\r(50.605) file. | POINTER |  |  | [{id:GMR_Allergies-120_82},{id:VA_Generic-50_6},{id:Drug-50},{id:Drug_Ingredients-50_416},{id:VA_Drug_Class-50_605}] | 
| drug_ingredients | 2 | Drug Ingredients | List of drug ingredients to which patient had reaction for this\rallergy/adverse reaction. | [POINTER] |  |  | {id:Drug_Ingredients-50_416} | 
| drug_classes | 3 | Drug Classes | List of VA drug classes to which patient had reaction for this\rallergy/adverse reaction. | [POINTER] |  |  | {id:VA_Drug_Class-50_605} | 
| allergy_type | 3.1 | Allergy Type | This field contains the type(s) for this causative agent.  The user can\renter the type(s) separated by commas, or the following codes:  D=Drug,\rF=Food, O=Other.  If codes are used, do not use commas to separate multiple\rcodes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D or DF or\rOTHER. | STRING |  | REQUIRED |  | 
| origination_date_time | 4 | Origination Date/time | Date/time this allergy/adverse reaction was entered into the system. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| originator | 5 | Originator | Person who entered this allergy/adverse reaction into the system. | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| observed_historical | 6 | Observed/historical | Indicates whether this allergy/adverse reaction has been observed by some\rpersonnel, or if it is historical data gathered about the patient. | ENUMERATION |  | REQUIRED | <dl><dt>o</dt><dd>OBSERVED</dd><dt>h</dt><dd>HISTORICAL</dd></dl> | 
| reportable | 7 | *reportable | This field will allow the data in this file to be unreportable to other\rpackages.  Examples of this include drug-drug interactions which do not\rhave to be shown as allergies/adverse reactions.\r   \rNote: This field is no longer supported. | BOOLEAN |  |  |  | 
| reactions | 10 | Reactions | These are the reactions observed for this allergy/adverse reaction. | [OBJECT] |  |  | [Reactions-120_81](#reactions-120_81)  | 
| chart_marked | 13 | Chart Marked | A list of those people who indicate that the patient's chart has been\rmarked for this reactant. | [OBJECT] |  |  | [Chart_Marked-120_813](#chart_marked-120_813)  | 
| id_band_marked | 14 | Id Band Marked | A list of those people who indicated that the patient's ID band has been\rmarked for this reactant. | [OBJECT] |  |  | [Id_Band_Marked-120_814](#id_band_marked-120_814)  | 
| originator_sign_off | 15 | Originator Sign Off | Indicates whether the originator of this allergy/adverse reaction signed off on it, so\rthat it may be verified.  An allergy/adverse reaction that is not signed\roff is not part of the patient's reportable reactions. | BOOLEAN |  |  | {false:0,true:1} | 
| mechanism | 17 | Mechanism | This field indicates the mechanism of the reaction.\r   | ENUMERATION |  |  | <dl><dt>P</dt><dd>PHARMACOLOGIC</dd><dt>U</dt><dd>UNKNOWN</dd><dt>A</dt><dd>ALLERGY</dd></dl> | 
| verified | 19 | Verified | Indicates whether this allergy has been verified by a verifier.  The data in this field\rwill only get put in place if the verifier has signed off using the\relectronic signature. | BOOLEAN |  |  | {false:0,true:1} | 
| verification_date_time | 20 | Verification Date/time | The date/time this allergy/adverse reaction has been verified. | DATE-TIME |  | INDEXED |  | 
| verifier | 21 | Verifier | The verifier of the allergy/adverse reaction. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| entered_in_error | 22 | Entered In Error | Indicates if this allergy was entered in error. | BOOLEAN |  |  | {true:1} | 
| date_time_entered_in_error | 23 | Date/time Entered In Error | The date/time the allergy/adverse reaction was entered in error. | DATE-TIME |  |  |  | 
| user_entering_in_error | 24 | User Entering In Error | The person who entered this allergy/adverse reaction in error. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| comments | 26 | Comments | List of comments entered about this reaction. | [OBJECT] |  |  | [Comments-120_826](#comments-120_826)  | 

## Reactions-120_81 

 property | value 
--- | --- 
 id | Reactions-120_81
 label | Reactions

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reaction | .01 | Reaction | One of the reactions for this allergy/adverse reaction. | POINTER |  | REQUIRED, INDEXED | {id:Sign_symptoms-120_83} | 
| other_reaction | 1 | Other Reaction | If this reaction cannot be found in the Sign/Symptoms (120.83) file, then\rthe free text of what the user typed in will be here, and the GMR Reaction\rof OTHER will be the value of the Name field.\r \rOnce the SIGNS/SYMPTOMS file is standardized then this field will\rno longer be needed as all entries will appear in file 120.83 and\rfree text entries will no longer be allowed. | STRING |  |  |  | 
| entered_by | 2 | Entered By | The person who entered this reaction into the system. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_entered | 3 | Date Entered | This is where the user would enter the date that the reaction\r(Sign/Symptom) occurred or was entered into the computer. | DATE-TIME |  |  |  | 

## Chart_Marked-120_813 

 property | value 
--- | --- 
 id | Chart_Marked-120_813
 label | Chart Marked

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time | .01 | Date/time | This field contains the date/time the user indicated to ART that the\rpatient's chart was marked for this reactant. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | This is the user who indicated that the chart was marked. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## Id_Band_Marked-120_814 

 property | value 
--- | --- 
 id | Id_Band_Marked-120_814
 label | Id Band Marked

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time | .01 | Date/time | This is the date/time the user indicated to the ATS that the patient's ID\rBand was marked for this reactant. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | This is the user who indicated the ID band was marked. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## Comments-120_826 

 property | value 
--- | --- 
 id | Comments-120_826
 label | Comments

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_comment_entered | .01 | Date/time Comment Entered | This field is the date/time this comment was entered.  This field is\rautomatically filled by the system when a user enters a comment. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | This field tracks the user who entered this comment.  The field is\rautomatically stuffed when that user enters a comment. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| comment_type | 1.5 | Comment Type | This field indicates the type of comments. If this field is\ranswered \V\, then these comments are verifier entered.  If this field is\ranswered \O\, then these are observer comments.  If this field is answered\r\E\, then these are entered in error comments. | ENUMERATION |  | INDEXED | <dl><dt>O</dt><dd>OBSERVED</dd><dt>E</dt><dd>ERRORED</dd><dt>V</dt><dd>VERIFIED</dd></dl> | 
| comments | 2 | Comments | This field contains comments that were entered.\r                                            \r                                               | STRING |  |  |  | 