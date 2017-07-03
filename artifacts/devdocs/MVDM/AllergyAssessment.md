---
layout: default
title: MVDM
---

## [MVDM](TableOfContents) &#8594; AllergyAssessment
# Allergy Assessment
No Description

<dl>
<dt>File Type</dt><dd>120.86</dd>
<dt>Base VDM Class</dt><dd>Adverse_Reaction_Assessment-120_86</dd>
</dl>

### From VDM
<dl>
<dt>Queries</dt><dd>Adverse_Reaction_Assessment-120_86: <pre><code>DESCRIBE $ID</code></pre>
</dd>
<dt>List</dt><dd><pre><code>SELECT 120_86</code></pre></dd>
<dt>List Per Patient</dt><dd><pre><code>SELECT 120_86 FILTER(.01&#x3D;$PID)</code></pre></dd>
</dl>


### Property Summary

Property Count: **4**

Sub-Object Count: **0**

Type | Count
--- | ---
POINTER | 2
BOOLEAN | 1
DATE-TIME | 1

### Properties

Field | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | name |  | REQUIRED | Patient
**Has Reactions**{::nomarkdown}<pre><code>  hasReactions</code></pre>{:/} | BOOLEAN | reaction_assessment | false | UPDATE | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | assessing_user | $USERID |  | Person
**Date Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | assessment_date_time | $NOW |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}