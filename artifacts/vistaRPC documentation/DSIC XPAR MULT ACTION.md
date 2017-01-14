---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC XPAR MULT ACTION 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR MULT ACTION{:/}
 tag | {::nomarkdown}MULT{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is a multi-function front end to the Parameter APIs.  It allows you with a single RPC call to take edit type actions on several parameter/entity/instance combinations. You can only do these actions:  add, change, or delete Each entry in the passed list is treated as if it was a separate RPC call.  Thus each entry is totally independent of the others.  So you can mix and match parameters, entities, instances, and actions.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSICLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DSICLIST - required - p1^p2^p3^p4^p5^p6^p7  where For p1 - p6 see the equivalent DSIC XPAR xxxxxx RPC definition to see which p1 - p6 are required for the action requested   p1 := entity - default to USR  p2 := parameter name  p3 := instance  p4 := value  p5 := new instance value  p6 := format for GET1 call  p7 := action to be taken - must be ADD, CHG, or DEL        if p7 = \ADD\ then for this list element perform ADD function        if p7 = \CHG\ then for this list element perform change value                 for a parameter/entity/instance        if p7 = \DEL\ then for this list element perform delete of                of a parameter/entity/instance{:/} | 




 Generated on January 14th 2017, 7:26:36 am