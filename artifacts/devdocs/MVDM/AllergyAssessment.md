---
layout: default
title: MVDM
---

#### [Developer Documentation](../index) &#187; [MVDM](TableOfContents) &#187; AllergyAssessment<br/>
<a name="top"></a>
# AllergyAssessment

### Allergy Assessment

No Description

**Fileman ID:** 120.86

**Base VDM Class:** [Adverse_Reaction_Assessment-120_86](../VDM/Adverse_Reaction_Assessment-120_86)

## Property Summary

**Property Count:** 4

Type | Count
--- | ---
POINTER | 2
BOOLEAN | 1
DATE-TIME | 1

**Sub-Object Count:** 0


## Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | name |  | REQUIRED | Patient
**Has Reactions**{::nomarkdown}<pre><code>  hasReactions</code></pre>{:/} | BOOLEAN | reaction_assessment | false | UPDATE | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | assessing_user | $USERID |  | Person
**Date Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | assessment_date_time | $NOW |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}