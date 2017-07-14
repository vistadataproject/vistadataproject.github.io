---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB NURSADMN<br/>
# ORWDXVB NURSADMN

This procedure checks the parameter OR VBECS SUPPRESS NURS ADMIN to seeif the Nursing Administration Order prompt/pop-up should be supressedafter a VBECS Blood Bank order has been created.

## Properties

Property | Value
--- | ---
Label | NURSADMN
Routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [NURSADMN^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Suppress Nursing Adiminstration Order Prompt
Code | {::nomarkdown}<pre><code> S OROOT=+$$GET^XPAR("DIV^SYS^PKG","OR VBECS SUPPRESS NURS ADMIN")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}