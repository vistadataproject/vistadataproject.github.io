---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA VALID 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA VALID{:/}
 tag | {::nomarkdown}VALID{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns an error message if the selected action is not valid for aparticular CPRS GUI order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VALID^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Is action valid for order?
 Input parameters | {::nomarkdown}ORID<br/>ACTION<br/>ORNP<br/>ORWNAT{:/}
 Code | ```  N ORACT,ORVP,ORVER,ORIFN,PRTID S VAL="",PRTID=0
 I +ORID=0 S VAL="This order has been deleted." Q
 I '$D(^OR(100,+ORID,0)) S VAL="This order has been deleted!" Q
 I ACTION="XFR",'$L($T(XFR^ORCACT01)) S ACTION="RW" ; for pre-POE
 N ORNSS S ORNSS=1
 I (ACTION="RN") D VALSCH^ORWNSS(.ORNSS,ORID)
 I ORNSS=0 S VAL="This order contains an invalid administration schedule." Q
 I (ACTION="RN") D ISVALIV^ORWDPS33(.VAL,ORID,ACTION) I $L(VAL)>0 Q
 S ORIFN=ORID,ORVP=$P(^OR(100,+ORID,0),U,2)  ; ORCACT0 expects
 I (ACTION="RN") D  Q:$L(VAL)
 . N DLG S DLG=$P(^OR(100,+ORID,0),U,5) Q:DLG'[";ORD(101.41,"
 . I $G(^ORD(101.41,+DLG,3))'["PROVIDER^ORCDPSIV" Q
 . D AUTH^ORWDPS32(.VAL,ORNP)
 . I VAL S VAL=$P(VAL,U,2)
 . E  S VAL=""
 S ORVER=$S(ACTION="CR":"R",$D(^XUSEC("ORELSE",DUZ)):"N",$D(^XUSEC("OREMAS",DUZ)):"C",1:"^")
 I ACTION="CR" S ACTION="VR"
 I (ACTION="ES")!(ACTION="OC")!(ACTION="RS") S ORACT=ACTION ; why not defined???
 I (ACTION="VR"),'($D(^XUSEC("ORELSE",DUZ))!$D(^XUSEC("OREMAS",DUZ))) D  Q
 . S VAL="You are not authorized to verify these orders."
 I $L(VAL) Q
 N OIIEN,ISIV,IVOD
 S (ISIV,OIIEN,IVOD)=0
 I (ACTION="RW")!(ACTION="XX")!(ACTION="XFR") D  Q:$L(VAL)
 . S ISIV=$P(^OR(100,+ORID,0),U,11)
 . I ISIV,($P(^ORD(100.98,ISIV,0),U,3)="IV RX") S IVOD=1
 . D:'IVOD GTORITM^ORWDXR(.OIIEN,+ORID)
 . D:OIIEN ISACTOI(.VAL,OIIEN) I $L(VAL)>0 Q
 . N DLG,FRM
 . S DLG=$P(^OR(100,+ORID,0),U,5),FRM=0
 . I $P(DLG,";",2)'="ORD(101.41," S DLG=0
 . I DLG D FORMID^ORWDXM(.FRM,+DLG)
 . I '(DLG&FRM) D
 . . S VAL="Copy & Change are not implemented for this order that predates CPRS."
 N OREBUILD
 I $$VALID^ORCACT0(ORID,ACTION,.VAL,$G(ORWNAT)) S VAL="" ; VAL=error
 I ACTION="RN",$$UPCTCHK(ORID) S VAL="Cannot renew this order due to an illegal character ""^"" in the comments or patient instructions."
 I ACTION="RW",$$UPCTCHK(ORID) S VAL="Cannot copy this order due to an illegal character ""^"" in the comments or patient instructions."```




 Generated on January 14th 2017, 7:26:35 am