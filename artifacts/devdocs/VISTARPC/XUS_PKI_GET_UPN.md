---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS PKI GET UPN<br/>
# XUS PKI GET UPN

This RPC gets the SUBJECT ALTERNATIVE NAME field from the New Person (#200) file field 501.2.  It is used to check that the correct PIV card has been put into the reader.

## Properties

Property | Value
--- | ---
Label | GETUPN
MUMPS Implementation | [XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETUPN^XUSER2](http://code.osehra.org/dox/Routine_XUSER2_source.html)
Method Comment | Get SUBJECT ALTERNATIVE NAME for PIV card check. -p580
Code | {::nomarkdown}<pre><code> S RET=$P($G(^VA(200,DUZ,501)),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}