---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Expressions-757_01 

 property | value 
--- | --- 
 id | Expressions-757_01
 fmId | 757.01
 label | Expressions
 location | ^LEX(757.01,
 description | {::nomarkdown}This file contains all text pertaining to the Major Concepts, Concept<br/>Synonyms,  Concept Lexical Variants, Synonymous Lexical Variants, and<br/>Modified Concepts.  It includes displayable text, distinguishing text (that<br/>portion of text that makes a modified concept different from the parent<br/>concept) and the term definitions (when available).  Searches are<br/>conducted using the special look-up routine LEXA1.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| displayable_text | .01 | Displayable Text | {::nomarkdown}This is the text which will be used to represent the expression (Major Concept,<br/>Synonym or Lexical Variant).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| major_concept | 1 | Major Concept | {::nomarkdown}Pointer to the Major Concept (file #757).  If the expression is a major<br/>concept, this pointer will be the same as the Expression pointer in the<br/>Major Concept Map file (#757).  If it is a synonym or a lexical variant it<br/>will point to it's parent major concept.  If it is a lexical variant of a<br/>synonym, it will point to the parent major concept of the synonym.{:/} | POINTER |  | REQUIRED, INDEXED | [Major_Concept_Map-757](Major_Concept_Map-757.md) | 
| type-2 | 2 | Type | {::nomarkdown}This is a pointer to the Expression Type file (#757.011).  Examples of<br/>expression types include Major Concepts, Synonyms, Lexical Variants, etc.  {:/} | POINTER |  | REQUIRED | Expression_Type-757_011 | 
| scope | 3 | Scope | {::nomarkdown}Scope - Demonstrates the relationship of the term to the Major Concept.<br/>Major Concepts, Synonyms to Major Concepts and Lexical Variants to a Major<br/>Concept are (D)irectly linked.  Lexical Variants to a Synonym of a Major<br/>Concept are (I)ndirectly linked.  Related concepts are either (B)roader in<br/>scope, (N)arrower in scope, or an (O)ther/undefined view of the Major<br/>Concept.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>B</dt><dd>BROADER VIEW</dd><dt>D</dt><dd>DIRECTLY LINKED</dd><dt>I</dt><dd>INDIRECTLY LINKED</dd><dt>R</dt><dd>RELATED VIEW</dd><dt>N</dt><dd>NARROWER VIEW</dd><dt>O</dt><dd>OTHER</dd><dt>C</dt><dd>CONTROLLED VIEW</dd></dl>{:/} | 
| form | 4 | Form | {::nomarkdown}Pointer to the Expression Form (file 757.014) which describes the lexical <br/>style of an expression.  Major Concepts adopt the general form of \MAJ\ while<br/>all other expressions describe their forms as they relate to the Major <br/>Concept (i.e., plural, singular, acronym, etc.){:/} | POINTER |  | REQUIRED | Expression_Form-757_014 | 
| distinguishing_text | 5 | Distinguishing Text | {::nomarkdown}This is the text or portion of text that distinguishes this expression from<br/>the Major Concept.  (null if the expression is the Major Concept){:/} | STRING |  |  |  | 
| definition | 6 | Definition | {::nomarkdown}Definition of an expression when available.{:/} | STRING |  |  |  | 
| negation | 7 | Negation | {::nomarkdown}This field contains words which are negated within the expression, i.e, <br/>without mention of \complication\, except \thumb\, and other than an <br/>\open wound\.  These type of negations will not be indexed in the word <br/>index, preventing erroneous search results.{:/} | [STRING] |  |  |  | 
| supplemental | 8 | Supplemental | {::nomarkdown}Supplemental words (not found in the expression) which should be indexed<br/>to assist in look-up operations.{:/} | [STRING] |  |  |  | 
| deactivation_flag | 9 | Deactivation Flag | {::nomarkdown}This field indicates that a term formerly in use by the Lexicon has<br/>been deactivated and should not be used in lookups or displays.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>DEACTIVATED</dd></dl>{:/} | 
| modifier_flag | 10 | Modifier Flag | {::nomarkdown}Number of terms that are further specified by appending a modifier (at the<br/>begining of the display text) or specifier (at the end of the display text) of<br/>the major concept.  Only major concepts have modifiers/specifiers.{:/} | NUMERIC |  |  |  | 
| modifier_type | 11 | Modifier Type | {::nomarkdown}Flag indicated where the modifier is to be placed 1) at the begining of the<br/>display text and 2) at the end of the display text.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>MODIFIER (BEGINING OF TEXT)</dd><dt>2</dt><dd>SPECIFIER (ENDING OF TEXT)</dd><dt>0</dt><dd>UNMODIFIED</dd></dl>{:/} | 
| descendant_flag | 12 | Descendant Flag | {::nomarkdown}Number of terms that are considered descendant form the major concept.  Only<br/>major concepts have descendants.{:/} | NUMERIC |  |  |  | 
| parent | 13 | Parent | {::nomarkdown}This is the internal entry number in the Expression file #757.01 where the<br/>parent of a descendant term is located.  Only descendant terms have parents.{:/} | POINTER |  | INDEXED | [Expressions-757_01](Expressions-757_01.md) | 
| order | 14 | Order | {::nomarkdown}From time to time it is necessary to provide a specific order (sequence) for<br/>modifiers and descendant terms (i.e., a list of modifiers/descendants in a <br/>GUI list box).  This field is used to provide the list sequence number.{:/} | NUMERIC |  |  |  | 
| source_category | 15 | Source Category | {::nomarkdown}This field indicates the \source\ provided category for a term.  It<br/>can be used to group terms or to locate descendant or ancestral term<br/>within the source vocabulary.{:/} | POINTER |  |  | Source_Category-757_13 | 
| source | 16 | Source | {::nomarkdown}This indicates the source volcabulary (and source file) for the volcabulary.<br/>This field is used primarily in filtering (screen) the search and for<br/>Lexicon Maintenance.{:/} | POINTER |  |  | Source-757_14 | 
| designation_code | 18 | Designation Code | {::nomarkdown}The purpose of this multiple is to store designation IDs in the Lexicon. <br/>Designation is a word that terminologists use to encompass concept name, <br/>preferred term, expression, code text, synonyms, etc. In some systems <br/>such as SNOMED CT as well as the concept having a code (the SNOMED CT <br/>code), the individual designations (terms) belong to the concept each <br/>have their own codes (designation identifiers).{:/} | [OBJECT] |  |  | [Designation_Code-757_118](#Designation_Code-757_118)  | 

## <a name="Designation_Code-757_118"></a>Designation_Code-757_118 

 property | value 
--- | --- 
 id | Designation_Code-757_118
 label | Designation Code

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| designation_code | .01 | Designation Code | {::nomarkdown}The purpose of this field is to store a designation ID in the Lexicon. <br/>Designation is a word that terminologists use to encompass concept name, <br/>preferred term, expression, code text, synonyms, etc. In some systems <br/>such as SNOMED CT as well as the concept having a code (the SNOMED CT <br/>code), the individual designations (terms) belong to the concept each <br/>have their own codes (designation identifiers).{:/} | STRING |  | REQUIRED, INDEXED |  | 
| coding_system | 1 | Coding System | {::nomarkdown}This is the classification system (ICD/CPT/DSM etc) from which the <br/>Designation Code (field #.01) is derived.{:/} | POINTER |  |  | Coding_Systems-757_03 | 
| hierarchy | 2 | Hierarchy | {::nomarkdown}This is the SNOMED CT Hierarchy that the concept belongs to.{:/} | POINTER |  |  | Snomed_Ct_Hierarchy-757_018 | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:59:48 am</p>{:/}