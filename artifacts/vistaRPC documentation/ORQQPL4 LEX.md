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
 Input Parameters | {::nomarkdown}X<br/>VIEW<br/>ORDATE<br/>ORINCSYN{:/}
 Lines | ```
 N LEX,ILST,I,IEN,APP
 S APP="GMPX",LST=$NA(^TMP("ORLEX",$J)) K @LST
 S:'+$G(ORDATE) ORDATE=DT
 S:'$L($G(VIEW)) VIEW="PLS"
 S ORINCSYN=+$G(ORINCSYN)
 I $S(X?.1A2.3N.1".".2N:1,X?.1A2.3N1"+":1,1:0) D  Q
 . S @LST@(1)="icd^Searching by code on the Problems Tab supports SNOMED CT, but not ICD."
 . S @LST@(2)="Please try a different search"
 D CONFIG^LEXSET(APP,VIEW,ORDATE)
 D LOOK^LEXA(X,,1,,ORDATE)
 I '$D(LEX("LIST",1)) D  G LEXX
 . S:X?.N @LST@(1)="Code search failed"
 S ILST=0
 S @LST@(1)=$$LEXXFRM(LEX("LIST",1),ORDATE,APP),ILST=1
 D:ORINCSYN SYNONYMS(.LST,.ILST,"SCT",$P(@LST@(1),U,6),ORDATE)
 S (I,IEN)=""
 F  S I=$O(^TMP("LEXFND",$J,I)) Q:I=""  D  ;DBIA 2950
 .F  S IEN=$O(^TMP("LEXFND",$J,I,IEN)) Q:IEN=""  D
 ..N TXT,ELEMENT S TXT=^TMP("LEXFND",$J,I,IEN)
 ..S ELEMENT=IEN_U_TXT
 ..S ELEMENT=$$LEXXFRM(ELEMENT,ORDATE,APP)
 ..S ILST=ILST+1,@LST@(ILST)=ELEMENT
 ..D:ORINCSYN SYNONYMS(.LST,.ILST,"SCT",$P(ELEMENT,U,6),ORDATE)
 I '$D(@LST@(1)) S @LST@(1)="No matches found"
 E  S @LST@(ILST+1)=ILST_$S(ILST=1:" match",1:" matches")_" found"```
 Leading comment lines | {::nomarkdown}Call with: X           (Required) The search text entered by the user<br/>[VIEW]      (Optional) The Lexicon VIEW parameter (Defaults to<br/>Problem List Subset (i.e., "PLS")<br/>[ORDATE]    (Optional) the date of interest (Defaults to TODAY)<br/>[ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>include synonyms for SNOMED CT Concepts<br/>(Defaults to 0 (FALSE))<br/>Returns: LST=gvn of ^TMP("ORLEX",$J), which contains search result set as:<br/>^TMP("ORLEX",$J,1..n)=LEXIEN^PREFTEXT^ICDCODE(S)^ICDIEN^CODESYS^CONCEPTID^DESIGID^ICDVER^PARENTSUBSCRIPT<br/>^TMP("ORLEX",$J,n+1)="<n> matches found"{:/}




 Generated on January 13th 2017, 6:55:29 am