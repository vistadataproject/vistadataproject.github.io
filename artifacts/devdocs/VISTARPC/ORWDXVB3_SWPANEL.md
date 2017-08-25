---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB3 SWPANEL<br/>
# ORWDXVB3 SWPANEL

This RPC checks the value of the parameter OR VBECS DIAGNOSTIC PANEL 1STto determine the location of the Diagnostic and Component panels on theVBECS order dialog.

## Properties

Property | Value
--- | ---
Label | SWPANEL
MUMPS Implementation | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SWPANEL^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Method Comment | Switch the location of the Diagnostic and Component panels on VBECS Order Dialog
Code | {::nomarkdown}<pre><code> S OROOT=+$$GET^XPAR("ALL","OR VBECS DIAGNOSTIC PANEL 1ST",1,"I")<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}