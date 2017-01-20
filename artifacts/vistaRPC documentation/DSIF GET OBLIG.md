---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF GET OBLIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF GET OBLIG{:/}
 tag | {::nomarkdown}GETOBLIG{:/}
 routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Used to return a list of obligations based upon Control point and number of years past to return.  Example, control point 038 with 2 years, will return all obligations from control point 038 from today - two years to today on error returns -1^error message{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FUND CONTROL POINT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in the control point used to return current obligations.{:/} | 
| {::nomarkdown}FBYEAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Years to search for existing obligations, default is current year and last year.  If you input 3 it will display current year and go back 3 years.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}