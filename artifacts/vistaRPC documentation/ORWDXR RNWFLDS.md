---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR RNWFLDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR RNWFLDS{:/}
 tag | {::nomarkdown}RNWFLDS{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return fields for renew action in format:    LST(0)=RenewType^Start^Stop^Refills^Pickup  LST(n)=Comments{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RNWFLDS^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Return fields for renew action
 Input parameters | {::nomarkdown}ORIFN{:/}
 First comment | {::nomarkdown}<pre> LST(0)=RenewType^Start^Stop^Refills^Pickup  LST(n)=Comments</pre>{:/}
 Code | {::nomarkdown}  N X0,DG,PKG,RNWTYPE,START,STOP,REFILLS,OROI<br> S ORIFN=+ORIFN,X0=^OR(100,ORIFN,0),DG=$P(X0,U,11),PKG=$P(X0,U,14)<br> S PKG=$E($P(^DIC(9.4,PKG,0),U,2),1,2),DG=$P(^ORD(100.98,DG,0),U,3)<br> S LST(0)=$S(PKG="OR":999,PKG="PS"&(DG="O RX"):140,PKG="PS"&(DG="UD RX"):130,PKG="PS"&(DG="NV RX"):145,1:0)<br> I +LST(0)=140 D<br> . N ORPICK,ORPREV<br> . S ORPICK=$$DEFPICK^ORWDPS1("")<br> . I ORPICK="" D<br> .. N D3<br> .. S D3=$G(^OR(100,ORIFN,3))<br> .. I $P(D3,"^",3)=11,$P(D3,"^",11)=2 S ORPREV=$P(D3,"^",5) I ORPREV]"" S ORPICK=$$VAL(ORPREV,"PICKUP")<br> .. I $P(D3,"^",3)'=11 S ORPICK=$$VAL(ORIFN,"PICKUP")<br> .. I ORPICK="" S ORPICK="M^by Mail"<br> . S LST(0)=LST(0)_U_U_U_+$$VAL(ORIFN,"REFILLS")_U_ORPICK<br> . ;D WPVAL(.LST,ORIFN,"COMMENT")<br> I +LST(0)=999 S LST(0)=LST(0)_U_$$VAL(ORIFN,"START")_U_$$VAL(ORIFN,"STOP")<br> S $P(LST(0),U,9)=0<br> S OROI=$O(^OR(100,+ORIFN,4.5,"ID","ORDERABLE",0))<br> Q:'OROI<br> S OROI=$G(^OR(100,+ORIFN,4.5,OROI,1))<br> Q:'OROI<br> S $P(LST(0),U,9)=$$ISCLOZ^ORALWORD(OROI)<br> I $P(LST(0),U,9) D<br> .N ORY,ORDFN,ORTMP<br> .S ORTMP=LST(0)<br> .K LST<br> .S LST(0)=ORTMP<br> .S ORDFN=$P(^OR(100,ORIFN,0),U,2)<br> .I $P(ORDFN,";",2)'="DPT(" Q<br> .S ORDFN=+ORDFN<br> .D ALLWORD^ORALWORD(.ORY,ORDFN,ORIFN,"E")<br> .M LST(1)=ORY{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}