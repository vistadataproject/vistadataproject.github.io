---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ GAF HX<br/>
# YTQ GAF HX

Returns all GAF diagnosis for a specified Patient Input: YS("DFN")= Pt DFN       YS("END")- Date of last GAF requested [optional]       YS("BEGIN") : Date of first GAF requested [optional]        YS("LIMIT"): To limit output to the last x diagnosis Output:        YSDATA(1): [DATA] or [ERROR]        YSDATA(X): 627.8 IEN = external date of dx^GAF^rater DUZ^Rater                    name^error msg

## Properties

Property | Value
--- | ---
Label | GAFRET
MUMPS Implementation | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}