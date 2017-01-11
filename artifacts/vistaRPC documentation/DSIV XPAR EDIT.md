---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR EDIT 

 property | value 
--- | --- 
 label | DSIV XPAR EDIT
 tag | CHG
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | SINGLE VALUE
 description | This is used to change the value or delete an existing parameter value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~p4 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance p4 := required - value - see XPAR documentation | 




 Generated on January 11th 2017, 7:15:04 am