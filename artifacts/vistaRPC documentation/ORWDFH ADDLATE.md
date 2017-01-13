---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH ADDLATE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ADDLATE{:/}
 tag | {::nomarkdown}ADDLATE{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to add a late tray diet order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Add late tray order
 Input Parameters | {::nomarkdown}ORVP<br/>ORNP<br/>ORL<br/>MEAL<br/>TIME<br/>BAG{:/}
 Lines | ```{::nomarkdown} N ORIFN,ORNEW,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORCHECK,ORLOG<br/> N ORDIALOG,ORDG,ORTYPE,DA,FIRST,TRAY<br/> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br/> S ORTYPE="D",FIRST=1,ORDUZ=DUZ,ORLOG=+$E($$NOW^XLFDT,1,12)<br/> S TRAY=+$O(^ORD(101.43,"S.E/L T","LATE TRAY",0))<br/> S ORDIALOG=$O(^ORD(101.41,"AB","FHW2",0))<br/> D GETDLG^ORCD(ORDIALOG)<br/> S ORDIALOG($$PTR^ORCD("OR GTX MEAL"),1)=MEAL<br/> S ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1)=TRAY<br/> S ORDIALOG($$PTR^ORCD("OR GTX START DATE"),1)=DT<br/> S ORDIALOG($$PTR^ORCD("OR GTX STOP DATE"),1)=DT<br/> S ORDIALOG($$PTR^ORCD("OR GTX MEAL TIME"),1)=TIME<br/> S ORDIALOG($$PTR^ORCD("OR GTX YES/NO"),1)=BAG<br/> D EN^ORCSAVE<br/> S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)```{:/}




 Generated on January 13th 2017, 7:11:26 am