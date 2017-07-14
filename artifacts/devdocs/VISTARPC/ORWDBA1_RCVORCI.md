---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDBA1 RCVORCI<br/>
# ORWDBA1 RCVORCI

Receive Order Entry Billing Aware data from CPRS.

## Properties

Property | Value
--- | ---
Label | RCVORCI
Routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIAG | LIST | 255 | true | Array of Orders and Clinical Indicators returned from CPRS



## MUMPS Method Description

Property | Value
--- | ---
Method | [RCVORCI^ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
Method Comment | Receive order related Clinical Indicators &amp; Diagnoses from GUI
Input Parameters | DIAG
First Comment | {::nomarkdown}<pre><code> Store data in ^OR(100,ODN,5.1) & ^OR(100,0DN,5.2)<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DXIEN,ODN,ORIEN,SCI,OCDXCT,OCT<br/> S ODN="",OCDXCT=0,Y=""<br/> F  S ODN=$O(DIAG(ODN)) Q:ODN=""  D<br/> . S ORIEN=$P(DIAG(ODN),";",1)  ;Order IEN<br/> . I ORIEN'?1N.N S Y=0 Q<br/> . K ^OR(100,ORIEN,5.1) ;Clear currently stored diagnosis for rewrite<br/> . ; Data from Delphi format: ORIEN;11CNNNCNN^exDx1^exDx2^exDx3^exDx4<br/> . ; Convert 8 Tx Factors<br/> . S SCI=$$TFGUIGBL($RE($E($RE($P(DIAG(ODN),U)),1,8)))<br/> . S ^OR(100,ORIEN,5.2)=SCI  ;Store TFs (SC,MST,AO,IR,EC,HNC,CV,SHD)<br/> . ; Get order date for CSV/CTD/HIPAA<br/> . S ORFMDAT=$$ORFMDAT^ORWDBA3(ORIEN)<br/> . ; Go through the diagnoses entered<br/> . F OCT=2:1 Q:$P(DIAG(ODN),U,OCT)=""  D<br/> .. S DXIEN=$P($$ICDDATA^ICDXCODE("DIAGNOSIS",$P(DIAG(ODN),U,OCT),ORFMDAT),U,1)  ;Dx IEN<br/> .. I DXIEN=-1!(DXIEN="") Q  ;No or invalid code passed in<br/> .. S OCDXCT=OCDXCT+1<br/> .. S ^OR(100,ORIEN,5.1,0)="^100.051PA^"_OCDXCT_U_OCDXCT ;Set 5.1 zero node<br/> .. S ^OR(100,ORIEN,5.1,OCDXCT,0)=DXIEN  ;Store a diagnosis for order<br/> .. S ^OR(100,ORIEN,5.1,"B",DXIEN,OCDXCT)="" ;Index diagnosis for order<br/> S:Y="" Y=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}