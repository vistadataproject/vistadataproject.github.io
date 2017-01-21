---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB KILL EXPIR OI ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL EXPIR OI ALERT{:/}
 tag | {::nomarkdown}KILEXOI{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Patient DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}Alert type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to type of alert in the OE/RR NOTIFICATIONS file (100.9). This caneither be of type FLAGGED OI EXPIRING - INPT (#64) or FLAGGED OI EXPIRING- OUTPT (#65).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | KILEXOI^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Delete expiring flagged OI notification if no flagged expiring OI remaining
 Input parameters | {::nomarkdown}ORDFN, ORNIFN{:/}
 Code | {::nomarkdown}  N ORDG,ORLST S ORDG=$$DG^ORQOR1("ALL")<br> D AGET^ORWORR(.ORLST,ORDFN,5,ORDG)<br> Q:+(@ORLST@(.1))  ;more left<br> N XQAKILL,ORVP<br> S ORVP=ORDFN_";DPT("<br> S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN) ; flagged expiring OI notifications<br> I $D(XQAID) D DELETE^XQALERT<br> I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}