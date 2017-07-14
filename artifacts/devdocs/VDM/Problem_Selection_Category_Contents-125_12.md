---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Problem_Selection_Category_Contents-125_12<br/>
<a name="top"></a>
# Problem Selection Category Contents (125.12)
This file contains the problems that make up the categories defined in file #125.11; these are groups of commonly selected, similar problems. Each entry in this file links one problem to a single category, and may have a sequence number and ICD code assigned to it.  Problems may appear in more than one category.

**Global:** ^GMPL(125.12,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | .01 | This is the problem category that this problem entry belongs to. | POINTER | INDEXED<br/>REQUIRED | [Problem_Selection_Category-125_11](Problem_Selection_Category-125_11)
**Sequence Number**{::nomarkdown}<pre><code>  sequence_number</code></pre>{:/} | 1 | This is a number which determines the order this problem will appear<br/>within this group; up to two decimal places may be used.  Problems<br/>in a selection list will be automatically numbered for display and<br/>selection in whole numbers, beginning with 1. | NUMERIC |  | 
**Problem**{::nomarkdown}<pre><code>  problem</code></pre>{:/} | 2 | This is a problem from the Clinical Lexicon Utility, which is to be<br/>included in this group. | POINTER |  | [Expressions-757_01](Expressions-757_01)
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | 3 | This is the text of the problem as it is to appear on the selection list<br/>display; if a suitable match was not found during a search of the Clinical<br/>Lexicon Utility and an 'Unresolved' entry was returned, this will be the<br/>text as specified by the user. | STRING |  | 
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | 4 | This is a code which is to be displayed with the text of this problem;<br/>it may be from any coding system, but will generally be assumed to be<br/>an ICD Diagnosis in the Problem List context. | STRING |  | 
**Snomed Ct Concept Code**{::nomarkdown}<pre><code>  snomed_ct_concept_code</code></pre>{:/} | 5 | A clinical idea to which a unique ConceptID has been assigned in SNOMED<br/>CT. Each Concept is represented by a row in the Concepts Table. | STRING |  | 
**Snomed Ct Designation Code**{::nomarkdown}<pre><code>  snomed_ct_designation_code</code></pre>{:/} | 6 | A single SNOMED CT Concept may have multiple Designations, where a<br/>Designation may be considered an alternate way of expressing the concept.<br/>Synonyms, lexical variants, abbreviations are all different types of<br/>designations. In many cases, a problem (as reported by the patient) and a<br/>finding indicating a problem will share the same concept and concept code<br/>(e.g., abdominal pain), but will have different designation codes (i.e.,<br/>the generic "abdominal pain" and "abdominal pain (finding)" share the<br/>concept code 21522001, but they have the designation codes 36112013 and<br/>750827015 respectively. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}