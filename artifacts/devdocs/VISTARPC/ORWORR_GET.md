---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORR GET<br/>
# ORWORR GET

Returns a list of orders & and associated fields and text.

## Properties

Property | Value
--- | ---
Label | GET
Routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GET^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Method Comment | procedure
Input Parameters | DFN, FILTER, GROUPS
Code | {::nomarkdown}<pre><code> Q  ; don't call until using same treating specialty logic as AGET<br/> N ORLIST,ORIFN,X0,X3,X8,IDX,IFN,ACT,PRV,LN,TXT,STRT,STOP,CSTS,EYE,DEA ;PKI<br/> K ^TMP("ORR",$J)<br/> S (IDX,LST)=0 S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2<br/> D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"","","",0,1)<br/> S EYE=0 F  S EYE=$O(^TMP("ORR",$J,ORLIST,EYE)) Q:'EYE  S IFN=^(EYE) D<br/> . S ACT=$P(IFN,";",2),IFN=+IFN,X0=^OR(100,IFN,0),X3=^(3),X8=^(8,ACT,0)<br/> . D GETFLDS<br/> K ^TMP("ORR",$J)<br/> G EXIT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}