---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL4 LEX 

 property | value 
--- | --- 
 label | ORQQPL4 LEX
 tag | LEX
 routine | [ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.


### Method description

 property | value 
--- | --- 
 Method comment | return list after lexicon lookup
 Leading comment lines | Call with: X           (Required) The search text entered by the user,[VIEW]      (Optional) The Lexicon VIEW parameter (Defaults to,Problem List Subset (i.e., "PLS"),[ORDATE]    (Optional) the date of interest (Defaults to TODAY),[ORINCSYN]  (Optional) Boolean flag specifying whether or not to,include synonyms for SNOMED CT Concepts,(Defaults to 0 (FALSE)),Returns: LST=gvn of ^TMP("ORLEX",$J), which contains search result set as:,^TMP("ORLEX",$J,1..n)=LEXIEN^PREFTEXT^ICDCODE(S)^ICDIEN^CODESYS^CONCEPTID^DESIGID^ICDVER^PARENTSUBSCRIPT,^TMP("ORLEX",$J,n+1)="<n> matches found"