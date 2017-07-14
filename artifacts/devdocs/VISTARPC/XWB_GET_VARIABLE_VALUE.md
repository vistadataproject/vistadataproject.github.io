---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XWB GET VARIABLE VALUE<br/>
# XWB GET VARIABLE VALUE

This RPC accepts the name of a variable which will be evaluated and itsvalue returned to the server.  For example, this RPC may be called witha parameter like DUZ which will be returned as 123456.

## Properties

Property | Value
--- | ---
Label | VARVAL
Routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VARVAL^XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
Method Comment | returns value of passed in variable
Input Parameters | VARIABLE
Code | {::nomarkdown}<pre><code> S RESULT=VARIABLE ;can do this with the REFERENCE type parameter</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}