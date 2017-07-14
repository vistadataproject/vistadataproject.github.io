---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTAPI ASI SAVE DATA<br/>
# YTAPI ASI SAVE DATA

This API saves data to the file 604, Addiction Severity Index.Required input: YSIEN ,ien of the file 604 entry                YS(1)=file 604 field number^value to save                        .                        .                YS(x)=file 604 field number^value to save Output: only to indicate success vs error                 YSDATA(1)=[DATA]                YSDATA(2)=OK ASI SAVE YSIEN

## Properties

Property | Value
--- | ---
Label | SAVASI
Routine | [YTAPI9](http://code.osehra.org/dox/Routine_YTAPI9_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}