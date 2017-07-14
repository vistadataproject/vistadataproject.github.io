---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXQ GETQNAM<br/>
# ORWDXQ GETQNAM

Return current quick order name.

## Properties

Property | Value
--- | ---
Label | GETQNAM
Routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETQNAM^ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
Method Comment | Return current quick name
Input Parameters | CRC
Code | {::nomarkdown}<pre><code> N ROOT S ROOT="ORWDQ "_CRC,VAL=""<br/> I '$D(^ORD(101.41,"B",ROOT)) Q<br/> S DLG=$O(^ORD(101.41,"B",ROOT,0))<br/> I '$L(VAL) S VAL=$P($G(^ORD(101.41,DLG,0)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}