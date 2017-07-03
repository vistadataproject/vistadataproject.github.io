---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; QACI NATL INSTITUTION LIST
# QACI NATL INSTITUTION LIST

This RPC receives a list of station numbers from the Standard Data Services institution table std_institution. The list contains all station numbers that begin with the 3 character computing facility station number. The list is stored in the ^XTMP array, and is used in the pre-migrationdata cleanup option to make sure that any data references only validstation numbers.

Property | Value
--- | ---
Label | ENLDSTA
Routine | [QACI2](http://code.osehra.org/dox/Routine_QACI2_source.html)
Return Type | SINGLE VALUE




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}