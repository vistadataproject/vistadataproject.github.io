---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR MED ALERT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL EXPIR MED ALERT{:/}
 tag | {::nomarkdown}KILEXMED{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Evaluate expiring med orders.  If none remain, kill current alert forcurrent user.  Kill for other users if alert so defined.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | KILEXMED^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Delete expiring meds notification if no expiring meds remaining
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | ```  N ORDG,ORLST S ORDG=$$DG^ORQOR1("RX")
 D AGET^ORWORR(.ORLST,ORDFN,5,ORDG)
 Q:+(@ORLST@(.1))  ;more left
 N XQAKILL,ORNIFN,ORVP,ORIO S OROI=""
 F OROI="INPT","OUTPT" D
 .S ORNIFN=$O(^ORD(100.9,"B","MEDICATIONS EXPIRING - "_OROI,0)),ORVP=ORDFN_";DPT("
 .Q:'$L($G(ORNIFN))
 .S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN) ; expiring meds notif
 .I $D(XQAID) D DELETE^XQALERT
 .I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID```




 Generated on January 14th 2017, 7:26:35 am