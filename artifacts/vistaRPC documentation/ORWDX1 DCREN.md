---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 DCREN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 DCREN{:/}
 tag | {::nomarkdown}DCREN{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DCREN^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}ORYARR{:/}
 Code | {::nomarkdown}  N ACT,CNT,CNT1,I,OR3,ORG,ORGID,ORID,TEXT,STATUS<br> S CNT1=0<br> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0  D<br> .S ORGID=ORYARR(CNT)<br> .S ORID=+ORGID,ACT=$P(ORGID,";",2),TEXT=""<br> .S OR3=$G(^OR(100,ORID,3))<br> .;Make sure current order status is pending<br> .I $P($G(^ORD(100.01,$P(OR3,U,3),0)),U)'="PENDING" Q<br> .S ORG=$P($G(OR3),U,5) Q:ORG'>0<br> .;do not add original order if it is expired<br> .S STATUS=$P(^OR(100,ORG,3),U,3)<br> .I $P($G(^ORD(100.01,STATUS,0)),U)="EXPIRED" Q<br> .;Do not add original order if Stop date has pass<br> .I $P(^OR(100,ORG,0),U,9)'>$$NOW^XLFDT Q<br> .;make sure current order is a renewed order<br> .I $P(OR3,U,11)'=2 Q<br> .S ACT=+$P($G(^OR(100,ORG,3)),U,7)<br> .S CNT1=CNT1+1,ORY(CNT1)=ORGID_U_$P(OR3,U,5)_";"_ACT_U_TEXT{:/}


### CPRS

[fActivateDeactivate.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fActivateDeactivate.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}