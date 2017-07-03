---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP2 HS COMPONENT SUBS
# ORWRP2 HS COMPONENT SUBS

This RPC returns an array of ADHOC Health Summary subcomponents.

Property | Value
--- | ---
Label | COMPSUB
Routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [COMPSUB^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get subitems from a predefined Adhoc component
Input Parameters | ORSUB
Code | {::nomarkdown}<pre><code> I '$L($T(COMPSUB^GMTSADH5)) Q<br/> D COMPSUB^GMTSADH5(.ORY,ORSUB)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}