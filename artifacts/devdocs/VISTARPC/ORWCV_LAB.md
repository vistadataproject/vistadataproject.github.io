---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCV LAB<br/>
# ORWCV LAB

Returns a list of labs to display on the CPRS GUI cover sheet for apatient.

## Properties

Property | Value
--- | ---
Label | LAB
MUMPS Implementation | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LAB^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Method Comment | return labs for patient
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> D:$L($T(STRT2^AWCMCPR1)) STRT2^AWCMCPR1<br/> D LIST^ORQOR1(.LST,DFN,"LAB",4,"T-"_$$RNGLAB(DFN),"T","AW",1)<br/> D:$L($T(END^AWCMCPR1)) END^AWCMCPR1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}