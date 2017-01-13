---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX1 DCREN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX1 DCREN{:/}
 tag | {::nomarkdown}DCREN{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORYARR{:/}
 Lines | ```
 N ACT,CNT,CNT1,I,OR3,ORG,ORGID,ORID,TEXT,STATUS
 S CNT1=0
 S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0  D
 .S ORGID=ORYARR(CNT)
 .S ORID=+ORGID,ACT=$P(ORGID,";",2),TEXT=""
 .S OR3=$G(^OR(100,ORID,3))
 .;Make sure current order status is pending
 .I $P($G(^ORD(100.01,$P(OR3,U,3),0)),U)'="PENDING" Q
 .S ORG=$P($G(OR3),U,5) Q:ORG'>0
 .;do not add original order if it is expired
 .S STATUS=$P(^OR(100,ORG,3),U,3)
 .I $P($G(^ORD(100.01,STATUS,0)),U)="EXPIRED" Q
 .;Do not add original order if Stop date has pass
 .I $P(^OR(100,ORG,0),U,9)'>$$NOW^XLFDT Q
 .;make sure current order is a renewed order
 .I $P(OR3,U,11)'=2 Q
 .S ACT=+$P($G(^OR(100,ORG,3)),U,7)
 .S CNT1=CNT1+1,ORY(CNT1)=ORGID_U_$P(OR3,U,5)_";"_ACT_U_TEXT```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORYARR{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am