---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB UNSIG ORDERS FOLLOWUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB UNSIG ORDERS FOLLOWUP{:/}
 tag | {::nomarkdown}ESORD{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}After viewing unsigned orders for a patient via an alert, evaluateswhether the alert should be deleted for the current user. The following two exception conditions exist when determining how alertdeletion will occur.  In all other cases, alert deletion will occur whenthe patient has no unsigned orders. 1)      If the recipient of this alert does NOT have the ORES key, thealert will be deleted for that recipient after he reviews the unsignedorders.  2)      If the recipient has the ORES key and is NOT linked to the patientas attending, inpatient primary provider or via OE/RR teams, his alertwill be deleted when his unsigned orders are signed.  (If unsigned orderswritten by other providers for the patient remain, alerts for these other providers will not be deleted.)  For example, a consulting surgeon (withORES) places three unsigned orders for a patient.  He then receives an\Order requires electronic signature\ alert for the patient.  He uses the View Alerts follow-up action and is presented with ten unsigned orders forthe patient.  Only three of the ten orders are his.  The surgeon signs histhree unsigned orders.  If the surgeon is not linked to the patient asattending, inpatient primary providers or via OE/RR teams, the alert will be deleted (for him only.)   In most cases alert deletion will occur when the patient has no unsignedorders.  For example, if a recipient has the ORES key and is linked to thepatient as attending, inpatient primary provider or via OE/RR teams, allunsigned orders for the patient must be signed before his alert isdeleted.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The alert ID.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ESORD^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | order(s) requiring electronic signature follow-up
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | {::nomarkdown}  K XQAKILL<br> N ORPT,ORDG,ORBXQAID,ORY,ORX,ORZ,ORDERS,ORDNUM,ORQUIT,ORBLMDEL<br> S ORBXQAID=XQAID,ORDERS=0,ORQUIT=0<br> S ORPT=$P($P(XQAID,";"),",",2)  ;get pt dfn from xqaid<br> S ORDG=$$DG^ORQOR1("ALL")<br> D EN^ORQ1(ORPT_";DPT(",ORDG,11,"","","",0,0)<br> S ORX="",ORX=$O(^TMP("ORR",$J,ORX)) Q:ORX=""  I +$G(^TMP("ORR",$J,ORX,"TOT"))<1 D DEL^ORB3FUP1(.ORY,ORBXQAID) K ^TMP("ORR",$J) Q<br> I '$D(^XUSEC("ORES",DUZ)) S XQAKILL=1 D DEL^ORB3FUP1(.ORY,ORBXQAID) K ^TMP("ORR",$J) Q<br> I $$PPLINK^ORQPTQ1(DUZ,ORPT)=0 D<br> .S ORX="" F  S ORX=$O(^TMP("ORR",$J,ORX)) Q:ORX=""!(ORDERS=1)  D<br> ..S ORZ="" F  S ORZ=$O(^TMP("ORR",$J,ORX,ORZ)) Q:+ORZ=0!(ORDERS=1)  D<br> ...S ORDNUM=^TMP("ORR",$J,ORX,ORZ)<br> ...;quit if this unsigned order's last action was made by the user<br> ...I DUZ=+$$UNSIGNOR^ORQOR2(ORDNUM) S ORDERS=1<br> .I ORDERS'=1 D  ;provider has no outstanding unsigned orders for pt<br> ..S XQAKILL=1 D DEL^ORB3FUP1(.ORY,ORBXQAID)  ;delete alert for this user<br> K ^TMP("ORR",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}