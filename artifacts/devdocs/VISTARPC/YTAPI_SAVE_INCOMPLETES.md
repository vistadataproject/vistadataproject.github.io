---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI SAVE INCOMPLETES<br/>
# YTAPI SAVE INCOMPLETES

API to save responses of partially completed psychological tests. Input:        DFN ;ien of file 2 Patient        YSCODE: code of test in file 604        YSNEXT: next item number to be answered        YSORDER: DUZ of staff ordering test        R1: array of answers 1-200        R2: array of answers 201-400        R3: array of answers 401-600 Output:        YSDATA(1)=[DATA]        YSDATA(2)=saved ok

## Properties

Property | Value
--- | ---
Label | SAVEINC
Routine | [YTAPI7](http://code.osehra.org/dox/Routine_YTAPI7_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}