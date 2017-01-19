---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ALLSAMP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ALLSAMP{:/}
 tag | {::nomarkdown}ALLSAMP{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns all collection samples in the format:   n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLSAMP^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | procedure
 First comment | {::nomarkdown} returns all collection samples<br/> n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}
 Code | {::nomarkdown}  N SMP,SPC,ILST,IEN,X,X0,A,%,INC<br> S ILST=0,LST($$NXT)="~CollSamp"<br> S SMP="" F  S SMP=$O(^LAB(62,"B",SMP)) Q:SMP=""  D<br> . S IEN=0 F  S IEN=$O(^LAB(62,"B",SMP,IEN)) Q:'IEN  D<br> . . S INC=1 I $D(^LAB(62,IEN,64.91)) D  I 'INC Q<br> . . . S A=^LAB(62,IEN,64.91)<br> . . . S B=$P(A,"^") D NOW^%DTC I B]"",B'>$P(%,".") S INC=0 Q<br> . . S X0=^LAB(62,IEN,0)<br> . . S X="i"_U_IEN_U_SMP_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)<br> . . I $P(X0,U,2) D<br> . . . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)<br> . . . S SPC($P(X,U,4))=$P(X,U,10)<br> . . S LST($$NXT)=X<br> S LST($$NXT)="~Specimens"<br> S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}