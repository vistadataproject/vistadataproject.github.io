---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC XPAR CHG WP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC XPAR CHG WP{:/}
 tag | {::nomarkdown}CHGWP{:/}
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will change an instance of a System Parameter that is of the Word Processing type.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, set to \SYS\ for                   current user.  p2 := required - parameter name  p3 := optional - instance (default is 1) RETURN PARAMETER DESCRIPTION: Returns \1^\ on success        \-1^Error Message\ on failure{:/} | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of the text to be stored in the parameter. Format is: ARRAY(1)=1st line of TextARRAY(2)=2nd line of TextARRAY(n)=nth line of Text ARRAY(n)=\\ to store blank lines for formatting, such as paragraph             separation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}