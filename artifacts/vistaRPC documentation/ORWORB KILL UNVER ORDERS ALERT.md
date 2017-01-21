---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB KILL UNVER ORDERS ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL UNVER ORDERS ALERT{:/}
 tag | {::nomarkdown}KILUNVOR{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | KILUNVOR^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Delete UNVERIFIED ORDER notification if none remaining within current admission/30 days
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | {::nomarkdown}  N DFN,ORDG,ORLST,ORBDT,OREDT,ORDDT S ORDG=$$DG^ORQOR1("ALL")<br> S OREDT=$$NOW^XLFDT<br> S ORDDT=$$FMADD^XLFDT(OREDT,"-90")<br> S DFN=ORDFN,VA200="" D INP^VADPT<br> S ORBDT=$P($G(VAIN(7)),U)<br> S ORBDT=$S('$L($G(ORBDT)):$$FMADD^XLFDT(OREDT,"-30"),1:ORBDT)  ;<= if no admission use past 30 days<br> S ORBDT=$S(ORDDT>ORBDT:ORDDT,1:ORBDT)  ;max past days to use is 90 days<br> D AGET^ORWORR(.ORLST,ORDFN,9,ORDG,ORBDT,OREDT)<br> Q:+(@ORLST@(.1))  ;more left<br> N XQAKILL,ORVP,ORNIFN<br> S ORNIFN=$O(^ORD(100.9,"B","UNVERIFIED ORDER",0)),ORVP=ORDFN_";DPT("<br> S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN)<br> I $D(XQAID) D DELETE^XQALERT<br> I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}