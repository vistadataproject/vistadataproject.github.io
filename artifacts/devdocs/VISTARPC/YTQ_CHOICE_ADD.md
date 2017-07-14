---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ CHOICE ADD<br/>
# YTQ CHOICE ADD

This API is to be used to enter a new MH CHOICE 601.75. It searches for already present choices and if available returns that 601.75 ien. Also checked are non-case sensitive matches. Input: TEXT as text of the choice        FORCE: set as Y to force an add when there is a non case sensitive match Output: error and message or        601.75 ien added        Question Force returned when Force not equal Y and non case sensitive match found.

## Properties

Property | Value
--- | ---
Label | ADDCH
Routine | [YTQAPI4](http://code.osehra.org/dox/Routine_YTQAPI4_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}