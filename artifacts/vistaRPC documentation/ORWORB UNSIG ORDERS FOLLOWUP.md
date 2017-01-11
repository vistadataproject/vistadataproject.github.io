---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB UNSIG ORDERS FOLLOWUP 

 property | value 
--- | --- 
 label | ORWORB UNSIG ORDERS FOLLOWUP
 tag | ESORD
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | SINGLE VALUE
 description | After viewing unsigned orders for a patient via an alert, evaluateswhether the alert should be deleted for the current user. The following two exception conditions exist when determining how alertdeletion will occur.  In all other cases, alert deletion will occur whenthe patient has no unsigned orders. 1)      If the recipient of this alert does NOT have the ORES key, thealert will be deleted for that recipient after he reviews the unsignedorders.  2)      If the recipient has the ORES key and is NOT linked to the patientas attending, inpatient primary provider or via OE/RR teams, his alertwill be deleted when his unsigned orders are signed.  (If unsigned orderswritten by other providers for the patient remain, alerts for these other providers will not be deleted.)  For example, a consulting surgeon (withORES) places three unsigned orders for a patient.  He then receives an\Order requires electronic signature\ alert for the patient.  He uses the View Alerts follow-up action and is presented with ten unsigned orders forthe patient.  Only three of the ten orders are his.  The surgeon signs histhree unsigned orders.  If the surgeon is not linked to the patient asattending, inpatient primary providers or via OE/RR teams, the alert will be deleted (for him only.)   In most cases alert deletion will occur when the patient has no unsignedorders.  For example, if a recipient has the ORES key and is linked to thepatient as attending, inpatient primary provider or via OE/RR teams, allunsigned orders for the patient must be signed before his alert isdeleted.


### Method description

 property | value 
--- | --- 
 Method comment | order(s) requiring electronic signature follow-up

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 60 | true | The alert ID. | 




 ###### Generated on January 11th 2017, 6:39:42 am