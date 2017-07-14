---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 QOMEDALT<br/>
# ORWDPS1 QOMEDALT



## Properties

Property | Value
--- | ---
Label | QOMEDALT
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ODIEN | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [QOMEDALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Input Parameters | ODIEN
Code | {::nomarkdown}<pre><code> N ARRAY,IDIEN,ORDERID,PKG,PSTYPE,VALUE<br/> S ORY=0,PKG=+$P(^ORD(101.41,ODIEN,0),U,7)<br/> S PSTYPE=$S($$GET1^DIQ(9.4,PKG_",",1)="PSO":"O",1:"I")<br/> S ORDERID=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM","")) Q:ORDERID'>0<br/> S IDIEN=$O(^ORD(101.41,ODIEN,6,"D",ORDERID,"")) Q:IDIEN'>0<br/> S VALUE=$G(^ORD(101.41,ODIEN,6,IDIEN,1)) Q:VALUE'>0<br/> I $P($G(^ORD(101.43,VALUE,"PS")),U,6)=1 S ORY=VALUE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}