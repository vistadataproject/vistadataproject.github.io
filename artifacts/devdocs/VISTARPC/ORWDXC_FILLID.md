---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC FILLID<br/>
# ORWDXC FILLID

Return the FillerID (namespace) for a dialog.

## Properties

Property | Value
--- | ---
Label | FILLID
Routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [FILLID^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Return the FillerID (namespace) for a dialog
Input Parameters | DLG
Code | {::nomarkdown}<pre><code> N DGRP<br/> S VAL="",DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br/> S DLG=$$DEFDLG^ORWDXQ(DGRP)<br/> S VAL=$P($G(^ORD(101.41,DLG,0)),U,7),VAL=$$NMSP^ORCD(VAL)<br/> I VAL="PS" D<br/> . N X<br/> . S X=$P($P($G(^ORD(100.98,DGRP,0)),U,3)," ")<br/> . I $L(X) S VAL="PS"_$S(X="UD":"I",1:X)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}