---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU DT<br/>
# ORWU DT

Returns date in internal VA FileMan format.

## Properties

Property | Value
--- | ---
Label | DT
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DT^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | Internal Fileman Date/Time
Input Parameters | X, %DT
First Comment | {::nomarkdown}<pre><code> change the '00:00' that could be passed so Fileman doesn't reject</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $L($P(X,"@",2)),("00000000"[$TR($P(X,"@",2),":","")) S $P(X,"@",2)="00:00:01"<br/> S %DT=$G(%DT,"TS") D ^%DT K %DT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}