---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 HS COMP FILES<br/>
# ORWRP2 HS COMP FILES

This RPC gets a list of files to select from for the ADHOC Health Summary.

## Properties

Property | Value
--- | ---
Label | FILES
MUMPS Implementation | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
COMP | LITERAL |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [FILES^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get Files to select from for a component
Input Parameters | ORCOMP
First Comment | {::nomarkdown}<pre><code>RPC => ORWRP2 HS COMP FILES</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D FILES^GMTSADH5(.ORY,ORCOMP)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}