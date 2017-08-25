---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXQ PUTQLST<br/>
# ORWDXQ PUTQLST

Save quick order list.

## Properties

Property | Value
--- | ---
Label | PUTQLST
MUMPS Implementation | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PUTQLST^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Method Comment | Save quick list
Input Parameters | DG, QLST
Code | {::nomarkdown}<pre><code> N PNM<br/> S PNM="ORWDQ USR"_DUZ_" "_$P(^ORD(100.98,DG,0),U,3)<br/> D QVSAVE^ORWUL(.VAL,PNM,.QLST)<br/> D EN^XPAR(DUZ_";VA(200,","ORWDQ QUICK VIEW","`"_DG,PNM)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}