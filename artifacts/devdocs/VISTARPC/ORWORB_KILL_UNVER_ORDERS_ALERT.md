---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORB KILL UNVER ORDERS ALERT<br/>
# ORWORB KILL UNVER ORDERS ALERT



## Properties

Property | Value
--- | ---
Label | KILUNVOR
Routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [KILUNVOR^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | Delete UNVERIFIED ORDER notification if none remaining within current admission/30 days
Input Parameters | ORDFN
Code | {::nomarkdown}<pre><code> N DFN,ORDG,ORLST,ORBDT,OREDT,ORDDT S ORDG=$$DG^ORQOR1("ALL")<br/> S OREDT=$$NOW^XLFDT<br/> S ORDDT=$$FMADD^XLFDT(OREDT,"-90")<br/> S DFN=ORDFN,VA200="" D INP^VADPT<br/> S ORBDT=$P($G(VAIN(7)),U)<br/> S ORBDT=$S('$L($G(ORBDT)):$$FMADD^XLFDT(OREDT,"-30"),1:ORBDT)  ;<= if no admission use past 30 days<br/> S ORBDT=$S(ORDDT>ORBDT:ORDDT,1:ORBDT)  ;max past days to use is 90 days<br/> D AGET^ORWORR(.ORLST,ORDFN,9,ORDG,ORBDT,OREDT)<br/> Q:+(@ORLST@(.1))  ;more left<br/> N XQAKILL,ORVP,ORNIFN<br/> S ORNIFN=$O(^ORD(100.9,"B","UNVERIFIED ORDER",0)),ORVP=ORDFN_";DPT("<br/> S XQAKILL=$$XQAKILL^ORB3F1(ORNIFN)<br/> I $D(XQAID) D DELETE^XQALERT<br/> I '$D(XQAID) S XQAID=$P($G(^ORD(100.9,ORNIFN,0)),U,2)_","_+ORVP_","_ORNIFN D DELETEA^XQALERT K XQAID</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}