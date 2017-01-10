---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ DELETE TEST 

 property | value 
--- | --- 
 label | YTQ DELETE TEST
 tag | DELETEME
 routine | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
 return value type | ARRAY
 description | Deletes a test, quiz or survey. Only removes the top level entry (601.71) and entires in MH Instrument Content (601.76). Will not remove a test that HAS BEEN OPERATIONAL (ie has answers entered while OPERATIONAL is set).        input: CODE as test name      output: DATA vs ERROR