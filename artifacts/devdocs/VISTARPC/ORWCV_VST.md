---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCV VST<br/>
# ORWCV VST

This RPC returns a list of appointments and admissions for a patient basedon parameters that define the beginning and ending range for CPRS GUI.

## Properties

Property | Value
--- | ---
Label | VST1
Routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [VST1^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Input Parameters | DFN, BEG, END, SKIP
Code | {::nomarkdown}<pre><code> N ERR,ERRMSG<br/> S ERR=0 ; kludge to return errors<br/> Q:'$G(DFN)<br/> D VST(.ORVISIT,DFN,.BEG,.END,$G(SKIP),.ERR,.ERRMSG)<br/> I ERR K ORVISIT S ORVISIT(1)=ERRMSG</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}