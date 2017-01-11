---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR EDIT 

 property | value 
--- | --- 
 label | DSIC XPAR EDIT
 tag | CHG
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | SINGLE VALUE
 description | This is used to change the value or delete an existing parameter value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~p4 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance p4 := required - value - see XPAR documentation | 




Generated on January 11th 2017, 6:34:23 am