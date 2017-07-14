---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ WP FILER<br/>
# YTQ WP FILER

Files single Word Processing Field.It REPLACES previous text if any with current text. Input:   FILEN= fileman file Number   IEN= internal record number (cannot create a new record)   FIELD= field to be modified (must be a WP field)   YS(1)= TEXT line 1   ...   YS(X)=TEXT line X Output:   [DATA] if no errors VS [ERROR]

## Properties

Property | Value
--- | ---
Label | WPED
Routine | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}