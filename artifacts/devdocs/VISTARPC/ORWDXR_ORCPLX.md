---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR ORCPLX<br/>
# ORWDXR ORCPLX



## Properties

Property | Value
--- | ---
Label | ORCPLX
MUMPS Implementation | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ORCPLX^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Return children orders of the complex order
Input Parameters | ORID, ORACT
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORID,0))<br/> N PKG,LACT,OELACT,ISNOW<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I PKG'="PS" Q<br/> N CHLDCNT,IDX,X3<br/> S (CHLDCNT,IDX)=0<br/> S:$L($G(^OR(100,+ORID,2,0))) CHLDCNT=$P(^(0),U,4)<br/> I 'CHLDCNT Q<br/> F  S IDX=$O(^OR(100,+ORID,2,IDX)) Q:'IDX  D<br/> . S (LACT,OELACT,ISNOW)=0<br/> . D ISNOW(.ISNOW,IDX)<br/> . Q:ISNOW<br/> . S X3=$G(^OR(100,IDX,3))<br/> . S LACT=$P(X3,U,7)<br/> . F  S OELACT=$O(^OR(100,IDX,8,OELACT),-1) Q:OELACT<br/> . S:OELACT>LACT LACT=OELACT<br/> . S ORY(IDX)=IDX_";"_LACT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}