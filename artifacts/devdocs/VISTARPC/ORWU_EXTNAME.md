---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU EXTNAME
# ORWU EXTNAME

Returns the external form of a pointer value given the IEN and filenumber.

Property | Value
--- | ---
Label | EXTNAME
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [EXTNAME^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | return external form of pointer
Input Parameters | IEN, FN
First Comment | {::nomarkdown}<pre><code> IEN=internal number, FN=file number</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N REF S REF=$G(^DIC(FN,0,"GL")),VAL=""<br/> I $L(REF),+IEN S VAL=$P($G(@(REF_IEN_",0)")),U)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}