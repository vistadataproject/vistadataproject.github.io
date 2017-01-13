---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE4 LEX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE4 LEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of coded elements based on lexicon look-up. Introduced with CPRS v29 to maintain compatibility of older call ORWPCE LEX.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return list after lexicon lookup
 Leading comment lines | Call with: X           (Required) The search text entered by the user
APP         (Required) The Lexicon APP parameter (e.g., "GMPX"
for Problem List Subset, "10D" for ICD-10-CM, etc.
[ORDATE]    (Optional) the date of interest (Defaults to TODAY - should
be passed as DATE OF SERVICE if not TODAY)
[ORXTND]    (Optional) Boolean flag specifying whether or not to
use an extended search (Initial search is PL Subset
of SCT, extended search is ICD (or 10D after impl.)
(Defaults to 0 (FALSE))
[ORINCSYN]  (Optional) Boolean flag specifying whether or not to
include synonyms for SNOMED CT Concepts
(Defaults to 0 (FALSE))
Returns: LST=local array name passed by ref, which contains search result set as:
<lvn>(1..n)=LEXIEN^PREFTEXT^CODESYS^CONCEPTID^ICDVER^DESIGID^PARENTSUBSCRIPT




 Generated on January 13th 2017, 5:52:13 am