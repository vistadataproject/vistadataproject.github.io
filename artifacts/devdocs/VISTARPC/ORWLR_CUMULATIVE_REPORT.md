---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWLR CUMULATIVE REPORT<br/>
# ORWLR CUMULATIVE REPORT

This call returns an up to date laboratory cumulative report for a given patient.

## Properties

Property | Value
--- | ---
Label | CUM
Routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | This parameter identifies the patient for whom the lab cumulative report should be obtained.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CUM^ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
Method Comment | Return cumulative report
Input Parameters | DFN, DAYS, ALPHA, OMEGA
Code | {::nomarkdown}<pre><code> N I,X,X1,X2,C,LINES,IOST,IOM,ROOT<br/> S ROOT=$$SET^ORWLRR()<br/> S IOST="C-",IOM=80,OROOT=$NA(^TMP("LRC",$J))<br/> K ^TMP("LRC",$J),^TMP("LRH",$J)<br/> Q:'$G(DFN)<br/> I $L($G(DAYS)),'$G(ALPHA) S ALPHA=$$FMADD^XLFDT(DT,-DAYS),OMEGA=$$NOW^XLFDT<br/> Q:'$G(ALPHA)  Q:'$G(OMEGA)<br/> I $$REMOTE^ORWLRR(.DFN,.ROOT) D EN^LR7OSUM(.OROOT,DFN,ALPHA,OMEGA)<br/> S I=0<br/> I $L($O(^TMP("LRH",$J,0))) S I=.001,^TMP("LRC",$J,I)="[HIDDEN TEXT]^" D<br/> . S X="",C=2 F  S X=$O(^TMP("LRH",$J,X)) Q:X=""  S LINES(^(X))=X,C=C+1<br/> . S $P(^TMP("LRC",$J,.001),"^",2)=C<br/> . S X="" F  S X=$O(LINES(X)) Q:X=""  D<br/> .. S I=I+.001,^TMP("LRC",$J,I)=X_"^"_LINES(X)<br/> . S I=I+.001,^TMP("LRC",$J,I)="[REPORT TEXT]"<br/> D CLEAN^ORWLRR(.OROOT,ROOT)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}