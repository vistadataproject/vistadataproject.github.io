---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR01 SAVCHG<br/>
# ORWDXR01 SAVCHG



## Properties

Property | Value
--- | ---
Label | SAVCHG
MUMPS Implementation | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVCHG^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Input Parameters | ORID, PARM1, PARM2, TXTOD
First Comment | {::nomarkdown}<pre><code>save new changes on the unreleased unsigned renewed order</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORID,0))<br/> I TXTOD D TXTSAV(.ORY,ORID,PARM1,PARM2) Q<br/> N REFID,PICKID,ACT,IX,TXT,REFPOS,NDQUIT<br/> S (REFID,PICKID,ACT,REFPOS,NDQUIT)=0,ORY=""<br/> S ACT=+$P(ORID,";",2) S:ACT'>0 ACT=1<br/> S REFID=$O(^OR(100,+ORID,4.5,"ID","REFILLS",0))<br/> S PICKID=$O(^OR(100,+ORID,4.5,"ID","PICKUP",0))<br/> S:$D(^OR(100,+ORID,4.5,REFID,1)) ^(1)=PARM1<br/> S:$D(^OR(100,+ORID,4.5,PICKID,1)) ^(1)=PARM2<br/> S IX=0 F  S IX=$O(^OR(100,+ORID,8,ACT,.1,IX)) Q:('IX)!(NDQUIT)  D<br/> . S TXT=$G(^OR(100,+ORID,8,ACT,.1,IX,0))<br/> . I ($$UP^XLFSTR(TXT)["QUANTITY:"),($$UP^XLFSTR(TXT)["REFILLS:") D<br/> . . S REFPOS=$F($$UP^XLFSTR(TXT),"REFILLS")-$L("REFILLS")-1<br/> . . S TXT=$E(TXT,1,REFPOS)_"Refills: "_PARM1<br/> . . S ^OR(100,+ORID,8,ACT,.1,IX,0)=TXT,NDQUIT=1 Q<br/> D GETBYIFN^ORWORR(.ORY,+ORID)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}