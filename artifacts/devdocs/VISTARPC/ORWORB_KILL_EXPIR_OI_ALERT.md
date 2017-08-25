---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB KILL EXPIR OI ALERT<br/>
# ORWORB KILL EXPIR OI ALERT

Evaluate expiring flagged orderable item orders. If none remain, killcurrent alert for current user.  Kill for other users if alert so defined.

## Properties

Property | Value
--- | ---
Label | KILEXOI
MUMPS Implementation | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient DFN | LITERAL | 32 | true | Patient DFN
Alert type | LITERAL | 8 | true | Pointer to type of alert in the OE/RR NOTIFICATIONS file (100.9). This caneither be of type FLAGGED OI EXPIRING - INPT (#64) or FLAGGED OI EXPIRING- OUTPT (#65).



## MUMPS Method Description

Property | Value
--- | ---
Method | [KILEXOI^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | Delete expiring flagged OI notification if no flagged expiring OI remaining
Input Parameters | ORDFN, ORNIFN
Code | {::nomarkdown}<pre><code> N ORDG,ORLST S ORDG=$$DG^ORQOR1("ALL")<br/> D AGET^ORWORR(.ORLST,ORDFN,5,ORDG)<br/> Q:+(@ORLST@(.1))  ;more left<br/> N XQAKILL,ORVP<br/> S ORVP=ORDFN_";DPT("<br/> S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN) ; flagged expiring OI notifications<br/> I $D(XQAID) D DELETE^XQALERT<br/> I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}