---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIV XPAR CHGWP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR CHGWP{:/}
 tag | {::nomarkdown}CHGWP{:/}
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will change an instance of a Word processing parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, set to \SYS\ for                   current user.  p2 := required - parameter name  p3 := optional - instance (default is 1){:/} | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array of the text to be stored in the parameter. The format is: ARRAY(1)=1st line of TextARRAY(2)=2nd line of TextARRAY(n)=nth line of Text ARRAY(n)=\\ to store blank lines for formatting, such as paragraph             separation.{:/} | 




 Generated on January 14th 2017, 7:26:36 am