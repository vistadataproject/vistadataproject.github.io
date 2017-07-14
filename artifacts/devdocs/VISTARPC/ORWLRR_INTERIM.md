---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWLRR INTERIM<br/>
# ORWLRR INTERIM



## Properties

Property | Value
--- | ---
Label | INTERIM
Routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [INTERIM^ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
Method Comment | Interim Report RPC (All Tests by Date)
Input Parameters | DFN, DATE1, DATE2
Code | {::nomarkdown}<pre><code> N ROOT<br/> S ROOT=$$SET()<br/> I $$REMOTE(.DFN,.ROOT) D INTERIM^LR7OGM(.ORY,DFN,DATE1,DATE2)<br/> D CLEAN(.ORY,.ROOT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}