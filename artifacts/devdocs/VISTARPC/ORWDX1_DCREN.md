---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX1 DCREN<br/>
# ORWDX1 DCREN



## Properties

Property | Value
--- | ---
Label | DCREN
Routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORYARR | LIST |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [DCREN^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Input Parameters | ORYARR
Code | {::nomarkdown}<pre><code> N ACT,CNT,CNT1,I,OR3,ORG,ORGID,ORID,TEXT,STATUS<br/> S CNT1=0<br/> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0  D<br/> .S ORGID=ORYARR(CNT)<br/> .S ORID=+ORGID,ACT=$P(ORGID,";",2),TEXT=""<br/> .S OR3=$G(^OR(100,ORID,3))<br/> .;Make sure current order status is pending<br/> .I $P($G(^ORD(100.01,$P(OR3,U,3),0)),U)'="PENDING" Q<br/> .S ORG=$P($G(OR3),U,5) Q:ORG'>0<br/> .;do not add original order if it is expired<br/> .S STATUS=$P(^OR(100,ORG,3),U,3)<br/> .I $P($G(^ORD(100.01,STATUS,0)),U)="EXPIRED" Q<br/> .;Do not add original order if Stop date has pass<br/> .I $P(^OR(100,ORG,0),U,9)'>$$NOW^XLFDT Q<br/> .;make sure current order is a renewed order<br/> .I $P(OR3,U,11)'=2 Q<br/> .S ACT=+$P($G(^OR(100,ORG,3)),U,7)<br/> .S CNT1=CNT1+1,ORY(CNT1)=ORGID_U_$P(OR3,U,5)_";"_ACT_U_TEXT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fActivateDeactivate.pas">fActivateDeactivate.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}