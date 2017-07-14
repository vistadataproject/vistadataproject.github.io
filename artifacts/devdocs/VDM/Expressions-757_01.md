---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Expressions-757_01<br/>
<a name="top"></a>
# Expressions (757.01)
This file contains all text pertaining to the Major Concepts, Concept Synonyms,  Concept Lexical Variants, Synonymous Lexical Variants, and Modified Concepts.  It includes displayable text, distinguishing text (that portion of text that makes a modified concept different from the parent concept) and the term definitions (when available).  Searches are conducted using the special look-up routine LEXA1.

**Global:** ^LEX(757.01,

**Domain:** Problems

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Displayable Text**{::nomarkdown}<pre><code>  displayable_text</code></pre>{:/} | .01 | This is the text which will be used to represent the expression (Major Concept,<br/>Synonym or Lexical Variant). | STRING | INDEXED<br/>REQUIRED | 
**Major Concept**{::nomarkdown}<pre><code>  major_concept</code></pre>{:/} | 1 | Pointer to the Major Concept (file #757).  If the expression is a major<br/>concept, this pointer will be the same as the Expression pointer in the<br/>Major Concept Map file (#757).  If it is a synonym or a lexical variant it<br/>will point to it's parent major concept.  If it is a lexical variant of a<br/>synonym, it will point to the parent major concept of the synonym. | POINTER | INDEXED<br/>REQUIRED | [Major_Concept_Map-757](Major_Concept_Map-757)
**Type**{::nomarkdown}<pre><code>  type-2</code></pre>{:/} | 2 | This is a pointer to the Expression Type file (#757.011).  Examples of<br/>expression types include Major Concepts, Synonyms, Lexical Variants, etc.   | POINTER | REQUIRED | [Expression_Type-757_011](Expression_Type-757_011)
**Scope**{::nomarkdown}<pre><code>  scope</code></pre>{:/} | 3 | Scope - Demonstrates the relationship of the term to the Major Concept.<br/>Major Concepts, Synonyms to Major Concepts and Lexical Variants to a Major<br/>Concept are (D)irectly linked.  Lexical Variants to a Synonym of a Major<br/>Concept are (I)ndirectly linked.  Related concepts are either (B)roader in<br/>scope, (N)arrower in scope, or an (O)ther/undefined view of the Major<br/>Concept. | ENUMERATION | REQUIRED | {::nomarkdown}BROADER VIEW: <em><strong>B</strong></em><br/>DIRECTLY LINKED: <em><strong>D</strong></em><br/>INDIRECTLY LINKED: <em><strong>I</strong></em><br/>RELATED VIEW: <em><strong>R</strong></em><br/>NARROWER VIEW: <em><strong>N</strong></em><br/>OTHER: <em><strong>O</strong></em><br/>CONTROLLED VIEW: <em><strong>C</strong></em>{:/}
**Form**{::nomarkdown}<pre><code>  form</code></pre>{:/} | 4 | Pointer to the Expression Form (file 757.014) which describes the lexical <br/>style of an expression.  Major Concepts adopt the general form of "MAJ" while<br/>all other expressions describe their forms as they relate to the Major <br/>Concept (i.e., plural, singular, acronym, etc.) | POINTER | REQUIRED | [Expression_Form-757_014](Expression_Form-757_014)
**Distinguishing Text**{::nomarkdown}<pre><code>  distinguishing_text</code></pre>{:/} | 5 | This is the text or portion of text that distinguishes this expression from<br/>the Major Concept.  (null if the expression is the Major Concept) | STRING |  | 
**Definition**{::nomarkdown}<pre><code>  definition</code></pre>{:/} | 6 | Definition of an expression when available. | STRING |  | 
**Negation**{::nomarkdown}<pre><code>  negation</code></pre>{:/} | 7 | This field contains words which are negated within the expression, i.e, <br/>without mention of "complication", except "thumb", and other than an <br/>"open wound".  These type of negations will not be indexed in the word <br/>index, preventing erroneous search results. | STRING |  | 
**Supplemental**{::nomarkdown}<pre><code>  supplemental</code></pre>{:/} | 8 | Supplemental words (not found in the expression) which should be indexed<br/>to assist in look-up operations. | STRING |  | 
**Deactivation Flag**{::nomarkdown}<pre><code>  deactivation_flag</code></pre>{:/} | 9 | This field indicates that a term formerly in use by the Lexicon has<br/>been deactivated and should not be used in lookups or displays. | ENUMERATION |  | {::nomarkdown}ACTIVE: <em><strong>0</strong></em><br/>DEACTIVATED: <em><strong>1</strong></em>{:/}
**Modifier Flag**{::nomarkdown}<pre><code>  modifier_flag</code></pre>{:/} | 10 | Number of terms that are further specified by appending a modifier (at the<br/>begining of the display text) or specifier (at the end of the display text) of<br/>the major concept.  Only major concepts have modifiers/specifiers. | NUMERIC |  | 
**Modifier Type**{::nomarkdown}<pre><code>  modifier_type</code></pre>{:/} | 11 | Flag indicated where the modifier is to be placed 1) at the begining of the<br/>display text and 2) at the end of the display text. | ENUMERATION |  | {::nomarkdown}MODIFIER (BEGINING OF TEXT): <em><strong>1</strong></em><br/>SPECIFIER (ENDING OF TEXT): <em><strong>2</strong></em><br/>UNMODIFIED: <em><strong>0</strong></em>{:/}
**Descendant Flag**{::nomarkdown}<pre><code>  descendant_flag</code></pre>{:/} | 12 | Number of terms that are considered descendant form the major concept.  Only<br/>major concepts have descendants. | NUMERIC |  | 
**Parent**{::nomarkdown}<pre><code>  parent</code></pre>{:/} | 13 | This is the internal entry number in the Expression file #757.01 where the<br/>parent of a descendant term is located.  Only descendant terms have parents. | POINTER | INDEXED | [Expressions-757_01](Expressions-757_01)
**Order**{::nomarkdown}<pre><code>  order</code></pre>{:/} | 14 | From time to time it is necessary to provide a specific order (sequence) for<br/>modifiers and descendant terms (i.e., a list of modifiers/descendants in a <br/>GUI list box).  This field is used to provide the list sequence number. | NUMERIC |  | 
**Source Category**{::nomarkdown}<pre><code>  source_category</code></pre>{:/} | 15 | This field indicates the "source" provided category for a term.  It<br/>can be used to group terms or to locate descendant or ancestral term<br/>within the source vocabulary. | POINTER |  | [Source_Category-757_13](Source_Category-757_13)
**Source**{::nomarkdown}<pre><code>  source</code></pre>{:/} | 16 | This indicates the source volcabulary (and source file) for the volcabulary.<br/>This field is used primarily in filtering (screen) the search and for<br/>Lexicon Maintenance. | POINTER |  | [Source-757_14](Source-757_14)
**Designation Code**{::nomarkdown}<pre><code>  designation_code</code></pre>{:/} | 18 | The purpose of this multiple is to store designation IDs in the Lexicon. <br/>Designation is a word that terminologists use to encompass concept name, <br/>preferred term, expression, code text, synonyms, etc. In some systems <br/>such as SNOMED CT as well as the concept having a code (the SNOMED CT <br/>code), the individual designations (terms) belong to the concept each <br/>have their own codes (designation identifiers). | OBJECT |  | [Designation_Code-757_118](#Designation_Code-757_118)

## Sub-Files
### <a name="Designation_Code-757_118"></a>Designation Code (757.118)

<dl>
<dt>ID</dt><dd>Designation_Code-757_118</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Designation Code**{::nomarkdown}<pre><code>  designation_code</code></pre>{:/} | .01 | The purpose of this field is to store a designation ID in the Lexicon. <br/>Designation is a word that terminologists use to encompass concept name, <br/>preferred term, expression, code text, synonyms, etc. In some systems <br/>such as SNOMED CT as well as the concept having a code (the SNOMED CT <br/>code), the individual designations (terms) belong to the concept each <br/>have their own codes (designation identifiers). | STRING | INDEXED<br/>REQUIRED | 
**Coding System**{::nomarkdown}<pre><code>  coding_system</code></pre>{:/} | 1 | This is the classification system (ICD/CPT/DSM etc) from which the <br/>Designation Code (field #.01) is derived. | POINTER |  | [Coding_Systems-757_03](Coding_Systems-757_03)
**Hierarchy**{::nomarkdown}<pre><code>  hierarchy</code></pre>{:/} | 2 | This is the SNOMED CT Hierarchy that the concept belongs to. | POINTER |  | [Snomed_Ct_Hierarchy-757_018](Snomed_Ct_Hierarchy-757_018)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}