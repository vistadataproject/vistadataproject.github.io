---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDGX LOAD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDGX LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads a list of activities for an activity order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Load a list of activity orders
 Input Parameters | {::nomarkdown}PAR{:/}
 Lines | {::nomarkdown} N I,ILST,DLG,NAM,TLST<br/> D GETLST^XPAR(.TLST,"ALL",PAR)<br/> S I=0,ILST=0 F  S I=$O(TLST(I)) Q:'I  D<br/> . S DLG=$P(TLST(I),U,2),NAM=$P(^ORD(101.41,+DLG,0),U,2)<br/> . S ILST=ILST+1,LST(ILST)=DLG_U_NAM<br/> N DLGTYP,OIDLG,FTDLG,OITYP,I,IFN<br/> S DLGTYP=$P(^ORD(101.41,DLG,0),U,4)<br/> S OIDLG=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM",0))<br/> S FTDLG=$O(^ORD(101.41,"B","OR GTX FREE TEXT OI",0))<br/> I DLGTYP="D" D<br/> . S I=0,IFN=0 F  S I=$O(^ORD(101.41,DLG,10,I)) S X=^(I,0) D  Q:IFN<br/> . . I $P(X,U,2)=OIDLG S IFN=I,OITYP="O"<br/> . . I $P(X,U,2)=FTDLG S IFN=I,OITYP="F"<br/> . S Y="" I $L($G(^ORD(101.41,DLG,10,IFN,7))) X ^(7)<br/> . I OITYP="O" S Y=$P(^ORD(101.43,+Y,0),U,1){:/}




 Generated on January 13th 2017, 7:15:27 am