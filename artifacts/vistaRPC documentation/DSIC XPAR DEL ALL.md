---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR DEL ALL 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR DEL ALL{:/}
 tag | {::nomarkdown}DELALL{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is used to delete the value for all instances of a parameter for a given entity{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name{:/} | 




 Generated on January 13th 2017, 6:15:57 am