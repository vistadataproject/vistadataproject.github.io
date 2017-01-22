---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RMIM GET PATIENT DME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RMIM GET PATIENT DME{:/}
 tag | {::nomarkdown}DME{:/}
 routine | [RMIMRP](http://code.osehra.org/dox/Routine_RMIMRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure will return a list of durable medical equipmentwhich has been issued to a patient within a date range.Required input consists of a single parameter representing theinternal entry number of a patient from file #2, and two datesin FileMan format. The three pieces will be delimited by the ^.The first element of the results array will indicate the number ofitems returned.  If and error occurs, the number will be negative andwill be followed by a ^ and a string of text describing the error.The other elements of the array will be constructed as follows:SHORT ITEM DESCRIPTION ^ TOTAL COST{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient internal entry number followed by date range for results.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}