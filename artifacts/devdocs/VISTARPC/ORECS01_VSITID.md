---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORECS01 VSITID<br/>
# ORECS01 VSITID



## Properties

Property | Value
--- | ---
Label | VSITID
MUMPS Implementation | [ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VSITID^ORECS01](http://code.osehra.org/dox/Routine_ORECS01_source.html)
Method Comment | Return Visit IEN ptr to #9000010
Input Parameters | VSTSTR
First Comment | {::nomarkdown}<pre><code>VSTSTR=HospLoc;DateTime;Category;PtIEN</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DTREF,PTID<br/> S ORY=0<br/> S DTREF=9999999-$P($P(VSTSTR,";",2),".")_"."_$P($P(VSTSTR,";",2),".",2)<br/> S PTID=+$P(VSTSTR,";",4)<br/> S:$D(^AUPNVSIT("AA",PTID,DTREF)) ORY=$O(^(DTREF,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rECS.pas">rECS.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}