---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT READ RPL 

 property | value 
--- | --- 
 label | ORQPT READ RPL
 tag | RPLREAD
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | ARRAY
 description | Passes global reference and other parameters, and receives a list of patients (up to 44 maximum) with IENs, for use in scrolling a Long List Box (LLB) componenet.


### Method description

 property | value 
--- | --- 
 Method comment | Read disk-based patient array from TMP.
 Leading comment lines | Variables used:,ORCNT   = Counter variable.,ORDIR   = Direction to move through list.,ORFROM  = Starting point from which to move through list.,ORI     = Counter variable.,ORIEN   = Record IEN holder.,ORJ     = Job number to use in ^TMP global root.,ORROOT  = ^TMP global file root.,ORZ     = Temporary value holder.,Y       = Returned array.