---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXM FORMID<br/>
# ORWDXM FORMID

Return the FormID for a dialog entry.

## Properties

Property | Value
--- | ---
Label | FORMID
MUMPS Implementation | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [FORMID^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Method Comment | Return the FormID for a dialog
Input Parameters | DLG
Code | {::nomarkdown}<pre><code> S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5) Q:VAL<br/> I $P($G(^ORD(101.41,DLG,0)),U,4)="Q" D<br/> . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br/> . S DLG=$$DEFDLG^ORWDXQ(DGRP) Q:'DLG<br/> . S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5)<br/> I 'VAL,$P($G(^ORD(101.41,DLG,0)),U,7)=$O(^DIC(9.4,"C","OR",0)) D<br/> . S VAL=152  ; use generic "on the fly" form</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}