---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR RNWFLDS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR RNWFLDS{:/}
 tag | {::nomarkdown}RNWFLDS{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return fields for renew action in format:    LST(0)=RenewType^Start^Stop^Refills^Pickup  LST(n)=Comments{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return fields for renew action
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | ```
 N X0,DG,PKG,RNWTYPE,START,STOP,REFILLS,OROI
 S ORIFN=+ORIFN,X0=^OR(100,ORIFN,0),DG=$P(X0,U,11),PKG=$P(X0,U,14)
 S PKG=$E($P(^DIC(9.4,PKG,0),U,2),1,2),DG=$P(^ORD(100.98,DG,0),U,3)
 S LST(0)=$S(PKG="OR":999,PKG="PS"&(DG="O RX"):140,PKG="PS"&(DG="UD RX"):130,PKG="PS"&(DG="NV RX"):145,1:0)
 I +LST(0)=140 D
 . N ORPICK,ORPREV
 . S ORPICK=$$DEFPICK^ORWDPS1("")
 . I ORPICK="" D
 .. N D3
 .. S D3=$G(^OR(100,ORIFN,3))
 .. I $P(D3,"^",3)=11,$P(D3,"^",11)=2 S ORPREV=$P(D3,"^",5) I ORPREV]"" S ORPICK=$$VAL(ORPREV,"PICKUP")
 .. I $P(D3,"^",3)'=11 S ORPICK=$$VAL(ORIFN,"PICKUP")
 .. I ORPICK="" S ORPICK="M^by Mail"
 . S LST(0)=LST(0)_U_U_U_+$$VAL(ORIFN,"REFILLS")_U_ORPICK
 . ;D WPVAL(.LST,ORIFN,"COMMENT")
 I +LST(0)=999 S LST(0)=LST(0)_U_$$VAL(ORIFN,"START")_U_$$VAL(ORIFN,"STOP")
 S $P(LST(0),U,9)=0
 S OROI=$O(^OR(100,+ORIFN,4.5,"ID","ORDERABLE",0))
 Q:'OROI
 S OROI=$G(^OR(100,+ORIFN,4.5,OROI,1))
 Q:'OROI
 S $P(LST(0),U,9)=$$ISCLOZ^ORALWORD(OROI)
 I $P(LST(0),U,9) D
 .N ORY,ORDFN,ORTMP
 .S ORTMP=LST(0)
 .K LST
 .S LST(0)=ORTMP
 .S ORDFN=$P(^OR(100,ORIFN,0),U,2)
 .I $P(ORDFN,";",2)'="DPT(" Q
 .S ORDFN=+ORDFN
 .D ALLWORD^ORALWORD(.ORY,ORDFN,ORIFN,"E")
 .M LST(1)=ORY```
 Leading comment lines | {::nomarkdown}LST(0)=RenewType^Start^Stop^Refills^Pickup  LST(n)=Comments{:/}




 Generated on January 13th 2017, 6:55:29 am