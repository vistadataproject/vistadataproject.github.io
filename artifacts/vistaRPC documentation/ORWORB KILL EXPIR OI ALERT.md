---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR OI ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL EXPIR OI ALERT{:/}
 tag | {::nomarkdown}KILEXOI{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Delete expiring flagged OI notification if no flagged expiring OI remaining
 Input Parameters | {::nomarkdown}ORDFN<br/>ORNIFN{:/}
 Lines | ```
 N ORDG,ORLST S ORDG=$$DG^ORQOR1("ALL")
 D AGET^ORWORR(.ORLST,ORDFN,5,ORDG)
 Q:+(@ORLST@(.1))  ;more left
 N XQAKILL,ORVP
 S ORVP=ORDFN_";DPT("
 S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN) ; flagged expiring OI notifications
 I $D(XQAID) D DELETE^XQALERT
 I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}Alert type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to type of alert in the OE/RR NOTIFICATIONS file (100.9). This caneither be of type FLAGGED OI EXPIRING - INPT (#64) or FLAGGED OI EXPIRING- OUTPT (#65).{:/} | 




 Generated on January 13th 2017, 6:55:29 am