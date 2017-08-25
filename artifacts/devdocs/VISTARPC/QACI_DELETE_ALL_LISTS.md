---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; QACI DELETE ALL LISTS<br/>
# QACI DELETE ALL LISTS

This RPC deletes the lists of legacy table data and Contact (ROC) numbersthat have been migrated from the old Patient Representative files to thenew PATS Oracle Tables. It is called from a Java routine after themigrated data has been deleted from the Oracle tables. This is done ONLYif for some reason a site has decided that they need to completely restartthe data migration to PATS.

## Properties

Property | Value
--- | ---
Label | ENDELALL
MUMPS Implementation | [QACI2C](http://code.osehra.org/dox/Routine_QACI2C_source.html)
Return Type | SINGLE VALUE




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}