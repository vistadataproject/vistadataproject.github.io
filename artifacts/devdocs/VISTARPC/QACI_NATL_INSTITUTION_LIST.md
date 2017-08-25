---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; QACI NATL INSTITUTION LIST<br/>
# QACI NATL INSTITUTION LIST

This RPC receives a list of station numbers from the Standard Data Services institution table std_institution. The list contains all station numbers that begin with the 3 character computing facility station number. The list is stored in the ^XTMP array, and is used in the pre-migrationdata cleanup option to make sure that any data references only validstation numbers.

## Properties

Property | Value
--- | ---
Label | ENLDSTA
MUMPS Implementation | [QACI2](http://code.osehra.org/dox/Routine_QACI2_source.html)
Return Type | SINGLE VALUE




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}