---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPAR REPLACE INST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR REPLACE INST{:/}
 tag | {::nomarkdown}REPL{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}For an existing entity/parameter/instance, this will change the value of that instance{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = p1~p2~p3~~p5  where  p1 - entity - optional - defaults to \USR\  p2 - parameter - required  p3 - instance - required - current instance value  p5 - required - replacement value for current instance{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}