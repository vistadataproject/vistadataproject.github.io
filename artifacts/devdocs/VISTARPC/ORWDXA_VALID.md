---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA VALID<br/>
# ORWDXA VALID

Returns an error message if the selected action is not valid for aparticular CPRS GUI order.

## Properties

Property | Value
--- | ---
Label | VALID
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALID^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Is action valid for order?
Input Parameters | ORID, ACTION, ORNP, ORWNAT
Code | {::nomarkdown}<pre><code> N ORACT,ORVP,ORVER,ORIFN,PRTID S VAL="",PRTID=0<br/> I +ORID=0 S VAL="This order has been deleted." Q<br/> I '$D(^OR(100,+ORID,0)) S VAL="This order has been deleted!" Q<br/> I ACTION="XFR",'$L($T(XFR^ORCACT01)) S ACTION="RW" ; for pre-POE<br/> N ORNSS S ORNSS=1<br/> I (ACTION="RN") D VALSCH^ORWNSS(.ORNSS,ORID)<br/> I ORNSS=0 S VAL="This order contains an invalid administration schedule." Q<br/> I (ACTION="RN") D ISVALIV^ORWDPS33(.VAL,ORID,ACTION) I $L(VAL)>0 Q<br/> S ORIFN=ORID,ORVP=$P(^OR(100,+ORID,0),U,2)  ; ORCACT0 expects<br/> I (ACTION="RN") D  Q:$L(VAL)<br/> . N DLG S DLG=$P(^OR(100,+ORID,0),U,5) Q:DLG'[";ORD(101.41,"<br/> . I $G(^ORD(101.41,+DLG,3))'["PROVIDER^ORCDPSIV" Q<br/> . D AUTH^ORWDPS32(.VAL,ORNP)<br/> . I VAL S VAL=$P(VAL,U,2)<br/> . E  S VAL=""<br/> S ORVER=$S(ACTION="CR":"R",$D(^XUSEC("ORELSE",DUZ)):"N",$D(^XUSEC("OREMAS",DUZ)):"C",1:"^")<br/> I ACTION="CR" S ACTION="VR"<br/> I (ACTION="ES")!(ACTION="OC")!(ACTION="RS") S ORACT=ACTION ; why not defined???<br/> I (ACTION="VR"),'($D(^XUSEC("ORELSE",DUZ))!$D(^XUSEC("OREMAS",DUZ))) D  Q<br/> . S VAL="You are not authorized to verify these orders."<br/> I $L(VAL) Q<br/> N OIIEN,ISIV,IVOD<br/> S (ISIV,OIIEN,IVOD)=0<br/> I (ACTION="RW")!(ACTION="XX")!(ACTION="XFR") D  Q:$L(VAL)<br/> . S ISIV=$P(^OR(100,+ORID,0),U,11)<br/> . I ISIV,($P(^ORD(100.98,ISIV,0),U,3)="IV RX") S IVOD=1<br/> . D:'IVOD GTORITM^ORWDXR(.OIIEN,+ORID)<br/> . D:OIIEN ISACTOI(.VAL,OIIEN) I $L(VAL)>0 Q<br/> . N DLG,FRM<br/> . S DLG=$P(^OR(100,+ORID,0),U,5),FRM=0<br/> . I $P(DLG,";",2)'="ORD(101.41," S DLG=0<br/> . I DLG D FORMID^ORWDXM(.FRM,+DLG)<br/> . I '(DLG&FRM) D<br/> . . S VAL="Copy & Change are not implemented for this order that predates CPRS."<br/> N OREBUILD<br/> I $$VALID^ORCACT0(ORID,ACTION,.VAL,$G(ORWNAT)) S VAL="" ; VAL=error<br/> I ACTION="RN",$$UPCTCHK(ORID) S VAL="Cannot renew this order due to an illegal character ""^"" in the comments or patient instructions."<br/> I ACTION="RW",$$UPCTCHK(ORID) S VAL="Cannot copy this order due to an illegal character ""^"" in the comments or patient instructions."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}