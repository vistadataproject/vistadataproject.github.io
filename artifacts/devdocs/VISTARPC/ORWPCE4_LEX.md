---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE4 LEX<br/>
# ORWPCE4 LEX

Returns list of coded elements based on lexicon look-up. Introduced with CPRS v29 to maintain compatibility of older call ORWPCE LEX.

## Properties

Property | Value
--- | ---
Label | LEX
MUMPS Implementation | [ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LEX^ORWPCE4](http://code.osehra.org/dox/Routine_ORWPCE4_source.html)
Method Comment | return list after lexicon lookup
Input Parameters | X, APP, ORDATE, ORXTND, ORINCSYN
First Comment | {::nomarkdown}<pre><code> Call with: X           (Required) The search text entered by the user<br/>            APP         (Required) The Lexicon APP parameter (e.g., "GMPX"<br/>                                   for Problem List Subset, "10D" for ICD-10-CM, etc.<br/>            [ORDATE]    (Optional) the date of interest (Defaults to TODAY - should<br/>                                   be passed as DATE OF SERVICE if not TODAY)<br/>            [ORXTND]    (Optional) Boolean flag specifying whether or not to<br/>                                   use an extended search (Initial search is PL Subset<br/>                                   of SCT, extended search is ICD (or 10D after impl.)<br/>                                   (Defaults to 0 (FALSE))<br/>            [ORINCSYN]  (Optional) Boolean flag specifying whether or not to<br/>                                   include synonyms for SNOMED CT Concepts<br/>                                   (Defaults to 0 (FALSE))<br/><br/>   Returns: LST=local array name passed by ref, which contains search result set as:<br/>            <lvn>(1..n)=LEXIEN^PREFTEXT^CODESYS^CONCEPTID^ICDVER^DESIGID^PARENTSUBSCRIPT<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N LEX,ILST,I,IEN,IMPLDT,SUBSET,FILTER<br/> S FILTER=""<br/> S IMPLDT=$$IMPDATE^LEXU("10D")<br/> S:APP="CPT" APP="CHP" ; LEX PATCH 10<br/> I APP="ICD",'+$G(ORXTND) S APP=$S($E(X,1,3)?.1A2.3N:"ICD",1:"GMPX")<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S ORINCSYN=+$G(ORINCSYN)<br/> I APP="ICD",(ORDATE'<IMPLDT) S APP="10D"<br/> S SUBSET=$S(APP="GMPX":$S(ORDATE<IMPLDT:"PLS",1:"CLF"),1:APP)<br/> D CONFIG^LEXSET(APP,SUBSET,ORDATE)  ;DBIA 1609<br/> I APP="CHP" D<br/> . ; Set the filter for CPT only using CS APIs - format is the same as for DIC("S")<br/> . S ^TMP("LEXSCH",$J,"FIL",0)="I $L($$CPTONE^LEXU(+Y,$G(ORDATE)))!($L($$CPCONE^LEXU(+Y,$G(ORDATE))))"  ;DBIA 1609<br/> . ; Set Applications Default Flag (Lexicon can not overwrite filter)<br/> . S ^TMP("LEXSCH",$J,"ADF",0)=1<br/> S X=$$UP^XLFSTR(X)<br/> D SRCH(.LST,X,APP,SUBSET,ORDATE,ORINCSYN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}