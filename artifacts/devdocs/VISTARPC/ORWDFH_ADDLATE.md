---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDFH ADDLATE<br/>
# ORWDFH ADDLATE

RPC to add a late tray diet order.

## Properties

Property | Value
--- | ---
Label | ADDLATE
MUMPS Implementation | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ADDLATE^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Add late tray order
Input Parameters | ORVP, ORNP, ORL, MEAL, TIME, BAG
Code | {::nomarkdown}<pre><code> N ORIFN,ORNEW,ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORCHECK,ORLOG<br/> N ORDIALOG,ORDG,ORTYPE,DA,FIRST,TRAY<br/> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br/> S ORTYPE="D",FIRST=1,ORDUZ=DUZ,ORLOG=+$E($$NOW^XLFDT,1,12)<br/> S TRAY=+$O(^ORD(101.43,"S.E/L T","LATE TRAY",0))<br/> S ORDIALOG=$O(^ORD(101.41,"AB","FHW2",0))<br/> D GETDLG^ORCD(ORDIALOG)<br/> S ORDIALOG($$PTR^ORCD("OR GTX MEAL"),1)=MEAL<br/> S ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1)=TRAY<br/> S ORDIALOG($$PTR^ORCD("OR GTX START DATE"),1)=DT<br/> S ORDIALOG($$PTR^ORCD("OR GTX STOP DATE"),1)=DT<br/> S ORDIALOG($$PTR^ORCD("OR GTX MEAL TIME"),1)=TIME<br/> S ORDIALOG($$PTR^ORCD("OR GTX YES/NO"),1)=BAG<br/> D EN^ORCSAVE<br/> S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}