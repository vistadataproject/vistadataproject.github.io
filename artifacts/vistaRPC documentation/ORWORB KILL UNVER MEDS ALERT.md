---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORB KILL UNVER MEDS ALERT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB KILL UNVER MEDS ALERT{:/}
 tag | {::nomarkdown}KILUNVMD{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | KILUNVMD^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Delete UNVERIFIED MEDS notification if none remaining within current admission/30 days
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | ```  N DFN,ORDG,ORLST,ORBDT,OREDT,ORDDT S ORDG=$$DG^ORQOR1("RX")
 S OREDT=$$NOW^XLFDT
 S ORDDT=$$FMADD^XLFDT(OREDT,"-90")
 S DFN=ORDFN,VA200="" D INP^VADPT
 S ORBDT=$P($G(VAIN(7)),U)
 S ORBDT=$S('$L($G(ORBDT)):$$FMADD^XLFDT(OREDT,"-30"),1:ORBDT)  ;<= if no admission use past 30 days
 S ORBDT=$S(ORDDT>ORBDT:ORDDT,1:ORBDT)  ;max past days to use is 90 days
 D AGET^ORWORR(.ORLST,ORDFN,9,ORDG,ORBDT,OREDT)
 Q:+(@ORLST@(.1))  ;more left
 N XQAKILL,ORVP,ORNIFN
 S ORNIFN=$O(^ORD(100.9,"B","UNVERIFIED MEDICATION ORDER",0)),ORVP=ORDFN_";DPT("
 S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN)
 I $D(XQAID) D DELETE^XQALERT
 I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID```




 Generated on January 14th 2017, 7:26:35 am