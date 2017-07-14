---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX DGRP<br/>
# ORWDX DGRP

Returns the display group pointer for an order dialog.

## Properties

Property | Value
--- | ---
Label | DGRP
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DGRP^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | Display grp pointer for a dlg
Input Parameters | DLG
Code | {::nomarkdown}<pre><code> S DLG=$S($E(DLG)="`":+$P(DLG,"`",2),1:$O(^ORD(101.41,"AB",DLG,0))) ;kcm<br/> S VAL=$P($G(^ORD(101.41,DLG,0)),U,5)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}