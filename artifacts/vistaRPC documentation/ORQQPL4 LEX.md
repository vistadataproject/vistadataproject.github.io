---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL4 LEX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL4 LEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return list after lexicon lookup
 Leading comment lines | {::nomarkdown}Call with: X           (Required) The search text entered by the user<br/>[VIEW]      (Optional) The Lexicon VIEW parameter (Defaults to<br/>Problem List Subset (i.e., "PLS")<br/>[ORDATE]    (Optional) the date of interest (Defaults to TODAY)<br/>[ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>include synonyms for SNOMED CT Concepts<br/>(Defaults to 0 (FALSE))<br/>Returns: LST=gvn of ^TMP("ORLEX",$J), which contains search result set as:<br/>^TMP("ORLEX",$J,1..n)=LEXIEN^PREFTEXT^ICDCODE(S)^ICDIEN^CODESYS^CONCEPTID^DESIGID^ICDVER^PARENTSUBSCRIPT<br/>^TMP("ORLEX",$J,n+1)="<n> matches found"{:/}




 Generated on January 13th 2017, 6:44:48 am