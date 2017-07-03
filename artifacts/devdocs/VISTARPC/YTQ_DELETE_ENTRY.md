---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTQ DELETE ENTRY
# YTQ DELETE ENTRY

Deletes an entry from a file.  Input: YSDATA=Array name to return success/error response       YS("FILE")=File number (e.g., 627.8)       YS("IEN")=record internal entry number (e.g., 100123)  Output: YSDATA(1)="[DATA]"        or        YSDATA(1)="[ERROR]"        YSDATA(2)="error message" Example: > S YSDATA="TEST",YS("FILE")=627.8,YS("IEN")=100123 > D DELENTRY^YTQAPI6(.YSDATA,.YS)

Property | Value
--- | ---
Label | DELENTRY
Routine | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}