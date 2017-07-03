---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS VALIDATE TIME
# OOPS VALIDATE TIME

This broker call will compare two dates (which are part of the input) based on the 3rd input paramater which is a flag indicating which type of compare should be done.  The RESULTS output indicates whether the dates pass (VALIDDATE) or fail (DATE ERROR) the compare.

Property | Value
--- | ---
Label | DTVALID
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IDT | LITERAL |  | true | This is the base date/time in external format. In the case of testingwhether one date is before another, this would be the &quot;base&quot; date. 
PDT | LITERAL |  | true | This is the post date or benchmark date in external format.  In the example of testing if one date is earlier/less than another, this would be the latter date. 
FLAG | LITERAL |  | true | This input parm indicates the type of comparison to be done. -2 means PDT must be &lt;  IDT (The DAY only)-1 means PDT must be &lt;  IDT (The DAY&amp;TIME)0 means PDT must be &#x3D;  IDT (The DAY&amp;TIME)1 means PDT must be &gt;  IDT (The DAY&amp;TIME)2 means PDT must be &gt; IDT (The DAY only)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}