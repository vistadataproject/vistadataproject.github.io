---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 HS SUBITEMS<br/>
# ORWRP2 HS SUBITEMS

This RPC expands a Laboratory Test panel to all it's sub-components forselection in the ADHOC Health Summary.

## Properties

Property | Value
--- | ---
Label | SUBITEM
MUMPS Implementation | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEST | LITERAL |  |  | This is the pointer value to the Laboratory Test (#60) file of the panelto be expanded.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SUBITEM^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get Subitems for a Test Panel
Input Parameters | ORTEST
First Comment | {::nomarkdown}<pre><code>RPC => ORWRP2 HS SUBITEMS</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D SUBITEM^GMTSADH5(.ORY,ORTEST)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}