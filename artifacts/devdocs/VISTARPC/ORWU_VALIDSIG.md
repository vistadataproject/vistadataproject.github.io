---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU VALIDSIG<br/>
# ORWU VALIDSIG

Validates a broker encrypted electronic signature.

## Properties

Property | Value
--- | ---
Label | VALIDSIG
MUMPS Implementation | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDSIG^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | returns TRUE if valid electronic signature
Input Parameters | X
Code | {::nomarkdown}<pre><code> S X=$$DECRYP^XUSRB1(X),ESOK=0                   ; network encrypted<br/> D HASH^XUSHSHP<br/> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}