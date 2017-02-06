---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL4 LEX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL4 LEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LEX^[ORQQPL4](http://code.osehra.org/dox/Routine_ORQQPL4_source.html)
 Method comment | return list after lexicon lookup
 Input parameters | {::nomarkdown}X, VIEW, ORDATE, ORINCSYN{:/}
 First comment | {::nomarkdown}<pre> Call with: X           (Required) The search text entered by the user<br/>            [VIEW]      (Optional) The Lexicon VIEW parameter (Defaults to<br/>                                   Problem List Subset (i.e., "PLS")<br/>            [ORDATE]    (Optional) the date of interest (Defaults to TODAY)<br/>            [ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>                                   include synonyms for SNOMED CT Concepts<br/>                                   (Defaults to 0 (FALSE))<br/><br/>   Returns: LST=gvn of ^TMP("ORLEX",$J), which contains search result set as:<br/>            ^TMP("ORLEX",$J,1..n)=LEXIEN^PREFTEXT^ICDCODE(S)^ICDIEN^CODESYS^CONCEPTID^DESIGID^ICDVER^PARENTSUBSCRIPT<br/>            ^TMP("ORLEX",$J,n+1)="<n> matches found"<br/></pre>{:/}
 Code | {::nomarkdown}  N LEX,ILST,I,IEN,APP<br> S APP="GMPX",LST=$NA(^TMP("ORLEX",$J)) K @LST<br> S:'+$G(ORDATE) ORDATE=DT<br> S:'$L($G(VIEW)) VIEW="PLS"<br> S ORINCSYN=+$G(ORINCSYN)<br> I $S(X?.1A2.3N.1".".2N:1,X?.1A2.3N1"+":1,1:0) D  Q<br> . S @LST@(1)="icd^Searching by code on the Problems Tab supports SNOMED CT, but not ICD."<br> . S @LST@(2)="Please try a different search"<br> D CONFIG^LEXSET(APP,VIEW,ORDATE)<br> D LOOK^LEXA(X,,1,,ORDATE)<br> I '$D(LEX("LIST",1)) D  G LEXX<br> . S:X?.N @LST@(1)="Code search failed"<br> S ILST=0<br> S @LST@(1)=$$LEXXFRM(LEX("LIST",1),ORDATE,APP),ILST=1<br> D:ORINCSYN SYNONYMS(.LST,.ILST,"SCT",$P(@LST@(1),U,6),ORDATE)<br> S (I,IEN)=""<br> F  S I=$O(^TMP("LEXFND",$J,I)) Q:I=""  D  ;DBIA 2950<br> .F  S IEN=$O(^TMP("LEXFND",$J,I,IEN)) Q:IEN=""  D<br> ..N TXT,ELEMENT S TXT=^TMP("LEXFND",$J,I,IEN)<br> ..S ELEMENT=IEN_U_TXT<br> ..S ELEMENT=$$LEXXFRM(ELEMENT,ORDATE,APP)<br> ..S ILST=ILST+1,@LST@(ILST)=ELEMENT<br> ..D:ORINCSYN SYNONYMS(.LST,.ILST,"SCT",$P(ELEMENT,U,6),ORDATE)<br> I '$D(@LST@(1)) S @LST@(1)="No matches found"<br> E  S @LST@(ILST+1)=ILST_$S(ILST=1:" match",1:" matches")_" found"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}