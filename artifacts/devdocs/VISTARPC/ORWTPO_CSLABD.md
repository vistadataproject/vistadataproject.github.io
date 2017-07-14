---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPO CSLABD<br/>
# ORWTPO CSLABD



## Properties

Property | Value
--- | ---
Label | CSLABD
Routine | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CSLABD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
Method Comment | RPC
First Comment | {::nomarkdown}<pre><code> get lab defaults</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N RNG<br/> S INFO=""<br/> F RNG="INPT","OUTPT" D<br/> .S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQLR DATE RANGE "_RNG,1,"I")_U</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}