---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Problem_Selection_Category_Contents-125_12 

<dl>
<dt>id</dt><dd>Problem_Selection_Category_Contents-125_12</dd>
<dt>fmId</dt><dd>125.12</dd>
<dt>label</dt><dd>Problem Selection Category Contents</dd>
<dt>location</dt><dd>^GMPL(125.12,</dd>
<dt>description</dt><dd>This file contains the problems that make up the categories defined in<br/>file #125.11; these are groups of commonly selected, similar problems.<br/>Each entry in this file links one problem to a single category, and<br/>may have a sequence number and ICD code assigned to it.  Problems may<br/>appear in more than one category.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| category | .01 | Category | {::nomarkdown}This is the problem category that this problem entry belongs to.{:/} | POINTER |  | REQUIRED, INDEXED | Problem_Selection_Category-125_11 | 
| sequence_number | 1 | Sequence Number | {::nomarkdown}This is a number which determines the order this problem will appear<br/>within this group; up to two decimal places may be used.  Problems<br/>in a selection list will be automatically numbered for display and<br/>selection in whole numbers, beginning with 1.{:/} | NUMERIC |  |  |  | 
| problem | 2 | Problem | {::nomarkdown}This is a problem from the Clinical Lexicon Utility, which is to be<br/>included in this group.{:/} | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 
| display_text | 3 | Display Text | {::nomarkdown}This is the text of the problem as it is to appear on the selection list<br/>display; if a suitable match was not found during a search of the Clinical<br/>Lexicon Utility and an 'Unresolved' entry was returned, this will be the<br/>text as specified by the user.{:/} | STRING |  |  |  | 
| code | 4 | Code | {::nomarkdown}This is a code which is to be displayed with the text of this problem;<br/>it may be from any coding system, but will generally be assumed to be<br/>an ICD Diagnosis in the Problem List context.{:/} | STRING |  |  |  | 
| snomed_ct_concept_code | 5 | Snomed Ct Concept Code | {::nomarkdown}A clinical idea to which a unique ConceptID has been assigned in SNOMED<br/>CT. Each Concept is represented by a row in the Concepts Table.{:/} | STRING |  |  |  | 
| snomed_ct_designation_code | 6 | Snomed Ct Designation Code | {::nomarkdown}A single SNOMED CT Concept may have multiple Designations, where a<br/>Designation may be considered an alternate way of expressing the concept.<br/>Synonyms, lexical variants, abbreviations are all different types of<br/>designations. In many cases, a problem (as reported by the patient) and a<br/>finding indicating a problem will share the same concept and concept code<br/>(e.g., abdominal pain), but will have different designation codes (i.e.,<br/>the generic \abdominal pain\ and \abdominal pain (finding)\ share the<br/>concept code 21522001, but they have the designation codes 36112013 and<br/>750827015 respectively.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:18:28 am</p>{:/}