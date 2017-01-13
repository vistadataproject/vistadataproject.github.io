---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPAR DEL 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR DEL{:/}
 tag | {::nomarkdown}DEL{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete an existing parameter for an entity for a specific instance{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3~p4 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance{:/} | 




 Generated on January 13th 2017, 6:44:47 am