---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPAR GET ALL FOR ENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR GET ALL FOR ENT{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will get all instances of a parameter for an entity{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~~~~p6 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p6 := optional - format code determines return values       Q - internal instance, internal value       E - external instance, external value       N - external instance, internal value       B - internal & external instances and values           [default value] Actually, p6 is ignored and is always set to B{:/} | 




 Generated on January 13th 2017, 7:11:27 am