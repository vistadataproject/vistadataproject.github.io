---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX1 ORDMATCH<br/>
# ORWDX1 ORDMATCH

This RPC will accept a list of orders and each order status, if one of the order does not have a status it will return a false value.

## Properties

Property | Value
--- | ---
Label | ORDMATCH
MUMPS Implementation | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 
ORYARR | LIST |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ORDMATCH^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Input Parameters | DFN, ORYARR
Code | {::nomarkdown}<pre><code> N ACTION,CNT,IEN,MATCH,ORDERID,STATUS<br/> S CNT=0,MATCH=1<br/> F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0!(MATCH=0)  D<br/> . S ORDERID=$P(ORYARR(CNT),U),STATUS=$P(ORYARR(CNT),U,2)<br/> . ;*341 Set up Action before validation.<br/> . S IEN=$P(ORDERID,";"),ACTION=$P(ORDERID,";",2)<br/> . I ORDERID=0,$G(ACTION)="" Q<br/> . I STATUS=$P($G(^OR(100,IEN,3)),U,3) Q<br/> . I $P($G(^ORD(100.01,STATUS,0)),U)="DISCONTINUED/EDIT" Q<br/> . ;S MATCH=0<br/> . I $P($G(^OR(100,IEN,8,ACTION,0)),U,15)'=STATUS S MATCH=0<br/> S ORY=MATCH</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}