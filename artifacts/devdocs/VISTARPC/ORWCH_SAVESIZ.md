---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCH SAVESIZ<br/>
# ORWCH SAVESIZ

This RPC saves the size (bounds) for a particular CPRS GUI control.

## Properties

Property | Value
--- | ---
Label | SAVESIZ
MUMPS Implementation | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVESIZ^ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
Method Comment | save the bounds for a particular control
Input Parameters | NAM, VAL
First Comment | {::nomarkdown}<pre><code> NAM=frmName or frmName.ctrlName  VAL=left,top,width,height</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D EN^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,VAL,.ORERR)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fMeds.pas">fMeds.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}