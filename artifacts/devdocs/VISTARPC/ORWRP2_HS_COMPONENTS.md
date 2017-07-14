---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 HS COMPONENTS<br/>
# ORWRP2 HS COMPONENTS

This RPC returns an array of the ADHOC Health Summary components.

## Properties

Property | Value
--- | ---
Label | COMP
Routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [COMP^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get ADHOC sub components (FILE 142.1)
First Comment | {::nomarkdown}<pre><code>RPC => ORWRP2 HS COMPONENTS<br/>Y(i)=(1)I;IFN^(2)Component Name [Abb]^(3)Occ Limit^(4)Time Limit^(5)Header Name^<br/>     (6)Hosp Loc Disp^(7)ICD Text Disp^(8)Prov Narr Disp^(9)Summary Order</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D COMP^GMTSADH5(.ORY)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}