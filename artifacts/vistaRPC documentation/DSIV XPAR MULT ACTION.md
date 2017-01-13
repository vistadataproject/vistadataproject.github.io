---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR MULT ACTION 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR MULT ACTION{:/}
 tag | {::nomarkdown}MULTA{:/}
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is a multi-function front end to the Parameter APIs.  It allows youwith a single RPC call to take edit type actions on severalparameter/entity/instance combinations. You can only do these actions:  add, change, or delete Each entry in the passed list is treated as if it was a separate RPCcall.  Thus each entry is totally independent of the others.  So you canmix and match parameters, entities, instances, and actions.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIVLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DSIVLIST - required - p1^p2^p3^p4^p5^p6^p7  where For p1 - p6 see the equivalent DSIC XPAR xxxxxx RPC definition to seewhich p1 - p6 are required for the action requested   p1 := entity - default to USR  p2 := parameter name  p3 := instance  p4 := value  p5 := new instance value  p6 := format for GET1 call  p7 := action to be taken - must be ADD, CHG, or DEL        if p7 = \ADD\ then for this list element perform ADD function        if p7 = \CHG\ then for this list element perform change value                 for a parameter/entity/instance        if p7 = \DEL\ then for this list element perform delete of                of a parameter/entity/instance{:/} | 




 Generated on January 13th 2017, 6:24:32 am