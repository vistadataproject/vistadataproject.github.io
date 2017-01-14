---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV XPAR ADD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR ADD{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will add a new parameter value for an entity.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This string has different pieces for adding a new parameter for an entity DATA - required - p1~p2~p3~p4  p1 := optional - entity(s) - if not passed, set to \USR\ for                   current user  p2 := required - parameter name  p3 := optional - instance  p4 := required - value{:/} | 




 Generated on January 14th 2017, 7:26:36 am