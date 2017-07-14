---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Adverse_Reaction_Assessment-120_86<br/>
<a name="top"></a>
# Adverse Reaction Assessment (120.86)
This file is a listing of all the patients who have been asked about allergies/adverse reactions. It contains a pointer to File 2 (PATIENT), a flag to indicate if the patient has or does not have an Allergy/Adverse Reaction, the person making the assessment and the date/time of the assessment.

**Global:** ^GMR(120.86,

**Domain:** Allergies

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the patient who has been asked about allergies/adverse reactions. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**Reaction Assessment**{::nomarkdown}<pre><code>  reaction_assessment</code></pre>{:/} | 1 | This field indicates if the patient has a reaction on file or not. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Assessing User**{::nomarkdown}<pre><code>  assessing_user</code></pre>{:/} | 2 | This field contains the name of the user who made the last reaction<br/>assessment for this patient. | POINTER |  | [New_Person-200](New_Person-200)
**Assessment Date/time**{::nomarkdown}<pre><code>  assessment_date_time</code></pre>{:/} | 3 | This field contains the date/time of the last reaction assessment for<br/>this patient. | DATE-TIME |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}