---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB KILL EXPIR MED ALERT<br/>
# ORWORB KILL EXPIR MED ALERT

Evaluate expiring med orders.  If none remain, kill current alert forcurrent user.  Kill for other users if alert so defined.

## Properties

Property | Value
--- | ---
Label | KILEXMED
Routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [KILEXMED^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | Delete expiring meds notification if no expiring meds remaining
Input Parameters | ORDFN
Code | {::nomarkdown}<pre><code> N ORDG,ORLST S ORDG=$$DG^ORQOR1("RX")<br/> D AGET^ORWORR(.ORLST,ORDFN,5,ORDG)<br/> Q:+(@ORLST@(.1))  ;more left<br/> N XQAKILL,ORNIFN,ORVP,ORIO S OROI=""<br/> F OROI="INPT","OUTPT" D<br/> .S ORNIFN=$O(^ORD(100.9,"B","MEDICATIONS EXPIRING - "_OROI,0)),ORVP=ORDFN_";DPT("<br/> .Q:'$L($G(ORNIFN))<br/> .S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN) ; expiring meds notif<br/> .I $D(XQAID) D DELETE^XQALERT<br/> .I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}