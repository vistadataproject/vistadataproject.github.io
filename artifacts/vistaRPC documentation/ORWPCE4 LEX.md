---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE4 LEX 

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
 Leading comment lines | {::nomarkdown}Call with: X           (Required) The search text entered by the user<br/>APP         (Required) The Lexicon APP parameter (e.g., "GMPX"<br/>for Problem List Subset, "10D" for ICD-10-CM, etc.<br/>[ORDATE]    (Optional) the date of interest (Defaults to TODAY - should<br/>be passed as DATE OF SERVICE if not TODAY)<br/>[ORXTND]    (Optional) Boolean flag specifying whether or not to<br/>use an extended search (Initial search is PL Subset<br/>of SCT, extended search is ICD (or 10D after impl.)<br/>(Defaults to 0 (FALSE))<br/>[ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>include synonyms for SNOMED CT Concepts<br/>(Defaults to 0 (FALSE))<br/>Returns: LST=local array name passed by ref, which contains search result set as:<br/><lvn>(1..n)=LEXIEN^PREFTEXT^CODESYS^CONCEPTID^ICDVER^DESIGID^PARENTSUBSCRIPT{:/}




 Generated on January 13th 2017, 6:44:48 am