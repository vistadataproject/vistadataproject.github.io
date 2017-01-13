---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ALLSAMP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ALLSAMP{:/}
 tag | {::nomarkdown}ALLSAMP{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns all collection samples in the format:   n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Lines | ```
 N SMP,SPC,ILST,IEN,X,X0,A,%,INC
 S ILST=0,LST($$NXT)="~CollSamp"
 S SMP="" F  S SMP=$O(^LAB(62,"B",SMP)) Q:SMP=""  D
 . S IEN=0 F  S IEN=$O(^LAB(62,"B",SMP,IEN)) Q:'IEN  D
 . . S INC=1 I $D(^LAB(62,IEN,64.91)) D  I 'INC Q
 . . . S A=^LAB(62,IEN,64.91)
 . . . S B=$P(A,"^") D NOW^%DTC I B]"",B'>$P(%,".") S INC=0 Q
 . . S X0=^LAB(62,IEN,0)
 . . S X="i"_U_IEN_U_SMP_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)
 . . I $P(X0,U,2) D
 . . . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)
 . . . S SPC($P(X,U,4))=$P(X,U,10)
 . . S LST($$NXT)=X
 S LST($$NXT)="~Specimens"
 S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)```
 Leading comment lines | {::nomarkdown}returns all collection samples<br/>n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}




 Generated on January 13th 2017, 6:55:29 am