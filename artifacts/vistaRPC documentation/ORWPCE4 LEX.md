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
 Input Parameters | {::nomarkdown}X<br/>APP<br/>ORDATE<br/>ORXTND<br/>ORINCSYN{:/}
 Lines | {::nomarkdown} N LEX,ILST,I,IEN,IMPLDT,SUBSET,FILTER<br/> S FILTER=""<br/> S IMPLDT=$$IMPDATE^LEXU("10D")<br/> S:APP="CPT" APP="CHP" ; LEX PATCH 10<br/> I APP="ICD",'+$G(ORXTND) S APP=$S($E(X,1,3)?.1A2.3N:"ICD",1:"GMPX")<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S ORINCSYN=+$G(ORINCSYN)<br/> I APP="ICD",(ORDATE'<IMPLDT) S APP="10D"<br/> S SUBSET=$S(APP="GMPX":$S(ORDATE<IMPLDT:"PLS",1:"CLF"),1:APP)<br/> D CONFIG^LEXSET(APP,SUBSET,ORDATE)  ;DBIA 1609<br/> I APP="CHP" D<br/> . ; Set the filter for CPT only using CS APIs - format is the same as for DIC("S")<br/> . S ^TMP("LEXSCH",$J,"FIL",0)="I $L($$CPTONE^LEXU(+Y,$G(ORDATE)))!($L($$CPCONE^LEXU(+Y,$G(ORDATE))))"  ;DBIA 1609<br/> . ; Set Applications Default Flag (Lexicon can not overwrite filter)<br/> . S ^TMP("LEXSCH",$J,"ADF",0)=1<br/> S X=$$UP^XLFSTR(X)<br/> D SRCH(.LST,X,APP,SUBSET,ORDATE,ORINCSYN){:/}
 Leading comment lines | {::nomarkdown}Call with: X           (Required) The search text entered by the user<br/>APP         (Required) The Lexicon APP parameter (e.g., "GMPX"<br/>for Problem List Subset, "10D" for ICD-10-CM, etc.<br/>[ORDATE]    (Optional) the date of interest (Defaults to TODAY - should<br/>be passed as DATE OF SERVICE if not TODAY)<br/>[ORXTND]    (Optional) Boolean flag specifying whether or not to<br/>use an extended search (Initial search is PL Subset<br/>of SCT, extended search is ICD (or 10D after impl.)<br/>(Defaults to 0 (FALSE))<br/>[ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>include synonyms for SNOMED CT Concepts<br/>(Defaults to 0 (FALSE))<br/>Returns: LST=local array name passed by ref, which contains search result set as:<br/><lvn>(1..n)=LEXIEN^PREFTEXT^CODESYS^CONCEPTID^ICDVER^DESIGID^PARENTSUBSCRIPT{:/}




 Generated on January 13th 2017, 7:15:28 am