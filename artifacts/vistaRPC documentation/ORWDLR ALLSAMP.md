---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR ALLSAMP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR ALLSAMP{:/}
 tag | {::nomarkdown}ALLSAMP{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of collection samples for a lab order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLSAMP^[ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}returns all collection samples<br/>n^SampIEN^SampName^SpecPtr^TubeTop^^^LabCollect^^SpecName{:/}
 Code | ```  N SMP,SPC,ILST,IEN,X,X0
 S ILST=0,LST($$NXT)="~CollSamp"
 S SMP="" F  S SMP=$O(^LAB(62,"B",SMP)) Q:SMP=""  D
 . S IEN=0 F  S IEN=$O(^LAB(62,"B",SMP,IEN)) Q:'IEN  D
 . . S X0=^LAB(62,IEN,0)
 . . S X="i"_U_IEN_U_SMP_U_$P(X0,U,2)_U_$P(X0,U,3)_U_U_U_$P(X0,U,7)
 . . I $P(X0,U,2) D
 . . . S $P(X,U,10)=$P(^LAB(61,+$P(X0,U,2),0),U,1)
 . . . S SPC($P(X,U,4))=$P(X,U,10)
 . . S LST($$NXT)=X
 S LST($$NXT)="~Specimens"
 S SPC=0 F  S SPC=$O(SPC(SPC)) Q:'SPC  S LST($$NXT)=SPC_U_SPC(SPC)```




 Generated on January 14th 2017, 7:26:35 am