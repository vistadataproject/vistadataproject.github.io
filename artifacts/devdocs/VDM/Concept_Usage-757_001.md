---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Concept_Usage-757_001
# Concept Usage (757.001)
This file records the usage of concepts by applications performing lookups using the Special Lookup Routines provided with the Lexicon Utility.  A listing of concept usage in decending order may be found at the "AF" index.

<dl>
<dt>Global</dt><dd>^LEX(757.001,</dd>
<dt>Domain</dt><dd>Problems</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Major Concept**{::nomarkdown}<pre><code>  major_concept</code></pre>{:/} | .01 | This is a pointer to the Major Concept (file #757) and used to link the concept<br/>frequency of use back to the Major Concept. | POINTER | INDEXED<br/>REQUIRED | [Major_Concept_Map-757](Major_Concept_Map-757)
**Originating Value**{::nomarkdown}<pre><code>  originating_value</code></pre>{:/} | 1 | It was necessary to "seed" this file prior to export.  This field represents<br/>the original (exported) value of the frequency of use (Usage, field #2).  To<br/>obtain the actual frequency of use, this value must be subtracted from the <br/>Frequency field (#2). | NUMERIC | REQUIRED | 
**Frequency**{::nomarkdown}<pre><code>  frequency</code></pre>{:/} | 2 | This value is incremented each time the user selects a concept from the Lexicon<br/>using the Special Lookup Routines supplied with the Lexicon Utility.  Over time,<br/>it will show the frequency of use of each of the concepts contained in the<br/>Lexicon.  Additionally, it is used to order the selection list in the Special<br/>Lookup Routines, placing the most frequently used concepts at the top of the<br/>list. | NUMERIC | REQUIRED | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}