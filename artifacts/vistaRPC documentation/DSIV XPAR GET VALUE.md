---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR GET VALUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR GET VALUE{:/}
 tag | {::nomarkdown}GET1{:/}
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return the value of a single entity/param/instance.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3~~~p6  p1 := optional - entity - if not passed, set to \USR\ for                   current user  p2 := required - parameter name  p3 := optional - instance  p6 := optional - format code determines return values        Q - internal value - [default]        E - external value        B - internal^external values{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:35 am</p>{:/}