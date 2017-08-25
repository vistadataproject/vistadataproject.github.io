---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCH LOADSIZ<br/>
# ORWCH LOADSIZ

This RPC loads the size (bounds) for a particular CPRS GUI control. 

## Properties

Property | Value
--- | ---
Label | LOADSIZ
MUMPS Implementation | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [LOADSIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Method Comment | return the bounds for a particular control
Input Parameters | NAM
Code | {::nomarkdown}<pre><code> I NAM="" S VAL="" Q<br/> S VAL=$$GET^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}