---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDFH ADDLATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ADDLATE{:/}
 tag | {::nomarkdown}ADDLATE{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to add a late tray diet order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ADDLATE^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Add late tray order
 Input parameters | {::nomarkdown}ORVP<br/>ORNP<br/>ORL<br/>MEAL<br/>TIME<br/>BAG{:/}
 Code | ```  N ORIFN,ORNEW,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORCHECK,ORLOG
 N ORDIALOG,ORDG,ORTYPE,DA,FIRST,TRAY
 S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)
 S ORTYPE="D",FIRST=1,ORDUZ=DUZ,ORLOG=+$E($$NOW^XLFDT,1,12)
 S TRAY=+$O(^ORD(101.43,"S.E/L T","LATE TRAY",0))
 S ORDIALOG=$O(^ORD(101.41,"AB","FHW2",0))
 D GETDLG^ORCD(ORDIALOG)
 S ORDIALOG($$PTR^ORCD("OR GTX MEAL"),1)=MEAL
 S ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1)=TRAY
 S ORDIALOG($$PTR^ORCD("OR GTX START DATE"),1)=DT
 S ORDIALOG($$PTR^ORCD("OR GTX STOP DATE"),1)=DT
 S ORDIALOG($$PTR^ORCD("OR GTX MEAL TIME"),1)=TIME
 S ORDIALOG($$PTR^ORCD("OR GTX YES/NO"),1)=BAG
 D EN^ORCSAVE
 S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)```




 Generated on January 14th 2017, 7:26:35 am