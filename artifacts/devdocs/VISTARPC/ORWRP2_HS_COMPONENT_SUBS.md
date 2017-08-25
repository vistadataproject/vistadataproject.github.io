---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 HS COMPONENT SUBS<br/>
# ORWRP2 HS COMPONENT SUBS

This RPC returns an array of ADHOC Health Summary subcomponents.

## Properties

Property | Value
--- | ---
Label | COMPSUB
MUMPS Implementation | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [COMPSUB^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get subitems from a predefined Adhoc component
Input Parameters | ORSUB
Code | {::nomarkdown}<pre><code> I '$L($T(COMPSUB^GMTSADH5)) Q<br/> D COMPSUB^GMTSADH5(.ORY,ORSUB)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}