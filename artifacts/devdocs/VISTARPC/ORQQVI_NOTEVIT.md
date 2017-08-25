---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI NOTEVIT<br/>
# ORQQVI NOTEVIT



## Properties

Property | Value
--- | ---
Label | NOTEVIT
MUMPS Implementation | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [NOTEVIT^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Input Parameters | DFN, NOTEIEN
Code | {::nomarkdown}<pre><code> N VSTR,NOTEDATE<br/> D NOTEVSTR^ORWPCE(.VSTR,NOTEIEN)<br/> Q:$P(VSTR,";",2)=""<br/> D FASTVIT(.ORY,DFN,$P(VSTR,";",2))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}