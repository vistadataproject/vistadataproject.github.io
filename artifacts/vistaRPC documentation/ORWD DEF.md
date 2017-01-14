---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD DEF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the formatting definition for an ordering dialog from the ORDERDIALOG file (101.41).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | Return format mapping for a dialog
 First comment | {::nomarkdown}Y(n): CtrlName^DlgPtr^FmtSeq^Fmt^Omit^Lead^Trail^Mult?^chd1~chd2~...{:/}
 Input parameters | {::nomarkdown}DLG{:/}
 Code | ```  I DLG="NOT IMPLEMENTED" S Y(0)="0^0" Q                 ; for testing<br/> S DLG=$O(^ORD(101.41,"B",DLG,0))<br/> N I,J,K,N,X0,X2,XW,DPTR<br/> S Y(0)=$P(^ORD(101.41,DLG,0),U,5)_U_DLG<br/> S I=0,N=0<br/> F  S I=$O(^ORD(101.41,DLG,10,I)) Q:I'>0  D<br/> . S X0=$G(^ORD(101.41,DLG,10,I,0)),DPTR=$P(X0,U,2)<br/> . S X2=$G(^ORD(101.41,DLG,10,I,2))<br/> . S XW=$G(^ORD(101.41,DLG,10,I,"W"))<br/> . S N=N+1,Y(N)=$P(XW,U,1)_U_DPTR_U_X2,CHLD=""<br/> . S J=0 F  S J=$O(^ORD(101.41,DLG,10,"DAD",DPTR,J)) Q:'J  D<br/> . . S K=0 F  S K=$O(^ORD(101.41,DLG,10,"DAD",DPTR,J,K)) Q:'K  D<br/> . . . S CHLD=CHLD_$P(^ORD(101.41,DLG,10,K,0),U,2)_"~"<br/> . S $P(Y(N),U,8)=CHLD```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}