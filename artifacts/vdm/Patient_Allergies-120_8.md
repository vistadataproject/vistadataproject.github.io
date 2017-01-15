---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Patient_Allergies-120_8 

 property | value 
--- | --- 
 id | Patient_Allergies-120_8
 fmId | 120.8
 label | Patient Allergies
 location | ^GMR(120.8,
 description | {::nomarkdown}Contains patient allergy/adverse reaction information.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| patient | .01 | Patient | {::nomarkdown}This is the patient to whom this allergy/adverse reaction pertains.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| reactant | .02 | Reactant | {::nomarkdown}This is the agent to which the patient had this reaction.  This is the <br/>name of the reactant and will be the result of a look up on either the GMR<br/>Allergies (120.82), National Drug (50.6), Drug Ingredients (50.416), <br/>Local Drug (50) or VA Drug Class (50.605) files.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| gmr_allergy | 1 | GMR Allergy | {::nomarkdown}This field is a variable pointer to help relate this allergy to some<br/>record in one of the files to which this field points.  The files that are<br/>pointed to are the GMR Allergies (120.82) file, National Drug (50.6) file,<br/>Drug (50) file, Drug Ingredients (50.416) file and VA Drug Class<br/>(50.605) file.{:/} | POINTER |  |  | undefined | 
| drug_ingredients | 2 | Drug Ingredients | {::nomarkdown}List of drug ingredients to which patient had reaction for this<br/>allergy/adverse reaction.{:/} | [POINTER] |  |  | {id:Drug_Ingredients-50_416} | 
| drug_classes | 3 | Drug Classes | {::nomarkdown}List of VA drug classes to which patient had reaction for this<br/>allergy/adverse reaction.{:/} | [POINTER] |  |  | {id:VA_Drug_Class-50_605} | 
| allergy_type | 3.1 | Allergy Type | {::nomarkdown}This field contains the type(s) for this causative agent.  The user can<br/>enter the type(s) separated by commas, or the following codes:  D=Drug,<br/>F=Food, O=Other.  If codes are used, do not use commas to separate multiple<br/>codes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D or DF or<br/>OTHER.{:/} | STRING |  | REQUIRED |  | 
| origination_date_time | 4 | Origination Date/time | {::nomarkdown}Date/time this allergy/adverse reaction was entered into the system.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| originator | 5 | Originator | {::nomarkdown}Person who entered this allergy/adverse reaction into the system.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| observed_historical | 6 | Observed/historical | {::nomarkdown}Indicates whether this allergy/adverse reaction has been observed by some<br/>personnel, or if it is historical data gathered about the patient.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>o</dt><dd>OBSERVED</dd><dt>h</dt><dd>HISTORICAL</dd></dl>{:/} | 
| reportable | 7 | *reportable | {::nomarkdown}This field will allow the data in this file to be unreportable to other<br/>packages.  Examples of this include drug-drug interactions which do not<br/>have to be shown as allergies/adverse reactions.<br/>   <br/>Note: This field is no longer supported.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| reactions | 10 | Reactions | {::nomarkdown}These are the reactions observed for this allergy/adverse reaction.{:/} | [OBJECT] |  |  | [Reactions-120_81](#Reactions-120_81)  | 
| chart_marked | 13 | Chart Marked | {::nomarkdown}A list of those people who indicate that the patient's chart has been<br/>marked for this reactant.{:/} | [OBJECT] |  |  | [Chart_Marked-120_813](#Chart_Marked-120_813)  | 
| id_band_marked | 14 | Id Band Marked | {::nomarkdown}A list of those people who indicated that the patient's ID band has been<br/>marked for this reactant.{:/} | [OBJECT] |  |  | [Id_Band_Marked-120_814](#Id_Band_Marked-120_814)  | 
| originator_sign_off | 15 | Originator Sign Off | {::nomarkdown}Indicates whether the originator of this allergy/adverse reaction signed off on it, so<br/>that it may be verified.  An allergy/adverse reaction that is not signed<br/>off is not part of the patient's reportable reactions.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| mechanism | 17 | Mechanism | {::nomarkdown}This field indicates the mechanism of the reaction.<br/>  {:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>P</dt><dd>PHARMACOLOGIC</dd><dt>U</dt><dd>UNKNOWN</dd><dt>A</dt><dd>ALLERGY</dd></dl>{:/} | 
| verified | 19 | Verified | {::nomarkdown}Indicates whether this allergy has been verified by a verifier.  The data in this field<br/>will only get put in place if the verifier has signed off using the<br/>electronic signature.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| verification_date_time | 20 | Verification Date/time | {::nomarkdown}The date/time this allergy/adverse reaction has been verified.{:/} | DATE-TIME |  | INDEXED |  | 
| verifier | 21 | Verifier | {::nomarkdown}The verifier of the allergy/adverse reaction.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| entered_in_error | 22 | Entered In Error | {::nomarkdown}Indicates if this allergy was entered in error.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| date_time_entered_in_error | 23 | Date/time Entered In Error | {::nomarkdown}The date/time the allergy/adverse reaction was entered in error.{:/} | DATE-TIME |  |  |  | 
| user_entering_in_error | 24 | User Entering In Error | {::nomarkdown}The person who entered this allergy/adverse reaction in error.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| comments | 26 | Comments | {::nomarkdown}List of comments entered about this reaction.{:/} | [OBJECT] |  |  | [Comments-120_826](#Comments-120_826)  | 

## <a name="Reactions-120_81"></a>Reactions-120_81 

 property | value 
--- | --- 
 id | Reactions-120_81
 label | Reactions

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reaction | .01 | Reaction | {::nomarkdown}One of the reactions for this allergy/adverse reaction.{:/} | POINTER |  | REQUIRED, INDEXED | Sign_symptoms-120_83 | 
| other_reaction | 1 | Other Reaction | {::nomarkdown}If this reaction cannot be found in the Sign/Symptoms (120.83) file, then<br/>the free text of what the user typed in will be here, and the GMR Reaction<br/>of OTHER will be the value of the Name field.<br/> <br/>Once the SIGNS/SYMPTOMS file is standardized then this field will<br/>no longer be needed as all entries will appear in file 120.83 and<br/>free text entries will no longer be allowed.{:/} | STRING |  |  |  | 
| entered_by | 2 | Entered By | {::nomarkdown}The person who entered this reaction into the system.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_entered | 3 | Date Entered | {::nomarkdown}This is where the user would enter the date that the reaction<br/>(Sign/Symptom) occurred or was entered into the computer.{:/} | DATE-TIME |  |  |  | 

## <a name="Chart_Marked-120_813"></a>Chart_Marked-120_813 

 property | value 
--- | --- 
 id | Chart_Marked-120_813
 label | Chart Marked

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time | .01 | Date/time | {::nomarkdown}This field contains the date/time the user indicated to ART that the<br/>patient's chart was marked for this reactant.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | {::nomarkdown}This is the user who indicated that the chart was marked.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Id_Band_Marked-120_814"></a>Id_Band_Marked-120_814 

 property | value 
--- | --- 
 id | Id_Band_Marked-120_814
 label | Id Band Marked

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time | .01 | Date/time | {::nomarkdown}This is the date/time the user indicated to the ATS that the patient's ID<br/>Band was marked for this reactant.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | {::nomarkdown}This is the user who indicated the ID band was marked.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

## <a name="Comments-120_826"></a>Comments-120_826 

 property | value 
--- | --- 
 id | Comments-120_826
 label | Comments

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_comment_entered | .01 | Date/time Comment Entered | {::nomarkdown}This field is the date/time this comment was entered.  This field is<br/>automatically filled by the system when a user enters a comment.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| user_entering | 1 | User Entering | {::nomarkdown}This field tracks the user who entered this comment.  The field is<br/>automatically stuffed when that user enters a comment.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| comment_type | 1.5 | Comment Type | {::nomarkdown}This field indicates the type of comments. If this field is<br/>answered \V\, then these comments are verifier entered.  If this field is<br/>answered \O\, then these are observer comments.  If this field is answered<br/>\E\, then these are entered in error comments.{:/} | ENUMERATION |  | INDEXED | {::nomarkdown}<dl><dt>O</dt><dd>OBSERVED</dd><dt>E</dt><dd>ERRORED</dd><dt>V</dt><dd>VERIFIED</dd></dl>{:/} | 
| comments | 2 | Comments | {::nomarkdown}This field contains comments that were entered.<br/>                                            <br/>                                              {:/} | STRING |  |  |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:58 am</p>{:/}