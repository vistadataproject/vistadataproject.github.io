---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU GBLREF<br/>
# ORWU GBLREF

Returns the global reference for a particular file number.

## Properties

Property | Value
--- | ---
Label | GBLREF
MUMPS Implementation | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GBLREF^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | return global reference for file number
Input Parameters | FN
Code | {::nomarkdown}<pre><code> S VAL="" Q:'FN<br/> S VAL=$$ROOT^DILFD(+FN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}