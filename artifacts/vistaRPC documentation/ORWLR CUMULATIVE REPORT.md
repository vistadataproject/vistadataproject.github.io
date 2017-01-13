---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLR CUMULATIVE REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR CUMULATIVE REPORT{:/}
 tag | {::nomarkdown}CUM{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns an up to date laboratory cumulative report for a given patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return cumulative report
 Input Parameters | {::nomarkdown}DFN<br/>DAYS<br/>ALPHA<br/>OMEGA{:/}
 Lines | ```{::nomarkdown} N I,X,X1,X2,C,LINES,IOST,IOM,ROOT<br/> S ROOT=$$SET^ORWLRR()<br/> S IOST="C-",IOM=80,OROOT=$NA(^TMP("LRC",$J))<br/> K ^TMP("LRC",$J),^TMP("LRH",$J)<br/> Q:'$G(DFN)<br/> I $L($G(DAYS)),'$G(ALPHA) S ALPHA=$$FMADD^XLFDT(DT,-DAYS),OMEGA=$$NOW^XLFDT<br/> Q:'$G(ALPHA)  Q:'$G(OMEGA)<br/> I $$REMOTE^ORWLRR(.DFN,.ROOT) D EN^LR7OSUM(.OROOT,DFN,ALPHA,OMEGA)<br/> S I=0<br/> I $L($O(^TMP("LRH",$J,0))) S I=.001,^TMP("LRC",$J,I)="[HIDDEN TEXT]^" D<br/> . S X="",C=2 F  S X=$O(^TMP("LRH",$J,X)) Q:X=""  S LINES(^(X))=X,C=C+1<br/> . S $P(^TMP("LRC",$J,.001),"^",2)=C<br/> . S X="" F  S X=$O(LINES(X)) Q:X=""  D<br/> .. S I=I+.001,^TMP("LRC",$J,I)=X_"^"_LINES(X)<br/> . S I=I+.001,^TMP("LRC",$J,I)="[REPORT TEXT]"<br/> D CLEAN^ORWLRR(.OROOT,ROOT)<br/>```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter identifies the patient for whom the lab cumulative report should be obtained.{:/} | 




 Generated on January 13th 2017, 7:11:26 am