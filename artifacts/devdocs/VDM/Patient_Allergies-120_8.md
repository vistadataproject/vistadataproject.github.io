---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Patient_Allergies-120_8
# Patient Allergies (120.8)
Contains patient allergy/adverse reaction information.

<dl>
<dt>Global</dt><dd>^GMR(120.8,</dd>
<dt>Domain</dt><dd>Allergies</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .01 | This is the patient to whom this allergy/adverse reaction pertains. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**Reactant**{::nomarkdown}<pre><code>  reactant</code></pre>{:/} | .02 | This is the agent to which the patient had this reaction.  This is the <br/>name of the reactant and will be the result of a look up on either the GMR<br/>Allergies (120.82), National Drug (50.6), Drug Ingredients (50.416), <br/>Local Drug (50) or VA Drug Class (50.605) files. | STRING | INDEXED<br/>REQUIRED | 
**GMR Allergy**{::nomarkdown}<pre><code>  gmr_allergy</code></pre>{:/} | 1 | This field is a variable pointer to help relate this allergy to some<br/>record in one of the files to which this field points.  The files that are<br/>pointed to are the GMR Allergies (120.82) file, National Drug (50.6) file,<br/>Drug (50) file, Drug Ingredients (50.416) file and VA Drug Class<br/>(50.605) file. | POINTER |  | [GMR_Allergies-120_82](GMR_Allergies-120_82)<br/>[VA_Generic-50_6](VA_Generic-50_6)<br/>[Drug-50](Drug-50)<br/>[Drug_Ingredients-50_416](Drug_Ingredients-50_416)<br/>[VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Drug Ingredients**{::nomarkdown}<pre><code>  drug_ingredients</code></pre>{:/} | 2 | List of drug ingredients to which patient had reaction for this<br/>allergy/adverse reaction. | POINTER |  | [Drug_Ingredients-50_416](Drug_Ingredients-50_416)
**Drug Classes**{::nomarkdown}<pre><code>  drug_classes</code></pre>{:/} | 3 | List of VA drug classes to which patient had reaction for this<br/>allergy/adverse reaction. | POINTER |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Allergy Type**{::nomarkdown}<pre><code>  allergy_type</code></pre>{:/} | 3.1 | This field contains the type(s) for this causative agent.  The user can<br/>enter the type(s) separated by commas, or the following codes:  D=Drug,<br/>F=Food, O=Other.  If codes are used, do not use commas to separate multiple<br/>codes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D or DF or<br/>OTHER. | STRING | REQUIRED | 
**Origination Date/time**{::nomarkdown}<pre><code>  origination_date_time</code></pre>{:/} | 4 | Date/time this allergy/adverse reaction was entered into the system. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Originator**{::nomarkdown}<pre><code>  originator</code></pre>{:/} | 5 | Person who entered this allergy/adverse reaction into the system. | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Observed/historical**{::nomarkdown}<pre><code>  observed_historical</code></pre>{:/} | 6 | Indicates whether this allergy/adverse reaction has been observed by some<br/>personnel, or if it is historical data gathered about the patient. | ENUMERATION | REQUIRED | {::nomarkdown}OBSERVED: <em><strong>o</strong></em><br/>HISTORICAL: <em><strong>h</strong></em>{:/}
***reportable**{::nomarkdown}<pre><code>  reportable</code></pre>{:/} | 7 | This field will allow the data in this file to be unreportable to other<br/>packages.  Examples of this include drug-drug interactions which do not<br/>have to be shown as allergies/adverse reactions.<br/>   <br/>Note: This field is no longer supported. | BOOLEAN | DEPRECATED | 
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | 10 | These are the reactions observed for this allergy/adverse reaction. | OBJECT |  | [Reactions-120_81](#Reactions-120_81)
**Chart Marked**{::nomarkdown}<pre><code>  chart_marked</code></pre>{:/} | 13 | A list of those people who indicate that the patient's chart has been<br/>marked for this reactant. | OBJECT |  | [Chart_Marked-120_813](#Chart_Marked-120_813)
**Id Band Marked**{::nomarkdown}<pre><code>  id_band_marked</code></pre>{:/} | 14 | A list of those people who indicated that the patient's ID band has been<br/>marked for this reactant. | OBJECT |  | [Id_Band_Marked-120_814](#Id_Band_Marked-120_814)
**Originator Sign Off**{::nomarkdown}<pre><code>  originator_sign_off</code></pre>{:/} | 15 | Indicates whether the originator of this allergy/adverse reaction signed off on it, so<br/>that it may be verified.  An allergy/adverse reaction that is not signed<br/>off is not part of the patient's reportable reactions. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Mechanism**{::nomarkdown}<pre><code>  mechanism</code></pre>{:/} | 17 | This field indicates the mechanism of the reaction.<br/>   | ENUMERATION |  | {::nomarkdown}PHARMACOLOGIC: <em><strong>P</strong></em><br/>UNKNOWN: <em><strong>U</strong></em><br/>ALLERGY: <em><strong>A</strong></em>{:/}
**Verified**{::nomarkdown}<pre><code>  verified</code></pre>{:/} | 19 | Indicates whether this allergy has been verified by a verifier.  The data in this field<br/>will only get put in place if the verifier has signed off using the<br/>electronic signature. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Verification Date/time**{::nomarkdown}<pre><code>  verification_date_time</code></pre>{:/} | 20 | The date/time this allergy/adverse reaction has been verified. | DATE-TIME | INDEXED | 
**Verifier**{::nomarkdown}<pre><code>  verifier</code></pre>{:/} | 21 | The verifier of the allergy/adverse reaction. | POINTER |  | [New_Person-200](New_Person-200)
**Entered In Error**{::nomarkdown}<pre><code>  entered_in_error</code></pre>{:/} | 22 | Indicates if this allergy was entered in error. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Date/time Entered In Error**{::nomarkdown}<pre><code>  date_time_entered_in_error</code></pre>{:/} | 23 | The date/time the allergy/adverse reaction was entered in error. | DATE-TIME |  | 
**User Entering In Error**{::nomarkdown}<pre><code>  user_entering_in_error</code></pre>{:/} | 24 | The person who entered this allergy/adverse reaction in error. | POINTER |  | [New_Person-200](New_Person-200)
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | 26 | List of comments entered about this reaction. | OBJECT |  | [Comments-120_826](#Comments-120_826)

### Subfile
#### <a name="Reactions-120_81"></a>Reactions

<dl>
<dt>ID</dt><dd>Reactions-120_81</dd>
<dt>File Type</dt><dd>120.81</dd>
<dt>Label</dt><dd>Reactions</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reaction**{::nomarkdown}<pre><code>  reaction</code></pre>{:/} | .01 | One of the reactions for this allergy/adverse reaction. | POINTER | INDEXED<br/>REQUIRED | [Sign_symptoms-120_83](Sign_symptoms-120_83)
**Other Reaction**{::nomarkdown}<pre><code>  other_reaction</code></pre>{:/} | 1 | If this reaction cannot be found in the Sign/Symptoms (120.83) file, then<br/>the free text of what the user typed in will be here, and the GMR Reaction<br/>of OTHER will be the value of the Name field.<br/> <br/>Once the SIGNS/SYMPTOMS file is standardized then this field will<br/>no longer be needed as all entries will appear in file 120.83 and<br/>free text entries will no longer be allowed. | STRING |  | 
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | 2 | The person who entered this reaction into the system. | POINTER |  | [New_Person-200](New_Person-200)
**Date Entered**{::nomarkdown}<pre><code>  date_entered</code></pre>{:/} | 3 | This is where the user would enter the date that the reaction<br/>(Sign/Symptom) occurred or was entered into the computer. | DATE-TIME |  | 

#### <a name="Chart_Marked-120_813"></a>Chart Marked

<dl>
<dt>ID</dt><dd>Chart_Marked-120_813</dd>
<dt>File Type</dt><dd>120.813</dd>
<dt>Label</dt><dd>Chart Marked</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time**{::nomarkdown}<pre><code>  date_time</code></pre>{:/} | .01 | This field contains the date/time the user indicated to ART that the<br/>patient's chart was marked for this reactant. | DATE-TIME | INDEXED<br/>REQUIRED | 
**User Entering**{::nomarkdown}<pre><code>  user_entering</code></pre>{:/} | 1 | This is the user who indicated that the chart was marked. | POINTER |  | [New_Person-200](New_Person-200)

#### <a name="Id_Band_Marked-120_814"></a>Id Band Marked

<dl>
<dt>ID</dt><dd>Id_Band_Marked-120_814</dd>
<dt>File Type</dt><dd>120.814</dd>
<dt>Label</dt><dd>Id Band Marked</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time**{::nomarkdown}<pre><code>  date_time</code></pre>{:/} | .01 | This is the date/time the user indicated to the ATS that the patient's ID<br/>Band was marked for this reactant. | DATE-TIME | INDEXED<br/>REQUIRED | 
**User Entering**{::nomarkdown}<pre><code>  user_entering</code></pre>{:/} | 1 | This is the user who indicated the ID band was marked. | POINTER |  | [New_Person-200](New_Person-200)

#### <a name="Comments-120_826"></a>Comments

<dl>
<dt>ID</dt><dd>Comments-120_826</dd>
<dt>File Type</dt><dd>120.826</dd>
<dt>Label</dt><dd>Comments</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time Comment Entered**{::nomarkdown}<pre><code>  date_time_comment_entered</code></pre>{:/} | .01 | This field is the date/time this comment was entered.  This field is<br/>automatically filled by the system when a user enters a comment. | DATE-TIME | INDEXED<br/>REQUIRED | 
**User Entering**{::nomarkdown}<pre><code>  user_entering</code></pre>{:/} | 1 | This field tracks the user who entered this comment.  The field is<br/>automatically stuffed when that user enters a comment. | POINTER |  | [New_Person-200](New_Person-200)
**Comment Type**{::nomarkdown}<pre><code>  comment_type</code></pre>{:/} | 1.5 | This field indicates the type of comments. If this field is<br/>answered "V", then these comments are verifier entered.  If this field is<br/>answered "O", then these are observer comments.  If this field is answered<br/>"E", then these are entered in error comments. | ENUMERATION | INDEXED | {::nomarkdown}OBSERVED: <em><strong>O</strong></em><br/>ERRORED: <em><strong>E</strong></em><br/>VERIFIED: <em><strong>V</strong></em>{:/}
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | 2 | This field contains comments that were entered.<br/>                                            <br/>                                               | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}